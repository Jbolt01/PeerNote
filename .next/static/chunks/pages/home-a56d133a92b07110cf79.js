_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"+opK":function(e,r,t){e.exports={courseCard:"styles_courseCard__P7vKk",fadeIn:"styles_fadeIn__1b9pI"}},"58ex":function(e,r,t){"use strict";t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return l})),t.d(r,"d",(function(){return u})),t.d(r,"c",(function(){return d}));var a=t("vJKn"),n=t.n(a),s=t("rg98"),i=t("1ZD8"),c=t("Dp36");function o(e){return Object(i.useQuery)("useGetlatestMaterials",Object(s.a)(n.a.mark((function r(){var t,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("/api/supaRequests",{headers:{type:"COURSE-get-latest-materials",course_id:e}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))))}function l(e){return Object(i.useQuery)("useGetLikedMaterials",Object(s.a)(n.a.mark((function r(){var t,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("/api/supaRequests",{headers:{type:"HOME-get-liked-materials",current_user_id:e.id}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))))}function u(e){return Object(i.useQuery)("useGetTopLikedMaterials",Object(s.a)(n.a.mark((function r(){var t,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("/api/supaRequests",{headers:{type:"COURSE-get-top-liked-materials",course_id:e}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))))}function d(e){return Object(i.useQuery)("useGetSeachedMaterials",Object(s.a)(n.a.mark((function r(){var t,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("/api/supaRequests",{headers:{type:"SEARCH-get-searched-materials",search:e}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))),{staleTime:5e3})}},"6cby":function(e,r,t){"use strict";t.d(r,"a",(function(){return O}));var a=t("yGVr"),n=t("sKyC"),s=t("5+Am"),i=t("U6LL"),c=t("4jWa"),o=t("CRla"),l=t("epLR"),u=t("pr4h"),d=t("q1tI");function p(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var j=Object(n.a)(((e,r)=>{var t=b({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},Object(s.d)().badge);return d.createElement(i.a.div,b({ref:r},e,{className:Object(l.d)("chakra-avatar__badge",e.className),__css:t}))}));function m(e){var[r,t]=e.split(" ");return r&&t?""+r.charAt(0)+t.charAt(0):r.charAt(0)}u.a&&(j.displayName="AvatarBadge");var h=e=>{var{name:r,getInitials:t}=e,a=p(e,["name","getInitials"]),n=Object(s.d)();return d.createElement(i.a.div,b({role:"img","aria-label":r},a,{__css:n.label}),r?null==t?void 0:t(r):null)},f=e=>d.createElement(i.a.svg,b({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),d.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),d.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),g={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},O=Object(n.a)(((e,r)=>{var t=Object(c.a)("Avatar",e),a=Object(o.b)(e),{src:n,name:u,showBorder:j,borderRadius:h="full",onError:O,getInitials:v=m,icon:y=d.createElement(f,null),iconLabel:C=" avatar",loading:w,children:k,borderColor:_,ignoreFallback:R}=a,S=p(a,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"]),L=b({borderRadius:h,borderWidth:j?"2px":void 0},g,t.container);return _&&(L.borderColor=_),d.createElement(i.a.span,b({ref:r},S,{className:Object(l.d)("chakra-avatar",e.className),__css:L}),d.createElement(s.b,{value:t},d.createElement(x,{src:n,loading:w,onError:O,getInitials:v,name:u,borderRadius:h,icon:y,iconLabel:C,ignoreFallback:R}),k))}));u.a&&(O.displayName="Avatar");var x=e=>{var{src:r,onError:t,getInitials:n,name:s,borderRadius:c,loading:o,iconLabel:l,icon:u=d.createElement(f,null),ignoreFallback:p}=e,b=Object(a.a)({src:r,onError:t,ignoreFallback:p});return!r||!("loaded"===b)?s?d.createElement(h,{className:"chakra-avatar__initials",getInitials:n,name:s}):d.cloneElement(u,{role:"img","aria-label":l}):d.createElement(i.a.img,{src:r,alt:s,className:"chakra-avatar__img",loading:o,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})};u.a&&(x.displayName="AvatarImage")},"70uq":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t("FCkD")}])},"8ZLp":function(e,r,t){"use strict";t.d(r,"a",(function(){return m}));t("v/A3");var a=t("U6LL"),n=t("AeFk"),s=t("sKyC"),i=t("4jWa"),c=t("CRla"),o=t("q1tI");var l=t("epLR"),u=t("pr4h");function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}var b=Object(a.a)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),j=Object(n.b)({from:{opacity:0},to:{opacity:1}}),m=Object(s.a)(((e,r)=>{var t=Object(i.b)("Skeleton",e),n=(()=>{var e=o.useRef(!0);return o.useEffect((()=>{e.current=!1}),[]),e.current})(),s=Object(c.b)(e),{isLoaded:u,fadeDuration:m,className:h}=s,f=p(s,["startColor","endColor","isLoaded","fadeDuration","speed","className"]),g=function(e){var r=Object(o.useRef)();return Object(o.useEffect)((()=>{r.current=e}),[e]),r.current}(u),O=Object(l.d)("chakra-skeleton",h);if(u){var x=n||g?"none":j+" "+m+"s";return o.createElement(a.a.div,d({ref:r,className:O,__css:{animation:x}},f))}return o.createElement(b,d({ref:r,className:O},f,{__css:t}))}));m.defaultProps={fadeDuration:.4,speed:.8},u.a&&(m.displayName="Skeleton");u.a;u.a},"8s4A":function(e,r,t){"use strict";t.d(r,"a",(function(){return v}));var a=t("nKUr"),n=t("tofy"),s=t("MAJE"),i=t("M/Vb"),c=t("v7Hm"),o=t("z0gp"),l=t("8ZLp"),u=t("wZsY"),d=t("vG+z"),p=t("wCIg"),b=t("YFqc"),j=t.n(b),m=t("Tgqd"),h=t("33Fu"),f=t("+opK"),g=t.n(f),O=t("kyeR"),x=t("l4Zi");function v(e){var r=e.coursesArray,t=e.title,b=e.isLoading,f=void 0!==b&&b,v=e.isFetching,y=void 0!==v&&v,C=e.error,w=Object(x.a)();return Object(a.jsxs)(a.Fragment,{children:[!!t&&Object(a.jsxs)(n.a,{mt:"8",align:"center",children:[Object(a.jsx)(s.a,{fontSize:"3xl",fontWeight:"semibold",children:t}),y&&Object(a.jsx)(i.a,{color:"purple.600",size:"md",ml:"3"})]}),Object(a.jsx)(c.a,{width:"100%",pt:"4",mb:"4",children:f?Object(a.jsxs)(o.a,{w:"100%",spacing:"4",columns:[1,2,2,3],children:[Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})," ",Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})," ",Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})," ",Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"}),Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"}),Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})]}):C?Object(a.jsx)(s.a,{children:"Woops, Error in React Query"}):Object(a.jsx)(u.b,{w:"100%",children:r&&(null===r||void 0===r?void 0:r.length)>0&&null!==r?Object(a.jsx)(o.a,{w:"100%",spacing:"4",columns:[1,2,2,3],children:r.map((function(e){return Object(a.jsx)(j.a,{href:"/community/course/".concat(e.id),children:Object(a.jsx)("a",{children:Object(a.jsxs)(c.a,{className:g.a.courseCard,position:"relative",bg:"green.900",height:"96",borderRadius:"2xl",children:[Object(a.jsx)(d.a,{src:""!==e.image?e.image:"/assets/illustrations/CursoPhotoSource.svg",alt:w.courseList.thumbAlt,w:"100%",h:"55%",borderTopRadius:"2xl",objectFit:"cover"}),Object(a.jsxs)(u.b,{position:"absolute",px:2,py:1,h:"45%",alignItems:"flex-start",children:[Object(a.jsx)(s.a,{fontSize:"lg",fontWeight:"600",noOfLines:3,children:e.name}),Object(a.jsx)(p.a,{}),Object(a.jsxs)(c.a,{alignItems:"flex-start",spacing:"0",pb:"0.5",children:[Object(a.jsxs)(n.a,{align:"baseline",children:[Object(a.jsx)(c.a,{mr:"1",color:"green.500",children:Object(a.jsx)(m.b,{})}),Object(a.jsx)(s.a,{color:"green.500",children:null!==e.materials_available&&e.materials_available>0?"".concat(e.materials_available," ").concat(w.courseList.manySummaries):"".concat(w.courseList.noSummary)})]}),Object(a.jsxs)(n.a,{align:"baseline",children:[Object(a.jsx)(c.a,{mr:"1",color:"green.500",children:Object(a.jsx)(h.a,{})}),Object(a.jsx)(s.a,{color:"green.500",children:null!==e.likes&&1===e.likes?"".concat(e.likes," ").concat(w.courseList.like):e.likes>1?"".concat(e.likes," ").concat(w.courseList.like,"s"):"".concat(w.courseList.noLikes)})]})]})]})]})})},e.id)}))}):Object(a.jsx)(O.a,{h:"96",w:"100%",boxSize:"120px",activeBackground:!0})})})]})}},AFKX:function(e,r){},FCkD:function(e,r,t){"use strict";t.r(r),t.d(r,"__N_SSP",(function(){return W})),t.d(r,"default",(function(){return F}));var a=t("nKUr"),n=t("xvhg"),s=t("q1tI"),i=t("tofy"),c=t("sKyC"),o=t("hMXk"),l=t("U6LL"),u=t("x9W9"),d=t("epLR"),p=t("pr4h");function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function j(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}var m=Object(c.a)(((e,r)=>{var{spacing:t="0.5rem",children:a,justify:n,direction:i,align:c,className:p,shouldWrapChildren:m}=e,f=j(e,["spacing","children","justify","direction","align","className","shouldWrapChildren"]),g=s.useMemo((()=>({"--chakra-wrap-spacing":e=>Object(u.c)(t,(r=>Object(o.tokenToCSSVar)("space",r)(e))),"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:n,alignItems:c,flexDirection:i,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}})),[t,n,c,i]),O=m?s.Children.map(a,((e,r)=>s.createElement(h,{key:r},e))):a;return s.createElement(l.a.div,b({ref:r,className:Object(d.d)("chakra-wrap",p)},f),s.createElement(l.a.ul,{className:"chakra-wrap__list",__css:g},O))}));p.a&&(m.displayName="Wrap");var h=Object(c.a)(((e,r)=>{var{className:t}=e,a=j(e,["className"]);return s.createElement(l.a.li,b({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:Object(d.d)("chakra-wrap__listitem",t)},a))}));p.a&&(h.displayName="WrapItem");var f=t("6cby"),g=t("4jWa"),O=t("CRla");function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function v(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}var y=Object(c.a)(((e,r)=>{var t=Object(g.b)("Divider",e),{borderLeftWidth:a,borderBottomWidth:n,borderTopWidth:i,borderRightWidth:c,borderWidth:o,borderStyle:u,borderColor:p}=t,b=v(t,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),j=Object(O.b)(e),{className:m,orientation:h="horizontal",__css:f}=j,y=v(j,["className","orientation","__css"]),C={vertical:{borderLeftWidth:a||c||o||"1px",height:"100%"},horizontal:{borderBottomWidth:n||i||o||"1px",width:"100%"}};return s.createElement(l.a.hr,x({ref:r,"aria-orientation":h},y,{__css:x({},b,{border:"0",borderColor:p,borderStyle:u},C[h],f),className:Object(d.d)("chakra-divider",m)}))}));p.a&&(y.displayName="Divider");var C=t("vG+z"),w=t("nGE6"),k=t("MAJE"),_=t("g4pe"),R=t.n(_),S=t("8s4A"),L=t("TsuU"),E=t("eqOQ"),N=t.n(E),A=t("Vs0p"),I=t("58ex"),T=t("l4Zi"),W=!0;function F(e){var r=e.currentUserId,t=Object(w.useSession)(),s=Object(n.a)(t,1)[0],c=Object(T.a)(),o=Object(A.c)(r),l=o.data,u=o.isLoading,d=o.isFetching,p=o.error,b=Object(I.b)(r),j=b.data,m=b.isLoading,g=b.isFetching,O=b.error;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R.a,{children:Object(a.jsx)("title",{children:"Home | PeerNote"})}),!!s&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:N.a.contentContainer,children:[Object(a.jsxs)(i.a,{alignItems:"center",my:"2rem",justify:"center",children:[Object(a.jsxs)(h,{mr:"6",children:[Object(a.jsx)(f.a,{size:"xl",name:s.user.name,src:null===s||void 0===s?void 0:s.user.image})," "]}),Object(a.jsxs)(k.a,{fontSize:"5xl",fontWeight:"bold",color:"purple.500",children:[c.home.greeting," ",s.user.name,"!"]})]}),Object(a.jsx)(y,{borderColor:"purple.500",border:"1px"}),Object(a.jsxs)("div",{className:N.a.topText,children:[Object(a.jsx)(h,{color:"green.400",boxSize:"10",children:Object(a.jsx)(C.a,{fill:"white",alt:"library",src:"/assets/icons/library.svg"})}),Object(a.jsx)("h1",{children:c.home.yourLibrary})]}),Object(a.jsx)(S.a,{title:c.home.likedCourses,coursesArray:l,isLoading:u,isFetching:d,error:p}),Object(a.jsx)(L.a,{title:c.home.likedMaterials,materialArray:j,isLoading:m,isFetching:g,error:O})]})})]})}},TsuU:function(e,r,t){"use strict";t.d(r,"a",(function(){return v}));var a=t("nKUr"),n=t("tofy"),s=t("MAJE"),i=t("M/Vb"),c=t("v7Hm"),o=t("z0gp"),l=t("8ZLp"),u=t("wZsY"),d=t("vG+z"),p=t("wCIg"),b=t("YFqc"),j=t.n(b),m=t("ma3e"),h=t("33Fu"),f=t("XtbJ"),g=t.n(f),O=t("kyeR"),x=t("l4Zi");function v(e){var r=e.materialArray,t=e.title,b=e.isLoading,f=void 0!==b&&b,v=e.isFetching,y=void 0!==v&&v,C=e.error,w=Object(x.a)();return Object(a.jsxs)(a.Fragment,{children:[!!t&&Object(a.jsxs)(n.a,{mt:"8",align:"center",children:[Object(a.jsx)(s.a,{fontSize:"3xl",fontWeight:"semibold",children:t}),y&&Object(a.jsx)(i.a,{color:"purple.600",size:"md",ml:"3"})]}),Object(a.jsx)(c.a,{width:"100%",pt:"4",mb:"4",children:f?Object(a.jsxs)(o.a,{w:"100%",spacing:"4",columns:[1,2,2,3],children:[Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})," ",Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})," ",Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})," ",Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"}),Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"}),Object(a.jsx)(l.a,{h:"96",startColor:"purple.600",endColor:"purple.800",borderRadius:"2xl"})]}):C?Object(a.jsx)(s.a,{children:"Error in React Query, call de Tacobell"}):Object(a.jsx)(u.b,{w:"100%",children:r&&(null===r||void 0===r?void 0:r.length)>0?Object(a.jsx)(o.a,{w:"100%",spacing:"4",columns:[1,2,2,3],children:r.map((function(e){return Object(a.jsx)(j.a,{href:"/community/summary/".concat(e.id),children:Object(a.jsx)("a",{children:Object(a.jsxs)(c.a,{className:g.a.materialCard,position:"relative",bg:"purple.800",height:"96",borderRadius:"2xl",children:[Object(a.jsx)(d.a,{src:""!==e.image?e.image:"/assets/illustrations/MaterialImageSource.svg",alt:w.materialList.thumbAlt,w:"100%",h:"55%",borderTopRadius:"2xl",objectFit:"cover"}),Object(a.jsxs)(u.b,{position:"absolute",px:3,py:1,h:"45%",alignItems:"flex-start",children:[Object(a.jsx)(s.a,{fontSize:"lg",fontWeight:"600",noOfLines:3,children:e.name}),Object(a.jsx)(p.a,{}),Object(a.jsxs)(c.a,{alignItems:"flex-start",spacing:"0",pb:"1",children:[Object(a.jsxs)(n.a,{align:"baseline",children:[Object(a.jsx)(c.a,{mr:"1",color:"purple.500",children:Object(a.jsx)(h.a,{})}),Object(a.jsx)(s.a,{color:"purple.500",children:null!==e.likes&&1===e.likes?"".concat(e.likes," ").concat(w.materialList.like):e.likes>1?"".concat(e.likes," ").concat(w.materialList.like,"s"):"".concat(w.materialList.noLikes)})]}),Object(a.jsxs)(n.a,{align:"baseline",color:"purple.500",children:[Object(a.jsx)(m.b,{}),Object(a.jsx)(s.a,{ml:"1",children:e.users.name})]})]})]})]})})},e.id)}))}):Object(a.jsx)(O.a,{h:"96",w:"100%",boxSize:"120px",activeBackground:!0})})})]})}},Vs0p:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"d",(function(){return l})),t.d(r,"c",(function(){return u})),t.d(r,"e",(function(){return d})),t.d(r,"a",(function(){return p}));var a=t("vJKn"),n=t.n(a),s=t("rg98"),i=t("1ZD8"),c=t("Dp36");function o(){return Object(i.useQuery)("useGetlatestCourses",Object(s.a)(n.a.mark((function e(){var r,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/supaRequests",{headers:{type:"COMMUNITY-get-latest-courses"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),{staleTime:5e3})}function l(){return Object(i.useQuery)("useGetMostLikedCourses",Object(s.a)(n.a.mark((function e(){var r,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/supaRequests",{headers:{type:"COMMUNITY-get-most-liked-courses"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),{staleTime:5e3})}function u(e){return Object(i.useQuery)("useGetLikedCourses",Object(s.a)(n.a.mark((function r(){var t,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("/api/supaRequests",{headers:{type:"HOME-get-liked-courses",current_user_id:e.id}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))),{staleTime:5e3})}function d(e){return Object(i.useQuery)("useGetSeachedCourses",Object(s.a)(n.a.mark((function r(){var t,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("/api/supaRequests",{headers:{type:"SEARCH-get-searched-courses",search:e}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))),{staleTime:5e3})}function p(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(n.a.mark((function e(r){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/supaRequests",{headers:{type:"COURSE-increment-course-view",course_slug_number:r}});case 2:t=e.sent,t.data;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},XtbJ:function(e,r,t){e.exports={materialCard:"styles_materialCard__hD5Mo",fadeIn:"styles_fadeIn__2imn3"}},eqOQ:function(e,r,t){e.exports={contentContainer:"styles_contentContainer__1veTf",topText:"styles_topText__1DSW5"}},hMXk:function(e,r,t){"use strict";var a=t("0sYf");t.o(a,"tokenToCSSVar")&&t.d(r,"tokenToCSSVar",(function(){return a.tokenToCSSVar}));var n=t("AFKX");t.o(n,"tokenToCSSVar")&&t.d(r,"tokenToCSSVar",(function(){return n.tokenToCSSVar}))},xvhg:function(e,r,t){"use strict";function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],a=!0,n=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);a=!0);}catch(o){n=!0,s=o}finally{try{a||null==c.return||c.return()}finally{if(n)throw s}}return t}}(e,r)||function(e,r){if(e){if("string"===typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,"a",(function(){return n}))},z0gp:function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));var a=t("sKyC"),n=t("pr4h"),s=t("x9W9"),i=t("q1tI"),c=t("U6LL");t("BXwj");function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}var u=Object(a.a)(((e,r)=>{var{area:t,templateAreas:a,gap:n,rowGap:s,columnGap:u,column:d,row:p,autoFlow:b,autoRows:j,templateRows:m,autoColumns:h,templateColumns:f}=e,g=l(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),O={display:"grid",gridArea:t,gridTemplateAreas:a,gridGap:n,gridRowGap:s,gridColumnGap:u,gridAutoColumns:h,gridColumn:d,gridRow:p,gridAutoFlow:b,gridAutoRows:j,gridTemplateRows:m,gridTemplateColumns:f};return i.createElement(c.a.div,o({ref:r,__css:O},g))}));n.a&&(u.displayName="Grid");function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var p=Object(a.a)(((e,r)=>{var t,a,{columns:c,spacingX:o,spacingY:l,spacing:p,minChildWidth:b}=e,j=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),m=b?(a=b,Object(s.c)(a,(e=>{return Object(n.f)(e)?null:"repeat(auto-fit, minmax("+(r=e,(Object(n.g)(r)?r+"px":r)+", 1fr))");var r}))):(t=c,Object(s.c)(t,(e=>Object(n.f)(e)?null:"repeat("+e+", minmax(0, 1fr))")));return i.createElement(u,d({ref:r,gap:p,columnGap:o,rowGap:l,templateColumns:m},j))}));n.a&&(p.displayName="SimpleGrid")}},[["70uq",1,2,8,9,0,3,4,5,7,6]]]);