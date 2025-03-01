// File access to the user's Suibase installation (~/suibase)
//
// In particular, converts suibase.yaml to roughly matching Rust structs.
//
// The type 'Workdirs' is intended to be a global RwLock singleton view of
// the user filesystem (for relevant files only).
//
use home::home_dir;
use std::collections::HashMap;

use common::basic_types::*;

use std::path::{Path, PathBuf};

use anyhow::Result;

use super::Globals;

// workdir_idx are hard coded for performance.
pub const WORKDIR_IDX_MAINNET: WorkdirIdx = 0;
pub const WORKDIR_IDX_TESTNET: WorkdirIdx = 1;
pub const WORKDIR_IDX_DEVNET: WorkdirIdx = 2;
pub const WORKDIR_IDX_LOCALNET: WorkdirIdx = 3;

// List of all possible workdirs planned to be supported.
// The order is important since the position match the WORKDIR_IDX_* constants.
pub const WORKDIRS_KEYS: [&str; 4] = ["mainnet", "testnet", "devnet", "localnet"];

#[derive(Debug, Eq, PartialEq, Clone)]
pub struct Link {
    // A link in a suibase.yaml file.
    pub alias: String,
    pub selectable: bool,
    pub monitored: bool,
    pub rpc: Option<String>,
    pub metrics: Option<String>,
    pub ws: Option<String>,
    pub priority: u8,
}

impl Link {
    pub fn new(alias: String, rpc: String) -> Self {
        Self {
            alias,
            selectable: true,
            monitored: true,
            rpc: Some(rpc),
            metrics: None,
            ws: None,
            priority: u8::MAX,
        }
    }
}

#[derive(Debug, Eq, PartialEq)]
pub struct WorkdirUserConfig {
    // Created from parsing/merging suibase.yaml file(s) for a single workdir,
    // except for 'user_request' which is loaded from '.state/user_request'.
    user_request: Option<String>,
    user_request_start: bool, // true when user_request == "start"
    proxy_enabled: bool,
    proxy_port_number: u16,
    links_overrides: bool,
    links: HashMap<String, Link>,
}

impl WorkdirUserConfig {
    pub fn new() -> Self {
        Self {
            user_request: None,
            user_request_start: false,
            proxy_enabled: false,
            proxy_port_number: 0,
            links_overrides: false,
            links: HashMap::new(),
        }
    }

    pub fn user_request(&self) -> Option<&String> {
        self.user_request.as_ref()
    }

    pub fn is_user_request_start(&self) -> bool {
        self.user_request_start
    }

    pub fn is_proxy_enabled(&self) -> bool {
        self.proxy_enabled
    }

    pub fn proxy_port_number(&self) -> u16 {
        self.proxy_port_number
    }

    pub fn links_overrides(&self) -> bool {
        self.links_overrides
    }

    pub fn links(&self) -> &HashMap<String, Link> {
        &self.links
    }

    pub fn load_state_file(&mut self, path: &str) -> Result<()> {
        if let Ok(contents) = std::fs::read_to_string(path) {
            // Trim trailing newline.
            let contents = contents.trim_end().to_string();
            self.user_request_start = contents == "start";
            self.user_request = Some(contents);
        } else {
            // This means the workdir directory is not fully initialized.
            self.user_request = None;
            self.user_request_start = false;
        }
        Ok(())
    }

    pub fn load_and_merge_from_file(&mut self, path: &str) -> Result<()> {
        self.load_and_merge_from_file_internal(path, false)
    }

    pub fn load_and_merge_from_common_file(&mut self, path: &str) -> Result<()> {
        self.load_and_merge_from_file_internal(path, true)
    }

    fn load_and_merge_from_file_internal(&mut self, path: &str, common: bool) -> Result<()> {
        // This merge the config of the file with the current
        // configuration.
        //
        // For most variables, if a new value is defined in the
        // file it will overwrite.
        //
        // For most lists (e.g. links), they are merged.
        //
        // =====
        //
        // Example of suibase.yaml:
        //
        // proxy_enabled: false
        //
        // links:
        //  - alias: "localnet"
        //    rpc: "http://localhost:9000"
        //    ws: "ws://localhost:9000"
        //    priority: 12
        //  - alias: "localnet"
        //    enabled: false
        //    rpc: "http://localhost:9000"
        let contents = std::fs::read_to_string(path)?;
        let yaml: serde_yaml::Value = serde_yaml::from_str(&contents)?;

        // TODO: Lots of robustness could be added here...

        // proxy_enabled can be "true", "false" or "dev" for testing.
        //
        // "dev" is similar to "true" but allows for foreground execution
        // of the suibase-daemon... only the bash scripts care for this.
        if let Some(proxy_enabled) = yaml["proxy_enabled"].as_bool() {
            self.proxy_enabled = proxy_enabled;
        }
        if let Some(proxy_enabled) = yaml["proxy_enabled"].as_str() {
            self.proxy_enabled = proxy_enabled != "false";
        }

        if let Some(links_overrides) = yaml["links_overrides"].as_bool() {
            // Clear all the previous links!
            self.links.clear();
            self.links_overrides = links_overrides;
        }

        // Remaining variables do not make sense in common files, so ignore them.
        // TODO: Implement warning user for bad usage...
        if common {
            return Ok(());
        }

        if let Some(proxy_port_number) = yaml["proxy_port_number"].as_u64() {
            self.proxy_port_number = proxy_port_number as u16;
        }

        if let Some(links) = yaml["links"].as_sequence() {
            for link in links {
                if let Some(alias) = link["alias"].as_str() {
                    // TODO: Consider implementing link level member merging.

                    // Default of "enabled" is true. Allow the user to disable a single link.
                    //
                    // May allow later user finer control with "selectable" and "monitored".
                    let enabled = link["enabled"].as_bool().unwrap_or(true);
                    let selectable = enabled;
                    let monitored = enabled;

                    let rpc = link["rpc"].as_str().map(|s| s.to_string()); // Optional
                    let metrics = link["metrics"].as_str().map(|s| s.to_string()); // Optional
                    let ws = link["ws"].as_str().map(|s| s.to_string()); // Optional
                    let priority = link["priority"].as_u64().unwrap_or(u64::MAX) as u8;
                    let link = Link {
                        alias: alias.to_string(),
                        selectable,
                        monitored,
                        rpc,
                        metrics,
                        ws,
                        priority,
                    };
                    // Replace if already present.
                    self.links.insert(alias.to_string(), link);
                }
            }
        }

        Ok(())
    }
}

impl Default for WorkdirUserConfig {
    fn default() -> Self {
        Self::new()
    }
}

#[derive(Default, Debug, Clone)]
pub struct Workdir {
    idx: Option<ManagedVecU8>,
    name: String,
    path: PathBuf,
    state_path: PathBuf,
    suibase_state_file: PathBuf,
    suibase_yaml_user: PathBuf,
    suibase_yaml_default: PathBuf,
}

impl Workdir {
    pub fn idx(&self) -> Option<ManagedVecU8> {
        self.idx
    }

    pub fn name(&self) -> &str {
        &self.name
    }

    pub fn path(&self) -> &Path {
        &self.path
    }

    pub fn path_cloned(&self) -> PathBuf {
        self.path.clone()
    }

    pub fn state_path(&self) -> &Path {
        &self.state_path
    }

    pub fn is_user_request_start(&self) -> bool {
        // Return true if suibase_state_file() exists, and if so, check if its text
        // content is "start".
        //
        // If there is any error, return false.
        //
        if let Ok(contents) = std::fs::read_to_string(self.suibase_state_file()) {
            if contents.starts_with("start") {
                return true;
            }
        }
        false
    }

    pub fn suibase_state_file(&self) -> &Path {
        &self.suibase_state_file
    }

    pub fn suibase_yaml_user(&self) -> &Path {
        &self.suibase_yaml_user
    }

    pub fn suibase_yaml_default(&self) -> &Path {
        &self.suibase_yaml_default
    }
}

#[derive(Debug)]
pub struct GlobalsWorkdirsST {
    pub workdirs: ManagedVec<Workdir>,
    suibase_home: String,
    path: PathBuf,
    suibase_yaml_common: PathBuf,
}

impl GlobalsWorkdirsST {
    pub fn new() -> Self {
        let home_dir = if let Some(home_dir) = home_dir() {
            home_dir
        } else {
            // The program will likely fail to further initialize, so pointing to /tmp
            // in meantime is a reasonable default/fallback safe thing to do...
            PathBuf::from("/tmp")
        };

        let suibase_home = home_dir.join("suibase");

        // Generate all the suibase paths for state and config files of each WORKDIRS_KEYS.
        let mut workdirs = ManagedVec::new();

        let workdirs_path = suibase_home.join("workdirs");

        for workdir in WORKDIRS_KEYS.iter() {
            // Paths
            let path = workdirs_path.join(workdir);

            let state_path = path.join(".state");

            // Files
            let state = state_path.join("user_request");

            let user_yaml = path.join("suibase.yaml");

            let mut default_yaml = suibase_home.join("scripts");
            default_yaml.push("defaults");
            default_yaml.push(workdir);
            default_yaml.push("suibase.yaml");

            workdirs.push(Workdir {
                idx: None,
                name: workdir.to_string(),
                path,
                state_path,
                suibase_state_file: state,
                suibase_yaml_user: user_yaml,
                suibase_yaml_default: default_yaml,
            });
        }

        let suibase_yaml_common = workdirs_path.join("common").join("suibase.yaml");

        Self {
            suibase_home: suibase_home.to_string_lossy().to_string(),
            workdirs,
            path: workdirs_path,
            suibase_yaml_common,
        }
    }

    pub fn suibase_home(&self) -> &str {
        &self.suibase_home
    }

    pub fn path(&self) -> &Path {
        &self.path
    }

    pub fn suibase_yaml_common(&self) -> &Path {
        &self.suibase_yaml_common
    }

    // Given a path string, find the corresponding workdir object.
    // This also works if the string is simply the workdir name (e.g. "localnet").
    pub fn find_workdir(&self, path: &str) -> Option<(WorkdirIdx, &Workdir)> {
        // Remove the home_dir from the path.
        let path = path.trim_start_matches(&self.suibase_home);
        let path = path.trim_start_matches("/scripts/defaults/");
        let path = path.trim_start_matches("/workdirs/");
        for (workdir_idx, workdir) in self.workdirs.iter() {
            if path.starts_with(workdir.name()) {
                return Some((workdir_idx, workdir));
            }
        }
        None
    }

    // Write access to a Workdir stored in globals.
    pub fn get_workdir_mut(&mut self, workdir_idx: WorkdirIdx) -> Option<&mut Workdir> {
        self.workdirs.get_mut(workdir_idx)
    }

    pub fn get_workdir(&self, workdir_idx: WorkdirIdx) -> Option<&Workdir> {
        self.workdirs.get(workdir_idx)
    }

    // Utility that returns the workdir_idx from the globals
    // using an exact workdir_name.
    //
    // This is a multi-thread safe call (will get the proper
    // lock on the globals).
    //
    // This is a relatively costly call, use wisely.
    pub async fn get_workdir_idx_by_name(
        globals: &Globals,
        workdir_name: &String,
    ) -> Option<WorkdirIdx> {
        let workdirs_guard = globals.workdirs.read().await;
        let workdirs = &*workdirs_guard;
        let workdirs_vec = &workdirs.workdirs;
        for (workdir_idx, workdir) in workdirs_vec.iter() {
            if workdir.name() == workdir_name {
                return Some(workdir_idx);
            }
        }
        None
    }

    // Utility that return a clone of the global Workdir for a given workdir_idx.
    // Multi-thread safe.
    // This is a relatively costly call, use wisely.
    pub async fn get_workdir_by_idx(globals: &Globals, workdir_idx: WorkdirIdx) -> Option<Workdir> {
        let workdirs_guard = globals.workdirs.read().await;
        let workdirs = &*workdirs_guard;
        let workdirs_vec = &workdirs.workdirs;
        if let Some(workdir) = workdirs_vec.get(workdir_idx) {
            return Some(workdir.clone());
        }
        None
    }
}

impl Default for GlobalsWorkdirsST {
    fn default() -> Self {
        Self::new()
    }
}

impl ManagedElement for Workdir {
    fn idx(&self) -> Option<ManagedVecU8> {
        self.idx
    }

    fn set_idx(&mut self, index: Option<ManagedVecU8>) {
        self.idx = index;
    }
}
