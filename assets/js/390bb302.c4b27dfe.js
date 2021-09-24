"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[7682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>l});var o=n(2263),r=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,o)}}function l(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const r=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(7294),r=n(944),a=n(6010);const l="tabItem_1uMI",i="tabItemActive_2DSg";const s=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:p,groupId:m,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,r.Z)(),[g,y]=(0,o.useState)(u),b=o.Children.toArray(e.children),v=[];if(null!=m){const e=f[m];null!=e&&e!==g&&p.some((t=>t.value===e))&&y(e)}const k=e=>{const t=e.currentTarget,n=v.indexOf(t),o=p[n].value;y(o),null!=m&&(h(m,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:r}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:l}=window;return t>=0&&r<=l&&o<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((()=>t.classList.remove(i)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case c:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case s:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":g===e}),key:e,ref:e=>v.push(e),onKeyDown:w,onFocus:k,onClick:k},t)))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294),r=n(9443);const a=function(){const e=(0,o.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>r});var o=n(7294);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return o.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>s});var o=n(2177),r=n(8215),a=n(1395),l=n(7294);const i={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){(0,o.Z)("string"==typeof t||void 0===t);const s=l.Children.toArray(e).map(((e,t)=>{var o;const r=(null==(o=e.props.children.props.className)?void 0:o.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??i[r]??r,element:e}}));return l.createElement(a.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>l.createElement(r.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>a});var o=n(4996),r=n(7294);function a({path:e,controls:t=!1}){return r.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.createElement("source",{src:(0,o.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>r});var o=n(7294);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return o.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},o.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},9734:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>s,default:()=>u});var o=n(7462),r=(n(7294),n(3905)),a=(n(1395),n(8215),n(7840));n(8129),n(8173),n(6776);const l={title:"Useful Console Commands",author:"Noya",steamId:"76561198046984233",date:"22.02.2015"},i={unversionedId:"tools/useful-console-commands",id:"tools/useful-console-commands",isDocsHomePage:!1,title:"Useful Console Commands",description:"Here are the console commands useful for modding. If you constantly use one which isn't on this list, please post it",source:"@site/_articles/tools/useful-console-commands.md",sourceDirName:"tools",slug:"/tools/useful-console-commands",permalink:"/tools/useful-console-commands",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/useful-console-commands.md",version:"current",frontMatter:{title:"Useful Console Commands",author:"Noya",steamId:"76561198046984233",date:"22.02.2015"},sidebar:"tutorials",previous:{title:"Custom Minimap Icons",permalink:"/assets/custom-minimap-icons"},next:{title:"Setting Up Your Addon With GitHub",permalink:"/tools/setting-up-your-addon-with-github"}},s=[],c={toc:s};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are the console commands useful for modding. If you constantly use one which isn't on this list, please post it "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dota_launch_custom_game <addon_name> <map_name>"),": Launches the map_name inside the addon_name content folder. This avoids having to open the map in hammer, You can ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnect")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"restart")," at any point."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entityreport"),":  prints all the spawned entities as a list of index and class"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://puu.sh/g7Tp0/950028a084.png",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entitysummary"),": prints a summary with the percentage of each entity class"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://puu.sh/g7TmQ/9dd2962c89.png",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"soundlist"),": all the sounds playing at the current time, and total memory used"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://puu.sh/g7TlG/cd98c96995.png",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"script_help2"),": shows the list of all the Game API functions"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://puu.sh/g7U5Z/a72fc9be17.jpg",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dota_modifier_dump"),": shows a list of all the modifiers currently applied to every entity"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://puu.sh/g7U53/ad13d17fae.jpg",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"host_timescale <float>"),": Speeds the game up to that number"),(0,r.kt)(a.s,{id:"OddPaleIbadanmalimbe",mdxType:"Gfycat"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"host_timescale 10")))}u.isMDXComponent=!0},6010:(e,t,n)=>{function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);