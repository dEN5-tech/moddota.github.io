(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var i=n(2),a=(n(0),n(172));n(173),n(174);const r={title:"Creating innate (available from level 1) abilities",author:"DoctorGester",steamId:"76561198046920629",date:"27.09.2019"},l={id:"abilities/creating-innate-abilities",title:"Creating innate (available from level 1) abilities",description:"This article will guide you through creating an ability which is available to the given hero right away, like Earth Spirit's Stone Remnant.",source:"@site/_articles/abilities/creating-innate-abilities.md",permalink:"/abilities/creating-innate-abilities",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/creating-innate-abilities.md",sidebar:"docs",previous:{title:"Simple Custom Ability",permalink:"/abilities/simple-custom-ability"},next:{title:"Making any ability use charges",permalink:"/abilities/making-any-ability-use-charges"}},o=[{value:"Lua abilities",id:"lua-abilities",children:[]},{value:"Datadriven and builtin abilities",id:"datadriven-and-builtin-abilities",children:[]}],c={rightToc:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This article will guide you through creating an ability which is available to the given hero right away, like Earth Spirit's Stone Remnant.\nThis guide assumes you already have an ability set up on a hero."),Object(a.b)("h2",{id:"lua-abilities"},"Lua abilities"),Object(a.b)("p",null,"Lua abilities can define a ",Object(a.b)("inlineCode",{parentName:"p"},"Spawn")," method, that is invoked by the engine when ability is cretated."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"my_innate_ability = my_innate_ability or {}\nfunction my_innate_ability:Spawn()\n    self:SetLevel(1)\nend\n")),Object(a.b)("h2",{id:"datadriven-and-builtin-abilities"},"Datadriven and builtin abilities"),Object(a.b)("p",null,"The plan is:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Subscribe to the hero spawn event"),Object(a.b)("li",{parentName:"ol"},"Determine if the spawned hero has a specific ability"),Object(a.b)("li",{parentName:"ol"},"Level it up")),Object(a.b)("p",null,"Okay. Since the entry point to every mod is the file ",Object(a.b)("inlineCode",{parentName:"p"},"addon_game_mode.lua")," go right there and find ",Object(a.b)("inlineCode",{parentName:"p"},"function Activate()"),".\nActivate is the function called on the very start of our custom game when all the players have loaded.\nWe can subscribe to events using ",Object(a.b)("inlineCode",{parentName:"p"},"ListenToGameEvent"),"."),Object(a.b)("p",null,"Put the following code inside the ",Object(a.b)("inlineCode",{parentName:"p"},"Activate")," function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"ListenToGameEvent('npc_spawned', function(event)\n    HandleNpcSpawned(event.entindex)\nend, nil)\n")),Object(a.b)("p",null,"This code is subscribing to the ",Object(a.b)("inlineCode",{parentName:"p"},"npc_spawned")," event and then calling the HandleNpcSpawned function (we will create that later) with the spawned entity index.\nThat entity index is provided to us in the event table when the event is triggered."),Object(a.b)("p",null,"Let's create the ",Object(a.b)("inlineCode",{parentName:"p"},"HandleNpcSpawned")," function, put it in the same file just below ",Object(a.b)("inlineCode",{parentName:"p"},"Activate"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'function HandleNpcSpawned(entityIndex)\n    local entity = EntIndexToHScript(entityIndex)\n    local innateAbilityName = "my_innate_ability"\n    \n    if entity:IsRealHero() and entity:HasAbility(innateAbilityName) then\n        entity:FindAbilityByName(innateAbilityName):SetLevel(1)\n    end\nend\n')),Object(a.b)("p",null,"Let's go line by line here. After defining a function which accepts our entityIndex parameter we define a variable, which holds the actual entity.\nWe turn entity index into an actual entity using ",Object(a.b)("inlineCode",{parentName:"p"},"EntIndexToHScript"),". Now we can call methods on our actual entity.\nFirst we declare our innate ability name for easier usage.\nThen we make a condition where we check that our entity is indeed a hero and that it has that ability.\nIf all conditions hold true we get the handle of that ability and set it to level 1 right away."),Object(a.b)("p",null,"That's it! Now all heroes who have ",Object(a.b)("inlineCode",{parentName:"p"},"my_innate_ability")," will automatically have it leveled up on spawn."))}s.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.a.createElement(h,o(o({ref:t},s),{},{components:n})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n.n(i);function r({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n.n(i);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);