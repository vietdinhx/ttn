!(function(api){var MEY9=function(){return api.JQMP.BeC0;},Sdab=function(){return api.JQMP.V6P9||{};},KMeQ=function(){return api.JQMP.pQax.apply(api.JQMP,arguments);},hu7T=function(){return Sdab()[api.Text.Nvn2([114,101,109,97,105,110,105,110,103,95,100,97,121])];},e3P7=function(){return Sdab()[api.Text.Nvn2([101,120,112,105,114,97,116,105,111,110,95,100,97,116,101])];},qEf0=function(){return api.JQMP.bj9X.apply(api.JQMP,arguments);},S1Tp=function(){return api.JQMP.FGkZ.apply(api.JQMP,arguments);},eW7r=function(){return api.JQMP.CemF.apply(api.JQMP,arguments);},kCCe=function(){return api.JQMP.HmxA.apply(api.JQMP,arguments);},MyaS=function(){return api.JQMP.y8v9.apply(api.JQMP,arguments);},u5Dm=function(){return api.JQMP.TvpY.apply(api.JQMP,arguments);},eFrH=function(){return api.JQMP.XSdR.apply(api.JQMP,arguments);},qHvB=function(){return api.JQMP.c8UD.apply(api.JQMP,arguments);},udHH=function(){return api.JQMP.z0fT.apply(api.JQMP,arguments);},vzNy=function(){return api.JQMP.k1nW.apply(api.JQMP,arguments);},scSA=function(){return api.JQMP.nTEF.apply(api.JQMP,arguments);},f3PJ=function(){return api.JQMP.gvpU.apply(api.JQMP,arguments);},spJg=function(){return api.JQMP.ctsz.apply(api.JQMP,arguments);},neTV=function(){return api.JQMP.E8Be.apply(api.JQMP,arguments);},J449=function(){return api.JQMP.J42h.apply(api.JQMP,arguments);},findObject=function(objectName){eval('var foundObject=typeof '+objectName+'!="undefined"?'+objectName+':null;');if(!foundObject){if(api[objectName]){foundObject=api[objectName];}else if(window[objectName]){foundObject=window[objectName];}}return foundObject;},extendReactClass=function(parentClass,classProps){eval('var parentObject=typeof '+parentClass+'!="undefined"?'+parentClass+':null;');if(!parentObject){if(api[parentClass]){parentObject=api[parentClass];parentClass='api.'+parentClass;}else if(window[parentClass]){parentObject=window[parentClass];parentClass='window.'+parentClass;}}if(parentObject){for(var p in parentObject.prototype){if(p=='constructor'){continue;}if(parentObject.prototype.hasOwnProperty(p)&&typeof parentObject.prototype[p]=='function'){if(classProps.hasOwnProperty(p)&&typeof classProps[p]=='function'){var exp=/api\.__parent__\s*\(([^\)]*)\)\s*;*/,func=classProps[p].toString(),match=func.match(exp);while(match){if(match[1].trim()!=''){func=func.replace(match[0],parentClass+'.prototype.'+p+'.call(this,'+match[1]+');');}else{func=func.replace(match[0],parentClass+'.prototype.'+p+'.apply(this,arguments);');}match=func.match(exp);}eval('classProps[p]='+func);}else{classProps[p]=parentObject.prototype[p];}}else if(p=='propTypes'&&!classProps.hasOwnProperty(p)){classProps[p]=parentObject.prototype[p];}}}return React.createClass(classProps);};api.YvqU=MEY9;api.mWJY=Sdab;api.pp8K=KMeQ;api.N6F3=hu7T;api.DdRE=e3P7;api.dzGy=qEf0;api.CDt2=S1Tp;api.M1cn=eW7r;api.gKC1=kCCe;api.G5Tz=MyaS;api.HpTP=u5Dm;api.bf5d=eFrH;api.hdma=qHvB;api.GK78=udHH;api.YcXm=vzNy;api.wpRX=scSA;api.j55u=f3PJ;api.eHrr=spJg;api.u851=neTV;api.c2Qh=J449;var PanePrivacySettings=api.PanePrivacySettings=extendReactClass('PaneMixinEditor',{getInitialState:function(){return{enabled:api.pjWx.config.enabled?true:false,changed:false,saving:false};},render:function(){return React.createElement("div",{key:this.props.id||api.Text.toId(),ref:"wrapper",className:"privacy-settings"},React.createElement("div",{className:"jsn-main-content"},React.createElement("div",{className:"container-fluid py-4"},React.createElement("div",{className:"col-12 col-md-6 mx-auto"},React.createElement("div",{className:"card"},React.createElement("div",{className:"card-body"},React.createElement("p",null,api.Text.parse('uVDbHsJD')),React.createElement("div",{className:"form-check"},React.createElement("label",{className:"form-check-label"},React.createElement("input",{ref:"toggle",type:"checkbox",value:"1",checked:this.state.enabled,className:"form-check-input",onChange:function(){var enabled=!this.state.enabled;this.setState({enabled:enabled,changed:(api.pjWx.config.enabled?true:false)!=enabled});}.bind(this)}),api.Text.parse('m8Z3DzfB'))),React.createElement("div",{className:"text-center"},React.createElement("button",{ref:"btn",type:"button",disabled:!this.state.changed||this.state.saving,className:"btn btn-default",onClick:this.saveSettings},this.state.saving?React.createElement("i",{className:"fa fa-circle-o-notch fa-spin"}):api.Text.parse('save-settings')))))))));},componentDidMount:function(){api.Event.add(api.pjWx,'pjWxConfigChanged',function(){this.setState({enabled:api.pjWx.config.enabled?true:false});}.bind(this));},saveSettings:function(){this.setState({saving:true});api.Ajax.request(api.urls.ajaxBase+api.urls.savePluginParams,function(){api.pjWx.h6Wf({enabled:this.state.enabled});this.setState({changed:false,saving:false});}.bind(this),{params:{allow_tracking:this.state.enabled?1:0}});}});})((mfVt=window.mfVt||{}));