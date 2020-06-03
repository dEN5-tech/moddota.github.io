(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=(n(0),n(172));n(173),n(174);const o={title:"Keybindings",author:"ole",steamId:"76561197966853265",date:"24.07.2015"},i={id:"panorama/keybindings",title:"Keybindings",description:"Introduction",source:"@site/_articles/panorama/keybindings.md",permalink:"/panorama/keybindings",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/keybindings.md",sidebar:"docs",previous:{title:"Introduction to Panorama UI with TypeScript",permalink:"/panorama/introduction-to-panorama-ui-with-typescript"},next:{title:"DOTAScenePanel",permalink:"/panorama/dotascenepanel"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Panorama",id:"panorama",children:[]}],l={rightToc:c};function u({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"With the recent update (20th of july) valve added support for custom keybindings. That is, you can bind key's to fire a custom command."),Object(r.b)("p",null,"The technique used is derived from rpg_example."),Object(r.b)("p",null,"Although this method is not nescessarily limited to panorama this tutorial will focus on using them within panorama."),Object(r.b)("h3",{id:"setup"},"Setup"),Object(r.b)("p",null,"Start by adding a couple of lines to your ",Object(r.b)("inlineCode",{parentName:"p"},"addoninfo.txt")," file located in ",Object(r.b)("inlineCode",{parentName:"p"},"/game/<your addon>/addoninfo.txt")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'"AddonInfo"\n{\n  "TeamCount" "10"\n  "maps"      "your_map"\n  "IsPlayable"  "1"\n  "your_map"\n  {\n          "MaxPlayers"                    "10"\n  }\n  "Default_Keys"\n    {\n        "01"\n        {\n            "Key"       "S"\n            "Command"   "CustomGameExecuteAbility1"\n            "Name"      "Execute Ability 1"\n        }\n        "02"\n        {\n            "Key"       "Z"\n            "Command"   "+CustomGameTestButton"\n            "Name"      "Example"\n        }\n    }\n}\n')),Object(r.b)("p",null,"The important parts are of course what is defined in ",Object(r.b)("inlineCode",{parentName:"p"},'"Default_Keys"')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'"Key"'),"\nis the key you want to bind, use capital letters here"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'"Command"'),"\nis the command to fire, make sure the command name is unique.",Object(r.b)("br",{parentName:"p"}),"\n","The prefix of the command defines when the command will trigger."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'"Name"'),"\nName of the command, used for debugging purposes."),Object(r.b)("p",null,"####Command Prefixes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prefix"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"(nothing)")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"command")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Command will trigger on press and release")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"+")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"+command")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Trigger when key is pressed (used for normal key press)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"-")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"-command")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Command will trigger when key is released")))),Object(r.b)("p",null,"The prefixes do not lock the command to be triggered only in that event. But is a good self-reference for what you want the keybind to do."),Object(r.b)("h3",{id:"panorama"},"Panorama"),Object(r.b)("p",null,"Catching the keybind commands in Panorama is easy:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function OnExecuteAbility1ButtonPressed()\n{\n  $.Msg("\'S\' Pressed or Released");\n}\n\nfunction OnTestButtonPressed()\n{\n  $.Msg("\'Z\' Pressed");\n}\n\nfunction OnTestButtonReleased()\n{\n  $.Msg("\'Z\' Released");\n}\n\n(function() {\n  Game.AddCommand( "CustomGameExecuteAbility1", OnExecuteAbility1ButtonPressed, "", 0 );\n  Game.AddCommand( "+CustomGameTestButton", OnTestButtonPressed, "", 0 );\n  Game.AddCommand( "-CustomGameTestButton", OnTestButtonReleased, "", 0 );\n})();\n')),Object(r.b)("p",null,"Note how the prefixes are used again. Even though we only defined ",Object(r.b)("inlineCode",{parentName:"p"},"CustomGameTestButton")," to be fired on ",Object(r.b)("em",{parentName:"p"},"key down"),", we can easily catch the release event in our JS aswell."))}u.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,s=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.a.createElement(s,c(c({ref:t},u),{},{components:n})):r.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function o({id:e,aspectRatio:t=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function o({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);