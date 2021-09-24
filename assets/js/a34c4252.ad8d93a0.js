"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[1764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},4996:(e,t,r)=>{r.d(t,{C:()=>o,Z:()=>i});var n=r(2263),a=r(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},8215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},1395:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),a=r(944),o=r(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,s=39;const u=function(e){const{lazy:t,block:r,defaultValue:u,values:p,groupId:m,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:v}=(0,a.Z)(),[b,h]=(0,n.useState)(u),y=n.Children.toArray(e.children),g=[];if(null!=m){const e=f[m];null!=e&&e!==b&&p.some((t=>t.value===e))&&h(e)}const w=e=>{const t=e.currentTarget,r=g.indexOf(t),n=p[r].value;h(n),null!=m&&(v(m,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&a<=i&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},O=e=>{var t;let r;switch(e.keyCode){case s:{const t=g.indexOf(e.target)+1;r=g[t]||g[0];break}case c:{const t=g.indexOf(e.target)-1;r=g[t]||g[g.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},p.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":b===e}),key:e,ref:e=>g.push(e),onKeyDown:O,onFocus:w,onClick:w},t)))),t?(0,n.cloneElement)(y.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}},9443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(7294).createContext)(void 0)},944:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(9443);const o=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,r)=>{r.d(t,{s:()=>a});var n=r(7294);function a({id:e,aspectRatio:t=4/3,hd:r="0"}){return n.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},n.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${r}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,r)=>{r.d(t,{s:()=>c});var n=r(2177),a=r(8215),o=r(1395),i=r(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t,titles:r}){(0,n.Z)("string"==typeof t||void 0===t);const c=i.Children.toArray(e).map(((e,t)=>{var n;const a=(null==(n=e.props.children.props.className)?void 0:n.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==r&&r.length>0?r.split("|"):[])[t]??l[a]??a,element:e}}));return i.createElement(o.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:c[0].id,values:c.map((({id:e,languageName:t})=>({value:e,label:t})))},c.map((({id:e,element:t})=>i.createElement(a.Z,{key:e,value:e},t))))}},6776:(e,t,r)=>{r.d(t,{X:()=>o});var n=r(4996),a=r(7294);function o({path:e,controls:t=!1}){return a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.createElement("source",{src:(0,n.Z)(e),type:"video/mp4"}))}},8129:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(7294);function a({id:e,playlistId:t,aspectRatio:r=16/9}){const a=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return n.createElement("p",{style:{position:"relative",paddingBottom:1/r*100+"%"}},n.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},6562:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>c,default:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=(r(1395),r(8215),r(7840),r(8129));r(8173),r(6776);const i={title:"Inclusive Panorama UI",author:"Arhowk",steamId:"76561198028163607",date:"22.12.2016"},l={unversionedId:"panorama/inclusive-panorama-ui",id:"panorama/inclusive-panorama-ui",isDocsHomePage:!1,title:"Inclusive Panorama UI",description:"",source:"@site/_articles/panorama/inclusive-panorama-ui.md",sourceDirName:"panorama",slug:"/panorama/inclusive-panorama-ui",permalink:"/panorama/inclusive-panorama-ui",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/inclusive-panorama-ui.md",version:"current",frontMatter:{title:"Inclusive Panorama UI",author:"Arhowk",steamId:"76561198028163607",date:"22.12.2016"},sidebar:"tutorials",previous:{title:"Precache, Fixing and avoiding issues",permalink:"/scripting/precache-fixing-and-avoiding-issues"},next:{title:"Introduction to Panorama UI with TypeScript",permalink:"/panorama/introduction-to-panorama-ui-with-typescript"}},c=[],s={toc:c};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o._,{id:"ZVXaO4rrL6A",mdxType:"YouTube"}),(0,a.kt)(o._,{id:"1z5T8XvmYOY",mdxType:"YouTube"}))}u.isMDXComponent=!0},6010:(e,t,r)=>{function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:()=>a})}}]);