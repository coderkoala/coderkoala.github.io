const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-B1qYLN50.js","assets/seo-DTGwJmOM.js","assets/Home-CGEZtkCn.css","assets/Gallery-BgAhoBAv.js","assets/SmartImg-CVmPc3JF.js","assets/SmartImg-DO-tLpu-.css","assets/Gallery-CaMaC-3K.css","assets/Project-G6fOND_V.js","assets/NotFound-Dyn9g03G.js","assets/NotFound-Cr_wQFex.css","assets/Project-EdMa7CdU.css","assets/Writing-CosLFsAL.js","assets/Writing-DyxIALO6.css","assets/Post-iNN5f6p7.js","assets/Post-KBJ79dg7.css","assets/Now--CJop4l-.js","assets/Now-BWaMw-6L.css","assets/Colophon-BUWwSpI2.js","assets/Colophon-DVfn-d6Z.css","assets/Cv-C4FCjnRO.js","assets/Cv-25iUBV5B.css","assets/Consult-C9qPPA5b.js","assets/Consult-D-cHJqBn.css","assets/About-hPiwjxO1.js","assets/About-FsmmSRXE.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t,n={},r){for(let i in t){let a=t[i],o=r?`${r}:${i}`:i;typeof a==`object`&&a?e(a,n,o):typeof a==`function`&&(n[o]=a)}return n}var t=(()=>{if(console.createTask)return console.createTask;let e={run:e=>e()};return()=>e})();function n(e,t,r,i){for(let a=r;a<e.length;a+=1)try{let r=i?i.run(()=>e[a](...t)):e[a](...t);if(r&&typeof r.then==`function`)return Promise.resolve(r).then(()=>n(e,t,a+1,i))}catch(e){return Promise.reject(e)}}function r(e,r,i){if(e.length>0)return n(e,r,0,t(i))}function i(e,n,r){if(e.length>0){let i=t(r);return Promise.all(e.map(e=>i.run(()=>e(...n))))}}function a(e,t){for(let n of[...e])n(t)}var o=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,n={}){if(!e||typeof t!=`function`)return()=>{};let r=e,i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!n.allowDeprecated){let e=i.message;e||=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:``),this._deprecatedMessages||=new Set,this._deprecatedMessages.has(e)||(console.warn(e),this._deprecatedMessages.add(e))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>`_`+e.replace(/\W+/g,`_`)+`_hook_cb`,configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&=(this.removeHook(e,t),void 0)}}hookOnce(e,t){let n,r=(...e)=>(typeof n==`function`&&n(),n=void 0,r=void 0,t(...e));return n=this.hook(e,r),n}removeHook(e,t){let n=this._hooks[e];if(n){let r=n.indexOf(t);r!==-1&&n.splice(r,1),n.length===0&&(this._hooks[e]=void 0)}}clearHook(e){this._hooks[e]=void 0}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t==`string`?{to:t}:t;let n=this._hooks[e]||[];this._hooks[e]=void 0;for(let t of n)this.hook(e,t)}deprecateHooks(e){for(let t in e)this.deprecateHook(t,e[t])}addHooks(t){let n=e(t),r=Object.keys(n).map(e=>this.hook(e,n[e]));return()=>{for(let e of r)e();r.length=0}}removeHooks(t){let n=e(t);for(let e in n)this.removeHook(e,n[e])}removeAllHooks(){this._hooks={}}callHook(e,...t){return this.callHookWith(r,e,t)}callHookParallel(e,...t){return this.callHookWith(i,e,t)}callHookWith(e,t,n){let r=this._before||this._after?{name:t,args:n,context:{}}:void 0;this._before&&a(this._before,r);let i=e(this._hooks[t]?[...this._hooks[t]]:[],n,t);return i instanceof Promise?i.finally(()=>{this._after&&r&&a(this._after,r)}):(this._after&&r&&a(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){let t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){let t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}};function s(){return new o}var c=new Set([`link`,`style`,`script`,`noscript`]),l=new Set([`title`,`titleTemplate`,`script`,`style`,`noscript`]),u=new Set([`base`,`meta`,`link`,`style`,`script`,`noscript`]),d=new Set([`title`,`base`,`htmlAttrs`,`bodyAttrs`,`meta`,`link`,`style`,`script`,`noscript`]),f=new Set([`base`,`title`,`titleTemplate`,`bodyAttrs`,`htmlAttrs`,`templateParams`]),p=new Set([`key`,`tagPosition`,`tagPriority`,`tagDuplicateStrategy`,`innerHTML`,`textContent`,`processTemplateParams`]),m=new Set([`templateParams`,`htmlAttrs`,`bodyAttrs`]),h=new Set([`theme-color`,`google-site-verification`,`og`,`article`,`book`,`profile`,`twitter`,`author`]),g=e=>typeof e==`number`?Number.isFinite(e):e;function _(e){return e===`__proto__`||e===`constructor`||e===`prototype`}var v=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,y={base:-10,title:10},b={critical:-8,high:-1,low:2},x={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},S=/@import/,C=e=>e===``||e===!0;function ee(e,t){if(typeof t.tagPriority==`number`)return t.tagPriority;let n=100,r=b[t.tagPriority]||0,i=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:x;if(t.tag in y)n=y[t.tag];else if(t.tag===`meta`){let e=t.props[`http-equiv`]===`content-security-policy`?`content-security-policy`:t.props.charset?`charset`:t.props.name===`viewport`?`viewport`:null;e&&(n=x.meta[e])}else if(t.tag===`link`&&t.props.rel)n=i.link[t.props.rel];else if(t.tag===`script`){let e=String(t.props.type);C(t.props.async)?n=i.script.async:t.props.src&&!C(t.props.defer)&&!C(t.props.async)&&e!==`module`&&!e.endsWith(`json`)||t.innerHTML&&!e.endsWith(`json`)?n=i.script.sync:(C(t.props.defer)&&t.props.src&&!C(t.props.async)||e===`module`)&&(n=i.script.defer)}else t.tag===`style`&&(n=t.innerHTML&&S.test(t.innerHTML)?i.style.imported:i.style.sync);return(n||100)+r}var te=[`name`,`property`,`http-equiv`],w=new Set([`viewport`,`description`,`keywords`,`robots`]);function T(e){let t=e.indexOf(`:`);if(t===-1)return!1;let n=e.indexOf(`:`,t+1),r=e.slice(t+1,n===-1?e.length:n);return r===`twitter`?e===`meta:twitter:image`||e.startsWith(`meta:twitter:image:`):h.has(r)}function ne(e){let{props:t,tag:n}=e;if(f.has(n))return n;if(n===`link`&&t.rel===`canonical`)return`canonical`;if(n===`link`&&t.rel===`alternate`){if(t.hreflang)return`alternate:${t.hreflang}`;if(t.type)return`alternate:${t.type}:${t.href||``}`}if(t.charset)return`charset`;if(e.tag===`meta`){for(let r of te)if(t[r]!==void 0){let i=t[r],a=i&&typeof i==`string`&&i.includes(`:`),o=i&&w.has(i);return`${n}:${i}${!(a||o)&&e.key?`:key:${e.key}`:``}`}}if(e.key)return`${n}:key:${e.key}`;if(t.id)return`${n}:id:${t.id}`;if(n===`link`&&t.rel===`alternate`)return`alternate:${t.href||``}`;if(l.has(n)){let t=e.textContent||e.innerHTML;if(t)return`${n}:content:${t}`}}function re(e){let t=e._h||e._d;if(t)return t;let n=e.textContent||e.innerHTML;if(n)return n;let r=Object.keys(e.props).sort();return`${e.tag}:${r.map(t=>`${t}:${String(e.props[t])}`).join(`,`)}`}function ie(e,t,n){typeof e==`function`&&(n&&(n===`titleTemplate`||n[0]===`o`&&n[1]===`n`)||(e=e()));let r=t?t(n,e):e;if(Array.isArray(r)){let e;for(let n=0;n<r.length;n++){let i=ie(r[n],t);e?e[n]=i:i!==r[n]&&(e=r.slice(0,n),e[n]=i)}return e||r}if(r?.constructor===Object){let e;for(let n in r){let i=_(n),a=i?void 0:ie(r[n],t,n);if(!e&&(i||n===`_resolver`||a!==r[n])){e={};for(let t in r){if(t===n)break;e[t]=r[t]}}e&&!i&&(e[n]=a)}return e||r}return r}var ae=/[\s"'<>/=\x00-\x1F\x7F]/;function oe(e,t){let n=e===`style`?new Map:new Set;function r(t){if(t==null||t===void 0)return;let r=String(t).trim();if(r){if(e===`style`){let[e,...t]=r.split(`:`).map(e=>e?e.trim():``);e&&t.length&&n.set(e,t.join(`:`))}else r.split(` `).filter(Boolean).forEach(e=>n.add(e))}}return typeof t==`string`?e===`style`?t.split(`;`).forEach(r):r(t):Array.isArray(t)?t.forEach(e=>r(e)):t&&typeof t==`object`&&Object.entries(t).forEach(([t,i])=>{i&&i!==`false`&&(e===`style`?n.set(String(t).trim(),String(i)):r(t))}),n}function se(e,t){if(e.props=e.props||{},!t)return e;if(e.tag===`templateParams`)return e.props=t,e;let n=u.has(e.tag)||e.tag===`htmlAttrs`||e.tag===`bodyAttrs`;for(let r of Object.keys(t)){if(_(r))continue;let i=r.startsWith(`data-`),a=n&&!p.has(r),o=a&&!i?r.toLowerCase():r;if(a&&(!o||ae.test(o)))continue;let s=t[r];if(s===null){e.props[o]=null;continue}if(r===`class`||r===`style`){e.props[r]=oe(r,s);continue}if(p.has(r)){if((r===`textContent`||r===`innerHTML`)&&typeof s==`object`){let n=t.type;if(t.type||(n=`application/json`),!n?.endsWith(`json`)&&n!==`speculationrules`)continue;t.type=n,e.props.type=n,e[r]=JSON.stringify(s)}else e[r]=s;continue}let c=String(s),l=e.tag===`meta`&&o===`content`;c===`true`||c===``?e.props[o]=i||l?c:!0:!s&&i&&c===`false`?e.props[o]=`false`:s!==void 0&&(e.props[o]=s)}return e}function ce(e,t){let n=se({tag:e,props:{}},typeof t==`object`&&typeof t!=`function`?t:{[e===`script`||e===`noscript`||e===`style`?`innerHTML`:`textContent`]:t});return n.key&&c.has(n.tag)&&(n.props[`data-hid`]=n._h=n.key),n.tag===`script`&&typeof n.innerHTML==`object`&&(n.innerHTML=JSON.stringify(n.innerHTML),n.props.type=n.props.type||`application/json`),Array.isArray(n.props.content)?n.props.content.map(e=>({...n,props:{...n.props,content:e}})):n}function le(e,t){if(!e)return[];typeof e==`function`&&(e=e());let n=(e,n)=>{for(let r=0;r<t.length;r++)n=t[r](e,n);return n};e=n(void 0,e);let r=[];return e=ie(e,n),Object.entries(e||{}).forEach(([e,t])=>{if(t!==void 0)for(let n of Array.isArray(t)?t:[t])r.push(ce(e,n))}),r.flat()}function ue(e,t){let n=typeof t==`function`?t(e):t,r=n.key||String(e.plugins.size+1);e.plugins.get(r)||(e.plugins.set(r,n),e.hooks.addHooks(n.hooks||{}))}function de(e={}){let t=s();t.addHooks(e.hooks||{});let n=!e.document,r=new Map,i=new Map,a=new Set,o={_entryCount:1,plugins:i,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:r,headEntries(){return[...r.values()]},use:e=>ue(o,e),push(e,i){let s={...i||{}};delete s.head;let c=s._index??o._entryCount++,l={_i:c,input:e,options:s},u={_poll(e=!1){o.dirty=!0,!e&&a.add(c),t.callHook(`entries:updated`,o)},dispose(){r.delete(c)&&o.invalidate()},patch(e){(!s.mode||s.mode===`server`&&n||s.mode===`client`&&!n)&&(l.input=e,r.set(c,l),u._poll())}};return u.patch(e),u},async resolveTags(){let n={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await t.callHook(`entries:resolve`,n);a.size;){let n=a.values().next().value;a.delete(n);let i=r.get(n);if(i){let n={tags:le(i.input,e.propResolvers||[]).map(e=>Object.assign(e,i.options)),entry:i};await t.callHook(`entries:normalize`,n),i._tags=n.tags.map((e,t)=>(e._w=ee(o,e),e._p=(i._i<<10)+t,e._d=ne(e),e._d||(e._h=re(e)),e))}}let i=!1;n.entries.flatMap(e=>(e._tags||[]).map(e=>({...e,props:{...e.props}}))).sort(v).reduce((e,t)=>{let n=t._d||t._h;if(!e.has(n))return e.set(n,t);let r=e.get(n);if((t?.tagDuplicateStrategy||(m.has(t.tag)?`merge`:null)||(t.key&&t.key===r.key?`merge`:null))===`merge`){let i={...r.props};Object.entries(t.props).forEach(([e,t])=>i[e]=e===`style`?new Map([...r.props.style||new Map,...t]):e===`class`?new Set([...r.props.class||new Set,...t]):t),e.set(n,{...t,props:i})}else t._p>>10==r._p>>10&&t.tag===`meta`&&T(n)?(e.set(n,Object.assign([...Array.isArray(r)?r:[r],t],t)),i=!0):(t._w===r._w?t._p>r._p:t?._w<r?._w)&&e.set(n,t);return e},n.tagMap);let s=n.tagMap.get(`title`),c=n.tagMap.get(`titleTemplate`);if(o._title=s?.textContent,c){let e=c?.textContent;if(o._titleTemplate=e,e){let t=typeof e==`function`?e(s?.textContent):e;typeof t==`string`&&!o.plugins.has(`template-params`)&&(t=t.replace(`%s`,s?.textContent||``)),s?t===null?n.tagMap.delete(`title`):n.tagMap.set(`title`,{...s,textContent:t}):(c.tag=`title`,c.textContent=t)}}n.tags=Array.from(n.tagMap.values()),i&&(n.tags=n.tags.flat().sort(v)),await t.callHook(`tags:beforeResolve`,n),await t.callHook(`tags:resolve`,n),await t.callHook(`tags:afterResolve`,n);let l=[];for(let e of n.tags){let{innerHTML:t,tag:n,props:r}=e;d.has(n)&&(Object.keys(r).length!==0||g(e.innerHTML)||g(e.textContent))&&(n!==`meta`||g(r.content)||r[`http-equiv`]||r.charset)&&(n===`script`&&t&&(String(r.type).endsWith(`json`)?e.innerHTML=(typeof t==`string`?t:JSON.stringify(t)).replace(/</g,`\\u003C`):typeof t==`string`&&(e.innerHTML=t.replace(RegExp(`</${n}`,`g`),`<\\/${n}`)),e._d=ne(e)),l.push(e))}return l},invalidate(){for(let e of r.values())a.add(e._i);o.dirty=!0,t.callHook(`entries:updated`,o)}};return(e?.plugins||[]).forEach(e=>ue(o,e)),o.hooks.callHook(`init`,o),e.init?.forEach(e=>e&&o.push(e)),o}async function fe(e,t={}){let n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;let r={shouldRender:!0,tags:[]};if(await e.hooks.callHook(`dom:beforeRender`,r),r.shouldRender)return e._domUpdatePromise||=new Promise(async t=>{let r=new Map,i=new Promise(t=>{e.resolveTags().then(e=>{t(e.map(e=>{let t=r.get(e._d)||0,n={tag:e,id:(t?`${e._d}:${t}`:e._d)||e._h,shouldRender:!0};return e._d&&T(e._d)&&r.set(e._d,t+1),n}))})}),a=e._dom;if(!a){a={title:n.title,elMap:new Map().set(`htmlAttrs`,n.documentElement).set(`bodyAttrs`,n.body)};for(let e of[`body`,`head`]){let t=n[e]?.children;for(let e of t){let t=e.tagName.toLowerCase();if(!u.has(t))continue;let n=se({tag:t,props:{}},{innerHTML:e.innerHTML,...e.getAttributeNames().reduce((t,n)=>(t[n]=e.getAttribute(n),t),{})||{}});if(n.key=e.getAttribute(`data-hid`)||void 0,n._d=ne(n)||re(n),a.elMap.has(n._d)){let t=1,r=n._d;for(;a.elMap.has(r);)r=`${n._d}:${t++}`;a.elMap.set(r,e)}else a.elMap.set(n._d,e)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function o(e,t,n){let r=`${e}:${t}`;a.sideEffects[r]=n,delete a.pendingSideEffects[r]}function s({id:e,$el:t,tag:r}){let i=r.tag.endsWith(`Attrs`);a.elMap.set(e,t),i||(r.textContent&&r.textContent!==t.textContent&&(t.textContent=r.textContent),r.innerHTML&&r.innerHTML!==t.innerHTML&&(t.innerHTML=r.innerHTML),o(e,`el`,()=>{t?.remove(),a.elMap.delete(e)}));for(let a in r.props){if(!Object.prototype.hasOwnProperty.call(r.props,a))continue;let s=r.props[a];if(a.startsWith(`on`)&&typeof s==`function`){let e=t?.dataset;if(e&&e[`${a}fired`]){let e=a.slice(0,-5);s.call(t,new Event(e.substring(2)))}t.getAttribute(`data-${a}`)!==``&&((r.tag===`bodyAttrs`?n.defaultView:t).addEventListener(a.substring(2),s.bind(t)),t.setAttribute(`data-${a}`,``));continue}let c=`attr:${a}`;if(a===`class`){if(!s)continue;for(let n of s)i&&o(e,`${c}:${n}`,()=>t.classList.remove(n)),!t.classList.contains(n)&&t.classList.add(n)}else if(a===`style`){if(!s)continue;for(let[n,r]of s)o(e,`${c}:${n}`,()=>{t.style.removeProperty(n)}),t.style.setProperty(n,r)}else s!==!1&&s!==null&&(t.getAttribute(a)!==s&&t.setAttribute(a,s===!0?``:String(s)),i&&o(e,c,()=>t.removeAttribute(a)))}}let c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await i;for(let e of d){let{tag:t,shouldRender:r,id:i}=e;r&&(t.tag===`title`?(n.title=t.textContent,o(`title`,``,()=>n.title=a.title)):(e.$el=e.$el||a.elMap.get(i),e.$el?s(e):u.has(t.tag)&&c.push(e)))}for(let e of c){let t=e.tag.tagPosition||`head`;e.$el=n.createElement(e.tag.tag),s(e),l[t]=l[t]||n.createDocumentFragment(),l[t].appendChild(e.$el)}for(let t of d)await e.hooks.callHook(`dom:renderTag`,t,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose);for(let e in a.pendingSideEffects)a.pendingSideEffects[e]();e._dom=a,await e.hooks.callHook(`dom:rendered`,{renders:d}),t()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1}),e._domUpdatePromise}function pe(e={}){let t=e.domOptions?.render||fe;e.document=e.document||(typeof window<`u`?document:void 0);let n=e.document?.head.querySelector(`script[id="unhead:payload"]`)?.innerHTML||!1,r=de({...e,plugins:[...e.plugins||[],{key:`client`,hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]});return r.ssr=!1,r}function me(e,t){let n=0;return()=>{let r=++n;t(()=>{n===r&&e()})}}function he(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var E={},ge=[],_e=()=>{},ve=()=>!1,ye=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),be=e=>e.startsWith(`onUpdate:`),D=Object.assign,xe=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},Se=Object.prototype.hasOwnProperty,O=(e,t)=>Se.call(e,t),k=Array.isArray,Ce=e=>ke(e)===`[object Map]`,we=e=>ke(e)===`[object Set]`,Te=e=>ke(e)===`[object Date]`,A=e=>typeof e==`function`,j=e=>typeof e==`string`,Ee=e=>typeof e==`symbol`,M=e=>typeof e==`object`&&!!e,De=e=>(M(e)||A(e))&&A(e.then)&&A(e.catch),Oe=Object.prototype.toString,ke=e=>Oe.call(e),Ae=e=>ke(e).slice(8,-1),je=e=>ke(e)===`[object Object]`,Me=e=>j(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,Ne=he(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),Pe=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Fe=/-\w/g,Ie=Pe(e=>e.replace(Fe,e=>e.slice(1).toUpperCase())),Le=/\B([A-Z])/g,Re=Pe(e=>e.replace(Le,`-$1`).toLowerCase()),ze=Pe(e=>e.charAt(0).toUpperCase()+e.slice(1)),Be=Pe(e=>e?`on${ze(e)}`:``),Ve=(e,t)=>!Object.is(e,t),He=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ue=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},We=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Ge=e=>{let t=j(e)?Number(e):NaN;return isNaN(t)?e:t},Ke,qe=()=>Ke||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function Je(e){if(k(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=j(r)?Qe(r):Je(r);if(i)for(let e in i)t[e]=i[e]}return t}if(j(e)||M(e))return e}var Ye=/;(?![^(]*\))/g,Xe=/:([^]+)/,Ze=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Qe(e){let t={};return e.replace(Ze,e=>e.startsWith(`/*`)?``:e).split(Ye).forEach(e=>{if(e){let n=e.split(Xe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function $e(e){let t=``;if(j(e))t=e;else if(k(e))for(let n=0;n<e.length;n++){let r=$e(e[n]);r&&(t+=r+` `)}else if(M(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var et=he(`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`);function tt(e){return!!e||e===``}function nt(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=ot(e[i],t[i],n);return r}function rt(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&ot(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function it(e,t,n){let r=Ce(e),i=Ce(t);if(r||i||(r=we(e),i=we(t),r||i))return r&&i?rt(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!ot(e[r],t[r],n))return!1}return String(e)===String(t)}function at(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function ot(e,t,n){if(e===t)return!0;let r=Te(e),i=Te(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=Ee(e),i=Ee(t),r||i?e===t:(r=k(e),i=k(t),r||i?r&&i?at(e,t,n,nt):!1:(r=M(e),i=M(t),r||i?!r||!i?!1:at(e,t,n,it):String(e)===String(t))))}var st=e=>!!(e&&e.__v_isRef===!0),N=e=>j(e)?e:e==null?``:k(e)||M(e)&&(e.toString===Oe||!A(e.toString))?st(e)?N(e.value):JSON.stringify(e,ct,2):String(e),ct=(e,t)=>st(t)?ct(e,t.value):Ce(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[lt(t,r)+` =>`]=n,e),{})}:we(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>lt(e))}:Ee(t)?lt(t):M(t)&&!k(t)&&!je(t)?String(t):t,lt=(e,t=``)=>Ee(e)?`Symbol(${e.description??t})`:e,P,ut=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&P&&(P.active?(this.parent=P,this.index=(P.scopes||(P.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=P;try{return P=this,e()}finally{P=t}}}on(){++this._on===1&&(this.prevScope=P,P=this)}off(){if(this._on>0&&--this._on===0){if(P===this)P=this.prevScope;else{let e=P;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function dt(){return P}var F,ft=new WeakSet,pt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,P&&(P.active?P.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ft.has(this)&&(ft.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_t(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,At(this),bt(this);let e=F,t=Et;F=this,Et=!0;try{return this.fn()}finally{xt(this),F=e,Et=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wt(e);this.deps=this.depsTail=void 0,At(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ft.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){St(this)&&this.run()}get dirty(){return St(this)}},mt=0,ht,gt;function _t(e,t=!1){e.flags|=8,t?(e.next=gt,gt=e):(e.next=ht,ht=e)}function vt(){mt++}function yt(){if(--mt>0)return;if(gt){let e=gt;for(gt=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ht;){let t=ht;for(ht=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function bt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xt(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),wt(r),Tt(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function St(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ct(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ct(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===jt)||(e.globalVersion=jt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!St(e))))return;e.flags|=2;let t=e.dep,n=F,r=Et;F=e,Et=!0;try{bt(e);let n=e.fn(e._value);(t.version===0||Ve(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{F=n,Et=r,xt(e),e.flags&=-3}}function wt(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)wt(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tt(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Et=!0,Dt=[];function Ot(){Dt.push(Et),Et=!1}function kt(){let e=Dt.pop();Et=e===void 0||e}function At(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=F;F=void 0;try{t()}finally{F=e}}}var jt=0,Mt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Nt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!F||!Et||F===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==F)t=this.activeLink=new Mt(F,this),F.deps?(t.prevDep=F.depsTail,F.depsTail.nextDep=t,F.depsTail=t):F.deps=F.depsTail=t,Pt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=F.depsTail,t.nextDep=void 0,F.depsTail.nextDep=t,F.depsTail=t,F.deps===t&&(F.deps=e)}return t}trigger(e){this.version++,jt++,this.notify(e)}notify(e){vt();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{yt()}}};function Pt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Pt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ft=new WeakMap,It=Symbol(``),Lt=Symbol(``),Rt=Symbol(``);function zt(e,t,n){if(Et&&F){let t=Ft.get(e);t||Ft.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Nt),r.map=t,r.key=n),r.track()}}function Bt(e,t,n,r,i,a){let o=Ft.get(e);if(!o){jt++;return}let s=e=>{e&&e.trigger()};if(vt(),t===`clear`)o.forEach(s);else{let i=k(e),a=i&&Me(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Rt||!Ee(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Rt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(It)),Ce(e)&&s(o.get(Lt)));break;case`delete`:i||(s(o.get(It)),Ce(e)&&s(o.get(Lt)));break;case`set`:Ce(e)&&s(o.get(It))}}yt()}function Vt(e){let t=I(e);return t===e||(zt(t,`iterate`,Rt),On(e))?t:Dn(e)?En(e)?t.map(e=>Mn(jn(e))):t.map(Mn):t.map(jn)}function Ht(e){return zt(e=I(e),`iterate`,Rt),e}function Ut(e,t){return Dn(e)?Mn(En(e)?jn(t):t):jn(t)}var Wt={__proto__:null,[Symbol.iterator](){return Gt(this,Symbol.iterator,e=>Ut(this,e))},concat(...e){return Vt(this).concat(...e.map(e=>k(e)?Vt(e):e))},entries(){return Gt(this,`entries`,e=>(e[1]=Ut(this,e[1]),e))},every(e,t){return Jt(this,`every`,e,t,void 0,arguments)},filter(e,t){return Jt(this,`filter`,e,t,e=>e.map(e=>Ut(this,e)),arguments)},find(e,t){return Jt(this,`find`,e,t,e=>Ut(this,e),arguments)},findIndex(e,t){return Jt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Jt(this,`findLast`,e,t,e=>Ut(this,e),arguments)},findLastIndex(e,t){return Jt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Jt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Xt(this,`includes`,e)},indexOf(...e){return Xt(this,`indexOf`,e)},join(e){return Vt(this).join(e)},lastIndexOf(...e){return Xt(this,`lastIndexOf`,e)},map(e,t){return Jt(this,`map`,e,t,void 0,arguments)},pop(){return Zt(this,`pop`)},push(...e){return Zt(this,`push`,e)},reduce(e,...t){return Yt(this,`reduce`,e,t)},reduceRight(e,...t){return Yt(this,`reduceRight`,e,t)},shift(){return Zt(this,`shift`)},some(e,t){return Jt(this,`some`,e,t,void 0,arguments)},splice(...e){return Zt(this,`splice`,e)},toReversed(){return Vt(this).toReversed()},toSorted(e){return Vt(this).toSorted(e)},toSpliced(...e){return Vt(this).toSpliced(...e)},unshift(...e){return Zt(this,`unshift`,e)},values(){return Gt(this,`values`,e=>Ut(this,e))}};function Gt(e,t,n){let r=Ht(e),i=r[t],a=i.call(r);if(r!==e&&!On(e)){if(a[Symbol.toStringTag]===`Array Iterator`){let e=Object.create(Object.getPrototypeOf(a));return e.next=()=>Kt(a.next(),n),i!==qt[t]&&Object.defineProperties(e,{return:{get(){let e=a.return;return typeof e==`function`?e.bind(a):e}},throw:{get(){let e=a.throw;return typeof e==`function`?e.bind(a):e}}}),e}a._next=a.next,a.next=()=>Kt(a._next(),n)}return a}function Kt(e,t){return e.done||(e.value=t(e.value)),e}var qt=Array.prototype;function Jt(e,t,n,r,i,a){let o=Ht(e),s=o!==e&&!On(e),c=o[t];if(c!==qt[t]){let t=c.apply(e,a);return s?jn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Ut(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function Yt(e,t,n,r){let i=Ht(e),a=i!==e&&!On(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Ut(e,t)),n.call(this,t,Ut(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Ut(e,c):c}function Xt(e,t,n){let r=I(e);zt(r,`iterate`,Rt);let i=r[t](...n);return(i===-1||i===!1)&&kn(n[0])?(n[0]=I(n[0]),r[t](...n)):i}function Zt(e,t,n=[]){Ot(),vt();let r=I(e)[t].apply(e,n);return yt(),kt(),r}var Qt=he(`__proto__,__v_isRef,__isVue`),$t=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(Ee));function en(e){Ee(e)||(e=String(e));let t=I(this);return zt(t,`has`,e),t.hasOwnProperty(e)}var tn=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?bn:yn:i?vn:_n).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=k(e);if(!r){let e;if(a&&(e=Wt[t]))return e;if(t===`hasOwnProperty`)return en}let o=Reflect.get(e,t,L(e)?e:n);if((Ee(t)?$t.has(t):Qt(t))||(r||zt(e,`get`,t),i))return o;if(L(o)){let e=a&&Me(t)?o:o.value;return r&&M(e)?wn(e):e}return M(o)?r?wn(o):Sn(o):o}},nn=class extends tn{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=k(e)&&Me(t);if(!this._isShallow){let e=Dn(i);if(!On(n)&&!Dn(n)&&(i=I(i),n=I(n)),!a&&L(i)&&!L(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:O(e,t),s=Reflect.set(e,t,n,L(e)?e:r);return e===I(r)&&s&&(o?Ve(n,i)&&Bt(e,`set`,t,n,i):Bt(e,`add`,t,n)),s}deleteProperty(e,t){let n=O(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Bt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return Ee(t)&&$t.has(t)||zt(e,`has`,t),n}ownKeys(e){return zt(e,`iterate`,k(e)?`length`:It),Reflect.ownKeys(e)}},rn=class extends tn{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},an=new nn,on=new rn,sn=new nn(!0),cn=e=>e,ln=e=>Reflect.getPrototypeOf(e);function un(e,t,n){return function(...r){let i=this.__v_raw,a=I(i),o=Ce(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?cn:t?Mn:jn;return!t&&zt(a,`iterate`,c?Lt:It),D(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function dn(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function fn(e,t){let n={get(n){let r=this.__v_raw,i=I(r),a=I(n);e||(Ve(n,a)&&zt(i,`get`,n),zt(i,`get`,a));let{has:o}=ln(i),s=t?cn:e?Mn:jn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&zt(I(t),`iterate`,It),t.size},has(t){let n=this.__v_raw,r=I(n),i=I(t);return e||(Ve(t,i)&&zt(r,`has`,t),zt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=I(a),s=t?cn:e?Mn:jn;return!e&&zt(o,`iterate`,It),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return D(n,e?{add:dn(`add`),set:dn(`set`),delete:dn(`delete`),clear:dn(`clear`)}:{add(e){let n=I(this),r=ln(n),i=I(e),a=!t&&!On(e)&&!Dn(e)?i:e;return r.has.call(n,a)||Ve(e,a)&&r.has.call(n,e)||Ve(i,a)&&r.has.call(n,i)||(n.add(a),Bt(n,`add`,a,a)),this},set(e,n){t||On(n)||Dn(n)||(n=I(n));let r=I(this),{has:i,get:a}=ln(r),o=i.call(r,e);o||=(e=I(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?Ve(n,s)&&Bt(r,`set`,e,n,s):Bt(r,`add`,e,n),this},delete(e){let t=I(this),{has:n,get:r}=ln(t),i=n.call(t,e);i||=(e=I(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Bt(t,`delete`,e,void 0,a),o},clear(){let e=I(this),t=e.size!==0,n=e.clear();return t&&Bt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=un(r,e,t)}),n}function pn(e,t){let n=fn(e,t);return(r,i,a)=>i===`__v_isReactive`?!e:i===`__v_isReadonly`?e:i===`__v_isShallow`?t:i===`__v_raw`?r:Reflect.get(O(n,i)&&i in r?n:r,i,a)}var mn={get:pn(!1,!1)},hn={get:pn(!1,!0)},gn={get:pn(!0,!1)},_n=new WeakMap,vn=new WeakMap,yn=new WeakMap,bn=new WeakMap;function xn(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Sn(e){return Dn(e)?e:Tn(e,!1,an,mn,_n)}function Cn(e){return Tn(e,!1,sn,hn,vn)}function wn(e){return Tn(e,!0,on,gn,yn)}function Tn(e,t,n,r,i){if(!M(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=xn(Ae(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function En(e){return Dn(e)?En(e.__v_raw):!!(e&&e.__v_isReactive)}function Dn(e){return!!(e&&e.__v_isReadonly)}function On(e){return!!(e&&e.__v_isShallow)}function kn(e){return e?!!e.__v_raw:!1}function I(e){let t=e&&e.__v_raw;return t?I(t):e}function An(e){return!O(e,`__v_skip`)&&Object.isExtensible(e)&&Ue(e,`__v_skip`,!0),e}var jn=e=>M(e)?Sn(e):e,Mn=e=>M(e)?wn(e):e;function L(e){return e?e.__v_isRef===!0:!1}function R(e){return Pn(e,!1)}function Nn(e){return Pn(e,!0)}function Pn(e,t){return L(e)?e:new Fn(e,t)}var Fn=class{constructor(e,t){this.dep=new Nt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:I(e),this._value=t?e:jn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||On(e)||Dn(e);e=n?e:I(e),Ve(e,t)&&(this._rawValue=e,this._value=n?e:jn(e),this.dep.trigger())}};function z(e){return L(e)?e.value:e}function In(e){return A(e)?e():z(e)}var Ln={get:(e,t,n)=>t===`__v_raw`?e:z(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return L(i)&&!L(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Rn(e){return En(e)?e:new Proxy(e,Ln)}var zn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&F!==this)return _t(this,!0),!0}get value(){let e=this.dep.track();return Ct(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Bn(e,t,n=!1){let r,i;return A(e)?r=e:(r=e.get,i=e.set),new zn(r,i,n)}var Vn={},Hn=new WeakMap,Un=void 0;function Wn(e,t=!1,n=Un){if(n){let t=Hn.get(n);t||Hn.set(n,t=[]),t.push(e)}}function Gn(e,t,n=E){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:On(e)||i===!1||i===0?Kn(e,1):Kn(e),u,d,f,p,m=!1,h=!1;if(L(e)?(d=()=>e.value,m=On(e)):En(e)?(d=()=>l(e),m=!0):k(e)?(h=!0,m=e.some(e=>En(e)||On(e)),d=()=>e.map(e=>{if(L(e))return e.value;if(En(e))return l(e);if(A(e))return c?c(e,2):e()})):d=A(e)?t?c?()=>c(e,2):e:()=>{if(f){Ot();try{f()}finally{kt()}}let t=Un;Un=u;try{return c?c(e,3,[p]):e(p)}finally{Un=t}}:_e,t&&i){let e=d,t=i===!0?1/0:i;d=()=>Kn(e(),t)}let g=dt(),_=()=>{u.stop(),g&&g.active&&xe(g.effects,u)};if(a&&t){let e=t;t=(...t)=>{try{return e(...t)}finally{_()}}}let v=h?Array(e.length).fill(Vn):Vn,y=e=>{if(u.flags&1&&(u.dirty||e)){if(t){let n=u.run();if(e||i||m||(h?n.some((e,t)=>Ve(e,v[t])):Ve(n,v))){let e=Un;Ot();try{f&&f(),Un=u;let e=[n,v===Vn?void 0:h&&v[0]===Vn?[]:v,p];v=n,c?c(t,3,e):t(...e)}finally{Un=e,kt()}}}else u.run()}};return s&&s(y),u=new pt(d),u.scheduler=o?()=>o(y,!1):y,p=e=>Wn(e,!1,u),f=u.onStop=()=>{let e=Hn.get(u);if(e){if(c)c(e,4);else for(let t of e)t();Hn.delete(u)}},t?r?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Kn(e,t=1/0,n){if(t<=0||!M(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,L(e))Kn(e.value,t,n);else if(k(e))for(let r=0;r<e.length;r++)Kn(e[r],t,n);else if(we(e)||Ce(e))e.forEach(e=>{Kn(e,t,n)});else if(je(e)){for(let r in e)Kn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Kn(e[r],t,n)}return e}function qn(e,t,n,r){try{return r?e(...r):e()}catch(e){Yn(e,t,n)}}function Jn(e,t,n,r){if(A(e)){let i=qn(e,t,n,r);return i&&De(i)&&i.catch(e=>{Yn(e,t,n)}),i}if(k(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Jn(e[a],t,n,r));return i}}function Yn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||E;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){Ot(),qn(a,null,10,[e,i,o]),kt();return}}Xn(e,n,i,r,o)}function Xn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var Zn=[],Qn=-1,$n=[],er=null,tr=0,nr=Promise.resolve(),rr=null;function ir(e){let t=rr||nr;return e?t.then(this?e.bind(this):e):t}function ar(e){let t=Qn+1,n=Zn.length;for(;t<n;){let r=t+n>>>1,i=Zn[r],a=pr(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function or(e){if(!(e.flags&1)){let t=pr(e),n=Zn[Zn.length-1];!n||!(e.flags&2)&&t>=pr(n)?Zn.push(e):Zn.splice(ar(t),0,e),e.flags|=1,sr()}}function sr(){rr||=nr.then(mr)}function cr(e){if(!k(e))er&&e.id===-1?er.splice(tr+1,0,e):e.flags&1||($n.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)$n.push(e[t]);sr()}function lr(e,t,n,r=Qn+1){for(;r<Zn.length;r++){let n=Zn[r];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;Zn.splice(r,1),r=e?r-1:Qn,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ur(e,t,n=0){if($n.length){let e=$n,r=0;if(t){e=[];for(let i=0;i<$n.length;i++){let a=$n[i];(a.i===void 0?t.has(a):!a.i||a.i.uid<n)?$n[r++]=a:e.push(a)}}let i=[...new Set(e)].sort((e,t)=>pr(e)-pr(t));if($n.length=r,er){for(let e=0;e<i.length;e++)er.push(i[e]);return}for(er=i,tr=0;tr<er.length;tr++){let e=er[tr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}er=null,tr=0}}var dr=!1;function fr(e,t){if(dr){e();return}let n=t===void 0?void 0:new Set($n);e(),dr=!0;try{lr(void 0,t),ur(void 0,n,t)}finally{dr=!1}}var pr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function mr(e){try{for(Qn=0;Qn<Zn.length;Qn++){let e=Zn[Qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qn<Zn.length;Qn++){let e=Zn[Qn];e&&(e.flags&=-2)}Qn=-1,Zn.length=0,ur(e),rr=null,(Zn.length||$n.length)&&mr(e)}}var hr=null,gr=null;function _r(e){let t=hr;return hr=e,gr=e&&e.type.__scopeId||null,t}function vr(e,t=hr,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&co(-1);let i=_r(t),a=io.length,o;try{o=e(...n)}finally{for(let e=io.length;e>a;e--)oo();_r(i),r._d&&co(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yr(e,t){if(hr===null)return e;let n=Go(hr),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=E]=t[e];i&&(A(i)&&(i={mounted:i,updated:i}),i.deep&&Kn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function br(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ot(),Jn(c,n,8,[e.el,s,e,t]),kt())}}function xr(e,t){if(jo){let n=jo.provides,r=jo.parent&&jo.parent.provides;r===n&&(n=jo.provides=Object.create(r)),n[e]=t}}function Sr(e,t,n=!1){let r=Mo();if(r||ua){let i=ua?ua._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&A(t)?t.call(r&&r.proxy):t}}function Cr(){return!!(Mo()||ua)}var wr=Symbol.for(`v-scx`),Tr=()=>Sr(wr);function Er(e,t){return Or(e,null,t)}function Dr(e,t,n){return Or(e,t,n)}function Or(e,t,n=E){let{immediate:r,deep:i,flush:a,once:o}=n,s=D({},n),c=t&&r||!t&&a!==`post`,l;if(Ro){if(a===`sync`){let e=Tr();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=_e,e.resume=_e,e.pause=_e,e}}let u=jo;s.call=(e,t,n)=>Jn(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{e.i=u,Ha(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():or(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=Gn(e,t,s);return Ro&&(l?l.push(f):c&&f()),f}function kr(e,t,n){let r=this.proxy,i=j(e)?e.includes(`.`)?Ar(r,e):()=>r[e]:e.bind(r,r),a;A(t)?a=t:(a=t.handler,n=t);let o=Fo(this),s=Or(i,a.bind(r),n);return o(),s}function Ar(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var jr=Symbol(`_vte`),Mr=e=>e.__isTeleport,Nr=Symbol(`_leaveCb`),Pr=Symbol(`_enterCb`);function Fr(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ti(()=>{e.isMounted=!0}),Oi(()=>{e.isUnmounting=!0}),e}var Ir=[Function,Array],Lr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ir,onEnter:Ir,onAfterEnter:Ir,onEnterCancelled:Ir,onBeforeLeave:Ir,onLeave:Ir,onAfterLeave:Ir,onLeaveCancelled:Ir,onBeforeAppear:Ir,onAppear:Ir,onAfterAppear:Ir,onAppearCancelled:Ir},Rr={name:`BaseTransition`,props:Lr,setup(e,{slots:t}){let n=Mo(),r=Fr();return()=>{let i=t.default&&Kr(t.default(),!0),a=i&&i.length?zr(i):n.subTree?xo():void 0;if(!a)return;let o=I(e),{mode:s}=o;if(r.isLeaving)return Ur(a);let c=Wr(a);if(!c)return Ur(a);let l=Hr(c,o,r,n,e=>l=e);c.type!==V&&Gr(c,l);let u=n.subTree&&Wr(n.subTree);if(u&&u.type!==V&&!po(u,c)&&qr(n.subTree)){let e=Hr(u,o,r,n);if(Gr(u,e),s===`out-in`&&c.type!==V)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},Ur(a);s===`in-out`&&c.type!==V?e.delayLeave=(e,t,n)=>{let i=Vr(r,u);i[String(u.key)]=u,e[Nr]=()=>{t(),e[Nr]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function zr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==V){t=n;break}}return t}var Br=Rr;function Vr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Hr(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),x=Vr(n,e),S=(e,t)=>{e&&Jn(e,r,9,t)},C=(e,t)=>{let n=t[1];S(e,t),k(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},ee={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=g||c;else return}t[Nr]&&t[Nr](!0);let i=x[b];if(i&&po(e,i)){let e=i.el[Nr];if(!e){let t=qr(i);e=t&&t.el[Nr]}e&&e()}S(r,[t])},enter(t){if(x[b]===e)return;let r=l,i=u,o=d;if(!n.isMounted){if(a)r=_||l,i=v||u,o=y||d;else return}let s=!1;t[Pr]=e=>{s||(s=!0,S(e?o:i,[t]),ee.delayedLeave&&ee.delayedLeave(),t[Pr]=void 0)};let c=t[Pr].bind(null,!1);r?C(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[Pr]&&t[Pr](!0),n.isUnmounting)return r();S(f,[t]);let a=!1;t[Nr]=n=>{a||(a=!0,r(),S(n?h:m,[t]),t[Nr]=void 0,x[i]===e&&delete x[i])};let o=t[Nr].bind(null,!1);x[i]=e,p?C(p,[t,o]):o()},clone(e){let a=Hr(e,t,n,r,i);return i&&i(a),a}};return ee}function Ur(e){if(_i(e))return e=vo(e),e.children=null,e}function Wr(e){if(!_i(e))return Mr(e.type)&&e.children?zr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&A(n.default))return n.default()}}function Gr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Gr(Mr(n.type)&&Wr(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===B&&k(e.children)){let n=_a(e.children,!1);n&&Gr(n,t)}}function Kr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===B?(o.patchFlag&128&&i++,r=r.concat(Kr(o.children,t,s))):(t||o.type!==V)&&r.push(s==null?o:vo(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function qr(e){if(e.component)return qr(e.component.subTree);if(e.type===B){let t=k(e.children)&&_a(e.children,!1);return t?qr(t):void 0}if(e.type!==V)return e}function Jr(e,t){return A(e)?D({name:e.name},t,{setup:e}):e}function Yr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Xr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Zr=new WeakMap;function Qr(e,t,n,r,i=!1){if(k(e)){e.forEach((e,a)=>Qr(e,t&&(k(t)?t[a]:t),n,r,i));return}if(gi(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?Go(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===E?s.refs={}:s.refs,d=s.setupState,f=I(d),p=d===E?ve:e=>!Xr(u,e)&&O(f,e),m=(e,t)=>!(t&&Xr(u,t));if(l!=null&&l!==c){if($r(t),j(l))u[l]=null,p(l)&&(d[l]=null);else if(L(l)){let e=t;m(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(A(c))qn(c,s,12,[o,u]);else{let t=j(c),r=L(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)k(n)&&xe(n,a);else if(k(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Zr.delete(e)};t.id=-1,Zr.set(e,t),Ha(t,n)}else $r(e),s()}}}function $r(e){let t=Zr.get(e);t&&(t.flags|=8,Zr.delete(e))}var ei=!1,ti=()=>{ei||=(console.error(`Hydration completed but contains mismatches.`),!0)},ni=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,ri=e=>e.namespaceURI.includes(`MathML`),ii=e=>{if(e.nodeType===1){if(ni(e))return`svg`;if(ri(e))return`mathml`}},ai=e=>e.nodeType===8;function oi(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:s,insert:c,createComment:l}}=e,u=(e,t)=>{t.hasChildNodes()?(d(t.firstChild,e,null,null,null),ur(),t._vnode=e):(n(null,e,t),ur(),t._vnode=e)},d=(n,r,s,l,u,y=!1)=>{y||=!!r.dynamicChildren;let b=ai(n)&&n.data===`[`,x=()=>h(n,r,s,l,u,b),{type:S,ref:C,shapeFlag:ee,patchFlag:te}=r,w=n.nodeType;r.el=n,te===-2&&(y=!1,r.dynamicChildren=null);let T=null;switch(S){case no:w===3?(n.data!==r.children&&(ti(),n.data=r.children),T=a(n)):r.children===``?(c(r.el=i(``),o(n),n),T=n):T=x();break;case V:v(n)?(T=a(n),_(r.el=n.content.firstChild,n,s)):T=w!==8||b?x():a(n);break;case ro:if(b&&(n=a(n),w=n.nodeType),w===1||w===3){T=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=T.nodeType===1?T.outerHTML:T.data),t===r.staticCount-1&&(r.anchor=T),T=a(T);return b?a(T):T}x();break;case B:T=b?m(n,r,s,l,u,y):x();break;default:if(ee&1)T=(w!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!v(n)?x():f(n,r,s,l,u,y);else if(ee&6){r.slotScopeIds=u;let e=o(n);if(T=b?g(n):ai(n)&&n.data===`teleport start`?g(n,n.data,`teleport end`):a(n),t(r,e,null,s,l,ii(e),y),(gi(r)||r.component.asyncDep)&&!r.component.subTree){let t;b?(t=G(ro),t.anchor=T?T.previousSibling:e.lastChild):t=n.nodeType===3?yo(``):G(n.nodeType===8?V:`div`),t.el=n,r.component.subTree=t}}else ee&64?T=w===8?r.type.hydrate(n,r,s,l,u,y,e,p):x():ee&128&&(T=r.type.hydrate(n,r,s,l,ii(o(n)),u,y,e,d))}return C!=null&&Qr(C,null,l,r),T},f=(e,t,n,i,a,o)=>{o||=!!t.dynamicChildren;let{type:c,dynamicProps:l,props:u,patchFlag:d,shapeFlag:f,dirs:m,transition:h}=t,g=c===`input`||c===`option`,y=!!l;if(g||y||d!==-1){m&&br(t,null,n,`created`);let c=!1;if(v(e)){c=Ja(null,h)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(c){let e=r.getAttribute(`class`);e&&(r.$cls=e),h.beforeEnter(r)}_(r,e,n),t.el=e=r}if(f&16&&!(u&&(u.innerHTML||u.textContent))){let r=p(e.firstChild,t,e,n,i,a,o);for(r&&!di(e,1)&&ti();r;){let e=r;r=r.nextSibling,s(e)}}else if(f&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(di(e,0)||ti(),e.textContent=t.children)}if(u){if(g||y||!o||d&48){let t=e.tagName.includes(`-`),i=e.namespaceURI.includes(`svg`)?`svg`:e.namespaceURI.includes(`MathML`)?`mathml`:void 0;for(let a in u)if(g&&(a.endsWith(`value`)||a===`indeterminate`)||ye(a)&&!Ne(a)||a[0]===`.`||t&&!Ne(a)||l&&l.includes(a)){if(ci(e,a,u[a]))continue;r(e,a,null,u[a],i,n)}}else if(u.onClick)r(e,`onClick`,null,u.onClick,void 0,n);else if(d&4&&En(u.style))for(let e in u.style)u.style[e]}let b;(b=u&&u.onVnodeBeforeMount)&&Eo(b,n,t),m&&br(t,null,n,`beforeMount`),((b=u&&u.onVnodeMounted)||m||c)&&to(()=>{b&&Eo(b,n,t),c&&h.enter(e),m&&br(t,null,n,`mounted`)},i)}return e.nextSibling},p=(e,t,r,o,s,l,u)=>{u||=!!t.dynamicChildren;let f=t.children,p=f.length,m=!1;for(let t=0;t<p;t++){let h=u?f[t]:f[t]=So(f[t]),g=h.type===no;e?(g&&!u&&t+1<p&&So(f[t+1]).type===no&&(c(i(e.data.slice(h.children.length)),r,a(e)),e.data=h.children),e=d(e,h,o,s,l,u)):g&&!h.children?c(h.el=i(``),r):(m||(m=!0,di(r,1)||ti()),n(null,h,r,null,o,s,ii(r),l))}return e},m=(e,t,n,r,i,s)=>{let{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);let d=o(e),f=p(a(e),t,d,n,r,i,s);return f&&ai(f)&&f.data===`]`?a(t.anchor=f):(ti(),c(t.anchor=l(`]`),d,f),f)},h=(e,t,r,i,c,l)=>{if(pi(e,t)||ti(),t.el=null,l){let t=g(e);for(;;){let n=a(e);if(n&&n!==t)s(n);else break}}let u=a(e),d=o(e);return s(e),n(null,t,d,u,r,i,ii(d),c),r&&(r.vnode.el=t.el,Ca(r,t.el)),u},g=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&ai(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},_=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},v=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[u,d]}var si=new Set([`src`,`srcset`,`href`,`poster`]);function ci(e,t,n){return si.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}var li=`data-allow-mismatch`,ui={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function di(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(li);)e=e.parentElement;return fi(e&&e.getAttribute(li),t)}function fi(e,t){if(e==null)return!1;if(e===``)return!0;{let n=e.split(`,`);return t===0&&n.includes(`children`)?!0:n.includes(ui[t])}}function pi(e,t){return di(e.parentElement,1)||mi(e)||hi(t)}function mi(e){return e.nodeType===1&&fi(e.getAttribute(li),1)}function hi({props:e}){let t=e&&e[li];return typeof t==`string`&&fi(t,1)}qe().requestIdleCallback,qe().cancelIdleCallback;var gi=e=>!!e.type.__asyncLoader,_i=e=>e.type.__isKeepAlive;function vi(e,t){bi(e,`a`,t)}function yi(e,t){bi(e,`da`,t)}function bi(e,t,n=jo){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Si(t,r,n),n){let e=n.parent;for(;e&&e.parent;)_i(e.parent.vnode)&&xi(r,t,n,e),e=e.parent}}function xi(e,t,n,r){let i=Si(t,e,r,!0);ki(()=>{xe(r[t],i)},n)}function Si(e,t,n=jo,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ot();let i=Fo(n),a=Jn(t,n,e,r);return i(),kt(),a};return r?i.unshift(a):i.push(a),a}}var Ci=e=>(t,n=jo)=>{Ro&&e!==`sp`||Si(e,(...e)=>t(...e),n)},wi=Ci(`bm`),Ti=Ci(`m`),Ei=Ci(`bu`),Di=Ci(`u`),Oi=Ci(`bum`),ki=Ci(`um`),Ai=Ci(`sp`),ji=Ci(`rtg`),Mi=Ci(`rtc`);function Ni(e,t=jo){Si(`ec`,e,t)}var Pi=`components`;function Fi(e,t){return Ri(Pi,e,!0,t)||e}var Ii=Symbol.for(`v-ndc`);function Li(e){return j(e)?Ri(Pi,e,!1)||e:e||Ii}function Ri(e,t,n=!0,r=!1){let i=hr||jo;if(i){let n=i.type;if(e===Pi){let e=Ko(n,!1);if(e&&(e===t||e===Ie(t)||e===ze(Ie(t))))return n}let a=zi(i[e]||n[e],t)||zi(i.appContext[e],t);return!a&&r?n:a}}function zi(e,t){return e&&(e[t]||e[Ie(t)]||e[ze(Ie(t))])}function Bi(e,t,n,r){let i,a=n&&n[r],o=k(e);if(o||j(e)){let n=o&&En(e),r=!1,s=!1;n&&(r=!On(e),s=Dn(e),e=Ht(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Mn(jn(e[n])):jn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){if(!Number.isInteger(e)||e<0)i=[];else{i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}}else if(M(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var Vi=e=>e?Lo(e)?Go(e):Vi(e.parent):null,Hi=D(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vi(e.parent),$root:e=>Vi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Zi(e),$forceUpdate:e=>e.f||=()=>{or(e.update)},$nextTick:e=>e.n||=ir.bind(e.proxy),$watch:e=>kr.bind(e)}),Ui=(e,t)=>e!==E&&!e.__isScriptSetup&&O(e,t),Wi={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Ui(r,t))return o[t]=1,r[t];else if(i!==E&&O(i,t))return o[t]=2,i[t];else if(O(a,t))return o[t]=3,a[t];else if(n!==E&&O(n,t))return o[t]=4,n[t];else Ki&&(o[t]=0)}let l=Hi[t],u,d;if(l)return t===`$attrs`&&zt(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==E&&O(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,O(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Ui(i,t)?(i[t]=n,!0):r!==E&&O(r,t)?(r[t]=n,!0):O(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==E&&s[0]!==`$`&&O(e,s)||Ui(t,s)||O(a,s)||O(r,s)||O(Hi,s)||O(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?O(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Gi(e){return k(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Ki=!0;function qi(e){let t=Zi(e),n=e.proxy,r=e.ctx;Ki=!1,t.beforeCreate&&Yi(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:g,beforeDestroy:_,beforeUnmount:v,destroyed:y,unmounted:b,render:x,renderTracked:S,renderTriggered:C,errorCaptured:ee,serverPrefetch:te,expose:w,inheritAttrs:T,components:ne,directives:re,filters:ie}=t;if(l&&Ji(l,r,null),o)for(let e in o){let t=o[e];A(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);M(t)&&(e.data=Sn(t))}if(Ki=!0,a)for(let e in a){let t=a[e],i=Jo({get:A(t)?t.bind(n,n):A(t.get)?t.get.bind(n,n):_e,set:!A(t)&&A(t.set)?t.set.bind(n):_e});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Xi(s[e],r,n,e);if(c){let e=A(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{xr(t,e[t])})}u&&Yi(u,e,`c`);function ae(e,t){k(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(ae(wi,d),ae(Ti,f),ae(Ei,p),ae(Di,m),ae(vi,h),ae(yi,g),ae(Ni,ee),ae(Mi,S),ae(ji,C),ae(Oi,v),ae(ki,b),ae(Ai,te),k(w)){if(w.length){let t=e.exposed||={};w.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}x&&e.render===_e&&(e.render=x),T!=null&&(e.inheritAttrs=T),ne&&(e.components=ne),re&&(e.directives=re),te&&Yr(e)}function Ji(e,t,n=_e){k(e)&&(e=na(e));for(let n in e){let r=e[n],i;i=M(r)?`default`in r?Sr(r.from||n,r.default,!0):Sr(r.from||n):Sr(r),L(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Yi(e,t,n){Jn(k(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xi(e,t,n,r){let i=r.includes(`.`)?Ar(n,r):()=>n[r];if(j(e)){let n=t[e];A(n)&&Dr(i,n)}else if(A(e))Dr(i,e.bind(n));else if(M(e)){if(k(e))e.forEach(e=>Xi(e,t,n,r));else{let r=A(e.handler)?e.handler.bind(n):t[e.handler];A(r)&&Dr(i,r,e)}}}function Zi(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Qi(c,e,o,!0)),Qi(c,t,o)),M(t)&&a.set(t,c),c}function Qi(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Qi(e,a,n,!0),i&&i.forEach(t=>Qi(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=$i[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var $i={data:ea,props:aa,emits:aa,methods:ia,computed:ia,beforeCreate:ra,created:ra,beforeMount:ra,mounted:ra,beforeUpdate:ra,updated:ra,beforeDestroy:ra,beforeUnmount:ra,destroyed:ra,unmounted:ra,activated:ra,deactivated:ra,errorCaptured:ra,serverPrefetch:ra,components:ia,directives:ia,watch:oa,provide:ea,inject:ta};function ea(e,t){return t?e?function(){return D(A(e)?e.call(this,this):e,A(t)?t.call(this,this):t)}:t:e}function ta(e,t){return ia(na(e),na(t))}function na(e){if(k(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ra(e,t){return e?[...new Set([].concat(e,t))]:t}function ia(e,t){return e?D(Object.create(null),e,t):t}function aa(e,t){return e?k(e)&&k(t)?[...new Set([...e,...t])]:D(Object.create(null),Gi(e),Gi(t??{})):t}function oa(e,t){if(!e)return t;if(!t)return e;let n=D(Object.create(null),e);for(let r in t)n[r]=ra(e[r],t[r]);return n}function sa(){return{app:null,config:{isNativeTag:ve,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ca=0;function la(e,t){return function(n,r=null){A(n)||(n=D({},n)),r!=null&&!M(r)&&(r=null);let i=sa(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:ca++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Xo,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&A(e.install)?(a.add(e),e.install(c,...t)):A(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||G(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Go(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(Jn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=ua;ua=c;try{return e()}finally{ua=t}}};return c}}var ua=null,da=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ie(t)}Modifiers`]||e[`${Re(t)}Modifiers`];function fa(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||E,i=n,a=t.startsWith(`update:`),o=a&&da(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>j(e)?e.trim():e)),o.number&&(i=i.map(We)));let s,c=r[s=Be(t)]||r[s=Be(Ie(t))];!c&&a&&(c=r[s=Be(Re(t))]),c&&Jn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Jn(l,e,6,i)}}var pa=new WeakMap;function ma(e,t,n=!1){let r=n?pa:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!A(e)){let r=e=>{let n=ma(e,t,!0);n&&(s=!0,D(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(M(e)&&r.set(e,null),null):(k(a)?a.forEach(e=>o[e]=null):D(o,a),M(e)&&r.set(e,o),o)}function ha(e,t){return!e||!ye(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),O(e,t[0].toLowerCase()+t.slice(1))||O(e,Re(t))||O(e,t))}function ga(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,g=_r(e),_,v;try{if(n.shapeFlag&4){let e=i||r,t=e;_=So(l.call(t,e,u,d,p,f,m)),v=s}else{let e=t;_=So(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),v=t.props?s:va(s)}}catch(t){io.length=0,Yn(t,e,1),_=G(V)}let y=_;if(v&&h!==!1){let e=Object.keys(v),{shapeFlag:t}=y;e.length&&t&7&&(a&&e.some(be)&&(v=ya(v,a)),y=vo(y,v,!1,!0))}return n.dirs&&(y=vo(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Gr(Mr(y.type)&&Wr(y)||y,n.transition),_=y,_r(g),_}function _a(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(fo(r)){if(r.type!==V||r.children===`v-if`){if(n)return;n=r}}else return}return n}var va=e=>{let t;for(let n in e)(n===`class`||n===`style`||ye(n))&&((t||={})[n]=e[n]);return t},ya=(e,t)=>{let n={};for(let r in e)be(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function ba(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xa(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Sa(o,r,n)&&!ha(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||xa(r,o,l):!!o;return!1}function xa(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(!O(e,a)||Sa(t,e,a)&&!ha(n,a))return!0}return!1}function Sa(e,t,n){let r=e[n],i=t[n];return n===`style`&&M(r)&&M(i)?!ot(r,i):r!==i}function Ca({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var wa={},Ta=()=>Object.create(wa),Ea=e=>Object.getPrototypeOf(e)===wa;function Da(e,t,n,r=!1){let i={},a=Ta();e.propsDefaults=Object.create(null),ka(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Cn(i):e.type.props?i:a,e.attrs=a}function Oa(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=I(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ha(e.emitsOptions,o))continue;let u=t[o];if(c){if(O(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=Ie(o);i[t]=Aa(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{ka(e,t,i,a)&&(l=!0);let r;for(let a in s)t&&(O(t,a)||(r=Re(a))!==a&&O(t,r))||(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Aa(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)t&&O(t,e)||(delete a[e],l=!0)}l&&Bt(e.attrs,`set`,``)}function ka(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(Ne(c))continue;let l=t[c],u;i&&O(i,u=Ie(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:ha(e.emitsOptions,c)||c in r&&l===r[c]||(r[c]=l,o=!0)}if(a){let t=I(n),r=s||E;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Aa(i,t,s,r[s],e,!O(r,s))}}return o}function Aa(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=O(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&A(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Fo(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===Re(n))&&(r=!0))}return r}var ja=new WeakMap;function Ma(e,t,n=!1){let r=n?ja:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!A(e)){let r=e=>{c=!0;let[n,r]=Ma(e,t,!0);D(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return M(e)&&r.set(e,ge),ge;if(k(a))for(let e=0;e<a.length;e++){let t=Ie(a[e]);Na(t)&&(o[t]=E)}else if(a)for(let e in a){let t=Ie(e);if(Na(t)){let n=a[e],r=o[t]=k(n)||A(n)?{type:n}:D({},n),i=r.type,c=!1,l=!0;if(k(i))for(let e=0;e<i.length;++e){let t=i[e],n=A(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=A(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||O(r,`default`))&&s.push(t)}}let l=[o,s];return M(e)&&r.set(e,l),l}function Na(e){return e[0]!==`$`&&!Ne(e)}var Pa=e=>e===`_`||e===`_ctx`||e===`$stable`,Fa=e=>k(e)?e.map(So):[So(e)],Ia=(e,t,n)=>{if(t._n)return t;let r=vr((...e)=>Fa(t(...e)),n);return r._c=!1,r},La=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Pa(n))continue;let i=e[n];if(A(i))t[n]=Ia(n,i,r);else if(i!=null){let e=Fa(i);t[n]=()=>e}}},Ra=(e,t)=>{let n=Fa(t);e.slots.default=()=>n},za=(e,t,n)=>{for(let r in t)(n||!Pa(r))&&(e[r]=t[r])},Ba=(e,t,n)=>{let r=e.slots=Ta();if(e.vnode.shapeFlag&32){let e=t._;e?(za(r,t,n),n&&Ue(r,`_`,e,!0)):La(t,r)}else t&&Ra(e,t)},Va=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=E;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:za(i,t,n):(a=!t.$stable,La(t,i)),o=t}else t&&(Ra(e,t),o={default:1});if(a)for(let e in i)!Pa(e)&&o[e]==null&&delete i[e]},Ha=to;function Ua(e){return Ga(e)}function Wa(e){return Ga(e,oi)}function Ga(e,t){let n=qe();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=_e,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!po(e,t)&&(r=ye(e),fe(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===ge&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case no:g(e,t,n,r);break;case V:_(e,t,n,r);break;case ro:e??v(t,n,r,o);break;case B:ne(e,t,n,r,i,a,o,s,c);break;default:d&1?x(e,t,n,r,i,a,o,s,c):d&6?re(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,D)}u!=null&&i?Qr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Qr(e.ref,null,a,e,!0)},g=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},_=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},v=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},y=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},b=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},x=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)S(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),te(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},S=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&ee(e.children,f,null,i,s,Ka(e,c),l,d),_&&br(e,null,i,`created`),C(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!Ne(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&Eo(p,i,e)}_&&br(e,null,i,`beforeMount`);let v=Ja(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&Ha(()=>{try{p&&Eo(p,i,e),v&&g.enter(f),_&&br(e,null,i,`mounted`)}finally{}},s)},C=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||eo(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ee=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Co(e[l]):So(e[l]);h(null,c,t,n,r,i,a,o,s)}},te=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||E,m=t.props||E,h;if(n&&qa(n,!1),(h=m.onVnodeBeforeUpdate)&&Eo(h,n,t,e),f&&br(t,e,n,`beforeUpdate`),n&&qa(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?w(e.dynamicChildren,d,c,n,r,Ka(t,i),o):s||ce(e,t,c,null,n,r,Ka(t,i),o,!1),l>0){if(l&16)T(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&d==null&&T(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&Ha(()=>{h&&Eo(h,n,t,e),f&&br(t,e,n,`updated`)},r)},w=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el||$a(c),f=u&&(c.type===B||!po(c,l)||c.shapeFlag&198)?d(u):n;h(c,l,f,null,r,i,a,o,!0)}},T=(e,t,n,r,i)=>{if(t!==n){if(t!==E)for(let o in t)!Ne(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(Ne(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},ne=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),ee(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(w(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Ya(e,t,!0)):ce(e,t,n,f,a,o,c,l,u)},re=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ie(t,n,r,i,a,o,c):ae(e,t,c)},ie=(e,t,n,r,i,a,o)=>{let s=e.component=Ao(e,r,i);if(_i(e)&&(s.ctx.renderer=D),zo(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,oe,o,a),!e.el){let r=s.subTree=G(V);_(null,r,t,n),e.placeholder=r.el}}else oe(s,e,t,n,i,a,o)},ae=(e,t,n)=>{let r=t.component=e.component;if(ba(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,se(r,t,n);return}r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},oe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Za(e);if(n){t&&(t.el=c.el,se(e,t,o)),n.asyncDep.then(()=>{Ha(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;qa(e,!1),t?(t.el=c.el,se(e,t,o)):t=c,n&&He(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&Eo(f,s,t,c),qa(e,!0);let p=ga(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el),ye(m),e,i,a),t.el=p.el,u===null&&Ca(e,p.el),r&&Ha(r,i),(f=t.props&&t.props.onVnodeUpdated)&&Ha(()=>Eo(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=gi(t);if(qa(e,!1),l&&He(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Eo(o,d,t),qa(e,!0),s&&Se){let t=()=>{e.subTree=ga(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=ga(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&Ha(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Ha(()=>Eo(o,d,e),i)}(t.shapeFlag&256||d&&gi(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Ha(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new pt(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>or(u),qa(e,!0),l()},se=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Oa(e,t.props,r,n),Va(e,t.children,n),Ot(),lr(e),kt()},ce=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){ue(l,f,n,r,i,a,o,s,c);return}if(p&256){le(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&ve(l,i,a),f!==l&&u(n,f)):d&16?m&16?ue(l,f,n,r,i,a,o,s,c):ve(l,i,a,!0):(d&8&&u(n,``),m&16&&ee(f,n,r,i,a,o,s,c))},le=(e,t,n,r,i,a,o,s,c)=>{e||=ge,t||=ge;let l=e.length,u=t.length,d=Math.min(l,u),f=0;for(;f<d;f++){let r=t[f]=c?Co(t[f]):So(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?ve(e,i,a,!0,!1,d):ee(t,n,r,i,a,o,s,c,d)},ue=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?Co(t[l]):So(t[l]);if(po(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?Co(t[f]):So(t[f]);if(po(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?Co(t[l]):So(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)fe(e[l],i,a,!0),l++;else{let p=l,m=l,g=new Map;for(l=m;l<=f;l++){let e=t[l]=c?Co(t[l]):So(t[l]);e.key!=null&&g.set(e.key,l)}let _,v=0,y=f-m+1,b=!1,x=0,S=Array(y);for(l=0;l<y;l++)S[l]=0;for(l=p;l<=d;l++){let r=e[l];if(v>=y){fe(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=m;_<=f;_++)if(S[_-m]===0&&po(r,t[_])){u=_;break}u===void 0?fe(r,i,a,!0):(S[u-m]=l+1,u>=x?x=u:b=!0,h(r,t[u],n,null,i,a,o,s,c),v++)}let C=b?Xa(S):ge;for(_=C.length-1,l=y-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||$a(f):r;S[l]===0?h(null,d,n,p,i,a,o,s,c):b&&(_<0||l!==C[_]?de(d,n,p,2):_--)}}},de=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)de(e.component.subTree,t,n,a);else if(d&128)e.suspense.move(t,n,a);else if(d&64)c.move(e,t,n,D);else if(c===B){r(s,t,n);for(let e=0;e<u.length;e++)de(u[e],t,n,a);r(e.anchor,t,n)}else if(c===ro)y(e,t,n);else if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[Nr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),Ha(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[Nr];s._isLeaving&&s[Nr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},fe=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Ot(),Qr(s,null,n,e,!0),kt()),p==null||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!gi(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Eo(_,t,e),u&6)he(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&br(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,D,r):l&&!l.hasOnce&&(a!==B||d>0&&d&64)?ve(l,t,n,!1,!0):(a===B&&d&384||!i&&u&16)&&ve(c,t,n),r&&pe(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Ha(()=>{_&&Eo(_,t,e),h&&br(e,null,t,`unmounted`),v&&(e.el=null)},n)},pe=e=>{let{type:t,el:n,anchor:r,transition:a}=e,o=t===B;if(o&&!a){me(n,r);return}if(t===ro){b(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let s=o?qr(e):e,c=()=>{o?d(n)&&me(n,r):i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(s&&s.shapeFlag&1&&a&&!a.persisted){let{leave:e,delayLeave:t}=a,n=s.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},me=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},he=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Qa(c),Qa(l),r&&He(r),i.stop(),a?(a.flags|=8,fe(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,fe(o,e,t,n)),s&&Ha(s,t),Ha(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)fe(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[jr];return n?f(n):t},be=(e,t,n)=>{fr(()=>{e==null?t._vnode&&fe(t._vnode,null,null,!0):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e},e&&t._vnode?void 0:e&&e.component?e.component.uid:ko())},D={p:h,um:fe,m:de,r:pe,mt:ie,mc:ee,pc:ce,pbc:w,n:ye,o:e},xe,Se;return t&&([xe,Se]=t(D)),{render:be,hydrate:xe,createApp:la(be,xe)}}function Ka({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function qa({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ja(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ya(e,t,n=!1){let r=e.children,i=t.children;if(k(r)&&k(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Co(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ya(t,a)),a.type===no&&(a.patchFlag===-1&&(a=i[e]=Co(a)),a.el=t.el),a.type===V&&!a.el&&(a.el=t.el)}}function Xa(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Za(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Za(t)}function Qa(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function $a(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?$a(t.subTree):null}var eo=e=>e.__isSuspense;function to(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):cr(e)}var B=Symbol.for(`v-fgt`),no=Symbol.for(`v-txt`),V=Symbol.for(`v-cmt`),ro=Symbol.for(`v-stc`),io=[],ao=null;function H(e=!1){io.push(ao=e?null:[])}function oo(){io.pop(),ao=io[io.length-1]||null}var so=1;function co(e,t=!1){so+=e,e<0&&ao&&t&&(ao.hasOnce=!0)}function lo(e){return e.dynamicChildren=so>0?ao||ge:null,oo(),so>0&&ao&&ao.push(e),e}function U(e,t,n,r,i,a){return lo(W(e,t,n,r,i,a,!0))}function uo(e,t,n,r,i){return lo(G(e,t,n,r,i,!0))}function fo(e){return e?e.__v_isVNode===!0:!1}function po(e,t){return e.type===t.type&&e.key===t.key}var mo=({key:e})=>e??null,ho=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:j(e)||L(e)||A(e)?{i:hr,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===B?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mo(t),ref:t&&ho(t),scopeId:gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:hr};return s?(wo(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=j(n)?8:16),so>0&&!o&&ao&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ao.push(c),c}var G=go;function go(e,t=null,n=null,r=0,i=null,a=!1){if(e&&e!==Ii||(e=V),fo(e)){let r=vo(e,t,!0);return n&&wo(r,n),so>0&&!a&&ao&&(r.shapeFlag&6?ao[ao.indexOf(e)]=r:ao.push(r)),r.patchFlag=-2,r}if(qo(e)&&(e=e.__vccOpts),t){t=_o(t);let{class:e,style:n}=t;e&&!j(e)&&(t.class=$e(e)),M(n)&&(kn(n)&&!k(n)&&(n=D({},n)),t.style=Je(n))}let o=j(e)?1:eo(e)?128:Mr(e)?64:M(e)?4:A(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function _o(e){return e?kn(e)||Ea(e)?D({},e):e:null}function vo(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?To(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&mo(l),ref:t&&t.ref?n&&a?k(a)?a.concat(ho(t)):[a,ho(t)]:ho(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==B?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vo(e.ssContent),ssFallback:e.ssFallback&&vo(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Gr(u,c.clone(u)),u}function yo(e=` `,t=0){return G(no,null,e,t)}function bo(e,t){let n=G(ro,null,e);return n.staticCount=t,n}function xo(e=``,t=!1){return t?(H(),uo(V,null,e)):G(V,null,e)}function So(e){return e==null||typeof e==`boolean`?G(V):k(e)?G(B,null,e.slice()):fo(e)?Co(e):G(no,null,String(e))}function Co(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vo(e)}function wo(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(k(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),wo(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Ea(t)?t._ctx=hr:r===3&&hr&&(hr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(A(t)){if(r&65){wo(e,{default:t});return}t={default:t,_ctx:hr},n=32}else t=String(t),r&64?(n=16,t=[yo(t)]):n=8;e.children=t,e.shapeFlag|=n}function To(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=$e([t.class,r.class]));else if(e===`style`)t.style=Je([t.style,r.style]);else if(ye(e)){let n=t[e],i=r[e];i&&n!==i&&!(k(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!be(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Eo(e,t,n,r=null){Jn(e,t,7,[n,r])}var Do=sa(),Oo=0;function ko(){return Oo}function Ao(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||Do,a={uid:Oo++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ut(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ma(r,i),emitsOptions:ma(r,i),emit:null,emitted:null,propsDefaults:E,inheritAttrs:r.inheritAttrs,ctx:E,data:E,props:E,attrs:E,slots:E,refs:E,setupState:E,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=fa.bind(null,a),e.ce&&e.ce(a),a}var jo=null,Mo=()=>jo||hr,No,Po;{let e=qe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};No=t(`__VUE_INSTANCE_SETTERS__`,e=>jo=e),Po=t(`__VUE_SSR_SETTERS__`,e=>Ro=e)}var Fo=e=>{let t=jo;return No(e),e.scope.on(),()=>{e.scope.off(),No(t)}},Io=()=>{jo&&jo.scope.off(),No(null)};function Lo(e){return e.vnode.shapeFlag&4}var Ro=!1;function zo(e,t=!1,n=!1){t&&Po(t);let{props:r,children:i}=e.vnode,a=Lo(e);Da(e,r,a,t),Ba(e,i,n||t);let o=a?Bo(e,t):void 0;return t&&Po(!1),o}function Bo(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Wi);let{setup:r}=n;if(r){Ot();let n=e.setupContext=r.length>1?Wo(e):null,i=Fo(e),a=qn(r,e,0,[e.props,n]),o=De(a);if(kt(),i(),(o||e.sp)&&!gi(e)&&Yr(e),o){if(a.then(Io,Io),t)return a.then(n=>{Po(!0);try{Vo(e,n,t)}finally{Po(!1)}}).catch(t=>{Yn(t,e,0)});e.asyncDep=a}else Vo(e,a,t)}else Ho(e,t)}function Vo(e,t,n){A(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:M(t)&&(e.setupState=Rn(t)),Ho(e,n)}function Ho(e,t,n){let r=e.type;e.render||=r.render||_e;{let t=Fo(e);Ot();try{qi(e)}finally{kt(),t()}}}var Uo={get(e,t){return zt(e,`get`,``),e[t]}};function Wo(e){return{attrs:new Proxy(e.attrs,Uo),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Go(e){return e.exposed?e.exposeProxy||=new Proxy(Rn(An(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Hi)return Hi[n](e)},has(e,t){return t in e||t in Hi}}):e.proxy}function Ko(e,t=!0){return A(e)?e.displayName||e.name:e.name||t&&e.__name}function qo(e){return A(e)&&`__vccOpts`in e}var Jo=(e,t)=>Bn(e,t,Ro);function Yo(e,t,n){try{co(-1);let r=arguments.length;return r===2?M(t)&&!k(t)?fo(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fo(n)&&(n=[n]),G(e,t,n))}finally{co(1)}}var Xo=`3.5.44`,Zo=void 0,Qo=typeof window<`u`&&window.trustedTypes;if(Qo)try{Zo=Qo.createPolicy(`vue`,{createHTML:e=>e})}catch{}var $o=Zo?e=>Zo.createHTML(e):e=>e,es=`http://www.w3.org/2000/svg`,ts=`http://www.w3.org/1998/Math/MathML`,ns=typeof document<`u`?document:null,rs=ns&&ns.createElement(`template`),is={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ns.createElementNS(es,e):t===`mathml`?ns.createElementNS(ts,e):n?ns.createElement(e,{is:n}):ns.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ns.createTextNode(e),createComment:e=>ns.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ns.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{rs.innerHTML=$o(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=rs.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},as=`transition`,os=`animation`,ss=Symbol(`_vtc`),cs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ls=D({},Lr,cs),us=(e=>(e.displayName=`Transition`,e.props=ls,e))((e,{slots:t})=>Yo(Br,ps(e),t)),ds=(e,t=[])=>{k(e)?e.forEach(e=>e(...t)):e&&e(...t)},fs=e=>e?k(e)?e.some(e=>e.length>1):e.length>1:!1;function ps(e){let t={};for(let n in e)n in cs||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=ms(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:b,onLeaveCancelled:x,onBeforeAppear:S=_,onAppear:C=v,onAppearCancelled:ee=y}=t,te=(e,t,n,r)=>{e._enterCancelled=r,_s(e,t?u:s),_s(e,t?l:o),n&&n()},w=(e,t)=>{e._isLeaving=!1,_s(e,d),_s(e,p),_s(e,f),t&&t()},T=e=>(t,n)=>{let i=e?C:v,o=()=>te(t,e,n);ds(i,[t,o]),vs(()=>{_s(t,e?c:a),gs(t,e?u:s),fs(i)||bs(t,r,h,o)})};return D(t,{onBeforeEnter(e){ds(_,[e]),gs(e,a),gs(e,o)},onBeforeAppear(e){ds(S,[e]),gs(e,c),gs(e,l)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>w(e,t);gs(e,d),e._enterCancelled?(gs(e,f),ws(e)):(ws(e),gs(e,f)),vs(()=>{e._isLeaving&&(_s(e,d),gs(e,p),fs(b)||bs(e,r,g,n))}),ds(b,[e,n])},onEnterCancelled(e){te(e,!1,void 0,!0),ds(y,[e])},onAppearCancelled(e){te(e,!0,void 0,!0),ds(ee,[e])},onLeaveCancelled(e){w(e),ds(x,[e])}})}function ms(e){if(e==null)return null;if(M(e))return[hs(e.enter),hs(e.leave)];{let t=hs(e);return[t,t]}}function hs(e){return Ge(e)}function gs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[ss]||(e[ss]=new Set)).add(t)}function _s(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[ss];n&&(n.delete(t),n.size||(e[ss]=void 0))}function vs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var ys=0;function bs(e,t,n,r){let i=e._endId=++ys,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=xs(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function xs(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${as}Delay`),a=r(`${as}Duration`),o=Ss(i,a),s=r(`${os}Delay`),c=r(`${os}Duration`),l=Ss(s,c),u=null,d=0,f=0;t===as?o>0&&(u=as,d=o,f=a.length):t===os?l>0&&(u=os,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?as:os:null,f=u?u===as?a.length:c.length:0);let p=u===as&&/\b(?:transform|all)(?:,|$)/.test(r(`${as}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Ss(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Cs(t)+Cs(e[n])))}function Cs(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function ws(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ts(e,t,n){let r=e[ss];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Es=Symbol(`_vod`),Ds=Symbol(`_vsh`),Os=Symbol(``),ks=/(?:^|;)\s*display\s*:/;function As(e,t,n){let r=e.style,i=j(n),a=!1;if(n&&!i){if(t){if(j(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ms(r,t,``)}else for(let e in t)n[e]??Ms(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ms(r,i,``):Is(e,i,!j(t)&&t?t[i]:void 0,o)||Ms(r,i,o)}}else if(i){if(t!==n){let e=r[Os];e&&(n+=`;`+e),r.cssText=n,a=ks.test(n)}}else t&&e.removeAttribute(`style`);Es in e&&(i&&t===n||(e[Es]=a?r.display:``),e[Ds]&&(r.display=`none`))}var js=/\s*!important$/;function Ms(e,t,n){if(k(n))n.forEach(n=>Ms(e,t,n));else if(n??=``,t.startsWith(`--`))js.test(n)?e.setProperty(t,n.replace(js,``),`important`):e.setProperty(t,n);else{let r=Fs(e,t);js.test(n)?e.setProperty(Re(r),n.replace(js,``),`important`):e[r]=n}}var Ns=[`Webkit`,`Moz`,`ms`],Ps={};function Fs(e,t){let n=Ps[t];if(n)return n;let r=Ie(t);if(r!==`filter`&&r in e)return Ps[t]=r;r=ze(r);for(let n=0;n<Ns.length;n++){let i=Ns[n]+r;if(i in e)return Ps[t]=i}return t}function Is(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&j(r)&&n===r}var Ls=`http://www.w3.org/1999/xlink`;function Rs(e,t,n,r,i,a=et(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ls,t.slice(6,t.length)):e.setAttributeNS(Ls,t,n):n==null||a&&!tt(n)?e.removeAttribute(t):e.setAttribute(t,a?``:Ee(n)?String(n):n)}function zs(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?$o(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);r===i&&`_value`in e||(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=tt(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Bs(e,t,n,r){e.addEventListener(t,n,r)}function Vs(e,t,n,r){e.removeEventListener(t,n,r)}var Hs=Symbol(`_vei`);function Us(e,t,n,r,i=null){let a=e[Hs]||(e[Hs]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ks(t);r?Bs(e,n,a[t]=Xs(r,i),s):o&&(Vs(e,n,o,s),a[t]=void 0)}}var Ws=/(Once|Passive|Capture)$/,Gs=/^on:?(?:Once|Passive|Capture)$/;function Ks(e){let t,n;for(;(n=e.match(Ws))&&!Gs.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):Re(e.slice(2)),t]}var qs=0,Js=Promise.resolve(),Ys=()=>qs||=(Js.then(()=>qs=0),Date.now());function Xs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(k(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Jn(e,t,5,a)}}else Jn(r,t,5,[e])};return n.value=e,n.attached=Ys(),n}var Zs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Qs=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Ts(e,r,o):t===`style`?As(e,n,r):ye(t)?be(t)||Us(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):$s(e,t,r,o))?(zs(e,t,r),e.tagName.includes(`-`)||t!==`value`&&t!==`checked`&&t!==`selected`||Rs(e,t,r,o,a,t!==`value`)):e._isVueCE&&(ec(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!j(r)))?zs(e,Ie(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Rs(e,t,r,o))};function $s(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Zs(t)&&A(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Zs(t)&&j(n)?!1:t in e}function ec(e,t){let n=e._def.props;if(!n)return!1;let r=Ie(t);return Array.isArray(n)?n.some(e=>Ie(e)===r):Object.keys(n).some(e=>Ie(e)===r)}var tc=new WeakMap,nc=new WeakMap,rc=Symbol(`_moveCb`),ic=Symbol(`_enterCb`),ac=new WeakMap,oc=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:D({},ls,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=Mo(),r=Fr(),i,a,o,s,c=()=>(s===void 0&&(s=i.length>0&&hc(i[0].el,n.vnode.el,cc(e))),s);return Di(()=>{if(ac.delete(n),!c()){i=[],o=void 0;return}let t=cc(e);i.forEach(sc);let r=o&&mc(o,n.vnode.el);o=void 0,i.forEach(e=>lc(e,r));let a=i.filter(uc);ws(n.vnode.el),a.forEach(e=>{let n=e.el,r=n.style;gs(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[rc]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[rc]=null,_s(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let l=I(e),u=ps(l),d=l.tag||B;if(i=[],s=void 0,a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&!t.el[Ds]&&(i.push(t),Gr(t,Hr(t,u,r,n)),tc.set(t,dc(t.el)))}a=t.default?Kr(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&Gr(t,Hr(t,u,r,n))}return i.length&&(o=fc(n),ac.set(n,c)),G(d,null,a)}}});function sc(e){let t=e.el;t[rc]&&t[rc](),t[ic]&&t[ic]()}function cc(e){return e.moveClass||`${e.name||`v`}-move`}function lc(e,t){nc.set(e,dc(e.el,t))}function uc(e){let t=tc.get(e),n=nc.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),Number.isFinite(o)&&o!==0||(o=1),Number.isFinite(s)&&s!==0||(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function dc(e,t){let n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function fc(e){let t;for(let n=e.parent;n;n=n.parent){let r=ac.get(n);if(r){let i=pc(n.vnode.el,e.vnode.el);i&&(t||=[]).push(D(dc(i),{item:i,willMove:r}))}}return t}function pc(e,t){let n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function mc(e,t){let n=e.find(e=>e.willMove()&&e.item.contains(t));return n&&dc(n.item,n)}function hc(e,t,n){let r=e.cloneNode(),i=e[ss];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=xs(r);return a.removeChild(r),o}var gc=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return k(t)?e=>He(t,e):t};function _c(e){e.target.composing=!0}function vc(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var yc=Symbol(`_assign`),bc=Symbol(`_initialValue`);function xc(e,t,n){return t&&(e=e.trim()),n&&(e=We(e)),e}var Sc={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[bc]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[bc]=e.defaultValue.replace(/\r\n?/g,`
`))),e[yc]=gc(i);let a=r||i.props&&i.props.type===`number`;Bs(e,t?`change`:`input`,t=>{t.target.composing||e[yc](xc(e.value,n,a))}),(n||a)&&Bs(e,`change`,()=>{e.value=xc(e.value,n,a)}),t||(Bs(e,`compositionstart`,_c),Bs(e,`compositionend`,vc),Bs(e,`change`,vc))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[bc];delete e[bc],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[yc](xc(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[yc]=gc(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?We(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Cc=[`ctrl`,`shift`,`alt`,`meta`],wc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Cc.some(n=>e[`${n}Key`]&&!t.includes(n))},Tc=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=wc[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Ec={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Dc=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=Re(n.key);if(t.some(e=>e===r||Ec[e]===r))return e(n)}))},Oc=D({patchProp:Qs},is),kc,Ac=!1;function jc(){return kc||=Ua(Oc)}function Mc(){return kc=Ac?kc:Wa(Oc),Ac=!0,kc}var Nc=((...e)=>{let t=jc().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Ic(e);if(!r)return;let i=t._component;A(i)||i.render||i.template||(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Fc(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t}),Pc=((...e)=>{let t=Mc().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=Ic(e);if(t)return n(t,!0,Fc(t))},t});function Fc(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Ic(e){return j(e)?document.querySelector(e):e}var Lc=(e,t)=>L(t)?In(t):t,Rc=`usehead`;function zc(e){return{install(t){t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(Rc,e)}}.install}function Bc(){if(Cr()){let e=Sr(Rc);if(e)return e}throw Error(`useHead() was called without provide context, ensure you call it through the setup() function.`)}function Vc(e,t={}){let n=t.head||Bc();return n.ssr?n.push(e||{},t):Hc(n,e,t)}function Hc(e,t,n={}){let r=dt();if(r&&!r.active)return{patch(){},dispose(){},_poll(){}};let i=R(!1),a;return Er(()=>{let r=i.value?{}:ie(t,Lc);a?a.patch(r):a=e.push(r,n)}),Mo()&&(Oi(()=>{a.dispose()}),yi(()=>{i.value=!0}),vi(()=>{i.value=!1})),a}function Uc(e={}){let t=pe({domOptions:{render:me(()=>fe(t),e=>setTimeout(e,0))},...e});return t.install=zc(t),t}var Wc=typeof document<`u`;function Gc(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Kc(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Gc(e.default)}var K=Object.assign;function qc(e,t){let n={};for(let r in t){let i=t[r];n[r]=Yc(i)?i.map(e):e(i)}return n}var Jc=()=>{},Yc=Array.isArray;function Xc(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Zc=/#/g,Qc=/&/g,$c=/\//g,el=/=/g,tl=/\?/g,nl=/\+/g,rl=/%5B/g,il=/%5D/g,al=/%5E/g,ol=/%60/g,sl=/%7B/g,cl=/%7C/g,ll=/%7D/g,ul=/%20/g;function dl(e){return e==null?``:encodeURI(``+e).replace(cl,`|`).replace(rl,`[`).replace(il,`]`)}function fl(e){return dl(e).replace(sl,`{`).replace(ll,`}`).replace(al,`^`)}function pl(e){return dl(e).replace(nl,`%2B`).replace(ul,`+`).replace(Zc,`%23`).replace(Qc,`%26`).replace(ol,"`").replace(sl,`{`).replace(ll,`}`).replace(al,`^`)}function ml(e){return pl(e).replace(el,`%3D`)}function hl(e){return dl(e).replace(Zc,`%23`).replace(tl,`%3F`)}function gl(e){return hl(e).replace($c,`%2F`)}function _l(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var vl=/\/$/,yl=e=>e.replace(vl,``);function bl(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Ol(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:_l(o)}}function xl(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Sl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Cl(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&wl(t.matched[r],n.matched[i])&&Tl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function wl(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Tl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!El(e[n],t[n]))return!1;return!0}function El(e,t){return Yc(e)?Dl(e,t):Yc(t)?Dl(t,e):e?.valueOf()===t?.valueOf()}function Dl(e,t){return Yc(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Ol(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var kl={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Al=function(e){return e.pop=`pop`,e.push=`push`,e}({}),jl=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Ml(e){if(!e){if(Wc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),yl(e)}var Nl=/^[^#]+#/;function Pl(e,t){return e.replace(Nl,`#`)+t}function Fl(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Il=()=>({left:window.scrollX,top:window.scrollY});function Ll(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Fl(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Rl(e,t){return(history.state?history.state.position-t:-1)+e}var zl=new Map;function Bl(e,t){zl.set(e,t)}function Vl(e){let t=zl.get(e);return zl.delete(e),t}function Hl(e){return typeof e==`string`||e&&typeof e==`object`}function Ul(e){return typeof e==`string`||typeof e==`symbol`}var q=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Wl=Symbol(``);q.MATCHER_NOT_FOUND,q.NAVIGATION_GUARD_REDIRECT,q.NAVIGATION_ABORTED,q.NAVIGATION_CANCELLED,q.NAVIGATION_DUPLICATED;function Gl(e,t){return K(Error(),{type:e,[Wl]:!0},t)}function Kl(e,t){return e instanceof Error&&Wl in e&&(t==null||!!(e.type&t))}function ql(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(nl,` `),i=r.indexOf(`=`),a=_l(i<0?r:r.slice(0,i)),o=i<0?null:_l(r.slice(i+1));if(a in t){let e=t[a];Yc(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Jl(e){let t=``;for(let n in e){let r=e[n];n=ml(n),r==null?r!==void 0&&(t+=(t.length?`&`:``)+n):(Yc(r)?r.map(e=>e&&pl(e)):[r&&pl(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Yl(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Yc(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Xl=Symbol(``),Zl=Symbol(``),Ql=Symbol(``),$l=Symbol(``),eu=Symbol(``);function tu(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function nu(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Gl(q.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Hl(e)?c(Gl(q.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function ru(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(Gc(s)){let c=(s.__vccOpts||s)[t];c&&a.push(nu(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Kc(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&nu(c,n,r,o,e,i)()}))}}}return a}function iu(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>wl(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>wl(e,s))||i.push(s))}return[n,r,i]}var au=()=>location.protocol+`//`+location.host;function ou(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Sl(n,``)}return Sl(n,e)+r+i}function su(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=ou(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Al.pop,direction:u?u>0?jl.forward:jl.back:jl.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(K({},e.state,{scroll:Il()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function cu(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Il():null}}function lu(e){let{history:t,location:n}=window,r={value:ou(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:au()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,K({},t.state,cu(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=K({},i.value,t.state,{forward:e,scroll:Il()});a(o.current,o,!0),a(e,K({},cu(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function uu(e){e=Ml(e);let t=lu(e),n=su(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=K({location:``,base:e,go:r,createHref:Pl.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var du=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),J=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(J||{}),fu={type:du.Static,value:``},pu=/[a-zA-Z0-9_]/;function mu(e){if(!e)return[[]];if(e===`/`)return[[fu]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=J.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===J.Static?a.push({type:du.Static,value:l}):n===J.Param||n===J.ParamRegExp||n===J.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:du.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)if(c=e[s++],c===`\\`&&n!==J.ParamRegExp)r=n,n=J.EscapeNext;else switch(n){case J.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=J.Param):f();break;case J.EscapeNext:f(),n=r;break;case J.Param:c===`(`?n=J.ParamRegExp:pu.test(c)?f():(d(),n=J.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case J.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=J.ParamRegExpEnd:u+=c;break;case J.ParamRegExpEnd:d(),n=J.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===J.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var hu=`[^/]+?`,gu={sensitive:!1,strict:!1,start:!0,end:!0},_u=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(_u||{}),vu=/[.+*?^${}()[\]/\\]/g;function yu(e,t){let n=K({},gu,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[_u.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=_u.Segment+(n.sensitive?_u.BonusCaseSensitive:0);if(o.type===du.Static)r||(i+=`/`),i+=o.value.replace(vu,`\\$&`),s+=_u.Static;else if(o.type===du.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||hu;if(u!==hu){s+=_u.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=_u.Dynamic,c&&(s+=_u.BonusOptional),n&&(s+=_u.BonusRepeatable),u===`.*`&&(s+=_u.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=_u.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){r&&n.endsWith(`/`)||(n+=`/`),r=!1;for(let e of i)if(e.type===du.Static)n+=e.value;else if(e.type===du.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Yc(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Yc(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function bu(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===_u.Static+_u.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===_u.Static+_u.Segment?1:-1:0}function xu(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=bu(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Su(r))return 1;if(Su(i))return-1}return i.length-r.length}function Su(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Cu={strict:!1,end:!0,sensitive:!1};function wu(e,t,n){let r=K(yu(mu(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Tu(e,t){let n=[],r=new Map;t=Xc(Cu,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Du(e);s.aliasOf=r&&r.record;let l=Xc(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Du(K({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=wu(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!ku(d)&&o(e.name)),Nu(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Jc}function o(e){if(Ul(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=ju(e,n);n.splice(t,0,e),e.record.name&&!ku(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Gl(q.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=K(Eu(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Eu(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Gl(q.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=K({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Au(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Eu(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Du(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ou(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ou(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function ku(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Au(e){return e.reduce((e,t)=>K(e,t.meta),{})}function ju(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;xu(e,t[i])<0?r=i:n=i+1}let i=Mu(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Mu(e){let t=e;for(;t=t.parent;)if(Nu(t)&&xu(e,t)===0)return t}function Nu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Pu(e){let t=Sr(Ql),n=Sr($l),r=Jo(()=>{let n=z(e.to);return t.resolve(n)}),i=Jo(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(wl.bind(null,i));if(o>-1)return o;let s=zu(e[t-2]);return t>1&&zu(i)===s&&a[a.length-1].path!==s?a.findIndex(wl.bind(null,e[t-2])):o}),a=Jo(()=>i.value>-1&&Ru(n.params,r.value.params)),o=Jo(()=>i.value>-1&&i.value===n.matched.length-1&&Tl(n.params,r.value.params));function s(n={}){if(Lu(n)){let n=t[z(e.replace)?`replace`:`push`](z(e.to)).catch(Jc);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Jo(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Fu(e){return e.length===1?e[0]:e}var Iu=Jr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Pu,setup(e,{slots:t}){let n=Sn(Pu(e)),{options:r}=Sr(Ql),i=Jo(()=>({[Bu(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Bu(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Fu(t.default(n));return e.custom?r:Yo(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Lu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ru(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Yc(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function zu(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Bu=(e,t,n)=>e??t??n,Vu=Jr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Sr(eu),i=Jo(()=>e.route||r.value),a=Sr(Zl,0),o=Jo(()=>{let e=z(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Jo(()=>i.value.matched[o.value]);xr(Zl,Jo(()=>o.value+1)),xr(Xl,s),xr(eu,i);let c=R();return Dr(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&wl(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Hu(n.default,{Component:l,route:r});let u=o.props[a],d=Yo(l,K({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Hu(n.default,{Component:d,route:r})||d}}});function Hu(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Uu=Vu;function Wu(e){let t=Tu(e.routes,e),n=e.parseQuery||ql,r=e.stringifyQuery||Jl,i=e.history,a=tu(),o=tu(),s=tu(),c=Nn(kl),l=kl;Wc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=qc.bind(null,e=>``+e),d=qc.bind(null,gl),f=qc.bind(null,_l);function p(e,n){let r,i;return Ul(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=K({},a||c.value),typeof e==`string`){let r=bl(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return K(r,o,{params:f(o.params),hash:_l(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=K({},e,{path:bl(n,e.path,a.path).path});else{let t=K({},e.params);for(let e in t)t[e]??delete t[e];o=K({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=xl(r,K({},e,{hash:fl(l),path:s.path})),m=i.createHref(p);return K({fullPath:p,hash:l,query:r===Jl?Yl(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?bl(n,e,c.value.path):K({},e)}function y(e,t){if(l!==e)return Gl(q.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(K(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),K({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(K(v(u),{state:typeof u==`object`?K({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Cl(r,i,n)&&(f=Gl(q.NAVIGATION_DUPLICATED,{to:d,from:i}),de(i,i,!0,!1)),(f?Promise.resolve(f):w(d,i)).catch(e=>Kl(e)?Kl(e,q.NAVIGATION_GUARD_REDIRECT)?e:ue(e):ce(e,d,i)).then(e=>{if(e){if(Kl(e,q.NAVIGATION_GUARD_REDIRECT))return C(K({replace:s},v(e.to),{state:typeof e.to==`object`?K({},a,e.to.state):a,force:o}),t||d)}else e=ne(d,i,!0,s,a);return T(d,i,e),e})}function ee(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=me.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function w(e,t){let n,[r,i,s]=iu(e,t);n=ru(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(nu(r,e,t))});let c=ee.bind(null,e,t);return n.push(c),E(n).then(()=>{n=[];for(let r of a.list())n.push(nu(r,e,t));return n.push(c),E(n)}).then(()=>{n=ru(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(nu(r,e,t))});return n.push(c),E(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Yc(r.beforeEnter))for(let i of r.beforeEnter)n.push(nu(i,e,t));else n.push(nu(r.beforeEnter,e,t))}return n.push(c),E(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=ru(s,`beforeRouteEnter`,e,t,te),n.push(c),E(n))).then(()=>{n=[];for(let r of o.list())n.push(nu(r,e,t));return n.push(c),E(n)}).catch(e=>Kl(e,q.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function T(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function ne(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===kl,l=Wc?history.state:{};n&&(r||s?i.replace(e.fullPath,K({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,de(e,t,n,s),ue()}let re;function ie(){re||=i.listen((e,t,n)=>{if(!he.listening)return;let r=_(e),a=S(r,he.currentRoute.value);if(a){C(K(a,{replace:!0,force:!0}),r).catch(Jc);return}l=r;let o=c.value;Wc&&Bl(Rl(o.fullPath,n.delta),Il()),w(r,o).catch(e=>Kl(e,q.NAVIGATION_ABORTED|q.NAVIGATION_CANCELLED)?e:Kl(e,q.NAVIGATION_GUARD_REDIRECT)?(C(K(v(e.to),{force:!0}),r).then(e=>{Kl(e,q.NAVIGATION_ABORTED|q.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Al.pop&&i.go(-1,!1)}).catch(Jc),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ce(e,r,o))).then(e=>{e||=ne(r,o,!1),e&&(n.delta&&!Kl(e,q.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Al.pop&&Kl(e,q.NAVIGATION_ABORTED|q.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),T(r,o,e)}).catch(Jc)})}let ae=tu(),oe=tu(),se;function ce(e,t,n){ue(e);let r=oe.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function le(){return se&&c.value!==kl?Promise.resolve():new Promise((e,t)=>{ae.add([e,t])})}function ue(e){return se||(se=!e,ie(),ae.list().forEach(([t,n])=>e?n(e):t()),ae.reset()),e}function de(t,n,r,i){let{scrollBehavior:a}=e;if(!Wc||!a)return Promise.resolve();let o=!r&&Vl(Rl(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return ir().then(()=>a(t,n,o)).then(e=>e&&Ll(e)).catch(e=>ce(e,t,n))}let fe=e=>i.go(e),pe,me=new Set,he={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:oe.add,isReady:le,install(e){e.component(`RouterLink`,Iu),e.component(`RouterView`,Uu),e.config.globalProperties.$router=he,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>z(c)}),Wc&&!pe&&c.value===kl&&(pe=!0,b(i.location).catch(e=>{}));let t={};for(let e in kl)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Ql,he),e.provide($l,Cn(t)),e.provide(eu,c);let n=e.unmount;me.add(e),e.unmount=function(){me.delete(e),me.size<1&&(l=kl,re&&re(),re=null,c.value=kl,pe=!1,se=!1),n()}}};function E(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return he}function Gu(){return Sr(Ql)}function Ku(e){return Sr($l)}function qu(e){return document.readyState===`loading`?new Promise(t=>{document.addEventListener(`DOMContentLoaded`,()=>t(e))}):Promise.resolve(e)}var Ju=Jr({setup(e,{slots:t}){let n=R(!1);return Ti(()=>n.value=!0),()=>n.value?t.default&&t.default({}):t.placeholder&&t.placeholder({})}});function Yu(e){try{return JSON.parse(e||`{}`)}catch(t){return console.error(`[SSG] On state deserialization -`,t,e),{}}}function Xu(e,t,n,r){let{transformState:i,registerComponents:a=!0,useHead:o=!0,rootContainer:s=`#app`}=r??{};async function c(s){let c=r?.hydration?Pc(e):Nc(e),l;o&&c.use(l=Uc());let u=Wu({history:uu(t.base),...t}),{routes:d}=t;a&&c.component(`ClientOnly`,Ju);let f=[],p={app:c,head:l,isClient:!0,router:u,routes:d,onSSRAppRendered:()=>{},triggerOnSSRAppRendered:()=>Promise.all(f.map(e=>e())),initialState:{},transformState:i,routePath:s};await qu(),p.initialState=i?.(window.__INITIAL_STATE__||{})||Yu(window.__INITIAL_STATE__),await n?.(p),c.use(u);let m,h=!0;u.beforeEach((e,t,n)=>{(h||m&&m===e.path)&&(h=!1,m=e.path,e.meta.state=p.initialState),n()});let g=p.initialState;return{...p,initialState:g}}return(async()=>{let{app:e,router:t}=await c();await t.isReady(),e.mount(s,!0)})(),c}var Zu=[`width`,`height`],Qu=[`d`],$u={__name:`AppIcon`,props:{name:String,size:{type:Number,default:16}},setup(e){let t={home:`M4 11l8-7 8 7 M6 9.5V20h12V9.5 M10 20v-5h4v5`,grid:`M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z`,pen:`M4 20h4L19 9l-4-4L4 16z M13 7l4 4`,chat:`M4 5h16v11H9l-5 4z`,more:`M5 12h.01 M12 12h.01 M19 12h.01`,close:`M6 6l12 12 M18 6L6 18`,calendar:`M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4`,person:`M12 5.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4z M5 8l7 1.5L19 8 M12 9.5V14 M12 14l-3 7 M12 14l3 7`,search:`M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M20 20l-4-4`,copy:`M9 9h10v10H9z M5 15V5h10`,link:`M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1`,mail:`M3 5h18v14H3z M3 6l9 7 9-7`,web:`M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18`,github:`M9 19c-4 1.3-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.3 5.8 2.6 5.8 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21`,linkedin:`M4 4h16v16H4z M8 10v6 M8 7.5v.01 M12 16v-6 M12 12.5c0-1.5 1-2.5 2.2-2.5S16 11 16 12.5V16`,download:`M12 4v11 M7 10l5 5 5-5 M5 20h14`,arrow:`M5 12h14 M13 6l6 6-6 6`,back:`M19 12H5 M11 6l-6 6 6 6`,check:`M5 12.5l4.5 4.5L19 7`,moon:`M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z`,sun:`M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4`};return(n,r)=>(H(),U(`svg`,{width:e.size,height:e.size,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.7`,"stroke-linecap":`round`,"stroke-linejoin":`round`,style:{flex:`none`}},[W(`path`,{d:t[e.name]},null,8,Qu)],8,Zu))}},Y={url:`https://nobeldahal.com.np`,name:`Nobel Dahal`,role:`Full-stack developer and software engineer`,place:`Kathmandu, Nepal`,email:`nobel@dahal.tech`,cv:`/download/resume.pdf`,github:`https://github.com/coderkoala`,linkedin:`https://www.linkedin.com/in/coderkoala`,motto:`Find a way, or make one.`,booking:`https://cal.com/nobel/30min`,availability:`Two review slots a week · Mon, Tue, Thu, Fri`},ed=[{org:`Independent`,title:`Software consultant`,type:`Own practice`,when:`2020–now`},{org:`Code for Nepal`,title:`Data science fellow`,type:`Part-time`,when:`2021–22`},{org:`United Real Estate`,title:`Software engineer`,type:`Contract`,when:`2020–21`},{org:`Proshore`,title:`Software engineer`,type:`Full-time`,when:`2020–21`},{org:`TechSathi`,title:`Platform architect`,type:`Part-time`,when:`2020`},{org:`ThemeGrill`,title:`WordPress plugin developer`,type:`Full-time`,when:`2019–20`},{org:`Gurkha Technology`,title:`Software engineer`,type:`Full-time`,when:`2019`},{org:`GDG Dang`,title:`Organizer and speaker`,type:`Volunteer`,when:`2019`},{org:`The Open Institute for Social Science`,title:`Software engineer`,type:`Internship`,when:`2018–19`}],td=[{name:`Project Management Foundations`,issuer:`PMI`,year:2024,featured:!0},{name:`DevOps Professional Certificate`,issuer:`PagerDuty`,year:2024,featured:!0},{name:`Career Essentials in Software Development`,issuer:`Microsoft`,year:2024,featured:!0},{name:`Career Essentials in Project Management`,issuer:`Microsoft`,year:2024,featured:!0},{name:`Introduction to Generative AI`,issuer:`AWS`,year:2024,featured:!0},{name:`Intermediate PostgreSQL`,issuer:`University of Michigan`,year:2021,featured:!0},{name:`SQL Server Developer`,issuer:`DataCamp`,year:2022,featured:!0},{name:`SQL Server for Database Administrators`,issuer:`DataCamp`,year:2022},{name:`Database Design`,issuer:`DataCamp`,year:2022},{name:`Become a Data Analyst`,issuer:`LinkedIn Learning`,year:2024},{name:`Data Cleaning in Python`,issuer:`LinkedIn Learning`,year:2024},{name:`R: Wrangling and Visualizing Data`,issuer:`LinkedIn Learning`,year:2024},{name:`Project Management Foundations`,issuer:`LinkedIn Learning`,year:2024},{name:`Laravel 9 Essential Training`,issuer:`LinkedIn Learning`,year:2024},{name:`Vue.js 3 Essential Training`,issuer:`LinkedIn Learning`,year:2024},{name:`Apache Web Server: Administration`,issuer:`LinkedIn Learning`,year:2024},{name:`AWS Essential Training for Developers`,issuer:`LinkedIn Learning`,year:2024},{name:`Node.js: Testing and Code Quality`,issuer:`LinkedIn Learning`,year:2024},{name:`Node.js: Debugging and Performance Tuning`,issuer:`LinkedIn Learning`,year:2024},{name:`Node.js: Design Patterns`,issuer:`LinkedIn Learning`,year:2024},{name:`DevOps Foundations`,issuer:`LinkedIn Learning`,year:2024},{name:`DevOps Foundations: CI/CD`,issuer:`LinkedIn Learning`,year:2024},{name:`DevOps Foundations: Infrastructure as Code`,issuer:`LinkedIn Learning`,year:2024},{name:`cPanel Professional (expired 2025)`,issuer:`cPanel`,year:2024},{name:`Advanced Node.js: Scaling Applications`,issuer:`LinkedIn Learning`,year:2021},{name:`Node.js Essential Training`,issuer:`LinkedIn Learning`,year:2020}],nd={"@context":`https://schema.org`,"@type":`Person`,"@id":`${Y.url}/#person`,name:Y.name,givenName:`Nobel`,familyName:`Dahal`,url:Y.url,image:`${Y.url}/og/default.png`,jobTitle:`Independent Software Consultant`,hasOccupation:{"@type":`Occupation`,name:`Full-stack web developer`,occupationLocation:{"@type":`Country`,name:`Nepal`},skills:`Laravel, PHP, Vue.js, Node.js, PostgreSQL, MySQL, WordPress, ERP, CRM`},description:`Built Kaede, a cargo ERP for freight forwarders (IATA ONE Record, AWB stock, learning suggestions). Full-stack developer in Kathmandu, Nepal: Laravel, Vue, PostgreSQL.`,email:`mailto:${Y.email}`,address:{"@type":`PostalAddress`,addressLocality:`Kathmandu`,addressRegion:`Bagmati`,addressCountry:`NP`},alumniOf:{"@type":`CollegeOrUniversity`,name:`Himalaya College of Engineering`},sameAs:[Y.github,Y.linkedin],knowsLanguage:[`en`,`ne`],knowsAbout:[`Full-stack web development`,`Web application development`,`WordPress plugin development`,`Payment gateway integration (eSewa, Khalti)`,`Laravel`,`PHP`,`Vue.js`,`Node.js`,`PostgreSQL`,`ERP systems`,`CRM systems`,`Air cargo software`,`IATA Cargo-XML`,`Microsoft Dynamics 365`,`DevOps`]},rd={"@context":`https://schema.org`,"@type":`WebSite`,"@id":`${Y.url}/#website`,url:Y.url,name:Y.name,inLanguage:`en`,author:{"@id":`${Y.url}/#person`},dateModified:`2026-11-01T18:13:42.177Z`};function id(e){return{"@context":`https://schema.org`,"@type":`BreadcrumbList`,itemListElement:[{name:`Home`,path:`/`},...e].map((e,t)=>({"@type":`ListItem`,position:t+1,name:e.name,item:Y.url+e.path}))}}var ad=[{what:`Laravel`,text:`Fixed a date overflow that crashed validation. Shipped in 8.x.`,href:`https://github.com/laravel/framework/pull/40690`,ref:`laravel/framework#40690`},{what:`Syncfusion EJ2`,text:`Wrote the Nepali locale, now part of the library.`,href:`https://github.com/syncfusion/ej2-locale/pull/192`,ref:`ej2-locale#192`},{what:`WPEverest`,text:`28 merged pull requests to Everest Forms and User Registration.`,href:`https://github.com/themegrill/everest-forms/pulls?q=is%3Apr+author%3Acoderkoala+is%3Amerged`,ref:`themegrill`},{what:`WPEverest docs`,text:`Wrote the developer documentation, on my own.`,href:`https://themegrill.github.io/dev-docs/`,ref:`dev-docs`},{what:`GDG Dang`,text:`Built the DevFest 2019 site and a Vision AI demo for my talk.`,href:`https://github.com/gdgdang`,ref:`gdgdang`},{what:`PHPJasper`,text:`Maintain a fork for production: JasperStarter 3.6.2, headless Java, Japanese fonts.`,href:`https://github.com/coderkoala/phpjasper`,ref:`coderkoala/phpjasper`},{what:`vee-validate`,text:`Made the Nepali messages formal and correct.`,href:`https://github.com/logaretm/vee-validate/pull/4642`,ref:`vee-validate#4642`}],od=[{group:`Backend`,items:[`PHP`,`Laravel`,`Node.js`,`Express`,`Python`,`C++`]},{group:`Data`,items:[`PostgreSQL`,`MySQL`,`SQL Server`,`MariaDB`,`Power BI`,`Tableau`]},{group:`Frontend`,items:[`Vue.js`,`JavaScript`,`HTML`,`CSS`]},{group:`Platform`,items:[`Linux`,`Bash`,`Docker`,`AWS`,`CI/CD`,`Dynamics 365`]}],sd=[`PHP`,`JavaScript`,`Node.js`,`C++`,`Bash`,`Linux`,`Git`,`HTML`,`CSS`,`WordPress`,`jQuery`],cd=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ld={class:`nav`},ud={class:`wrap nav__in`},dd={class:`links`,"aria-label":`Main`},fd={class:`nav__end`},pd={class:`kbtn__k`},md=[`aria-label`],hd=cd({__name:`SiteNav`,setup(e){let t=R(!1),n=R(`Ctrl `),r=()=>dispatchEvent(new Event(`a11y:open`));function i(){window.dispatchEvent(new KeyboardEvent(`keydown`,{key:`k`,ctrlKey:!0,metaKey:!0}))}Ti(()=>{/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent)&&(n.value=`⌘`);let e=document.documentElement.dataset.theme;t.value=e?e===`dark`:matchMedia(`(prefers-color-scheme: dark)`).matches});function a(){t.value=!t.value;let e=t.value?`dark`:`light`;document.documentElement.dataset.theme=e;try{localStorage.setItem(`theme`,e)}catch{}}return(e,o)=>{let s=Fi(`RouterLink`);return H(),U(`header`,ld,[W(`div`,ud,[G(s,{to:`/`,class:`brand`,"aria-label":`Nobel Dahal, home`},{default:vr(()=>[...o[0]||=[W(`span`,{class:`brand__mark`,"aria-hidden":`true`},`ND`,-1),W(`span`,{class:`brand__name`},`Nobel Dahal`,-1)]]),_:1}),W(`nav`,dd,[G(s,{to:`/work/`},{default:vr(()=>[...o[1]||=[yo(`Work`,-1)]]),_:1}),G(s,{to:`/writing/`},{default:vr(()=>[...o[2]||=[yo(`Writing`,-1)]]),_:1}),G(s,{to:`/about`},{default:vr(()=>[...o[3]||=[yo(`About`,-1)]]),_:1}),G(s,{to:`/consult`},{default:vr(()=>[...o[4]||=[yo(`Consult`,-1)]]),_:1})]),W(`div`,fd,[G(s,{class:`btn btn--solid btn--sm nav__cta`,to:`/consult`},{default:vr(()=>[...o[5]||=[yo(`Book a consultation`,-1)]]),_:1}),W(`button`,{class:`kbtn`,type:`button`,onClick:i,"aria-label":`Go to (Ctrl K)`,title:`Go to (Ctrl K)`},[G($u,{name:`search`}),W(`kbd`,pd,N(n.value)+`K`,1)]),W(`button`,{class:`iconbtn`,type:`button`,onClick:r,"aria-label":`Accessibility and languages`,title:`Accessibility and languages`},[G($u,{name:`person`})]),W(`button`,{class:`iconbtn`,type:`button`,onClick:a,"aria-label":t.value?`Use light theme`:`Use dark theme`},[G($u,{name:t.value?`sun`:`moon`},null,8,[`name`])],8,md)])])])}}},[[`__scopeId`,`data-v-dd075877`]]),gd=cd({__name:`RouteProgress`,setup(e){let t=Gu(),n=R(`idle`),r,i=t.beforeEach((e,t)=>{e.path!==t.path&&(clearTimeout(r),r=setTimeout(()=>{n.value=`loading`},120))}),a=t.afterEach(()=>{clearTimeout(r),n.value===`loading`&&(n.value=`done`,setTimeout(()=>{n.value=`idle`},300))});return Oi(()=>{i(),a()}),(e,t)=>(H(),U(`div`,{class:$e([`rp`,`rp--${n.value}`]),"aria-hidden":`true`},null,2))}},[[`__scopeId`,`data-v-a3604251`]]),_d=`---
title: GenericProperties
order: 3
kind: Real estate CRM
years: 2020–21
role: Engineer, United Real Estate
summary: Moved a US brokerage from Zoho to Microsoft Dynamics, then built what Dynamics was missing.
stack: Node.js, Dynamics 365, C#, PHP, Azure AD, Power Automate
facts:
  - Millions of agent records
  - Matches mapped in seconds
  - Open sourced with permission
link: https://github.com/coderkoala/GenericProperties
linkLabel: coderkoala/GenericProperties
loop: /media/work/generic-properties
youtube: cxSg2U6NzUE
steps:
  - Zoho moves to Dynamics :: Every record migrated by tools I wrote, not by hand.
  - Documents follow :: Years of files carried from Zoho into SharePoint.
  - A new lead arrives :: It lands in Dynamics with the fields the team actually uses.
  - Nearby agents are found :: A Node service searches millions of agent records by location.
  - The map draws itself :: Every match on one map, in a few seconds.
  - Someone is told :: Power Automate sends the email and opens a Planner card.
---

A brokerage with millions of agent records needed to answer one question fast: who is closest to this lead?

Dynamics 365 held the data but couldn't answer that quickly. I wrote a Node microservice that talks to the Dynamics Web API through Azure AD, does the geography itself, and draws the result on a map.

## Around it

- C# plugins for Leads, Opportunity and Super Obituaries
- Schema tooling that replays customisations, so changes survive between environments
- A PHP (Slim) server for Azure AD sign-in against Dynamics
- Migration tools for records and documents out of Zoho
`,vd=`---
title: Kaede
order: 1
schema: SoftwareApplication
seoTitle: Kaede, freight forwarding software built in Nepal
seo: Kaede is cargo and freight forwarding software built in Nepal: air waybills and AWB stock, IATA ONE Record, rates, door-to-door delivery and payroll.
kind: Cargo ERP
years: 2022–now
status: In daily production use
role: Designed and built it, end to end
summary: The system a freight forwarder runs on. It reads the paperwork, learns how your office works, and talks to airlines, customers and drivers for you.
stack: Laravel, Vue 3, PostgreSQL, WebSockets, Flutter, Playwright
facts:
  - Native IATA ONE Record
  - Learns from your own history
  - Twelve chat channels, one desk
link: https://dahal.tech/kaede/index.html
linkLabel: dahal.tech/kaede
cover: /media/work/kaede.jpg
shots:
  - /media/kaede/routing-suggest.webp :: Learned from the office's own history: its usual routings, one click away. :: 6x2
  - /media/kaede/routing-applied.webp :: One click later: both legs, distances, flying time, the connection and what's still missing. :: 6x3
  - /media/kaede/kaede-map.webp :: Real flown legs, every hop, weighted by chargeable weight. :: 4x2
  - /media/kaede/kaede-cargomsg-panel.webp :: Cargo-IMP and Cargo-XML, built and checked line by line before they leave. :: 2x2
  - /media/kaede/kaede-outlook.webp :: Outlook: next month's forecast, customers to call, and what moved. :: 3x2
  - /media/kaede/kaede-pdf-awb.webp :: All twelve IATA air waybill copies, printed exactly. :: 3x2
  - /media/kaede/kaede-pivot-drill.webp :: Every number opens the shipments behind it. :: 6x1
  - /media/kaede/kaede-designer.webp :: Design your own courier waybill, block by block, from the keyboard. :: 4x2
  - /media/kaede/kaede-letterhead-designs.webp :: Nine letterhead designs for every printed document. :: 2x2
engineering:
  - Stack :: Laravel 13 on PHP 8.4, Vue 3, PostgreSQL, Redis; realtime over Laravel Reverb; multi-tenant; English, Nepali and Japanese
  - Messaging :: Cargo-IMP and Cargo-XML (FWB, FHL, FSU, FFR and their X- forms) built and validated line by line; IATA ONE Record API 2.3.0 on ontology 3.3 :: /writing/what-one-record-taught-me
  - AWB stock :: Mod-7 check digits, row-locked allocation in issue order, a legality table for every state move, a unique index as the backstop :: /writing/handing-out-air-waybill-numbers
  - Integrations :: Mutual TLS with OAuth2 client credentials, pinned CAs, encrypted credentials; browser automation for carrier portals :: /writing/mtls-and-oauth2-together
  - Learning :: Per-organisation history with 90-day decay, accept/override verdicts at save, Wilson lower bound to trust or retire; no ML model :: /writing/most-waybills-are-the-usual-one
  - Rates :: One pure calculator for air, sea, road and rail; immutable published cards; a priced snapshot per quote :: /writing/designing-a-rate-engine
  - Integrity :: Executed waybills lock; SHA-256 hash-chained audit trail, verified incrementally every night
  - Printing :: JasperReports through a PHPJasper fork I maintain; all 12 IATA AWB copies; one font family across seven scripts :: /writing/maintaining-phpjasper
  - Mobile :: Versioned contracts for the driver and warehouse app: dispatch runs, scan batches that never move a status on their own, shift check-in with location
  - Quality :: Playwright smoke runs with per-screen request budgets; design and architecture rules checked in CI
steps:
  - Booking email lands :: Kaede reads the attachment and drafts the waybill. You confirm.
  - Routing suggests itself :: Learned from your history. The right lane is nearly always top five.
  - Boxes scanned onto flight :: The warehouse app scans in batches. Nothing moves without a person.
  - Airline told in ONE Record :: Native ONE Record and Cargo-XML. Carrier portals updated by robot.
  - Customer asks on WhatsApp :: Every chat app lands in one desk, answered with live tracking.
  - Ask the numbers anything :: Which lanes lost margin last month? Plain words, rows attached.
---

Freight forwarding runs on paper pretending to be software: waybills retyped three times, rates in a spreadsheet one person understands, drivers on the phone, customers on WhatsApp.

Kaede started as a fix for one office's air waybills. Now it runs the whole forwarder, and it does the reading, remembering and chasing that used to take people hours.

## It reads the paperwork

Drop a booking email, an invoice or a packing list onto Kaede and it extracts what matters and drafts a fill plan for the waybill. Every value is shown with where it came from, and nothing is saved until a person confirms it.

Every uploaded document is read once, stored as text and searchable from the file explorer. Kaede recognises the kind of document on upload, refuses to treat identity documents as anything else, and runs OCR in the browser on a model fine-tuned on cargo paperwork.

## It learns how your office works

A learning engine harvests every saved record. It learns a shipper's usual agent, issuer, bill-to and HS codes, the consignee's notify party, the currency by destination, and the routings your office actually flies. Suggestions appear where people already type, as chips they can accept or ignore, and the right routing is in the top five almost every time.

Rates work the same way. The rate builder suggests prices from your rate tables, with your own quoting history beside them for reference.

## It talks for you

- **Airlines.** Native **IATA ONE Record**, alongside Cargo-XML. Where a carrier only offers a web portal, Kaede drives the portal itself: it reads tracking from Cathay Cargo and Etihad Cargo, and does the daily booking entry on iCargo portals in minutes instead of hours. Anything a person must decide at the carrier stays with a person.
- **Customers.** WhatsApp, Viber, Telegram, Messenger, Instagram, LINE, WeChat, SMS, email, Teams, Slack and a web chat all land in one Cargo Desk. A chat becomes a case, a case becomes a quote, and tracking links are shared from the same thread. Every reply goes out in English, Nepali or Japanese.
- **Drivers and the warehouse.** A Flutter app for drivers and floor staff: dispatch runs, scan batches that load a flight box by box, shift check-in with location, and sign-in by QR code.

## It answers questions

Cargo Insights answers questions about your operation in plain words, such as "which lanes lost margin last month?" or "who shipped the most to Narita this quarter?", and shows the shipments behind every number. It's tested against a fixed set of known questions before every change.

## Beyond air

Sea and road run on the same spine: voyages and sailing schedules, container free-time and detention clocks, and through routes priced leg by leg. Leave and payroll are built for South Asia, not adapted from the US: festival and home leave are first class, and attendance feeds payroll directly.

## Built to be trusted

- Executed waybills lock. Every change keeps who, when, before and after, chained with SHA-256 and verified every night.
- Public tracking links use unguessable, hashed, expiring tokens, so a stranger can't walk your shipments.
- A full integration API with per-tenant keys, IP allowlists and OData reads, for partners who want to plug in.
- Multi-tenant from the ground up, with billing, so one install serves many forwarders.
`,yd=`---
title: Kalimati Market
order: 2
kind: Government platform
years: 2021–2025
status: Live since 2022, still in production
role: Solo, from design to deployment
seo: Kalimati Market's platform: daily prices, an ad-free Android app, and dues paid online via eSewa and Khalti. Built solo.
summary: Nepal's largest wholesale produce market, run online. Daily prices for everyone, an ad-free Android app, and dues that traders pay from their phones through eSewa, Khalti or the bank.
stack: Laravel, MySQL, Queues, libsodium, JWT, Android
facts:
  - Dues paid online, fraud-checked
  - Payment API for gateways
  - Ad-free Android app
link: https://kalimatimarket.gov.np
linkLabel: kalimatimarket.gov.np
cover: /media/work/kalimati.jpg
shots:
  - /media/kalimati/prices.jpg :: Today's wholesale prices, 108 commodities, and the app one tap away. :: 4x2
  - /media/kalimati/phone.jpg :: Built for the phone in a trader's pocket. :: 2x3
  - /media/kalimati/arrivals.jpg :: What came into the market today, commodity by commodity. :: 4x1
steps:
  - Market office closes the day :: Prices, arrivals and dues sync from the market's own system.
  - The board goes live :: Minimum, maximum and average, published for everyone.
  - Prices reach your pocket :: An ad-free Android app and a daily price newsletter.
  - A trader checks their dues :: Shop number in, today's invoice out.
  - They pay from their phone :: eSewa, Khalti or bank. Amounts and references are verified.
  - The ledger squares itself :: Payments flow back to the market's books overnight.
---

Kalimati supplies 60 to 70 percent of the Kathmandu valley's fruit and vegetables. Its morning price board decides what a kilo of tomatoes costs across half the city.

I built and have run its platform on my own since 2021: the public site, the Android app, the admin the market's staff use every morning, and the parts nobody outside sees, which is where most of the work is.

## The public side

- **Daily prices** for over a hundred commodities: minimum, maximum and average, with history, trends and day-to-day comparisons.
- **Arrivals:** how much of each vegetable, fruit and fish came in, with six-month trends.
- **Notices:** tenders, public bills, right-to-information reports and daily pesticide residue results.
- **Nepali and English** throughout.
- **An Android app** with no ads, because the public has a right to this information, and a newsletter that sends only one thing: the day's prices.

## Paying dues without a queue

Traders rent stalls and owe dues daily. They used to settle them in person. Now they enter their shop number, see today's invoice, and pay through **eSewa**, **Khalti** or a bank transfer.

Money on a government site gets attacked, so the checks are strict:

- The amount paid must equal the invoice to the paisa, or it's refused.
- Every gateway reference can be used once. A replayed receipt is rejected.
- A payment is recorded as unverified until a queued job confirms it with the gateway, server to server. The browser's word is never enough.
- Invoices roll over at midnight Nepal time. A payment started against yesterday's invoice is refused rather than applied to the wrong day.

## An API for payment providers

For gateways that integrate directly, I designed and documented a small API. It has two calls: fetch a shop's invoice, and complete it.

- Requests are signed with short **JWTs** (HS512), keyed per provider, and accepted only from **allow-listed IPs**.
- Signing keys rotate quarterly, with providers ready to switch within 24 hours.
- Completing an invoice cross-checks the shop, the amount and the provider's reference. Any mismatch is refused, with a named error.
- During maintenance, the server tells providers to queue and retry instead of silently losing a payment.

## The nightly handshake

The market keeps its books in its own office system. Every day it pushes prices, arrivals and dues to the website as signed CSV uploads, and pulls the day's online payments back.

- Each upload replaces that day's data inside a single transaction, so a half-finished import never shows.
- Checksums and totals are verified, and a second upload for the same day is ignored.
- Exports are byte-exact CSV with Windows line endings, because that's what the office software reads.
- Sensitive values are encrypted with **libsodium**, and every import reports back through telemetry.

## The admin

Role-based permissions, two-factor sign-in, impersonation for support, menu and notice management, and searchable tables over everything. Staff who aren't technical publish the day's numbers without calling anyone.

## What I'd do differently

When the new site launched I wrote publicly that it delivered little in terms of looks, and I meant it. A solo build for a government board gets the data and the money right first. If I built it today, the price board would be the homepage, readable on a cheap phone in direct sunlight. I'd also still like to add Nepal Bhasa.
`,bd=`---
title: A copilot that lives in bash and asks before it acts
seoTitle: A local, bash-native copilot for DevOps
date: 2025-11-08
seo: My plan for a homebrew, local-first command-line copilot for DevOps work: a question mark in bash, local models on an 8 GB GPU, and a model that can only propose commands.
summary: The copilot I'm building into my dotfiles: one character in bash, local models on an 8 GB laptop GPU, memory that stays on the machine, and a model that can propose commands but never run them.
---

Most of my day is a terminal. A Laravel test fails, a container won't start, a certificate is about to expire, a migration needs a second look before it touches production. I keep reaching for an assistant, then copying output into a browser tab, then copying commands back. Every round trip loses context, and every pasted command is one I'm trusting a little too much.

So I'm building the assistant into my dotfiles instead. Not a product, not a startup: the tool I want on my own machines. This is what I'm aiming for, and why each piece is shaped the way it is.

## One character

The whole interface is a question mark:

\`\`\`bash
? explain this Laravel exception
php artisan test 2>&1 | ? why does this fail
? --file app/Models/User.php explain the casts
? and how do I roll that back
? remember we deploy with Ansible from ci01
\`\`\`

Piped output becomes context. Follow-ups remember the last few exchanges in this shell. \`remember\` is the only way anything goes into long-term memory: nothing from a conversation is stored unless I ask.

Getting \`?\` to work in bash without breaking globbing everywhere else is its own small puzzle. A bare \`?\` is a glob character. The answer is a function behind an alias that turns globbing off only for the arguments of that one command, not for the whole shell.

## Local first, because it's my code

The default model runs on the machine, through Ollama, on hardware I already own: an 8 GB laptop GPU. That decides everything about model choice.

- A **resident pair** stays loaded: a 7B coding model for real answers, and a 1.5B model for the instant stuff (commit messages, quick lookups) at well over a hundred tokens a second.
- **Heavier models load on demand**, only for the requests that need them, and let go of VRAM sooner.
- The installer reads the GPU and RAM and picks a tier: 8 GB, 4 GB, or CPU only. Nobody has to know model names.
- The model server listens on localhost only. If containers need to reach it, the installer opens it to Docker's subnets **only after** it has verified a firewall rule limiting it to them. If it can't verify that, it stays closed.

Cloud models are still there, explicitly, for the times a 7B model isn't enough. But my code, my logs and my clients' data don't leave the laptop by default.

## The model can propose. It can never run.

This is the part I care about most. An assistant that executes what a model says is one prompt injection away from \`rm -rf\`. So the pipeline is:

\`\`\`
? request → context + memory → local model → action plan (JSON)
          → schema → policy → your approval → broker → sandbox | host | ssh
\`\`\`

- **The model writes a plan, not a shell string.** Commands are argument lists. No \`eval\`, no strings glued together from model output.
- **The plan can't choose its own powers.** Mounts, images, users, capabilities and environment variables aren't fields in the plan's schema at all. The execution profile decides those.
- **Approval only goes up.** Reading is automatic. Installing something asks. Destructive operations, credentials and \`sudo\` need me to type \`yes\`. Touching production needs me to type the host's name. Approval is read from the terminal itself, so a piped \`yes\` can't answer it.
- **Some things are simply refused**: the Docker socket, \`--privileged\`, host namespaces, \`/etc/shadow\`, other processes' environments.

The test suite assumes the model is fully compromised, feeding it hostile text from a repository or a log, and checks the policy still holds. If the copilot turns against me, the worst it should manage is a plan I decline.

## A sandbox by default

When a plan does run, it runs in a throwaway container: no capabilities, no new privileges, non-root, read-only root filesystem, **no network**, resource limits, and images pinned by digest. It sees a copy of the workspace, never my home directory, sockets or secrets. Edits happen in a disposable git worktree, and promoting them into my real tree is a separate, confirmed step.

\`baremetal\` exists for when I genuinely need the host, inspecting systemd for example. It changes where a command runs. It never relaxes a rule.

## Built for DevOps days, not demos

Chat is the least of it. The useful part is a set of namespaces that run real tools through the same policy:

| | |
|---|---|
| \`dotfiles-build\` | tests, static analysis, formatting, queue and scheduler status for Laravel apps |
| \`dotfiles-code-audit\` | offline SAST rules, secret scanning, vulnerability and licence checks, SBOMs |
| \`dotfiles-iac\` | Compose config, Terraform validate and plan, \`apply\` only with a typed approval, Ansible check mode |
| \`dotfiles-k8s\` | pods, events, logs, diffs and dry runs; \`apply\` typed |
| \`dotfiles-ops\` | VPS health, certificate expiry, nginx and journal logs, Prometheus and Alertmanager queries, hardening checks |
| \`dotfiles-perf\` | benchmarks, comparisons, flame graphs |
| \`dotfiles-backup\` | Postgres dumps, and **restore drills** in a throwaway, network-less container |

Every task can be dry-run, and every one goes through the same validation as anything a model proposes. Personas, such as a DevOps engineer, an incident commander or a database engineer, change what the model pays attention to, not what it's allowed to do.

## Memory that stays put

Memory is a SQLite file with full-text search: no vector database, no embeddings by default. On a small GPU, the context window is the scarce resource, and a good keyword search with recency and categories gets the right three facts into the prompt more reliably than I expected. Secrets are redacted before anything is stored, and each category has its own retention.

## One line on a new machine

None of this matters if setting up a laptop takes a weekend. The dotfiles install with a single pinned command: it signs in to GitHub, clones the private repo, decrypts secrets that are stored encrypted with \`age\`, and runs a modular installer for shell, git, Docker, editors, GPU drivers, the models and the copilot. Everything is idempotent, has a dry run, and has a \`doctor\` that tells me exactly what's missing and how to fix it.

## What I'm not building

- **An autonomous agent.** It suggests; I decide.
- **A second cloud account.** Local by default, cloud on purpose.
- **A framework.** One specification file, JSON Schemas, a small Python core with almost no dependencies, and bash where bash is the right tool.

I'll publish the dotfiles once the edges are sanded down. For now, this is the shape of it: a copilot that's fast because it's local, useful because it knows my machine, and safe because it never gets to run anything I haven't read.
`,xd=`---
title: A date that didn't fit in an integer
date: 2022-01-31
project: laravel
summary: The year 4123 crashed Laravel's date validation on 32-bit PHP. Here's how I found it, and the four-line fix that shipped in Laravel 8.
---

Every validator has one job: say yes or no. It should never fall over.

In January 2022 I found an input that made Laravel's \`date\` rule do exactly that. Type \`12-2-4123\` into a date field that relied only on server-side validation, and on some servers you didn't get "The date is not a valid date." You got a 500 error.

## Finding it

It turned up on an Apache and PHP stack running a 32-bit build. Laravel's \`validateDate\` asked PHP's \`strtotime()\` whether the string was a date it understood:

\`\`\`php
if ((! is_string($value) && ! is_numeric($value)) || strtotime($value) === false) {
    return false;
}
\`\`\`

\`strtotime\` returns a Unix timestamp, a count of seconds since 1970. A 32-bit integer runs out in January 2038, which is the famous Year 2038 problem. Ask for a date past that and, instead of quietly returning \`false\`, PHP raised:

\`\`\`
ErrorException: strtotime(): Epoch doesn't fit in a PHP integer
\`\`\`

Laravel turns PHP warnings into exceptions, so a bad date from a form brought down the whole request. Any public form with a date field could be made to throw, just by typing a year a little too far away.

## The fix

The rule should behave the same everywhere: an unparseable date is invalid, not fatal. So I wrapped the check and treated a failure to parse as what it is, a no:

\`\`\`php
try {
    if ((! is_string($value) && ! is_numeric($value)) || strtotime($value) === false) {
        return false;
    }
} catch (Exception $e) {
    return false;
}
\`\`\`

I opened the issue ([#40686](https://github.com/laravel/framework/issues/40686)) and the pull request ([#40690](https://github.com/laravel/framework/pull/40690)) the same day. It was merged into Laravel 8.x that afternoon.

## Why a tiny fix matters

- **Validators are a security boundary.** Anything that turns user input into a 500 is a cheap way to fill logs, trip alerts and find soft spots.
- **Environment is input too.** The same code was fine on 64-bit PHP. Your users don't choose your servers, and a library doesn't get to choose its users' servers.
- **Fail closed, quietly.** The right answer to "I can't read this date" is "invalid", with the same message as any other bad date.

It's four lines. It's also in every Laravel 8 app that updated after January 2022, which is a nice thing to have helped with.
`,Sd=`---
title: Designing a freight rate engine that four modes can share
seoTitle: Designing a multimodal freight rate engine
date: 2026-07-02
project: kaede
seo: How a multimodal freight rate engine works: chargeable weight, rate bands and minimums, surcharges, distribution chains and immutable rate cards.
summary: Air, sea, road and rail price freight in different units by different rules. How I built one engine for all four, and the rules that kept it correct.
---

Pricing freight sounds like a lookup: origin, destination, weight, price. It isn't. Air charges by the greater of actual and volumetric weight. Sea less-than-container charges by tonne or cubic metre, whichever is more. A full truck is a flat price. A US road shipment may be priced per hundred pounds. On top of that come minimums, weight breaks, fuel and security surcharges, and the margin each party in a chain of agents adds before the customer sees a number.

Kaede's rate engine prices all of it with one calculator. This is how it's put together.

## Start with "what are we charging for?"

Everything hangs off one question: what is the chargeable quantity? It's an enum, and the calculation dispatches on it:

| Basis | Used for | Quantity |
|---|---|---|
| Greater of gross and volumetric | Air | max(kg, L×W×H×pieces ÷ divisor) |
| Weight or measure | Sea LCL | max(tonnes, m³) |
| CBM | Sea LCL | cubic metres |
| Per container | Sea FCL, rail | 1 per container |
| Flat | Road FTL, door to door | 1 per shipment |
| Per piece | Courier | piece count |
| CWT | US road LTL | hundreds of pounds, rounded up |

Getting this right first means everything after it, bands, minimums and surcharges, works in "units" without caring which mode it is.

## The calculation, in order

\`\`\`
1. find the rate card    route first, then zone-to-zone as a fallback
2. chargeable quantity   by the card's basis
3. weight band           e.g. 0–45 kg, 45–100, 100–300… with a minimum charge
4. round                 by the card's own rule
5. surcharges            fuel, security, handling…
6. distribution chain    each tier's margin, up to the buyer
7. taxes, currency       pinned sell currency, tax lines
→ a breakdown, line by line
\`\`\`

The calculator is **pure**: given the same input and the same rate data, it returns the same breakdown, and it writes nothing. That makes it safe to call for a quick quote, for a booking, and for a waybill, and trivial to test with fixtures.

### Find the card: specific beats general

A rate card applies to a route (airport to airport, port to port) or, failing that, to zones ("Kathmandu to any EU hub"). Route-specific wins. Zones exist so one card can cover hundreds of lanes without hundreds of rows.

### Bands and minimums

Freight is priced in weight breaks: the rate per kilo drops as weight rises. A shipment is priced at its band's rate, then checked against the card's minimum charge, which can be a hard floor or a minimum that replaces the calculated price entirely.

### Rounding is a business rule

Round half up, always round up, truncate, or round weight to the nearest half kilo: different carriers and markets do different things, and the difference is real money across thousands of shipments. So rounding is a setting on the card, never hard-coded.

### Surcharges have their own basis

A fuel surcharge might be per chargeable kilo, a security fee per shipment, a handling charge a percentage of freight. Each surcharge type declares its own basis, and the engine applies it. One early bug: a "percentage of freight" surcharge calculated against a base that hadn't been set yet, so it came out as zero. Ordering the steps explicitly, and testing each one, is what found it.

### The distribution chain

A rate often passes through several hands: a general agent, a forwarder, a sub-agent, the customer. Each link adds its margin. The engine walks the chain in order and stops at the buyer's position, so a sub-agent sees its own buy price and the customer sees theirs, from the same card.

## Every price leaves a receipt

When a quote, booking or waybill uses a price, the full breakdown is stored as a snapshot: every line, every rate, every surcharge, the card version it came from. Later edits to the card don't change what a customer was quoted. Manual changes, such as an extra charge or a negotiated spot price, are recorded on top as adjustments with who and why, never written over the calculated number.

## Published cards are immutable

Editing a published rate card creates a new version; the old one becomes "superseded". Deleting is for mistakes, not for expiry. This is what makes an audit possible: "what was the rate on 12 March, and why did we charge that?" always has an answer.

## Mode-specific columns, enforced by the database

Air carriers and sea, road and rail carriers live in different tables. A card points at one or the other, never both, and a database check constraint enforces it. An early design had a \`carrier_type\` text column next to a single id. It drifted out of sync within weeks, and it went.

## What I'd keep

1. **Model the unit first.** Once "chargeable quantity" is right, the rest is arithmetic.
2. **Keep the calculator pure** and put persistence and permissions around it, not inside it.
3. **Make rounding, bases and fallbacks data**, because every market does them differently.
4. **Snapshot every price you show,** and record overrides alongside it, never instead of it.
5. **Version, don't edit,** anything a customer or an auditor might ask about later.
`,Cd=`---
title: Integrating eSewa and Khalti in Laravel without trusting the redirect
seoTitle: eSewa and Khalti integration in Laravel, done safely
date: 2022-12-16
project: kalimati
seo: How to integrate eSewa and Khalti payments in Laravel safely: server-side verification, exact amounts, single-use references, queues and daily rollover.
summary: Most eSewa and Khalti tutorials stop when the success page loads. That's exactly where the fraud starts. A production pattern from a government payment page, for any Laravel app in Nepal.
---

eSewa and Khalti are how Nepal pays online. Integrating either into a Laravel app takes an afternoon: redirect the customer to the gateway, wait for them to come back, mark the order paid.

That last step is where most integrations go wrong. I built online payments for Kalimati Market's traders, on a government site where the people paying have every reason to want their dues to be cheaper. This is the pattern that held up.

## The one rule

**The redirect back to your site is a claim, not a proof.**

When the customer returns from eSewa or Khalti, the URL carries an amount, a reference and a status. All of it passed through the customer's browser, so all of it can be edited. A success page that marks an order paid from those query parameters can be fooled by anyone who copies a URL and changes a number.

So the return trip only **starts** verification. Your server finishes it by asking the gateway directly.

## The shape of a safe flow

\`\`\`
1. Create a payment row     status = pending, amount = invoice total, our own uuid
2. Send the customer        to eSewa / Khalti with our uuid as the product id
3. Customer comes back      we read the gateway's reference from the request
4. Record it as unverified  never "paid" yet
5. Queue a verification     server → gateway: "did this reference pay this amount?"
6. Gateway says yes         status = verified, mark the dues paid
\`\`\`

Steps 4 and 5 are the ones tutorials skip.

## The four checks

### 1. The amount must match exactly

Compare the amount the gateway reports with the invoice **you** stored, not with anything from the request. Compare as money, not as floats:

\`\`\`php
// Store paisa as integers. Never compare floats for money.
if ((int) round($reported * 100) !== $payment->amount_paisa) {
    $payment->markRefused('amount_mismatch');
    return;
}
\`\`\`

Khalti already works in paisa. eSewa works in rupees. Convert once, at the boundary.

### 2. A reference can be used once

Every successful payment has a gateway reference: eSewa's reference id, Khalti's \`pidx\` or transaction id. Before accepting one, make sure you've never seen it, and let the database enforce it:

\`\`\`php
Schema::table('payments', function (Blueprint $t) {
    $t->string('gateway')->index();
    $t->string('gateway_reference')->nullable();
    $t->unique(['gateway', 'gateway_reference']);
});
\`\`\`

A replayed receipt from last week, or from someone else's order, hits the unique index and goes nowhere.

### 3. Verify server to server, in a queue

Both gateways offer a server-side lookup: eSewa's transaction verification or status check, and Khalti's lookup by \`pidx\`. Call it from a queued job, not from the controller handling the redirect:

\`\`\`php
class VerifyGatewayPayment implements ShouldQueue, ShouldBeUnique
{
    public $tries = 5;
    public $backoff = [10, 30, 60, 300, 900];

    public function __construct(public Payment $payment) {}
    public function uniqueId(): string { return $this->payment->uuid; }

    public function handle(GatewayClient $gateway): void
    {
        $result = $gateway->lookup($this->payment);   // server → gateway, with your secret key

        match (true) {
            $result->isComplete() && $result->amountPaisa === $this->payment->amount_paisa
                => $this->payment->markVerified($result->reference),
            $result->isPending() => $this->release(60),   // gateway still settling: try again
            default => $this->payment->markFailed($result->status),
        };
    }
}
\`\`\`

Why a queue:

- **Gateways are slow sometimes.** A customer shouldn't stare at a spinner while you wait, and a timeout shouldn't lose a payment.
- **Retries are free.** If the gateway is down, the job tries again later instead of the payment silently staying unpaid.
- **One verification per payment.** \`ShouldBeUnique\` stops two refreshes of the success page from verifying twice.

The customer sees "payment received, confirming" until the job finishes. That's honest, and in practice it takes seconds.

### 4. Know which day it belongs to

If invoices are daily, as Kalimati's dues are, a payment started at 11:58 p.m. and finished at 12:01 a.m. belongs to an invoice that no longer exists. Refuse it rather than apply it to the wrong day. In Nepal that boundary is midnight Nepal time (UTC+5:45), not your server's UTC.

## Things that bite in Nepal specifically

- **Sandbox and live keys differ in more than the key.** The test endpoints and merchant codes are different hosts and values. Keep them in config, not in code, and fail loudly if production is pointed at a sandbox.
- **Amounts include service charges.** A gateway can report a total that includes its own fee or tax fields. Decide which number must equal your invoice, write it down, and test it in the sandbox with a real-looking amount, not 10 rupees.
- **The return URL can arrive twice.** People press back, refresh, or double-tap. Make the return handler idempotent: look up by your own uuid, and if it's already verified or queued, just show the status.
- **Bank transfer is still a payment method.** Many traders pay at a bank. Give staff a way to record those against the same invoice, so online and counter payments reconcile in one place.

## If a provider integrates with you

Sometimes a wallet or bank wants to build the payment into its own app and call your API instead. Then you're the one being called, so turn the rules around:

- Give each provider its own signing key and accept short-lived signed tokens (JWT, HS512 at minimum), only from their allow-listed IPs.
- Rotate keys on a schedule, and agree in advance how fast they'll switch.
- Make the completion call re-check the shop or order, the amount and their reference, and answer every refusal with a named error.
- During maintenance, say so explicitly, so they queue and retry instead of losing the payment.

## The checklist

1. Treat the redirect as a claim. Verify server to server.
2. Store money as integers, and compare against your own invoice.
3. Make the gateway reference unique in the database.
4. Verify in a unique, retrying queue job.
5. Respect your business day boundary, in Nepal time.
6. Make the return handler safe to hit twice.

If you'd like this built into your Laravel app, [let's talk](/consult).
`,wd=`---
title: Finding the nearest agent among millions
date: 2021-05-25
project: generic-properties
summary: A US brokerage moved from Zoho to Microsoft Dynamics. The data moved fine; the question it couldn't answer quickly was "who is closest to this lead?"
---

United Real Estate is a US brokerage with a very large network of agents. In 2020 they were moving their CRM from Zoho to Microsoft Dynamics, and I was brought in as a freelancer to design it, customise it and move everything across.

## Moving house

A CRM migration is mostly unglamorous work, and it's where most of the risk is.

- **Records.** I wrote tools to carry leads, contacts and opportunities from Zoho into Dynamics. Nobody re-keyed anything.
- **Documents.** Years of files lived in Zoho's file store. Another tool moved them into SharePoint and linked them to the right records.
- **Customisations.** Dynamics needed custom entities and fields. Rather than click them in by hand per environment, I wrote schema tools that applied them from code, so the same change could be replayed reliably.
- **Plugins.** C# plugins for the Leads, Opportunity and Super Obituaries modules held the business rules.
- **Automation.** Power Automate flows sent the emails and notifications and created Planner cards, so a new lead turned into someone's task without anyone copying it over.

## The question Dynamics couldn't answer fast

A lead comes in for a house. Which agents are nearest?

Dynamics held every agent, but answering a geographic question over millions of records through its standard views was slow. So I built a small service beside it:

1. A Node.js microservice signs in through Azure Active Directory and reads agent records over the Dynamics Web API.
2. It does the geography itself: given a lead's location, it works out which agents are close.
3. The results are drawn on a map, all of them, in a few seconds.

A small PHP server handled the Azure AD side for other tools that needed to read from Dynamics.

## Working with the people who use it

I worked directly with the data administrators and agents. The best changes came from watching them use it: a field in the wrong place, a step that needed one click too many. Small things, but they're the difference between a system people use and one they work around.

With the client's permission, the tools are open source: [GenericProperties](https://github.com/coderkoala/GenericProperties), [MSVProperties-php](https://github.com/coderkoala/MSVProperties-php), [DynamicsWebApi](https://github.com/coderkoala/DynamicsWebApi), and the [Leads](https://github.com/coderkoala/DynamicsCRMLeads), [Opportunity](https://github.com/coderkoala/DynamicsCRMOpportunity) and [Super Obituaries](https://github.com/coderkoala/DynamicsCRMSuperObituaries) plugins. There's a [demo video](https://www.youtube.com/watch?v=cxSg2U6NzUE) too.
`,Td=`---
title: Handing out air waybill numbers without handing out the same one twice
seoTitle: Allocating air waybill numbers safely
date: 2026-10-29
project: kaede
seo: How IATA air waybill check digits work, how AWB stock moves between states, and how to allocate numbers safely under concurrency.
summary: An air waybill number is a scarce, audited resource that two people will try to take at the same second. Check digits, stock states, and the locks that keep it honest.
---

Every air shipment travels under an air waybill (AWB) number. Airlines sell those numbers to forwarders in blocks, and they expect every number in every block to be accounted for: used, voided, returned or still on the shelf. Lose one and the airline asks where it went. Hand the same one to two shipments and you have two legal documents with one identity.

So in Kaede the AWB number is not a string field. It is stock.

## The number checks itself

An AWB number has 11 digits: a 3-digit airline prefix, a 7-digit serial, and a check digit.

\`\`\`
157 - 4012101 2
│     │       └ check digit
│     └ serial
└ airline prefix
\`\`\`

The check digit is the serial modulo 7:

\`\`\`php
function awbIsValid(string $raw): bool
{
    $digits = preg_replace('/\\D/', '', $raw);          // "157-4012 1012" → "15740121012"
    if (strlen($digits) !== 11) return false;

    $serial = (int) substr($digits, 3, 7);
    return $serial % 7 === (int) $digits[10];
}
\`\`\`

Mod 7 catches most single-digit typos and many transpositions, which is exactly the class of error a person makes when copying a number off a sheet. It is not a security check: anyone can compute it. It just stops \`157-40121013\` reaching an airline.

People write AWB numbers in half a dozen ways: \`157-40121012\`, \`157-4012 1012\`, sometimes with the origin airport wedged in after the prefix. Normalise first, validate once, and use one implementation everywhere. A second, slightly different check-digit function somewhere else in the codebase is how a bad number slips in.

When a block arrives from the airline, the first and last numbers are validated and the range is expanded into individual stock rows. Each one is checked again on the way in, because a typo in the range is a block of numbers that all look valid but don't belong to you.

## A number has a life

Each stock row moves through a small set of states:

\`\`\`
ready ──▶ assigned ──▶ issued ──▶ executed
  │          │            │
  └──────────┴────────────┴──▶ voided / cancelled
\`\`\`

- **Ready**: on the shelf, owned by the business.
- **Assigned**: given to a branch or sub-agent to draw from.
- **Issued**: on a waybill being prepared.
- **Executed**: the waybill is a legal document. This is a one-way door.

The transitions are a table, not a set of \`if\` statements scattered across controllers. A number cannot go from executed back to ready, and one that is assigned to branch A cannot be pulled by branch B. When we first measured, there were 17 code paths writing a stock status. Several knocked executed numbers back to "assigned" or let expired numbers be issued. Funnelling every change through one service with a legality table fixed whole categories of bugs at once.

Two more rules turned out to matter in practice:

- **Expiry is part of availability.** A number past its valid-to date is refused at the airline counter, so it must never be offered. When we checked, about one in six "ready" numbers had already expired.
- **Freezing is not a status.** A disputed block or an audit takes numbers out of circulation without rewriting their state, so the history stays true.

## Two people, one number

Here is the bug every stock system has at least once. Two users press "new waybill" at the same moment:

\`\`\`
A: SELECT first ready number  → 4012101 2
B: SELECT first ready number  → 4012101 2
A: UPDATE … SET status = issued
B: UPDATE … SET status = issued      ← same number, twice
\`\`\`

Both reads were correct when they ran. The fix is to make the read and the write one decision, inside a transaction, with the row locked:

\`\`\`php
DB::transaction(function () use ($pool, $type) {
    $number = AwbStock::query()
        ->ready()->notExpired()->notFrozen()
        ->where('pool_id', $pool)->where('type', $type)
        ->orderBy('serial')            // issue in sequence, as airlines expect
        ->lockForUpdate()               // SELECT … FOR UPDATE
        ->first();

    if (! $number) throw new OutOfStock();

    $number->update(['status' => 'issued']);
    return $number;
});
\`\`\`

Now B waits on A's lock, re-reads after A commits, and gets the next number. Postgres's \`SKIP LOCKED\` would let B take the next free row without waiting, which is faster under heavy load. We chose plain waiting on purpose: airlines audit sequences, and issuing strictly in order with no gaps is worth a few milliseconds when a forwarder issues dozens of numbers an hour, not thousands a second.

### The race moves; follow it

Locking the pick is the obvious part. The less obvious races came later:

- **Decisions made on a stale copy.** Release, reassign and status changes checked the state on the model the request had loaded, then wrote inside a transaction. By then another request could have moved it. The rule now: lock the row and re-read it inside the transaction, then decide.
- **Releasing what is no longer yours.** Two "give this number back" clicks both loaded a case holding a number. The first released it; another case took it; the second release freed *that* case's number. Re-reading the holder under the lock makes the second release a no-op.
- **The database as the last word.** A unique index allows one live assignment per number. If two creates still slip past the application check, the second hits the index. We catch that specific violation and answer it in plain language, the same message the application check would have given, instead of a 500.

## What I'd tell anyone building this

1. Treat scarce identifiers as inventory with states, not strings.
2. One validator, one transition table, one service that writes status.
3. Lock, re-read, decide, write. In that order, every time.
4. Let a unique index be the backstop, and make its refusal readable.
5. Measure the real data. The worst bugs here were found by counting rows, not by reading code.
`,Ed=`---
title: Keeping PHPJasper alive for a cargo ERP
seoTitle: Maintaining a PHPJasper fork in production
date: 2026-01-16
project: kaede
seo: Why I forked PHPJasper, and the fixes a production cargo ERP needed: headless Java, Japanese and Devanagari fonts, passwords off the command line, and shell-safe parameters.
summary: Kaede prints air waybills, invoices and payslips through JasperReports. The PHP wrapper everyone uses had gone quiet, so I forked it and fixed what production kept finding.
---

Kaede prints a lot of paper: all twelve copies of an IATA air waybill, labels, manifests, invoices, payslips. Freight runs on documents that must look exactly right, in English, Nepali and Japanese. Under the hood, those documents are JasperReports templates, rendered from PHP through **PHPJasper**, which shells out to **JasperStarter**, a small Java command-line runner.

PHPJasper is a good library. But by late 2025 its last release was two years old, an upgrade to JasperStarter 3.6.2 had sat in a contributor's fork since 2022, and Kaede kept hitting problems that needed changes inside the package. So in December 2025 I forked it as [\`coderkoala/phpjasper\`](https://github.com/coderkoala/phpjasper) and started maintaining it the way a production system needs.

## Why fork instead of patch around it

The tempting fix for a library you depend on is a patch file, or a workaround in your own code. Both rot. A patch breaks on the next update; a workaround hides the problem from the next person.

A fork with its own package name, tagged releases, and a changelog of why each change exists is honest about what it is: the version Kaede actually runs. Kaede pins an exact tag, so a render never changes because someone pushed to a branch.

The first commit was merging that long-waiting JasperStarter 3.6.2 upgrade. Then production started teaching me things.

## 1. Java wanted a screen

The first failure on a fresh server was an \`AWTError\`: assistive technology not found. JasperReports uses Java's AWT to measure text, and on a server with no display, AWT goes looking for a desktop accessibility bridge that isn't there.

The fix is one flag, in the launcher script the fork ships:

\`\`\`sh
java -Djava.awt.headless=true -jar "$HOME_FOLDER/lib/jasperstarter.jar" "$@"
\`\`\`

The README now explains the other half, for hosts where a system-wide Java accessibility setting still gets in the way. It's a small change that every server running this needs, so it belongs in the package, not in each server's notes.

## 2. Japanese, and every script after it

Kaede's users write consignee addresses in Japanese. JasperReports doesn't fall back to a system font the way a browser does: if the font named in the template has no glyph for a character, the PDF prints a blank square. On an air waybill, a blank address is a shipment that doesn't arrive.

The fork ships **Noto Sans JP** as a font extension on JasperStarter's classpath, so Japanese prints out of the box.

Kaede went further on its own side: one bundled font family that the templates name, mapping to DejaVu Sans for Latin and to a separate face for each script DejaVu lacks: Arabic, Hebrew, Thai, Devanagari, Korean and Chinese, with Japanese coming from the fork. Getting Thai and Devanagari to shape correctly also needed the ICU classes JasperReports uses to tell scripts apart, plus a couple of renderer settings. Now a template asks for one font and gets the right one for every character.

## 3. The database password was on the command line

PHPJasper builds one shell command and passes the database login as \`-u user -p password\`. That works. It also means the password sits in \`/proc/<pid>/cmdline\`, readable by any user on the machine, for the whole render. And because it isn't quoted, a password with a space or a quote in it simply broke rendering.

JasperStarter can read arguments from a file, one per line, passed as \`@path\`. So Kaede now writes the connection details to a file only the worker can read (\`0600\`), points the command at it, and deletes it when the render finishes, whatever happens:

\`\`\`php
$file = $this->writeArgumentFile($connection);    // 0600, private directory
try {
    $this->runJasperWith("@{$file}");
} finally {
    @unlink($file);
}
\`\`\`

A render killed mid-way (out of memory, a worker timeout) never reaches \`finally\`. So a sweeper removes leftover files when a queue worker starts and once an hour.

## 4. Parameters went into a shell

The same command string carries each report parameter as \`key="value"\`, without escaping. Inside double quotes the shell still expands \`$\`, backticks and backslashes, and a \`"\` ends the quote. A parameter value with any of those could run a command on the server.

No real AWB number, batch id, leave period or menu choice contains shell metacharacters. So the last check before a render **refuses** such values rather than trying to escape them: escaping correctly is easy to get subtly wrong, and a mangled value would print the wrong document anyway. The error names the parameter but never echoes its value.

## 5. Knowing it still works

Reports are the kind of feature nobody checks until month-end, when payslips won't print. So there's a canary: a tiny built-in template that Kaede compiles, fills and exports to PDF on a schedule, in a temporary folder, calling JasperStarter directly with an argument list, with no shell and no change of working directory.

It proves Java starts, the classpath loads, a template compiles and a PDF comes out, and how long that fixed cost is. It's honest about what it can't prove: no database, no business template, no queue. A green canary means the engine works; it doesn't promise every report does.

## What maintaining a fork actually means

- **Pin exact versions.** The application names a tag, never a branch.
- **Fix it where it belongs.** If every server needs the change, it goes in the package. If only your application needs it, it goes in your code.
- **Write down why.** Every change in the fork and every guard in Kaede says what broke and why the fix is shaped the way it is.
- **Treat a shell-out as an attack surface.** Anything that builds a command string needs an argument file, an allow-list, or both.
- **Watch it in production.** A library you own is a library you're on call for.

The fork is public: [coderkoala/phpjasper](https://github.com/coderkoala/phpjasper).
`,Dd=`---
title: Most waybills are the usual one
date: 2026-10-03
project: kaede
seo: How I built a learning suggestion engine for a cargo ERP from its own data, with no ML model: recall, decay, verdicts and a Wilson score.
summary: 3,142 air waybills used just 149 routings, and five of them covered 87%. How that one number turned a data-entry form into a learning engine, without a model.
---

Entering an air waybill's routing used to mean six fields per flight leg: origin, destination, carrier, flight number, date, and again for the next leg. It was built like an authoring tool, as if every shipment invented a new journey.

Before redesigning it, I counted.

## The number that changed the design

Across 3,142 waybills there were 4,682 flight legs. Those legs described only **149 distinct routings**. The five most common covered **87% of all waybills**; the top twenty covered 94%. The single most common one, Kathmandu to Narita on one carrier's flight, appeared 1,728 times.

The same query found the mess that free entry creates: 9.4% of legs saved with no flight number, 8.6% with a zero-padded one ("0898" next to "898"), and five legs that landed before they took off.

So routing was never an authoring problem. It was a **recall** problem: the right answer was almost always one the office had already typed. That reframing is the whole design.

## From form to shortlist

The routing field now opens on an empty waybill with the office's most likely routings as chips.

![The routing field on a new waybill, offering the office's frequent routings as chips with how often each was used, a box to paste a routing, and a one-line leg entry.](/media/kaede/routing-suggest.webp) One click applies a whole multi-leg journey, with airport and airline names looked up fresh, so old free-text labels never come back. Pick an origin and destination and it hints the usual carriers, the usual flight and the median transit time for that lane.

![The same field after clicking one chip: a two-leg routing via Hong Kong with total distance, flying time, each leg's distance and usual duration, a small route map, and warnings that departure dates are still missing.](/media/kaede/routing-applied.webp)

One click fills every leg, and the field does the arithmetic people used to do in their heads: distance, flying time, where the connection is, and what's still missing before the waybill can go.

For people who'd rather type, a routing can be pasted as one line: \`KTM-DEL(RA)\`, \`KTM-DEL/RA433/2026-09-09\`, \`KTM DEL RA 433 09SEP\`. Codes resolve only on an exact IATA match. A guess here becomes a wrong flight on a legal document.

## Then it spread: a learning engine

Routings were the first field. The same idea, that an office's own history is the best predictor of its next entry, now runs across the waybill: a shipper's usual agent, issuer and bill-to, the HS codes for their goods, the consignee's notify party, the currency by destination. It also runs in quotes, rates and the carrier-portal automation.

There is **no machine-learning model**. Everything below is counting, done carefully.

### 1. Harvest, nightly

Each night, each organisation's saved records are read into its own private layer: values, the context they were used in, and how often. Nothing leaves the organisation's database.

### 2. Recent beats old

Every count decays with a 90-day half-life:

\`\`\`
weight = uses × 0.5^(age_in_days / 90)
\`\`\`

The routing a forwarder used 500 times two years ago, before an airline dropped the route, fades. The one it started using last month rises. Without decay, a learning system is a museum.

### 3. Suggest where people already type

Suggestions appear as grey text and chips in the fields people already use. There's no new screen and no "AI" button. The organisation's own values come first, always.

### 4. Judge at save, not per keystroke

When the form is saved, the browser reports, for each suggestion, whether it was **offered**, **taken**, **overridden** or **ignored**. One small payload with the normal save, never keystroke tracking.

### 5. Let the evidence decide, honestly

Each suggestion source earns or loses trust from those verdicts. The naive way is to look at the take rate: 2 of 5 is 40%, 200 of 500 is 40%. But those are not equally certain, and treating them the same promotes lucky guesses.

So the engine uses the **lower bound of the Wilson score interval** at 95% confidence:

\`\`\`php
function wilsonLower(float $taken, float $offered, float $z = 1.96): float
{
    if ($offered <= 0) return 0.0;
    $p = $taken / $offered;
    $d = 1 + $z * $z / $offered;
    $c = $p + $z * $z / (2 * $offered);
    $m = $z * sqrt(($p * (1 - $p) + $z * $z / (4 * $offered)) / $offered);
    return ($c - $m) / $d;
}
\`\`\`

At 2 of 5 the lower bound is about 0.12. At 200 of 500 it's about 0.36. A source whose lower bound clears 0.5 becomes **trusted** and is weighted up. One below 0.2 is **retired** and stops being offered. The counts decay too, so a source can earn its way back.

### 6. Share only what's safe to share

Some knowledge belongs to everyone: public codes, standard trade wording, common HS classifications. A weekly job harvests candidates across organisations into a staging area, and a value only qualifies if it appears in **at least three organisations and five waybills**. Anything shaped like a name, a phone number or an address is refused at harvest and checked again at load. Then a person reviews the result and commits it to the repository like code, so every deployment ships the same reviewed knowledge.

A company's customers, lanes and prices never leave it.

## What it taught me

1. **Count before you design.** The ratio of distinct values to rows tells you whether a field needs a better form or a shortlist.
2. **Recall beats prediction** when the past is this repetitive. Offering the office's own answers is faster and more trusted than generating new ones.
3. **Decay everything.** Business changes, and a learner that can't forget is wrong in slow motion.
4. **Measure acceptance with confidence, not ratios.** The Wilson lower bound is a few lines of code and stops small samples from looking certain.
5. **You often don't need a model.** Rules and counts over your own data, reviewed by people, go a very long way, and run with no data leaving the building.
`,Od=`---
title: mTLS and OAuth2 on the same call, step by step
date: 2026-10-05
project: kaede
seo: A practical walkthrough of integrating with an API that requires both mutual TLS and OAuth2 client credentials, and every way it fails.
summary: Some partner APIs want a client certificate on the connection and a bearer token on the request. Every way that goes wrong, in the order it went wrong for me.
---

Most APIs ask you to prove who you are once. Some cargo community systems ask twice: **mutual TLS** on the connection, so the server knows which machine is calling, and an **OAuth2 bearer token** on each request, so it knows which application. I built that integration for Kaede. None of the steps is hard on its own. The pain is that each one fails in a way that looks like a different problem.

Here they are in the order they bit me.

## 1. The certificate request

The partner wants a certificate signed by a CA they trust, issued for a key only you hold. So you generate the key yourself and send them a CSR (certificate signing request), never the key:

\`\`\`bash
openssl req -new -newkey rsa:4096 -nodes \\
  -keyout client.key -out client.csr \\
  -subj "/C=NP/O=Your Company/CN=your-system.example.com"
\`\`\`

**Trap:** the key never leaves your side. If a partner's onboarding form asks you to upload a private key, stop and ask why.

## 2. The certificate comes back, and it isn't the whole story

You get a PEM certificate. Sometimes it includes intermediate certificates, sometimes it doesn't. The server needs the chain to verify you, so the file you present should be the leaf followed by its intermediates.

**Trap:** a certificate and key that don't belong together fail the TLS handshake with an error that tells you nothing. So check the pair the moment it's entered, not on the first real call:

\`\`\`php
$cert = openssl_x509_read($certPem);
$key  = openssl_pkey_get_private($keyPem, $passphrase);
if (! openssl_x509_check_private_key($cert, $key)) {
    throw new InvalidCredential('This key does not belong to this certificate.');
}
\`\`\`

While you're there, read the expiry date and keep it. Certificates expire on a Saturday night, and you want a warning weeks ahead, not an outage.

## 3. Don't write the key to disk

The easy way to give curl a client certificate is a file path. That means a private key sitting in \`/tmp\`, in backups, maybe in a crash dump. Since curl 7.71 you can hand it the certificate and key as in-memory blobs instead:

\`\`\`php
curl_setopt_array($ch, [
    CURLOPT_SSLCERT_BLOB => $certPem,
    CURLOPT_SSLKEY_BLOB  => $keyPem,
    CURLOPT_SSLCERTTYPE  => 'PEM',
]);
\`\`\`

In Kaede the credentials live encrypted in the database, decrypted only for the request, and never touch the filesystem.

## 4. Trust only their CA

Partners, especially in test environments, often sit behind a private CA. The lazy fix is to turn verification off. Don't. Pin their CA bundle and turn the system store **off** for that request, so no public CA can vouch for an impostor:

\`\`\`php
curl_setopt($ch, CURLOPT_CAINFO_BLOB, $partnerCaBundle);   // only this
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
\`\`\`

**Trap:** the identity provider that issues tokens is often a *different* host with an ordinary public certificate. Pinning the partner's private CA there breaks the token call. The pin has to be configurable per endpoint.

## 5. The token request needs the certificate too

The OAuth2 client credentials grant (RFC 6749 §4.4) trades a client id and secret for an access token. What the docs rarely say: if the token endpoint sits behind the same mutual TLS gateway, **it also wants your certificate**. Without it, the handshake fails before your credentials are even read, and the error looks exactly like a bad certificate.

So the certificate is a transport layer under every call, token request included. Configured with one and not the other is an error, never a silent fallback to a plain connection.

## 6. Three ways to send a client secret

RFC 6749 says send the id and secret with HTTP Basic auth. Some servers want them in the form body instead. Some want a JSON body:

\`\`\`
Authorization: Basic base64(id:secret)        ← the RFC default
grant_type=client_credentials&client_id=…     ← form body
{"grant_type":"client_credentials", …}         ← JSON, despite the RFC
\`\`\`

All three exist in the wild. Make it a setting, default to the RFC, and expect to need the other two.

## 7. Cache the token, but not too long

Tokens last minutes to hours. Fetching one per message is slow and can trip rate limits, so cache it. Two rules:

- **Stop using it a minute early.** A token that expires while the request is in flight fails the request.
- **Key the cache to the credentials that minted it.** When someone rotates the secret, the old token must not outlive it.

And when the API answers 401 to a cached token, drop it and fetch a new one once. Not in a loop.

## 8. Know what "it worked" looks like

The nastiest one. When mutual TLS is required and your certificate isn't accepted, a common gateway setup answers **HTTP 400** with an HTML page saying no client certificate was sent. A connection test that only checks "did we get a response?" reports success.

So the connection test in Kaede reads the answer:

- any response means DNS, TCP and TLS worked;
- 401 or 403 means the certificate was fine and the token was refused;
- that specific 400 page means the certificate wasn't taken, and says so in words.

## 9. Make every failure say which layer failed

By the end, every error in the integration names its layer: certificate unreadable, key mismatch, certificate expired, handshake refused, token endpoint refused, token rejected by the API, or the API refused the message itself. Most of these look identical from curl. Separating them turns a two-day support thread into a one-line answer.

## The checklist

1. Generate the key yourself and send only the CSR.
2. Validate the certificate, the key and the pair on entry, and record the expiry.
3. Keep keys encrypted at rest and in memory on the wire.
4. Pin the partner's CA per endpoint, and turn the system store off where you pin.
5. Present the certificate on the token request too.
6. Support all three ways of sending the client secret.
7. Cache tokens with a safety margin, keyed to the credential.
8. Test connections by reading the response, not just receiving one.
9. Name the layer in every error.
`,kd=`---
title: One developer, one market, no ads
date: 2022-07-19
project: kalimati
summary: Building the website and Android app for Kalimati, the market that sets vegetable prices for half of Kathmandu, on my own.
---

Kalimati Fruits and Vegetables Market supplies 60 to 70 percent of the Kathmandu valley's produce. Its morning price board decides what a kilo of tomatoes costs in a huge number of shops that day. Traders, journalists, shoppers and economists all want those numbers.

I built the new website and its Android app on my own: design, backend, admin, content, deployment.

## What it does

- **Daily prices.** Each morning staff enter the minimum, maximum and average price for every commodity, and it's public within minutes.
- **Arrivals.** How much of each vegetable, fruit and fish came in that day.
- **History.** Price and arrival trends over time, and side-by-side comparisons between dates.
- **Traders.** Dues and notices, without a trip to the office.
- **A notice centre.** Tenders, public bills, right-to-information reports, and daily pesticide residue test results.
- **Nepali and English** throughout.
- **A newsletter** that sends only one thing: the day's prices.

## No ads, on purpose

The Android app is minimal and has no ads. Price information from a public market is something consumers have a right to, and an ad-stuffed app gets in the way of that. The app opens to the day's prices and doesn't ask for anything.

## The admin is the real product

The public site is what people see. The admin is what decides whether the numbers go up at 7 a.m. or at noon. It had to work for staff who are not technical and who have a queue of traders in front of them:

- Role-based permissions, so each person sees only the parts they handle
- Two-factor sign-in, because it's a government site
- User impersonation, so I could see exactly what a staff member saw when something went wrong
- Sortable, searchable tables over everything

## What I'd do differently

When it launched I wrote publicly that it delivered little in terms of looks and interaction, and I meant it. A solo build on a deadline gets the data right first. Since then, design has become half of what I care about. If I built it today, the price board would be the homepage, readable on a cheap phone in direct sunlight, and nothing else would compete with it.

I also wanted Nepal Bhasa alongside Nepali and English, and that still matters to me. Language is part of access.

See it: [kalimatimarket.gov.np](https://kalimatimarket.gov.np) · [the case study](/work/kalimati)
`,Ad=`---
title: Taking money on a government website
date: 2022-12-14
project: kalimati
summary: How Kalimati's traders came to pay their dues from their phones through eSewa and Khalti, and the checks that keep a public payment page honest.
---

Kalimati's traders rent stalls and owe dues every day. For years that meant a queue at the market office, cash in hand. In the second half of 2022 I added online payment to the market's website: a trader enters their shop number, sees today's invoice, and pays through **eSewa**, **Khalti** or a bank transfer.

Building a payment button is easy. Building one on a government site that will be poked at by people who'd like their dues to be cheaper is not.

## The rule: the browser is never the source of truth

A payment flow has an awkward shape. The trader leaves your site, pays on the gateway's site, and comes back carrying a receipt. Everything about that return trip is in the trader's hands: the URL, the query string, the amount, the reference number.

So the return trip only ever starts a check. It never finishes one.

## Four checks

**1. The amount must match the invoice, to the paisa.**

When the trader comes back, the amount the gateway reports is compared with the invoice the server already holds. Anything else, including a rounding difference, is refused rather than "mostly" accepted.

**2. A reference can be used once.**

Every gateway issues a reference for a payment. Before accepting one, the server checks it has never seen that reference before, against both the reference column and the stored gateway payload. A replayed receipt from last week, or from someone else's shop, gets nowhere.

**3. Unverified until the gateway says otherwise.**

A returning payment is saved with the status *unverified*, and a queued job asks the gateway directly, server to server, whether the payment really happened and for how much. Only that answer marks the dues as paid. If the gateway is slow or down, the job retries; the trader sees "being confirmed", not a false "paid".

**4. Invoices belong to a day.**

Dues are daily, and each day's invoice rolls over at midnight Nepal time. A payment started against yesterday's invoice and finished after midnight is refused instead of being applied to the wrong day's books. It's a rare case, but money in the wrong day is a reconciliation headache that lands on a clerk months later.

## When providers integrate directly

Some payment providers wanted to build the flow into their own apps. For them I designed a small API with two calls: fetch the invoice for a shop, and complete it.

- Each provider signs its requests with a short-lived JWT using its own key, and requests are accepted only from that provider's allow-listed servers.
- Keys rotate every quarter, and providers commit to switching within 24 hours.
- Completing an invoice cross-checks the shop, the amount and the provider's own reference. Each failure has a named error, so the provider knows whether to fix their request, retry later, or call someone.
- During maintenance the API says so explicitly and asks providers to queue and retry. A dropped payment is the worst outcome, so the API never fails silently.

## Back to the books

The market's accounts live in its own office software, not on the website. Every night the day's online payments are exported back to that system as CSV, byte for byte in the format it expects, down to the Windows line endings. The office closes the day with the online and counter payments in one place.

## What it changed

Traders can pay from a phone instead of a queue, and the office no longer has to count cash for every due. The people most likely to probe the payment page, traders who'd like their dues to be cheaper, have no way to make that happen.

[The Kalimati case study](/work/kalimati)
`,jd=`---
title: Teaching a UI library to speak Nepali
date: 2024-01-09
project: syncfusion
seo: How I translated Syncfusion's Essential JS 2, 64 components and 4,355 strings, into Nepali that reads like Nepali.
summary: I translated Syncfusion's Essential JS 2, 64 components and over four thousand strings, into Nepali. These are the choices that made it read like Nepali and not like a dictionary.
---

Syncfusion's Essential JS 2 is a big UI library: grids, schedulers, a spreadsheet, a word processor, a PDF viewer. It shipped in a few dozen languages. Nepali wasn't one of them.

I needed it for a product used by people who think in Nepali. So in January 2024 I translated it: 64 components and 4,355 strings, about three thousand lines, on my own. Syncfusion took it into the library, and \`ne-NP\` now ships with it.

## The hard part isn't vocabulary

Any dictionary will give you a word for *Insert*. The hard part is choosing the word a Nepali speaker would actually expect to see on a button. I set myself a few rules before writing a line.

**Use the words people already use.** Nepali has borrowed a lot of computing words from English, and many are now just Nepali. A file is *फाइल*, not a coined Sanskrit term nobody says. Where the borrowed word is the everyday one, I used it, spelt the established way.

**Use the formal register for technical terms.** Mathematical, scientific and technical words came from their established Sanskrit-derived forms. A spreadsheet function or a statistics term should read like a textbook, not like slang.

**Translate the meaning, not the words.** Some English UI strings make no sense word for word. Where a literal translation would confuse someone, I rewrote it to say what the control does. The grid's empty state, *"No records to display"*, became *प्रदर्शन गर्न कुनै रेकर्ड छैन*, which is how you'd actually say it.

## What I deliberately left alone

Knowing what not to translate mattered as much:

- **Key names** in tooltips and shortcuts: Space, Alt, A, B. People read them off the keyboard.
- **Formulas and their parameters.** A spreadsheet formula is code.
- **Units and their symbols**, and paper sizes. A4 is A4.
- **Abbreviations**, apart from a few that are well known.
- **Font names**, other than everyday ones like Times New Roman.
- **Compound CamelCase identifiers** like \`ThinThickSmallGap\`, where any translation would be guesswork.

## Why it was worth it

Localisation is usually treated as a chore you hand to a vendor at the end. It's really product work: every string is a tiny bit of interface design. Doing it by hand across a whole library taught me more about how these components behave than reading their docs ever did.

I also tightened the Nepali messages in vee-validate, the Vue form library ([#4642](https://github.com/logaretm/vee-validate/pull/4642)), so validation errors read formally and correctly.

Source: [syncfusion/ej2-locale#192](https://github.com/syncfusion/ej2-locale/pull/192).
`,Md=`---
title: The check that only lived in the browser
date: 2020-05-01
project: everest-forms
summary: How an email field in Everest Forms trusted the browser, how I closed it, and the regression I shipped and fixed along the way.
---

In early 2020 I was working on Everest Forms, a popular WordPress form builder. While tidying the email notifications I noticed something about the email field: the server never checked that it held an email address.

The form rendered \`<input type="email">\`, and the browser refused anything that didn't look like \`name@domain\`. So in normal use, everything looked fine. But the browser is the visitor's, not yours.

## The gap

Here is roughly what the server did with an email field on submit, before the fix:

\`\`\`php
// includes/fields/class-evf-field-email.php, before
public function validate( $field_id, $field_submit, $form_data ) {
    // Required check.
    if ( ! empty( $fields[ $field_id ]['required'] ) && empty( $field_submit ) ) {
        evf()->task->errors[ $form_id ][ $field_id ] = $required;
    }
    // ...and that was it. No format check.
}
\`\`\`

It asked one question, *is it empty?*, and never asked *is it an email address?* Anyone who skipped the browser could put anything there:

\`\`\`bash
curl -X POST https://example.com/contact/ \\
  -d 'everest_forms[id]=42' \\
  -d 'everest_forms[form_fields][email]=not an email<b>at all</b>' \\
  -d 'everest_forms[form_fields][name]=Test'
\`\`\`

The entry was accepted and saved, and the value went wherever the form sent it: the entries screen, the admin's notification email, and smart tags like \`{field_id="email"}\` that site owners often drop into the *Reply-To* of that notification.

On its own that is a validation hole rather than a break-in. WordPress escapes most output, and \`wp_mail\` has its own guards. But "most" and "has its own guards" are other people's promises. A field labelled *Email* that will store any string is a gap waiting for the next feature to step into it.

## The fix

The rule I hold myself to: **the browser checks for convenience, the server checks for truth.** WordPress already ships a decent validator, \`is_email()\`, so the fix was small. I added a server-side format check for both shapes of the field, the plain one and the one with a "confirm your email" box:

\`\`\`php
// PR #376, merged February 2020
$invalid_email = esc_html__( 'Please enter a valid email address.', 'everest-forms' );

// Standard configuration, confirmation disabled.
if ( isset( $field_submit ) && ! is_email( $field_submit ) ) {
    evf()->task->errors[ $form_id ][ $field_id ] = $invalid_email;
    update_option( 'evf_validation_error', 'yes' );
    return;
}

// With confirmation: check the primary address too.
if ( isset( $field_submit['primary'] ) && ! is_email( $field_submit['primary'] ) ) {
    evf()->task->errors[ $form_id ][ $field_id ]['primary'] = $invalid_email;
    update_option( 'evf_validation_error', 'yes' );
    return;
}
\`\`\`

It shipped, and crafted submissions came back with a proper error.

## The regression I caused

Two months later the bug reports started. Forms with an **optional** email field were refusing to submit, with "Please enter a valid email address" under a box nobody had typed into.

The culprit was one word: \`isset\`. An empty optional field still arrives in \`$_POST\` as an empty string, and \`isset('')\` is true. So my check ran on blank values too, and \`is_email('')\` is false. I had made every email field effectively required.

I wrote the fix with an apology in the pull request, because a form that won't submit costs the site owner real leads. The fix (#430) did three things.

**1. Check format only when there is something to check.**

\`\`\`php
if ( ! empty( $field_submit['primary'] ) && ! is_email( $field_submit['primary'] ) ) {
\`\`\`

**2. Give the field one shape.** The plain field posted a string and the confirmation field posted an array, and each branch had its own copy of the rules. I normalised the input first, so the format and match checks exist once:

\`\`\`php
// If confirmation is disabled, treat it as the primary email.
if ( ! is_array( $field_submit ) && ! empty( $field_submit ) ) {
    $field_submit = array( 'primary' => $field_submit );
}

if ( ! empty( $field_submit['primary'] ) && ! is_email( $field_submit['primary'] ) ) {
    // invalid address, reported on the right input
} elseif ( isset( $field_submit['primary'], $field_submit['secondary'] )
    && $field_submit['secondary'] !== $field_submit['primary'] ) {
    // confirmation doesn't match
}
\`\`\`

**3. Stop echoing raw arrays back into the form.** When a submission failed, the form re-filled itself from \`$_POST\`. A crafted request could send a field as an array where a string was expected and trip PHP's array-to-string handling. The re-fill now accepts only non-empty scalars:

\`\`\`php
$defaults = isset( $_POST['everest_forms']['form_fields'][ $field_id ] )
    && ! is_array( $_POST['everest_forms']['form_fields'][ $field_id ] )
    && ! empty( $_POST['everest_forms']['form_fields'][ $field_id ] )
        ? $_POST['everest_forms']['form_fields'][ $field_id ]
        : '';
\`\`\`

## What I took from it

- **Validate on the server, always.** HTML5 attributes are a courtesy to honest users. Anything a browser enforces, \`curl\` ignores.
- **\`isset\` is not \`! empty\`.** For form input the question is almost never "was this key sent?" but "did the person give me a value?"
- **Normalise first, then validate once.** Two input shapes with two copies of the rules is how one copy ends up wrong.
- **Optional fields are a test case.** I tested the field that was filled in and not the one left blank. Now the first test I write for a validator is the blank, optional case.

The same habit, poking at what the server accepts rather than what the form allows, is how I found a more serious file-upload validation bypass in the Pro add-on that same year. That one was reported privately and fixed in Everest Forms Pro 1.7.

Pull requests: [#376](https://github.com/themegrill/everest-forms/pull/376), [#430](https://github.com/themegrill/everest-forms/pull/430).
`,Nd=`---
title: What building IATA ONE Record taught me about linked data
seoTitle: What IATA ONE Record taught me
date: 2026-10-30
project: kaede
seo: Lessons from implementing IATA ONE Record JSON-LD in a cargo ERP: stable URIs, one data source, idempotent events and honest errors.
summary: Air cargo is moving from messages to linked data. Lessons from serving ONE Record from a real cargo system, beyond what the spec tells you.
---

For forty years air cargo has run on messages. A forwarder sends the airline an FWB (the waybill), the airline sends back FSUs (status updates), each one a block of fixed-format text or, more recently, XML. Since January 2026 IATA prefers something different: **ONE Record**. Instead of sending each other copies, every party publishes its data as linked objects on its own server. Partners read them, subscribe to changes, and add events.

The spec is JSON-LD over a small REST API. A waybill becomes a \`cargo:Waybill\` at a permanent URI, linked to a \`cargo:Shipment\`, its \`cargo:Piece\`s, the \`cargo:Company\`s involved, and a stream of \`cargo:LogisticsEvent\`s. Serving that from Kaede taught me more than the spec does.

## 1. An identifier is a promise you can't take back

A ONE Record object's URI must never change. The tempting choice is the AWB number: it's what everyone calls the shipment. But an AWB number can change before the waybill is executed (a typo, a carrier switch, a reissue), and a URI that moves breaks every partner that stored it.

So Kaede's ids are the database's, prefixed by kind:

\`\`\`
/logistics-objects/waybill-48213
/logistics-objects/shipment-48213
/logistics-objects/piece-90551
/logistics-objects/movement-48213-2   ← the second flight leg
\`\`\`

The business number is a property on the object, not its name. The lesson generalises: never put a mutable business key in a URL you publish.

## 2. One source of truth, many renderings

Kaede already sends Cargo-IMP and Cargo-XML. The worst outcome would be ONE Record saying one weight while the FWB says another. So all three read the same mapped shipment data, and ONE Record is just another renderer of it.

Parties come from the waybill's frozen snapshot, not the live contact record. An executed waybill is a legal document; if a customer later changes their address, the waybill should still say what it said when it flew.

## 3. JSON-LD has three shapes, and partners use all of them

JSON-LD can arrive compacted, expanded or flattened, with prefixes or full IRIs, values as plain strings or as \`{"@value": …}\` objects. A partner posting an event can use any of them. Pulling in a full JSON-LD processor for a handful of fields felt heavy, so Kaede reads the shapes it needs directly and refuses what it can't read with a clear error. It doesn't guess.

Going out, we always serve one predictable compacted form with a fixed \`@context\`. Be strict in what you emit and tolerant, but explicit, in what you accept.

## 4. Events need idempotency, and the spec doesn't give you a key

Partners post events ("arrived", "departed", "delivered") to a shipment. Networks retry. Without care, a retried "departed" becomes two departures.

ONE Record has no idempotency header, so repeats are recognised by **content**: the same status code for the same pieces at the same moment is the event already recorded. An undated event, meaning "now", repeats a recent one only if the code, pieces and station all match. The check and the write happen under a per-shipment lock, so two copies of one event arriving together can't both pass the check.

## 5. Several codes, one milestone, and the code still has to round-trip

IATA status codes don't map one-to-one onto a system's milestones. "Received from shipper" and "freight on hand" can both move a shipment to the same internal state. But a partner who posted one code expects to read that code back, not its sibling. So the code that arrived is stored with the status row, and reported back unchanged in ONE Record and in the classic messages alike.

## 6. Every inbound event goes through the same door

It's tempting to let an integration write status directly: it's "trusted". Instead, every ONE Record event goes through the same status service a person's click does. Backward moves are refused, routing rules hold, a master's house waybills follow, and webhooks fire. An integration that bypasses your rules is a second, worse version of your product.

## 7. Errors are part of the contract

The spec defines an \`api:Error\` shape. Every failure on the ONE Record routes is rewritten into it, including the ones raised by generic middleware: bad key, rate limit, maintenance. Each has a stable, named code (\`one_record_event_for_mismatch\`, \`one_record_piece_retired\`, …) so a partner's developer can tell "fix your request" from "retry later" without reading our logs.

Two small rules made a big difference:

- **A miss is 404, never 403.** Telling a stranger "that exists but isn't yours" leaks the existence of other companies' shipments.
- **Times must carry an offset.** An event dated \`2026-10-30T14:00\` with no zone is refused, not read as local time. In a business that crosses twelve time zones in a day, a guessed offset is a wrong record.

## 8. Unknown is left out, never guessed

If Kaede doesn't know a value (an unmapped code, a free-text station, a missing weight), the property is absent. Linked data makes it easy to fill gaps with defaults that look authoritative. A missing value is honest. A plausible wrong one gets copied into three other companies' systems.

## Where it goes next

Revisions and historical reads (\`?at=\`), subscriptions both ways, dangerous goods and security declarations, ULD build-up and the first step of change requests are served now. Every time, the hard part was never JSON-LD itself. It was deciding what the record is, who may change it, and what happens when two people say different things about it at the same time.
`,Pd=`---
title: Kaede
year: 2022–now
kind: Cargo ERP
tag: Systems
image: /media/work/kaede.jpg
link: /work/kaede
featured: true
summary: Reads the paperwork, learns your office, talks to airlines in ONE Record.
---
`,Fd=`---
title: Kalimati Market
year: 2021–25
kind: Government platform
tag: Websites
image: /media/work/kalimati.jpg
link: /work/kalimati
featured: true
summary: Prices for the public, dues paid by phone through eSewa and Khalti. Built solo.
---
`,Id=`---
title: GenericProperties
year: 2021
kind: Real estate CRM
tag: Systems
image: /media/work/generic-properties.jpg
loop: /media/work/generic-properties-tile
link: /work/generic-properties
featured: true
summary: Finds the agents nearest a lead among millions, in seconds.
---
`,Ld=`---
title: Dynamics CRM plugins
year: 2020
kind: C# plugins
tag: Open source
image: /media/work/dynamics-plugins.jpg
link: https://github.com/coderkoala/DynamicsCRMLeads
featured: false
summary: Leads, Opportunity and Obituaries modules for a US brokerage.
---
`,Rd=`---
title: Syncfusion in Nepali
year: 2024
kind: Localisation
tag: Open source
image: /media/work/syncfusion-nepali.jpg
link: https://github.com/syncfusion/ej2-locale/pull/192
featured: false
summary: Translated a whole UI library into Nepali, alone. It ships upstream now.
---
`,zd=`---
title: Affiliatefeed
year: 2021
kind: Shopify app
tag: Systems
image: /media/work/affiliatefeed.jpg
link: https://affiliatefeed.exportfeed.com/
featured: false
summary: Took a web app apart and shipped it as a standalone Shopify PWA.
---
`,Bd=`---
title: WPEverest developer docs
year: 2020
kind: Documentation
tag: Open source
image: /media/work/wpeverest-dev-docs.jpg
link: https://themegrill.github.io/dev-docs/
featured: false
summary: The docs every Everest Forms add-on developer starts from. I wrote them.
---
`,Vd=`---
title: Everest Forms
year: 2020
kind: WordPress plugins
tag: Open source
image: /media/work/everest-forms.png
link: https://github.com/themegrill/everest-forms/pulls?q=is%3Apr+author%3Acoderkoala+is%3Amerged
featured: false
summary: 28 merged PRs, WPML support, PHPUnit, and a PDF add-on twice as fast.
---
`,Hd=`---
title: Rapti CRM
year: 2020
kind: ERPNext customisation
tag: Systems
image:
logo: /media/work/rapti-logo.png
link: https://www.raptigas.com/
featured: false
summary: ERPNext bent to fit a gas distributor's sales.
---
`,Ud=`---
title: Taskmon
year: 2019
kind: Task manager
tag: Systems
image: /media/portfolio-images/portfolio1.png
link: 
featured: false
summary: Create, hand off, chase and close tasks across a team.
---
`,Wd=`---
title: GDG Dang
year: 2019
kind: Community portal and talk
tag: Open source
image: /media/work/gdg-vision.png
link: https://github.com/gdgdang
featured: false
summary: Volunteer organizer. Shipped the DevFest 2019 site and spoke on Google Vision AI.
---
`,Gd=`---
title: Presidential Business School EMS
year: 2019
kind: Exam system
tag: Systems
image: /media/portfolio-images/portfolio3.png
link: 
featured: false
summary: Random entrance papers, and a scraper that filled the question bank.
---
`,Kd=`---
title: PHPJasper, maintained
year: 2025–now
kind: PHP library
tag: Open source
image:
link: /writing/maintaining-phpjasper
featured: false
summary: Forked and kept alive for production: headless Java, Japanese fonts, safer shell-outs.
---
`,qd=`---
title: Nimbus Nepal
year: 2019
kind: CMS and backend
tag: Websites
image: /media/portfolio-images/portfolio6.png
link: https://nimbusnepal.com
featured: false
summary: A Laravel CMS with an applicant tracker and Analytics built in.
---
`,Jd=`---
title: Loksewa Aayog Quiz
year: 2019
kind: Facebook Instant game
tag: Games
image: /media/portfolio-images/portfolio5.png
link: http://fb.gg/play/464364207493058
featured: false
summary: Ten civil-service questions, then brag to your friends.
---
`,Yd=`---
title: Debendra Manandhar
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio4.png
link: https://web.archive.org/web/20200806075149/https://debendramanandhar.com/
featured: false
summary: A coach's site with programmes, an academy and PayPal.
---
`,Xd=`---
title: Four Seasons Engineering
year: 2019
kind: Website
tag: Websites
image: /media/portfolio-images/portfolio8.png
link: 
featured: false
summary: A builder's website, start to finish in three days.
---
`,Zd=`---
title: Travel Time Nepal
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio7.png
link: https://web.archive.org/web/20200122104033/http://traveltimenepal.com:80/
featured: false
summary: A Thamel travel agency with payments, deals and auto-replies. I wrote the copy too.
---
`,Qd=`---
title: Indiabix scraper
year: 2019
kind: Python
tag: Open source
image: /media/work/indiabix-scraper.jpg
link: https://github.com/coderkoala/indiabix-scraper
featured: false
summary: Thousands of aptitude questions, pulled while I slept.
---
`,$d=`---
title: In Cod We Trust
year: 2018
kind: Level design
tag: Games
image:
cover: pixel
link: https://megacatstudios.com/
featured: false
summary: Hand-built maps for a new NES game from Mega Cat Studios.
---
`,ef=`---
title: Adventures of Joy
year: 2017
kind: C++ game
tag: Games
image: /media/portfolio-images/portfolio2.png
link: https://github.com/coderkoala/RoguelikeRPG
featured: false
summary: A top-down RPG on my own engine, written in C++ and SFML.
---
`;function tf(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var nf=tf();function rf(e){nf=e}var af={exec:()=>null};function of(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function X(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Z.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var sf=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Z={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:of(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:of(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:of(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:of(e=>RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:of(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:of(e=>RegExp(`^ {0,${e}}(?:</?(?:${Sf})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:of(e=>RegExp(`^ {0,${e}}>`))},cf=/^(?:[ \t]*(?:\n|$))+/,lf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,uf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,df=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ff=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pf=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,mf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,hf=X(mf).replace(/bull/g,pf).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),gf=X(mf).replace(/bull/g,pf).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),_f=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,vf=/^[^\n]+/,yf=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,bf=X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,yf).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),xf=X(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,pf).getRegex(),Sf=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Cf=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,wf=X(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Cf).replace(`tag`,Sf).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Tf=e=>X(_f).replace(`hr`,df).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Sf).getRegex(),Ef=Tf(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Df=Tf(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Of={blockquote:X(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Df).getRegex(),code:lf,def:bf,fences:uf,heading:ff,hr:df,html:wf,lheading:hf,list:xf,newline:cf,paragraph:Ef,table:af,text:vf},kf=X(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,df).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Sf).getRegex(),Af={...Of,lheading:gf,table:kf,paragraph:X(_f).replace(`hr`,df).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,kf).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Sf).getRegex()},jf={...Of,html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Cf).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:af,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X(_f).replace(`hr`,df).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,hf).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Mf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Nf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Pf=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,Ff=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,If=/[\p{P}\p{S}]/u,Lf=/[\s\p{P}\p{S}]/u,Rf=/[^\s\p{P}\p{S}]/u,zf=X(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Lf).getRegex(),Bf=/[\p{Pi}\p{Ps}"']/u,Vf=/(?!~)[\p{P}\p{S}]/u,Hf=/(?!~)[\s\p{P}\p{S}]/u,Uf=/(?:[^\s\p{P}\p{S}]|~)/u,Wf=X(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,sf?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Gf=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Kf=X(Gf,`u`).replace(/punct/g,If).getRegex(),qf=X(Gf,`u`).replace(/punct/g,Vf).getRegex(),Jf=X(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Bf).replace(/punct/g,If).getRegex(),Yf=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Xf=X(Yf,`gu`).replace(/notPunctSpace/g,Rf).replace(/punctSpace/g,Lf).replace(/punct/g,If).getRegex(),Zf=X(Yf,`gu`).replace(/notPunctSpace/g,Uf).replace(/punctSpace/g,Hf).replace(/punct/g,Vf).getRegex(),Qf=X(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Rf).replace(/punctSpace/g,Lf).replace(/punct/g,If).getRegex(),$f=X(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Rf).replace(/punctSpace/g,Lf).replace(/punct/g,If).getRegex(),ep=X(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Rf).replace(/punctSpace/g,Lf).replace(/punct/g,If).getRegex(),tp=X(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,If).getRegex(),np=X(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Rf).replace(/punctSpace/g,Lf).replace(/punct/g,If).getRegex(),rp=X(/\\(punct)/,`gu`).replace(/punct/g,If).getRegex(),ip=X(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,If).getRegex(),ap=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),op=X(Cf).replace(`(?:-->|$)`,`-->`).getRegex(),sp=X(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,op).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),cp=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,lp=X(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,cp).getRegex(),up=X(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,lp).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dp=X(/^!?\[(label)\]\[(ref)\]/).replace(`label`,lp).replace(`ref`,yf).getRegex(),fp=X(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,yf).getRegex(),pp=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,mp=X(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,cp).getRegex(),hp=X(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,X(/^!?\[(label)\]\[(ref)\]/).replace(`label`,mp).replace(`ref`,pp).getRegex()).replace(`nolink`,X(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,pp).getRegex()).getRegex(),gp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,_p=X(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),vp={_backpedal:af,anyPunctuation:rp,anyPunctuationOutsideCode:ip,autolink:ap,blockSkip:Wf,br:Pf,code:Nf,del:af,delLDelim:af,delRDelim:af,emStrongLDelim:Kf,emStrongRDelimAst:Xf,emStrongRDelimUnd:$f,escape:Mf,link:up,nolink:fp,punctuation:zf,reflink:dp,reflinkSearch:hp,tag:sp,text:Ff,url:af},yp={...vp,emStrongLDelim:Jf,emStrongRDelimAst:Qf,emStrongRDelimUnd:ep,link:X(/^!?\[(label)\]\((.*?)\)/).replace(`label`,lp).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,lp).getRegex()},bp={...vp,emStrongRDelimAst:Zf,emStrongLDelim:qf,delLDelim:tp,delRDelim:np,url:X(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,_p).replace(`protocol`,gp).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:X(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,gp).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},xp={...bp,br:X(Pf).replace(`{2,}`,`*`).getRegex(),text:X(bp.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Sp={normal:Of,gfm:Af,pedantic:jf},Cp={normal:vp,gfm:bp,breaks:xp,pedantic:yp},wp={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Tp=e=>wp[e];function Ep(e,t){if(t){if(Z.escapeTest.test(e))return e.replace(Z.escapeReplace,Tp)}else if(Z.escapeTestNoEncode.test(e))return e.replace(Z.escapeReplaceNoEncode,Tp);return e}function Dp(e){return Z.numericCharacterReference.test(e)?e.replace(Z.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function Op(e){try{e=encodeURI(e).replace(Z.percentDecode,`%`)}catch{return null}return e}function kp(e,t){let n=e.replace(Z.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Z.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(Z.slashPipe,`|`);return n}function Ap(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function jp(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Z.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Mp(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function Np(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Pp(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Fp(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function Ip(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function Lp(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var Rp=class{options;rules;lexer;constructor(e){this.options=e||nf}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:jp(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ip(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Ap(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Ap(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Ap(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Ap(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteMarkerWhitespace,(e,t,n)=>t+Pp(n,t.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`||u?.type===`heading`||u?.type===`hr`||u?.type===`html`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o;let s=o.raw.length>t.raw.length?a.slice(t.raw.length+1,o.raw.length).split(`
`).length:0;if(s>0){let t=e.slice(0,s).join(`
`);n=`${n}
${t}`,r=`${r}
${t}`}e=e.slice(s)}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,r=()=>n.length-e.length,i=t[1].trim(),a=i.length>1,o={type:`list`,raw:``,ordered:a,start:a?+i.slice(0,-1):``,loose:!1,items:[]};i=a?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=a?i:`[*+-]`);let s=this.rules.other.listItemRegex(i),c=!1;for(;e;){let i=!1,a=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let l=r();e=e.substring(t[0].length);let u=t[2].split(`
`,1)[0],d=t[1].length,f=this.options.pedantic?Pp(u,d):u.replace(this.rules.other.leadingSpaceTab,e=>Pp(e,d)),p=e.split(`
`,1)[0],m=!f.trim(),h=0;if(this.options.pedantic?(h=2,a=f.trimStart()):m?h=d+1:(h=f.search(this.rules.other.nonSpaceChar),h=h>4?1:h,a=f.slice(h),h+=d),m&&this.rules.other.blankLine.test(p)&&(e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),n=this.rules.other.hrRegex(h),r=this.rules.other.fencesBeginRegex(h),i=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(h):this.rules.other.headingBeginRegex(h),o=this.rules.other.htmlBeginRegex(h),s=this.rules.other.blockquoteBeginRegex(h);for(;e;){let c=e.split(`
`,1)[0],l;if(p=c,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,`  `),l=p):l=p.replace(this.rules.other.leadingSpaceTab,e=>Pp(e)),r.test(p)||i.test(p)||o.test(p)||s.test(p)||t.test(p)||n.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=h||!p.trim())a+=`
`+l.slice(h);else{if(m||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||r.test(f)||i.test(f)||n.test(f))break;let e=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(p)&&this.rules.block.lheading.test(`${f}
${p}`)?`    ${l.replace(/^ {0,3}/,``)}`:p;a+=`
`+e}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=jp(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&Np(t[2],`()`)!==-1)return;let e=Mp(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Ap(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=kp(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Ap(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(kp(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Ap(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&Lp(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=Ap(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=Np(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),Fp(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&Lp(e,n[1],r,this.rules))return;let i=t[Mp((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Fp(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let i=r[0][0],a=n===i,o=t.length-e.length,s=o;for(;!this.options.pedantic&&s>0&&t[s-1]===i;)s--;let c=[...t.slice(Math.max(0,s-2),s)].at(-1)??``,l=c===`*`||c===`_`||!!this.rules.inline.punctuation.exec(c);s<o&&(n=c);let u=s<o?l:!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let d=r[1]||r[3]||``;if(!d||!n||u){let n=[...r[0]].length-1,u,f,p=n,m=0,h=o-s+n,g=!this.options.pedantic&&!!c.trim()&&(!!d||i===`*`&&!l),_=i===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,t=t.slice(-1*e.length+n);(r=_.exec(t))!==null;){if(u=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!u)continue;if(f=[...u].length,r[3]||r[4]){p+=f;continue}if(r[5]||r[6]||g){if(a&&(r[5]||r[6]))break;if(h%3&&!((h+f)%3)){m+=f;continue}}if(p-=f,p>0)continue;f=Math.min(f,f+p+m);let t=[...r[0]][0].length,i=e.slice(0,n+r.index+t+f);if(Math.min(n,f)%2){let e=i.slice(1,-1);return{type:`em`,raw:i,text:e,tokens:this.lexer.inlineTokens(e)}}let o=i.slice(2,-2);return{type:`strong`,raw:i,text:o,tokens:this.lexer.inlineTokens(o)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:Dp(t[0]),escaped:e}}}},zp=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nf,this.options.tokenizer=this.options.tokenizer||new Rp,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:Z,block:Sp.normal,inline:Cp.normal};this.options.pedantic?(t.block=Sp.pedantic,t.inline=Cp.pedantic):this.options.gfm&&(t.block=Sp.gfm,t.inline=this.options.breaks?Cp.breaks:Cp.gfm),this.tokenizer.rules=t}static get rules(){return{block:Sp,inline:Cp}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Z.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.state.inRawBlock=!1,this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Z.tabCharGlobal,`    `).replace(Z.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if((i=this.tokenizer.fences(e))||(i=this.tokenizer.heading(e))||(i=this.tokenizer.hr(e))||(i=this.tokenizer.blockquote(e))||(i=this.tokenizer.list(e))||(i=this.tokenizer.html(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):(this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}),t.push(i));continue}if((i=this.tokenizer.table(e))||(i=this.tokenizer.lheading(e))){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length)}else if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,Mp(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(`)`);try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e.includes(`*`)||e.includes(`_`)||e.includes(`~`)||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==Rp.prototype.emStrong||this.tokenizer.del!==Rp.prototype.del?this.#t(e):e,r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,n,i))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e,n,i))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}#t(e){let t=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,n=t=>{let r=t.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,Mp(t.slice(r+1,-1))))return t;if(r>1&&t.charAt(0)!==`!`){let i=t.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,n)+`][`+`a`.repeat(t.length-r-2)+`]`}return`[`+`a`.repeat(t.length-2)+`]`};t=t.replace(e,n)}return t=t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(e,t,n)=>n?`+`.repeat(e.length):t?t+e.slice(t.length,-t.length).replace(/`/g,`+`)+t:e),t=t.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t,t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Bp=class{options;parser;constructor(e){this.options=e||nf}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Z.notSpaceStart)?.[0],i=e?e.replace(Z.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+Ep(r)+`">`+(n?i:Ep(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Ep(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ep(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?Ep(n,!0):this.parser.parseInline(r),o=Op(e);if(o===null)return a;e=Ep(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+Ep(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Op(e);if(i===null)return Ep(n);e=i;let a=`<img src="${Ep(e)}" alt="${Ep(n)}"`;return t&&(a+=` title="${Ep(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Ep(e.text)}},Vp=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return``}checkbox({raw:e}){return e}},Hp=class e{options;renderer;textRenderer;constructor(e){this.options=e||nf,this.options.renderer=this.options.renderer||new Bp,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Vp,this.textRenderer.parser=this}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Up=class{options;block;constructor(e){this.options=e||nf}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?zp.lex:zp.lexInline}provideParser(e=this.block){return e?Hp.parse:Hp.parseInline}};function Wp(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var Gp=new class{defaults=tf();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Hp;Renderer=Bp;TextRenderer=Vp;Lexer=zp;Tokenizer=Rp;Hooks=Up;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(Wp(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)Wp(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)Wp(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;Wp(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);Wp(n,this.walkTokens(i,t))}):e.tokens&&Wp(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Bp(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Rp(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Up;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Up.passThroughHooks.has(n)?e=>{if(t.options.async&&Up.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(t.options.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&Wp(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return zp.lex(e,t??this.defaults)}parser(e,t){return Hp.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?zp.lex:zp.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Hp.parse:Hp.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?zp.lex:zp.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Hp.parse:Hp.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Ep(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return Gp.parse(e,t)}Q.options=Q.setOptions=function(e){return Gp.setOptions(e),Q.defaults=Gp.defaults,rf(Q.defaults),Q},Q.getDefaults=tf,Q.defaults=nf;function Kp(...e){return Gp.use(...e),Q.defaults=Gp.defaults,rf(Q.defaults),Q}Q.use=Kp,Q.walkTokens=function(e,t){return Gp.walkTokens(e,t)},Q.parseInline=Gp.parseInline,Q.Parser=Hp,Q.parser=Hp.parse,Q.Renderer=Bp,Q.TextRenderer=Vp,Q.Lexer=zp,Q.lexer=zp.lex,Q.Tokenizer=Rp,Q.Hooks=Up,Q.parse=Q,Q.options,Q.setOptions,Q.walkTokens,Q.parseInline,Hp.parse,zp.lex;var qp={"/media/about/ridge.jpg":{key:`358182:1793528001970`,w:1920,h:1440,lqip:`data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQBACdASoYABIAPtFUoE2oJKMiN+gBABoJZwDNwDJBrHbM/wQ6hq7EFpgAAP7v6v84crHSk6j+KE6XPOYWBFCGQOY2vNSy4S+Ci1rHzk+TmDSnQNxTkfLovA/GSMekIy9/VJlxgAA=`,variants:[{w:480,src:`/media/_r/about/ridge-480.webp`},{w:960,src:`/media/_r/about/ridge-960.webp`},{w:1600,src:`/media/_r/about/ridge-1600.webp`},{w:1920,src:`/media/_r/about/ridge-1920.webp`}]},"/media/backdrop/ridge-poster.jpg":{key:`68720:1793539629281`,w:1600,h:1258,lqip:`data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAABwBACdASoYABMAPtVWok2oJKMiN+gBABqJaQAAiKn7jz542IN7p1xzpjk7AAD+xKm7lJSnX5Fox5u0HtWtK0HpPq9IBk9ab1cIENAg73u77TY2skDQAA==`,variants:[{w:480,src:`/media/_r/backdrop/ridge-poster-480.webp`},{w:960,src:`/media/_r/backdrop/ridge-poster-960.webp`},{w:1600,src:`/media/_r/backdrop/ridge-poster-1600.webp`}]},"/media/backdrop/ridge.jpg":{key:`69091:1793531604297`,w:1500,h:1180,lqip:`data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQBACdASoYABMAPtlgpE2oJiOiN/qoAQAbCWkAAFt/t434nlSYU9XpAAD+xJX3WBiGkPFow2g9rGavVG3Q2jSOepQvgp2JJ3y0zBiAAAA=`,variants:[{w:480,src:`/media/_r/backdrop/ridge-480.webp`},{w:960,src:`/media/_r/backdrop/ridge-960.webp`},{w:1500,src:`/media/_r/backdrop/ridge-1500.webp`}]},"/media/hello-section/image.jpg":{key:`105939:1793528001970`,w:960,h:720,lqip:`data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwBACdASoYABIAPtFUoU2oJKMiN+gBABoJZwDHMDJC+VxkyBkWDpMPGKP9hAD+7+usMUy7Vx+eQMjTehirLbqM/q4mqk7guoDpy3nowUAWeJ/rTTUY6owGTnzfUEd9vIwYAA==`,variants:[{w:480,src:`/media/_r/hello-section/image-480.webp`},{w:960,src:`/media/_r/hello-section/image-960.webp`}]},"/media/kaede/kaede-cargomsg-panel.webp":{key:`132942:1793528001970`,w:1440,h:1800,lqip:`data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwBACdASoYAB4APuFapE2opSOiN/qoARAcCWcAAFvj2Z6VudZ7weutu8ZQAAD+7iOlJjmOUlrVOfhgunm0EEARG3+Q05sT0GkJOCY+gSsRKDxBOzpifsU2RPGlEDZuD/4wAA==`,variants:[{w:480,src:`/media/_r/kaede/kaede-cargomsg-panel-480.webp`},{w:960,src:`/media/_r/kaede/kaede-cargomsg-panel-960.webp`},{w:1440,src:`/media/_r/kaede/kaede-cargomsg-panel-1440.webp`}]},"/media/kaede/kaede-designer.webp":{key:`295336:1793528001973`,w:3200,h:2e3,lqip:`data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAwCdASoYAA8APu1kqU2ppaQiMAgBMB2JaQAAW+kbNzfo8TkRYdAA/sYGwhWIS7rEOYCY5HJL6rxvaVBt+xoLeX+AAA==`,variants:[{w:480,src:`/media/_r/kaede/kaede-designer-480.webp`},{w:960,src:`/media/_r/kaede/kaede-designer-960.webp`},{w:1600,src:`/media/_r/kaede/kaede-designer-1600.webp`},{w:3200,src:`/media/_r/kaede/kaede-designer-3200.webp`}]},"/media/kaede/kaede-letterhead-designs.webp":{key:`130156:1793528001973`,w:2880,h:2e3,lqip:`data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABQBACdASoYABEAPulep02pKaOiN/VYATAdCWkAAC3vXmr7jK/+aCkoywpgAPfeGGia3x8BErnCXY9JjGf1EiI6fN1mh2wLCSHNrrH0RkOAAAAA`,variants:[{w:480,src:`/media/_r/kaede/kaede-letterhead-designs-480.webp`},{w:960,src:`/media/_r/kaede/kaede-letterhead-designs-960.webp`},{w:1600,src:`/media/_r/kaede/kaede-letterhead-designs-1600.webp`},{w:2880,src:`/media/_r/kaede/kaede-letterhead-designs-2880.webp`}]},"/media/kaede/kaede-map.webp":{key:`107636:1793528001973`,w:2604,h:1794,lqip:`data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACQAwCdASoYABEAPu1cqE6ppKOiMBgMATAdiWkAADpweF8FrXwAAP7wlaeYiGUSPneZPi39aCFqOklqGq9UuggAgAA=`,variants:[{w:480,src:`/media/_r/kaede/kaede-map-480.webp`},{w:960,src:`/media/_r/kaede/kaede-map-960.webp`},{w:1600,src:`/media/_r/kaede/kaede-map-1600.webp`},{w:2604,src:`/media/_r/kaede/kaede-map-2604.webp`}]},"/media/kaede/kaede-outlook.webp":{key:`231922:1793528001973`,w:2976,h:2096,lqip:`data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAAAwAwCdASoYABEAPu1qsFCppaSiqAqpMB2JaQAAOoivj2rAAP7wpyJKFyalUH78U6QgAA==`,variants:[{w:480,src:`/media/_r/kaede/kaede-outlook-480.webp`},{w:960,src:`/media/_r/kaede/kaede-outlook-960.webp`},{w:1600,src:`/media/_r/kaede/kaede-outlook-1600.webp`},{w:2976,src:`/media/_r/kaede/kaede-outlook-2976.webp`}]},"/media/kaede/kaede-pdf-awb.webp":{key:`393816:1793528001973`,w:2550,h:3600,lqip:`data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAQBACdASoYACIAPu1kqE4ppaOiNVQIATAdiWkAAChfxbUyiz5JqVoIAAD+77RbYObm+KSvGdOw+saipkaPeClkUGRgmHmnxfNu9SyBSQeaHMuilcuAj1VCZzkN24fPsF/uofbUusnruNNs91oYvcHP+pYAAA==`,variants:[{w:480,src:`/media/_r/kaede/kaede-pdf-awb-480.webp`},{w:960,src:`/media/_r/kaede/kaede-pdf-awb-960.webp`},{w:1600,src:`/media/_r/kaede/kaede-pdf-awb-1600.webp`},{w:2550,src:`/media/_r/kaede/kaede-pdf-awb-2550.webp`}]},"/media/kaede/kaede-pivot-drill.webp":{key:`78574:1793528001973`,w:2880,h:1040,lqip:`data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAgCdASoYAAkAPu1iqU2tJaOmMAgBoB2JaQAAeyAA/vC9h0lm+AAA`,variants:[{w:480,src:`/media/_r/kaede/kaede-pivot-drill-480.webp`},{w:960,src:`/media/_r/kaede/kaede-pivot-drill-960.webp`},{w:1600,src:`/media/_r/kaede/kaede-pivot-drill-1600.webp`},{w:2880,src:`/media/_r/kaede/kaede-pivot-drill-2880.webp`}]},"/media/kaede/kaede-settings.webp":{key:`129834:1793528001973`,w:2880,h:1160,lqip:`data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAgCdASoYAAoAPu1Ct1apoqakGAEwHYlnAABc6La8AAD+sj93ovGTlBpKXVXK/QAAAA==`,variants:[{w:480,src:`/media/_r/kaede/kaede-settings-480.webp`},{w:960,src:`/media/_r/kaede/kaede-settings-960.webp`},{w:1600,src:`/media/_r/kaede/kaede-settings-1600.webp`},{w:2880,src:`/media/_r/kaede/kaede-settings-2880.webp`}]},"/media/kaede/routing-applied.webp":{key:`83760:1793528001973`,w:3074,h:1082,lqip:`data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAgCdASoYAAgAPu1iqU2ppaQiMAgBMB2JaQAAeyAA/vCr/M88R9j9HGujgAAA`,variants:[{w:480,src:`/media/_r/kaede/routing-applied-480.webp`},{w:960,src:`/media/_r/kaede/routing-applied-960.webp`},{w:1600,src:`/media/_r/kaede/routing-applied-1600.webp`},{w:3074,src:`/media/_r/kaede/routing-applied-3074.webp`}]},"/media/kaede/routing-suggest.webp":{key:`94314:1793528001973`,w:3070,h:852,lqip:`data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAgCdASoYAAcAPu1iqU2ppaQiMAgBMB2JaQAAeyAA/vC/wAPAkkAA`,variants:[{w:480,src:`/media/_r/kaede/routing-suggest-480.webp`},{w:960,src:`/media/_r/kaede/routing-suggest-960.webp`},{w:1600,src:`/media/_r/kaede/routing-suggest-1600.webp`},{w:3070,src:`/media/_r/kaede/routing-suggest-3070.webp`}]},"/media/kalimati/arrivals.jpg":{key:`68278:1793528001976`,w:1440,h:900,lqip:`data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAwAwCdASoYAA8ALrV2u12jqampiYC0S0gABc6LUGgoQDoAAP7VF+honOgY5LeYba7qYdhGABMDflU4wKcgQAAA`,variants:[{w:480,src:`/media/_r/kalimati/arrivals-480.webp`},{w:960,src:`/media/_r/kalimati/arrivals-960.webp`},{w:1440,src:`/media/_r/kalimati/arrivals-1440.webp`}]},"/media/kalimati/phone.jpg":{key:`67728:1793528001977`,w:390,h:844,lqip:`data:image/webp;base64,UklGRnQBAABXRUJQVlA4IGgBAADQCACdASoYADUAPu1mq08ppaQiLBqrMTAdiWwAqSe72AbcTngNMrA1j0Njvnjvsu+GO/LpGoc37eiFOcB33fS+5DMWqWSAp4exTNDxTcAAAP7c0UegW4/02R9q/Wi/NhIh+UWN0D/gg5Tcg3oJ2t8go+oeyvlkguwVImmUtc0x3fs2LVxc8Jc2KBZsS9rVtbENa4la/76YkBT+SaRZ2UgHZzWy3rBYqcLEhcWEgVOPLXuJAGCaxRcdkLIhi7VXw2lcvFMGQUPZhGILXk976sdqjXhbcoBuGHfnnNLn08xQJZw34eDYeNaHwL7EmvmfGntutyct5z4x2UW/buTuQbHLZQFHPPhHL2c68nUXYMCWUx9Oaf+2WuU24FN7jCHwY6wgI7Q4R02z8JOTxgMClnX0mtKbEzdEJwO83F1KCrOMr2lfrSjSFmFF/B5KBNqV0elNB6snfQP9URwsVEDQn1Rh6MiV1ELnGgA=`,variants:[{w:390,src:`/media/_r/kalimati/phone-390.webp`}]},"/media/kalimati/prices.jpg":{key:`133621:1793528001977`,w:1440,h:900,lqip:`data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwBACdASoYAA8APu1orU6ppiSiMAgBMB2JQApgzMFt/gPJOsuMhY9ZWMgA/rI/osdskwPfVP3AKM8tBk7T2Ng+DUmfxCvgVmd1cCuRto6CzS22y/1I+EGAWxll1xdgKJ8AAA==`,variants:[{w:480,src:`/media/_r/kalimati/prices-480.webp`},{w:960,src:`/media/_r/kalimati/prices-960.webp`},{w:1440,src:`/media/_r/kalimati/prices-1440.webp`}]},"/media/portfolio-images/portfolio2.png":{key:`210016:1793528001978`,w:800,h:512,lqip:`data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAAFwAADgAAQUxQSDMAAAABD9D/iAioimSniRPEVEH8J0hEQFXAICB0RET0fwIW4aL5fHEtXqMKdo3tZBkX9E9Y4BcAVlA4IFYAAADQAwCdASoYAA8APu1kqk4ppaQiMAgBMB2JaAC7ACHE1BgioiJwo8gA/tjLlcp0iYbfP5ZkAisFgSQ/UzAkMYFcWfVp1oaqtU8IVJE3G2eIQH7Bqk5gAA==`,variants:[{w:480,src:`/media/_r/portfolio-images/portfolio2-480.webp`},{w:800,src:`/media/_r/portfolio-images/portfolio2-800.webp`}]},"/media/portfolio-images/portfolio4.png":{key:`303636:1793528001978`,w:1423,h:764,lqip:`data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAACQAwCdASoYAA0APu1iqU2ppaOiMAgBMB2JZwAAW6mh+eytlqAAAP6YJssAXfPqqgSJfRcuDF04dcUnllKrd6rfD2KDEV4Lg9PKzse6I/9tEwfy+Mr28yQtLuTufxHvJ0zmwkXyT5pZZFMUyIAAAA==`,variants:[{w:480,src:`/media/_r/portfolio-images/portfolio4-480.webp`},{w:960,src:`/media/_r/portfolio-images/portfolio4-960.webp`},{w:1423,src:`/media/_r/portfolio-images/portfolio4-1423.webp`}]},"/media/portfolio-images/portfolio5.png":{key:`59309:1793528001978`,w:1440,h:764,lqip:`data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAABwAwCdASoYAA0APu1iqk2ppaQiMAgBMB2JYwAAW+s8jGbKEMAA/vDLPZY1Z8FRg0lt2bLW5rPxbR7QDU9MvIqw7sUGZZcLvgAAAA==`,variants:[{w:480,src:`/media/_r/portfolio-images/portfolio5-480.webp`},{w:960,src:`/media/_r/portfolio-images/portfolio5-960.webp`},{w:1440,src:`/media/_r/portfolio-images/portfolio5-1440.webp`}]},"/media/portfolio-images/portfolio7.png":{key:`221202:1793528001978`,w:1423,h:764,lqip:`data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAADwAwCdASoYAA0APu1iqU2ppaOiMAgBMB2JZACdMoADYguJXptBnI+QAP7tqIodN21XU1NzSkTEHB3wgxDM3aTco7Mgh9GLZFKMiKP6QU1BwaNzK/xH1JR/SXrW6M6wA2FwLYQZqTdSrcEJNvwuz1rwBGgC5HEbKqcsTAAA`,variants:[{w:480,src:`/media/_r/portfolio-images/portfolio7-480.webp`},{w:960,src:`/media/_r/portfolio-images/portfolio7-960.webp`},{w:1423,src:`/media/_r/portfolio-images/portfolio7-1423.webp`}]},"/media/portfolio-images/portfolio8.png":{key:`166370:1793528001978`,w:1423,h:764,lqip:`data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAwBACdASoYAA0APu1mqk4ppaOiMAgBMB2JQBhT+ABXe3cN0GuR0EK1rwAA/vAS9wZkUhnLBbEhLLrauIZ4DpgxkB3OwYACfIH5cwYxhYE16Eyt39OF0Yy90ZiPDzZOFGPMVgAA`,variants:[{w:480,src:`/media/_r/portfolio-images/portfolio8-480.webp`},{w:960,src:`/media/_r/portfolio-images/portfolio8-960.webp`},{w:1423,src:`/media/_r/portfolio-images/portfolio8-1423.webp`}]},"/media/work/affiliatefeed.jpg":{key:`45677:1793528001978`,w:1440,h:900,lqip:`data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACQAwCdASoYAA8APu1iqU2ppaQiMAgBMB2JYwC+SCHhSysB0sQAAP7qti/n6IP+n8SFyfpTxjpgiYEAAAA=`,variants:[{w:480,src:`/media/_r/work/affiliatefeed-480.webp`},{w:960,src:`/media/_r/work/affiliatefeed-960.webp`},{w:1440,src:`/media/_r/work/affiliatefeed-1440.webp`}]},"/media/work/everest-forms.png":{key:`146405:1793528001981`,w:1544,h:500,lqip:`data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQAwCdASoYAAgAPu1iqk4ppaQiMAgBMB2JaACsIExDA1ztAyVQIqoA/Q+8cFFPkla8hQSNkV1NX/Dmya9Ez5t3ecCbp0DIip8G3naf2BjfCnUcKjmTzAAA`,variants:[{w:480,src:`/media/_r/work/everest-forms-480.webp`},{w:960,src:`/media/_r/work/everest-forms-960.webp`},{w:1544,src:`/media/_r/work/everest-forms-1544.webp`}]},"/media/work/gdg-vision.png":{key:`442878:1793528001981`,w:1349,h:3277,lqip:`data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACwBACdASoYADoAPu1wsFIppqSiqAgBMB2JaQAAL2p3M6ZTBaD9fLt2tMmpNFZwAP7yIRgGkli+PV5jSe6XHOhtfkwl7+QA4VTaj6UJuRQ4LxVlJXiMcDdl1R0B9linkepPG2FWHQLBwAAA`,variants:[{w:480,src:`/media/_r/work/gdg-vision-480.webp`},{w:960,src:`/media/_r/work/gdg-vision-960.webp`},{w:1349,src:`/media/_r/work/gdg-vision-1349.webp`}]},"/media/work/generic-properties-poster.jpg":{key:`185419:1793528001981`,w:1920,h:930,lqip:`data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADQAwCdASoYAAwAPu1mq04ppaQiMAgBMB2JZwAAW6YEnDI3AEZhTiAA/rQqT+qY1RQqjKh7xcTs82hH1kQbGgVZgXV413NwIa+FgYSs1YPA0ayvRuAQswHH1CH0JlnAAAA=`,variants:[{w:480,src:`/media/_r/work/generic-properties-poster-480.webp`},{w:960,src:`/media/_r/work/generic-properties-poster-960.webp`},{w:1600,src:`/media/_r/work/generic-properties-poster-1600.webp`},{w:1920,src:`/media/_r/work/generic-properties-poster-1920.webp`}]},"/media/work/generic-properties.jpg":{key:`185419:1793528001981`,w:1920,h:930,lqip:`data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADQAwCdASoYAAwAPu1mq04ppaQiMAgBMB2JZwAAW6YEnDI3AEZhTiAA/rQqT+qY1RQqjKh7xcTs82hH1kQbGgVZgXV413NwIa+FgYSs1YPA0ayvRuAQswHH1CH0JlnAAAA=`,variants:[{w:480,src:`/media/_r/work/generic-properties-480.webp`},{w:960,src:`/media/_r/work/generic-properties-960.webp`},{w:1600,src:`/media/_r/work/generic-properties-1600.webp`},{w:1920,src:`/media/_r/work/generic-properties-1920.webp`}]},"/media/work/indiabix-scraper.jpg":{key:`123254:1793528001988`,w:1440,h:900,lqip:`data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAwCdASoYAA8APu1Ct1apoqakGAEwHYlpAABc6fsjLgAA/lv+8utTNbwkDy/vFNyIXrmdzM9O7UwiAAA=`,variants:[{w:480,src:`/media/_r/work/indiabix-scraper-480.webp`},{w:960,src:`/media/_r/work/indiabix-scraper-960.webp`},{w:1440,src:`/media/_r/work/indiabix-scraper-1440.webp`}]},"/media/work/kaede.jpg":{key:`137406:1793528001988`,w:1440,h:840,lqip:`data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQBACdASoYAA4APu1yrU+pp6QiMAgBMB2JZACdL1AFerNkNH8LAmiWMAD++UpzjKTvWiFO4L1vuNqEgttlTJNZ4Sgz7T0OCB9+Bk3bhDMa7Ks/QDJFel3XYcb/3FB3zw1YfRmVPMzF66K6BKQM5kgA`,variants:[{w:480,src:`/media/_r/work/kaede-480.webp`},{w:960,src:`/media/_r/work/kaede-960.webp`},{w:1440,src:`/media/_r/work/kaede-1440.webp`}]},"/media/work/kalimati.jpg":{key:`245636:1793528001988`,w:1440,h:900,lqip:`data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABwBACdASoYAA8APu1iqk2ppaQiMAgBMB2JbACdMoLUABFel1qJXhLYT6p9LAD977I38TQYaKOOgNllnqwxe0n2ZzCG6grUu3NwaGd0/6N1qyoAPiE7E7eh432PosMmOHcZ48TLPhRmGDQYfZGduILeFG0sbybW/+hjeT6IQBoDFc0sLQAAAA==`,variants:[{w:480,src:`/media/_r/work/kalimati-480.webp`},{w:960,src:`/media/_r/work/kalimati-960.webp`},{w:1440,src:`/media/_r/work/kalimati-1440.webp`}]},"/media/work/syncfusion-nepali.jpg":{key:`120049:1793528001988`,w:1440,h:900,lqip:`data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAABwAwCdASoYAA8APu1orU6ppiSiMAgBMB2JaQAAW+qpdqRIwAAA/lv/TGtTYDQBZw0NYnSk2A6QtBAAAAA=`,variants:[{w:480,src:`/media/_r/work/syncfusion-nepali-480.webp`},{w:960,src:`/media/_r/work/syncfusion-nepali-960.webp`},{w:1440,src:`/media/_r/work/syncfusion-nepali-1440.webp`}]},"/media/work/wpeverest-dev-docs.jpg":{key:`142727:1793528001988`,w:1440,h:900,lqip:`data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAAAQAwCdASoYAA8APu1kqk4ppaQiMAgBMB2JaQAAetGx8UAA/vCB0DYF8NNzZKI1rL1Po6EAAAA=`,variants:[{w:480,src:`/media/_r/work/wpeverest-dev-docs-480.webp`},{w:960,src:`/media/_r/work/wpeverest-dev-docs-960.webp`},{w:1440,src:`/media/_r/work/wpeverest-dev-docs-1440.webp`}]}},Jp=e=>e.toLowerCase().replace(/<[^>]+>/g,``).replace(/&[a-z]+;/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``);Q.use({renderer:{image({href:e,text:t}){let n=qp[e],r=(t||``).replace(/"/g,`&quot;`);if(!n)return`<img src="${e}" alt="${r}" loading="lazy" decoding="async">`;let i=n.variants.map(e=>`${e.src} ${e.w}w`).join(`, `),a=n.variants[n.variants.length-1].src;return`<span class="psi" style="--lqip:url(${n.lqip});aspect-ratio:${n.w} / ${n.h}"><img src="${a}" srcset="${i}" sizes="(max-width: 760px) 100vw, 720px" alt="${r}" width="${n.w}" height="${n.h}" loading="lazy" decoding="async"></span>`},heading({tokens:e,depth:t}){let n=this.parser.parseInline(e);if(t>3)return`<h${t}>${n}</h${t}>`;let r=Jp(n);return`<h${t} id="${r}"><a class="anchor" href="#${r}" aria-label="Link to this section">#</a>${n}</h${t}>`}}});function Yp(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},body:e};let n={},r=null;for(let e of t[1].split(/\r?\n/)){let t=e.match(/^\s+-\s+(.*)$/);if(t&&r){n[r].push(t[1].trim());continue}let i=e.match(/^([\w-]+):\s*(.*)$/);if(!i)continue;let[,a,o]=i;o===``?(n[a]=[],r=a):(r=null,n[a]=o===`true`||o!==`false`&&o)}return{data:n,body:t[2]}}function Xp(e,t){return Object.entries(e).map(([e,n])=>{let r=e.split(`/`).pop().replace(/\.md$/,``),{data:i,body:a}=Yp(n),o=Q.parse(a),s=[...o.matchAll(/<h2 id="([^"]+)">.*?<\/a>(.*?)<\/h2>/g)].map(e=>({id:e[1],text:e[2].replace(/<[^>]+>/g,``)}));return{...i,slug:r,url:`/${t}/${r}`,html:o,toc:s}}).filter(e=>!e.draft||!1)}var Zp=Object.assign({"/content/work/generic-properties.md":_d,"/content/work/kaede.md":vd,"/content/work/kalimati.md":yd}),Qp=Object.assign({"/content/writing/a-copilot-that-lives-in-bash.md":bd,"/content/writing/a-date-that-did-not-fit.md":xd,"/content/writing/designing-a-rate-engine.md":Sd,"/content/writing/esewa-khalti-laravel.md":Cd,"/content/writing/finding-the-nearest-agent.md":wd,"/content/writing/handing-out-air-waybill-numbers.md":Td,"/content/writing/maintaining-phpjasper.md":Ed,"/content/writing/most-waybills-are-the-usual-one.md":Dd,"/content/writing/mtls-and-oauth2-together.md":Od,"/content/writing/one-developer-one-market.md":kd,"/content/writing/taking-money-on-a-government-website.md":Ad,"/content/writing/teaching-a-ui-library-nepali.md":jd,"/content/writing/the-check-that-only-lived-in-the-browser.md":Md,"/content/writing/what-one-record-taught-me.md":Nd}),$p=Xp(Zp,`work`).map(e=>({...e,stack:String(e.stack||``).split(`,`).map(e=>e.trim()).filter(Boolean),shots:(Array.isArray(e.shots)?e.shots:[]).map(e=>{let[t,n,r=`3x2`]=e.split(`::`).map(e=>e.trim()),[i,a]=r.split(`x`).map(Number);return{src:t,caption:n,cols:i,rows:a}}),engineering:(Array.isArray(e.engineering)?e.engineering:[]).map(e=>{let[t,n,r]=e.split(`::`).map(e=>e.trim());return{label:t,text:n,to:r}}),steps:(e.steps||[]).map(e=>{let[t,n]=e.split(`::`).map(e=>e.trim());return{title:t,text:n}})})).sort((e,t)=>Number(e.order)-Number(t.order)),em=Xp(Qp,`writing`).sort((e,t)=>String(t.date).localeCompare(String(e.date)));function tm(e){return new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`})}var nm=Object.assign({"/content/gallery/01-kaede.md":Pd,"/content/gallery/02-kalimati.md":Fd,"/content/gallery/03-generic-properties.md":Id,"/content/gallery/04-dynamics-plugins.md":Ld,"/content/gallery/04a-syncfusion-nepali.md":Rd,"/content/gallery/05-affiliatefeed.md":zd,"/content/gallery/05a-wpeverest-dev-docs.md":Bd,"/content/gallery/06-everest-forms-pdf.md":Vd,"/content/gallery/07-rapti-crm.md":Hd,"/content/gallery/08-taskmon.md":Ud,"/content/gallery/08a-gdg-dang.md":Wd,"/content/gallery/09-pbs-ems.md":Gd,"/content/gallery/09a-phpjasper.md":Kd,"/content/gallery/10-nimbus.md":qd,"/content/gallery/11-loksewa-quiz.md":Jd,"/content/gallery/12-debendra-manandhar.md":Yd,"/content/gallery/13-four-seasons.md":Xd,"/content/gallery/14-travel-time.md":Zd,"/content/gallery/15-indiabix-scraper.md":Qd,"/content/gallery/16-in-cod-we-trust.md":$d,"/content/gallery/17-adventures-of-joy.md":ef}),rm=e=>typeof e==`string`?e:``,im=Xp(nm,`gallery`).map(e=>({...e,link:rm(e.link),image:rm(e.image),logo:rm(e.logo),loop:rm(e.loop),cover:rm(e.cover),year:String(e.year)})).sort((e,t)=>e.slug.localeCompare(t.slug)),am=[`All`,...new Set(im.map(e=>e.tag))],om=R(``),sm;function cm(e){om.value=e,clearTimeout(sm),sm=setTimeout(()=>{om.value=``},2200)}async function lm(e,t=`Copied`){try{await navigator.clipboard.writeText(e),cm(t)}catch{cm(`Copy failed. Select it instead.`)}}var um=`a11y`,dm={text:`md`,contrast:`normal`,motion:`auto`,links:`auto`,spacing:`normal`};function fm(){try{return{...dm,...JSON.parse(localStorage.getItem(um)||`{}`)}}catch{return{...dm}}}var $=Sn(typeof window>`u`?{...dm}:fm());function pm(){let e=document.documentElement;for(let[t,n]of Object.entries($))n===dm[t]?delete e.dataset[`a11y${t[0].toUpperCase()}${t.slice(1)}`]:e.dataset[`a11y${t[0].toUpperCase()}${t.slice(1)}`]=n;try{localStorage.setItem(um,JSON.stringify($))}catch{}}function mm(){Object.assign($,dm)}typeof window<`u`&&Dr($,pm,{deep:!0});var hm=[[`ne`,`नेपाली`,`Nepali`],[`hi`,`हिन्दी`,`Hindi`],[`ja`,`日本語`,`Japanese`],[`zh-CN`,`中文`,`Chinese`],[`ko`,`한국어`,`Korean`],[`ar`,`العربية`,`Arabic`],[`de`,`Deutsch`,`German`],[`fr`,`Français`,`French`],[`es`,`Español`,`Spanish`],[`pt`,`Português`,`Portuguese`],[`it`,`Italiano`,`Italian`],[`nl`,`Nederlands`,`Dutch`],[`ru`,`Русский`,`Russian`],[`tr`,`Türkçe`,`Turkish`],[`id`,`Bahasa Indonesia`,`Indonesian`],[`bn`,`বাংলা`,`Bengali`]],gm=(e,t=typeof location<`u`?location.href:`https://nobeldahal.com.np/`)=>`https://translate.google.com/translate?sl=en&tl=${e}&u=${encodeURIComponent(t)}`,_m=()=>Y.booking.replace(/^https?:\/\/cal\.com\//,``),vm;function ym(){return document.documentElement.dataset.theme||(matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`)}function bm(){return vm||(vm=new Promise(e=>{(function(e,t,n){let r=function(e,t){e.q.push(t)},i=e.document;e.Cal=e.Cal||function(){let a=e.Cal,o=arguments;if(a.loaded||=(a.ns={},a.q=a.q||[],i.head.appendChild(i.createElement(`script`)).src=t,!0),o[0]===n){let e=function(){r(e,arguments)},t=o[1];e.q=e.q||[],typeof t==`string`?(a.ns[t]=a.ns[t]||e,r(a.ns[t],o),r(a,[`initNamespace`,t])):r(a,o)}else r(a,o)}})(window,`https://app.cal.com/embed/embed.js`,`init`),window.Cal(`init`,`review`,{origin:`https://cal.com`}),window.Cal.ns.review(`ui`,{theme:ym(),hideEventTypeDetails:!1,layout:`month_view`,cssVarsPerTheme:{light:{"cal-brand":`#141414`},dark:{"cal-brand":`#ecebe8`}}}),e(window.Cal.ns.review)}),vm)}async function xm(){(await bm())(`modal`,{calLink:_m(),config:{layout:`month_view`,theme:ym()}})}async function Sm(e){(await bm())(`inline`,{elementOrSelector:e,calLink:_m(),config:{layout:`month_view`,theme:ym()}})}var Cm={class:`cp__box`},wm=[`aria-activedescendant`],Tm={id:`cp-list`,class:`cp__list`,role:`listbox`},Em={key:0,class:`cp__group`,role:`presentation`},Dm=[`id`,`aria-selected`,`onMousemove`,`onClick`],Om={class:`cp__label`},km={key:0,class:`cp__hint`},Am={key:0,class:`cp__empty`},jm=cd({__name:`CommandPalette`,setup(e,{expose:t}){let n=Gu(),r=R(!1),i=R(``),a=R(0),o=R(null),s=R(null);function c(){let e=document.documentElement,t=e.dataset.theme?e.dataset.theme===`dark`:matchMedia(`(prefers-color-scheme: dark)`).matches;e.dataset.theme=t?`light`:`dark`;try{localStorage.setItem(`theme`,e.dataset.theme)}catch{}}let l=Jo(()=>[{group:`Pages`,label:`Home`,to:`/`},{group:`Pages`,label:`Work`,hint:`Everything since 2017`,to:`/work/`},{group:`Pages`,label:`Writing`,to:`/writing/`},{group:`Pages`,label:`About`,to:`/about`},{group:`Pages`,label:`Consult`,hint:`How I help, how we work, questions`,to:`/consult`},{group:`Pages`,label:`Résumé`,hint:`as a page`,to:`/cv`},{group:`Pages`,label:`Now`,hint:`this month`,to:`/now`},{group:`Pages`,label:`How this site is built`,to:`/colophon`},...$p.map(e=>({group:`Case studies`,label:e.title,hint:e.kind,to:e.url})),...em.map(e=>({group:`Writing`,label:e.title,to:e.url})),...im.filter(e=>!e.featured).map(e=>({group:`Gallery`,label:e.title,hint:`${e.kind} · ${e.year}`,to:`/work/`})),...Y.booking?[{group:`Actions`,label:`Book a free systems review`,hint:`30 min`,run:()=>xm()}]:[],{group:`Actions`,label:`Copy email address`,hint:Y.email,run:()=>lm(Y.email,`Email address copied`)},{group:`Actions`,label:`Download résumé (PDF)`,run:()=>{location.href=Y.cv}},{group:`Actions`,label:`Switch light / dark`,run:c},{group:`Actions`,label:`Accessibility settings`,hint:`text size, contrast, motion`,run:()=>dispatchEvent(new Event(`a11y:open`))},...hm.map(([e,t,n])=>({group:`Read in`,label:`Read in ${n}`,hint:t,run:()=>{location.href=gm(e)}})),{group:`Actions`,label:`GitHub`,hint:`coderkoala`,run:()=>window.open(Y.github,`_blank`,`noopener`)},{group:`Actions`,label:`LinkedIn`,hint:`coderkoala`,run:()=>window.open(Y.linkedin,`_blank`,`noopener`)}]),u=Jo(()=>{let e=i.value.toLowerCase().split(/\s+/).filter(Boolean);return(e.length?l.value.filter(t=>e.every(e=>`${t.label} ${t.hint||``} ${t.group}`.toLowerCase().includes(e))):l.value).slice(0,40)});async function d(){r.value=!0,i.value=``,a.value=0,s.value?.showModal(),await ir(),o.value?.focus()}function f(){r.value=!1,s.value?.close()}function p(e){let t=u.value[e];t&&(f(),t.to?n.push(t.to):t.run())}function m(e){e.key===`ArrowDown`?(a.value=Math.min(a.value+1,u.value.length-1),e.preventDefault(),h()):e.key===`ArrowUp`?(a.value=Math.max(a.value-1,0),e.preventDefault(),h()):e.key===`Enter`&&(p(a.value),e.preventDefault())}function h(){ir(()=>s.value?.querySelector(`[aria-selected="true"]`)?.scrollIntoView({block:`nearest`}))}function g(e){let t=/input|textarea|select/i.test(e.target.tagName)||e.target.isContentEditable;(e.key===`k`&&(e.metaKey||e.ctrlKey)||e.key===`/`&&!t)&&(e.preventDefault(),r.value?f():d())}return Ti(()=>window.addEventListener(`keydown`,g)),Oi(()=>window.removeEventListener(`keydown`,g)),t({show:d}),(e,t)=>(H(),U(`dialog`,{ref_key:`dlg`,ref:s,class:`cp`,"aria-label":`Go to`,onClose:t[2]||=e=>r.value=!1,onClick:Tc(f,[`self`])},[W(`div`,Cm,[yr(W(`input`,{ref_key:`input`,ref:o,"onUpdate:modelValue":t[0]||=e=>i.value=e,class:`cp__input`,type:`text`,placeholder:`Go to a page, project or post…`,role:`combobox`,"aria-expanded":`true`,"aria-controls":`cp-list`,"aria-activedescendant":`cp-${a.value}`,onKeydown:m,onInput:t[1]||=e=>a.value=0},null,40,wm),[[Sc,i.value]]),W(`ul`,Tm,[(H(!0),U(B,null,Bi(u.value,(e,t)=>(H(),U(B,{key:e.group+e.label},[t===0||u.value[t-1].group!==e.group?(H(),U(`li`,Em,N(e.group),1)):xo(``,!0),W(`li`,{id:`cp-${t}`,role:`option`,"aria-selected":t===a.value,class:`cp__item`,onMousemove:e=>a.value=t,onClick:e=>p(t)},[W(`span`,Om,N(e.label),1),e.hint?(H(),U(`span`,km,N(e.hint),1)):xo(``,!0)],40,Dm)],64))),128)),u.value.length?xo(``,!0):(H(),U(`li`,Am,`Nothing matches “`+N(i.value)+`”.`,1))]),t[3]||=W(`p`,{class:`cp__foot`},[W(`kbd`,null,`↑`),W(`kbd`,null,`↓`),yo(` to move · `),W(`kbd`,null,`Enter`),yo(` to open · `),W(`kbd`,null,`Esc`),yo(` to close`)],-1)])],544))}},[[`__scopeId`,`data-v-91169747`]]),Mm={class:`toast`,role:`status`,"aria-live":`polite`},Nm={key:0,class:`toast__msg`},Pm=cd({__name:`AppToast`,setup(e){return(e,t)=>(H(),U(`div`,Mm,[G(us,{name:`t`},{default:vr(()=>[z(om)?(H(),U(`span`,Nm,N(z(om)),1)):xo(``,!0)]),_:1})]))}},[[`__scopeId`,`data-v-74470497`]]),Fm={class:`ap__box`},Im={class:`ap__row`},Lm={class:`seg`,role:`radiogroup`},Rm=[`aria-checked`,`onClick`],zm={class:`ap__row`},Bm=[`aria-checked`],Vm={class:`ap__row`},Hm=[`aria-checked`],Um={class:`ap__row`},Wm=[`aria-checked`],Gm={class:`ap__row`},Km=[`aria-checked`],qm={class:`ap__lang`},Jm=[`href`,`lang`,`title`],Ym={class:`ap__foot`},Xm=cd({__name:`A11yPanel`,setup(e){let t=R(null);Ku();let n=R(`https://nobeldahal.com.np/`);function r(){n.value=location.href,t.value?.showModal()}function i(){t.value?.close()}let a=()=>r();Ti(()=>addEventListener(`a11y:open`,a)),Oi(()=>removeEventListener(`a11y:open`,a));let o=[[`sm`,`A−`],[`md`,`A`],[`lg`,`A+`],[`xl`,`A++`]];return(e,r)=>(H(),U(`dialog`,{ref_key:`dlg`,ref:t,class:`ap`,"aria-labelledby":`ap-title`,onClick:Tc(i,[`self`])},[W(`div`,Fm,[W(`header`,{class:`ap__head`},[r[5]||=W(`h2`,{id:`ap-title`},`Reading and accessibility`,-1),W(`button`,{type:`button`,class:`ap__x`,onClick:i,"aria-label":`Close`},`×`)]),W(`fieldset`,Im,[r[6]||=W(`legend`,null,`Text size`,-1),W(`div`,Lm,[(H(),U(B,null,Bi(o,([e,t])=>W(`button`,{key:e,type:`button`,role:`radio`,"aria-checked":z($).text===e,onClick:t=>z($).text=e},N(t),9,Rm)),64))])]),W(`div`,zm,[r[8]||=W(`span`,{class:`ap__l`,id:`ap-c`},`High contrast`,-1),W(`button`,{type:`button`,role:`switch`,"aria-checked":z($).contrast===`high`,"aria-labelledby":`ap-c`,class:`sw`,onClick:r[0]||=e=>z($).contrast=z($).contrast===`high`?`normal`:`high`},[...r[7]||=[W(`span`,null,null,-1)]],8,Bm)]),W(`div`,Vm,[r[10]||=W(`span`,{class:`ap__l`,id:`ap-m`},`Reduce motion`,-1),W(`button`,{type:`button`,role:`switch`,"aria-checked":z($).motion===`reduce`,"aria-labelledby":`ap-m`,class:`sw`,onClick:r[1]||=e=>z($).motion=z($).motion===`reduce`?`auto`:`reduce`},[...r[9]||=[W(`span`,null,null,-1)]],8,Hm)]),W(`div`,Um,[r[12]||=W(`span`,{class:`ap__l`,id:`ap-u`},`Underline all links`,-1),W(`button`,{type:`button`,role:`switch`,"aria-checked":z($).links===`underline`,"aria-labelledby":`ap-u`,class:`sw`,onClick:r[2]||=e=>z($).links=z($).links===`underline`?`auto`:`underline`},[...r[11]||=[W(`span`,null,null,-1)]],8,Wm)]),W(`div`,Gm,[r[14]||=W(`span`,{class:`ap__l`,id:`ap-s`},`Easier reading spacing`,-1),W(`button`,{type:`button`,role:`switch`,"aria-checked":z($).spacing===`wide`,"aria-labelledby":`ap-s`,class:`sw`,onClick:r[3]||=e=>z($).spacing=z($).spacing===`wide`?`normal`:`wide`},[...r[13]||=[W(`span`,null,null,-1)]],8,Km)]),W(`div`,qm,[r[15]||=W(`p`,{class:`ap__l`},`Read this page in`,-1),W(`ul`,null,[(H(!0),U(B,null,Bi(z(hm),([e,t,r])=>(H(),U(`li`,{key:e},[W(`a`,{href:z(gm)(e,n.value),lang:e,rel:`noopener`,title:r},N(t),9,Jm)]))),128))]),r[16]||=W(`p`,{class:`ap__note`},`Free machine translation by Google Translate. It opens a translated copy of this page.`,-1)]),W(`footer`,Ym,[W(`button`,{type:`button`,class:`btn btn--sm`,onClick:r[4]||=(...e)=>z(mm)&&z(mm)(...e)},`Reset`),r[17]||=W(`span`,{class:`ap__note`},`Saved on this device. Your system's reduced-motion and dark mode are always respected.`,-1)])])],512))}},[[`__scopeId`,`data-v-743ef34f`]]),Zm=`(max-width: 767.98px), (pointer: coarse) and (max-height: 500px)`,Qm=R(!1),$m=R(!1);if(typeof window<`u`){let e=matchMedia(Zm),t=()=>{Qm.value=e.matches,$m.value=e.matches&&innerWidth>innerHeight,document.documentElement.dataset.orientation=innerWidth>innerHeight?`landscape`:`portrait`,document.documentElement.dataset.device=e.matches?`mobile`:`desktop`};t(),e.addEventListener(`change`,t),matchMedia(`(orientation: landscape)`).addEventListener(`change`,t)}var eh={class:`tabbar`,"aria-label":`App`},th=[`aria-expanded`],nh={id:`more-sheet`,class:`sheet`,role:`dialog`,"aria-modal":`true`,"aria-label":`More`},rh={class:`sheet__list`},ih=[`href`],ah={class:`sheet__tools`},oh=cd({__name:`MobileTabBar`,setup(e){let t=Ku(),n=R(!1),r=R(!1),i=[{to:`/`,label:`Home`,icon:`home`,match:e=>e===`/`},{to:`/work/`,label:`Work`,icon:`grid`,match:e=>e.startsWith(`/work`)},{to:`/writing/`,label:`Writing`,icon:`pen`,match:e=>e.startsWith(`/writing`)},{to:`/consult`,label:`Consult`,icon:`chat`,match:e=>e.startsWith(`/consult`)}],a=[{to:`/about`,label:`About`},{to:`/cv`,label:`Résumé`},{to:`/now`,label:`Now`},{to:`/colophon`,label:`How it’s built`}];Dr(()=>t.path,()=>{n.value=!1}),Dr($m,()=>{n.value=!1}),Dr(n,e=>{document.documentElement.classList.toggle(`sheet-open`,e),e&&bm()}),Ti(()=>{addEventListener(`keydown`,u);let e=document.documentElement.dataset.theme;r.value=e?e===`dark`:matchMedia(`(prefers-color-scheme: dark)`).matches});function o(){r.value=!r.value;let e=r.value?`dark`:`light`;document.documentElement.dataset.theme=e;try{localStorage.setItem(`theme`,e)}catch{}}let s=()=>{n.value=!1,dispatchEvent(new Event(`a11y:open`))},c=()=>{n.value=!1,dispatchEvent(new KeyboardEvent(`keydown`,{key:`k`,ctrlKey:!0,metaKey:!0}))},l=()=>{n.value=!1,xm()};function u(e){e.key===`Escape`&&(n.value=!1)}return(e,u)=>{let d=Fi(`RouterLink`);return H(),U(B,null,[W(`nav`,eh,[(H(),U(B,null,Bi(i,e=>G(d,{key:e.to,to:e.to,class:$e([`tab`,{on:e.match(z(t).path)}]),"aria-current":e.match(z(t).path)?`page`:null},{default:vr(()=>[G($u,{name:e.icon,size:22},null,8,[`name`]),W(`span`,null,N(e.label),1)]),_:2},1032,[`to`,`class`,`aria-current`])),64)),W(`button`,{type:`button`,class:$e([`tab`,{on:n.value||a.some(e=>z(t).path===e.to)}]),"aria-expanded":n.value,"aria-controls":`more-sheet`,onClick:u[0]||=e=>n.value=!n.value},[G($u,{name:`more`,size:22}),u[2]||=W(`span`,null,`More`,-1)],10,th)]),G(us,{name:`sheet`},{default:vr(()=>[n.value?(H(),U(`div`,{key:0,class:`scrim`,onClick:u[1]||=Tc(e=>n.value=!1,[`self`])},[W(`div`,nh,[u[6]||=W(`div`,{class:`sheet__grip`,"aria-hidden":`true`},null,-1),z(Y).booking?(H(),U(`button`,{key:0,type:`button`,class:`btn btn--solid sheet__cta`,onClick:l},[G($u,{name:`calendar`}),u[3]||=yo(` Book a free review`,-1)])):xo(``,!0),W(`ul`,rh,[(H(),U(B,null,Bi(a,e=>W(`li`,{key:e.to},[G(d,{to:e.to},{default:vr(()=>[yo(N(e.label)+` `,1),G($u,{name:`arrow`})]),_:2},1032,[`to`])])),64)),W(`li`,null,[W(`a`,{href:`mailto:${z(Y).email}`},[yo(`Email `+N(z(Y).email)+` `,1),G($u,{name:`mail`})],8,ih)])]),W(`div`,ah,[W(`button`,{type:`button`,onClick:c},[G($u,{name:`search`,size:20}),u[4]||=W(`span`,null,`Search`,-1)]),W(`button`,{type:`button`,onClick:s},[G($u,{name:`person`,size:20}),u[5]||=W(`span`,null,`Access`,-1)]),W(`button`,{type:`button`,onClick:o},[G($u,{name:r.value?`sun`:`moon`,size:20},null,8,[`name`]),W(`span`,null,N(r.value?`Light`:`Dark`),1)])])])])):xo(``,!0)]),_:1})],64)}}},[[`__scopeId`,`data-v-d9da7c1d`]]),sh={id:`main`},ch={class:`foot`},lh={class:`wrap foot__in`},uh=[`datetime`],dh={class:`foot__links`},fh=cd({__name:`App`,setup(e){Ti(()=>{if(pm(),matchMedia(`(prefers-reduced-motion: reduce)`).matches||Qm.value)return;let e=document.documentElement,t=0,n=0,r=!1,i=()=>{r=!1,e.style.setProperty(`--sy`,t),e.style.setProperty(`--mx`,n)},a=()=>{r||(r=!0,requestAnimationFrame(i))};addEventListener(`scroll`,()=>{t=Math.min(scrollY,900),a()},{passive:!0}),matchMedia(`(hover: hover)`).matches&&addEventListener(`pointermove`,e=>{n=(e.clientX/innerWidth-.5)*2,a()},{passive:!0})});let t=`2026-11-01T18:13:42.177Z`,n=()=>dispatchEvent(new Event(`a11y:open`)),r=new Date(t).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`,timeZone:`Asia/Kathmandu`});return(e,i)=>{let a=Fi(`RouterView`),o=Fi(`RouterLink`);return H(),U(B,null,[i[3]||=bo(`<div class="backdrop" aria-hidden="true" data-v-ce3be6fc><div class="bd bd--far" data-v-ce3be6fc></div><div class="bd bd--mist bd--mist-a" data-v-ce3be6fc></div><div class="bd bd--land" data-v-ce3be6fc></div><div class="bd bd--mist bd--mist-b" data-v-ce3be6fc></div></div><a class="skip" href="#main" data-v-ce3be6fc>Skip to content</a>`,2),G(gd),G(hd),W(`main`,sh,[G(a,null,{default:vr(({Component:e,route:t})=>[G(us,{name:`page`,mode:`out-in`},{default:vr(()=>[(H(),uo(Li(e),{key:t.path}))]),_:2},1024)]),_:1})]),W(`footer`,ch,[W(`div`,lh,[W(`span`,null,[yo(`© `+N(new Date(z(t)).getFullYear())+` `+N(z(Y).name)+` · `+N(z(Y).place)+` · Updated `,1),W(`time`,{datetime:z(t)},N(z(r)),9,uh)]),W(`span`,dh,[G(o,{to:`/now`},{default:vr(()=>[...i[0]||=[yo(`Now`,-1)]]),_:1}),G(o,{to:`/colophon`},{default:vr(()=>[...i[1]||=[yo(`How it’s built`,-1)]]),_:1}),W(`button`,{type:`button`,class:`foot__a11y`,onClick:n},`Accessibility and languages`)]),i[2]||=W(`span`,{class:`foot__motto`,lang:`el`,title:`Find a way, or make one.`},`Βρείτε έναν τρόπο ή φτιάξτε έναν`,-1)])]),G(oh),G(jm),G(Xm),G(Pm)],64)}}},[[`__scopeId`,`data-v-ce3be6fc`]]),ph=`modulepreload`,mh=function(e){return`/`+e},hh={},gh=function(e){return e.pathname.endsWith(`.css`)},_h=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},vh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=mh(t,n);let r=s(t),i=gh(r);return _h(hh,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:ph,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},yh=[{path:`/`,component:()=>vh(()=>import(`./Home-B1qYLN50.js`),__vite__mapDeps([0,1,2]))},{path:`/work/`,component:()=>vh(()=>import(`./Gallery-BgAhoBAv.js`),__vite__mapDeps([3,4,5,1,6]))},{path:`/work/:slug`,component:()=>vh(()=>import(`./Project-G6fOND_V.js`),__vite__mapDeps([7,4,5,8,1,9,10]))},{path:`/writing/`,component:()=>vh(()=>import(`./Writing-CosLFsAL.js`),__vite__mapDeps([11,1,12]))},{path:`/writing/:slug`,component:()=>vh(()=>import(`./Post-iNN5f6p7.js`),__vite__mapDeps([13,8,1,9,14]))},{path:`/now`,component:()=>vh(()=>import(`./Now--CJop4l-.js`),__vite__mapDeps([15,1,16]))},{path:`/colophon`,component:()=>vh(()=>import(`./Colophon-BUWwSpI2.js`),__vite__mapDeps([17,1,18]))},{path:`/cv`,component:()=>vh(()=>import(`./Cv-C4FCjnRO.js`),__vite__mapDeps([19,1,20]))},{path:`/consult`,component:()=>vh(()=>import(`./Consult-C9qPPA5b.js`),__vite__mapDeps([21,1,22]))},{path:`/hire`,redirect:`/consult`},{path:`/about`,component:()=>vh(()=>import(`./About-hPiwjxO1.js`),__vite__mapDeps([23,1,24]))},{path:`/:rest(.*)*`,component:()=>vh(()=>import(`./NotFound-Dyn9g03G.js`),__vite__mapDeps([8,1,9]))}];Xu(fh,{routes:yh,scrollBehavior:(e,t,n)=>{let r=n||(e.hash?{el:e.hash,top:88,behavior:`smooth`}:{top:0});return e.path===t.path?r:new Promise(e=>setTimeout(()=>e(r),170))}},({router:e,isClient:t})=>{if(!t)return;let n=e=>e.classList.add(`is-loaded`);document.addEventListener(`load`,e=>{e.target.tagName===`IMG`&&n(e.target)},!0),document.addEventListener(`error`,e=>{e.target.tagName===`IMG`&&n(e.target)},!0);let r=()=>document.querySelectorAll(`img`).forEach(e=>{e.complete&&e.naturalWidth&&n(e)});e.afterEach(()=>requestAnimationFrame(()=>requestAnimationFrame(r))),document.readyState===`loading`?addEventListener(`DOMContentLoaded`,r,{once:!0}):r();let i=new Set,a=e=>{typeof e==`function`&&!i.has(e)&&(i.add(e),e().catch(()=>{}))},o=t=>{let n=t.target.closest?.(`a[href^="/"]`);n&&e.resolve(n.getAttribute(`href`)).matched.forEach(e=>a(e.components?.default))};addEventListener(`pointerover`,o,{passive:!0}),addEventListener(`touchstart`,o,{passive:!0}),addEventListener(`focusin`,o);let s=window.requestIdleCallback||(e=>setTimeout(e,1500)),c=matchMedia(`(max-width: 767.98px), (pointer: coarse) and (max-height: 500px)`).matches||navigator.connection?.saveData?()=>s(()=>[`/work/`,`/writing/`,`/consult`].forEach(t=>e.resolve(t).matched.forEach(e=>a(e.components?.default)))):()=>s(()=>yh.forEach(e=>a(e.component)));document.readyState===`complete`?c():addEventListener(`load`,c,{once:!0})});export{W as A,H as B,Ku as C,Tc as D,Dc as E,yo as F,vr as G,Fi as H,G as I,$e as J,R as K,ir as L,xo as M,U as N,B as O,bo as P,Oi as R,$u as S,oc as T,Li as U,Bi as V,Dr as W,N as X,Je as Y,ad as _,tm as a,od as b,$p as c,Q as d,cd as f,ed as g,id as h,lm as i,uo as j,Jo as k,em as l,td as m,bm as n,im as o,sd as p,z as q,xm as r,am as s,Sm as t,qp as u,nd as v,Vc as w,rd as x,Y as y,Ti as z};