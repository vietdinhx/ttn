!(function(api){var MEY9=function(){return api.JQMP.BeC0;},Sdab=function(){return api.JQMP.V6P9||{};},KMeQ=function(){return api.JQMP.pQax.apply(api.JQMP,arguments);},hu7T=function(){return Sdab()[api.Text.Nvn2([114,101,109,97,105,110,105,110,103,95,100,97,121])];},e3P7=function(){return Sdab()[api.Text.Nvn2([101,120,112,105,114,97,116,105,111,110,95,100,97,116,101])];},qEf0=function(){return api.JQMP.bj9X.apply(api.JQMP,arguments);},S1Tp=function(){return api.JQMP.FGkZ.apply(api.JQMP,arguments);},eW7r=function(){return api.JQMP.CemF.apply(api.JQMP,arguments);},kCCe=function(){return api.JQMP.HmxA.apply(api.JQMP,arguments);},MyaS=function(){return api.JQMP.y8v9.apply(api.JQMP,arguments);},u5Dm=function(){return api.JQMP.TvpY.apply(api.JQMP,arguments);},eFrH=function(){return api.JQMP.XSdR.apply(api.JQMP,arguments);},qHvB=function(){return api.JQMP.c8UD.apply(api.JQMP,arguments);},udHH=function(){return api.JQMP.z0fT.apply(api.JQMP,arguments);},vzNy=function(){return api.JQMP.k1nW.apply(api.JQMP,arguments);},scSA=function(){return api.JQMP.nTEF.apply(api.JQMP,arguments);},f3PJ=function(){return api.JQMP.gvpU.apply(api.JQMP,arguments);},spJg=function(){return api.JQMP.ctsz.apply(api.JQMP,arguments);},neTV=function(){return api.JQMP.E8Be.apply(api.JQMP,arguments);},J449=function(){return api.JQMP.J42h.apply(api.JQMP,arguments);},findObject=function(objectName){eval('var foundObject=typeof '+objectName+'!="undefined"?'+objectName+':null;');if(!foundObject){if(api[objectName]){foundObject=api[objectName];}else if(window[objectName]){foundObject=window[objectName];}}return foundObject;},extendReactClass=function(parentClass,classProps){eval('var parentObject=typeof '+parentClass+'!="undefined"?'+parentClass+':null;');if(!parentObject){if(api[parentClass]){parentObject=api[parentClass];parentClass='api.'+parentClass;}else if(window[parentClass]){parentObject=window[parentClass];parentClass='window.'+parentClass;}}if(parentObject){for(var p in parentObject.prototype){if(p=='constructor'){continue;}if(parentObject.prototype.hasOwnProperty(p)&&typeof parentObject.prototype[p]=='function'){if(classProps.hasOwnProperty(p)&&typeof classProps[p]=='function'){var exp=/api\.__parent__\s*\(([^\)]*)\)\s*;*/,func=classProps[p].toString(),match=func.match(exp);while(match){if(match[1].trim()!=''){func=func.replace(match[0],parentClass+'.prototype.'+p+'.call(this,'+match[1]+');');}else{func=func.replace(match[0],parentClass+'.prototype.'+p+'.apply(this,arguments);');}match=func.match(exp);}eval('classProps[p]='+func);}else{classProps[p]=parentObject.prototype[p];}}else if(p=='propTypes'&&!classProps.hasOwnProperty(p)){classProps[p]=parentObject.prototype[p];}}}return React.createClass(classProps);};api.YvqU=MEY9;api.mWJY=Sdab;api.pp8K=KMeQ;api.N6F3=hu7T;api.DdRE=e3P7;api.dzGy=qEf0;api.CDt2=S1Tp;api.M1cn=eW7r;api.gKC1=kCCe;api.G5Tz=MyaS;api.HpTP=u5Dm;api.bf5d=eFrH;api.hdma=qHvB;api.GK78=udHH;api.YcXm=vzNy;api.wpRX=scSA;api.j55u=f3PJ;api.eHrr=spJg;api.u851=neTV;api.c2Qh=J449;var PaneCustom404=api.PaneCustom404=extendReactClass('PaneMixinEditor',{getInitialState:function(){return{changed:false};},getDefaultData:function(){return{article:''};},render:function(){if(this.config===undefined){return null;}return React.createElement('div',{key:this.props.id||api.Text.toId(),ref:'wrapper',className:'custom-404'},this.renderEditorToolbar('custom-404','Extras:'+' '+'Custom 404','extras_'+this.props.id,false),React.createElement('div',{className:'jsn-main-content'},React.createElement('div',{className:'container-fluid'},React.createElement('div',{className:'row align-items-top equal-height'},React.createElement('div',{className:'col mr-auto py-4 workspace-container'},this.renderBanner('layout-footer'),React.createElement(PaneCustom404Workspace,{key:this.props.id+'_workspace',ref:'workspace',parent:this,editor:this})),this.renderSettingsPanel()))));},initActions:function(){if(!this._listened_FormChanged){api.Event.add(this.refs.settings,'FormChanged',function(event){api.pjWx.UkKw('Extras','Edit Custom 404',api.pjWx.fV5y(event.changedElement.props.control.label));}.bind(this));this._listened_FormChanged=true;}}});var PaneCustom404Workspace=extendReactClass('PaneMixinBase',{getDefaultProps:function(){return{getMenuItem:api.urls.ajaxBase+'&action=getMenuItem',getArticle:api.urls.ajaxBase+'&action=getArticle'};},render:function(){var data=this.editor.getData(),className='jsn-panel custom-404-workspace main-workspace',content;if(data.enabled){content=React.createElement('div',{className:'jsn-panel-body content-preview'},React.createElement('h3',null,api.Text.parse('article'),data.article?' '+'"'+data.article.split(':')[0]+'"':null),data.article?React.createElement('a',{href:api.urls.root+'?option=page-not-found',target:'_blank',className:'btn btn-default'},api.Text.parse('preview')):null);}else{className+=' empty-workspace';}return React.createElement('div',{ref:'wrapper',className:className},content?content:api.Text.parse('custom-404-not-enabled'));}});})((mfVt=window.mfVt||{}));