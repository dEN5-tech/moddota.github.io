"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[8068],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||a;return o?r.createElement(p,i(i({ref:t},u),{},{components:o})):r.createElement(p,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3919:(e,t,o)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,{b:()=>r,Z:()=>n})},4996:(e,t,o)=>{o.d(t,{C:()=>a,Z:()=>i});var r=o(2263),n=o(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(o,r)=>function(e,t,o,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,n.b)(o))return o;if(r)return t+o;const i=o.startsWith(t)?o:t+o.replace(/^\//,"");return a?e+i:i}(t,e,o,r)}}function i(e,t={}){const{withBaseUrl:o}=a();return o(e,t)}},8215:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const n=function({children:e,hidden:t,className:o}){return r.createElement("div",{role:"tabpanel",hidden:t,className:o},e)}},1395:(e,t,o)=>{o.d(t,{Z:()=>u});var r=o(7294),n=o(944),a=o(6010);const i="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,c=39;const u=function(e){const{lazy:t,block:o,defaultValue:u,values:h,groupId:d,className:m}=e,{tabGroupChoices:p,setTabGroupChoices:y}=(0,n.Z)(),[f,w]=(0,r.useState)(u),v=r.Children.toArray(e.children),g=[];if(null!=d){const e=p[d];null!=e&&e!==f&&h.some((t=>t.value===e))&&w(e)}const k=e=>{const t=e.currentTarget,o=g.indexOf(t),r=h[o].value;w(r),null!=d&&(y(d,r),setTimeout((()=>{(function(e){const{top:t,left:o,bottom:r,right:n}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&n<=i&&r<=a&&o>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},b=e=>{var t;let o;switch(e.keyCode){case c:{const t=g.indexOf(e.target)+1;o=g[t]||g[0];break}case l:{const t=g.indexOf(e.target)-1;o=g[t]||g[g.length-1];break}}null==(t=o)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},m)},h.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":f===e}),key:e,ref:e=>g.push(e),onKeyDown:b,onFocus:k,onClick:k},t)))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},9443:(e,t,o)=>{o.d(t,{Z:()=>r});const r=(0,o(7294).createContext)(void 0)},944:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(7294),n=o(9443);const a=function(){const e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,o)=>{o.d(t,{s:()=>n});var r=o(7294);function n({id:e,aspectRatio:t=4/3,hd:o="0"}){return r.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${o}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,o)=>{o.d(t,{s:()=>l});var r=o(2177),n=o(8215),a=o(1395),i=o(7294);const s={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function l({children:e,group:t,titles:o}){(0,r.Z)("string"==typeof t||void 0===t);const l=i.Children.toArray(e).map(((e,t)=>{var r;const n=(null==(r=e.props.children.props.className)?void 0:r.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==o&&o.length>0?o.split("|"):[])[t]??s[n]??n,element:e}}));return i.createElement(a.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:l[0].id,values:l.map((({id:e,languageName:t})=>({value:e,label:t})))},l.map((({id:e,element:t})=>i.createElement(n.Z,{key:e,value:e},t))))}},6776:(e,t,o)=>{o.d(t,{X:()=>a});var r=o(4996),n=o(7294);function a({path:e,controls:t=!1}){return n.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},n.createElement("source",{src:(0,r.Z)(e),type:"video/mp4"}))}},8129:(e,t,o)=>{o.d(t,{_:()=>n});var r=o(7294);function n({id:e,playlistId:t,aspectRatio:o=16/9}){const n=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return r.createElement("p",{style:{position:"relative",paddingBottom:1/o*100+"%"}},r.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},3007:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>a,metadata:()=>i,toc:()=>s,default:()=>c});var r=o(7462),n=(o(7294),o(3905));o(1395),o(8215),o(7840),o(8129),o(8173),o(6776);const a={title:"Setting Up Your Addon For Collaboration",author:"Perry"},i={unversionedId:"tools/setting-up-for-collaboration",id:"tools/setting-up-for-collaboration",isDocsHomePage:!1,title:"Setting Up Your Addon For Collaboration",description:"Talking to dota 2 mod developers, or just software developers in general, you will often hear the words 'repositories', 'version control' and 'git'. The reason these are such popular topics is that version control is a very important topic within software development, and if you are working on a piece of software you SHOULD use it. In this article, I will try to clarify firstly what version control is, why you would want to use it, and how I have personaly set it up for dota 2. If you read it all the way to the end I might even give you some shameful stories about how I learnt most of this through trial and error.",source:"@site/_articles/tools/setting-up-for-collaboration.mdx",sourceDirName:"tools",slug:"/tools/setting-up-for-collaboration",permalink:"/tools/setting-up-for-collaboration",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/setting-up-for-collaboration.mdx",version:"current",frontMatter:{title:"Setting Up Your Addon For Collaboration",author:"Perry"},sidebar:"tutorials",previous:{title:"Custom Minimap Icons",permalink:"/assets/custom-minimap-icons"},next:{title:"Useful Console Commands",permalink:"/tools/useful-console-commands"}},s=[{value:"What is version control",id:"what-is-version-control",children:[]},{value:"Why you should use version control",id:"why-you-should-use-version-control",children:[]},{value:"Git",id:"git",children:[]},{value:"How to use Git",id:"how-to-use-git",children:[]},{value:"Remotes",id:"remotes",children:[]},{value:"Git clients",id:"git-clients",children:[]},{value:"How to set up a dota 2 mod repository",id:"how-to-set-up-a-dota-2-mod-repository",children:[{value:"How to make your dota 2 symlinks",id:"how-to-make-your-dota-2-symlinks",children:[]}]}],l={toc:s};function c({components:e,...t}){return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Talking to dota 2 mod developers, or just software developers in general, you will often hear the words 'repositories', 'version control' and 'git'. The reason these are such popular topics is that version control is a very important topic within software development, and if you are working on a piece of software you SHOULD use it. In this article, I will try to clarify firstly what version control is, why you would want to use it, and how I have personaly set it up for dota 2. If you read it all the way to the end I might even give you some shameful stories about how I learnt most of this through trial and error."),(0,n.kt)("h1",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-version-control"},"What is version control")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#why-you-should-use-version-control"},"Why you should use version control")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#git"},"Git")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-use-git"},"How to use Git")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#remotes"},"Remotes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#git-clients"},"Git clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-set-up-a-dota-2-mod-repository"},"How to set up a dota 2 mod repository"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-make-your-dota-2-symlinks"},"How to make your dota 2 symlinks"))))),(0,n.kt)("h2",{id:"what-is-version-control"},"What is version control"),(0,n.kt)("p",null,"The name already gives it away, but version control is a method to control.. well, your versions. A more useful description would be that version control is a way of tracking different versions and stages of development in your software. The term repository is used to describe a project that is managed by some kind of version control. You basically have a system in place that tracks any changes and makes sure that everyone working on the software can work on the same version of this software simultaneously. This usually means that you have a 'remote' server that has all files, and every time you or somebody else makes a change, this remote knows this and can distribute this version to other people working on the software. There are multiple methods to do version control, popular ones include Git, SVN and Mercurial. This article will focus on Git as it is in my opinion the most convenient method."),(0,n.kt)("h2",{id:"why-you-should-use-version-control"},"Why you should use version control"),(0,n.kt)("p",null,"There are a lot of reasons so use version control, I will list the ones that I personally think are the most important:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Working together"),": ",(0,n.kt)("br",null)," Version control allows multiple people to work on the same files without overriding eachother's changes. Git just looks at individual line changes, and when two people happen to edit the same line it will automatically detect the clash and ask for it to be resolved."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Looking back"),": ",(0,n.kt)("br",null)," Using version control you save different versions of your software. This means that at a later point in time you can always look back at a previous version. This means you can go back to an older version if something is seriously messed up, or you can just look at the code you had previously to compare it with your current code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Back-ups"),": ",(0,n.kt)("br",null)," Like stated before, most version control systems have a remove that keeps track of all the changes in the software. This means that if your hard-drive were to crash, you could always get the software from your remove like nothing happened.")),(0,n.kt)("p",null,"I would also like to address some (wrong) misconceptions about why you would ",(0,n.kt)("em",{parentName:"p"},"not")," want to use version control:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},'"This software is so simple it does not need version control"'),": ",(0,n.kt)("br",null)," I have to admit that in some cases this is true, generally if you only plan on working on the code for one or two days you can get away with it. However, if you plan on working on software for longer than two days you should use version control to keep track of your development process. Just the back-up function of version control makes it worth-while."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},'"I am the only person working on this code"'),": ",(0,n.kt)("br",null)," Trust me, this is probably the worst argument for not using version control. Like in the point above the back-up function alone makes it worth-while to use it. Furthermore the division of your software into different versions is very useful for the development process.")),(0,n.kt)("h2",{id:"git"},"Git"),(0,n.kt)("p",null,"Like mentioned before, this article will focus on the use of Git. So what is Git? Git is a method of version control where all collaborators have their own repository on their machine. Whenever they commit a change, only their repository is updated. Once the developer is happy with what he has he can push all changes he has made to the remote, so other collaborators can pull them. Git also allows for different branches, meaning that you can have two branches with different versions of your software active at the same time, and changes by developers are only applied to one branch. Branches can also be merged so that changes made in one branch are also applied in the other branch. A common example of this is software having a master branch and development branch. While developing the developers push to the development branch, once the software is at a major milestone they merge the development branch into the master branch, so that has only major milestone versions on it. Meanwhile the developers can continue working on the development branch again."),(0,n.kt)("h2",{id:"how-to-use-git"},"How to use Git"),(0,n.kt)("p",null,"There are a lot of tutorials on git you can find on google, I will however give a summary of the core concepts here.\nFirst of all ",(0,n.kt)("strong",{parentName:"p"},"commit")," every time you want to save your changes. A commit is basically a version of your software, you can always to back to your commits at a later point in time.\n",(0,n.kt)("strong",{parentName:"p"},"Pulling")," is the action of getting all commits for some branch from your remote. This way you also get your collaborator's changes.\nOn the other hand, ",(0,n.kt)("strong",{parentName:"p"},"pushing")," is the opposite of pulling. It pushes your commit history to the remote, so the other collaborators can get it. Remember: always pull before pushing!"),(0,n.kt)("p",null,"Merge conflicts Even though Git keeps track of individual lines, you will have situations where multiple collaborators have changed the same lines. When pulling from the remote, git will automatically detect these so called 'merge conflicts' and ask you to resolve them. The basic way of resolving merge conflicts is to open the file that has the conflict. You will see some lines that basically look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<<<<<<< HEAD\nnine\n=======\neight\n>>>>>>> branch-a\n")),(0,n.kt)("p",null,"Basically everything between '<<<<<<<HEAD' and '=====' is what you have for that line, everything between the '==========' line and the '>>>>>>>' line is what you pulled from the remote. Resolve the conflict by just removing everything except the code you want to keep. This can be your stuff, the stuff from the remote or even both! A fixed file could look like this (I chose to keep both):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"nine\neight\n")),(0,n.kt)("h2",{id:"remotes"},"Remotes"),(0,n.kt)("p",null,"A remote is basically a remote location at which your software and its different versions are stored, and which are used to communicate versions to all collaborators of that piece of software. There are many different services providing remotes, though for dota 2 modding I would recommend using Git with one of these two services:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/"},"Github")," - A very user- (and noob-) friendly git provider. Github has a nice interface and very easy to use GUI client for windows. Please note that this client only the absolute basics, if you want more complicated stuff you will need to use the command-line. There are a lot of dota 2 mods on github already, you can just search the site for them, try it!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/"},"BitBucket")," - Bitbucket also offers a remote service, similar to github. Bitbucket is not as noob-friendly as Github. If you want to use bitbucket you will not be able to use the Github for windows client, more on that later."),(0,n.kt)("h2",{id:"git-clients"},"Git clients"),(0,n.kt)("p",null,"There are three main methods of doing git:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sourcetreeapp.com/"},"SourceTree")," - My personal favourite. Sourcetree is a git client with a GUI. At first it may seem a bit intimidating, as there are a lot of options, but after some time you automatically learn how it works. Works with any git remote and provides a lot of functionality."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://windows.github.com/"},"Github client")," - Github provides desktop client with a nice and very user-friendly interface. The drawback of this client is that it only works with github remotes, and only allows the bare minimum of git functionality without opening up the command line. Also only works on windows."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git command line")," - Git is basically command-line driven, so ofcourse you can choose to not use any fancy clients at all, but just type the commands directly into your command line. Other clients are basically just user interfaces built on top of this.")),(0,n.kt)("h2",{id:"how-to-set-up-a-dota-2-mod-repository"},"How to set up a dota 2 mod repository"),(0,n.kt)("p",null,"Setting up a dota 2 mod repository is not entirely trivial, as there two directories you want to include at diffent locations instead of creating your repository on just one directory. You could of course make a repository of your dota_ugc folder, but ideally you would like to have one repository per project instead of having to track changes to all of them in the same repository."),(0,n.kt)("p",null,"So here is my solution:\nI made a directory somewhere on my harddrive, doesn't matter where, and called it 'Dota 2 Mods'. Inside this directory I made different directories for each mod I made, so I would have a Bomberman directory, Invoker Warfare directory, etc etc. So how do I get my mod files in here? The answer is symbolic links, or symlinks for short. A symlink is basically a reference to a different directory on your PC. This means that you can have the same directory at two locations in your file system. Changing the contents of this directory will affect the files in the directory at both locations."),(0,n.kt)("p",null,"The repository directory will look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"myproject/\n\u251c\u2500\u2500 game/          // symlink junction to dota 2 beta/game/dota_addons/myproject/\n\u251c\u2500\u2500 content/       // symlink junction to dota 2 beta/content/dota_addons/myproject\n\u2514\u2500\u2500 ...            // other files like documents, scripts, etc can go in myproject/ and your repository too\n")),(0,n.kt)("h3",{id:"how-to-make-your-dota-2-symlinks"},"How to make your dota 2 symlinks"),(0,n.kt)("p",null,"Inside your mod's folder open the command window by shift-rightclicking the folder (make sure you have no files selected) and pressing 'Open command window here'. Now just fill in the commands for each folder you want to include. I'll show you my commands, but keep in mind you might have to change the path to your directories:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'mklink /j "game" "D:\\Program Files\\Steam\\steamapps\\common\\dota 2 beta\\dota_ugc\\game\\dota_addons\\bomberman"\nmklink /j "content" "D:\\Program Files\\Steam\\steamapps\\common\\dota 2 beta\\dota_ugc\\content\\dota_addons\\bomberman"\n')),(0,n.kt)("p",null,"If you did it right you should now see a game and content directory inside your mod's directory! You can now just make a repository of that directory, and it should automatically also take the contents of your symbolically linked directories into account. An additional benefit of this method is that you can also put other things in your mod folder to be included in your version control. Personally I have a documents directory in there too, storing all documents I have produced related to the mod."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bonus hint:")," Make sure you add thumbnail_cache.bin to your gitignore. It prevents this useless file from bloating your repository."))}c.isMDXComponent=!0},6010:(e,t,o)=>{function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}o.d(t,{Z:()=>n})}}]);