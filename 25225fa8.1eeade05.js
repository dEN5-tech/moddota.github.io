(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=(n(0),n(172));n(173),n(174);const a={title:"Enchanting Trees",author:"DrTeaSpoon",steamId:"76561197975484185",date:"08.09.2016"},o={id:"abilities/lua-modifiers/4",title:"Enchanting Trees",description:"Without further delay. Lets get to it!",source:"@site/_articles/abilities/lua-modifiers/4.md",permalink:"/abilities/lua-modifiers/4",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/4.md",sidebar:"docs",previous:{title:"Transformations",permalink:"/abilities/lua-modifiers/3"},next:{title:"Reutilizing Built-In Modifiers",permalink:"/abilities/reutilizing-built-in-modifiers"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Without further delay. Lets get to it!",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"npc_abilities_custom.txt")," entry for our ability."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'"enchant_tree_lua"\n{\n    // These are required for this to work\n    "BaseClass"             "ability_lua"\n    "ScriptFile"                    "lua_abilities/enchant_tree/ability.lua" //set your script file path in \'vscripts\' folder\n    "AbilityBehavior"               "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"\n    "AbilityUnitTargetTeam"         "DOTA_UNIT_TARGET_TEAM_CUSTOM"\n    "AbilityUnitTargetType"         "DOTA_UNIT_TARGET_TREE"\n    "AbilityDuration"               "10.0" //well, technically optional.\n    // Optional stuff\n    "AbilityTextureName"            "enchant_tree_lua"\n    "AbilityCastPoint"              "0.1"\n    "AbilityCooldown"               "5.0"\n    "AbilityManaCost"               "100"\n    "AbilityCastRange"              "400"\n}\n')),Object(i.b)("p",null,"This is your basic start for lua ability."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'if enchant_tree_lua == nil then\n    enchant_tree_lua = class({})\nend\nLinkLuaModifier( "enchant_tree_lua_mod", "lua_abilities/enchant_tree/modifier.lua", LUA_MODIFIER_MOTION_NONE )\n')),Object(i.b)("p",null,"The magic happens here. ",Object(i.b)("inlineCode",{parentName:"p"},"CreateModifierThinker")," creates sort of invisible unit with modifier attached to it."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'function enchant_tree_lua:OnSpellStart()\n    CreateModifierThinker( self:GetCaster(), self, "enchant_tree_lua_mod", { duration = self:GetDuration() }, self:GetCursorPosition(), self:GetCaster():GetTeamNumber(), true )\nend\n')),Object(i.b)("p",null,'Now for the next piece of magic we need to setup our cool modifier. In this example the file path would be "vscripts/lua_abilities/enchant_tree/modifier.lua".',Object(i.b)("br",{parentName:"p"}),"\n","There are two major parts for every 'tree enchantment'. First is making sure that we have tree nearby. Because of engine limitations the trees are difficult to interact with. For our solution we are simply requesting from gridnav every half a second if there is trees in very small area at our thinker unit's location.",Object(i.b)("br",{parentName:"p"}),"\n","The last part is minor optimization that may become redundant but was not at the time of developing this. There was issue where the thinker unit would remain on the map for some time after the modifier was destroyed."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),"if enchant_tree_lua_mod == nil then\n    enchant_tree_lua_mod = class({})\nend\nfunction enchant_tree_lua_mod:OnCreated( kv )   \n    if IsServer() then\n        self:StartIntervalThink(0.5)\n    end\nend\nfunction enchant_tree_lua_mod:OnIntervalThink()\n    if IsServer() then\n        if not GridNav:IsNearbyTree(self:GetParent():GetAbsOrigin(), 10, false) then\n            self:Destroy()\n        end\n    end\nend\nfunction enchant_tree_lua_mod:OnDestroy()\n    if IsServer() then\n        UTIL_Remove( self:GetParent() )\n    end\nend\n")),Object(i.b)("p",null,"Now comes the fun part. What do we want to do with this modifier.",Object(i.b)("br",{parentName:"p"}),"\n","I decided to go with soul collecting tree: if enemy hero is killed in radius(you need to add this to special values of your ",Object(i.b)("inlineCode",{parentName:"p"},"npc_abilities_custom.txt"),") the owner of the spell steal up to 2 of victim's primary stat."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'function enchant_tree_lua_mod:DeclareFunctions()\n    local funcs = {\n        MODIFIER_EVENT_ON_HERO_KILLED\n    }\n    return funcs\nend\n\nfunction enchant_tree_lua_mod:OnHeroKilled(kv)\n    if IsServer() then\n        if kv.unit and kv.unit:GetTeam() ~= self:GetCaster():GetTeam() then\n            if (self:GetParent():GetAbsOrigin() - kv.unit:GetAbsOrigin()):Length2D() <= self:GetAbility():GetSpecialValueFor("radius") then\n                self:CollectSoul(kv.unit)\n            end\n        end\n    end\nend\n\nfunction enchant_tree_lua_mod:CollectSoul(hTarget)\n  local primary = hTarget:GetPrimaryAttribute()\n  local val = hTarget:GetPrimaryStatValue()\n  local n = math.max (0, math.min(2,val))\n  if primary == 0 then\n    self:GetCaster():ModifyStrength(n) \n    hTarget:ModifyStrength(n*-1) \n  elseif primary == 1 then\n    self:GetCaster():ModifyAgility(n) \n    hTarget:ModifyAgility(n*-1) \n  else\n    self:GetCaster():ModifyIntellect(n) \n    hTarget:ModifyIntellect(n*-1) \n  end\nend\n')),Object(i.b)("p",null,"For those fancy effects that ironwood tree has you might want to add these lines"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'function enchant_tree_lua_mod:GetEffectName()\n return "particles/items_fx/ironwood_tree.vpcf"\nend\n\nfunction enchant_tree_lua_mod:GetEffectAttachType()\n return PATTACH_OVERHEAD_FOLLOW\nend\n')),Object(i.b)("p",null,"Next Topic: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"lua-modifiers-5"}),"Stacking Modifiers")))}s.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,b=f["".concat(o,".").concat(p)]||f[p]||d[p]||a;return n?i.a.createElement(b,l(l({ref:t},s),{},{components:n})):i.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i=n.n(r);function a({id:e,aspectRatio:t=4/3}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i=n.n(r);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);