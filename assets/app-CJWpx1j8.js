const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DUbWe8L-.js","assets/seo-DYr-uh28.js","assets/Home-CkbEiMr1.css","assets/Gallery-DzfhRGeI.js","assets/Gallery-BiDukYCO.css","assets/Project-DK9dXzuI.js","assets/NotFound-CtNo26mf.js","assets/NotFound-Cr_wQFex.css","assets/Project-AV2T7kk4.css","assets/Writing-C6Kc3K-e.js","assets/Writing-DyxIALO6.css","assets/Post-BarGu_Z5.js","assets/Post-BVo7xjkh.css","assets/Cv-CbG8uAfT.js","assets/Cv-DJ54fY4o.css","assets/Hire-CvgC5CP0.js","assets/Hire-OIO2jVwz.css","assets/About-Dw-VzP8F.js","assets/About-BmRceT_X.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t,n={},r){for(let i in t){let a=t[i],o=r?`${r}:${i}`:i;typeof a==`object`&&a?e(a,n,o):typeof a==`function`&&(n[o]=a)}return n}var t=(()=>{if(console.createTask)return console.createTask;let e={run:e=>e()};return()=>e})();function n(e,t,r,i){for(let a=r;a<e.length;a+=1)try{let r=i?i.run(()=>e[a](...t)):e[a](...t);if(r&&typeof r.then==`function`)return Promise.resolve(r).then(()=>n(e,t,a+1,i))}catch(e){return Promise.reject(e)}}function r(e,r,i){if(e.length>0)return n(e,r,0,t(i))}function i(e,n,r){if(e.length>0){let i=t(r);return Promise.all(e.map(e=>i.run(()=>e(...n))))}}function a(e,t){for(let n of[...e])n(t)}var o=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,n={}){if(!e||typeof t!=`function`)return()=>{};let r=e,i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!n.allowDeprecated){let e=i.message;e||=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:``),this._deprecatedMessages||=new Set,this._deprecatedMessages.has(e)||(console.warn(e),this._deprecatedMessages.add(e))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>`_`+e.replace(/\W+/g,`_`)+`_hook_cb`,configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&=(this.removeHook(e,t),void 0)}}hookOnce(e,t){let n,r=(...e)=>(typeof n==`function`&&n(),n=void 0,r=void 0,t(...e));return n=this.hook(e,r),n}removeHook(e,t){let n=this._hooks[e];if(n){let r=n.indexOf(t);r!==-1&&n.splice(r,1),n.length===0&&(this._hooks[e]=void 0)}}clearHook(e){this._hooks[e]=void 0}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t==`string`?{to:t}:t;let n=this._hooks[e]||[];this._hooks[e]=void 0;for(let t of n)this.hook(e,t)}deprecateHooks(e){for(let t in e)this.deprecateHook(t,e[t])}addHooks(t){let n=e(t),r=Object.keys(n).map(e=>this.hook(e,n[e]));return()=>{for(let e of r)e();r.length=0}}removeHooks(t){let n=e(t);for(let e in n)this.removeHook(e,n[e])}removeAllHooks(){this._hooks={}}callHook(e,...t){return this.callHookWith(r,e,t)}callHookParallel(e,...t){return this.callHookWith(i,e,t)}callHookWith(e,t,n){let r=this._before||this._after?{name:t,args:n,context:{}}:void 0;this._before&&a(this._before,r);let i=e(this._hooks[t]?[...this._hooks[t]]:[],n,t);return i instanceof Promise?i.finally(()=>{this._after&&r&&a(this._after,r)}):(this._after&&r&&a(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){let t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){let t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}};function s(){return new o}var c=new Set([`link`,`style`,`script`,`noscript`]),l=new Set([`title`,`titleTemplate`,`script`,`style`,`noscript`]),u=new Set([`base`,`meta`,`link`,`style`,`script`,`noscript`]),d=new Set([`title`,`base`,`htmlAttrs`,`bodyAttrs`,`meta`,`link`,`style`,`script`,`noscript`]),f=new Set([`base`,`title`,`titleTemplate`,`bodyAttrs`,`htmlAttrs`,`templateParams`]),p=new Set([`key`,`tagPosition`,`tagPriority`,`tagDuplicateStrategy`,`innerHTML`,`textContent`,`processTemplateParams`]),m=new Set([`templateParams`,`htmlAttrs`,`bodyAttrs`]),h=new Set([`theme-color`,`google-site-verification`,`og`,`article`,`book`,`profile`,`twitter`,`author`]),g=e=>typeof e==`number`?Number.isFinite(e):e;function _(e){return e===`__proto__`||e===`constructor`||e===`prototype`}var v=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,y={base:-10,title:10},b={critical:-8,high:-1,low:2},x={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},S=/@import/,C=e=>e===``||e===!0;function w(e,t){if(typeof t.tagPriority==`number`)return t.tagPriority;let n=100,r=b[t.tagPriority]||0,i=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:x;if(t.tag in y)n=y[t.tag];else if(t.tag===`meta`){let e=t.props[`http-equiv`]===`content-security-policy`?`content-security-policy`:t.props.charset?`charset`:t.props.name===`viewport`?`viewport`:null;e&&(n=x.meta[e])}else if(t.tag===`link`&&t.props.rel)n=i.link[t.props.rel];else if(t.tag===`script`){let e=String(t.props.type);C(t.props.async)?n=i.script.async:t.props.src&&!C(t.props.defer)&&!C(t.props.async)&&e!==`module`&&!e.endsWith(`json`)||t.innerHTML&&!e.endsWith(`json`)?n=i.script.sync:(C(t.props.defer)&&t.props.src&&!C(t.props.async)||e===`module`)&&(n=i.script.defer)}else t.tag===`style`&&(n=t.innerHTML&&S.test(t.innerHTML)?i.style.imported:i.style.sync);return(n||100)+r}var ee=[`name`,`property`,`http-equiv`],T=new Set([`viewport`,`description`,`keywords`,`robots`]);function E(e){let t=e.indexOf(`:`);if(t===-1)return!1;let n=e.indexOf(`:`,t+1),r=e.slice(t+1,n===-1?e.length:n);return r===`twitter`?e===`meta:twitter:image`||e.startsWith(`meta:twitter:image:`):h.has(r)}function te(e){let{props:t,tag:n}=e;if(f.has(n))return n;if(n===`link`&&t.rel===`canonical`)return`canonical`;if(n===`link`&&t.rel===`alternate`){if(t.hreflang)return`alternate:${t.hreflang}`;if(t.type)return`alternate:${t.type}:${t.href||``}`}if(t.charset)return`charset`;if(e.tag===`meta`){for(let r of ee)if(t[r]!==void 0){let i=t[r],a=i&&typeof i==`string`&&i.includes(`:`),o=i&&T.has(i);return`${n}:${i}${!(a||o)&&e.key?`:key:${e.key}`:``}`}}if(e.key)return`${n}:key:${e.key}`;if(t.id)return`${n}:id:${t.id}`;if(n===`link`&&t.rel===`alternate`)return`alternate:${t.href||``}`;if(l.has(n)){let t=e.textContent||e.innerHTML;if(t)return`${n}:content:${t}`}}function ne(e){let t=e._h||e._d;if(t)return t;let n=e.textContent||e.innerHTML;if(n)return n;let r=Object.keys(e.props).sort();return`${e.tag}:${r.map(t=>`${t}:${String(e.props[t])}`).join(`,`)}`}function re(e,t,n){typeof e==`function`&&(n&&(n===`titleTemplate`||n[0]===`o`&&n[1]===`n`)||(e=e()));let r=t?t(n,e):e;if(Array.isArray(r)){let e;for(let n=0;n<r.length;n++){let i=re(r[n],t);e?e[n]=i:i!==r[n]&&(e=r.slice(0,n),e[n]=i)}return e||r}if(r?.constructor===Object){let e;for(let n in r){let i=_(n),a=i?void 0:re(r[n],t,n);if(!e&&(i||n===`_resolver`||a!==r[n])){e={};for(let t in r){if(t===n)break;e[t]=r[t]}}e&&!i&&(e[n]=a)}return e||r}return r}var D=/[\s"'<>/=\x00-\x1F\x7F]/;function ie(e,t){let n=e===`style`?new Map:new Set;function r(t){if(t==null||t===void 0)return;let r=String(t).trim();if(r){if(e===`style`){let[e,...t]=r.split(`:`).map(e=>e?e.trim():``);e&&t.length&&n.set(e,t.join(`:`))}else r.split(` `).filter(Boolean).forEach(e=>n.add(e))}}return typeof t==`string`?e===`style`?t.split(`;`).forEach(r):r(t):Array.isArray(t)?t.forEach(e=>r(e)):t&&typeof t==`object`&&Object.entries(t).forEach(([t,i])=>{i&&i!==`false`&&(e===`style`?n.set(String(t).trim(),String(i)):r(t))}),n}function ae(e,t){if(e.props=e.props||{},!t)return e;if(e.tag===`templateParams`)return e.props=t,e;let n=u.has(e.tag)||e.tag===`htmlAttrs`||e.tag===`bodyAttrs`;for(let r of Object.keys(t)){if(_(r))continue;let i=r.startsWith(`data-`),a=n&&!p.has(r),o=a&&!i?r.toLowerCase():r;if(a&&(!o||D.test(o)))continue;let s=t[r];if(s===null){e.props[o]=null;continue}if(r===`class`||r===`style`){e.props[r]=ie(r,s);continue}if(p.has(r)){if((r===`textContent`||r===`innerHTML`)&&typeof s==`object`){let n=t.type;if(t.type||(n=`application/json`),!n?.endsWith(`json`)&&n!==`speculationrules`)continue;t.type=n,e.props.type=n,e[r]=JSON.stringify(s)}else e[r]=s;continue}let c=String(s),l=e.tag===`meta`&&o===`content`;c===`true`||c===``?e.props[o]=i||l?c:!0:!s&&i&&c===`false`?e.props[o]=`false`:s!==void 0&&(e.props[o]=s)}return e}function oe(e,t){let n=ae({tag:e,props:{}},typeof t==`object`&&typeof t!=`function`?t:{[e===`script`||e===`noscript`||e===`style`?`innerHTML`:`textContent`]:t});return n.key&&c.has(n.tag)&&(n.props[`data-hid`]=n._h=n.key),n.tag===`script`&&typeof n.innerHTML==`object`&&(n.innerHTML=JSON.stringify(n.innerHTML),n.props.type=n.props.type||`application/json`),Array.isArray(n.props.content)?n.props.content.map(e=>({...n,props:{...n.props,content:e}})):n}function se(e,t){if(!e)return[];typeof e==`function`&&(e=e());let n=(e,n)=>{for(let r=0;r<t.length;r++)n=t[r](e,n);return n};e=n(void 0,e);let r=[];return e=re(e,n),Object.entries(e||{}).forEach(([e,t])=>{if(t!==void 0)for(let n of Array.isArray(t)?t:[t])r.push(oe(e,n))}),r.flat()}function ce(e,t){let n=typeof t==`function`?t(e):t,r=n.key||String(e.plugins.size+1);e.plugins.get(r)||(e.plugins.set(r,n),e.hooks.addHooks(n.hooks||{}))}function le(e={}){let t=s();t.addHooks(e.hooks||{});let n=!e.document,r=new Map,i=new Map,a=new Set,o={_entryCount:1,plugins:i,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:r,headEntries(){return[...r.values()]},use:e=>ce(o,e),push(e,i){let s={...i||{}};delete s.head;let c=s._index??o._entryCount++,l={_i:c,input:e,options:s},u={_poll(e=!1){o.dirty=!0,!e&&a.add(c),t.callHook(`entries:updated`,o)},dispose(){r.delete(c)&&o.invalidate()},patch(e){(!s.mode||s.mode===`server`&&n||s.mode===`client`&&!n)&&(l.input=e,r.set(c,l),u._poll())}};return u.patch(e),u},async resolveTags(){let n={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await t.callHook(`entries:resolve`,n);a.size;){let n=a.values().next().value;a.delete(n);let i=r.get(n);if(i){let n={tags:se(i.input,e.propResolvers||[]).map(e=>Object.assign(e,i.options)),entry:i};await t.callHook(`entries:normalize`,n),i._tags=n.tags.map((e,t)=>(e._w=w(o,e),e._p=(i._i<<10)+t,e._d=te(e),e._d||(e._h=ne(e)),e))}}let i=!1;n.entries.flatMap(e=>(e._tags||[]).map(e=>({...e,props:{...e.props}}))).sort(v).reduce((e,t)=>{let n=t._d||t._h;if(!e.has(n))return e.set(n,t);let r=e.get(n);if((t?.tagDuplicateStrategy||(m.has(t.tag)?`merge`:null)||(t.key&&t.key===r.key?`merge`:null))===`merge`){let i={...r.props};Object.entries(t.props).forEach(([e,t])=>i[e]=e===`style`?new Map([...r.props.style||new Map,...t]):e===`class`?new Set([...r.props.class||new Set,...t]):t),e.set(n,{...t,props:i})}else t._p>>10==r._p>>10&&t.tag===`meta`&&E(n)?(e.set(n,Object.assign([...Array.isArray(r)?r:[r],t],t)),i=!0):(t._w===r._w?t._p>r._p:t?._w<r?._w)&&e.set(n,t);return e},n.tagMap);let s=n.tagMap.get(`title`),c=n.tagMap.get(`titleTemplate`);if(o._title=s?.textContent,c){let e=c?.textContent;if(o._titleTemplate=e,e){let t=typeof e==`function`?e(s?.textContent):e;typeof t==`string`&&!o.plugins.has(`template-params`)&&(t=t.replace(`%s`,s?.textContent||``)),s?t===null?n.tagMap.delete(`title`):n.tagMap.set(`title`,{...s,textContent:t}):(c.tag=`title`,c.textContent=t)}}n.tags=Array.from(n.tagMap.values()),i&&(n.tags=n.tags.flat().sort(v)),await t.callHook(`tags:beforeResolve`,n),await t.callHook(`tags:resolve`,n),await t.callHook(`tags:afterResolve`,n);let l=[];for(let e of n.tags){let{innerHTML:t,tag:n,props:r}=e;d.has(n)&&(Object.keys(r).length!==0||g(e.innerHTML)||g(e.textContent))&&(n!==`meta`||g(r.content)||r[`http-equiv`]||r.charset)&&(n===`script`&&t&&(String(r.type).endsWith(`json`)?e.innerHTML=(typeof t==`string`?t:JSON.stringify(t)).replace(/</g,`\\u003C`):typeof t==`string`&&(e.innerHTML=t.replace(RegExp(`</${n}`,`g`),`<\\/${n}`)),e._d=te(e)),l.push(e))}return l},invalidate(){for(let e of r.values())a.add(e._i);o.dirty=!0,t.callHook(`entries:updated`,o)}};return(e?.plugins||[]).forEach(e=>ce(o,e)),o.hooks.callHook(`init`,o),e.init?.forEach(e=>e&&o.push(e)),o}async function ue(e,t={}){let n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;let r={shouldRender:!0,tags:[]};if(await e.hooks.callHook(`dom:beforeRender`,r),r.shouldRender)return e._domUpdatePromise||=new Promise(async t=>{let r=new Map,i=new Promise(t=>{e.resolveTags().then(e=>{t(e.map(e=>{let t=r.get(e._d)||0,n={tag:e,id:(t?`${e._d}:${t}`:e._d)||e._h,shouldRender:!0};return e._d&&E(e._d)&&r.set(e._d,t+1),n}))})}),a=e._dom;if(!a){a={title:n.title,elMap:new Map().set(`htmlAttrs`,n.documentElement).set(`bodyAttrs`,n.body)};for(let e of[`body`,`head`]){let t=n[e]?.children;for(let e of t){let t=e.tagName.toLowerCase();if(!u.has(t))continue;let n=ae({tag:t,props:{}},{innerHTML:e.innerHTML,...e.getAttributeNames().reduce((t,n)=>(t[n]=e.getAttribute(n),t),{})||{}});if(n.key=e.getAttribute(`data-hid`)||void 0,n._d=te(n)||ne(n),a.elMap.has(n._d)){let t=1,r=n._d;for(;a.elMap.has(r);)r=`${n._d}:${t++}`;a.elMap.set(r,e)}else a.elMap.set(n._d,e)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function o(e,t,n){let r=`${e}:${t}`;a.sideEffects[r]=n,delete a.pendingSideEffects[r]}function s({id:e,$el:t,tag:r}){let i=r.tag.endsWith(`Attrs`);a.elMap.set(e,t),i||(r.textContent&&r.textContent!==t.textContent&&(t.textContent=r.textContent),r.innerHTML&&r.innerHTML!==t.innerHTML&&(t.innerHTML=r.innerHTML),o(e,`el`,()=>{t?.remove(),a.elMap.delete(e)}));for(let a in r.props){if(!Object.prototype.hasOwnProperty.call(r.props,a))continue;let s=r.props[a];if(a.startsWith(`on`)&&typeof s==`function`){let e=t?.dataset;if(e&&e[`${a}fired`]){let e=a.slice(0,-5);s.call(t,new Event(e.substring(2)))}t.getAttribute(`data-${a}`)!==``&&((r.tag===`bodyAttrs`?n.defaultView:t).addEventListener(a.substring(2),s.bind(t)),t.setAttribute(`data-${a}`,``));continue}let c=`attr:${a}`;if(a===`class`){if(!s)continue;for(let n of s)i&&o(e,`${c}:${n}`,()=>t.classList.remove(n)),!t.classList.contains(n)&&t.classList.add(n)}else if(a===`style`){if(!s)continue;for(let[n,r]of s)o(e,`${c}:${n}`,()=>{t.style.removeProperty(n)}),t.style.setProperty(n,r)}else s!==!1&&s!==null&&(t.getAttribute(a)!==s&&t.setAttribute(a,s===!0?``:String(s)),i&&o(e,c,()=>t.removeAttribute(a)))}}let c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await i;for(let e of d){let{tag:t,shouldRender:r,id:i}=e;r&&(t.tag===`title`?(n.title=t.textContent,o(`title`,``,()=>n.title=a.title)):(e.$el=e.$el||a.elMap.get(i),e.$el?s(e):u.has(t.tag)&&c.push(e)))}for(let e of c){let t=e.tag.tagPosition||`head`;e.$el=n.createElement(e.tag.tag),s(e),l[t]=l[t]||n.createDocumentFragment(),l[t].appendChild(e.$el)}for(let t of d)await e.hooks.callHook(`dom:renderTag`,t,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose);for(let e in a.pendingSideEffects)a.pendingSideEffects[e]();e._dom=a,await e.hooks.callHook(`dom:rendered`,{renders:d}),t()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1}),e._domUpdatePromise}function de(e={}){let t=e.domOptions?.render||ue;e.document=e.document||(typeof window<`u`?document:void 0);let n=e.document?.head.querySelector(`script[id="unhead:payload"]`)?.innerHTML||!1,r=le({...e,plugins:[...e.plugins||[],{key:`client`,hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]});return r.ssr=!1,r}function fe(e,t){let n=0;return()=>{let r=++n;t(()=>{n===r&&e()})}}function pe(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var O={},me=[],he=()=>{},ge=()=>!1,_e=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ve=e=>e.startsWith(`onUpdate:`),k=Object.assign,ye=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},be=Object.prototype.hasOwnProperty,A=(e,t)=>be.call(e,t),j=Array.isArray,xe=e=>De(e)===`[object Map]`,Se=e=>De(e)===`[object Set]`,Ce=e=>De(e)===`[object Date]`,M=e=>typeof e==`function`,N=e=>typeof e==`string`,we=e=>typeof e==`symbol`,P=e=>typeof e==`object`&&!!e,Te=e=>(P(e)||M(e))&&M(e.then)&&M(e.catch),Ee=Object.prototype.toString,De=e=>Ee.call(e),Oe=e=>De(e).slice(8,-1),ke=e=>De(e)===`[object Object]`,Ae=e=>N(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,je=pe(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),Me=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ne=/-\w/g,Pe=Me(e=>e.replace(Ne,e=>e.slice(1).toUpperCase())),Fe=/\B([A-Z])/g,Ie=Me(e=>e.replace(Fe,`-$1`).toLowerCase()),Le=Me(e=>e.charAt(0).toUpperCase()+e.slice(1)),Re=Me(e=>e?`on${Le(e)}`:``),ze=(e,t)=>!Object.is(e,t),Be=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ve=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},He=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Ue=e=>{let t=N(e)?Number(e):NaN;return isNaN(t)?e:t},We,Ge=()=>We||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function Ke(e){if(j(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=N(r)?Xe(r):Ke(r);if(i)for(let e in i)t[e]=i[e]}return t}if(N(e)||P(e))return e}var qe=/;(?![^(]*\))/g,Je=/:([^]+)/,Ye=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Xe(e){let t={};return e.replace(Ye,e=>e.startsWith(`/*`)?``:e).split(qe).forEach(e=>{if(e){let n=e.split(Je);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ze(e){let t=``;if(N(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){let r=Ze(e[n]);r&&(t+=r+` `)}else if(P(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var Qe=pe(`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`);function $e(e){return!!e||e===``}function et(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=it(e[i],t[i],n);return r}function tt(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&it(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function nt(e,t,n){let r=xe(e),i=xe(t);if(r||i||(r=Se(e),i=Se(t),r||i))return r&&i?tt(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!it(e[r],t[r],n))return!1}return String(e)===String(t)}function rt(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function it(e,t,n){if(e===t)return!0;let r=Ce(e),i=Ce(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=we(e),i=we(t),r||i?e===t:(r=j(e),i=j(t),r||i?r&&i?rt(e,t,n,et):!1:(r=P(e),i=P(t),r||i?!r||!i?!1:rt(e,t,n,nt):String(e)===String(t))))}var at=e=>!!(e&&e.__v_isRef===!0),ot=e=>N(e)?e:e==null?``:j(e)||P(e)&&(e.toString===Ee||!M(e.toString))?at(e)?ot(e.value):JSON.stringify(e,st,2):String(e),st=(e,t)=>at(t)?st(e,t.value):xe(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ct(t,r)+` =>`]=n,e),{})}:Se(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ct(e))}:we(t)?ct(t):P(t)&&!j(t)&&!ke(t)?String(t):t,ct=(e,t=``)=>we(e)?`Symbol(${e.description??t})`:e,F,lt=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&F&&(F.active?(this.parent=F,this.index=(F.scopes||(F.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=F;try{return F=this,e()}finally{F=t}}}on(){++this._on===1&&(this.prevScope=F,F=this)}off(){if(this._on>0&&--this._on===0){if(F===this)F=this.prevScope;else{let e=F;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ut(){return F}var I,dt=new WeakSet,ft=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,F&&(F.active?F.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dt.has(this)&&(dt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gt(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kt(this),yt(this);let e=I,t=Tt;I=this,Tt=!0;try{return this.fn()}finally{bt(this),I=e,Tt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ct(e);this.deps=this.depsTail=void 0,kt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xt(this)&&this.run()}get dirty(){return xt(this)}},pt=0,mt,ht;function gt(e,t=!1){e.flags|=8,t?(e.next=ht,ht=e):(e.next=mt,mt=e)}function _t(){pt++}function vt(){if(--pt>0)return;if(ht){let e=ht;for(ht=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;mt;){let t=mt;for(mt=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function yt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function bt(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ct(r),wt(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function xt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(St(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function St(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===At)||(e.globalVersion=At,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!xt(e))))return;e.flags|=2;let t=e.dep,n=I,r=Tt;I=e,Tt=!0;try{yt(e);let n=e.fn(e._value);(t.version===0||ze(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{I=n,Tt=r,bt(e),e.flags&=-3}}function Ct(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ct(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function wt(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Tt=!0,Et=[];function Dt(){Et.push(Tt),Tt=!1}function Ot(){let e=Et.pop();Tt=e===void 0||e}function kt(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=I;I=void 0;try{t()}finally{I=e}}}var At=0,jt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Mt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!I||!Tt||I===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==I)t=this.activeLink=new jt(I,this),I.deps?(t.prevDep=I.depsTail,I.depsTail.nextDep=t,I.depsTail=t):I.deps=I.depsTail=t,Nt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=I.depsTail,t.nextDep=void 0,I.depsTail.nextDep=t,I.depsTail=t,I.deps===t&&(I.deps=e)}return t}trigger(e){this.version++,At++,this.notify(e)}notify(e){_t();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{vt()}}};function Nt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Nt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Pt=new WeakMap,Ft=Symbol(``),It=Symbol(``),Lt=Symbol(``);function L(e,t,n){if(Tt&&I){let t=Pt.get(e);t||Pt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Mt),r.map=t,r.key=n),r.track()}}function Rt(e,t,n,r,i,a){let o=Pt.get(e);if(!o){At++;return}let s=e=>{e&&e.trigger()};if(_t(),t===`clear`)o.forEach(s);else{let i=j(e),a=i&&Ae(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Lt||!we(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Lt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ft)),xe(e)&&s(o.get(It)));break;case`delete`:i||(s(o.get(Ft)),xe(e)&&s(o.get(It)));break;case`set`:xe(e)&&s(o.get(Ft))}}vt()}function zt(e){let t=R(e);return t===e||(L(t,`iterate`,Lt),En(e))?t:Tn(e)?wn(e)?t.map(e=>An(kn(e))):t.map(An):t.map(kn)}function Bt(e){return L(e=R(e),`iterate`,Lt),e}function Vt(e,t){return Tn(e)?An(wn(e)?kn(t):t):kn(t)}var Ht={__proto__:null,[Symbol.iterator](){return Ut(this,Symbol.iterator,e=>Vt(this,e))},concat(...e){return zt(this).concat(...e.map(e=>j(e)?zt(e):e))},entries(){return Ut(this,`entries`,e=>(e[1]=Vt(this,e[1]),e))},every(e,t){return Kt(this,`every`,e,t,void 0,arguments)},filter(e,t){return Kt(this,`filter`,e,t,e=>e.map(e=>Vt(this,e)),arguments)},find(e,t){return Kt(this,`find`,e,t,e=>Vt(this,e),arguments)},findIndex(e,t){return Kt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Kt(this,`findLast`,e,t,e=>Vt(this,e),arguments)},findLastIndex(e,t){return Kt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Kt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Jt(this,`includes`,e)},indexOf(...e){return Jt(this,`indexOf`,e)},join(e){return zt(this).join(e)},lastIndexOf(...e){return Jt(this,`lastIndexOf`,e)},map(e,t){return Kt(this,`map`,e,t,void 0,arguments)},pop(){return Yt(this,`pop`)},push(...e){return Yt(this,`push`,e)},reduce(e,...t){return qt(this,`reduce`,e,t)},reduceRight(e,...t){return qt(this,`reduceRight`,e,t)},shift(){return Yt(this,`shift`)},some(e,t){return Kt(this,`some`,e,t,void 0,arguments)},splice(...e){return Yt(this,`splice`,e)},toReversed(){return zt(this).toReversed()},toSorted(e){return zt(this).toSorted(e)},toSpliced(...e){return zt(this).toSpliced(...e)},unshift(...e){return Yt(this,`unshift`,e)},values(){return Ut(this,`values`,e=>Vt(this,e))}};function Ut(e,t,n){let r=Bt(e),i=r[t],a=i.call(r);if(r!==e&&!En(e)){if(a[Symbol.toStringTag]===`Array Iterator`){let e=Object.create(Object.getPrototypeOf(a));return e.next=()=>Wt(a.next(),n),i!==Gt[t]&&Object.defineProperties(e,{return:{get(){let e=a.return;return typeof e==`function`?e.bind(a):e}},throw:{get(){let e=a.throw;return typeof e==`function`?e.bind(a):e}}}),e}a._next=a.next,a.next=()=>Wt(a._next(),n)}return a}function Wt(e,t){return e.done||(e.value=t(e.value)),e}var Gt=Array.prototype;function Kt(e,t,n,r,i,a){let o=Bt(e),s=o!==e&&!En(e),c=o[t];if(c!==Gt[t]){let t=c.apply(e,a);return s?kn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Vt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function qt(e,t,n,r){let i=Bt(e),a=i!==e&&!En(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Vt(e,t)),n.call(this,t,Vt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Vt(e,c):c}function Jt(e,t,n){let r=R(e);L(r,`iterate`,Lt);let i=r[t](...n);return(i===-1||i===!1)&&Dn(n[0])?(n[0]=R(n[0]),r[t](...n)):i}function Yt(e,t,n=[]){Dt(),_t();let r=R(e)[t].apply(e,n);return vt(),Ot(),r}var Xt=pe(`__proto__,__v_isRef,__isVue`),Zt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(we));function Qt(e){we(e)||(e=String(e));let t=R(this);return L(t,`has`,e),t.hasOwnProperty(e)}var $t=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?vn:_n:i?gn:hn).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=j(e);if(!r){let e;if(a&&(e=Ht[t]))return e;if(t===`hasOwnProperty`)return Qt}let o=Reflect.get(e,t,z(e)?e:n);if((we(t)?Zt.has(t):Xt(t))||(r||L(e,`get`,t),i))return o;if(z(o)){let e=a&&Ae(t)?o:o.value;return r&&P(e)?Sn(e):e}return P(o)?r?Sn(o):bn(o):o}},en=class extends $t{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=j(e)&&Ae(t);if(!this._isShallow){let e=Tn(i);if(!En(n)&&!Tn(n)&&(i=R(i),n=R(n)),!a&&z(i)&&!z(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:A(e,t),s=Reflect.set(e,t,n,z(e)?e:r);return e===R(r)&&s&&(o?ze(n,i)&&Rt(e,`set`,t,n,i):Rt(e,`add`,t,n)),s}deleteProperty(e,t){let n=A(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Rt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return we(t)&&Zt.has(t)||L(e,`has`,t),n}ownKeys(e){return L(e,`iterate`,j(e)?`length`:Ft),Reflect.ownKeys(e)}},tn=class extends $t{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},nn=new en,rn=new tn,an=new en(!0),on=e=>e,sn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n){return function(...r){let i=this.__v_raw,a=R(i),o=xe(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?on:t?An:kn;return!t&&L(a,`iterate`,c?It:Ft),k(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function ln(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function un(e,t){let n={get(n){let r=this.__v_raw,i=R(r),a=R(n);e||(ze(n,a)&&L(i,`get`,n),L(i,`get`,a));let{has:o}=sn(i),s=t?on:e?An:kn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&L(R(t),`iterate`,Ft),t.size},has(t){let n=this.__v_raw,r=R(n),i=R(t);return e||(ze(t,i)&&L(r,`has`,t),L(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=R(a),s=t?on:e?An:kn;return!e&&L(o,`iterate`,Ft),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return k(n,e?{add:ln(`add`),set:ln(`set`),delete:ln(`delete`),clear:ln(`clear`)}:{add(e){let n=R(this),r=sn(n),i=R(e),a=!t&&!En(e)&&!Tn(e)?i:e;return r.has.call(n,a)||ze(e,a)&&r.has.call(n,e)||ze(i,a)&&r.has.call(n,i)||(n.add(a),Rt(n,`add`,a,a)),this},set(e,n){t||En(n)||Tn(n)||(n=R(n));let r=R(this),{has:i,get:a}=sn(r),o=i.call(r,e);o||=(e=R(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?ze(n,s)&&Rt(r,`set`,e,n,s):Rt(r,`add`,e,n),this},delete(e){let t=R(this),{has:n,get:r}=sn(t),i=n.call(t,e);i||=(e=R(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Rt(t,`delete`,e,void 0,a),o},clear(){let e=R(this),t=e.size!==0,n=e.clear();return t&&Rt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=cn(r,e,t)}),n}function dn(e,t){let n=un(e,t);return(r,i,a)=>i===`__v_isReactive`?!e:i===`__v_isReadonly`?e:i===`__v_isShallow`?t:i===`__v_raw`?r:Reflect.get(A(n,i)&&i in r?n:r,i,a)}var fn={get:dn(!1,!1)},pn={get:dn(!1,!0)},mn={get:dn(!0,!1)},hn=new WeakMap,gn=new WeakMap,_n=new WeakMap,vn=new WeakMap;function yn(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function bn(e){return Tn(e)?e:Cn(e,!1,nn,fn,hn)}function xn(e){return Cn(e,!1,an,pn,gn)}function Sn(e){return Cn(e,!0,rn,mn,_n)}function Cn(e,t,n,r,i){if(!P(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=yn(Oe(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function wn(e){return Tn(e)?wn(e.__v_raw):!!(e&&e.__v_isReactive)}function Tn(e){return!!(e&&e.__v_isReadonly)}function En(e){return!!(e&&e.__v_isShallow)}function Dn(e){return e?!!e.__v_raw:!1}function R(e){let t=e&&e.__v_raw;return t?R(t):e}function On(e){return!A(e,`__v_skip`)&&Object.isExtensible(e)&&Ve(e,`__v_skip`,!0),e}var kn=e=>P(e)?bn(e):e,An=e=>P(e)?Sn(e):e;function z(e){return e?e.__v_isRef===!0:!1}function jn(e){return Nn(e,!1)}function Mn(e){return Nn(e,!0)}function Nn(e,t){return z(e)?e:new Pn(e,t)}var Pn=class{constructor(e,t){this.dep=new Mt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:R(e),this._value=t?e:kn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||En(e)||Tn(e);e=n?e:R(e),ze(e,t)&&(this._rawValue=e,this._value=n?e:kn(e),this.dep.trigger())}};function B(e){return z(e)?e.value:e}function Fn(e){return M(e)?e():B(e)}var In={get:(e,t,n)=>t===`__v_raw`?e:B(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return z(i)&&!z(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ln(e){return wn(e)?e:new Proxy(e,In)}var Rn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Mt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=At-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&I!==this)return gt(this,!0),!0}get value(){let e=this.dep.track();return St(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function zn(e,t,n=!1){let r,i;return M(e)?r=e:(r=e.get,i=e.set),new Rn(r,i,n)}var Bn={},Vn=new WeakMap,Hn=void 0;function Un(e,t=!1,n=Hn){if(n){let t=Vn.get(n);t||Vn.set(n,t=[]),t.push(e)}}function Wn(e,t,n=O){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:En(e)||i===!1||i===0?Gn(e,1):Gn(e),u,d,f,p,m=!1,h=!1;if(z(e)?(d=()=>e.value,m=En(e)):wn(e)?(d=()=>l(e),m=!0):j(e)?(h=!0,m=e.some(e=>wn(e)||En(e)),d=()=>e.map(e=>{if(z(e))return e.value;if(wn(e))return l(e);if(M(e))return c?c(e,2):e()})):d=M(e)?t?c?()=>c(e,2):e:()=>{if(f){Dt();try{f()}finally{Ot()}}let t=Hn;Hn=u;try{return c?c(e,3,[p]):e(p)}finally{Hn=t}}:he,t&&i){let e=d,t=i===!0?1/0:i;d=()=>Gn(e(),t)}let g=ut(),_=()=>{u.stop(),g&&g.active&&ye(g.effects,u)};if(a&&t){let e=t;t=(...t)=>{try{return e(...t)}finally{_()}}}let v=h?Array(e.length).fill(Bn):Bn,y=e=>{if(u.flags&1&&(u.dirty||e)){if(t){let n=u.run();if(e||i||m||(h?n.some((e,t)=>ze(e,v[t])):ze(n,v))){let e=Hn;Dt();try{f&&f(),Hn=u;let e=[n,v===Bn?void 0:h&&v[0]===Bn?[]:v,p];v=n,c?c(t,3,e):t(...e)}finally{Hn=e,Ot()}}}else u.run()}};return s&&s(y),u=new ft(d),u.scheduler=o?()=>o(y,!1):y,p=e=>Un(e,!1,u),f=u.onStop=()=>{let e=Vn.get(u);if(e){if(c)c(e,4);else for(let t of e)t();Vn.delete(u)}},t?r?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Gn(e,t=1/0,n){if(t<=0||!P(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,z(e))Gn(e.value,t,n);else if(j(e))for(let r=0;r<e.length;r++)Gn(e[r],t,n);else if(Se(e)||xe(e))e.forEach(e=>{Gn(e,t,n)});else if(ke(e)){for(let r in e)Gn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gn(e[r],t,n)}return e}function Kn(e,t,n,r){try{return r?e(...r):e()}catch(e){Jn(e,t,n)}}function qn(e,t,n,r){if(M(e)){let i=Kn(e,t,n,r);return i&&Te(i)&&i.catch(e=>{Jn(e,t,n)}),i}if(j(e)){let i=[];for(let a=0;a<e.length;a++)i.push(qn(e[a],t,n,r));return i}}function Jn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||O;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){Dt(),Kn(a,null,10,[e,i,o]),Ot();return}}Yn(e,n,i,r,o)}function Yn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var V=[],Xn=-1,Zn=[],Qn=null,$n=0,er=Promise.resolve(),tr=null;function nr(e){let t=tr||er;return e?t.then(this?e.bind(this):e):t}function rr(e){let t=Xn+1,n=V.length;for(;t<n;){let r=t+n>>>1,i=V[r],a=dr(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function ir(e){if(!(e.flags&1)){let t=dr(e),n=V[V.length-1];!n||!(e.flags&2)&&t>=dr(n)?V.push(e):V.splice(rr(t),0,e),e.flags|=1,ar()}}function ar(){tr||=er.then(fr)}function or(e){if(!j(e))Qn&&e.id===-1?Qn.splice($n+1,0,e):e.flags&1||(Zn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Zn.push(e[t]);ar()}function sr(e,t,n,r=Xn+1){for(;r<V.length;r++){let n=V[r];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;V.splice(r,1),r=e?r-1:Xn,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function cr(e,t,n=0){if(Zn.length){let e=Zn,r=0;if(t){e=[];for(let i=0;i<Zn.length;i++){let a=Zn[i];(a.i===void 0?t.has(a):!a.i||a.i.uid<n)?Zn[r++]=a:e.push(a)}}let i=[...new Set(e)].sort((e,t)=>dr(e)-dr(t));if(Zn.length=r,Qn){for(let e=0;e<i.length;e++)Qn.push(i[e]);return}for(Qn=i,$n=0;$n<Qn.length;$n++){let e=Qn[$n];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Qn=null,$n=0}}var lr=!1;function ur(e,t){if(lr){e();return}let n=t===void 0?void 0:new Set(Zn);e(),lr=!0;try{sr(void 0,t),cr(void 0,n,t)}finally{lr=!1}}var dr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fr(e){try{for(Xn=0;Xn<V.length;Xn++){let e=V[Xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xn<V.length;Xn++){let e=V[Xn];e&&(e.flags&=-2)}Xn=-1,V.length=0,cr(e),tr=null,(V.length||Zn.length)&&fr(e)}}var pr=null,mr=null;function hr(e){let t=pr;return pr=e,mr=e&&e.type.__scopeId||null,t}function gr(e,t=pr,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&so(-1);let i=hr(t),a=no.length,o;try{o=e(...n)}finally{for(let e=no.length;e>a;e--)ao();hr(i),r._d&&so(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _r(e,t){if(pr===null)return e;let n=Wo(pr),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=O]=t[e];i&&(M(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function vr(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Dt(),qn(c,n,8,[e.el,s,e,t]),Ot())}}function yr(e,t){if(K){let n=K.provides,r=K.parent&&K.parent.provides;r===n&&(n=K.provides=Object.create(r)),n[e]=t}}function br(e,t,n=!1){let r=jo();if(r||ca){let i=ca?ca._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&M(t)?t.call(r&&r.proxy):t}}function xr(){return!!(jo()||ca)}var Sr=Symbol.for(`v-scx`),Cr=()=>br(Sr);function wr(e,t){return Er(e,null,t)}function Tr(e,t,n){return Er(e,t,n)}function Er(e,t,n=O){let{immediate:r,deep:i,flush:a,once:o}=n,s=k({},n),c=t&&r||!t&&a!==`post`,l;if(Lo){if(a===`sync`){let e=Cr();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=he,e.resume=he,e.pause=he,e}}let u=K;s.call=(e,t,n)=>qn(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{e.i=u,Ba(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():ir(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=Wn(e,t,s);return Lo&&(l?l.push(f):c&&f()),f}function Dr(e,t,n){let r=this.proxy,i=N(e)?e.includes(`.`)?Or(r,e):()=>r[e]:e.bind(r,r),a;M(t)?a=t:(a=t.handler,n=t);let o=Po(this),s=Er(i,a.bind(r),n);return o(),s}function Or(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var kr=Symbol(`_vte`),Ar=e=>e.__isTeleport,jr=Symbol(`_leaveCb`),Mr=Symbol(`_enterCb`);function Nr(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ci(()=>{e.isMounted=!0}),Ei(()=>{e.isUnmounting=!0}),e}var Pr=[Function,Array],Fr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pr,onEnter:Pr,onAfterEnter:Pr,onEnterCancelled:Pr,onBeforeLeave:Pr,onLeave:Pr,onAfterLeave:Pr,onLeaveCancelled:Pr,onBeforeAppear:Pr,onAppear:Pr,onAfterAppear:Pr,onAppearCancelled:Pr},Ir={name:`BaseTransition`,props:Fr,setup(e,{slots:t}){let n=jo(),r=Nr();return()=>{let i=t.default&&Wr(t.default(),!0),a=i&&i.length?Lr(i):n.subTree?xo():void 0;if(!a)return;let o=R(e),{mode:s}=o;if(r.isLeaving)return Vr(a);let c=Hr(a);if(!c)return Vr(a);let l=Br(c,o,r,n,e=>l=e);c.type!==U&&Ur(c,l);let u=n.subTree&&Hr(n.subTree);if(u&&u.type!==U&&!po(u,c)&&Gr(n.subTree)){let e=Br(u,o,r,n);if(Ur(u,e),s===`out-in`&&c.type!==U)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},Vr(a);s===`in-out`&&c.type!==U?e.delayLeave=(e,t,n)=>{let i=zr(r,u);i[String(u.key)]=u,e[jr]=()=>{t(),e[jr]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Lr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==U){t=n;break}}return t}var Rr=Ir;function zr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Br(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),x=zr(n,e),S=(e,t)=>{e&&qn(e,r,9,t)},C=(e,t)=>{let n=t[1];S(e,t),j(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},w={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=g||c;else return}t[jr]&&t[jr](!0);let i=x[b];if(i&&po(e,i)){let e=i.el[jr];if(!e){let t=Gr(i);e=t&&t.el[jr]}e&&e()}S(r,[t])},enter(t){if(x[b]===e)return;let r=l,i=u,o=d;if(!n.isMounted){if(a)r=_||l,i=v||u,o=y||d;else return}let s=!1;t[Mr]=e=>{s||(s=!0,S(e?o:i,[t]),w.delayedLeave&&w.delayedLeave(),t[Mr]=void 0)};let c=t[Mr].bind(null,!1);r?C(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[Mr]&&t[Mr](!0),n.isUnmounting)return r();S(f,[t]);let a=!1;t[jr]=n=>{a||(a=!0,r(),S(n?h:m,[t]),t[jr]=void 0,x[i]===e&&delete x[i])};let o=t[jr].bind(null,!1);x[i]=e,p?C(p,[t,o]):o()},clone(e){let a=Br(e,t,n,r,i);return i&&i(a),a}};return w}function Vr(e){if(hi(e))return e=vo(e),e.children=null,e}function Hr(e){if(!hi(e))return Ar(e.type)&&e.children?Lr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&M(n.default))return n.default()}}function Ur(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Ur(Ar(n.type)&&Hr(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===H&&j(e.children)){let n=ha(e.children,!1);n&&Ur(n,t)}}function Wr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===H?(o.patchFlag&128&&i++,r=r.concat(Wr(o.children,t,s))):(t||o.type!==U)&&r.push(s==null?o:vo(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function Gr(e){if(e.component)return Gr(e.component.subTree);if(e.type===H){let t=j(e.children)&&ha(e.children,!1);return t?Gr(t):void 0}if(e.type!==U)return e}function Kr(e,t){return M(e)?k({name:e.name},t,{setup:e}):e}function qr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Jr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Yr=new WeakMap;function Xr(e,t,n,r,i=!1){if(j(e)){e.forEach((e,a)=>Xr(e,t&&(j(t)?t[a]:t),n,r,i));return}if(mi(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Xr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?Wo(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===O?s.refs={}:s.refs,d=s.setupState,f=R(d),p=d===O?ge:e=>!Jr(u,e)&&A(f,e),m=(e,t)=>!(t&&Jr(u,t));if(l!=null&&l!==c){if(Zr(t),N(l))u[l]=null,p(l)&&(d[l]=null);else if(z(l)){let e=t;m(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(M(c))Kn(c,s,12,[o,u]);else{let t=N(c),r=z(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)j(n)&&ye(n,a);else if(j(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Yr.delete(e)};t.id=-1,Yr.set(e,t),Ba(t,n)}else Zr(e),s()}}}function Zr(e){let t=Yr.get(e);t&&(t.flags|=8,Yr.delete(e))}var Qr=!1,$r=()=>{Qr||=(console.error(`Hydration completed but contains mismatches.`),!0)},ei=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,ti=e=>e.namespaceURI.includes(`MathML`),ni=e=>{if(e.nodeType===1){if(ei(e))return`svg`;if(ti(e))return`mathml`}},ri=e=>e.nodeType===8;function ii(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:s,insert:c,createComment:l}}=e,u=(e,t)=>{t.hasChildNodes()?(d(t.firstChild,e,null,null,null),cr(),t._vnode=e):(n(null,e,t),cr(),t._vnode=e)},d=(n,r,s,l,u,y=!1)=>{y||=!!r.dynamicChildren;let b=ri(n)&&n.data===`[`,x=()=>h(n,r,s,l,u,b),{type:S,ref:C,shapeFlag:w,patchFlag:ee}=r,T=n.nodeType;r.el=n,ee===-2&&(y=!1,r.dynamicChildren=null);let E=null;switch(S){case eo:T===3?(n.data!==r.children&&($r(),n.data=r.children),E=a(n)):r.children===``?(c(r.el=i(``),o(n),n),E=n):E=x();break;case U:v(n)?(E=a(n),_(r.el=n.content.firstChild,n,s)):E=T!==8||b?x():a(n);break;case to:if(b&&(n=a(n),T=n.nodeType),T===1||T===3){E=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=E.nodeType===1?E.outerHTML:E.data),t===r.staticCount-1&&(r.anchor=E),E=a(E);return b?a(E):E}x();break;case H:E=b?m(n,r,s,l,u,y):x();break;default:if(w&1)E=(T!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!v(n)?x():f(n,r,s,l,u,y);else if(w&6){r.slotScopeIds=u;let e=o(n);if(E=b?g(n):ri(n)&&n.data===`teleport start`?g(n,n.data,`teleport end`):a(n),t(r,e,null,s,l,ni(e),y),(mi(r)||r.component.asyncDep)&&!r.component.subTree){let t;b?(t=G(to),t.anchor=E?E.previousSibling:e.lastChild):t=n.nodeType===3?yo(``):G(n.nodeType===8?U:`div`),t.el=n,r.component.subTree=t}}else w&64?E=T===8?r.type.hydrate(n,r,s,l,u,y,e,p):x():w&128&&(E=r.type.hydrate(n,r,s,l,ni(o(n)),u,y,e,d))}return C!=null&&Xr(C,null,l,r),E},f=(e,t,n,i,a,o)=>{o||=!!t.dynamicChildren;let{type:c,dynamicProps:l,props:u,patchFlag:d,shapeFlag:f,dirs:m,transition:h}=t,g=c===`input`||c===`option`,y=!!l;if(g||y||d!==-1){m&&vr(t,null,n,`created`);let c=!1;if(v(e)){c=Ka(null,h)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(c){let e=r.getAttribute(`class`);e&&(r.$cls=e),h.beforeEnter(r)}_(r,e,n),t.el=e=r}if(f&16&&!(u&&(u.innerHTML||u.textContent))){let r=p(e.firstChild,t,e,n,i,a,o);for(r&&!li(e,1)&&$r();r;){let e=r;r=r.nextSibling,s(e)}}else if(f&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(li(e,0)||$r(),e.textContent=t.children)}if(u){if(g||y||!o||d&48){let t=e.tagName.includes(`-`),i=e.namespaceURI.includes(`svg`)?`svg`:e.namespaceURI.includes(`MathML`)?`mathml`:void 0;for(let a in u)if(g&&(a.endsWith(`value`)||a===`indeterminate`)||_e(a)&&!je(a)||a[0]===`.`||t&&!je(a)||l&&l.includes(a)){if(oi(e,a,u[a]))continue;r(e,a,null,u[a],i,n)}}else if(u.onClick)r(e,`onClick`,null,u.onClick,void 0,n);else if(d&4&&wn(u.style))for(let e in u.style)u.style[e]}let b;(b=u&&u.onVnodeBeforeMount)&&Eo(b,n,t),m&&vr(t,null,n,`beforeMount`),((b=u&&u.onVnodeMounted)||m||c)&&$a(()=>{b&&Eo(b,n,t),c&&h.enter(e),m&&vr(t,null,n,`mounted`)},i)}return e.nextSibling},p=(e,t,r,o,s,l,u)=>{u||=!!t.dynamicChildren;let f=t.children,p=f.length,m=!1;for(let t=0;t<p;t++){let h=u?f[t]:f[t]=So(f[t]),g=h.type===eo;e?(g&&!u&&t+1<p&&So(f[t+1]).type===eo&&(c(i(e.data.slice(h.children.length)),r,a(e)),e.data=h.children),e=d(e,h,o,s,l,u)):g&&!h.children?c(h.el=i(``),r):(m||(m=!0,li(r,1)||$r()),n(null,h,r,null,o,s,ni(r),l))}return e},m=(e,t,n,r,i,s)=>{let{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);let d=o(e),f=p(a(e),t,d,n,r,i,s);return f&&ri(f)&&f.data===`]`?a(t.anchor=f):($r(),c(t.anchor=l(`]`),d,f),f)},h=(e,t,r,i,c,l)=>{if(di(e,t)||$r(),t.el=null,l){let t=g(e);for(;;){let n=a(e);if(n&&n!==t)s(n);else break}}let u=a(e),d=o(e);return s(e),n(null,t,d,u,r,i,ni(d),c),r&&(r.vnode.el=t.el,xa(r,t.el)),u},g=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&ri(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},_=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},v=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[u,d]}var ai=new Set([`src`,`srcset`,`href`,`poster`]);function oi(e,t,n){return ai.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}var si=`data-allow-mismatch`,ci={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function li(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(si);)e=e.parentElement;return ui(e&&e.getAttribute(si),t)}function ui(e,t){if(e==null)return!1;if(e===``)return!0;{let n=e.split(`,`);return t===0&&n.includes(`children`)?!0:n.includes(ci[t])}}function di(e,t){return li(e.parentElement,1)||fi(e)||pi(t)}function fi(e){return e.nodeType===1&&ui(e.getAttribute(si),1)}function pi({props:e}){let t=e&&e[si];return typeof t==`string`&&ui(t,1)}Ge().requestIdleCallback,Ge().cancelIdleCallback;var mi=e=>!!e.type.__asyncLoader,hi=e=>e.type.__isKeepAlive;function gi(e,t){vi(e,`a`,t)}function _i(e,t){vi(e,`da`,t)}function vi(e,t,n=K){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(bi(t,r,n),n){let e=n.parent;for(;e&&e.parent;)hi(e.parent.vnode)&&yi(r,t,n,e),e=e.parent}}function yi(e,t,n,r){let i=bi(t,e,r,!0);Di(()=>{ye(r[t],i)},n)}function bi(e,t,n=K,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Dt();let i=Po(n),a=qn(t,n,e,r);return i(),Ot(),a};return r?i.unshift(a):i.push(a),a}}var xi=e=>(t,n=K)=>{Lo&&e!==`sp`||bi(e,(...e)=>t(...e),n)},Si=xi(`bm`),Ci=xi(`m`),wi=xi(`bu`),Ti=xi(`u`),Ei=xi(`bum`),Di=xi(`um`),Oi=xi(`sp`),ki=xi(`rtg`),Ai=xi(`rtc`);function ji(e,t=K){bi(`ec`,e,t)}var Mi=`components`;function Ni(e,t){return Ii(Mi,e,!0,t)||e}var Pi=Symbol.for(`v-ndc`);function Fi(e){return N(e)?Ii(Mi,e,!1)||e:e||Pi}function Ii(e,t,n=!0,r=!1){let i=pr||K;if(i){let n=i.type;if(e===Mi){let e=Go(n,!1);if(e&&(e===t||e===Pe(t)||e===Le(Pe(t))))return n}let a=Li(i[e]||n[e],t)||Li(i.appContext[e],t);return!a&&r?n:a}}function Li(e,t){return e&&(e[t]||e[Pe(t)]||e[Le(Pe(t))])}function Ri(e,t,n,r){let i,a=n&&n[r],o=j(e);if(o||N(e)){let n=o&&wn(e),r=!1,s=!1;n&&(r=!En(e),s=Tn(e),e=Bt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?An(kn(e[n])):kn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){if(!Number.isInteger(e)||e<0)i=[];else{i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}}else if(P(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var zi=e=>e?Io(e)?Wo(e):zi(e.parent):null,Bi=k(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zi(e.parent),$root:e=>zi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Yi(e),$forceUpdate:e=>e.f||=()=>{ir(e.update)},$nextTick:e=>e.n||=nr.bind(e.proxy),$watch:e=>Dr.bind(e)}),Vi=(e,t)=>e!==O&&!e.__isScriptSetup&&A(e,t),Hi={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Vi(r,t))return o[t]=1,r[t];else if(i!==O&&A(i,t))return o[t]=2,i[t];else if(A(a,t))return o[t]=3,a[t];else if(n!==O&&A(n,t))return o[t]=4,n[t];else Wi&&(o[t]=0)}let l=Bi[t],u,d;if(l)return t===`$attrs`&&L(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==O&&A(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,A(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Vi(i,t)?(i[t]=n,!0):r!==O&&A(r,t)?(r[t]=n,!0):A(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==O&&s[0]!==`$`&&A(e,s)||Vi(t,s)||A(a,s)||A(r,s)||A(Bi,s)||A(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?A(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Ui(e){return j(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Wi=!0;function Gi(e){let t=Yi(e),n=e.proxy,r=e.ctx;Wi=!1,t.beforeCreate&&qi(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:g,beforeDestroy:_,beforeUnmount:v,destroyed:y,unmounted:b,render:x,renderTracked:S,renderTriggered:C,errorCaptured:w,serverPrefetch:ee,expose:T,inheritAttrs:E,components:te,directives:ne,filters:re}=t;if(l&&Ki(l,r,null),o)for(let e in o){let t=o[e];M(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);P(t)&&(e.data=bn(t))}if(Wi=!0,a)for(let e in a){let t=a[e],i=qo({get:M(t)?t.bind(n,n):M(t.get)?t.get.bind(n,n):he,set:!M(t)&&M(t.set)?t.set.bind(n):he});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Ji(s[e],r,n,e);if(c){let e=M(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{yr(t,e[t])})}u&&qi(u,e,`c`);function D(e,t){j(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(D(Si,d),D(Ci,f),D(wi,p),D(Ti,m),D(gi,h),D(_i,g),D(ji,w),D(Ai,S),D(ki,C),D(Ei,v),D(Di,b),D(Oi,ee),j(T)){if(T.length){let t=e.exposed||={};T.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}x&&e.render===he&&(e.render=x),E!=null&&(e.inheritAttrs=E),te&&(e.components=te),ne&&(e.directives=ne),ee&&qr(e)}function Ki(e,t,n=he){j(e)&&(e=ea(e));for(let n in e){let r=e[n],i;i=P(r)?`default`in r?br(r.from||n,r.default,!0):br(r.from||n):br(r),z(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function qi(e,t,n){qn(j(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ji(e,t,n,r){let i=r.includes(`.`)?Or(n,r):()=>n[r];if(N(e)){let n=t[e];M(n)&&Tr(i,n)}else if(M(e))Tr(i,e.bind(n));else if(P(e)){if(j(e))e.forEach(e=>Ji(e,t,n,r));else{let r=M(e.handler)?e.handler.bind(n):t[e.handler];M(r)&&Tr(i,r,e)}}}function Yi(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Xi(c,e,o,!0)),Xi(c,t,o)),P(t)&&a.set(t,c),c}function Xi(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Xi(e,a,n,!0),i&&i.forEach(t=>Xi(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Zi[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Zi={data:Qi,props:ra,emits:ra,methods:na,computed:na,beforeCreate:ta,created:ta,beforeMount:ta,mounted:ta,beforeUpdate:ta,updated:ta,beforeDestroy:ta,beforeUnmount:ta,destroyed:ta,unmounted:ta,activated:ta,deactivated:ta,errorCaptured:ta,serverPrefetch:ta,components:na,directives:na,watch:ia,provide:Qi,inject:$i};function Qi(e,t){return t?e?function(){return k(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function $i(e,t){return na(ea(e),ea(t))}function ea(e){if(j(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ta(e,t){return e?[...new Set([].concat(e,t))]:t}function na(e,t){return e?k(Object.create(null),e,t):t}function ra(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:k(Object.create(null),Ui(e),Ui(t??{})):t}function ia(e,t){if(!e)return t;if(!t)return e;let n=k(Object.create(null),e);for(let r in t)n[r]=ta(e[r],t[r]);return n}function aa(){return{app:null,config:{isNativeTag:ge,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var oa=0;function sa(e,t){return function(n,r=null){M(n)||(n=k({},n)),r!=null&&!P(r)&&(r=null);let i=aa(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:oa++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Yo,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&M(e.install)?(a.add(e),e.install(c,...t)):M(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||G(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Wo(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(qn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=ca;ca=c;try{return e()}finally{ca=t}}};return c}}var ca=null,la=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${Pe(t)}Modifiers`]||e[`${Ie(t)}Modifiers`];function ua(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||O,i=n,a=t.startsWith(`update:`),o=a&&la(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>N(e)?e.trim():e)),o.number&&(i=i.map(He)));let s,c=r[s=Re(t)]||r[s=Re(Pe(t))];!c&&a&&(c=r[s=Re(Ie(t))]),c&&qn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,qn(l,e,6,i)}}var da=new WeakMap;function fa(e,t,n=!1){let r=n?da:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!M(e)){let r=e=>{let n=fa(e,t,!0);n&&(s=!0,k(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(P(e)&&r.set(e,null),null):(j(a)?a.forEach(e=>o[e]=null):k(o,a),P(e)&&r.set(e,o),o)}function pa(e,t){return!e||!_e(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),A(e,t[0].toLowerCase()+t.slice(1))||A(e,Ie(t))||A(e,t))}function ma(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,g=hr(e),_,v;try{if(n.shapeFlag&4){let e=i||r,t=e;_=So(l.call(t,e,u,d,p,f,m)),v=s}else{let e=t;_=So(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),v=t.props?s:ga(s)}}catch(t){no.length=0,Jn(t,e,1),_=G(U)}let y=_;if(v&&h!==!1){let e=Object.keys(v),{shapeFlag:t}=y;e.length&&t&7&&(a&&e.some(ve)&&(v=_a(v,a)),y=vo(y,v,!1,!0))}return n.dirs&&(y=vo(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Ur(Ar(y.type)&&Hr(y)||y,n.transition),_=y,hr(g),_}function ha(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(fo(r)){if(r.type!==U||r.children===`v-if`){if(n)return;n=r}}else return}return n}var ga=e=>{let t;for(let n in e)(n===`class`||n===`style`||_e(n))&&((t||={})[n]=e[n]);return t},_a=(e,t)=>{let n={};for(let r in e)ve(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function va(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ya(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ba(o,r,n)&&!pa(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||ya(r,o,l):!!o;return!1}function ya(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(!A(e,a)||ba(t,e,a)&&!pa(n,a))return!0}return!1}function ba(e,t,n){let r=e[n],i=t[n];return n===`style`&&P(r)&&P(i)?!it(r,i):r!==i}function xa({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Sa={},Ca=()=>Object.create(Sa),wa=e=>Object.getPrototypeOf(e)===Sa;function Ta(e,t,n,r=!1){let i={},a=Ca();e.propsDefaults=Object.create(null),Da(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:xn(i):e.type.props?i:a,e.attrs=a}function Ea(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=R(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(pa(e.emitsOptions,o))continue;let u=t[o];if(c){if(A(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=Pe(o);i[t]=Oa(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Da(e,t,i,a)&&(l=!0);let r;for(let a in s)t&&(A(t,a)||(r=Ie(a))!==a&&A(t,r))||(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Oa(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)t&&A(t,e)||(delete a[e],l=!0)}l&&Rt(e.attrs,`set`,``)}function Da(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(je(c))continue;let l=t[c],u;i&&A(i,u=Pe(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:pa(e.emitsOptions,c)||c in r&&l===r[c]||(r[c]=l,o=!0)}if(a){let t=R(n),r=s||O;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Oa(i,t,s,r[s],e,!A(r,s))}}return o}function Oa(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=A(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&M(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Po(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===Ie(n))&&(r=!0))}return r}var ka=new WeakMap;function Aa(e,t,n=!1){let r=n?ka:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!M(e)){let r=e=>{c=!0;let[n,r]=Aa(e,t,!0);k(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return P(e)&&r.set(e,me),me;if(j(a))for(let e=0;e<a.length;e++){let t=Pe(a[e]);ja(t)&&(o[t]=O)}else if(a)for(let e in a){let t=Pe(e);if(ja(t)){let n=a[e],r=o[t]=j(n)||M(n)?{type:n}:k({},n),i=r.type,c=!1,l=!0;if(j(i))for(let e=0;e<i.length;++e){let t=i[e],n=M(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=M(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||A(r,`default`))&&s.push(t)}}let l=[o,s];return P(e)&&r.set(e,l),l}function ja(e){return e[0]!==`$`&&!je(e)}var Ma=e=>e===`_`||e===`_ctx`||e===`$stable`,Na=e=>j(e)?e.map(So):[So(e)],Pa=(e,t,n)=>{if(t._n)return t;let r=gr((...e)=>Na(t(...e)),n);return r._c=!1,r},Fa=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Ma(n))continue;let i=e[n];if(M(i))t[n]=Pa(n,i,r);else if(i!=null){let e=Na(i);t[n]=()=>e}}},Ia=(e,t)=>{let n=Na(t);e.slots.default=()=>n},La=(e,t,n)=>{for(let r in t)(n||!Ma(r))&&(e[r]=t[r])},Ra=(e,t,n)=>{let r=e.slots=Ca();if(e.vnode.shapeFlag&32){let e=t._;e?(La(r,t,n),n&&Ve(r,`_`,e,!0)):Fa(t,r)}else t&&Ia(e,t)},za=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=O;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:La(i,t,n):(a=!t.$stable,Fa(t,i)),o=t}else t&&(Ia(e,t),o={default:1});if(a)for(let e in i)!Ma(e)&&o[e]==null&&delete i[e]},Ba=$a;function Va(e){return Ua(e)}function Ha(e){return Ua(e,ii)}function Ua(e,t){let n=Ge();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=he,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!po(e,t)&&(r=_e(e),ue(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===me&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case eo:g(e,t,n,r);break;case U:_(e,t,n,r);break;case to:e??v(t,n,r,o);break;case H:te(e,t,n,r,i,a,o,s,c);break;default:d&1?x(e,t,n,r,i,a,o,s,c):d&6?ne(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,k)}u!=null&&i?Xr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Xr(e.ref,null,a,e,!0)},g=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},_=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},v=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},y=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},b=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},x=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)S(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ee(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},S=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&w(e.children,f,null,i,s,Wa(e,c),l,d),_&&vr(e,null,i,`created`),C(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!je(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&Eo(p,i,e)}_&&vr(e,null,i,`beforeMount`);let v=Ka(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&Ba(()=>{try{p&&Eo(p,i,e),v&&g.enter(f),_&&vr(e,null,i,`mounted`)}finally{}},s)},C=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||Qa(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},w=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Co(e[l]):So(e[l]);h(null,c,t,n,r,i,a,o,s)}},ee=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||O,m=t.props||O,h;if(n&&Ga(n,!1),(h=m.onVnodeBeforeUpdate)&&Eo(h,n,t,e),f&&vr(t,e,n,`beforeUpdate`),n&&Ga(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?T(e.dynamicChildren,d,c,n,r,Wa(t,i),o):s||oe(e,t,c,null,n,r,Wa(t,i),o,!1),l>0){if(l&16)E(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&d==null&&E(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&Ba(()=>{h&&Eo(h,n,t,e),f&&vr(t,e,n,`updated`)},r)},T=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el||Za(c),f=u&&(c.type===H||!po(c,l)||c.shapeFlag&198)?d(u):n;h(c,l,f,null,r,i,a,o,!0)}},E=(e,t,n,r,i)=>{if(t!==n){if(t!==O)for(let o in t)!je(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(je(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},te=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),w(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(T(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&qa(e,t,!0)):oe(e,t,n,f,a,o,c,l,u)},ne=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):re(t,n,r,i,a,o,c):D(e,t,c)},re=(e,t,n,r,i,a,o)=>{let s=e.component=Ao(e,r,i);if(hi(e)&&(s.ctx.renderer=k),Ro(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o,a),!e.el){let r=s.subTree=G(U);_(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},D=(e,t,n)=>{let r=t.component=e.component;if(va(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,ae(r,t,n);return}r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ya(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{Ba(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;Ga(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&Be(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&Eo(f,s,t,c),Ga(e,!0);let p=ma(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el),_e(m),e,i,a),t.el=p.el,u===null&&xa(e,p.el),r&&Ba(r,i),(f=t.props&&t.props.onVnodeUpdated)&&Ba(()=>Eo(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=mi(t);if(Ga(e,!1),l&&Be(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Eo(o,d,t),Ga(e,!0),s&&be){let t=()=>{e.subTree=ma(e),be(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=ma(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&Ba(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Ba(()=>Eo(o,d,e),i)}(t.shapeFlag&256||d&&mi(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Ba(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new ft(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>ir(u),Ga(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Ea(e,t.props,r,n),za(e,t.children,n),Dt(),sr(e),Ot()},oe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){ce(l,f,n,r,i,a,o,s,c);return}if(p&256){se(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&ge(l,i,a),f!==l&&u(n,f)):d&16?m&16?ce(l,f,n,r,i,a,o,s,c):ge(l,i,a,!0):(d&8&&u(n,``),m&16&&w(f,n,r,i,a,o,s,c))},se=(e,t,n,r,i,a,o,s,c)=>{e||=me,t||=me;let l=e.length,u=t.length,d=Math.min(l,u),f=0;for(;f<d;f++){let r=t[f]=c?Co(t[f]):So(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?ge(e,i,a,!0,!1,d):w(t,n,r,i,a,o,s,c,d)},ce=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?Co(t[l]):So(t[l]);if(po(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?Co(t[f]):So(t[f]);if(po(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?Co(t[l]):So(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)ue(e[l],i,a,!0),l++;else{let p=l,m=l,g=new Map;for(l=m;l<=f;l++){let e=t[l]=c?Co(t[l]):So(t[l]);e.key!=null&&g.set(e.key,l)}let _,v=0,y=f-m+1,b=!1,x=0,S=Array(y);for(l=0;l<y;l++)S[l]=0;for(l=p;l<=d;l++){let r=e[l];if(v>=y){ue(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=m;_<=f;_++)if(S[_-m]===0&&po(r,t[_])){u=_;break}u===void 0?ue(r,i,a,!0):(S[u-m]=l+1,u>=x?x=u:b=!0,h(r,t[u],n,null,i,a,o,s,c),v++)}let C=b?Ja(S):me;for(_=C.length-1,l=y-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||Za(f):r;S[l]===0?h(null,d,n,p,i,a,o,s,c):b&&(_<0||l!==C[_]?le(d,n,p,2):_--)}}},le=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)le(e.component.subTree,t,n,a);else if(d&128)e.suspense.move(t,n,a);else if(d&64)c.move(e,t,n,k);else if(c===H){r(s,t,n);for(let e=0;e<u.length;e++)le(u[e],t,n,a);r(e.anchor,t,n)}else if(c===to)y(e,t,n);else if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[jr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),Ba(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[jr];s._isLeaving&&s[jr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},ue=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Dt(),Xr(s,null,n,e,!0),Ot()),p==null||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!mi(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Eo(_,t,e),u&6)pe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&vr(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,k,r):l&&!l.hasOnce&&(a!==H||d>0&&d&64)?ge(l,t,n,!1,!0):(a===H&&d&384||!i&&u&16)&&ge(c,t,n),r&&de(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Ba(()=>{_&&Eo(_,t,e),h&&vr(e,null,t,`unmounted`),v&&(e.el=null)},n)},de=e=>{let{type:t,el:n,anchor:r,transition:a}=e,o=t===H;if(o&&!a){fe(n,r);return}if(t===to){b(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let s=o?Gr(e):e,c=()=>{o?d(n)&&fe(n,r):i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(s&&s.shapeFlag&1&&a&&!a.persisted){let{leave:e,delayLeave:t}=a,n=s.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},fe=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},pe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Xa(c),Xa(l),r&&Be(r),i.stop(),a?(a.flags|=8,ue(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,ue(o,e,t,n)),s&&Ba(s,t),Ba(()=>{e.isUnmounted=!0},t)},ge=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ue(e[o],t,n,r,i)},_e=e=>{if(e.shapeFlag&6)return _e(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[kr];return n?f(n):t},ve=(e,t,n)=>{ur(()=>{e==null?t._vnode&&ue(t._vnode,null,null,!0):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e},e&&t._vnode?void 0:e&&e.component?e.component.uid:ko())},k={p:h,um:ue,m:le,r:de,mt:re,mc:w,pc:oe,pbc:T,n:_e,o:e},ye,be;return t&&([ye,be]=t(k)),{render:ve,hydrate:ye,createApp:sa(ve,ye)}}function Wa({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ga({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ka(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qa(e,t,n=!1){let r=e.children,i=t.children;if(j(r)&&j(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Co(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&qa(t,a)),a.type===eo&&(a.patchFlag===-1&&(a=i[e]=Co(a)),a.el=t.el),a.type===U&&!a.el&&(a.el=t.el)}}function Ja(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Ya(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ya(t)}function Xa(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Za(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Za(t.subTree):null}var Qa=e=>e.__isSuspense;function $a(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):or(e)}var H=Symbol.for(`v-fgt`),eo=Symbol.for(`v-txt`),U=Symbol.for(`v-cmt`),to=Symbol.for(`v-stc`),no=[],ro=null;function io(e=!1){no.push(ro=e?null:[])}function ao(){no.pop(),ro=no[no.length-1]||null}var oo=1;function so(e,t=!1){oo+=e,e<0&&ro&&t&&(ro.hasOnce=!0)}function co(e){return e.dynamicChildren=oo>0?ro||me:null,ao(),oo>0&&ro&&ro.push(e),e}function lo(e,t,n,r,i,a){return co(W(e,t,n,r,i,a,!0))}function uo(e,t,n,r,i){return co(G(e,t,n,r,i,!0))}function fo(e){return e?e.__v_isVNode===!0:!1}function po(e,t){return e.type===t.type&&e.key===t.key}var mo=({key:e})=>e??null,ho=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:N(e)||z(e)||M(e)?{i:pr,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===H?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mo(t),ref:t&&ho(t),scopeId:mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:pr};return s?(wo(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=N(n)?8:16),oo>0&&!o&&ro&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ro.push(c),c}var G=go;function go(e,t=null,n=null,r=0,i=null,a=!1){if(e&&e!==Pi||(e=U),fo(e)){let r=vo(e,t,!0);return n&&wo(r,n),oo>0&&!a&&ro&&(r.shapeFlag&6?ro[ro.indexOf(e)]=r:ro.push(r)),r.patchFlag=-2,r}if(Ko(e)&&(e=e.__vccOpts),t){t=_o(t);let{class:e,style:n}=t;e&&!N(e)&&(t.class=Ze(e)),P(n)&&(Dn(n)&&!j(n)&&(n=k({},n)),t.style=Ke(n))}let o=N(e)?1:Qa(e)?128:Ar(e)?64:P(e)?4:M(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function _o(e){return e?Dn(e)||wa(e)?k({},e):e:null}function vo(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?To(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&mo(l),ref:t&&t.ref?n&&a?j(a)?a.concat(ho(t)):[a,ho(t)]:ho(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==H?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vo(e.ssContent),ssFallback:e.ssFallback&&vo(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Ur(u,c.clone(u)),u}function yo(e=` `,t=0){return G(eo,null,e,t)}function bo(e,t){let n=G(to,null,e);return n.staticCount=t,n}function xo(e=``,t=!1){return t?(io(),uo(U,null,e)):G(U,null,e)}function So(e){return e==null||typeof e==`boolean`?G(U):j(e)?G(H,null,e.slice()):fo(e)?Co(e):G(eo,null,String(e))}function Co(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vo(e)}function wo(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),wo(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!wa(t)?t._ctx=pr:r===3&&pr&&(pr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(M(t)){if(r&65){wo(e,{default:t});return}t={default:t,_ctx:pr},n=32}else t=String(t),r&64?(n=16,t=[yo(t)]):n=8;e.children=t,e.shapeFlag|=n}function To(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=Ze([t.class,r.class]));else if(e===`style`)t.style=Ke([t.style,r.style]);else if(_e(e)){let n=t[e],i=r[e];i&&n!==i&&!(j(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!ve(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Eo(e,t,n,r=null){qn(e,t,7,[n,r])}var Do=aa(),Oo=0;function ko(){return Oo}function Ao(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||Do,a={uid:Oo++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Aa(r,i),emitsOptions:fa(r,i),emit:null,emitted:null,propsDefaults:O,inheritAttrs:r.inheritAttrs,ctx:O,data:O,props:O,attrs:O,slots:O,refs:O,setupState:O,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ua.bind(null,a),e.ce&&e.ce(a),a}var K=null,jo=()=>K||pr,Mo,No;{let e=Ge(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Mo=t(`__VUE_INSTANCE_SETTERS__`,e=>K=e),No=t(`__VUE_SSR_SETTERS__`,e=>Lo=e)}var Po=e=>{let t=K;return Mo(e),e.scope.on(),()=>{e.scope.off(),Mo(t)}},Fo=()=>{K&&K.scope.off(),Mo(null)};function Io(e){return e.vnode.shapeFlag&4}var Lo=!1;function Ro(e,t=!1,n=!1){t&&No(t);let{props:r,children:i}=e.vnode,a=Io(e);Ta(e,r,a,t),Ra(e,i,n||t);let o=a?zo(e,t):void 0;return t&&No(!1),o}function zo(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hi);let{setup:r}=n;if(r){Dt();let n=e.setupContext=r.length>1?Uo(e):null,i=Po(e),a=Kn(r,e,0,[e.props,n]),o=Te(a);if(Ot(),i(),(o||e.sp)&&!mi(e)&&qr(e),o){if(a.then(Fo,Fo),t)return a.then(n=>{No(!0);try{Bo(e,n,t)}finally{No(!1)}}).catch(t=>{Jn(t,e,0)});e.asyncDep=a}else Bo(e,a,t)}else Vo(e,t)}function Bo(e,t,n){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:P(t)&&(e.setupState=Ln(t)),Vo(e,n)}function Vo(e,t,n){let r=e.type;e.render||=r.render||he;{let t=Po(e);Dt();try{Gi(e)}finally{Ot(),t()}}}var Ho={get(e,t){return L(e,`get`,``),e[t]}};function Uo(e){return{attrs:new Proxy(e.attrs,Ho),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Wo(e){return e.exposed?e.exposeProxy||=new Proxy(Ln(On(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bi)return Bi[n](e)},has(e,t){return t in e||t in Bi}}):e.proxy}function Go(e,t=!0){return M(e)?e.displayName||e.name:e.name||t&&e.__name}function Ko(e){return M(e)&&`__vccOpts`in e}var qo=(e,t)=>zn(e,t,Lo);function Jo(e,t,n){try{so(-1);let r=arguments.length;return r===2?P(t)&&!j(t)?fo(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fo(n)&&(n=[n]),G(e,t,n))}finally{so(1)}}var Yo=`3.5.44`,Xo=void 0,Zo=typeof window<`u`&&window.trustedTypes;if(Zo)try{Xo=Zo.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Qo=Xo?e=>Xo.createHTML(e):e=>e,$o=`http://www.w3.org/2000/svg`,es=`http://www.w3.org/1998/Math/MathML`,ts=typeof document<`u`?document:null,ns=ts&&ts.createElement(`template`),rs={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ts.createElementNS($o,e):t===`mathml`?ts.createElementNS(es,e):n?ts.createElement(e,{is:n}):ts.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ts.createTextNode(e),createComment:e=>ts.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ts.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{ns.innerHTML=Qo(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ns.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},is=`transition`,as=`animation`,os=Symbol(`_vtc`),ss={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cs=k({},Fr,ss),ls=(e=>(e.displayName=`Transition`,e.props=cs,e))((e,{slots:t})=>Jo(Rr,fs(e),t)),us=(e,t=[])=>{j(e)?e.forEach(e=>e(...t)):e&&e(...t)},ds=e=>e?j(e)?e.some(e=>e.length>1):e.length>1:!1;function fs(e){let t={};for(let n in e)n in ss||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=ps(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:b,onLeaveCancelled:x,onBeforeAppear:S=_,onAppear:C=v,onAppearCancelled:w=y}=t,ee=(e,t,n,r)=>{e._enterCancelled=r,gs(e,t?u:s),gs(e,t?l:o),n&&n()},T=(e,t)=>{e._isLeaving=!1,gs(e,d),gs(e,p),gs(e,f),t&&t()},E=e=>(t,n)=>{let i=e?C:v,o=()=>ee(t,e,n);us(i,[t,o]),_s(()=>{gs(t,e?c:a),hs(t,e?u:s),ds(i)||ys(t,r,h,o)})};return k(t,{onBeforeEnter(e){us(_,[e]),hs(e,a),hs(e,o)},onBeforeAppear(e){us(S,[e]),hs(e,c),hs(e,l)},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>T(e,t);hs(e,d),e._enterCancelled?(hs(e,f),Cs(e)):(Cs(e),hs(e,f)),_s(()=>{e._isLeaving&&(gs(e,d),hs(e,p),ds(b)||ys(e,r,g,n))}),us(b,[e,n])},onEnterCancelled(e){ee(e,!1,void 0,!0),us(y,[e])},onAppearCancelled(e){ee(e,!0,void 0,!0),us(w,[e])},onLeaveCancelled(e){T(e),us(x,[e])}})}function ps(e){if(e==null)return null;if(P(e))return[ms(e.enter),ms(e.leave)];{let t=ms(e);return[t,t]}}function ms(e){return Ue(e)}function hs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[os]||(e[os]=new Set)).add(t)}function gs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[os];n&&(n.delete(t),n.size||(e[os]=void 0))}function _s(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var vs=0;function ys(e,t,n,r){let i=e._endId=++vs,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=bs(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function bs(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${is}Delay`),a=r(`${is}Duration`),o=xs(i,a),s=r(`${as}Delay`),c=r(`${as}Duration`),l=xs(s,c),u=null,d=0,f=0;t===is?o>0&&(u=is,d=o,f=a.length):t===as?l>0&&(u=as,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?is:as:null,f=u?u===is?a.length:c.length:0);let p=u===is&&/\b(?:transform|all)(?:,|$)/.test(r(`${is}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function xs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Ss(t)+Ss(e[n])))}function Ss(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Cs(e){return(e?e.ownerDocument:document).body.offsetHeight}function ws(e,t,n){let r=e[os];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ts=Symbol(`_vod`),Es=Symbol(`_vsh`),Ds=Symbol(``),Os=/(?:^|;)\s*display\s*:/;function ks(e,t,n){let r=e.style,i=N(n),a=!1;if(n&&!i){if(t){if(N(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??js(r,t,``)}else for(let e in t)n[e]??js(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?js(r,i,``):Fs(e,i,!N(t)&&t?t[i]:void 0,o)||js(r,i,o)}}else if(i){if(t!==n){let e=r[Ds];e&&(n+=`;`+e),r.cssText=n,a=Os.test(n)}}else t&&e.removeAttribute(`style`);Ts in e&&(i&&t===n||(e[Ts]=a?r.display:``),e[Es]&&(r.display=`none`))}var As=/\s*!important$/;function js(e,t,n){if(j(n))n.forEach(n=>js(e,t,n));else if(n??=``,t.startsWith(`--`))As.test(n)?e.setProperty(t,n.replace(As,``),`important`):e.setProperty(t,n);else{let r=Ps(e,t);As.test(n)?e.setProperty(Ie(r),n.replace(As,``),`important`):e[r]=n}}var Ms=[`Webkit`,`Moz`,`ms`],Ns={};function Ps(e,t){let n=Ns[t];if(n)return n;let r=Pe(t);if(r!==`filter`&&r in e)return Ns[t]=r;r=Le(r);for(let n=0;n<Ms.length;n++){let i=Ms[n]+r;if(i in e)return Ns[t]=i}return t}function Fs(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&N(r)&&n===r}var Is=`http://www.w3.org/1999/xlink`;function Ls(e,t,n,r,i,a=Qe(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Is,t.slice(6,t.length)):e.setAttributeNS(Is,t,n):n==null||a&&!$e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:we(n)?String(n):n)}function Rs(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Qo(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);r===i&&`_value`in e||(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=$e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function zs(e,t,n,r){e.addEventListener(t,n,r)}function Bs(e,t,n,r){e.removeEventListener(t,n,r)}var Vs=Symbol(`_vei`);function Hs(e,t,n,r,i=null){let a=e[Vs]||(e[Vs]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Gs(t);r?zs(e,n,a[t]=Ys(r,i),s):o&&(Bs(e,n,o,s),a[t]=void 0)}}var Us=/(Once|Passive|Capture)$/,Ws=/^on:?(?:Once|Passive|Capture)$/;function Gs(e){let t,n;for(;(n=e.match(Us))&&!Ws.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):Ie(e.slice(2)),t]}var Ks=0,qs=Promise.resolve(),Js=()=>Ks||=(qs.then(()=>Ks=0),Date.now());function Ys(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(j(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&qn(e,t,5,a)}}else qn(r,t,5,[e])};return n.value=e,n.attached=Js(),n}var Xs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Zs=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?ws(e,r,o):t===`style`?ks(e,n,r):_e(t)?ve(t)||Hs(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Qs(e,t,r,o))?(Rs(e,t,r),e.tagName.includes(`-`)||t!==`value`&&t!==`checked`&&t!==`selected`||Ls(e,t,r,o,a,t!==`value`)):e._isVueCE&&($s(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!N(r)))?Rs(e,Pe(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ls(e,t,r,o))};function Qs(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Xs(t)&&M(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Xs(t)&&N(n)?!1:t in e}function $s(e,t){let n=e._def.props;if(!n)return!1;let r=Pe(t);return Array.isArray(n)?n.some(e=>Pe(e)===r):Object.keys(n).some(e=>Pe(e)===r)}var ec=new WeakMap,tc=new WeakMap,nc=Symbol(`_moveCb`),rc=Symbol(`_enterCb`),ic=new WeakMap,ac=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:k({},cs,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=jo(),r=Nr(),i,a,o,s,c=()=>(s===void 0&&(s=i.length>0&&mc(i[0].el,n.vnode.el,sc(e))),s);return Ti(()=>{if(ic.delete(n),!c()){i=[],o=void 0;return}let t=sc(e);i.forEach(oc);let r=o&&pc(o,n.vnode.el);o=void 0,i.forEach(e=>cc(e,r));let a=i.filter(lc);Cs(n.vnode.el),a.forEach(e=>{let n=e.el,r=n.style;hs(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[nc]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[nc]=null,gs(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let l=R(e),u=fs(l),d=l.tag||H;if(i=[],s=void 0,a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&!t.el[Es]&&(i.push(t),Ur(t,Br(t,u,r,n)),ec.set(t,uc(t.el)))}a=t.default?Wr(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&Ur(t,Br(t,u,r,n))}return i.length&&(o=dc(n),ic.set(n,c)),G(d,null,a)}}});function oc(e){let t=e.el;t[nc]&&t[nc](),t[rc]&&t[rc]()}function sc(e){return e.moveClass||`${e.name||`v`}-move`}function cc(e,t){tc.set(e,uc(e.el,t))}function lc(e){let t=ec.get(e),n=tc.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),Number.isFinite(o)&&o!==0||(o=1),Number.isFinite(s)&&s!==0||(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function uc(e,t){let n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function dc(e){let t;for(let n=e.parent;n;n=n.parent){let r=ic.get(n);if(r){let i=fc(n.vnode.el,e.vnode.el);i&&(t||=[]).push(k(uc(i),{item:i,willMove:r}))}}return t}function fc(e,t){let n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function pc(e,t){let n=e.find(e=>e.willMove()&&e.item.contains(t));return n&&uc(n.item,n)}function mc(e,t,n){let r=e.cloneNode(),i=e[os];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=bs(r);return a.removeChild(r),o}var hc=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return j(t)?e=>Be(t,e):t};function gc(e){e.target.composing=!0}function _c(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var vc=Symbol(`_assign`),yc=Symbol(`_initialValue`);function bc(e,t,n){return t&&(e=e.trim()),n&&(e=He(e)),e}var xc={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[yc]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[yc]=e.defaultValue.replace(/\r\n?/g,`
`))),e[vc]=hc(i);let a=r||i.props&&i.props.type===`number`;zs(e,t?`change`:`input`,t=>{t.target.composing||e[vc](bc(e.value,n,a))}),(n||a)&&zs(e,`change`,()=>{e.value=bc(e.value,n,a)}),t||(zs(e,`compositionstart`,gc),zs(e,`compositionend`,_c),zs(e,`change`,_c))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[yc];delete e[yc],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[vc](bc(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[vc]=hc(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?He(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Sc=[`ctrl`,`shift`,`alt`,`meta`],Cc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Sc.some(n=>e[`${n}Key`]&&!t.includes(n))},wc=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Cc[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Tc=k({patchProp:Zs},rs),Ec,Dc=!1;function Oc(){return Ec||=Va(Tc)}function kc(){return Ec=Dc?Ec:Ha(Tc),Dc=!0,Ec}var Ac=((...e)=>{let t=Oc().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Nc(e);if(!r)return;let i=t._component;M(i)||i.render||i.template||(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Mc(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t}),jc=((...e)=>{let t=kc().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=Nc(e);if(t)return n(t,!0,Mc(t))},t});function Mc(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Nc(e){return N(e)?document.querySelector(e):e}var Pc=(e,t)=>z(t)?Fn(t):t,Fc=`usehead`;function Ic(e){return{install(t){t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(Fc,e)}}.install}function Lc(){if(xr()){let e=br(Fc);if(e)return e}throw Error(`useHead() was called without provide context, ensure you call it through the setup() function.`)}function Rc(e,t={}){let n=t.head||Lc();return n.ssr?n.push(e||{},t):zc(n,e,t)}function zc(e,t,n={}){let r=ut();if(r&&!r.active)return{patch(){},dispose(){},_poll(){}};let i=jn(!1),a;return wr(()=>{let r=i.value?{}:re(t,Pc);a?a.patch(r):a=e.push(r,n)}),jo()&&(Ei(()=>{a.dispose()}),_i(()=>{i.value=!0}),gi(()=>{i.value=!1})),a}function Bc(e={}){let t=de({domOptions:{render:fe(()=>ue(t),e=>setTimeout(e,0))},...e});return t.install=Ic(t),t}var Vc=typeof document<`u`;function Hc(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Uc(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Hc(e.default)}var q=Object.assign;function Wc(e,t){let n={};for(let r in t){let i=t[r];n[r]=Kc(i)?i.map(e):e(i)}return n}var Gc=()=>{},Kc=Array.isArray;function qc(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Jc=/#/g,Yc=/&/g,Xc=/\//g,Zc=/=/g,Qc=/\?/g,$c=/\+/g,el=/%5B/g,tl=/%5D/g,nl=/%5E/g,rl=/%60/g,il=/%7B/g,al=/%7C/g,ol=/%7D/g,sl=/%20/g;function cl(e){return e==null?``:encodeURI(``+e).replace(al,`|`).replace(el,`[`).replace(tl,`]`)}function ll(e){return cl(e).replace(il,`{`).replace(ol,`}`).replace(nl,`^`)}function ul(e){return cl(e).replace($c,`%2B`).replace(sl,`+`).replace(Jc,`%23`).replace(Yc,`%26`).replace(rl,"`").replace(il,`{`).replace(ol,`}`).replace(nl,`^`)}function dl(e){return ul(e).replace(Zc,`%3D`)}function fl(e){return cl(e).replace(Jc,`%23`).replace(Qc,`%3F`)}function pl(e){return fl(e).replace(Xc,`%2F`)}function ml(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var hl=/\/$/,gl=e=>e.replace(hl,``);function _l(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Tl(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ml(o)}}function vl(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function yl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function bl(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&xl(t.matched[r],n.matched[i])&&Sl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function xl(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Sl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Cl(e[n],t[n]))return!1;return!0}function Cl(e,t){return Kc(e)?wl(e,t):Kc(t)?wl(t,e):e?.valueOf()===t?.valueOf()}function wl(e,t){return Kc(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Tl(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var El={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Dl=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Ol=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function kl(e){if(!e){if(Vc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),gl(e)}var Al=/^[^#]+#/;function jl(e,t){return e.replace(Al,`#`)+t}function Ml(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Nl=()=>({left:window.scrollX,top:window.scrollY});function Pl(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ml(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Fl(e,t){return(history.state?history.state.position-t:-1)+e}var Il=new Map;function Ll(e,t){Il.set(e,t)}function Rl(e){let t=Il.get(e);return Il.delete(e),t}function zl(e){return typeof e==`string`||e&&typeof e==`object`}function Bl(e){return typeof e==`string`||typeof e==`symbol`}var J=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Vl=Symbol(``);J.MATCHER_NOT_FOUND,J.NAVIGATION_GUARD_REDIRECT,J.NAVIGATION_ABORTED,J.NAVIGATION_CANCELLED,J.NAVIGATION_DUPLICATED;function Hl(e,t){return q(Error(),{type:e,[Vl]:!0},t)}function Ul(e,t){return e instanceof Error&&Vl in e&&(t==null||!!(e.type&t))}function Wl(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace($c,` `),i=r.indexOf(`=`),a=ml(i<0?r:r.slice(0,i)),o=i<0?null:ml(r.slice(i+1));if(a in t){let e=t[a];Kc(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Gl(e){let t=``;for(let n in e){let r=e[n];n=dl(n),r==null?r!==void 0&&(t+=(t.length?`&`:``)+n):(Kc(r)?r.map(e=>e&&ul(e)):[r&&ul(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Kl(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Kc(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var ql=Symbol(``),Jl=Symbol(``),Yl=Symbol(``),Xl=Symbol(``),Zl=Symbol(``);function Ql(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $l(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Hl(J.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):zl(e)?c(Hl(J.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function eu(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(Hc(s)){let c=(s.__vccOpts||s)[t];c&&a.push($l(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Uc(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&$l(c,n,r,o,e,i)()}))}}}return a}function tu(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>xl(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>xl(e,s))||i.push(s))}return[n,r,i]}var nu=()=>location.protocol+`//`+location.host;function ru(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),yl(n,``)}return yl(n,e)+r+i}function iu(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=ru(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Dl.pop,direction:u?u>0?Ol.forward:Ol.back:Ol.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(q({},e.state,{scroll:Nl()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function au(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Nl():null}}function ou(e){let{history:t,location:n}=window,r={value:ru(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:nu()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,q({},t.state,au(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=q({},i.value,t.state,{forward:e,scroll:Nl()});a(o.current,o,!0),a(e,q({},au(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function su(e){e=kl(e);let t=ou(e),n=iu(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=q({location:``,base:e,go:r,createHref:jl.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var cu=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Y=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Y||{}),lu={type:cu.Static,value:``},uu=/[a-zA-Z0-9_]/;function du(e){if(!e)return[[]];if(e===`/`)return[[lu]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Y.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Y.Static?a.push({type:cu.Static,value:l}):n===Y.Param||n===Y.ParamRegExp||n===Y.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:cu.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)if(c=e[s++],c===`\\`&&n!==Y.ParamRegExp)r=n,n=Y.EscapeNext;else switch(n){case Y.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Y.Param):f();break;case Y.EscapeNext:f(),n=r;break;case Y.Param:c===`(`?n=Y.ParamRegExp:uu.test(c)?f():(d(),n=Y.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Y.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Y.ParamRegExpEnd:u+=c;break;case Y.ParamRegExpEnd:d(),n=Y.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===Y.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var fu=`[^/]+?`,pu={sensitive:!1,strict:!1,start:!0,end:!0},mu=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(mu||{}),hu=/[.+*?^${}()[\]/\\]/g;function gu(e,t){let n=q({},pu,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[mu.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=mu.Segment+(n.sensitive?mu.BonusCaseSensitive:0);if(o.type===cu.Static)r||(i+=`/`),i+=o.value.replace(hu,`\\$&`),s+=mu.Static;else if(o.type===cu.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||fu;if(u!==fu){s+=mu.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=mu.Dynamic,c&&(s+=mu.BonusOptional),n&&(s+=mu.BonusRepeatable),u===`.*`&&(s+=mu.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=mu.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){r&&n.endsWith(`/`)||(n+=`/`),r=!1;for(let e of i)if(e.type===cu.Static)n+=e.value;else if(e.type===cu.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Kc(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Kc(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function _u(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===mu.Static+mu.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===mu.Static+mu.Segment?1:-1:0}function vu(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=_u(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(yu(r))return 1;if(yu(i))return-1}return i.length-r.length}function yu(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var bu={strict:!1,end:!0,sensitive:!1};function xu(e,t,n){let r=q(gu(du(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Su(e,t){let n=[],r=new Map;t=qc(bu,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=wu(e);s.aliasOf=r&&r.record;let l=qc(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(wu(q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=xu(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Eu(d)&&o(e.name)),Au(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Gc}function o(e){if(Bl(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Ou(e,n);n.splice(t,0,e),e.record.name&&!Eu(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Hl(J.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=q(Cu(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Cu(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Hl(J.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Du(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Cu(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function wu(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Tu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Tu(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Eu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Du(e){return e.reduce((e,t)=>q(e,t.meta),{})}function Ou(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;vu(e,t[i])<0?r=i:n=i+1}let i=ku(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function ku(e){let t=e;for(;t=t.parent;)if(Au(t)&&vu(e,t)===0)return t}function Au({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ju(e){let t=br(Yl),n=br(Xl),r=qo(()=>{let n=B(e.to);return t.resolve(n)}),i=qo(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(xl.bind(null,i));if(o>-1)return o;let s=Iu(e[t-2]);return t>1&&Iu(i)===s&&a[a.length-1].path!==s?a.findIndex(xl.bind(null,e[t-2])):o}),a=qo(()=>i.value>-1&&Fu(n.params,r.value.params)),o=qo(()=>i.value>-1&&i.value===n.matched.length-1&&Sl(n.params,r.value.params));function s(n={}){if(Pu(n)){let n=t[B(e.replace)?`replace`:`push`](B(e.to)).catch(Gc);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:qo(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Mu(e){return e.length===1?e[0]:e}var Nu=Kr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:ju,setup(e,{slots:t}){let n=bn(ju(e)),{options:r}=br(Yl),i=qo(()=>({[Lu(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Lu(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Mu(t.default(n));return e.custom?r:Jo(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Pu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Fu(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Kc(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Iu(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Lu=(e,t,n)=>e??t??n,Ru=Kr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=br(Zl),i=qo(()=>e.route||r.value),a=br(Jl,0),o=qo(()=>{let e=B(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=qo(()=>i.value.matched[o.value]);yr(Jl,qo(()=>o.value+1)),yr(ql,s),yr(Zl,i);let c=jn();return Tr(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&xl(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return zu(n.default,{Component:l,route:r});let u=o.props[a],d=Jo(l,q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return zu(n.default,{Component:d,route:r})||d}}});function zu(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Bu=Ru;function Vu(e){let t=Su(e.routes,e),n=e.parseQuery||Wl,r=e.stringifyQuery||Gl,i=e.history,a=Ql(),o=Ql(),s=Ql(),c=Mn(El),l=El;Vc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Wc.bind(null,e=>``+e),d=Wc.bind(null,pl),f=Wc.bind(null,ml);function p(e,n){let r,i;return Bl(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=q({},a||c.value),typeof e==`string`){let r=_l(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return q(r,o,{params:f(o.params),hash:ml(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=q({},e,{path:_l(n,e.path,a.path).path});else{let t=q({},e.params);for(let e in t)t[e]??delete t[e];o=q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=vl(r,q({},e,{hash:ll(l),path:s.path})),m=i.createHref(p);return q({fullPath:p,hash:l,query:r===Gl?Kl(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?_l(n,e,c.value.path):q({},e)}function y(e,t){if(l!==e)return Hl(J.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(q(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(q(v(u),{state:typeof u==`object`?q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&bl(r,i,n)&&(f=Hl(J.NAVIGATION_DUPLICATED,{to:d,from:i}),le(i,i,!0,!1)),(f?Promise.resolve(f):T(d,i)).catch(e=>Ul(e)?Ul(e,J.NAVIGATION_GUARD_REDIRECT)?e:ce(e):oe(e,d,i)).then(e=>{if(e){if(Ul(e,J.NAVIGATION_GUARD_REDIRECT))return C(q({replace:s},v(e.to),{state:typeof e.to==`object`?q({},a,e.to.state):a,force:o}),t||d)}else e=te(d,i,!0,s,a);return E(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function ee(e){let t=fe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function T(e,t){let n,[r,i,s]=tu(e,t);n=eu(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push($l(r,e,t))});let c=w.bind(null,e,t);return n.push(c),O(n).then(()=>{n=[];for(let r of a.list())n.push($l(r,e,t));return n.push(c),O(n)}).then(()=>{n=eu(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push($l(r,e,t))});return n.push(c),O(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Kc(r.beforeEnter))for(let i of r.beforeEnter)n.push($l(i,e,t));else n.push($l(r.beforeEnter,e,t))}return n.push(c),O(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=eu(s,`beforeRouteEnter`,e,t,ee),n.push(c),O(n))).then(()=>{n=[];for(let r of o.list())n.push($l(r,e,t));return n.push(c),O(n)}).catch(e=>Ul(e,J.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function E(e,t,n){s.list().forEach(r=>ee(()=>r(e,t,n)))}function te(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===El,l=Vc?history.state:{};n&&(r||s?i.replace(e.fullPath,q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,le(e,t,n,s),ce()}let ne;function re(){ne||=i.listen((e,t,n)=>{if(!pe.listening)return;let r=_(e),a=S(r,pe.currentRoute.value);if(a){C(q(a,{replace:!0,force:!0}),r).catch(Gc);return}l=r;let o=c.value;Vc&&Ll(Fl(o.fullPath,n.delta),Nl()),T(r,o).catch(e=>Ul(e,J.NAVIGATION_ABORTED|J.NAVIGATION_CANCELLED)?e:Ul(e,J.NAVIGATION_GUARD_REDIRECT)?(C(q(v(e.to),{force:!0}),r).then(e=>{Ul(e,J.NAVIGATION_ABORTED|J.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Dl.pop&&i.go(-1,!1)}).catch(Gc),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=te(r,o,!1),e&&(n.delta&&!Ul(e,J.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Dl.pop&&Ul(e,J.NAVIGATION_ABORTED|J.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),E(r,o,e)}).catch(Gc)})}let D=Ql(),ie=Ql(),ae;function oe(e,t,n){ce(e);let r=ie.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function se(){return ae&&c.value!==El?Promise.resolve():new Promise((e,t)=>{D.add([e,t])})}function ce(e){return ae||(ae=!e,re(),D.list().forEach(([t,n])=>e?n(e):t()),D.reset()),e}function le(t,n,r,i){let{scrollBehavior:a}=e;if(!Vc||!a)return Promise.resolve();let o=!r&&Rl(Fl(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return nr().then(()=>a(t,n,o)).then(e=>e&&Pl(e)).catch(e=>oe(e,t,n))}let ue=e=>i.go(e),de,fe=new Set,pe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ie.add,isReady:se,install(e){e.component(`RouterLink`,Nu),e.component(`RouterView`,Bu),e.config.globalProperties.$router=pe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>B(c)}),Vc&&!de&&c.value===El&&(de=!0,b(i.location).catch(e=>{}));let t={};for(let e in El)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Yl,pe),e.provide(Xl,xn(t)),e.provide(Zl,c);let n=e.unmount;fe.add(e),e.unmount=function(){fe.delete(e),fe.size<1&&(l=El,ne&&ne(),ne=null,c.value=El,de=!1,ae=!1),n()}}};function O(e){return e.reduce((e,t)=>e.then(()=>ee(t)),Promise.resolve())}return pe}function Hu(){return br(Yl)}function Uu(e){return br(Xl)}function Wu(e){return document.readyState===`loading`?new Promise(t=>{document.addEventListener(`DOMContentLoaded`,()=>t(e))}):Promise.resolve(e)}var Gu=Kr({setup(e,{slots:t}){let n=jn(!1);return Ci(()=>n.value=!0),()=>n.value?t.default&&t.default({}):t.placeholder&&t.placeholder({})}});function Ku(e){try{return JSON.parse(e||`{}`)}catch(t){return console.error(`[SSG] On state deserialization -`,t,e),{}}}function qu(e,t,n,r){let{transformState:i,registerComponents:a=!0,useHead:o=!0,rootContainer:s=`#app`}=r??{};async function c(s){let c=r?.hydration?jc(e):Ac(e),l;o&&c.use(l=Bc());let u=Vu({history:su(t.base),...t}),{routes:d}=t;a&&c.component(`ClientOnly`,Gu);let f=[],p={app:c,head:l,isClient:!0,router:u,routes:d,onSSRAppRendered:()=>{},triggerOnSSRAppRendered:()=>Promise.all(f.map(e=>e())),initialState:{},transformState:i,routePath:s};await Wu(),p.initialState=i?.(window.__INITIAL_STATE__||{})||Ku(window.__INITIAL_STATE__),await n?.(p),c.use(u);let m,h=!0;u.beforeEach((e,t,n)=>{(h||m&&m===e.path)&&(h=!1,m=e.path,e.meta.state=p.initialState),n()});let g=p.initialState;return{...p,initialState:g}}return(async()=>{let{app:e,router:t}=await c();await t.isReady(),e.mount(s,!0)})(),c}var Ju=[`width`,`height`],Yu=[`d`],Xu={__name:`AppIcon`,props:{name:String,size:{type:Number,default:16}},setup(e){let t={search:`M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M20 20l-4-4`,copy:`M9 9h10v10H9z M5 15V5h10`,link:`M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1`,mail:`M3 5h18v14H3z M3 6l9 7 9-7`,web:`M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18`,github:`M9 19c-4 1.3-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.3 5.8 2.6 5.8 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21`,linkedin:`M4 4h16v16H4z M8 10v6 M8 7.5v.01 M12 16v-6 M12 12.5c0-1.5 1-2.5 2.2-2.5S16 11 16 12.5V16`,download:`M12 4v11 M7 10l5 5 5-5 M5 20h14`,arrow:`M5 12h14 M13 6l6 6-6 6`,back:`M19 12H5 M11 6l-6 6 6 6`,check:`M5 12.5l4.5 4.5L19 7`,moon:`M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z`,sun:`M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4`};return(n,r)=>(io(),lo(`svg`,{width:e.size,height:e.size,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.7`,"stroke-linecap":`round`,"stroke-linejoin":`round`,style:{flex:`none`}},[W(`path`,{d:t[e.name]},null,8,Yu)],8,Ju))}},X={url:`https://nobeldahal.com.np`,name:`Nobel Dahal`,role:`Full-stack developer and software engineer`,place:`Kathmandu, Nepal`,email:`nobel@dahal.tech`,cv:`/download/resume.pdf`,github:`https://github.com/coderkoala`,linkedin:`https://www.linkedin.com/in/coderkoala`,motto:`Find a way, or make one.`},Zu=[{org:`Independent`,title:`Software engineer and consultant`,type:`Freelance`,when:`2020–now`},{org:`Code for Nepal`,title:`Data science fellow`,type:`Part-time`,when:`2021–22`},{org:`United Real Estate`,title:`Software engineer`,type:`Freelance`,when:`2020–21`},{org:`Proshore`,title:`Software engineer`,type:`Full-time`,when:`2020–21`},{org:`TechSathi`,title:`Platform architect`,type:`Part-time`,when:`2020`},{org:`ThemeGrill`,title:`WordPress plugin developer`,type:`Full-time`,when:`2019–20`},{org:`Gurkha Technology`,title:`Software engineer`,type:`Full-time`,when:`2019`},{org:`GDG Dang`,title:`Organizer and speaker`,type:`Volunteer`,when:`2019`},{org:`The Open Institute for Social Science`,title:`Software engineer`,type:`Internship`,when:`2018–19`}],Qu=[{name:`Project Management Foundations`,issuer:`PMI`,year:2024,featured:!0},{name:`DevOps Professional Certificate`,issuer:`PagerDuty`,year:2024,featured:!0},{name:`Career Essentials in Software Development`,issuer:`Microsoft`,year:2024,featured:!0},{name:`Career Essentials in Project Management`,issuer:`Microsoft`,year:2024,featured:!0},{name:`Introduction to Generative AI`,issuer:`AWS`,year:2024,featured:!0},{name:`Intermediate PostgreSQL`,issuer:`University of Michigan`,year:2021,featured:!0},{name:`SQL Server Developer`,issuer:`DataCamp`,year:2022,featured:!0},{name:`SQL Server for Database Administrators`,issuer:`DataCamp`,year:2022},{name:`Database Design`,issuer:`DataCamp`,year:2022},{name:`Become a Data Analyst`,issuer:`LinkedIn Learning`,year:2024},{name:`Data Cleaning in Python`,issuer:`LinkedIn Learning`,year:2024},{name:`R: Wrangling and Visualizing Data`,issuer:`LinkedIn Learning`,year:2024},{name:`Project Management Foundations`,issuer:`LinkedIn Learning`,year:2024},{name:`Laravel 9 Essential Training`,issuer:`LinkedIn Learning`,year:2024},{name:`Vue.js 3 Essential Training`,issuer:`LinkedIn Learning`,year:2024},{name:`Apache Web Server: Administration`,issuer:`LinkedIn Learning`,year:2024},{name:`AWS Essential Training for Developers`,issuer:`LinkedIn Learning`,year:2024},{name:`Node.js: Testing and Code Quality`,issuer:`LinkedIn Learning`,year:2024},{name:`Node.js: Debugging and Performance Tuning`,issuer:`LinkedIn Learning`,year:2024},{name:`Node.js: Design Patterns`,issuer:`LinkedIn Learning`,year:2024},{name:`DevOps Foundations`,issuer:`LinkedIn Learning`,year:2024},{name:`DevOps Foundations: CI/CD`,issuer:`LinkedIn Learning`,year:2024},{name:`DevOps Foundations: Infrastructure as Code`,issuer:`LinkedIn Learning`,year:2024},{name:`cPanel Professional (expired 2025)`,issuer:`cPanel`,year:2024},{name:`Advanced Node.js: Scaling Applications`,issuer:`LinkedIn Learning`,year:2021},{name:`Node.js Essential Training`,issuer:`LinkedIn Learning`,year:2020}],$u={"@context":`https://schema.org`,"@type":`Person`,"@id":`${X.url}/#person`,name:X.name,givenName:`Nobel`,familyName:`Dahal`,url:X.url,image:`${X.url}/og/default.png`,jobTitle:`Full-Stack Developer and Software Engineer`,hasOccupation:{"@type":`Occupation`,name:`Full-stack web developer`,occupationLocation:{"@type":`Country`,name:`Nepal`},skills:`Laravel, PHP, Vue.js, Node.js, PostgreSQL, MySQL, WordPress, ERP, CRM`},description:`Built Kaede, a cargo ERP for freight forwarders (IATA ONE Record, AWB stock, learning suggestions). Full-stack developer in Kathmandu, Nepal: Laravel, Vue, PostgreSQL.`,email:`mailto:${X.email}`,address:{"@type":`PostalAddress`,addressLocality:`Kathmandu`,addressRegion:`Bagmati`,addressCountry:`NP`},alumniOf:{"@type":`CollegeOrUniversity`,name:`Himalaya College of Engineering`},sameAs:[X.github,X.linkedin],knowsLanguage:[`en`,`ne`],knowsAbout:[`Full-stack web development`,`Web application development`,`WordPress plugin development`,`Payment gateway integration (eSewa, Khalti)`,`Laravel`,`PHP`,`Vue.js`,`Node.js`,`PostgreSQL`,`ERP systems`,`CRM systems`,`Air cargo software`,`IATA Cargo-XML`,`Microsoft Dynamics 365`,`DevOps`]},ed={"@context":`https://schema.org`,"@type":`WebSite`,"@id":`${X.url}/#website`,url:X.url,name:X.name,inLanguage:`en`,author:{"@id":`${X.url}/#person`},dateModified:`2026-11-01T14:09:11.529Z`};function td(e){return{"@context":`https://schema.org`,"@type":`BreadcrumbList`,itemListElement:[{name:`Home`,path:`/`},...e].map((e,t)=>({"@type":`ListItem`,position:t+1,name:e.name,item:X.url+e.path}))}}var nd=[{what:`Laravel`,text:`Fixed a date overflow that crashed validation. Shipped in 8.x.`,href:`https://github.com/laravel/framework/pull/40690`,ref:`laravel/framework#40690`},{what:`Syncfusion EJ2`,text:`Wrote the Nepali locale, now part of the library.`,href:`https://github.com/syncfusion/ej2-locale/pull/192`,ref:`ej2-locale#192`},{what:`WPEverest`,text:`28 merged pull requests to Everest Forms and User Registration.`,href:`https://github.com/themegrill/everest-forms/pulls?q=is%3Apr+author%3Acoderkoala+is%3Amerged`,ref:`themegrill`},{what:`WPEverest docs`,text:`Wrote the developer documentation, on my own.`,href:`https://themegrill.github.io/dev-docs/`,ref:`dev-docs`},{what:`GDG Dang`,text:`Built the DevFest 2019 site and a Vision AI demo for my talk.`,href:`https://github.com/gdgdang`,ref:`gdgdang`},{what:`PHPJasper`,text:`Maintain a fork for production: JasperStarter 3.6.2, headless Java, Japanese fonts.`,href:`https://github.com/coderkoala/phpjasper`,ref:`coderkoala/phpjasper`},{what:`vee-validate`,text:`Made the Nepali messages formal and correct.`,href:`https://github.com/logaretm/vee-validate/pull/4642`,ref:`vee-validate#4642`}],rd=[{group:`Backend`,items:[`PHP`,`Laravel`,`Node.js`,`Express`,`Python`,`C++`]},{group:`Data`,items:[`PostgreSQL`,`MySQL`,`SQL Server`,`MariaDB`,`Power BI`,`Tableau`]},{group:`Frontend`,items:[`Vue.js`,`JavaScript`,`HTML`,`CSS`]},{group:`Platform`,items:[`Linux`,`Bash`,`Docker`,`AWS`,`CI/CD`,`Dynamics 365`]}],id=[`PHP`,`JavaScript`,`Node.js`,`C++`,`Bash`,`Linux`,`Git`,`HTML`,`CSS`,`WordPress`,`jQuery`],ad=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},od={class:`nav`},sd={class:`wrap nav__in`},cd={class:`links`,"aria-label":`Main`},ld={class:`nav__end`},ud={class:`kbtn__k`},dd=[`aria-label`],fd=ad({__name:`SiteNav`,setup(e){let t=jn(!1),n=jn(`Ctrl `);function r(){window.dispatchEvent(new KeyboardEvent(`keydown`,{key:`k`,ctrlKey:!0,metaKey:!0}))}Ci(()=>{/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent)&&(n.value=`⌘`);let e=document.documentElement.dataset.theme;t.value=e?e===`dark`:matchMedia(`(prefers-color-scheme: dark)`).matches});function i(){t.value=!t.value;let e=t.value?`dark`:`light`;document.documentElement.dataset.theme=e;try{localStorage.setItem(`theme`,e)}catch{}}return(e,a)=>{let o=Ni(`RouterLink`);return io(),lo(`header`,od,[W(`div`,sd,[G(o,{to:`/`,class:`brand`,"aria-label":`Nobel Dahal, home`},{default:gr(()=>[...a[0]||=[W(`span`,{class:`brand__mark`,"aria-hidden":`true`},`ND`,-1),W(`span`,{class:`brand__name`},`Nobel Dahal`,-1)]]),_:1}),W(`nav`,cd,[G(o,{to:`/work/`},{default:gr(()=>[...a[1]||=[yo(`Work`,-1)]]),_:1}),G(o,{to:`/writing/`},{default:gr(()=>[...a[2]||=[yo(`Writing`,-1)]]),_:1}),G(o,{to:`/about`},{default:gr(()=>[...a[3]||=[yo(`About`,-1)]]),_:1}),G(o,{to:`/hire`},{default:gr(()=>[...a[4]||=[yo(`Hire`,-1)]]),_:1})]),W(`div`,ld,[G(o,{class:`btn btn--solid btn--sm nav__cta`,to:`/hire`},{default:gr(()=>[...a[5]||=[yo(`Hire me`,-1)]]),_:1}),W(`button`,{class:`kbtn`,type:`button`,onClick:r,"aria-label":`Go to (Ctrl K)`,title:`Go to (Ctrl K)`},[G(Xu,{name:`search`}),W(`kbd`,ud,ot(n.value)+`K`,1)]),W(`button`,{class:`iconbtn`,type:`button`,onClick:i,"aria-label":t.value?`Use light theme`:`Use dark theme`},[G(Xu,{name:t.value?`sun`:`moon`},null,8,[`name`])],8,dd)])])])}}},[[`__scopeId`,`data-v-4762dd1c`]]),pd=ad({__name:`RouteProgress`,setup(e){let t=Hu(),n=jn(`idle`),r,i=t.beforeEach((e,t)=>{e.path!==t.path&&(clearTimeout(r),r=setTimeout(()=>{n.value=`loading`},120))}),a=t.afterEach(()=>{clearTimeout(r),n.value===`loading`&&(n.value=`done`,setTimeout(()=>{n.value=`idle`},300))});return Ei(()=>{i(),a()}),(e,t)=>(io(),lo(`div`,{class:Ze([`rp`,`rp--${n.value}`]),"aria-hidden":`true`},null,2))}},[[`__scopeId`,`data-v-a3604251`]]),md=`---
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
`,hd=`---
title: Kaede
order: 1
schema: SoftwareApplication
seoTitle: Kaede, freight forwarding software built in Nepal
seo: Kaede is cargo and freight forwarding software built in Nepal: air waybills and AWB stock, IATA ONE Record, rates, door-to-door delivery and payroll.
kind: Cargo ERP
years: 2022–now
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
`,gd=`---
title: Kalimati Market
order: 2
kind: Government platform
years: 2021–2025
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
`,_d=`---
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
`,vd=`---
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
`,yd=`---
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
`,bd=`---
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

If you'd like this built into your Laravel app, [I do this for a living](/hire).
`,xd=`---
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
`,Sd=`---
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
`,Cd=`---
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
`,wd=`---
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
`,Td=`---
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
`,Ed=`---
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
`,Dd=`---
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
`,Od=`---
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
`,kd=`---
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
`,Ad=`---
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
`,jd=`---
title: Kaede
year: 2022–now
kind: Cargo ERP
tag: Systems
image: /media/work/kaede.jpg
link: /work/kaede
featured: true
summary: Reads the paperwork, learns your office, talks to airlines in ONE Record.
---
`,Md=`---
title: Kalimati Market
year: 2021–25
kind: Government platform
tag: Websites
image: /media/work/kalimati.jpg
link: /work/kalimati
featured: true
summary: Prices for the public, dues paid by phone through eSewa and Khalti. Built solo.
---
`,Nd=`---
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
`,Pd=`---
title: Dynamics CRM plugins
year: 2020
kind: C# plugins
tag: Open source
image: /media/work/dynamics-plugins.jpg
link: https://github.com/coderkoala/DynamicsCRMLeads
featured: false
summary: Leads, Opportunity and Obituaries modules for a US brokerage.
---
`,Fd=`---
title: Syncfusion in Nepali
year: 2024
kind: Localisation
tag: Open source
image: /media/work/syncfusion-nepali.jpg
link: https://github.com/syncfusion/ej2-locale/pull/192
featured: false
summary: Translated a whole UI library into Nepali, alone. It ships upstream now.
---
`,Id=`---
title: Affiliatefeed
year: 2021
kind: Shopify app
tag: Systems
image: /media/work/affiliatefeed.jpg
link: https://affiliatefeed.exportfeed.com/
featured: false
summary: Took a web app apart and shipped it as a standalone Shopify PWA.
---
`,Ld=`---
title: WPEverest developer docs
year: 2020
kind: Documentation
tag: Open source
image: /media/work/wpeverest-dev-docs.jpg
link: https://themegrill.github.io/dev-docs/
featured: false
summary: The docs every Everest Forms add-on developer starts from. I wrote them.
---
`,Rd=`---
title: Everest Forms
year: 2020
kind: WordPress plugins
tag: Open source
image: /media/work/everest-forms.png
link: https://github.com/themegrill/everest-forms/pulls?q=is%3Apr+author%3Acoderkoala+is%3Amerged
featured: false
summary: 28 merged PRs, WPML support, PHPUnit, and a PDF add-on twice as fast.
---
`,zd=`---
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
`,Bd=`---
title: Taskmon
year: 2019
kind: Task manager
tag: Systems
image: /media/portfolio-images/portfolio1.png
link: 
featured: false
summary: Create, hand off, chase and close tasks across a team.
---
`,Vd=`---
title: GDG Dang
year: 2019
kind: Community portal and talk
tag: Open source
image: /media/work/gdg-vision.png
link: https://github.com/gdgdang
featured: false
summary: Volunteer organizer. Shipped the DevFest 2019 site and spoke on Google Vision AI.
---
`,Hd=`---
title: Presidential Business School EMS
year: 2019
kind: Exam system
tag: Systems
image: /media/portfolio-images/portfolio3.png
link: 
featured: false
summary: Random entrance papers, and a scraper that filled the question bank.
---
`,Ud=`---
title: PHPJasper, maintained
year: 2025–now
kind: PHP library
tag: Open source
image:
link: /writing/maintaining-phpjasper
featured: false
summary: Forked and kept alive for production: headless Java, Japanese fonts, safer shell-outs.
---
`,Wd=`---
title: Nimbus Nepal
year: 2019
kind: CMS and backend
tag: Websites
image: /media/portfolio-images/portfolio6.png
link: https://nimbusnepal.com
featured: false
summary: A Laravel CMS with an applicant tracker and Analytics built in.
---
`,Gd=`---
title: Loksewa Aayog Quiz
year: 2019
kind: Facebook Instant game
tag: Games
image: /media/portfolio-images/portfolio5.png
link: http://fb.gg/play/464364207493058
featured: false
summary: Ten civil-service questions, then brag to your friends.
---
`,Kd=`---
title: Debendra Manandhar
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio4.png
link: https://web.archive.org/web/20200806075149/https://debendramanandhar.com/
featured: false
summary: A coach's site with programmes, an academy and PayPal.
---
`,qd=`---
title: Four Seasons Engineering
year: 2019
kind: Website
tag: Websites
image: /media/portfolio-images/portfolio8.png
link: 
featured: false
summary: A builder's website, start to finish in three days.
---
`,Jd=`---
title: Travel Time Nepal
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio7.png
link: https://web.archive.org/web/20200122104033/http://traveltimenepal.com:80/
featured: false
summary: A Thamel travel agency with payments, deals and auto-replies. I wrote the copy too.
---
`,Yd=`---
title: Indiabix scraper
year: 2019
kind: Python
tag: Open source
image: /media/work/indiabix-scraper.jpg
link: https://github.com/coderkoala/indiabix-scraper
featured: false
summary: Thousands of aptitude questions, pulled while I slept.
---
`,Xd=`---
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
`,Zd=`---
title: Adventures of Joy
year: 2017
kind: C++ game
tag: Games
image: /media/portfolio-images/portfolio2.png
link: https://github.com/coderkoala/RoguelikeRPG
featured: false
summary: A top-down RPG on my own engine, written in C++ and SFML.
---
`;function Qd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $d=Qd();function ef(e){$d=e}var tf={exec:()=>null};function nf(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function Z(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Q.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var rf=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Q={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:nf(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:nf(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:nf(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:nf(e=>RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:nf(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:nf(e=>RegExp(`^ {0,${e}}(?:</?(?:${yf})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:nf(e=>RegExp(`^ {0,${e}}>`))},af=/^(?:[ \t]*(?:\n|$))+/,of=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,sf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,cf=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,lf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,uf=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,df=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ff=Z(df).replace(/bull/g,uf).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),pf=Z(df).replace(/bull/g,uf).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),mf=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,hf=/^[^\n]+/,gf=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,_f=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,gf).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),vf=Z(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,uf).getRegex(),yf=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,bf=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,xf=Z(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,bf).replace(`tag`,yf).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Sf=e=>Z(mf).replace(`hr`,cf).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,yf).getRegex(),Cf=Sf(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),wf=Sf(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Tf={blockquote:Z(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`,wf).getRegex(),code:of,def:_f,fences:sf,heading:lf,hr:cf,html:xf,lheading:ff,list:vf,newline:af,paragraph:Cf,table:tf,text:hf},Ef=Z(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,cf).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,yf).getRegex(),Df={...Tf,lheading:pf,table:Ef,paragraph:Z(mf).replace(`hr`,cf).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ef).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,yf).getRegex()},Of={...Tf,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,bf).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:tf,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(mf).replace(`hr`,cf).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ff).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},kf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Af=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,jf=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,Mf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Nf=/[\p{P}\p{S}]/u,Pf=/[\s\p{P}\p{S}]/u,Ff=/[^\s\p{P}\p{S}]/u,If=Z(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Pf).getRegex(),Lf=/[\p{Pi}\p{Ps}"']/u,Rf=/(?!~)[\p{P}\p{S}]/u,zf=/(?!~)[\s\p{P}\p{S}]/u,Bf=/(?:[^\s\p{P}\p{S}]|~)/u,Vf=Z(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,rf?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Hf=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Uf=Z(Hf,`u`).replace(/punct/g,Nf).getRegex(),Wf=Z(Hf,`u`).replace(/punct/g,Rf).getRegex(),Gf=Z(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Lf).replace(/punct/g,Nf).getRegex(),Kf=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,qf=Z(Kf,`gu`).replace(/notPunctSpace/g,Ff).replace(/punctSpace/g,Pf).replace(/punct/g,Nf).getRegex(),Jf=Z(Kf,`gu`).replace(/notPunctSpace/g,Bf).replace(/punctSpace/g,zf).replace(/punct/g,Rf).getRegex(),Yf=Z(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ff).replace(/punctSpace/g,Pf).replace(/punct/g,Nf).getRegex(),Xf=Z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Ff).replace(/punctSpace/g,Pf).replace(/punct/g,Nf).getRegex(),Zf=Z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ff).replace(/punctSpace/g,Pf).replace(/punct/g,Nf).getRegex(),Qf=Z(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,Nf).getRegex(),$f=Z(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ff).replace(/punctSpace/g,Pf).replace(/punct/g,Nf).getRegex(),ep=Z(/\\(punct)/,`gu`).replace(/punct/g,Nf).getRegex(),tp=Z(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,Nf).getRegex(),np=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rp=Z(bf).replace(`(?:-->|$)`,`-->`).getRegex(),ip=Z(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,rp).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ap=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,op=Z(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,ap).getRegex(),sp=Z(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,op).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),cp=Z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,op).replace(`ref`,gf).getRegex(),lp=Z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,gf).getRegex(),up=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,dp=Z(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,ap).getRegex(),fp=Z(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,dp).replace(`ref`,up).getRegex()).replace(`nolink`,Z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,up).getRegex()).getRegex(),pp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,mp=Z(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),hp={_backpedal:tf,anyPunctuation:ep,anyPunctuationOutsideCode:tp,autolink:np,blockSkip:Vf,br:jf,code:Af,del:tf,delLDelim:tf,delRDelim:tf,emStrongLDelim:Uf,emStrongRDelimAst:qf,emStrongRDelimUnd:Xf,escape:kf,link:sp,nolink:lp,punctuation:If,reflink:cp,reflinkSearch:fp,tag:ip,text:Mf,url:tf},gp={...hp,emStrongLDelim:Gf,emStrongRDelimAst:Yf,emStrongRDelimUnd:Zf,link:Z(/^!?\[(label)\]\((.*?)\)/).replace(`label`,op).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,op).getRegex()},_p={...hp,emStrongRDelimAst:Jf,emStrongLDelim:Wf,delLDelim:Qf,delRDelim:$f,url:Z(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,mp).replace(`protocol`,pp).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Z(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,pp).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},vp={..._p,br:Z(jf).replace(`{2,}`,`*`).getRegex(),text:Z(_p.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},yp={normal:Tf,gfm:Df,pedantic:Of},bp={normal:hp,gfm:_p,breaks:vp,pedantic:gp},xp={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Sp=e=>xp[e];function Cp(e,t){if(t){if(Q.escapeTest.test(e))return e.replace(Q.escapeReplace,Sp)}else if(Q.escapeTestNoEncode.test(e))return e.replace(Q.escapeReplaceNoEncode,Sp);return e}function wp(e){return Q.numericCharacterReference.test(e)?e.replace(Q.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function Tp(e){try{e=encodeURI(e).replace(Q.percentDecode,`%`)}catch{return null}return e}function Ep(e,t){let n=e.replace(Q.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Q.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(Q.slashPipe,`|`);return n}function Dp(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Op(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Q.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function kp(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function Ap(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function jp(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Mp(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function Np(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function Pp(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var Fp=class{options;rules;lexer;constructor(e){this.options=e||$d}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Op(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Np(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Dp(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Dp(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Dp(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Dp(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteMarkerWhitespace,(e,t,n)=>t+jp(n,t.length)).replace(this.rules.other.blockquoteSetextReplace,`
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
`,1)[0],d=t[1].length,f=this.options.pedantic?jp(u,d):u.replace(this.rules.other.leadingSpaceTab,e=>jp(e,d)),p=e.split(`
`,1)[0],m=!f.trim(),h=0;if(this.options.pedantic?(h=2,a=f.trimStart()):m?h=d+1:(h=f.search(this.rules.other.nonSpaceChar),h=h>4?1:h,a=f.slice(h),h+=d),m&&this.rules.other.blankLine.test(p)&&(e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),n=this.rules.other.hrRegex(h),r=this.rules.other.fencesBeginRegex(h),i=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(h):this.rules.other.headingBeginRegex(h),o=this.rules.other.htmlBeginRegex(h),s=this.rules.other.blockquoteBeginRegex(h);for(;e;){let c=e.split(`
`,1)[0],l;if(p=c,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,`  `),l=p):l=p.replace(this.rules.other.leadingSpaceTab,e=>jp(e)),r.test(p)||i.test(p)||o.test(p)||s.test(p)||t.test(p)||n.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=h||!p.trim())a+=`
`+l.slice(h);else{if(m||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||r.test(f)||i.test(f)||n.test(f))break;let e=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(p)&&this.rules.block.lheading.test(`${f}
${p}`)?`    ${l.replace(/^ {0,3}/,``)}`:p;a+=`
`+e}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Op(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&Ap(t[2],`()`)!==-1)return;let e=kp(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Dp(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Ep(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Dp(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Ep(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Dp(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&Pp(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=Dp(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=Ap(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),Mp(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&Pp(e,n[1],r,this.rules))return;let i=t[kp((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Mp(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let i=r[0][0],a=n===i,o=t.length-e.length,s=o;for(;!this.options.pedantic&&s>0&&t[s-1]===i;)s--;let c=[...t.slice(Math.max(0,s-2),s)].at(-1)??``,l=c===`*`||c===`_`||!!this.rules.inline.punctuation.exec(c);s<o&&(n=c);let u=s<o?l:!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let d=r[1]||r[3]||``;if(!d||!n||u){let n=[...r[0]].length-1,u,f,p=n,m=0,h=o-s+n,g=!this.options.pedantic&&!!c.trim()&&(!!d||i===`*`&&!l),_=i===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,t=t.slice(-1*e.length+n);(r=_.exec(t))!==null;){if(u=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!u)continue;if(f=[...u].length,r[3]||r[4]){p+=f;continue}if(r[5]||r[6]||g){if(a&&(r[5]||r[6]))break;if(h%3&&!((h+f)%3)){m+=f;continue}}if(p-=f,p>0)continue;f=Math.min(f,f+p+m);let t=[...r[0]][0].length,i=e.slice(0,n+r.index+t+f);if(Math.min(n,f)%2){let e=i.slice(1,-1);return{type:`em`,raw:i,text:e,tokens:this.lexer.inlineTokens(e)}}let o=i.slice(2,-2);return{type:`strong`,raw:i,text:o,tokens:this.lexer.inlineTokens(o)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:wp(t[0]),escaped:e}}}},Ip=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$d,this.options.tokenizer=this.options.tokenizer||new Fp,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:Q,block:yp.normal,inline:bp.normal};this.options.pedantic?(t.block=yp.pedantic,t.inline=bp.pedantic):this.options.gfm&&(t.block=yp.gfm,t.inline=this.options.breaks?bp.breaks:bp.gfm),this.tokenizer.rules=t}static get rules(){return{block:yp,inline:bp}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Q.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.state.inRawBlock=!1,this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Q.tabCharGlobal,`    `).replace(Q.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,kp(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(`)`);try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e.includes(`*`)||e.includes(`_`)||e.includes(`~`)||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==Fp.prototype.emStrong||this.tokenizer.del!==Fp.prototype.del?this.#t(e):e,r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,n,i))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e,n,i))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}#t(e){let t=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,n=t=>{let r=t.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,kp(t.slice(r+1,-1))))return t;if(r>1&&t.charAt(0)!==`!`){let i=t.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,n)+`][`+`a`.repeat(t.length-r-2)+`]`}return`[`+`a`.repeat(t.length-2)+`]`};t=t.replace(e,n)}return t=t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(e,t,n)=>n?`+`.repeat(e.length):t?t+e.slice(t.length,-t.length).replace(/`/g,`+`)+t:e),t=t.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t,t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Lp=class{options;parser;constructor(e){this.options=e||$d}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Q.notSpaceStart)?.[0],i=e?e.replace(Q.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+Cp(r)+`">`+(n?i:Cp(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Cp(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Cp(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?Cp(n,!0):this.parser.parseInline(r),o=Tp(e);if(o===null)return a;e=Cp(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+Cp(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Tp(e);if(i===null)return Cp(n);e=i;let a=`<img src="${Cp(e)}" alt="${Cp(n)}"`;return t&&(a+=` title="${Cp(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Cp(e.text)}},Rp=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return``}checkbox({raw:e}){return e}},zp=class e{options;renderer;textRenderer;constructor(e){this.options=e||$d,this.options.renderer=this.options.renderer||new Lp,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Rp,this.textRenderer.parser=this}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Bp=class{options;block;constructor(e){this.options=e||$d}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ip.lex:Ip.lexInline}provideParser(e=this.block){return e?zp.parse:zp.parseInline}};function Vp(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var Hp=new class{defaults=Qd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=zp;Renderer=Lp;TextRenderer=Rp;Lexer=Ip;Tokenizer=Fp;Hooks=Bp;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(Vp(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)Vp(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)Vp(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;Vp(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);Vp(n,this.walkTokens(i,t))}):e.tokens&&Vp(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Lp(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Fp(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Bp;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Bp.passThroughHooks.has(n)?e=>{if(t.options.async&&Bp.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(t.options.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&Vp(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ip.lex(e,t??this.defaults)}parser(e,t){return zp.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Ip.lex:Ip.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?zp.parse:zp.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Ip.lex:Ip.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?zp.parse:zp.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Cp(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Hp.parse(e,t)}$.options=$.setOptions=function(e){return Hp.setOptions(e),$.defaults=Hp.defaults,ef($.defaults),$},$.getDefaults=Qd,$.defaults=$d;function Up(...e){return Hp.use(...e),$.defaults=Hp.defaults,ef($.defaults),$}$.use=Up,$.walkTokens=function(e,t){return Hp.walkTokens(e,t)},$.parseInline=Hp.parseInline,$.Parser=zp,$.parser=zp.parse,$.Renderer=Lp,$.TextRenderer=Rp,$.Lexer=Ip,$.lexer=Ip.lex,$.Tokenizer=Fp,$.Hooks=Bp,$.parse=$,$.options,$.setOptions,$.walkTokens,$.parseInline,zp.parse,Ip.lex;function Wp(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},body:e};let n={},r=null;for(let e of t[1].split(/\r?\n/)){let t=e.match(/^\s+-\s+(.*)$/);if(t&&r){n[r].push(t[1].trim());continue}let i=e.match(/^([\w-]+):\s*(.*)$/);if(!i)continue;let[,a,o]=i;o===``?(n[a]=[],r=a):(r=null,n[a]=o===`true`||o!==`false`&&o)}return{data:n,body:t[2]}}function Gp(e,t){return Object.entries(e).map(([e,n])=>{let r=e.split(`/`).pop().replace(/\.md$/,``),{data:i,body:a}=Wp(n);return{...i,slug:r,url:`/${t}/${r}`,html:$.parse(a)}}).filter(e=>!e.draft||!1)}var Kp=Object.assign({"/content/work/generic-properties.md":md,"/content/work/kaede.md":hd,"/content/work/kalimati.md":gd}),qp=Object.assign({"/content/writing/a-copilot-that-lives-in-bash.md":_d,"/content/writing/a-date-that-did-not-fit.md":vd,"/content/writing/designing-a-rate-engine.md":yd,"/content/writing/esewa-khalti-laravel.md":bd,"/content/writing/finding-the-nearest-agent.md":xd,"/content/writing/handing-out-air-waybill-numbers.md":Sd,"/content/writing/maintaining-phpjasper.md":Cd,"/content/writing/most-waybills-are-the-usual-one.md":wd,"/content/writing/mtls-and-oauth2-together.md":Td,"/content/writing/one-developer-one-market.md":Ed,"/content/writing/taking-money-on-a-government-website.md":Dd,"/content/writing/teaching-a-ui-library-nepali.md":Od,"/content/writing/the-check-that-only-lived-in-the-browser.md":kd,"/content/writing/what-one-record-taught-me.md":Ad}),Jp=Gp(Kp,`work`).map(e=>({...e,stack:String(e.stack||``).split(`,`).map(e=>e.trim()).filter(Boolean),shots:(Array.isArray(e.shots)?e.shots:[]).map(e=>{let[t,n,r=`3x2`]=e.split(`::`).map(e=>e.trim()),[i,a]=r.split(`x`).map(Number);return{src:t,caption:n,cols:i,rows:a}}),engineering:(Array.isArray(e.engineering)?e.engineering:[]).map(e=>{let[t,n,r]=e.split(`::`).map(e=>e.trim());return{label:t,text:n,to:r}}),steps:(e.steps||[]).map(e=>{let[t,n]=e.split(`::`).map(e=>e.trim());return{title:t,text:n}})})).sort((e,t)=>Number(e.order)-Number(t.order)),Yp=Gp(qp,`writing`).sort((e,t)=>String(t.date).localeCompare(String(e.date)));function Xp(e){return new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`})}var Zp=Object.assign({"/content/gallery/01-kaede.md":jd,"/content/gallery/02-kalimati.md":Md,"/content/gallery/03-generic-properties.md":Nd,"/content/gallery/04-dynamics-plugins.md":Pd,"/content/gallery/04a-syncfusion-nepali.md":Fd,"/content/gallery/05-affiliatefeed.md":Id,"/content/gallery/05a-wpeverest-dev-docs.md":Ld,"/content/gallery/06-everest-forms-pdf.md":Rd,"/content/gallery/07-rapti-crm.md":zd,"/content/gallery/08-taskmon.md":Bd,"/content/gallery/08a-gdg-dang.md":Vd,"/content/gallery/09-pbs-ems.md":Hd,"/content/gallery/09a-phpjasper.md":Ud,"/content/gallery/10-nimbus.md":Wd,"/content/gallery/11-loksewa-quiz.md":Gd,"/content/gallery/12-debendra-manandhar.md":Kd,"/content/gallery/13-four-seasons.md":qd,"/content/gallery/14-travel-time.md":Jd,"/content/gallery/15-indiabix-scraper.md":Yd,"/content/gallery/16-in-cod-we-trust.md":Xd,"/content/gallery/17-adventures-of-joy.md":Zd}),Qp=e=>typeof e==`string`?e:``,$p=Gp(Zp,`gallery`).map(e=>({...e,link:Qp(e.link),image:Qp(e.image),logo:Qp(e.logo),loop:Qp(e.loop),cover:Qp(e.cover),year:String(e.year)})).sort((e,t)=>e.slug.localeCompare(t.slug)),em=[`All`,...new Set($p.map(e=>e.tag))],tm=jn(``),nm;function rm(e){tm.value=e,clearTimeout(nm),nm=setTimeout(()=>{tm.value=``},2200)}async function im(e,t=`Copied`){try{await navigator.clipboard.writeText(e),rm(t)}catch{rm(`Copy failed. Select it instead.`)}}var am={class:`cp__box`},om=[`aria-activedescendant`],sm={id:`cp-list`,class:`cp__list`,role:`listbox`},cm={key:0,class:`cp__group`,role:`presentation`},lm=[`id`,`aria-selected`,`onMousemove`,`onClick`],um={class:`cp__label`},dm={key:0,class:`cp__hint`},fm={key:0,class:`cp__empty`},pm=ad({__name:`CommandPalette`,setup(e,{expose:t}){let n=Hu(),r=jn(!1),i=jn(``),a=jn(0),o=jn(null),s=jn(null);function c(){let e=document.documentElement,t=e.dataset.theme?e.dataset.theme===`dark`:matchMedia(`(prefers-color-scheme: dark)`).matches;e.dataset.theme=t?`light`:`dark`;try{localStorage.setItem(`theme`,e.dataset.theme)}catch{}}let l=qo(()=>[{group:`Pages`,label:`Home`,to:`/`},{group:`Pages`,label:`Work`,hint:`Everything since 2017`,to:`/work/`},{group:`Pages`,label:`Writing`,to:`/writing/`},{group:`Pages`,label:`About`,to:`/about`},{group:`Pages`,label:`Hire`,hint:`Services, process, questions`,to:`/hire`},{group:`Pages`,label:`Résumé`,hint:`as a page`,to:`/cv`},...Jp.map(e=>({group:`Case studies`,label:e.title,hint:e.kind,to:e.url})),...Yp.map(e=>({group:`Writing`,label:e.title,to:e.url})),...$p.filter(e=>!e.featured).map(e=>({group:`Gallery`,label:e.title,hint:`${e.kind} · ${e.year}`,to:`/work/`})),{group:`Actions`,label:`Copy email address`,hint:X.email,run:()=>im(X.email,`Email address copied`)},{group:`Actions`,label:`Download résumé (PDF)`,run:()=>{location.href=X.cv}},{group:`Actions`,label:`Switch light / dark`,run:c},{group:`Actions`,label:`GitHub`,hint:`coderkoala`,run:()=>window.open(X.github,`_blank`,`noopener`)},{group:`Actions`,label:`LinkedIn`,hint:`coderkoala`,run:()=>window.open(X.linkedin,`_blank`,`noopener`)}]),u=qo(()=>{let e=i.value.toLowerCase().split(/\s+/).filter(Boolean);return(e.length?l.value.filter(t=>e.every(e=>`${t.label} ${t.hint||``} ${t.group}`.toLowerCase().includes(e))):l.value).slice(0,40)});async function d(){r.value=!0,i.value=``,a.value=0,s.value?.showModal(),await nr(),o.value?.focus()}function f(){r.value=!1,s.value?.close()}function p(e){let t=u.value[e];t&&(f(),t.to?n.push(t.to):t.run())}function m(e){e.key===`ArrowDown`?(a.value=Math.min(a.value+1,u.value.length-1),e.preventDefault(),h()):e.key===`ArrowUp`?(a.value=Math.max(a.value-1,0),e.preventDefault(),h()):e.key===`Enter`&&(p(a.value),e.preventDefault())}function h(){nr(()=>s.value?.querySelector(`[aria-selected="true"]`)?.scrollIntoView({block:`nearest`}))}function g(e){let t=/input|textarea|select/i.test(e.target.tagName)||e.target.isContentEditable;(e.key===`k`&&(e.metaKey||e.ctrlKey)||e.key===`/`&&!t)&&(e.preventDefault(),r.value?f():d())}return Ci(()=>window.addEventListener(`keydown`,g)),Ei(()=>window.removeEventListener(`keydown`,g)),t({show:d}),(e,t)=>(io(),lo(`dialog`,{ref_key:`dlg`,ref:s,class:`cp`,"aria-label":`Go to`,onClose:t[2]||=e=>r.value=!1,onClick:wc(f,[`self`])},[W(`div`,am,[_r(W(`input`,{ref_key:`input`,ref:o,"onUpdate:modelValue":t[0]||=e=>i.value=e,class:`cp__input`,type:`text`,placeholder:`Go to a page, project or post…`,role:`combobox`,"aria-expanded":`true`,"aria-controls":`cp-list`,"aria-activedescendant":`cp-${a.value}`,onKeydown:m,onInput:t[1]||=e=>a.value=0},null,40,om),[[xc,i.value]]),W(`ul`,sm,[(io(!0),lo(H,null,Ri(u.value,(e,t)=>(io(),lo(H,{key:e.group+e.label},[t===0||u.value[t-1].group!==e.group?(io(),lo(`li`,cm,ot(e.group),1)):xo(``,!0),W(`li`,{id:`cp-${t}`,role:`option`,"aria-selected":t===a.value,class:`cp__item`,onMousemove:e=>a.value=t,onClick:e=>p(t)},[W(`span`,um,ot(e.label),1),e.hint?(io(),lo(`span`,dm,ot(e.hint),1)):xo(``,!0)],40,lm)],64))),128)),u.value.length?xo(``,!0):(io(),lo(`li`,fm,`Nothing matches “`+ot(i.value)+`”.`,1))]),t[3]||=W(`p`,{class:`cp__foot`},[W(`kbd`,null,`↑`),W(`kbd`,null,`↓`),yo(` to move · `),W(`kbd`,null,`Enter`),yo(` to open · `),W(`kbd`,null,`Esc`),yo(` to close`)],-1)])],544))}},[[`__scopeId`,`data-v-d17c8c10`]]),mm={class:`toast`,role:`status`,"aria-live":`polite`},hm={key:0,class:`toast__msg`},gm=ad({__name:`AppToast`,setup(e){return(e,t)=>(io(),lo(`div`,mm,[G(ls,{name:`t`},{default:gr(()=>[B(tm)?(io(),lo(`span`,hm,ot(B(tm)),1)):xo(``,!0)]),_:1})]))}},[[`__scopeId`,`data-v-74470497`]]),_m={id:`main`},vm={class:`foot`},ym={class:`wrap foot__in`},bm=[`datetime`],xm=ad({__name:`App`,setup(e){Ci(()=>{if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=document.documentElement,t=0,n=0,r=!1,i=()=>{r=!1,e.style.setProperty(`--sy`,t),e.style.setProperty(`--mx`,n)},a=()=>{r||(r=!0,requestAnimationFrame(i))};addEventListener(`scroll`,()=>{t=Math.min(scrollY,900),a()},{passive:!0}),matchMedia(`(hover: hover)`).matches&&addEventListener(`pointermove`,e=>{n=(e.clientX/innerWidth-.5)*2,a()},{passive:!0})});let t=`2026-11-01T14:09:11.529Z`,n=new Date(t).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`,timeZone:`Asia/Kathmandu`});return(e,r)=>{let i=Ni(`RouterView`);return io(),lo(H,null,[r[1]||=bo(`<div class="backdrop" aria-hidden="true" data-v-358ef419><div class="bd bd--far" data-v-358ef419></div><div class="bd bd--mist bd--mist-a" data-v-358ef419></div><div class="bd bd--land" data-v-358ef419></div><div class="bd bd--mist bd--mist-b" data-v-358ef419></div></div><a class="skip" href="#main" data-v-358ef419>Skip to content</a>`,2),G(pd),G(fd),W(`main`,_m,[G(i)]),W(`footer`,vm,[W(`div`,ym,[W(`span`,null,[yo(`© `+ot(new Date(B(t)).getFullYear())+` `+ot(B(X).name)+` · `+ot(B(X).place)+` · Updated `,1),W(`time`,{datetime:B(t)},ot(B(n)),9,bm)]),r[0]||=W(`span`,{class:`foot__motto`,lang:`el`,title:`Find a way, or make one.`},`Βρείτε έναν τρόπο ή φτιάξτε έναν`,-1)])]),G(pm),G(gm)],64)}}},[[`__scopeId`,`data-v-358ef419`]]),Sm=`modulepreload`,Cm=function(e){return`/`+e},wm={},Tm=function(e){return e.pathname.endsWith(`.css`)},Em=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Dm=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Cm(t,n);let r=s(t),i=Tm(r);return Em(wm,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Sm,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Om=[{path:`/`,component:()=>Dm(()=>import(`./Home-DUbWe8L-.js`),__vite__mapDeps([0,1,2]))},{path:`/work/`,component:()=>Dm(()=>import(`./Gallery-DzfhRGeI.js`),__vite__mapDeps([3,1,4]))},{path:`/work/:slug`,component:()=>Dm(()=>import(`./Project-DK9dXzuI.js`),__vite__mapDeps([5,6,1,7,8]))},{path:`/writing/`,component:()=>Dm(()=>import(`./Writing-C6Kc3K-e.js`),__vite__mapDeps([9,1,10]))},{path:`/writing/:slug`,component:()=>Dm(()=>import(`./Post-BarGu_Z5.js`),__vite__mapDeps([11,6,1,7,12]))},{path:`/cv`,component:()=>Dm(()=>import(`./Cv-CbG8uAfT.js`),__vite__mapDeps([13,1,14]))},{path:`/hire`,component:()=>Dm(()=>import(`./Hire-CvgC5CP0.js`),__vite__mapDeps([15,1,16]))},{path:`/about`,component:()=>Dm(()=>import(`./About-Dw-VzP8F.js`),__vite__mapDeps([17,1,18]))},{path:`/:rest(.*)*`,component:()=>Dm(()=>import(`./NotFound-CtNo26mf.js`),__vite__mapDeps([6,1,7]))}];qu(xm,{routes:Om,scrollBehavior:(e,t,n)=>n||(e.hash?{el:e.hash,top:88}:{top:0})},({router:e,isClient:t})=>{if(!t)return;let n=new Set,r=e=>{typeof e==`function`&&!n.has(e)&&(n.add(e),e().catch(()=>{}))},i=t=>{let n=t.target.closest?.(`a[href^="/"]`);n&&e.resolve(n.getAttribute(`href`)).matched.forEach(e=>r(e.components?.default))};addEventListener(`pointerover`,i,{passive:!0}),addEventListener(`focusin`,i);let a=window.requestIdleCallback||(e=>setTimeout(e,1500)),o=()=>a(()=>Om.forEach(e=>r(e.component)));document.readyState===`complete`?o():addEventListener(`load`,o,{once:!0})});export{G as A,ot as B,qo as C,lo as D,xo as E,gr as F,jn as I,B as L,Ri as M,Ni as N,bo as O,Fi as P,Ze as R,H as S,uo as T,Xu as _,Jp as a,ac as b,id as c,Zu as d,nd as f,ed as g,rd as h,em as i,io as j,yo as k,Qu as l,X as m,Xp as n,Yp as o,$u as p,$p as r,ad as s,im as t,td as u,Uu as v,W as w,wc as x,Rc as y,Ke as z};