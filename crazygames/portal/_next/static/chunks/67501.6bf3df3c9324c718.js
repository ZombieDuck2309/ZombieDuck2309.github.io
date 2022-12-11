"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67501],{67501:function(t,e,i){i.r(e);var s=i(53037),r=i(87306),a=i(42882);var n=i(31803);const h="autotrack",o={};let d,c=!1;class l extends class{constructor(){this.registry_={}}on(t,e){this.getRegistry_(t).push(e)}off(t,e){if(t&&e){const i=this.getRegistry_(t),s=i.indexOf(e);s>-1&&i.splice(s,1)}else this.registry_={}}emit(t,...e){this.getRegistry_(t).forEach((t=>t(...e)))}getEventCount(){let t=0;return Object.keys(this.registry_).forEach((e=>{t+=this.getRegistry_(e).length})),t}getRegistry_(t){return this.registry_[t]=this.registry_[t]||[]}}{static getOrCreate(t,e,i){const s=[h,t,e].join(":");return o[s]||(o[s]=new l(s,i),c||(window.addEventListener("storage",g),c=!0)),o[s]}static isSupported_(){if(null!=d)return d;try{window.localStorage.setItem(h,h),window.localStorage.removeItem(h),d=!0}catch(t){d=!1}return d}static get_(t){return window.localStorage.getItem(t)}static set_(t,e){window.localStorage.setItem(t,e)}static clear_(t){window.localStorage.removeItem(t)}constructor(t,e={}){super(),this.key_=t,this.defaults_=e,this.cache_=null}get(){if(this.cache_)return this.cache_;if(l.isSupported_())try{this.cache_=u(l.get_(this.key_))}catch(t){}return this.cache_=(0,n.f0)({},this.defaults_,this.cache_)}set(t){if(this.cache_=(0,n.f0)({},this.defaults_,this.cache_,t),l.isSupported_())try{l.set_(this.key_,JSON.stringify(this.cache_))}catch(e){}}clear(){if(this.cache_={},l.isSupported_())try{l.clear_(this.key_)}catch(t){}}destroy(){delete o[this.key_],Object.keys(o).length||(window.removeEventListener("storage",g),c=!1)}}function g(t){const e=o[t.key];if(e){const i=(0,n.f0)({},e.defaults_,u(t.oldValue)),s=(0,n.f0)({},e.defaults_,u(t.newValue));e.cache_=s,e.emit("externalSet",s,i)}}function u(t){let e={};if(t)try{e=JSON.parse(t)}catch(i){}return e}const m={};class v{static getOrCreate(t,e,i){const s=t.get("trackingId");return m[s]?m[s]:m[s]=new v(t,e,i)}constructor(t,e,i){this.tracker=t,this.timeout=e||v.DEFAULT_TIMEOUT,this.timeZone=i,this.sendHitTaskOverride=this.sendHitTaskOverride.bind(this),r.Z.add(t,"sendHitTask",this.sendHitTaskOverride);try{this.dateTimeFormatter=new Intl.DateTimeFormat("en-US",{timeZone:this.timeZone})}catch(s){}this.store=l.getOrCreate(t.get("trackingId"),"session",{hitTime:0,isExpired:!1}),this.store.get().id||this.store.set({id:(0,n.Vj)()})}getId(){return this.store.get().id}isExpired(t=this.getId()){if(t!=this.getId())return!0;const e=this.store.get();if(e.isExpired)return!0;const i=e.hitTime;if(i){const t=new Date,e=new Date(i);if(t-e>6e4*this.timeout||this.datesAreDifferentInTimezone(t,e))return!0}return!1}datesAreDifferentInTimezone(t,e){return!!this.dateTimeFormatter&&this.dateTimeFormatter.format(t)!=this.dateTimeFormatter.format(e)}sendHitTaskOverride(t){return e=>{t(e);const i=e.get("sessionControl"),s="start"==i||this.isExpired(),r="end"==i,a=this.store.get();a.hitTime=(0,n.zO)(),s&&(a.isExpired=!1,a.id=(0,n.Vj)()),r&&(a.isExpired=!0),this.store.set(a)}}destroy(){r.Z.remove(this.tracker,"sendHitTask",this.sendHitTaskOverride),this.store.destroy(),delete m[this.tracker.get("trackingId")]}}v.DEFAULT_TIMEOUT=30;var p=i(25271);const _="hidden",T="visible",S=(0,n.Vj)();(0,a.Z)("pageVisibilityTracker",class{constructor(t,e){if((0,p.t)(t,p.G.PAGE_VISIBILITY_TRACKER),!document.visibilityState)return;const i={sessionTimeout:v.DEFAULT_TIMEOUT,visibleThreshold:5e3,sendInitialPageview:!1,fieldsObj:{}};this.opts=(0,n.f0)(i,e),this.tracker=t,this.lastPageState=document.visibilityState,this.visibleThresholdTimeout_=null,this.isInitialPageviewSent_=!1,this.trackerSetOverride=this.trackerSetOverride.bind(this),this.handleChange=this.handleChange.bind(this),this.handleWindowUnload=this.handleWindowUnload.bind(this),this.handleExternalStoreSet=this.handleExternalStoreSet.bind(this),this.store=l.getOrCreate(t.get("trackingId"),"plugins/page-visibility-tracker"),this.store.on("externalSet",this.handleExternalStoreSet),this.session=v.getOrCreate(t,this.opts.sessionTimeout,this.opts.timeZone),r.Z.add(t,"set",this.trackerSetOverride),window.addEventListener("unload",this.handleWindowUnload),document.addEventListener("visibilitychange",this.handleChange),(0,n.C)(this.tracker,(()=>{document.visibilityState==T?(this.opts.sendInitialPageview&&(this.sendPageview({isPageLoad:!0}),this.isInitialPageviewSent_=!0),this.store.set({time:(0,n.zO)(),state:T,pageId:S,sessionId:this.session.getId()})):this.opts.sendInitialPageview&&this.opts.pageLoadsMetricIndex&&this.sendPageLoad()}))}handleChange(){if(document.visibilityState!=T&&document.visibilityState!=_)return;const t=this.getAndValidateChangeData(),e={time:(0,n.zO)(),state:document.visibilityState,pageId:S,sessionId:this.session.getId()};document.visibilityState==T&&this.opts.sendInitialPageview&&!this.isInitialPageviewSent_&&(this.sendPageview(),this.isInitialPageviewSent_=!0),document.visibilityState==_&&this.visibleThresholdTimeout_&&clearTimeout(this.visibleThresholdTimeout_),this.session.isExpired(t.sessionId)?(this.store.clear(),this.lastPageState==_&&document.visibilityState==T&&(clearTimeout(this.visibleThresholdTimeout_),this.visibleThresholdTimeout_=setTimeout((()=>{this.store.set(e),this.sendPageview({hitTime:e.time})}),this.opts.visibleThreshold))):(t.pageId==S&&t.state==T&&this.sendPageVisibilityEvent(t),this.store.set(e)),this.lastPageState=document.visibilityState}getAndValidateChangeData(){const t=this.store.get();return this.lastPageState==T&&t.state==_&&t.pageId!=S&&(t.state=T,t.pageId=S,this.store.set(t)),t}sendPageVisibilityEvent(t,{hitTime:e}={}){const i=this.getTimeSinceLastStoredChange(t,{hitTime:e});if(i&&i>=this.opts.visibleThreshold){const t=Math.round(i/1e3),r={transport:"beacon",nonInteraction:!0,eventCategory:"Page Visibility",eventAction:"track",eventValue:t,eventLabel:s.rZ};e&&(r.queueTime=(0,n.zO)()-e),this.opts.visibleMetricIndex&&(r["metric"+this.opts.visibleMetricIndex]=t),this.tracker.send("event",(0,n.VJ)(r,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}}sendPageLoad(){const t={transport:"beacon",eventCategory:"Page Visibility",eventAction:"page load",eventLabel:s.rZ,["metric"+this.opts.pageLoadsMetricIndex]:1,nonInteraction:!0};this.tracker.send("event",(0,n.VJ)(t,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}sendPageview({hitTime:t,isPageLoad:e}={}){const i={transport:"beacon"};t&&(i.queueTime=(0,n.zO)()-t),e&&this.opts.pageLoadsMetricIndex&&(i["metric"+this.opts.pageLoadsMetricIndex]=1),this.tracker.send("pageview",(0,n.VJ)(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}trackerSetOverride(t){return(e,i)=>{const s=(0,n.Kn)(e)?e:{[e]:i};s.page&&s.page!==this.tracker.get("page")&&this.lastPageState==T&&this.handleChange(),t(e,i)}}getTimeSinceLastStoredChange(t,{hitTime:e}={}){return t.time?(e||(0,n.zO)())-t.time:0}handleExternalStoreSet(t,e){t.time!=e.time&&(e.pageId!=S||e.state!=T||this.session.isExpired(e.sessionId)||this.sendPageVisibilityEvent(e,{hitTime:t.time}))}handleWindowUnload(){this.lastPageState!=_&&this.handleChange()}remove(){this.store.destroy(),this.session.destroy(),r.Z.remove(this.tracker,"set",this.trackerSetOverride),window.removeEventListener("unload",this.handleWindowUnload),document.removeEventListener("visibilitychange",this.handleChange)}})}}]);