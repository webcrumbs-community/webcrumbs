/*
  Copyright (c) 2025 Webcrumbs, Inc.

  This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
  You may copy, distribute, and modify this software under the terms of the AGPL-3.0 license.
  See https://www.gnu.org/licenses/agpl-3.0.html for full terms.
*/
(()=>{var _=Object.create;var w=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var O=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,o)=>(typeof require<"u"?require:e)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var A=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!M.call(t,r)&&r!==o&&w(t,r,{get:()=>e[r],enumerable:!(s=f(e,r))||s.enumerable});return t};var $=(t,e,o)=>(o=t!=null?_(L(t)):{},A(e||!t||!t.__esModule?w(o,"default",{value:t,enumerable:!0}):o,t));var b="[Webcrumbs]",g=t=>({MISSING_URI:`
    
      Invalid or missing "uri" attribute. 
      Check that your element includes a valid 'uri'.
          
          Expected:
            <webcrumbs-plugin uri="https://plugins.webcrumbs.dev/demo-component"></webcrumbs-plugin>
          
          Received:
            ${t.outerHTML}
            `,FOREIGN_PLUGIN:`
    
      You are embedding a plugin from a non-Webcrumbs source.
      Plugins hosted elsewhere may not work as expected.
      Make sure you trust the source before loading it.
      `,MISSING_COMPONENT:`
    
      Plugin failed to load. Please check that your plugin exports the component correctly.
      Expected:
        export { Component }
      `,STYLE_LOAD_ERROR:`
      Failed to load the plugin's style.
      Please check the URI and ensure it is correct.`,SCRIPT_LOAD_ERROR:`
      Failed to load the plugin's code.
      Please check the URI and ensure it is correct.`,FONT_LOAD_ERROR:`
      Failed to load the plugin's fonts.
      Please check the URI and ensure it is correct.`,SHARED_LIBS_LOAD_ERROR:`
    
      Something went wrong while loading the shared libraries.
      Please open an issue at https://github.com/webcrumbs-community/webcrumbs
      `}),S={log:"\u{1F535}",info:"\u{1F7E2}",warn:"\u{1F7E1}",error:"\u{1F534}",debug:"\u{1F7E3}",time:"\u23F1\uFE0F"},p={log:(t,e)=>a("log",t,e),info:(t,e)=>a("info",t,e),warn:(t,e)=>a("warn",t,e),error:(t,e)=>a("error",t,e),debug:(t,e)=>a("debug",t,e),time:t=>l("time",t),timeEnd:t=>l("timeEnd",t)},R=t=>{let e=t?.replace(/https?:\/\/(www\.)?plugins\.webcrumbs\.dev\//,"").replace(/\/$/,"")||"MISSING URI";return{log:(o,s)=>a("log",`[${e}] ${o}`,s),info:(o,s)=>a("info",`[${e}] ${o}`,s),warn:(o,s)=>a("warn",`[${e}] ${o}`,s),error:(o,s)=>a("error",`[${e}] ${o}`,s),debug:(o,s)=>a("debug",`[${e}] ${o}`,s),time:o=>l("time",`[${e}] ${o}`),timeEnd:o=>l("timeEnd",`[${e}] ${o}`)}};function a(t,e,o){let s=`${b} ${S[t]} ${e}`;o?console[t](s,o):console[t](s)}function l(t,e){let o=`${b} ${S.time} ${e}`;t==="time"?console.time(o):t==="timeEnd"&&console.timeEnd(o)}var u=class extends HTMLElement{static observedAttributes=["uri"];connectedCallback(){this.loaded={script:!1,style:!1,fonts:!1};let e=this.getAttribute("uri");if(this.log=R(e),this.MESSAGES=g(this),e?.endsWith("/")&&(e=e.slice(0,-1)),!e||!/^https?:\/\//.test(e)){this.log.error(this.MESSAGES.MISSING_URI);return}e.startsWith("https://plugins.webcrumbs.dev/")||this.log.warn(this.MESSAGES.FOREIGN_PLUGIN),this.uri=e,this.renderFrom()}async renderFrom(){let{uri:e}=this;this.log.time("Took"),window.webcrumbsRegistry||(window.webcrumbsRegistry={});let o=`${e}/style.css`,s=`${e}/bundle.js`;await Promise.all([this.loadSharedLibs(),this.loadStyle(o),this.loadFonts(o)]),await this.loadScript(s);let{Component:r}=window.webcrumbs??{};if(!r){this.log.error(this.MESSAGES.MISSING_COMPONENT);return}let{React:i,ReactDOM:c}=window.__webcrumbsSharedLibs??{};if(!i||!c){this.log.error(this.MESSAGES.SHARED_LIBS_LOAD_ERROR);return}window.webcrumbsRegistry[e]={Component:r,React:i,ReactDOM:c},this.renderShadow(r,i,c),this.log.timeEnd("Took")}async loadSharedLibs(){if(!window.__webcrumbsSharedLibs)try{let e=await import("https://cdn.webcrumbs.dev/lib/core.js");p.debug("Loaded shared modules"),window.__webcrumbsSharedLibs=e}catch{this.log.error(this.MESSAGES.SHARED_LIBS_LOAD_ERROR);return}}async loadFonts(e,o=500){try{let s=await fetch(e,{headers:{Range:`bytes=0-${o-1}`}});if(!s.ok)return;let r=await s.text(),i=Array.from(r.matchAll(/@import\s+url\((.*?)\);/g)).map(n=>n[1].replace(/^['"]|['"]$/g,""));window.__webcrumbsFontRegistry||(window.__webcrumbsFontRegistry=new Set);let E=document.querySelectorAll("webcrumbs-plugin").length>1,h=new Set([...document.styleSheets].map(n=>n.href).filter(Boolean));for(let n of i){if(E&&n.includes("family=Material+Symbols+Outlined")){let m="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";if(h.has(m))continue;n=m}if(window.__webcrumbsFontRegistry.has(n)||h.has(n))continue;let d=document.createElement("link");d.rel="stylesheet",d.href=n,document.head.appendChild(d),window.__webcrumbsFontRegistry.add(n)}document.fonts.ready.then(()=>{this.log.debug("Loaded fonts"),this.loaded.fonts=!0})}catch{this.log.error(this.MESSAGES.FONT_LOAD_ERROR,e)}}async loadStyle(e){return new Promise((o,s)=>{let r=this.shadowRoot||this.attachShadow({mode:"open"}),i=document.createElement("link");i.rel="stylesheet",i.href=e,i.onload=()=>{this.log.debug("Loaded style"),this.loaded.style=!0,requestAnimationFrame(o)},i.onerror=()=>{this.log.error(this.MESSAGES.STYLE_LOAD_ERROR,e),s()},r.appendChild(i)})}renderShadow(e,o,s){s.createRoot(this.shadowRoot).render(o.createElement(e)),this.log.debug("Rendered plugin")}loadScript(e){return window.__webcrumbsScriptCache||(window.__webcrumbsScriptCache={}),window.__webcrumbsScriptCache[e]||(window.__webcrumbsScriptCache[e]=new Promise((o,s)=>{let r=document.querySelector(`script[src="${e}"]`);if(r){r.addEventListener("load",o),r.addEventListener("error",s);return}let i=document.createElement("script");i.src=e,i.type="module",i.onload=()=>{this.log.debug("Loaded code"),this.loaded.script=!0,o()},i.onerror=()=>{this.log.error(this.MESSAGES.SCRIPT_LOAD_ERROR,e),s()},(this.shadowRoot||this.attachShadow({mode:"open"})).appendChild(i)})),window.__webcrumbsScriptCache[e]}};customElements.define("webcrumbs-plugin",u);})();
