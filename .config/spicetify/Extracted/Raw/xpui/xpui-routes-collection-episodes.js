"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1289],{19541:(e,t,r)=>{r.d(t,{$:()=>o,Q:()=>n});var a=r(59496),l=r(92141),i=r(4332),s=r(4637);const n=(0,a.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:i.oT.ADDED_AT}),o=a.memo((function({uri:e,children:t,defaultSortOption:r}){return(0,s.jsx)(l.r,{uri:e,defaultState:r,sortContext:n,children:t})}))},4332:(e,t,r)=>{r.d(t,{Aq:()=>u,Bf:()=>S,EY:()=>D,G5:()=>p,JV:()=>x,MY:()=>o,Ru:()=>A,ZP:()=>C,a6:()=>T,aY:()=>P,e3:()=>g,ei:()=>n,o$:()=>d,oT:()=>s,pT:()=>m,rJ:()=>b,u3:()=>f,w0:()=>y});var a=r(3802),l=r(87843),i=r(54455);let s=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const n={"show-alphabetical":s.SHOW_ALPHABETICAL,"book-alphabetical":s.BOOK_ALPHABETICAL,"episode-alphabetical":s.EPISODE_ALPHABETICAL,"playlist-alphabetical":s.PLAYLIST_ALPHABETICAL,"album-alphabetical":s.ALBUM_ALPHABETICAL,"recently-added":s.ADDED_AT,"creator-name":s.CREATOR_NAME,"creator-name-alphabetical":s.CREATOR_NAME_ALPHABETICAL,"album-creator-name":s.ALBUM_CREATOR_NAME,"recently-played":s.RECENTLY_PLAYED,"playlist-most-relevant":s.MOST_RELEVANT,"playlist-custom-order":s.CUSTOM_ORDER},o={[s.RECENTLY_PLAYED]:{key:"recently-played",get value(){return a.ag.get("collection.sort.recently-played")}},[s.ADDED_AT]:{key:"recently-added",get value(){return a.ag.get("collection.sort.recently-added")}},[s.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[s.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[s.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[s.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[s.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return a.ag.get("collection.sort.creator")}},[s.CREATOR_NAME]:{key:"creator-name",get value(){return a.ag.get("collection.sort.creator")}},[s.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[s.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return a.ag.get("collection.sort.alphabetical")}},[s.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return a.ag.get("collection.sort.most-relevant")}},[s.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return a.ag.get("collection.sort.custom-order")}}},A=[s.ADDED_AT,s.ALBUM_ALPHABETICAL,s.CREATOR_NAME],c={[s.ADDED_AT]:{field:l.lY.ADDED_AT,order:l.As.DESC},[s.ALBUM_ALPHABETICAL]:{field:l.lY.NAME,order:l.As.ASC},[s.CREATOR_NAME]:{field:l.lY.ARTIST_NAME,order:l.As.ASC}};const u=e=>{if(function(e){return A.includes(e)}(e))return c[e]},d=[s.ADDED_AT,s.CREATOR_NAME_ALPHABETICAL],E={[s.ADDED_AT]:{field:l.hx.ADDED_AT,order:l.As.DESC},[s.CREATOR_NAME_ALPHABETICAL]:{field:l.hx.NAME,order:l.As.ASC}};const g=e=>{if(function(e){return d.includes(e)}(e))return E[e]},T=[s.ADDED_AT,s.SHOW_ALPHABETICAL],L={[s.ADDED_AT]:{field:l.aW.ADDED_AT,order:l.As.DESC},[s.SHOW_ALPHABETICAL]:{field:l.aW.NAME,order:l.As.ASC}};const D=e=>{if(function(e){return T.includes(e)}(e))return L[e]},C=[s.ADDED_AT,s.BOOK_ALPHABETICAL],_={[s.ADDED_AT]:l.VN.ADDED_AT,[s.BOOK_ALPHABETICAL]:l.VN.NAME};const p=e=>{if(function(e){return C.includes(e)}(e))return _[e]},y=[s.MOST_RELEVANT,s.RECENTLY_PLAYED,s.ADDED_AT,s.PLAYLIST_ALPHABETICAL,s.CUSTOM_ORDER],h={[s.ADDED_AT]:{field:i.bD.ADDED_AT,order:i.As.DESC},[s.RECENTLY_PLAYED]:{field:i.bD.RECENTLY_PLAYED,order:i.As.ASC},[s.PLAYLIST_ALPHABETICAL]:{field:i.bD.NAME,order:i.As.ASC},[s.MOST_RELEVANT]:{field:i.bD.RELEVANCE,order:i.As.DESC},[s.CUSTOM_ORDER]:void 0};const m=e=>{if(function(e){return y.includes(e)}(e))return h[e]},P=s.ADDED_AT,f=s.ADDED_AT,b=s.ADDED_AT,S=s.MOST_RELEVANT,x=s.ADDED_AT},76398:(e,t,r)=>{r.d(t,{h:()=>E});var a=r(59496),l=r(8930),i=r(94254),s=r(96170),n=r(29753),o=r(19541),A=r(4332),c=r(4637);const u=a.memo((function({sortOptions:e,onSort:t}){const{sortState:r,setSortState:l}=(0,a.useContext)(o.Q),i=(0,a.useCallback)((e=>{const r=A.ei[e];t?.(r),l(r)}),[t,l]),s=e.map((e=>A.MY[e])),u=A.MY[r];return(0,c.jsx)(n.A,{options:s,onSelect:i,selected:u})})),d="collection-searchBar-searchBar",E=a.memo((function({canSort:e,canFilter:t,filterPlaceholder:r,sortOptions:n}){const{spec:o,logger:A}=(0,s.fU)(l.createDesktopSearchBarEventFactory,{}),E=(0,a.useCallback)((()=>{A.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[A,o]),g=(0,a.useCallback)((()=>{A.logInteraction(o.filterFieldFactory().hitClearFilter())}),[A,o]),T=(0,a.useCallback)((()=>{A.logInteraction(o.sortButtonFactory().hitSort())}),[A,o]);return(0,c.jsxs)("div",{className:d,children:[t?(0,c.jsx)(a.Suspense,{fallback:null,children:(0,c.jsx)(i.K,{placeholder:r,onFilter:E,onClear:g})}):null,e?(0,c.jsx)(u,{sortOptions:n,onSort:T}):null]})}))},56924:(e,t,r)=>{r.d(t,{$:()=>a.$,Q:()=>a.Q});var a=r(19541)},2748:(e,t,r)=>{r.d(t,{Aq:()=>a.Aq,Bf:()=>a.Bf,EY:()=>a.EY,G5:()=>a.G5,JV:()=>a.JV,Ru:()=>a.Ru,ZP:()=>a.ZP,a6:()=>a.a6,aY:()=>a.aY,e3:()=>a.e3,o$:()=>a.o$,oT:()=>a.oT,pT:()=>a.pT,rJ:()=>a.rJ,u3:()=>a.u3,w0:()=>a.w0});var a=r(4332)},63389:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ue});var a=r(59496),l=r(48122),i=r(3802),s=r(96652),n=r(33209),o=r(19281),A=r(66806),c=r(56924),u=r(2748),d=r(32812),E=r(16201),g=r(46164),T=r(48607),L=r(22508),D=r(75112),C=r(77312),_=r(76398),p=r(66632),y=r(87843);const h={[y.yW.NAME]:o.hI.TITLE,[y.yW.SHOW_NAME]:o.hI.SHOW,[y.yW.ADDED_AT]:o.hI.ADDED_AT},m=[u.oT.ADDED_AT,u.oT.CREATOR_NAME,u.oT.EPISODE_ALPHABETICAL],P={[u.oT.ADDED_AT]:{field:y.yW.ADDED_AT,order:y.As.DESC},[u.oT.CREATOR_NAME]:{field:y.yW.SHOW_NAME,order:y.As.ASC},[u.oT.EPISODE_ALPHABETICAL]:{field:y.yW.NAME,order:y.As.ASC}},f=e=>{if(m.includes(e))return P[e]},b=e=>{if(!m.includes(e))return;const t=f(e);if(!t?.field)return;const r=h[t.field];if(!r)return;return o.Vd[r].map((e=>t.order?`${e} ${t.order}`:e)).join(",")},S="m9xwK71Ieq9cySIq4FAP",x="PkEMTu8sGqJeQWJ7HvEs",O="DbH2KkRA8yVWWpXGaNSW";var R=r(4637);const I=({metadata:e,canSort:t,backgroundColor:r,isPlaying:a,isOnline:l,togglePlay:s})=>{const n=(0,p.y)(),{uri:o,name:A}=e,c=e.totalLength>0;return(0,R.jsx)(D.o,{backgroundColor:r,children:(0,R.jsxs)(D.F,{children:[c&&(0,R.jsx)(C.$,{onClick:()=>s(),isPlaying:a,size:"lg",uri:o,disabled:!l,ariaPlayLabel:i.ag.get("playlist.a11y.play",A),ariaPauseLabel:i.ag.get("playlist.a11y.pause",A)}),t&&(0,R.jsx)("div",{className:O,children:(0,R.jsx)(_.h,{canSort:n.getCapabilities().canSort,canFilter:n.getCapabilities().canFilter,filterPlaceholder:i.ag.get("playlist.search_in_playlist"),sortOptions:m})})]})})};var M=r(59447),N=r(98340),k=r(54186),B=r(73769),j=r(65685),H=r(62663),v=r(97302);const U="p6DKqBcwmVtxmHt8ju43",w="_OxEpxzAgJiTENfolVUN";var Y=r(26065),W=r(95663),V=r(54299),$=r(4882),F=r(90303),K=r(99948),G=r(4464),q=r(9374),J=r(94033),Q=r(15408),z=r(78048);const Z={small:64,standard:300,large:640,xlarge:1024},X=a.memo((function({index:e,contextUri:t,episode:r,onRemove:l,usePlayContextItem:i}){const s=(0,a.useRef)(r.duration.milliseconds-r.timeLeft.milliseconds),n=r.uri,[o,c]=(0,a.useState)(0===r.timeLeft.milliseconds),{filter:u}=(0,a.useContext)(A.fo),E=(0,Y.O)(),g=(0,k.jh)(),L=(0,W.o)(),[D]=(0,p.Z)(n,!0),C=(0,z.k)(r.uri,r.isPlayable),_=(0,d.k)(),y=(0,K.Y)((e=>{if(e?.item?.uri===r.uri){const t=(0,G.k)(e)??0;return s.current=t,t}return 0})),{isPlaying:h,isActive:m,togglePlay:P}=i({uri:n,index:e}),{isPlaying:f,isActive:b,togglePlay:S}=(0,T.n)({uri:n,pages:[{items:[{type:q.p.EPISODE,uri:n,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,a.useEffect)((()=>{D||l()}),[D,l]),(0,a.useEffect)((()=>{h||r.duration.milliseconds<=s.current&&c(!0)}),[h,r.duration.milliseconds]);const x=(0,a.useCallback)((e=>{e||(s.current=0),c(e)}),[]),O=(0,a.useCallback)((()=>{L({type:"click",targetUri:n,intent:"navigate"})}),[n,L]),I=(0,a.useCallback)((()=>{_?(L({type:"click",intent:h?"pause":"play"}),P()):(L({type:"click",intent:f?"pause":"play"}),S())}),[_,h,f,L,P,S]),M=(0,a.useCallback)((e=>(0,R.jsx)(Q.o,{searchWords:[u],textToHighlight:e})),[u]),w=r.podcastSubscription?.isPaywalled??!1,X=r.podcastSubscription?.isUserSubscribed??!1,{badges:ee}=(0,J.r)({isExplicit:r.isExplicit,isMOGEFRestricted:r.is19PlusOnly,isPaywalled:w});let te=!1;return(m||!_&&b)&&(te=!0),D?(0,R.jsxs)(N.ZP,{value:"row",index:e,children:[(0,R.jsx)("hr",{className:U,"aria-hidden":!0}),(0,R.jsx)(V._,{menu:(0,R.jsx)(B.k,{uri:n,showUri:r.show?.uri,isPlayed:o,onMarkAsPlayed:x}),children:(0,R.jsx)(j.X,{requestId:r.requestId,index:e,uri:n,uid:n,size:g,images:r.images.map((e=>({url:e.url,width:e.width||(e.label?Z[e.label]:null),height:e.height||(e.label?Z[e.label]:null)}))),isPaywalled:w,isUserSubscribed:X,name:r.name,highlightText:M,showName:r.show?.name,showUri:r.show?.uri,description:r.description,isPlayable:C,fullyPlayed:o,durationMs:r.duration.milliseconds,releaseDate:r.release.date||"",resumePositionMs:s.current,handleDragStart:e=>{if(e.target!==e.currentTarget)return;let a=`${r.name}`;r.show&&(a+=` • ${r.show.name}`),E(e,[n],a,t)},handlePlaybackClick:I,handleClick:O,isCurrentlyPlaying:te,isPlaying:_?h:f,position:te?y:void 0,episodeSharingInfo:null,onMarkAsPlayed:x,badges:(0,R.jsxs)(R.Fragment,{children:[ee.explicit&&(0,R.jsx)($.N,{}),ee.paid&&(0,R.jsx)(v.g,{}),ee.nineteen&&(0,R.jsx)(F.X,{size:16})]}),playButtonWrapper:e=>(0,R.jsx)(H.l,{enabled:w&&!X,showUri:r.show?.uri||void 0,children:e})})})]}):null})),ee=a.memo((function({contextUri:e,usePlayContextItem:t}){const r=(0,a.useContext)(g.H),{sortState:l}=(0,a.useContext)(c.Q),[i,s]=(0,a.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),n=(0,a.useRef)(!1),o=(0,a.useRef)(0),u=(0,a.useRef)(0),{filter:d}=(0,a.useContext)(A.fo),E=(0,a.useCallback)((()=>{u.current++}),[]),{ref:T,breakpoint:L}=(0,k.Db)({[k.Uo.MEDIUM]:0,[k.Uo.LARGE]:600}),D=(0,a.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(n.current||(n.current=!0,(async e=>{const t=await r.getEpisodes({offset:e-u.current,limit:50,sort:f(l),filter:d});return u.current=0,t})(Number(t)).then((r=>{s((a=>{const l=Number(r.offset)+r.items.length,i=e?[]:[...a.items];return i.splice(Number(t),r.items.length,...r.items),o.current=l<r.totalLength?l:null,{...r,items:i}})),n.current=!1}))))}),[d,r,l]);return(0,a.useEffect)((()=>{o.current=0,D(!0)}),[D]),(0,R.jsx)(k.ZU.Provider,{value:L,children:(0,R.jsx)(N.ZP,{value:"track-list",children:(0,R.jsx)("div",{ref:T,children:(0,R.jsx)(M.C,{onReachBottom:D,triggerOnInitialLoad:!0,children:i.items.map(((r,a)=>(0,R.jsx)("div",{className:w,children:(0,R.jsx)(X,{index:a,episode:r,contextUri:e,onRemove:E,usePlayContextItem:t},`${r.uri}/${a}`)},`${a}${r.uri}`)))})})})})}));var te=r(56162),re=r(69383),ae=r(16743),le=r(73997),ie=r(853),se=r(82301);const ne=({metadata:e,backgroundColor:t,isPlaying:r,isOnline:l,togglePlay:s})=>{const{uri:n,name:o,images:A,totalLength:c,owner:u}=e,d=(0,a.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,R.jsxs)(re.gF,{backgroundColor:t,children:[(0,R.jsxs)(ae.W,{children:[(0,R.jsx)(C.$,{size:"md",onClick:()=>s(),isPlaying:r,uri:n,disabled:!l,ariaPlayLabel:i.ag.get("playlist.a11y.play",o),ariaPauseLabel:i.ag.get("playlist.a11y.pause",o)}),(0,R.jsx)(le.i,{text:o})]}),(0,R.jsx)(re.Oz,{images:A,name:o,shape:ie.K.ROUNDED_CORNERS,renderImage:()=>(0,R.jsx)(se.$,{})}),(0,R.jsxs)(re.sP,{children:[(0,R.jsx)(te.D,{variant:"mestoBold",children:i.ag.get("playlist")}),(0,R.jsx)(re.xd,{canEdit:!1,onClick:()=>{},children:o}),(0,R.jsx)(re.QS,{creators:[d],totalEpisodes:c})]})]})};var oe=r(91703),Ae=r(14769);const ce=({metadata:e,canSort:t})=>{const r=(0,E.Y5)("#006450"),n=(0,d.k)(),{sortState:u}=(0,a.useContext)(c.Q),{filter:g}=(0,a.useContext)(A.fo),{isPlaying:D,togglePlay:C,usePlayContextItem:_}=(0,T.n)({uri:e.uri,metadata:{[L.sb.SORTING_CRITERIA]:b(u),[L.sb.FILTERING_PREDICATE]:(0,o.aK)(g)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});return(0,R.jsxs)("section",{className:x,"data-testid":"your-episodes-page",children:[(0,R.jsx)(oe.$,{children:i.ag.get("sidebar.your_episodes")}),(0,R.jsx)(ne,{metadata:e,backgroundColor:r,isPlaying:D,isOnline:n,togglePlay:C}),(0,R.jsxs)("div",{className:S,children:[(0,R.jsx)(I,{metadata:e,backgroundColor:r,isPlaying:D,isOnline:n,togglePlay:C,canSort:t}),(0,R.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,R.jsx)(ee,{contextUri:e.uri,usePlayContextItem:_}):(0,R.jsx)(s.u,{message:i.ag.get("collection.empty-page.episodes-subtitle"),title:i.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:i.ag.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,R.jsx)(l.G,{"aria-hidden":"true"})})})]})]})},ue=(0,a.memo)((function(){const e=(0,a.useContext)(g.H).getCapabilities(),t=(0,Ae.x)();return t?(0,R.jsx)(c.$,{uri:t.uri,defaultSortOption:u.oT.ADDED_AT,children:(0,R.jsx)(A.hz,{uri:t.uri,children:(0,R.jsx)(ce,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,R.jsx)(n.h,{hasError:!1,errorMessage:i.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map