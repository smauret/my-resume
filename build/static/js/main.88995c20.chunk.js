(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),i=a.n(c),o=a(14),l=a(16),s=a.n(l),m=a(31),u=a(73),d=a(81),E=a(74),p=a(77),y=a(78),g=a(80),h=function(e){var t=e.sticky,a=e.title,n=e.description;return r.a.createElement(u.a,{container:!0,item:!0,xs:12,style:{height:"8em",position:t?"sticky":"relative",top:t?"0":"200px",backgroundColor:"#dcdcdc"}},r.a.createElement(u.a,{container:!0,item:!0,xs:12,style:{justifyContent:"center"}},r.a.createElement(g.a,{color:"primary",variant:"h2"},a)),r.a.createElement(u.a,{container:!0,item:!0,xs:12,style:{justifyContent:"center"}},r.a.createElement(g.a,{color:"primary",variant:"subtitle1"},n)))},v=function(e){var t=e.title,a=e.company,n=e.date,c=(e.location,e.description);return r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(d.a,{elevation:0,style:{borderRadius:"0"}},r.a.createElement(E.a,null,r.a.createElement(g.a,{color:"primary",variant:"h5",component:"h2",align:"center"},t),r.a.createElement(g.a,{color:"secondary",variant:"subtitle1",component:"h3"},a),r.a.createElement(g.a,{variant:"subtitle2",component:"h3",style:{color:"#808080",textAlign:"right"}},n),r.a.createElement(g.a,{variant:"body1",component:"h2",style:{color:"#505050",textAlign:"left"}},c))))},f=a(75),w=a(79),b=a(76),x=function(e){var t=e.tileData;return r.a.createElement(f.a,{cellHeight:160,cols:3},t.map(function(e){return r.a.createElement(w.a,{key:e.name,cols:e.cols||1},r.a.createElement("img",{src:e.img,alt:e.name,style:{objectFit:"cover"}}),r.a.createElement(b.a,{title:e.name}))}))},j=function(e){var t=e.lang,a=e.level,n=function(e){switch(e){case 0:return"";case 1:return"\u2605";case 2:return"\u2605\u2605";case 3:return"\u2605\u2605\u2605";case 4:return"\u2605\u2605\u2605\u2605";case 5:default:return"\u2605\u2605\u2605\u2605\u2605"}};return r.a.createElement(u.a,{container:!0,item:!0,xs:6},r.a.createElement(u.a,{container:!0,item:!0,xs:3,style:{justifyContent:"center"}},r.a.createElement(g.a,{variant:"subtitle2",style:{color:"#808080",alignSelf:"center"}},t)),r.a.createElement(u.a,{container:!0,item:!0,xs:6},r.a.createElement(g.a,{color:"primary",variant:"h5",style:{width:"fit-content"}},n(a)),r.a.createElement(g.a,{color:"secondary",variant:"h5",style:{width:"fit-content"}},n(5-a))))};a(59)(r.a);var k=Object(m.a)({typography:{fontSize:15,fontFamily:"system-ui",color:p.a[300]},palette:{primary:{main:p.a[800]},secondary:{main:p.a[300]}}});function S(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(o.a)(i,2),m=l[0],p=l[1],g=Object(n.useState)(!0),f=Object(o.a)(g,2),w=f[0],b=f[1];Object(n.useEffect)(function(){s.a.get("/Experiences.json").then(function(e){c(e.data)}),s.a.get("/Skills.json").then(function(e){p(e.data)})},[]);window.addEventListener("scroll",function(){window.scrollY>200?b(!1):b(!0),console.log("scrolled",window.scrollY>200)});return r.a.createElement(y.a,{theme:k},r.a.createElement("div",null,r.a.createElement(h,{sticky:w,title:"Sarah MAURET",description:"Looking for a developer position in the USA."}),r.a.createElement(u.a,{container:!0,spacing:2,style:{alignContent:"center",flexDirection:"column",width:"100%",margin:"0",backgroundColor:"#dcdcdc",padding:"20px"}},r.a.createElement(u.a,{container:!0,item:!0,xs:12,md:8,lg:5,spacing:2},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(d.a,{elevation:0,style:{borderRadius:"0",width:"100%"}},r.a.createElement(E.a,null,r.a.createElement(u.a,{container:!0,item:!0,xs:12},r.a.createElement(j,{lang:"French",level:5}),r.a.createElement(j,{lang:"English",level:5}),r.a.createElement(j,{lang:"German",level:3}),r.a.createElement(j,{lang:"Spanish",level:3}))))),a.map(function(e,t){return r.a.createElement(v,{key:t,title:e.title,company:e.company,date:e.date,location:e.location,description:e.description})})),r.a.createElement(u.a,{container:!0,item:!0,xs:12,md:8,lg:5,spacing:2},r.a.createElement(x,{tileData:m})))))}S.whyDidYouRender=!0;var O=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.88995c20.chunk.js.map