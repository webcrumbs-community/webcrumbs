/*
  Copyright (c) 2025 Webcrumbs, Inc.

  This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
  You may copy, distribute, and modify this software under the terms of the AGPL-3.0 license.
  See https://www.gnu.org/licenses/agpl-3.0.html for full terms.
*/
(()=>{var w="[Webcrumbs]",b=i=>({MISSING_URI:`
    
      Invalid or missing "uri" attribute. 
      Check that your element includes a valid 'uri'.
          
          Expected:
            <webcrumbs-plugin uri="https://plugins.webcrumbs.dev/demo-component"></webcrumbs-plugin>
          
          Received:
            ${i.outerHTML}
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
      `,LEGACY_SCRIPT_LOAD_ERROR:`

      Plugin uses outdated exports. Rebuild it for multi-plugin support and faster load.

          Before:
            window.webcrumbs = { React, ReactDOM, Component }
    
          Now:
            export { Component, React, ReactDOM };

      `}),g={log:"\u{1F535}",info:"\u{1F7E2}",warn:"\u{1F7E1}",error:"\u{1F534}",debug:"\u{1F7E3}",time:"\u23F1\uFE0F"};var p=i=>{let e=i?.replace(/https?:\/\/(www\.)?plugins\.webcrumbs\.dev\//,"").replace(/\/$/,"")||"MISSING URI";return{log:(t,o)=>c("log",`[${e}] ${t}`,o),info:(t,o)=>c("info",`[${e}] ${t}`,o),warn:(t,o)=>c("warn",`[${e}] ${t}`,o),error:(t,o)=>c("error",`[${e}] ${t}`,o),debug:(t,o)=>c("debug",`[${e}] ${t}`,o),time:t=>m("time",`[${e}] ${t}`),timeEnd:t=>m("timeEnd",`[${e}] ${t}`)}};function c(i,e,t){let o=`${w} ${g[i]} ${e}`;t?console[i](o,t):console[i](o)}function m(i,e){let t=`${w} ${g.time} ${e}`;i==="time"?console.time(t):i==="timeEnd"&&console.timeEnd(t)}var l=class extends HTMLElement{static observedAttributes=["uri"];connectedCallback(){this.loaded={script:!1,style:!1,fonts:!1};let e=this.getAttribute("uri");if(this.log=p(e),this.MESSAGES=b(this),e?.endsWith("/")&&(e=e.slice(0,-1)),!e||!/^https?:\/\//.test(e)){this.log.error(this.MESSAGES.MISSING_URI);return}e.startsWith("https://plugins.webcrumbs.dev/")||this.log.warn(this.MESSAGES.FOREIGN_PLUGIN),this.uri=e,this.renderFrom()}async renderFrom(){let{uri:e}=this;this.log.time("Took"),window.webcrumbsRegistry||(window.webcrumbsRegistry={});let t=`${e}/style.css`,o=`${e}/bundle.js`;await Promise.all([this.loadStyle(t),this.loadFonts(t),this.loadScript(o)]);let{Component:r}=window.webcrumbsRegistry[e]??{};if(!r){this.log.error(this.MESSAGES.MISSING_COMPONENT);return}let{React:s,ReactDOM:a}=window.__webcrumbsSharedLibs??{};if(!s||!a){this.log.error(this.MESSAGES.SHARED_LIBS_LOAD_ERROR);return}this.renderShadow(r,s,a),this.log.timeEnd("Took")}async loadFonts(e,t=500){try{let o=await fetch(e,{headers:{Range:`bytes=0-${t-1}`}});if(!o.ok)return;let r=await o.text(),s=Array.from(r.matchAll(/@import\s+url\((.*?)\);/g)).map(n=>n[1].replace(/^['"]|['"]$/g,""));window.__webcrumbsFontRegistry||(window.__webcrumbsFontRegistry=new Set);let S=document.querySelectorAll("webcrumbs-plugin").length>1,u=new Set([...document.styleSheets].map(n=>n.href).filter(Boolean));for(let n of s){if(S&&n.includes("family=Material+Symbols+Outlined")){let h="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";if(u.has(h))continue;n=h}if(window.__webcrumbsFontRegistry.has(n)||u.has(n))continue;let d=document.createElement("link");d.rel="stylesheet",d.href=n,document.head.appendChild(d),window.__webcrumbsFontRegistry.add(n)}document.fonts.ready.then(()=>{this.log.debug("Loaded fonts"),this.loaded.fonts=!0})}catch{this.log.error(this.MESSAGES.FONT_LOAD_ERROR,e)}}async loadStyle(e){return new Promise((t,o)=>{let r=this.shadowRoot||this.attachShadow({mode:"open"}),s=document.createElement("link");s.rel="stylesheet",s.href=e,s.onload=()=>{this.log.debug("Loaded style"),this.loaded.style=!0,requestAnimationFrame(t)},s.onerror=()=>{this.log.error(this.MESSAGES.STYLE_LOAD_ERROR,e),o()},r.appendChild(s)})}async loadScript(e){return window.webcrumbsRegistry||(window.webcrumbsRegistry={}),window.webcrumbsRegistry[this.uri]?Promise.resolve():import(e).then(t=>{let{Component:o,React:r,ReactDOM:s}=t;if(!o)throw new Error("Missing Component export");window.webcrumbsRegistry[this.uri]={Component:o},window.__webcrumbsSharedLibs={React:r,ReactDOM:s},this.log.debug("Loaded code via ES module import"),this.loaded.script=!0}).catch(()=>(this.log.warn(this.MESSAGES.LEGACY_SCRIPT_LOAD_ERROR),this.loadScript_v03(e).then(()=>{let{Component:t,React:o,ReactDOM:r}=window.webcrumbs||{};if(!t)throw new Error("Missing Component export");window.webcrumbsRegistry[this.uri]={Component:t},window.__webcrumbsSharedLibs={React:o,ReactDOM:r},this.loaded.script=!0})))}loadScript_v03(e){return window.__webcrumbsScriptCache||(window.__webcrumbsScriptCache={}),window.__webcrumbsScriptCache[e]||(window.__webcrumbsScriptCache[e]=new Promise((t,o)=>{let r=document.querySelector(`script[src="${e}"]`);if(r){r.addEventListener("load",t),r.addEventListener("error",o);return}let s=document.createElement("script");s.src=e,s.type="module",s.onload=()=>{this.log.debug("Loaded code"),this.loaded.script=!0,t()},s.onerror=()=>{this.log.error(this.MESSAGES.SCRIPT_LOAD_ERROR,e),o()},(this.shadowRoot||this.attachShadow({mode:"open"})).appendChild(s)})),window.__webcrumbsScriptCache[e]}renderShadow(e,t,o){o.createRoot(this.shadowRoot).render(t.createElement(e)),this.log.debug("Rendered plugin")}};customElements.define("webcrumbs-plugin",l);})();
