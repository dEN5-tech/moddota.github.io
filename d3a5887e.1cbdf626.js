(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(2),a=(n(0),n(172)),r=n(173);n(174);const s={title:"Invisibility Ability Example",author:"Noya",steamId:"76561198046984233",date:"19.12.2014"},o={id:"abilities/datadriven/invisibility-ability-example",title:"Invisibility Ability Example",description:"This is a datadriven + lua ability that will apply the invis state and texture, with some extra particles and effects.",source:"@site/_articles/abilities/datadriven/invisibility-ability-example.md",permalink:"/abilities/datadriven/invisibility-ability-example",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/invisibility-ability-example.md",sidebar:"docs",previous:{title:"Channeling Animations",permalink:"/abilities/datadriven/channeling-animations"},next:{title:"Illusion Ability Example",permalink:"/abilities/datadriven/illusion-ability-example"}},l=[],c={rightToc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a datadriven + lua ability that will apply the invis state and texture, with some extra particles and effects."),Object(a.b)(r.a,{id:"MajesticDimpledIrishwaterspaniel",mdxType:"Gfycat"}),Object(a.b)("p",null,"(Some effects might not be from this example, as this video shows the Assassin hero, find it in the repository later on)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"KV:")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),' "assassin_walk_the_shadows"\n {\n  // General\n  //--------------------------------------------------------------------------------------------------\n  "BaseClass" "ability_datadriven"\n  "AbilityTextureName"  "assassin_skill1"\n  "MaxLevel" "7"\n  "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE"\n  \n  // Stats\n  //--------------------------------------------------------------------------------------------------\n  "AbilityCastPoint"    "0"\n  "AbilityCooldown" "5"\n  "AbilityManaCost" "6 8 11 14 18 22 26 30"\n     \n     // Damage.\n     //-----------------------------------------------------------------------------------------------\n     "AbilityDamage" "25 150 300 600 1100 2000 3300 5000"\n     "AbilityUnitDamageType"    "DAMAGE_TYPE_PHYSICAL"\n\n     // Special\n     "AbilitySpecial"\n      {\n      "01"\n       {\n    "var_type"  "FIELD_INTEGER"\n    "duration"  "25"\n       }\n      "02"\n       {\n       "var_type"   "FIELD_INTEGER"\n       "bonus_movespeed"    "35"\n       }\n      "03"\n       {\n       "var_type"   "FIELD_INTEGER"\n       "bonus_damage"   "150 300 525 840 1260 1900 3000 4500"\n       }\n      "04"\n       {\n       "var_type"   "FIELD_FLOAT"\n       "stun_duration"  "3.25"\n       }\n      }\n\n     "precache"\n     {\n      "particle"    "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"\n      "soundfile"   "soundevents/game_sounds_heroes/game_sounds_templar_assassin.vsndevts"\n     }\n\n     //----------------------------------------------------------------------------------------------\n  "OnSpellStart"\n  {\n   "FireSound"\n   {\n    "EffectName"    "Hero_TemplarAssassin.Meld"\n    "Target" "CASTER"\n   }\n   "RunScript"\n   {\n    "ScriptFile"    "abilities/assassin.lua"\n    "Function"  "walk_the_shadows_cast"\n   }\n  }\n  "Modifiers"\n   {\n   "assassin_walk_the_shadows_buff"\n    {\n    "IsBuff"    "1"\n    "Duration" "%duration"\n    "EffectName"    "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"\n    "EffectAttachType"  "follow_origin"\n    "OnCreated"\n    {\n     "FireEffect"\n     {\n      "EffectName"  "particles/units/heroes/hero_bounty_hunter/bounty_hunter_windwalk_smoke.vpcf"\n      "EffectAttachType" "follow_origin"\n      "Target" "CASTER"\n     }\n    }\n    "Properties"\n     {\n     "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "%bonus_movespeed"\n     }\n    "States"\n     {\n     "MODIFIER_STATE_INVISIBLE" "MODIFIER_STATE_VALUE_ENABLED"\n     "MODIFIER_STATE_NO_UNIT_COLLISION" "MODIFIER_STATE_VALUE_ENABLED"\n     }\n    "OnAttackLanded"\n     {\n     "RunScript"\n      {\n      "ScriptFile"  "abilities/assassin.lua"\n      "Function"    "walk_the_shadows_attack"\n      }\n     "Stun"\n      {\n      "Target"  "TARGET"\n      "Duration"    "%stun_duration"\n      }\n     }\n    "OnAbilityExecuted"\n     {\n     "RunScript"\n      {\n      "ScriptFile"  "abilities/assassin.lua"\n      "Function"    "walk_the_shadows_interrupt"\n      }\n     }\n    }\n   }\n  \n }\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Lua Scripts:")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'function walk_the_shadows_cast( event )\n  event.ability:ApplyDataDrivenModifier(event.caster, event.caster, "assassin_walk_the_shadows_buff", nil)\n  event.caster:AddNewModifier(event.caster, event.ability, "modifier_invisible", {duration = 25}) \n  \nend\n\nfunction walk_the_shadows_interrupt( event )\n event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")\n event.caster:RemoveModifierByName("modifier_invisible")\nend\n\nfunction walk_the_shadows_attack( event )\n \n event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")\n \n ApplyDamage({ victim = event.target, attacker = event.caster, damage = event.ability:GetAbilityDamage(), damage_type = event.ability:GetAbilityDamageType(), ability = event.ability   })\n\nend\n')),Object(a.b)("p",null,'The line that takes care of applying the "transparency" is AddNewModifier with modifier_invisible.'),Object(a.b)("p",null,"Credits to my buddy ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/igo95862"}),"igo")," that made this ability for ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Aleteh/TBR3"}),"The Black Road project")," which is still WIP but there are some interesting stuff we made already."))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(f,o(o({ref:t},c),{},{components:n})):a.a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n.n(i);function r({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n.n(i);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);