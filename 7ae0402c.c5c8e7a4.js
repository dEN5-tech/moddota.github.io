(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),r=(n(0),n(193)),a=(n(185),n(186),n(194));n(195),n(196),n(197);const o={title:"Creating units with a duration",author:"Pizzalol",steamId:"76561198015886976",date:"15.01.2015"},l={id:"units/creating-units-with-a-duration",isDocsHomePage:!1,title:"Creating units with a duration",description:"This is a quick tutorial on how to create custom units so that they appear with a circular timer next to their health bar and the time remaining on the XP bar",source:"@site/_articles/units/creating-units-with-a-duration.md",permalink:"/units/creating-units-with-a-duration",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/creating-units-with-a-duration.md",sidebar:"tutorials",previous:{title:"Unit producing buildings",permalink:"/units/unit-producing-buildings"},next:{title:"Adding a Very Simple AI to Units",permalink:"/units/adding-a-very-simple-ai-to-units"}},c=[{value:"KV example",id:"kv-example",children:[]},{value:"Lua example",id:"lua-example",children:[]}],u={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a quick tutorial on how to create custom units so that they appear with a circular timer next to their health bar and the time remaining on the XP bar"),Object(r.b)("p",null,"If you are not sure to what I am referring to then look at these images ",Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/NL1Gqmr.png",alt:"img"}))," and ",Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/GOeKyp7.png",alt:"img"}))),Object(r.b)("p",null,"The thing that we will need is ",Object(r.b)("inlineCode",{parentName:"p"},"modifier_kill")),Object(r.b)("p",null,"You can either apply it in KV using ",Object(r.b)("inlineCode",{parentName:"p"},"ApplyModifier")," or in Lua using ",Object(r.b)("inlineCode",{parentName:"p"},"AddNewModifier")),Object(r.b)("p",null,"It allows for more flexibility and allows for the proper creation of summoned timed units through Lua"),Object(r.b)("h3",{id:"kv-example"},"KV example"),Object(r.b)("p",null,"Here is an example of it in KV; one spider spawns without the ",Object(r.b)("inlineCode",{parentName:"p"},"modifier_kill")," and the other one with it"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Note:"))," In this example there is no difference between applying ",Object(r.b)("inlineCode",{parentName:"p"},"modifier_kill")," or using the inbuilt ",Object(r.b)("inlineCode",{parentName:"p"},"Duration")," parameter of the ",Object(r.b)("inlineCode",{parentName:"p"},"SpawnUnit")," action block"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'"test_ability"\n{\n    // General        \n    "BaseClass"                "ability_datadriven"\n    "AbilityBehavior"                "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE"\n    "AbilityType"                    "DOTA_ABILITY_TYPE_BASIC"\n    // Time         \n    "AbilityCooldown"                "0.0"\n    // Cost        \n    "AbilityManaCost"                "0"\n    // Special        \n    "AbilitySpecial"\n    {\n        "01"\n        {\n            "var_type"                    "FIELD_FLOAT"\n            "duration"                    "10.0"\n        }\n    }\n    "OnSpellStart"\n    {\n        "SpawnUnit"\n        {\n            "UnitName"    "npc_dota_broodmother_spiderling"\n            "UnitCount"    "1"\n            "SpawnRadius"    "200"\n            "Target"        "CASTER"\n\n            "OnSpawn"\n            {\n                "ApplyModifier"\n                {\n                    "ModifierName"    "modifier_kill"\n                    "Target"        "TARGET"\n                    "Duration"        "%duration"\n                }\n            }\n        }\n        "SpawnUnit"\n        {\n            "UnitName"    "npc_dota_broodmother_spiderling"\n            "UnitCount"    "1"\n            "SpawnRadius"    "200"\n            "Target"        "CASTER"\n        }\n    }\n}\n')),Object(r.b)("p",null,"and a short video along with it"),Object(r.b)(a.a,{id:"AmusedScientificHoneybadger",mdxType:"Gfycat"}),Object(r.b)("h3",{id:"lua-example"},"Lua example"),Object(r.b)("p",null,"This is a really simple example on how to use it with Lua"),Object(r.b)("p",null,"this function will apply the ",Object(r.b)("inlineCode",{parentName:"p"},"modifier_kill")," modifier with a duration of 10 seconds after which the caster will die"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'function KillCaster( keys )\n    local caster = keys.caster\n\n    caster:AddNewModifier(caster, nil, "modifier_kill", {duration = 10})\nend\n')))}s.isMDXComponent=!0},185:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(192),o=n(189),l=n(90),c=n.n(l);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:d}=e,{tabGroupChoices:m,setTabGroupChoices:b}=Object(a.a)(),[f,h]=Object(i.useState)(l);if(null!=d){const e=m[d];null!=e&&e!==f&&p.some(t=>t.value===e)&&h(e)}const g=e=>{h(e),null!=d&&b(d,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},186:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){return r.a.createElement("div",null,e.children)}},187:function(e,t,n){"use strict";var i=n(0),r=n(34);t.a=function(){return Object(i.useContext)(r.a)}},188:function(e,t,n){"use strict";function i(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return i}))},189:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(187),r=n(188);function a(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:a="/",url:o}={}}=Object(i.a)();if(!e)return e;if(t)return a+e;if(!Object(r.a)(e))return e;const l=a+e.replace(/^\//,"");return n?o+l:l}},191:function(e,t,n){"use strict";var i=n(0);const r=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},192:function(e,t,n){"use strict";var i=n(0),r=n(191);t.a=function(){return Object(i.useContext)(r.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(b,l(l({ref:t},u),{},{components:n})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0),r=n.n(i);function a({id:e,aspectRatio:t=4/3,hd:n="0"}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0),r=n.n(i);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(3),r=n(186),a=n(185),o=n(0),l=n.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function u({children:e,group:t,titles:n}){Object(i.a)("string"==typeof t||void 0===t);const o=l.a.Children.toArray(e).map((e,t)=>{var i,r,a,o;const l=null!==(i=null===(r=e.props.children.props.className)||void 0===r?void 0:r.replace(/language-/,""))&&void 0!==i?i:"Tab "+(t+1);return{id:t,languageName:null!==(a=null!==(o=(void 0!==n&&n.length>0?n.split("|"):[])[t])&&void 0!==o?o:c[l])&&void 0!==a?a:l,element:e}});return l.a.createElement(a.a,{groupId:void 0!==t?"multi-code-block-"+t:void 0,defaultValue:o[0].id,values:o.map(({id:e,languageName:t})=>({value:e,label:t}))},o.map(({id:e,element:t})=>l.a.createElement(r.a,{key:e,value:e},t)))}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(190),r=n(0),a=n.n(r);function o({path:e,controls:t=!1}){return a.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.a.createElement("source",{src:Object(i.a)(e),type:"video/mp4"}))}}}]);