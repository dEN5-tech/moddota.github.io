(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[136],{"2M67":(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var a=n("q1tI"),l=n("f8wK"),r=n("ESB5"),i=n("GlAS"),c=n("X6oG"),o=n("DCqk"),d=n("dVvj"),s=n("wWXb"),_=n("LvDl"),m=n("4qXz"),u=n("afLI"),p=n("mhT9");const E=["dota_hero_inventory_item_change","dota_player_update_selected_unit","dota_player_update_query_unit","dota_player_kill","dota_ability_channel_finished","dota_illusions_created","dota_item_combined","dota_item_picked_up","dota_item_purchased","dota_non_player_used_ability","dota_npc_goal_reached","dota_player_begin_cast","dota_player_gained_level","dota_player_learned_ability","dota_player_pick_hero","dota_player_selected_custom_team","dota_player_take_tower_damage","dota_player_used_ability","dota_rune_activated_server","dota_team_kill_credit","dota_tower_kill","entity_hurt","entity_killed","game_rules_state_change","last_hit","npc_spawned","player_chat","player_connect","player_connect_full","player_disconnect","player_reconnected","tree_cut"],h=(0,_.orderBy)(s.map((e=>({...e,isStarred:E.includes(e.name)}))),[e=>e.isStarred,e=>e.name],["desc","asc"]);function f(e){function t(t){if(0===e.length)return;const n=t.name.toLowerCase();return e.every((e=>n.includes(e)))}return h.map((e=>{const n={...e,fields:e.fields.filter(t)};return n.fields.length>0?n:t(e)?{...e,fields:[]}:void 0})).filter(p.DX)}var g=n("TOw/"),v=n("BSJ3"),y=n("x3Ba");function b({className:e}){return a.createElement("span",{className:e,title:"This event is useful for custom games"},"⭐")}const k=r.H_.bind(void 0,"/events");function S({scope:e,hash:t}){return a.createElement(r.RE,{root:"/events",scope:e,hash:t})}const w=(0,l.ZP)(v.S9).withConfig({displayName:"EventField__EventFieldWrapper"})(["padding:4px;"]),x=(0,l.ZP)(v.dU).withConfig({displayName:"EventField__EventFieldSignature"})(["font-size:20px;"]);function C({field:e,context:t}){const n=k({scope:t,hash:e.name});return a.createElement(w,{id:e.name,isLinked:n},a.createElement(v.c_,null,a.createElement(x,null,a.createElement(g.vI,{kind:"field",size:"medium"}),e.name,": ",a.createElement(y.P,{kind:"literal"},e.type)),a.createElement(v.Yq,null,a.createElement(S,{scope:t,hash:e.name}))),a.createElement(v.Wh,{description:e.description}))}const N=(0,l.ZP)(v.c_).withConfig({displayName:"Event__EventHeader"})(["padding:4px;"]),F=l.ZP.span.withConfig({displayName:"Event__EventName"})(["font-weight:700;"]),P=(0,l.ZP)(v.Wh).withConfig({displayName:"Event__EventDescription"})(["font-size:18px;margin:5px 20px;"]),D=l.ZP.a.withConfig({displayName:"Event__EventSourceFileWrapper"})(["padding-left:4px;padding-right:4px;padding-bottom:4px;border-radius:5px;background-color:rgb(37,134,224);text-decoration:none;color:",";"],(e=>e.theme.text));function Z({sourceFile:e}){const t=`https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/${"core"===e?"core":"dota"}/pak01_dir/resource/${e}.gameevents`;return a.createElement(D,{href:t,target:"_blank",rel:"noopener",title:`Defined in ${e}.gameevents`},e)}function q({event:e}){return a.createElement(v.S9,null,a.createElement(N,null,a.createElement(v.dU,null,a.createElement(g.vI,{kind:"interface",size:"big"}),a.createElement(F,null,e.name)),a.createElement(v.Yq,null,e.isStarred&&a.createElement(b,null),a.createElement(Z,{sourceFile:e.sourceFile}),a.createElement(S,{scope:e.name}))),a.createElement(P,{description:e.description}),e.fields.length>0&&a.createElement(v.aR,null,e.fields.map((t=>a.createElement(C,{key:t.name,field:t,context:e.name})))))}const T=(e,t)=>a.createElement(c.HC,{style:t,key:e.name},a.createElement(q,{event:e}));function z(){const{data:e,isSearching:t}=function(){const e=(0,u.rb)(),{scope:t=""}=(0,m.UO)();return e?{data:f(e.toLowerCase().split(" ")),isSearching:!0}:{data:h.filter((e=>e.name===t)),isSearching:!1}}();return a.createElement(c.vs,null,a.createElement(c.IH,{baseUrl:"/events"}),e.length>0?t?a.createElement(d.c,{data:e,render:T}):a.createElement(d.A,{data:e,render:T}):t?a.createElement(c.cv,null,"No results found"):a.createElement(c.cv,null,"Select an event or use the search bar..."),!t&&!e.length&&a.createElement(o.S,null))}const H=(0,l.ZP)(b).withConfig({displayName:"events__SidebarElementStar"})(["float:right;"]),I=()=>a.createElement(i.H,null,h.map((e=>a.createElement(i.f,{key:e.name,to:`/events/${e.name}`,icon:"interface",text:e.name,textSeparator:"_",extra:e.isStarred&&a.createElement(H,null)}))));function L(){return a.createElement(a.Fragment,null,a.createElement(r.J6,null),a.createElement(I,null),a.createElement(z,null))}}}]);
//# sourceMappingURL=events.5a96c63548ba6a95e3b5.js.map