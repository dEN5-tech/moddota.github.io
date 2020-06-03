(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=(n(0),n(172)),r=n(173);n(174);const l={title:"Point Channeling AoE Ability Example",author:"Noya",steamId:"76561198046984233",date:"27.01.2015"},o={id:"abilities/datadriven/point-channeling-aoe-ability-example",title:"Point Channeling AoE Ability Example",description:"Here I'll explain a method to do this type of abilities effectively, based on this Earthquake Example:",source:"@site/_articles/abilities/datadriven/point-channeling-aoe-ability-example.md",permalink:"/abilities/datadriven/point-channeling-aoe-ability-example",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/point-channeling-aoe-ability-example.md",sidebar:"docs",previous:{title:"Rotate Ability Example",permalink:"/abilities/datadriven/rotate-ability-example"},next:{title:"Apply Hero and Creep modifier durations",permalink:"/abilities/datadriven/apply-hero-and-creep-modifier-durations"}},c=[{value:"General Definition:",id:"general-definition",children:[]},{value:"Ability Special block:",id:"ability-special-block",children:[]},{value:"Precache block:",id:"precache-block",children:[]},{value:"Spell Start",id:"spell-start",children:[]},{value:"Channel Finish",id:"channel-finish",children:[]},{value:"Modifiers",id:"modifiers",children:[]},{value:"Complete code can be found at the following links:",id:"complete-code-can-be-found-at-the-following-links",children:[]},{value:"DataDriven",id:"datadriven",children:[]},{value:"Lua",id:"lua",children:[]}],s={rightToc:c};function p({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here I'll explain a method to do this type of abilities effectively, based on this Earthquake Example:"),Object(i.b)(r.a,{id:"CarefreeAridBantamrooster",mdxType:"Gfycat"}),Object(i.b)("p",null,"We will review each important section of the code with comments on it, including how to get the particles to show."),Object(i.b)("h3",{id:"general-definition"},"General Definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"far_seer_earthquake"\n{\n    "BaseClass"          "ability_datadriven"\n    "AbilityTextureName" "far_seer_earthquake"\n    "MaxLevel"           "1"\n    "AbilityType"        "DOTA_ABILITY_TYPE_ULTIMATE"\n\n    "AbilityBehavior"   "DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE"\n    "AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_ENEMY"\n    "AbilityUnitTargetType" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_BUILDING"\n    "AbilityUnitDamageType" "DAMAGE_TYPE_MAGICAL"\n    "AbilityCastAnimation"  "ACT_DOTA_SPAWN"\n\n    "AbilityCastRange"   "1000"\n    "AbilityCastPoint"   "0.5"\n    "AbilityCooldown"    "90.0"\n\n    "AbilityManaCost"    "150"\n    "AbilityChannelTime" "25.0"\n\n    "AOERadius"          "%radius"\n\n//...\n')),Object(i.b)("p",null,"Target Team/Type and DamageType are just there to show the tooltips."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"AbilityChannelTime"')," is a must have that will determine how much time the spell can be maintained. "),Object(i.b)("p",null,"Note the ",Object(i.b)("inlineCode",{parentName:"p"},'"AOERadius"')," which accepts a ",Object(i.b)("inlineCode",{parentName:"p"},'"%radius"'),' from AbilitySpecial in its value. "AOERadius" needs ',Object(i.b)("inlineCode",{parentName:"p"},'"DOTA_ABILITY_BEHAVIOR_AOE"')," to display the AoE Circle."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"ability-special-block"},"Ability Special block:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"AbilitySpecial"\n{\n    "01"\n    {\n       "var_type"   "FIELD_INTEGER"\n       "duration"   "25"\n    }\n    "02"\n    {\n        "var_type" "FIELD_INTEGER"\n        "building_damage_per_sec"   "50"\n    }\n    "03"\n    {\n        "var_type"  "FIELD_INTEGER"\n        "radius"   "250"\n    }\n    "04"\n    {\n        "var_type" "FIELD_INTEGER"\n        "movement_speed_slow_pct"   "-75"\n    }\n    "05"\n    {\n        "var_type"  "FIELD_FLOAT"\n        "wave_interval" "1.0"\n    }\n}\n')),Object(i.b)("p",null,"Nothing interesting except remarking that ",Object(i.b)("inlineCode",{parentName:"p"},'"%duration"')," ",Object(i.b)("strong",{parentName:"p"},"cannot")," be used as a value for ",Object(i.b)("inlineCode",{parentName:"p"},'"AbilityChannelTime"')," (doing so makes it loop forever), so the ability will just refer to the duration and when changing the value, also change the channel time."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"precache-block"},"Precache block:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\n"precache" \n{\n  "particle"    "particles/units/heroes/hero_leshrac/leshrac_split_earth.vpcf"\n  "particle"    "particles/units/heroes/hero_warlock/warlock_rain_of_chaos_explosion.vpcf"\n  "particle"    "particles/units/heroes/hero_earthshaker/temp_eruption_dirt.vpcf"\n  "particle"    "particles/dire_fx/dire_lava_falling_rocks.vpcf"\n  "particle"    "particles/units/heroes/hero_earthshaker/earthshaker_echoslam_start_fallback_mid.vpcf"\n  "particle" "particles/econ/items/earthshaker/egteam_set/hero_earthshaker_egset/earthshaker_echoslam_start_egset.vpcf"\n  "soundfile"   "soundevents/game_sounds_heroes/game_sounds_leshrac.vsndevts"\n}\n')),Object(i.b)("p",null,"Has all the particles used and leshrac soundfile loaded. "),Object(i.b)("p",null,"Paths were copied directly from the asset browser, unmodified particles. I'll explain each of its attachments when we get to them."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"spell-start"},"Spell Start"),Object(i.b)("p",null,"When the cast point is complete, perform the following actions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"OnSpellStart"\n{\n    "RunScript"\n    {\n        "ScriptFile"    "heroes/far_seer/earthquake.lua"\n        "Function"   "EarthquakeStart"\n        "Target"     "POINT"\n    }\n\n//...\n')),Object(i.b)("p",null,'This calls a very simple Lua script which creates a dummy unit to apply a thinker modifier which does the "waves". '),Object(i.b)("p",null,"When using an ",Object(i.b)("inlineCode",{parentName:"p"},'"AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_POINT"'),", you can pass the POINT targeted as an extra parameter to the function (it won't be passed automatically, like CASTER or TARGET). This can be accessed as the ",Object(i.b)("strong",{parentName:"p"},"target_points","[1]"),"\non the event."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Lua")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function EarthquakeStart( event )\n    -- Variables\n    local caster = event.caster\n    local point = event.target_points[1]\n\n    caster.earthquake_dummy = CreateUnitByName("dummy_unit", point, false, caster, caster, caster:GetTeam())\n    event.ability:ApplyDataDrivenModifier(caster, caster.earthquake_dummy, "modifier_earthquake_thinker", nil)\nend\n')),Object(i.b)("p",null,"There is a Datadriven function to do something similar, ",Object(i.b)("strong",{parentName:"p"},'"CreateThinker"'),', but because we need to stop the ability from casting the waves if the hero stops channeling the ability, its better to have the dummy "indexed" on the ',Object(i.b)("em",{parentName:"p"},"caster handle")," so that we can run another script to remove it without the need to do a search for it."),Object(i.b)("p",null,"Back to the dummy unit, this is its definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"dummy_unit_vulnerable"\n{\n    "BaseClass"            "npc_dota_creature"\n    "AttackCapabilities"   "DOTA_UNIT_CAP_NO_ATTACK"\n    "VisionDaytimeRange"   "0"  \n    "VisionNighttimeRange"  "0"\n    "UnitRelationshipClass" "DOTA_NPC_UNIT_RELATIONSHIP_TYPE_WARD"\n    "MovementCapabilities"  "DOTA_UNIT_CAP_MOVE_NONE"\n    "Ability1"             "dummy_passive_vulnerable"\n}\n')),Object(i.b)("p",null,"And the passive ability:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"dummy_passive_vulnerable"\n{\n    "BaseClass"       "ability_datadriven"\n    "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_PASSIVE"\n    "Modifiers"\n    {\n        "dummy_modifier"\n        {\n            "Passive" "1"\n            "States"\n            {\n                "MODIFIER_STATE_NO_UNIT_COLLISION"  "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_NO_TEAM_MOVE_TO"    "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_NO_TEAM_SELECT"     "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_COMMAND_RESTRICTED" "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_ATTACK_IMMUNE"      "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_MAGIC_IMMUNE"       "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_NOT_ON_MINIMAP"     "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_UNSELECTABLE"       "MODIFIER_STATE_VALUE_ENABLED"\n                "MODIFIER_STATE_NO_HEALTH_BAR"      "MODIFIER_STATE_VALUE_ENABLED" \n            }\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," The dummy doesn't have ",Object(i.b)("inlineCode",{parentName:"p"},"MODIFIER_STATE_INVULNERABLE")," enabled, because that state is a bitch, usually preventing from applying modifiers even if they have ",Object(i.b)("inlineCode",{parentName:"p"},"MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE"),". That's why I called it _vulnerable even tho it can't take damage."),Object(i.b)("hr",null),Object(i.b)("p",null,"Back to the OnSpellStart, 2 more actions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"OnSpellStart"\n{   //...\n\n    "DestroyTrees"\n    {\n        "Target" "POINT"\n        "Radius"    "%radius"\n    }\n\n    "DelayedAction"\n    {\n        "Delay" "0.5"\n        "Action" \n        {\n            "ApplyModifier"\n            {\n                "ModifierName"  "modifier_earthquake_channelling"\n                "Target" "CASTER"\n            }\n        }\n    }   \n }\n')),Object(i.b)("p",null,"First action will destroy the trees around the POINT targeted and the second action applies a modifier that takes care of the channeling animation, using the same method explained in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://moddota.com/forums/discussion/77/channeling-animations"}),"Channeling Animations Tutorial")),Object(i.b)("p",null,"Animation needs to start half a second later to sync with the damage, this is a matter of experimenting with the time frames."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"channel-finish"},"Channel Finish"),Object(i.b)("p",null,"When the ability finishes channeling either because the channel time has finished or it was cancelled, we need to stop the animation and the dummy thinker:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"OnChannelFinish"\n{\n    "RunScript"\n    {\n        "ScriptFile"    "heroes/far_seer/earthquake.lua"\n        "Function"   "EarthquakeEnd"\n    } \n\n    "RemoveModifier"\n    {\n        "ModifierName"  "modifier_earthquake_channelling"\n        "Target"       "CASTER"\n    } \n}\n')),Object(i.b)("p",null,"The 2nd lua function is even shorter, only has 1 API call to instantly remove the dummy:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function EarthquakeEnd( event )\n    local caster = event.caster\n\n    caster.earthquake_dummy:RemoveSelf()\nend\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"modifiers"},"Modifiers"),Object(i.b)("p",null,"Now lets move to the the Modifiers block, the first couple handles the animation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"Modifiers"\n{\n    "modifier_earthquake_channelling"\n    {\n        "IsHidden"          "1"\n        "ThinkInterval"     "1.0"\n        "OverrideAnimation" "ACT_DOTA_KINETIC_FIELD"\n        "OnIntervalThink"\n        {\n            "ApplyModifier"\n            {\n                "ModifierName"  "modifier_channeling"\n                "Target"       "CASTER"\n                "Duration"     "0.9"\n            } \n        }\n    }\n\n    "modifier_channeling"\n    {\n        "IsHidden"          "1"\n        "OverrideAnimation" "ACT_DOTA_KINETIC_FIELD"\n    }\n\n//...\n')),Object(i.b)("p",null,'"modifier_earthquake_thinker" is the modifier applied in Lua to the dummy, and has the main logic for all the damage, particles, sounds and other effects needed. It has a lot bunch of actions, so I\'ll break it up'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"modifier_earthquake_thinker"\n{\n    "Aura"        "modifier_eartquake_slow"\n    "Aura_Radius" "%radius"\n    "Aura_Teams"  "DOTA_UNIT_TARGET_TEAM_ENEMY"\n    "Aura_Types"  "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  \n\n//...\n')),Object(i.b)("p",null,"This constantly applies another modifier effect to all units around a radius of the targeted point, in this ability its a simple slow effect:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"modifier_eartquake_slow"\n{\n   "IsDebuff"   "1"\n   "Properties"\n   {\n       "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "%movement_speed_slow_pct" \n   }    \n}\n')),Object(i.b)("hr",null),Object(i.b)("p",null,'Back to the "modifier_earthquake_thinker", we have to have actions on 2 instances: When the modifier is created, and then on each wave interval.'),Object(i.b)("h4",{id:"main-modifier-created"},"Main modifier created"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"OnCreated"\n{\n    "FireSound"\n    {\n        "EffectName"    "Hero_Leshrac.Split_Earth"\n        "Target"     "TARGET"\n    }\n\n    // Many simple particle attachments:\n    "AttachEffect"\n    {\n        "EffectName" "particles/econ/items/earthshaker/egteam_set/hero_earthshaker_egset/earthshaker_echoslam_start_egset.vpcf"\n        "EffectAttachType" "follow_origin"\n        "Target"           "TARGET"\n    }\n\n    "AttachEffect"\n    {\n        "Target"    "TARGET"\n        "EffectAttachType" "follow_origin"\n        "EffectName"    "particles/dire_fx/dire_lava_falling_rocks.vpcf"\n    }\n\n    "AttachEffect"\n    {\n        "Target"    "TARGET"\n        "EffectAttachType" "follow_origin"\n        "EffectName"    "particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf"\n    }\n\n//...\n')),Object(i.b)("p",null,'"TARGET" in all this scope will refer to the unit that has the modifier, i.e. the dummy.'),Object(i.b)("p",null,"I used one extra particle that needs to have the Control Point 1 attached to the target, else it will show on the middle of the map."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'    "AttachEffect" \n    {\n        "Target"           "TARGET"\n        "EffectAttachType" "follow_origin"\n        "EffectName"       "particles/units/heroes/hero_earth_spirit/espirit_spawn.vpcf"\n        "ControlPointEntities"\n        {\n            "TARGET"    "attach_origin"\n            "TARGET"    "attach_origin"\n        }\n    }\n')),Object(i.b)("p",null,'"ControlPointEntities" will set the CP0 to the origin of the dummy, and do the same for CP1.'),Object(i.b)("p",null,"To realize that the CP1 needs to be set else the particle will fail to display properly, this is the procedure:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the particle system on the Particle Editor, double clicking on it (needs ",Object(i.b)("strong",{parentName:"p"},"decompiled particles"),"!) "),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"http://puu.sh/f61DF/2ed8e1c122.jpg",alt:"img"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select Control Point #1 on the Control Points List:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"http://puu.sh/f61JZ/8593db279d.png",alt:"img"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Hold and drag the control point to somewhere else by clicking on the blue rectangle:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"http://puu.sh/f61MV/9d913ef133.jpg",alt:"img"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Notice that there's some dust that moved with the Control Point."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"http://puu.sh/f61pF/1c83b2e5cc.jpg",alt:"img"}))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This means you need to set it!")," Else it will stay unattached and originate on the (0,0,0) position at the map."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"main-modifier-wave-interval-actions"},"Main modifier wave interval actions"),Object(i.b)("p",null,"Still following this? Great, it's almost finished, only missing the ",Object(i.b)("inlineCode",{parentName:"p"},'"OnIntervalThink"')," actions which do the damage +effects every ",Object(i.b)("inlineCode",{parentName:"p"},'"wave_interval"')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"ThinkInterval" "%wave_interval"\n"OnIntervalThink"\n{\n    "Damage"\n    {\n        "Target"\n        {\n            "Center" "TARGET"\n            "Radius" "%radius"\n            "Teams"  "DOTA_UNIT_TARGET_TEAM_BOTH"\n            "Types"  "DOTA_UNIT_TARGET_BUILDING"\n        }    \n        "Type"   "DAMAGE_TYPE_MAGICAL"\n        "Damage"    "%building_damage_per_sec"\n    }\n\n    "FireSound"\n    {\n        "EffectName"  "Hero_Leshrac.Split_Earth"\n        "Target"      "TARGET"\n    }\n\n    // Simple particle attachment\n    "FireEffect"\n    {\n        "EffectName"       "particles/units/heroes/hero_warlock/warlock_rain_of_chaos_explosion.vpcf"\n        "EffectAttachType" "follow_origin"\n        "Target"           "TARGET"\n    }\n    "FireEffect"\n    {\n        "EffectName"       "particles/units/heroes/hero_earthshaker/temp_eruption_dirt.vpcf"\n        "EffectAttachType" "follow_origin"\n        "Target"           "TARGET"\n    }  \n//...\n')),Object(i.b)("p",null,"There's a couple of specific particle firing that need a separate explanation:"),Object(i.b)("p",null,"To find what each control point does, follow the same method as with the espirit_spawn.vpcf, but knowing this particles were designed for AoE effects, you should instead write radius-range numbers on the control points and see the effect on the particle editor."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'    "AttachEffect"\n    {\n        "Target"           "TARGET"\n        "EffectAttachType" "follow_origin"\n        "EffectName"       "particles/units/heroes/hero_leshrac/leshrac_split_earth.vpcf"\n        "ControlPoints"\n        {\n            "01"    "%radius 50 50"\n        }\n    } \n\n    "AttachEffect"\n    {\n        "Target"           "TARGET"\n        "EffectAttachType" "follow_origin"\n        "EffectName"       "particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf"\n        "ControlPoints"\n        {\n           "01" "%radius 0 %radius"\n        }\n    }\n\n    "AttachEffect"\n    {\n        "Target"           "TARGET"\n        "EffectAttachType" "follow_origin"\n        "EffectName" "particles/units/heroes/hero_earthshaker/earthshaker_echoslam_start_fallback_mid.vpcf"\n        "ControlPoints"\n        {\n            "01"    "1 0 0"\n        }   \n    }\n}\n')),Object(i.b)("p",null,"Not gonna lie, it's mostly trial and error and just a bit of reading whatever the PET info has to enlighten you:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"http://puu.sh/f62Ph/2d34e46b46.png",alt:"img"}))),Object(i.b)("hr",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"complete-code-can-be-found-at-the-following-links"},"Complete code can be found at the following links:"),Object(i.b)("h3",{id:"datadriven"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/MNoya/DotaCraft/blob/master/game/dota_addons/dotacraft/scripts/npc/abilities/heroes/far_seer_earthquake.txt"}),"DataDriven")),Object(i.b)("h3",{id:"lua"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/MNoya/DotaCraft/blob/master/scripts/vscripts/heroes/far_seer/earthquake.lua"}),"Lua")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For more examples of this style of ability, check:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/archmage_blizzard.txt"}),"Blizzard")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/pit_lord_rain_of_fire.txt"}),"Rain of Fire")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/naga_sea_witch_tornado.txt"}),"Tornado"))))),Object(i.b)("hr",null),Object(i.b)("p",null,"If you find a way to improve this method or have any questions, leave them here."))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(l,".").concat(d)]||b[d]||h[d]||r;return n?i.a.createElement(u,o(o({ref:t},s),{},{components:n})):i.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,aspectRatio:t=4/3}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);