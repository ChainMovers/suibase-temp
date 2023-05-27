import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as i,a as e,b as a,d as r,e as l}from"./app-7959b59f.js";const c={},d=e("h1",{id:"workdir-customization-suibase-yaml",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#workdir-customization-suibase-yaml","aria-hidden":"true"},"#"),a(" Workdir Customization ( suibase.yaml )")],-1),u=e("p",null,"Changing the remote github repo, branch, RPC ports etc... are done using the suibase.yaml found in each workdir ( Example: ~/suibase/workdirs/localnet/suibase.yaml )",-1),h={href:"https://github.com/chainmovers/suibase/blob/main/scripts/defaults/localnet/suibase.yaml",target:"_blank",rel:"noopener noreferrer"},p=l(`<h3 id="increase-localnet-initial-funding" tabindex="-1"><a class="header-anchor" href="#increase-localnet-initial-funding" aria-hidden="true">#</a> Increase localnet initial funding</h3><p>Add <code>initial_fund_per_address: 9999999999999999999</code> to the file then type <code>localnet regen</code>.</p><p>Set the number to as much as you need (max 64 bits unsigned supported).</p><h3 id="change-default-repo-and-branch" tabindex="-1"><a class="header-anchor" href="#change-default-repo-and-branch" aria-hidden="true">#</a> Change default repo and branch</h3><p>Add the default_repo_XXXX variables (it is ok to change only one) and then type the workdir update command (e.g. &quot;localnet update&quot;). Example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default_repo_url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/acme/forked_sui.git&quot;</span>
<span class="token key atrule">default_repo_branch</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,_){const n=s("ExternalLinkIcon");return o(),i("div",null,[d,u,e("p",null,[a("We will cover here only a few common use case. See this "),e("a",h,[a("suibase.yaml"),r(n)]),a(" for the complete parameters list.")]),p])}const k=t(c,[["render",m],["__file","configure-suibase-yaml.html.vue"]]);export{k as default};
