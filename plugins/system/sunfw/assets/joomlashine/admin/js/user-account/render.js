!(function(api){var MEY9=function(){return api.JQMP.BeC0;},Sdab=function(){return api.JQMP.V6P9||{};},KMeQ=function(){return api.JQMP.pQax.apply(api.JQMP,arguments);},hu7T=function(){return Sdab()[api.Text.Nvn2([114,101,109,97,105,110,105,110,103,95,100,97,121])];},e3P7=function(){return Sdab()[api.Text.Nvn2([101,120,112,105,114,97,116,105,111,110,95,100,97,116,101])];},qEf0=function(){return api.JQMP.bj9X.apply(api.JQMP,arguments);},S1Tp=function(){return api.JQMP.FGkZ.apply(api.JQMP,arguments);},eW7r=function(){return api.JQMP.CemF.apply(api.JQMP,arguments);},kCCe=function(){return api.JQMP.HmxA.apply(api.JQMP,arguments);},MyaS=function(){return api.JQMP.y8v9.apply(api.JQMP,arguments);},u5Dm=function(){return api.JQMP.TvpY.apply(api.JQMP,arguments);},eFrH=function(){return api.JQMP.XSdR.apply(api.JQMP,arguments);},qHvB=function(){return api.JQMP.c8UD.apply(api.JQMP,arguments);},udHH=function(){return api.JQMP.z0fT.apply(api.JQMP,arguments);},vzNy=function(){return api.JQMP.k1nW.apply(api.JQMP,arguments);},scSA=function(){return api.JQMP.nTEF.apply(api.JQMP,arguments);},f3PJ=function(){return api.JQMP.gvpU.apply(api.JQMP,arguments);},spJg=function(){return api.JQMP.ctsz.apply(api.JQMP,arguments);},neTV=function(){return api.JQMP.E8Be.apply(api.JQMP,arguments);},J449=function(){return api.JQMP.J42h.apply(api.JQMP,arguments);},findObject=function(objectName){eval('var foundObject=typeof '+objectName+'!="undefined"?'+objectName+':null;');if(!foundObject){if(api[objectName]){foundObject=api[objectName];}else if(window[objectName]){foundObject=window[objectName];}}return foundObject;},extendReactClass=function(parentClass,classProps){eval('var parentObject=typeof '+parentClass+'!="undefined"?'+parentClass+':null;');if(!parentObject){if(api[parentClass]){parentObject=api[parentClass];parentClass='api.'+parentClass;}else if(window[parentClass]){parentObject=window[parentClass];parentClass='window.'+parentClass;}}if(parentObject){for(var p in parentObject.prototype){if(p=='constructor'){continue;}if(parentObject.prototype.hasOwnProperty(p)&&typeof parentObject.prototype[p]=='function'){if(classProps.hasOwnProperty(p)&&typeof classProps[p]=='function'){var exp=/api\.__parent__\s*\(([^\)]*)\)\s*;*/,func=classProps[p].toString(),match=func.match(exp);while(match){if(match[1].trim()!=''){func=func.replace(match[0],parentClass+'.prototype.'+p+'.call(this,'+match[1]+');');}else{func=func.replace(match[0],parentClass+'.prototype.'+p+'.apply(this,arguments);');}match=func.match(exp);}eval('classProps[p]='+func);}else{classProps[p]=parentObject.prototype[p];}}else if(p=='propTypes'&&!classProps.hasOwnProperty(p)){classProps[p]=parentObject.prototype[p];}}}return React.createClass(classProps);};api.YvqU=MEY9;api.mWJY=Sdab;api.pp8K=KMeQ;api.N6F3=hu7T;api.DdRE=e3P7;api.dzGy=qEf0;api.CDt2=S1Tp;api.M1cn=eW7r;api.gKC1=kCCe;api.G5Tz=MyaS;api.HpTP=u5Dm;api.bf5d=eFrH;api.hdma=qHvB;api.GK78=udHH;api.YcXm=vzNy;api.wpRX=scSA;api.j55u=f3PJ;api.eHrr=spJg;api.u851=neTV;api.c2Qh=J449;var PaneUserAccount=api.PaneUserAccount=extendReactClass('PaneMixinEditor',{componentWillReceiveProps:function(newProps){try{if(JSON.stringify(this.props.cfg)!=JSON.stringify(newProps.cfg)){this.initConfig(newProps.cfg);}}catch(e){if(this.props.cfg!=newProps.cfg){this.initConfig(newProps.cfg);}}},componentWillMount:function(){api.__parent__();api.Event.add(this.props.doc.refs.body,'TabSwitched',function(){if(this.config){if(api.YvqU()==''){setTimeout(function(){if(!this.refs.wrapper.parentNode.classList.contains('active')){this.DeMD();}}.bind(this),500);}}}.bind(this));},getFormContainer:function(elm){while(elm&&elm.nodeName!='BODY'){if(elm.classList&&elm.classList.contains('form-container')){return elm;}elm=elm.parentNode;}return elm;},getSubmitButton:function(form){return form.parentNode.parentNode.parentNode.querySelector('.JxPmqKxB-Qe77Z23Y');},DeMD:function(){this.NC7V=api.Modal.get({id:api.Text.toId('JxPmqKxB',true),type:'form',title:api.Text.parse('JxPmqKxB-Gjfd4Sxv'),width:'550px',content:{id:'JxPmqKxB-form',form:{description:React.createElement('div',{className:'alert alert-danger hidden'}),rows:this.ZENt()},inline:false},buttons:[{text:'JxPmqKxB-Qe77Z23Y',className:'btn btn-primary JxPmqKxB-Qe77Z23Y',onClick:this.XBvg.bind(this,true)},{text:'JxPmqKxB-UBp6A5Q9',className:'btn btn-default',onClick:function(){if(api.YvqU()==''){window.history.go(-1);}else{this.NC7V.close();}}.bind(this)}],onModalShown:function(){this.verifyRegistrationForm(this.NC7V?this.NC7V.refs.form.refs.mountedDOMNode:null);}.bind(this),onModalUpdated:function(){this.verifyRegistrationForm(this.NC7V?this.NC7V.refs.form.refs.mountedDOMNode:null);}.bind(this)});},ZENt:function(){var rows=[{prefix:'JxPmqKxB-td6Tz2Gb',suffix:'JxPmqKxB-HYffw0aK',cols:[{'class':'col-6',controls:{username:{type:'text',label:[api.Text.parse('yA1cSF2H'),' '+'(',React.createElement('a',{className:'main-color',href:'https://www.joomlashine.com/username-reminder-request.html',style:{'text-transform':'none'},target:'_blank',tabindex:'-1'},api.Text.parse('qytsw2XQ')),')'],onKeyUp:function(event){this.verifyRegistrationForm(this.getFormContainer(event.target));}.bind(this)}}},{'class':'col-6',controls:{password:{type:'password',label:[api.Text.parse('QvbkW3Vj'),' '+'(',React.createElement('a',{className:'main-color',href:'https://www.joomlashine.com/password-reset.html',style:{'text-transform':'none'},target:'_blank',tabindex:'-1'},api.Text.parse('qytsw2XQ')),')'],onKeyUp:function(event){this.verifyRegistrationForm(this.getFormContainer(event.target));}.bind(this)}}}]}];if(this.config.accounts.length&&api.YvqU()!=''){for(var i=0;i<this.config.accounts.length;i++){if(this.config.accounts[i].label==this.config[api.Text.Nvn2([117,115,101,114,110,97,109,101])]){this.config.accounts.splice(i,1);break;}}}if(this.config.accounts.length){rows=[{cols:[{'class':'col-12',controls:{account:{type:'radio',label:null,inline:true,options:[{label:'yUsBHMth',value:'existing'},{label:'HYffw0aK',value:'new'}],'default':'existing',onClick:function(event){this.verifyRegistrationForm(this.getFormContainer(event.target));}.bind(this)}}},{'class':'col-12 select-account',controls:{existing:{type:'select',label:null,chosen:false,options:this.config.accounts}},requires:{account:'existing'}},{'class':'col-12 new-account',rows:rows,requires:{account:'new'}}]}];}return rows;},verifyRegistrationForm:function(form){this.verifyRegistrationForm.timer&&clearTimeout(this.verifyRegistrationForm.timer);this.verifyRegistrationForm.timer=setTimeout(function(){if(form){var checked=form.querySelector('input[name="account"]:checked');var username=form.querySelector('input[name="username"]');var password=form.querySelector('input[name="password"]');var button=this.getSubmitButton(form);if(checked&&checked.value=='existing'||username.value!=''&&password.value!=''){button.disabled=false;}else{button.disabled=true;}}}.bind(this),200);},XBvg:function(useModal){if(this.verifyingUser){return;}var form=useModal?this.NC7V.refs.form.refs.mountedDOMNode:this.refs.form.refs.mountedDOMNode;var alert=form.querySelector('.alert');var radios=form.querySelectorAll('input[name="account"]');var checked=form.querySelector('input[name="account"]:checked');var existing=form.querySelector('select[name="existing"]');var username=form.querySelector('input[name="username"]');var password=form.querySelector('input[name="password"]');var button=useModal?this.NC7V.refs.mountedDOMNode.querySelector('.modal-footer .btn-primary'):this.refs.wrapper.querySelector('.card-footer .btn-primary');if(radios.length){radios[0].disabled=true;radios[1].disabled=true;existing.disabled=true;}username.disabled=true;password.disabled=true;button.disabled=true;button._origHTML=button._origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-circle-o-notch fa-spin"></i>';button.className=button.className.replace('btn-primary','btn-default disabled');if(useModal){button.nextElementSibling.disabled=true;}if(!alert.classList.contains('hidden')){alert.classList.add('hidden');if(useModal){this.NC7V.update();}}var url=this.config.url;if(radios.length&&checked.value=='existing'){url+='&action=copyTokenFrom&tpl='+existing.options[existing.selectedIndex].value;}else{url+='&action=getTokenKey';}this.verifyingUser=true;api.Ajax.request(url,function(req){if(!req.responseJSON){req.responseJSON={type:'error',data:{message:req.responseText}};}var reset=function(event){if(radios.length){radios[0].disabled=false;radios[1].disabled=false;existing.disabled=false;}username.disabled=false;password.disabled=false;button.disabled=false;button.innerHTML=button._origHTML;button.className=button.className.replace('btn-default disabled','btn-primary');if(useModal){button.nextElementSibling.disabled=false;}if(event){api.u851(true);api.JQMP.tpzQ();if(window.opener){var tplAdmin=window.opener.document.getElementById(this.props.doc.props.id);if(tplAdmin){var WSvW=api.findReactComponent(tplAdmin);if(WSvW){WSvW.componentWillMount(true);window.close();}}}api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',reset);}}.bind(this);if(req.responseJSON.type=='success'){api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',reset);this.props.doc.componentWillMount(true);}else{reset();alert.innerHTML=req.responseJSON.data.message||req.responseJSON.data;alert.classList.remove('hidden');if(useModal){this.NC7V.update();}}delete this.verifyingUser;}.bind(this),radios.length&&checked.value=='existing'?null:{username:username.value,password:password.value});},render:function(){if(this.config===undefined){return null;}if(api.YvqU()==''){return this.VfBd();}var EFYC=api.Text.Nvn2([114,101,108,97,116,101,100,95,112,114,111,100,117,99,116,95,110,97,109,101]);if(api.JQMP.V6P9){EFYC=api.JQMP.V6P9[EFYC];}else{EFYC=null;}return React.createElement('div',{key:this.props.id||api.Text.toId(),ref:'wrapper',className:'user-account'},React.createElement('div',{className:'jsn-main-content'},React.createElement('div',{className:'container-fluid py-4'},React.createElement('div',{className:'col-12 col-md-6 mx-auto'},React.createElement('div',{className:'card'},React.createElement('div',{className:'card-body'},React.createElement('h3',null,api.Text.parse('TtfJrWpq')),React.createElement('p',null,api.Text.parse('zrgW0DZN')),React.createElement('ul',null,React.createElement('li',null,React.createElement('dl',{className:'margin-0'},React.createElement('dt',null,api.Text.capitalize(api.Text.parse('yA1cSF2H')),':'),React.createElement('dd',null,React.createElement('strong',null,this.config[api.Text.Nvn2([117,115,101,114,110,97,109,101])]))))),React.createElement('h3',null,api.Text.parse('rhaHCKbF')),React.createElement('p',null,api.Text.parse('pJhc7EKg')),React.createElement('ul',null,React.createElement('li',null,React.createElement('dl',{className:'margin-0'},React.createElement('dt',null,api.Text.capitalize(api.Text.parse('wvCGde5N')),':'),React.createElement('dd',null,React.createElement('strong',null,this.props.doc.refs.footer.state.credits.template.name,' '+api.Text.capitalize(api.pp8K()),!api.gKC1()&&!api.G5Tz()?[' '+'(',React.createElement('a',{className:'main-color',href:'javascript:void(0)',onClick:function(){api.j55u('w2b97wVJ','u');}},api.Text.parse('XNqRzhzv')),')']:null),EFYC?[' '+'(',api.Text.parse(api.Text.parse('RQNKkUt1',true).replace('%s',EFYC)),')']:null))),React.createElement('li',null,React.createElement('dl',{className:'margin-0'},React.createElement('dt',null,api.Text.capitalize(api.Text.parse('gd2jjF1Y')),':'),React.createElement('dd',null,React.createElement('strong',null,api.hdma()?api.Text.capitalize(api.Text.parse('KW6yu9fy')):api.DdRE()?api.Text.toReadableDate(api.DdRE()):api.Text.capitalize(api.Text.parse('qnQa9DGM'))))))),React.createElement('div',{className:'text-center'},React.createElement('button',{type:'button',className:'btn btn-default',onClick:this.DM0j},api.Text.parse('d5s3e9Dy')),' ',React.createElement('button',{type:'button',className:'btn btn-danger',onClick:this.unlinkAccount},api.Text.parse('VXH67e2r')))))))));},VfBd:function(){return React.createElement('div',{key:this.props.id||api.Text.toId(),ref:'wrapper',className:'user-verification'},React.createElement('div',{className:'jsn-main-content'},React.createElement('div',{className:'container-fluid py-4'},React.createElement('div',{className:'col-12 col-md-6 mx-auto'},React.createElement('div',{className:'card'},React.createElement('div',{className:'card-header'},api.Text.parse('JxPmqKxB-Gjfd4Sxv')),React.createElement('div',{className:'card-body'},React.createElement(api.ElementForm,{ref:'form',form:{description:React.createElement('div',{className:'alert alert-danger hidden'}),rows:this.ZENt()},inline:false,className:'card-text'})),React.createElement('div',{className:'card-footer text-center'},React.createElement('button',{type:'button',className:'btn btn-primary JxPmqKxB-Qe77Z23Y',onClick:this.XBvg.bind(this,false)},api.Text.parse('JxPmqKxB-Qe77Z23Y'))))))));},initActions:function(){api.__parent__();if(api.YvqU()==''){this.verifyRegistrationForm(this.refs.form?this.refs.form.refs.mountedDOMNode:null);}},DM0j:function(event){var button=event.target;button.disabled=true;button._origHTML=button._origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-circle-o-notch fa-spin"></i>';button.nextElementSibling.disabled=true;api.Ajax.request(this.config.url+'&action=clearLicense',function(req){var reset=function(){button.disabled=false;button.innerHTML=button._origHTML;button.nextElementSibling.disabled=false;api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',reset);}.bind(this);api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',reset);this.props.doc.componentWillMount(true);}.bind(this));api.pjWx.UkKw('Settings:'+' '+'User Account','Refresh License');},unlinkAccount:function(event){var button=event.target;button.disabled=true;button._origHTML=button._origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-circle-o-notch fa-spin"></i>';button.previousElementSibling.disabled=true;api.Ajax.request(this.config.url+'&action=unlinkAccount',function(res){if(res.responseJSON.type=='success'){var reset=function(){button.disabled=false;button.innerHTML=button._origHTML;button.previousElementSibling.disabled=false;api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',reset);}.bind(this);api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',reset);this.props.doc.componentWillMount(true);}else{alert(req.responseJSON.data.message||req.responseJSON.data);}}.bind(this));api.pjWx.UkKw('Settings:'+' '+'User Account','Unlink Account');}});})((mfVt=window.mfVt||{}));