(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=(n(0),n(187));n(182),n(183),n(188),n(189),n(190);const a={title:"Setting Up Your Addon With GitHub",author:"Veggiesama",date:"07.03.2015"},i={id:"tools/setting-up-your-addon-with-github",isDocsHomePage:!1,title:"Setting Up Your Addon With GitHub",description:"Split the game into a game and content folder, then add junctions to link them with the dota files.",source:"@site/_articles/tools/setting-up-your-addon-with-github.md",permalink:"/tools/setting-up-your-addon-with-github",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/setting-up-your-addon-with-github.md",sidebar:"tutorials",previous:{title:"Useful Console Commands",permalink:"/tools/useful-console-commands"},next:{title:"Combining KV files using #base",permalink:"/tools/combining-kv-files-using-base"}},c=[],u={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Split the game into a game and content folder, then add junctions to link them with the dota files."),Object(o.b)("p",null,"Create the junctions:"),Object(o.b)("p",null,'mklink /J "C:\\Users\\Veggiesama\\Desktop\\HVH\\game\\hunter_v_hunted\\" "C:\\Games\\steamapps\\common\\dota 2 beta\\game\\dota_addons\\hunter_v_hunted\\"'),Object(o.b)("p",null,"Junction created for C:\\Users\\Veggiesama\\Desktop\\HVH\\game\\hunter_v_hunted\\ <<===>> C:\\Games\\steamapps\\common\\dota 2 beta\\game\\dota_addons\\hunter_v_hunted\\"),Object(o.b)("p",null,'mklink /J "C:\\Users\\Veggiesama\\Desktop\\HVH\\content\\hunter_v_hunted\\" "C:\\Games\\steamapps\\common\\dota 2 beta\\content\\dota_addons\\hunter_v_hunted\\"'),Object(o.b)("p",null,"Junction created for C:\\Users\\Veggiesama\\Desktop\\HVH\\content\\hunter_v_hunted\\ <<===>> C:\\Games\\steamapps\\common\\dota 2 beta\\content\\dota_addons\\hunter_v_hunted\\"),Object(o.b)("p",null,"Now you can do modifications from the steamapps folder and still use Github for version control from a desktop folder."))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(186),i=n(184),c=n(90),u=n.n(c);const s=37,l=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(a.a)(),[b,g]=Object(r.useState)(c);if(null!=d){const e=m[d];null!=e&&e!==b&&p.some(t=>t.value===e)&&g(e)}const h=e=>{g(e),null!=d&&f(d,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":b===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===b)[0]))}},183:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},184:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},185:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},186:function(e,t,n){"use strict";var r=n(0),o=n(185);t.a=function(){return Object(r.useContext)(o.a)}},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r);function a({id:e,aspectRatio:t=4/3}){return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},o.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),o=n(183),a=n(182),i=n(0),c=n.n(i);const u={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t}){Object(r.a)("string"==typeof t||null===t);const n=c.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(r.a)(t in u),{language:t,element:e}});return c.a.createElement(a.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:u[e]}))},n.map(({language:e,element:t})=>c.a.createElement(o.a,{key:e,value:e},t)))}}}]);