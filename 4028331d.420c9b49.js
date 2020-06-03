(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(2),i=(n(0),n(172));n(173),n(174);const r={title:"Writing a simple AI for neutrals",author:"Perry",steamId:"76561198046986723",date:"25.01.2020"},o={id:"units/simple-neutral-ai",title:"Writing a simple AI for neutrals",description:"NOTE http://yrrep.me/dota/dota-simple-ai.html",source:"@site/_articles/units/simple-neutral-ai.md",permalink:"/units/simple-neutral-ai",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/simple-neutral-ai.md",sidebar:"docs",previous:{title:"Adding a Very Simple AI to Units",permalink:"/units/adding-a-very-simple-ai-to-units"},next:{title:"Create Creature AttachWearable blocks directly from the keyvalues",permalink:"/units/create-creature-attachwearable-blocks-directly-from-the-keyvalues"}},s=[{value:"What are we making",id:"what-are-we-making",children:[]},{value:"Implementing a single state",id:"implementing-a-single-state",children:[]},{value:"AI as Lua modifier",id:"ai-as-lua-modifier",children:[]},{value:"Complete AI modifier",id:"complete-ai-modifier",children:[]},{value:"Your next (more complicated) AI",id:"your-next-more-complicated-ai",children:[]}],l={rightToc:s};function c({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," This article is a rewrite of a very old AI tutorial: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://yrrep.me/dota/dota-simple-ai.html"}),"http://yrrep.me/dota/dota-simple-ai.html")),Object(i.b)("p",null,"I have encountered many questions about AI on the modding irc over the time, so I decided to write up a tutorial for a very basic AI that can be used in Lua. The term AI might seem intimidating as a programmer that has little to no experience with it, I will try however to lay out the process for a simple state-driven AI in a way that is as clear as possible. Hopefully by the end of this article writing your own AI does not seem as scary anymore."),Object(i.b)("h2",{id:"what-are-we-making"},"What are we making"),Object(i.b)("p",null,"We will make a little state-driven AI that mimics how neutrals behave in DotA 2. This means it will do these things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It will stand idle in its location until an enemy comes in range."),Object(i.b)("li",{parentName:"ul"},"After spotting an enemy it will run to attack them."),Object(i.b)("li",{parentName:"ul"},"If the neutral runs too far from its initial 'idle location' it will return back to it."),Object(i.b)("li",{parentName:"ul"},"Repeat from the first point.")),Object(i.b)("p",null,"The first phase to making reliable AI (in the sense that it will always do what you expect it to) is planning. I personally think that making a diagram representing the different states and the transitions between these states are a big help when making an AI like this. The more effort you put into this diagram, the easier the actual implementation of your AI will be."),Object(i.b)("p",null,"For our neutral example I have translated the text describing the unit's behaviour into a state diagram, which contains all possible states and the conditions for transitioning between these states. The result is the following diagram:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"http://yrrep.me/dota/state-diag.png",alt:"State transition diagram"}))),Object(i.b)("p",null,"These diagrams can be made with any software with drawing possibilities such as paint, photoshop or word. I really like using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.draw.io/"}),"https://www.draw.io/"),", which is an online drawing tool specialised for drawing diagrams and graphs."),Object(i.b)("p",null,"In the diagram you can see the different states represented by boxes and transitions represented by arrows. The labels on the arrows describe when this transition happens."),Object(i.b)("h2",{id:"implementing-a-single-state"},"Implementing a single state"),Object(i.b)("p",null,"To show how to translate one state to code I will give the example implementation of the aggressive state. I am implementing each state as a 'think' function that will check if any of the transition conditions are true, and execute that transition if they are true. "),Object(i.b)("p",null,"Look at the 'Aggressive' state in the above diagram. It has two transitions, so I would expect the 'AggressiveThink' function to contain one check for 'Target died', one check for 'Out of leash range', and some aggressive behavior that happens inside the state."),Object(i.b)("p",null,"This translates to the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function modifier_ai:AggressiveThink()\n    -- Check if the unit has walked outside its leash range\n    if (self.spawnPos - self.unit:GetAbsOrigin()):Length() > self.leashRange then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Check if the target has died\n    if not self.aggroTarget:IsAlive() then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Still in the aggressive state, so do some aggressive stuff.\n    self.unit:MoveToTargetToAttack(self.aggroTarget)\nend\n")),Object(i.b)("p",null,"This way of translating your state diagram to code will always work as long as you can write code describing your transition conditions."),Object(i.b)("h2",{id:"ai-as-lua-modifier"},"AI as Lua modifier"),Object(i.b)("p",null,"Now we have one function that describes one 'tick' of one of our AI states, how do we make sure this is called?"),Object(i.b)("p",null,"The easiest way to create an AI tied to one unit is to make the AI a Lua modifier. This modifier has some very convenient properties built in:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The AI will stop once the unit dies"),Object(i.b)("li",{parentName:"ul"},"The modifier provides convenient created/destroyed handlers to setup/cleanup your AI"),Object(i.b)("li",{parentName:"ul"},"The modifier provides an interval think")),Object(i.b)("p",null,"So really, the very core of your AI comes down to calling ",Object(i.b)("inlineCode",{parentName:"p"},"StartIntervalThink(interval)")," in your modifier's ",Object(i.b)("inlineCode",{parentName:"p"},"OnCreated"),", and then in the ",Object(i.b)("inlineCode",{parentName:"p"},"OnIntervalThink")," calling the correct 'state' function that you created like in the previous section."),Object(i.b)("h2",{id:"complete-ai-modifier"},"Complete AI modifier"),Object(i.b)("p",null,"Below is the complete state diagram from above implemented as AI. This AI can be added to ",Object(i.b)("inlineCode",{parentName:"p"},"unit")," by calling:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'unit:AddNewModifier(nil, nil, "modifier_ai", { aggroRange = 600, leashRange = 600 });\n')),Object(i.b)("p",null,"I pass in some parameters to the AI behavior when I apply it, allowing for customization per-unit. Keep in mind this modifier is just like any other Lua modifier, so you can execute any code you can also call in regular modifiers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"modifier_ai = class({})\n\nlocal AI_STATE_IDLE = 0\nlocal AI_STATE_AGGRESSIVE = 1\nlocal AI_STATE_RETURNING = 2\n\nlocal AI_THINK_INTERVAL = 0.5\n\nfunction modifier_ai:OnCreated(params)\n    -- Only do AI on server\n    if IsServer() then\n        -- Set initial state\n        self.state = AI_STATE_IDLE\n\n        -- Store parameters from AI creation:\n        -- unit:AddNewModifier(caster, ability, \"modifier_ai\", { aggroRange = X, leashRange = Y })\n        self.aggroRange = params.aggroRange\n        self.leashRange = params.leashRange\n\n        -- Store unit handle so we don't have to call self:GetParent() every time\n        self.unit = self:GetParent()\n\n        -- Set state -> action mapping\n        self.stateActions = {\n            [AI_STATE_IDLE] = self.IdleThink,\n            [AI_STATE_AGGRESSIVE] = self.AggressiveThink,\n            [AI_STATE_RETURNING] = self.ReturningThink,\n        }\n\n        -- Start thinking\n        self:StartIntervalThink(AI_THINK_INTERVAL)\n    end\nend\n\nfunction modifier_ai:OnIntervalThink()\n    -- Execute action corresponding to the current state\n    self.stateActions[self.state](self)    \nend\n\nfunction modifier_ai:IdleThink()\n    -- Find any enemy units around the AI unit inside the aggroRange\n    local units = FindUnitsInRadius(self.unit:GetTeam(), self.unit:GetAbsOrigin(), nil,\n        self.aggroRange, DOTA_UNIT_TARGET_TEAM_ENEMY, DOTA_UNIT_TARGET_ALL, DOTA_UNIT_TARGET_FLAG_NONE, \n        FIND_ANY_ORDER, false)\n\n    -- If one or more units were found, start attacking the first one\n    if #units > 0 then\n        self.spawnPos = self.unit:GetAbsOrigin() -- Remember position to return to\n        self.aggroTarget = units[1] -- Remember who to attack\n        self.unit:MoveToTargetToAttack(self.aggroTarget) --Start attacking\n        self.state = AI_STATE_AGGRESSIVE --State transition\n        return -- Stop processing this state\n    end\n\n    -- Nothing else to do in Idle state\nend\n\nfunction modifier_ai:AggressiveThink()\n    -- Check if the unit has walked outside its leash range\n    if (self.spawnPos - self.unit:GetAbsOrigin()):Length() > self.leashRange then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Check if the target has died\n    if not self.aggroTarget:IsAlive() then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Still in the aggressive state, so do some aggressive stuff.\n    self.unit:MoveToTargetToAttack(self.aggroTarget)\nend\n\nfunction modifier_ai:ReturningThink()\n    -- Check if the AI unit has reached its spawn location yet\n    if (self.spawnPos - self.unit:GetAbsOrigin()):Length() < 10 then\n        self.state = AI_STATE_IDLE -- Transition the state to the 'Idle' state(!)\n        return -- Stop processing this state\n    end\n\n    -- If not at return position yet, try to move there again\n    self.unit:MoveToPosition(self.spawnPos)\nend\n")),Object(i.b)("h2",{id:"your-next-more-complicated-ai"},"Your next (more complicated) AI"),Object(i.b)("p",null,"This tutorial only covers a very basic concepts for making your first AI, but if you want to extend this here are some more interesting ideas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Since you are using a lua modifier, you do not have to change state in a think function, you can also just register a modifier event listener and change state inside those!"),Object(i.b)("li",{parentName:"ul"},"Generalize state classes and give each state ",Object(i.b)("inlineCode",{parentName:"li"},"OnStateEnter"),", ",Object(i.b)("inlineCode",{parentName:"li"},"OnStateThink")," and ",Object(i.b)("inlineCode",{parentName:"li"},"OnStateLeave")," functions."),Object(i.b)("li",{parentName:"ul"},"You can nest these AIs! You could make the internal behavior of one state be its own AI built in the same way.")))}c.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(o,".").concat(p)]||h[p]||d[p]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,aspectRatio:t=4/3}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);