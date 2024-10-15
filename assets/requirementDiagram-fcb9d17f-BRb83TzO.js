import{V as Tt,F as Ft,A as Mt,L as Ct,E as Dt,c as Nt,j as Pt,b as ot,O as Vt,$ as bt}from"./mermaid.esm.min-BvJAUb_Y.js";import{Z as Yt}from"./graph-71d8872f-DGzuGSOo.js";import{Y as Ut}from"./layout-8444cf3b-MVCxjJMc.js";import{P as Bt}from"./line-c65adc04-X0dWBe6g.js";import"./app-CxTHpDpL.js";import"./array-2ff2c7a6-C3YJfAyO.js";import"./path-428ebac9-B0oSrkCJ.js";var ht=function(){var t=function(x,e,s,r){for(s=s||{},r=x.length;r--;s[x[r]]=e);return s},i=[1,3],o=[1,4],h=[1,5],l=[1,6],u=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],c=[1,18],a=[2,7],y=[1,22],E=[1,23],R=[1,24],T=[1,25],N=[1,26],A=[1,27],v=[1,20],S=[1,28],q=[1,29],C=[62,63],ut=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],yt=[1,47],dt=[1,48],pt=[1,49],_t=[1,50],Et=[1,51],gt=[1,52],Rt=[1,53],L=[53,54],D=[1,64],P=[1,60],V=[1,61],Y=[1,62],U=[1,63],B=[1,65],j=[1,69],G=[1,70],z=[1,67],X=[1,68],f=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],et={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:function(x,e,s,r,d,n,m){var _=n.length-1;switch(d){case 4:this.$=n[_].trim(),r.setAccTitle(this.$);break;case 5:case 6:this.$=n[_].trim(),r.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:r.addRequirement(n[_-3],n[_-4]);break;case 14:r.setNewReqId(n[_-2]);break;case 15:r.setNewReqText(n[_-2]);break;case 16:r.setNewReqRisk(n[_-2]);break;case 17:r.setNewReqVerifyMethod(n[_-2]);break;case 20:this.$=r.RequirementType.REQUIREMENT;break;case 21:this.$=r.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=r.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=r.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=r.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=r.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=r.RiskLevel.LOW_RISK;break;case 27:this.$=r.RiskLevel.MED_RISK;break;case 28:this.$=r.RiskLevel.HIGH_RISK;break;case 29:this.$=r.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=r.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=r.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=r.VerifyType.VERIFY_TEST;break;case 33:r.addElement(n[_-3]);break;case 34:r.setNewElementType(n[_-2]);break;case 35:r.setNewElementDocRef(n[_-2]);break;case 38:r.addRelationship(n[_-2],n[_],n[_-4]);break;case 39:r.addRelationship(n[_-2],n[_-4],n[_]);break;case 40:this.$=r.Relationships.CONTAINS;break;case 41:this.$=r.Relationships.COPIES;break;case 42:this.$=r.Relationships.DERIVES;break;case 43:this.$=r.Relationships.SATISFIES;break;case 44:this.$=r.Relationships.VERIFIES;break;case 45:this.$=r.Relationships.REFINES;break;case 46:this.$=r.Relationships.TRACES;break}},table:[{3:1,4:2,6:i,9:o,11:h,13:l},{1:[3]},{3:8,4:2,5:[1,7],6:i,9:o,11:h,13:l},{5:[1,9]},{10:[1,10]},{12:[1,11]},t(u,[2,6]),{3:12,4:2,6:i,9:o,11:h,13:l},{1:[2,2]},{4:17,5:c,7:13,8:a,9:o,11:h,13:l,14:14,15:15,16:16,17:19,23:21,31:y,32:E,33:R,34:T,35:N,36:A,44:v,62:S,63:q},t(u,[2,4]),t(u,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:c,7:31,8:a,9:o,11:h,13:l,14:14,15:15,16:16,17:19,23:21,31:y,32:E,33:R,34:T,35:N,36:A,44:v,62:S,63:q},{4:17,5:c,7:32,8:a,9:o,11:h,13:l,14:14,15:15,16:16,17:19,23:21,31:y,32:E,33:R,34:T,35:N,36:A,44:v,62:S,63:q},{4:17,5:c,7:33,8:a,9:o,11:h,13:l,14:14,15:15,16:16,17:19,23:21,31:y,32:E,33:R,34:T,35:N,36:A,44:v,62:S,63:q},{4:17,5:c,7:34,8:a,9:o,11:h,13:l,14:14,15:15,16:16,17:19,23:21,31:y,32:E,33:R,34:T,35:N,36:A,44:v,62:S,63:q},{4:17,5:c,7:35,8:a,9:o,11:h,13:l,14:14,15:15,16:16,17:19,23:21,31:y,32:E,33:R,34:T,35:N,36:A,44:v,62:S,63:q},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},t(C,[2,20]),t(C,[2,21]),t(C,[2,22]),t(C,[2,23]),t(C,[2,24]),t(C,[2,25]),t(ut,[2,49]),t(ut,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:yt,56:dt,57:pt,58:_t,59:Et,60:gt,61:Rt},{52:54,55:yt,56:dt,57:pt,58:_t,59:Et,60:gt,61:Rt},{5:[1,55]},{5:[1,56]},{53:[1,57]},t(L,[2,40]),t(L,[2,41]),t(L,[2,42]),t(L,[2,43]),t(L,[2,44]),t(L,[2,45]),t(L,[2,46]),{54:[1,58]},{5:D,20:59,21:P,24:V,26:Y,28:U,30:B},{5:j,30:G,46:66,47:z,49:X},{23:71,62:S,63:q},{23:72,62:S,63:q},t(f,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:D,20:77,21:P,24:V,26:Y,28:U,30:B},t(f,[2,19]),t(f,[2,33]),{22:[1,78]},{22:[1,79]},{5:j,30:G,46:80,47:z,49:X},t(f,[2,37]),t(f,[2,38]),t(f,[2,39]),{23:81,62:S,63:q},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},t(f,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},t(f,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:D,20:106,21:P,24:V,26:Y,28:U,30:B},{5:D,20:107,21:P,24:V,26:Y,28:U,30:B},{5:D,20:108,21:P,24:V,26:Y,28:U,30:B},{5:D,20:109,21:P,24:V,26:Y,28:U,30:B},{5:j,30:G,46:110,47:z,49:X},{5:j,30:G,46:111,47:z,49:X},t(f,[2,14]),t(f,[2,15]),t(f,[2,16]),t(f,[2,17]),t(f,[2,34]),t(f,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:function(x,e){if(e.recoverable)this.trace(x);else{var s=new Error(x);throw s.hash=e,s}},parse:function(x){var e=this,s=[0],r=[],d=[null],n=[],m=this.table,_="",Z=0,ft=0,Ot=2,mt=1,wt=n.slice.call(arguments,1),g=Object.create(this.lexer),F={yy:{}};for(var rt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,rt)&&(F.yy[rt]=this.yy[rt]);g.setInput(x,F.yy),F.yy.lexer=g,F.yy.parser=this,typeof g.yylloc>"u"&&(g.yylloc={});var nt=g.yylloc;n.push(nt);var $t=g.options&&g.options.ranges;typeof F.yy.parseError=="function"?this.parseError=F.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Lt(){var w;return w=r.pop()||g.lex()||mt,typeof w!="number"&&(w instanceof Array&&(r=w,w=r.pop()),w=e.symbols_[w]||w),w}for(var I,M,k,st,H={},J,O,It,tt;;){if(M=s[s.length-1],this.defaultActions[M]?k=this.defaultActions[M]:((I===null||typeof I>"u")&&(I=Lt()),k=m[M]&&m[M][I]),typeof k>"u"||!k.length||!k[0]){var at="";tt=[];for(J in m[M])this.terminals_[J]&&J>Ot&&tt.push("'"+this.terminals_[J]+"'");g.showPosition?at="Parse error on line "+(Z+1)+`:
`+g.showPosition()+`
Expecting `+tt.join(", ")+", got '"+(this.terminals_[I]||I)+"'":at="Parse error on line "+(Z+1)+": Unexpected "+(I==mt?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(at,{text:g.match,token:this.terminals_[I]||I,line:g.yylineno,loc:nt,expected:tt})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+I);switch(k[0]){case 1:s.push(I),d.push(g.yytext),n.push(g.yylloc),s.push(k[1]),I=null,ft=g.yyleng,_=g.yytext,Z=g.yylineno,nt=g.yylloc;break;case 2:if(O=this.productions_[k[1]][1],H.$=d[d.length-O],H._$={first_line:n[n.length-(O||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(O||1)].first_column,last_column:n[n.length-1].last_column},$t&&(H._$.range=[n[n.length-(O||1)].range[0],n[n.length-1].range[1]]),st=this.performAction.apply(H,[_,ft,Z,F.yy,k[1],d,n].concat(wt)),typeof st<"u")return st;O&&(s=s.slice(0,-1*O*2),d=d.slice(0,-1*O),n=n.slice(0,-1*O)),s.push(this.productions_[k[1]][0]),d.push(H.$),n.push(H._$),It=m[s[s.length-2]][s[s.length-1]],s.push(It);break;case 3:return!0}}return!0}},qt=function(){var x={EOF:1,parseError:function(e,s){if(this.yy.parser)this.yy.parser.parseError(e,s);else throw new Error(e)},setInput:function(e,s){return this.yy=s||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var s=e.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var s=e.length,r=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===d.length?this.yylloc.first_column:0)+d[d.length-r.length].length-r[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),s=new Array(e.length+1).join("-");return e+this.upcomingInput()+`
`+s+"^"},test_match:function(e,s){var r,d,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),d=e[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],r=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var m in n)this[m]=n[m];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,s,r,d;this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),m=0;m<n.length;m++)if(r=this._input.match(this.rules[n[m]]),r&&(!s||r[0].length>s[0].length)){if(s=r,d=m,this.options.backtrack_lexer){if(e=this.test_match(r,n[m]),e!==!1)return e;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(e=this.test_match(s,n[d]),e!==!1?e:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,s,r,d){switch(r){case 0:return"title";case 1:return this.begin("acc_title"),9;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),11;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 48:this.popState();break;case 49:return"qString";case 50:return s.yytext=s.yytext.trim(),62}},rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};return x}();et.lexer=qt;function it(){this.yy={}}return it.prototype=et,et.Parser=it,new it}();ht.parser=ht;const Ht=ht;let ct=[],b={},K={},$={},Q={};const Wt={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},Kt={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},Qt={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},jt={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},Gt=(t,i)=>(K[t]===void 0&&(K[t]={name:t,type:i,id:b.id,text:b.text,risk:b.risk,verifyMethod:b.verifyMethod}),b={},K[t]),zt=()=>K,Xt=t=>{b!==void 0&&(b.id=t)},Zt=t=>{b!==void 0&&(b.text=t)},Jt=t=>{b!==void 0&&(b.risk=t)},te=t=>{b!==void 0&&(b.verifyMethod=t)},ee=t=>(Q[t]===void 0&&(Q[t]={name:t,type:$.type,docRef:$.docRef},Nt.info("Added new requirement: ",t)),$={},Q[t]),ie=()=>Q,re=t=>{$!==void 0&&($.type=t)},ne=t=>{$!==void 0&&($.docRef=t)},se=(t,i,o)=>{ct.push({type:t,src:i,dst:o})},ae=()=>ct,oe=()=>{ct=[],b={},K={},$={},Q={},Pt()},he={RequirementType:Wt,RiskLevel:Kt,VerifyType:Qt,Relationships:jt,getConfig:()=>Tt().req,addRequirement:Gt,getRequirements:zt,setNewReqId:Xt,setNewReqText:Zt,setNewReqRisk:Jt,setNewReqVerifyMethod:te,setAccTitle:Ft,getAccTitle:Mt,setAccDescription:Ct,getAccDescription:Dt,addElement:ee,getElements:ie,setNewElementType:re,setNewElementDocRef:ne,addRelationship:se,getRelationships:ae,clear:oe},le=t=>`

  marker {
    fill: ${t.relationColor};
    stroke: ${t.relationColor};
  }

  marker.cross {
    stroke: ${t.lineColor};
  }

  svg {
    font-family: ${t.fontFamily};
    font-size: ${t.fontSize};
  }

  .reqBox {
    fill: ${t.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${t.requirementBorderColor};
    stroke-width: ${t.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${t.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${t.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${t.requirementBorderColor};
    stroke-width: ${t.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${t.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${t.relationLabelColor};
  }

`,ce=le,lt={CONTAINS:"contains",ARROW:"arrow"},ue=(t,i)=>{let o=t.append("defs").append("marker").attr("id",lt.CONTAINS+"_line_ending").attr("refX",0).attr("refY",i.line_height/2).attr("markerWidth",i.line_height).attr("markerHeight",i.line_height).attr("orient","auto").append("g");o.append("circle").attr("cx",i.line_height/2).attr("cy",i.line_height/2).attr("r",i.line_height/2).attr("fill","none"),o.append("line").attr("x1",0).attr("x2",i.line_height).attr("y1",i.line_height/2).attr("y2",i.line_height/2).attr("stroke-width",1),o.append("line").attr("y1",0).attr("y2",i.line_height).attr("x1",i.line_height/2).attr("x2",i.line_height/2).attr("stroke-width",1),t.append("defs").append("marker").attr("id",lt.ARROW+"_line_ending").attr("refX",i.line_height).attr("refY",.5*i.line_height).attr("markerWidth",i.line_height).attr("markerHeight",i.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${i.line_height},${i.line_height/2}
      M${i.line_height},${i.line_height/2}
      L0,${i.line_height}`).attr("stroke-width",1)},St={ReqMarkers:lt,insertLineEndings:ue};let p={},kt=0;const xt=(t,i)=>t.insert("rect","#"+i).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",p.rect_min_width+"px").attr("height",p.rect_min_height+"px"),At=(t,i,o)=>{let h=p.rect_min_width/2,l=t.append("text").attr("class","req reqLabel reqTitle").attr("id",i).attr("x",h).attr("y",p.rect_padding).attr("dominant-baseline","hanging"),u=0;o.forEach(E=>{u==0?l.append("tspan").attr("text-anchor","middle").attr("x",p.rect_min_width/2).attr("dy",0).text(E):l.append("tspan").attr("text-anchor","middle").attr("x",p.rect_min_width/2).attr("dy",p.line_height*.75).text(E),u++});let c=1.5*p.rect_padding,a=u*p.line_height*.75,y=c+a;return t.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",p.rect_min_width).attr("y1",y).attr("y2",y),{titleNode:l,y}},vt=(t,i,o,h)=>{let l=t.append("text").attr("class","req reqLabel").attr("id",i).attr("x",p.rect_padding).attr("y",h).attr("dominant-baseline","hanging"),u=0;const c=30;let a=[];return o.forEach(y=>{let E=y.length;for(;E>c&&u<3;){let R=y.substring(0,c);y=y.substring(c,y.length),E=y.length,a[a.length]=R,u++}if(u==3){let R=a[a.length-1];a[a.length-1]=R.substring(0,R.length-4)+"..."}else a[a.length]=y;u=0}),a.forEach(y=>{l.append("tspan").attr("x",p.rect_padding).attr("dy",p.line_height).text(y)}),l},ye=(t,i,o,h)=>{const l=i.node().getTotalLength(),u=i.node().getPointAtLength(l*.5),c="rel"+kt;kt++;const a=t.append("text").attr("class","req relationshipLabel").attr("id",c).attr("x",u.x).attr("y",u.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(h).node().getBBox();t.insert("rect","#"+c).attr("class","req reqLabelBox").attr("x",u.x-a.width/2).attr("y",u.y-a.height/2).attr("width",a.width).attr("height",a.height).attr("fill","white").attr("fill-opacity","85%")},de=function(t,i,o,h,l){const u=o.edge(W(i.src),W(i.dst)),c=Bt().x(function(y){return y.x}).y(function(y){return y.y}),a=t.insert("path","#"+h).attr("class","er relationshipLine").attr("d",c(u.points)).attr("fill","none");i.type==l.db.Relationships.CONTAINS?a.attr("marker-start","url("+bt.getUrl(p.arrowMarkerAbsolute)+"#"+i.type+"_line_ending)"):(a.attr("stroke-dasharray","10,7"),a.attr("marker-end","url("+bt.getUrl(p.arrowMarkerAbsolute)+"#"+St.ReqMarkers.ARROW+"_line_ending)")),ye(t,a,p,`<<${i.type}>>`)},pe=(t,i,o)=>{Object.keys(t).forEach(h=>{let l=t[h];h=W(h),Nt.info("Added new requirement: ",h);const u=o.append("g").attr("id",h),c="req-"+h,a=xt(u,c);let y=At(u,h+"_title",[`<<${l.type}>>`,`${l.name}`]);vt(u,h+"_body",[`Id: ${l.id}`,`Text: ${l.text}`,`Risk: ${l.risk}`,`Verification: ${l.verifyMethod}`],y.y);const E=a.node().getBBox();i.setNode(h,{width:E.width,height:E.height,shape:"rect",id:h})})},_e=(t,i,o)=>{Object.keys(t).forEach(h=>{let l=t[h];const u=W(h),c=o.append("g").attr("id",u),a="element-"+u,y=xt(c,a);let E=At(c,a+"_title",["<<Element>>",`${h}`]);vt(c,a+"_body",[`Type: ${l.type||"Not Specified"}`,`Doc Ref: ${l.docRef||"None"}`],E.y);const R=y.node().getBBox();i.setNode(u,{width:R.width,height:R.height,shape:"rect",id:u})})},Ee=(t,i)=>(t.forEach(function(o){let h=W(o.src),l=W(o.dst);i.setEdge(h,l,{relationship:o})}),t),ge=function(t,i){i.nodes().forEach(function(o){o!==void 0&&i.node(o)!==void 0&&(t.select("#"+o),t.select("#"+o).attr("transform","translate("+(i.node(o).x-i.node(o).width/2)+","+(i.node(o).y-i.node(o).height/2)+" )"))})},W=t=>t.replace(/\s/g,"").replace(/\./g,"_"),Re=(t,i,o,h)=>{p=Tt().requirement;const l=p.securityLevel;let u;l==="sandbox"&&(u=ot("#i"+i));const c=(l==="sandbox"?ot(u.nodes()[0].contentDocument.body):ot("body")).select(`[id='${i}']`);St.insertLineEndings(c,p);const a=new Yt({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:p.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});let y=h.db.getRequirements(),E=h.db.getElements(),R=h.db.getRelationships();pe(y,a,c),_e(E,a,c),Ee(R,a),Ut(a),ge(c,a),R.forEach(function(S){de(c,S,a,i,h)});const T=p.rect_padding,N=c.node().getBBox(),A=N.width+T*2,v=N.height+T*2;Vt(c,v,A,p.useMaxWidth),c.attr("viewBox",`${N.x-T} ${N.y-T} ${A} ${v}`)},fe={draw:Re},xe={parser:Ht,db:he,renderer:fe,styles:ce};export{xe as diagram};
