(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{117:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return d}));var n=o(2),a=(o(0),o(172)),i=o(173);o(174);const r={title:"Getting Started",author:"Myll",steamId:"76561198000729788",date:"22.02.2015"},l={id:"getting-started",title:"Getting Started",description:"Edit 9/25/15: Please note that this guide is somewhat out of date and lacking in content. I invite any decent Dota 2 modder to take the reigns and rewrite this guide proper.",source:"@site/_articles/getting-started.md",permalink:"/getting-started",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/getting-started.md",sidebar:"docs",next:{title:"Scripting Introduction",permalink:"/scripting-introduction"}},s=[{value:"The Facets of Dota 2 Modding",id:"the-facets-of-dota-2-modding",children:[]},{value:"Step #0: Installing the Dota 2 Workshop Tools",id:"step-0-installing-the-dota-2-workshop-tools",children:[]},{value:"Step #1: Creating a New Addon From The &#39;Barebones&#39; Template",id:"step-1-creating-a-new-addon-from-the-barebones-template",children:[]},{value:"Step #2: Creating your map in Hammer",id:"step-2-creating-your-map-in-hammer",children:[]},{value:"Step #3: Scripting and beyond...",id:"step-3-scripting-and-beyond",children:[]}],c={rightToc:s};function d({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Edit 9/25/15"),": Please note that this guide is somewhat out of date and lacking in content. I invite any decent Dota 2 modder to take the reigns and rewrite this guide proper."),Object(a.b)("p",null,"So you're completely new to Dota 2 modding? Don't know where in the hell to begin? This is the guide for you, the future Dota 2 modder!"),Object(a.b)("p",null,'Note: \u201cAddon\u201d, "mod", and \u201ccustom game\u201d are all synonymous throughout this guide (and likely the entire website).'),Object(a.b)("h2",{id:"the-facets-of-dota-2-modding"},"The Facets of Dota 2 Modding"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools"}),"Workshop Tools Wiki Homepage")," does a good job with subdividing all the possible aspects of Dota 2 modding:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Level design (Uses the tool called "Hammer")'),Object(a.b)("li",{parentName:"ul"},"Scripting (Divided into KeyValue editing and Lua scripting)"),Object(a.b)("li",{parentName:"ul"},"Modeling (Importing your own custom models into your addon)"),Object(a.b)("li",{parentName:"ul"},"Sounds (Importing your own custom sounds, or editing existing ones)"),Object(a.b)("li",{parentName:"ul"},"Particles (Editing existing particles or creating your own using the Particle Editor Tool (PET))"),Object(a.b)("li",{parentName:"ul"},"Custom UI (Creating Panorama scripts to extend or modify the existing Dota 2 UI)")),Object(a.b)("h2",{id:"step-0-installing-the-dota-2-workshop-tools"},"Step #0: Installing the Dota 2 Workshop Tools"),Object(a.b)("p",null,"You can't mod Dota without the Workshop Tools!"),Object(a.b)("p",null,"taken from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Installing_and_Launching_Tools"}),"How to install the Dota 2 Workshop Tools"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Right-click on Dota 2 in Steam and select View Downloadable Content."),Object(a.b)("li",{parentName:"ul"},"Check the box in the Install column next to Dota 2 Workshop Tools DLC."),Object(a.b)("li",{parentName:"ul"},"Click Close. The required content will begin downloading.")),Object(a.b)("h2",{id:"step-1-creating-a-new-addon-from-the-barebones-template"},"Step #1: Creating a New Addon From The 'Barebones' Template"),Object(a.b)("p",null,"To start off on a good foot, you\u2019re going to want to create a new addon based off of the Barebones template, which is a community made alternative to Valve\u2019s default addon templates (i.e. Holdout). This is the link to the updated BMD Barebones: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/bmddota/barebones"}),"https://github.com/bmddota/barebones")," ",Object(a.b)("br",null)," After downloading it as a zip, you want to browse to your ",Object(a.b)("inlineCode",{parentName:"p"},".../Steam/SteamApps/dota 2 beta/")," and merge the ",Object(a.b)("inlineCode",{parentName:"p"},"game")," and ",Object(a.b)("inlineCode",{parentName:"p"},"content")," folders from the .zip into the that /dota 2 beta/ folder (which should already have folders in it called ",Object(a.b)("inlineCode",{parentName:"p"},"game")," and ",Object(a.b)("inlineCode",{parentName:"p"},"content"),")"),Object(a.b)("p",null,"~Alternatively, you can use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Myll/Dota-2-ModKit/releases"}),"Dota 2 ModKit")," and go to ",Object(a.b)("inlineCode",{parentName:"p"},"File > New Addon > BMD's Barebones"),".~"),Object(a.b)("p",null,"Next, start up the Workshop Tools (or restart them if you have them opened already), and double click your new addon. Set it as the default addon. Then, go into Hammer -> File -> Open -> barebones.vmap -> Press F9 to begin building the map. After Hammer finishes building your map, your custom game will automatically load in Dota. "),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://gfycat.com/NarrowIncredibleBongo"}),"Gfy Demo of Step #1"),'. NOTE: Workshop tools now are launched through the same link in steam as the main dota client, and not the "Tools" list in steam. Otherwise this image is roughly still accurate.'),Object(a.b)("h2",{id:"step-2-creating-your-map-in-hammer"},"Step #2: Creating your map in Hammer"),Object(a.b)(i.a,{id:"YearlyDismalHuemul",mdxType:"Gfycat"}),Object(a.b)("p",null,"(Credits to DarkMio for the gfy.)"),Object(a.b)("p",null,"Hammer is the tool you use to create worlds for your custom game. I highly recommend you start off creating something in Hammer first instead of diving straight into the scripting or another facet. You can have the most sophisticated scripting in the workshop, but how are people going to enjoy your game if there isn't a world they can play in?"),Object(a.b)("p",null,"Once you get to the point of having a rough layout blocked out for your map, it's probably safe to move on to scripting. You don't want to spend too much time piddling with detailing on something you realize needs changing once you get into the nitty gritty of your mode."),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Level_Design"}),"The wiki page on Hammer")," does a good job with giving you a run-down of Hammer. I'd recommend you start with the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Level_Design/Tile_Editor_Basics"}),"Tile editor")," section."),Object(a.b)("p",null,"BMD has made some rather nice beginner Hammer tutorial videos:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=GMvmdnNM6Sc"}),"part 1: Tile Editor")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=grLUv2hUDRY"}),"part 2: Mesh Basics")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=ln3ep-k__dk"}),"part 3: entity basics"))),Object(a.b)("h2",{id:"step-3-scripting-and-beyond"},"Step #3: Scripting and beyond..."),Object(a.b)("p",null,"Scripting is the next most important part of your addon. It is divided into Lua scripting, and KeyValue scripting. I'm going to go ahead and redirect you to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/articles/beginners-guide-to-dota-scripting"}),"Noya's Beginner Scripting Guide"),", since it has essentially the same information that would go in this section. "),Object(a.b)("p",null,"Now I'm going keep this short and sweet. I've already presented a ton of information for you to begin delving yourself into Dota 2 modding! Becoming good at Hammer mapping and good at Lua and KeyValue scripting will go a very long way in making successful, fun Dota 2 custom games. Please don't hesitate to ask questions in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://moddota.com/forums/chat"}),"the #dota2modhelpdesk IRC channel")," or in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://moddota.com/forums/categories/development"}),"Questions subforum"),"."))}d.isMDXComponent=!0},172:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,b=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return o?a.a.createElement(b,l(l({ref:t},c),{},{components:o})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},173:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(0),a=o.n(n);function i({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},174:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(0),a=o.n(n);function i({id:e,playlistId:t,aspectRatio:o=16/9}){const n=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/o*100+"%"}},a.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);