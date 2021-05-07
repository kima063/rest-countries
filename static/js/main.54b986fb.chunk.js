(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ce}));var a=n(27),c=n(0),s=n.n(c),r=n(10),i=n.n(r),o=n(87),l=n(48),j=n.n(l),d=n(68),b=n(191),h=n(195),u=n(194),x=n(196),O=n(200),m=n(198),p=n(197),f=n(199),g=n(38),v=n(193),y=n(2),w=Object(b.a)((function(e){return{root:{flexGrow:1},media:{height:180},content:{height:150},nav:{textDecoration:"None"},cardWidth:{width:"21rem"}}})),C=function(e){var t=w();return 0===e.countries.length?Object(y.jsx)(v.a,{}):Object(y.jsx)("div",{className:t.root,children:Object(y.jsx)(u.a,{container:!0,spacing:5,direction:"row",justify:"flex-start",alignItems:"flex-start",children:e.countries.map((function(e){var n=e.numericCode,a=e.flag,c=e.name,s=e.population,r=e.region,i=e.capital,o=e.alpha3Code;return Object(y.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(y.jsx)(g.b,{className:t.nav,to:"/".concat(o),children:Object(y.jsxs)(h.a,{className:t.cardWidth,children:[Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{className:t.media,image:a}),Object(y.jsxs)(m.a,{className:t.content,children:[Object(y.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.title,children:c}),Object(y.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:["Population: ",s]}),Object(y.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:["Region: ",r]}),Object(y.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:["Capital: ",i]})]})]}),Object(y.jsx)(O.a,{})]})})},n)}))})})},N=n(210),S=n(211),B=n(201),W=n(209),k=Object(b.a)((function(e){return{formControl:{minWidth:230,minHeight:50,marginBottom:20},selectEmpty:{marginTop:e.spacing(2)}}}));function z(e){var t=k();return Object(y.jsx)("div",{children:Object(y.jsxs)(B.a,{variant:"outlined",className:t.formControl,children:[Object(y.jsx)(N.a,{id:"demo-simple-select-outlined-label",children:"Filter By Region"}),Object(y.jsxs)(W.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Filter By Region",onChange:function(t){e.filterCountries(t.target.value)},children:[Object(y.jsx)(S.a,{value:"",children:Object(y.jsx)("em",{children:"All"})}),Object(y.jsx)(S.a,{value:"Africa",children:"Africa"}),Object(y.jsx)(S.a,{value:"Americas",children:"Americas"}),Object(y.jsx)(S.a,{value:"Asia",children:"Asia"}),Object(y.jsx)(S.a,{value:"Europe",children:"Europe"}),Object(y.jsx)(S.a,{value:"Oceania",children:"Oceania"})]})]})})}var A=n(102),E=n.n(A);var I=function(e){return Object(y.jsx)("div",{variant:"body1",children:Object(y.jsx)(E.a,{placeholder:"Search by Country Name",onChange:function(t){e.searchCountries(t)}})})},L=n(202),D=Object(b.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3),justifyContent:"space-between",width:"100%"},root:{padding:30},paper:{marginBottom:30},flex:{justifyContent:"space-between"},toolbar:{justifyContent:"space-between"}}}));var R=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),i=Object(a.a)(r,2),l=i[0],b=i[1],h=Object(c.useState)(!1),x=Object(a.a)(h,2),O=x[0],m=x[1],p=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n),b(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){p()}),[]);var f=D();return Object(y.jsx)("div",{className:f.root,children:Object(y.jsxs)(L.a,{children:[Object(y.jsxs)(u.a,{container:!0,className:f.flex,children:[Object(y.jsx)(u.a,{item:!0,xs:12,sm:3,style:{marginBottom:20},children:Object(y.jsx)(I,{searchCountries:function(e){var t=Object(o.a)(n);0===(t=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))).length?m(!0):m(!1),b(t)}})}),Object(y.jsx)(u.a,{item:!0,xs:12,sm:2,children:Object(y.jsx)(z,{filterCountries:function(e){var t=Object(o.a)(n);t=t.filter((function(t){return t.region.includes(e)})),b(t)}})})]}),!0===O?Object(y.jsx)("h2",{children:"Not Found"}):Object(y.jsx)(C,{countries:l})]})})},T=n(203),F=n(103),M=n.n(F),G=n(204),J=n(205),P=Object(b.a)((function(e){return{root:{overflow:"hidden",padding:e.spacing(5),fontSize:18},buttonStyle:{marginBottom:30},img:{maxWidth:600,width:"100%",height:"auto"},nav:{textDecoration:"None"}}})),H="https://restcountries.eu/rest/v2/alpha/";function q(e){var t=P(),n=Object(c.useState)(H+window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)),s=Object(a.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)([]),l=Object(a.a)(o,2),b=l[0],h=l[1],x=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H+window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[r]),Object(y.jsxs)(u.a,{lg:12,item:!0,container:!0,spacing:1,className:t.root,children:[Object(y.jsx)(u.a,{item:!0,lg:12,xs:12,container:!0,children:Object(y.jsx)(g.b,{className:t.nav,to:"/",children:Object(y.jsxs)(T.a,{variant:"outlined",className:t.buttonStyle,children:[Object(y.jsx)(M.a,{})," Back"]})})}),Object(y.jsx)(u.a,{item:!0,lg:5,xs:12,children:void 0===b.flag?Object(y.jsx)(G.a,{variant:"rect",width:400,height:250}):Object(y.jsx)("img",{className:t.img,alt:"complex",src:b.flag})}),void 0===b.name?Object(y.jsx)(J.a,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(u.a,{item:!0,lg:3,xs:12,style:{padding:18},children:[Object(y.jsx)(f.a,{gutterBottom:!0,variant:"h4",children:Object(y.jsx)("strong",{children:b.name})}),Object(y.jsxs)(f.a,{variant:"body2",gutterBottom:!0,children:[Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:" Native Name: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.nativeName})]}),Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:"Population: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.population})]}),Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:"Region: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.region})]}),Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:"Sub Region: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.subregion})]}),Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:"Capital: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.capital})]})]}),Object(y.jsxs)(f.a,{variant:"body3",style:{cursor:"pointer"},children:[Object(y.jsx)("strong",{children:"Border Countries: "}),b.borders.map((function(e){return Object(y.jsx)(g.b,{className:t.nav,to:{pathname:"/"+e},onClick:function(){i(H+"/"+e)},children:Object(y.jsx)(T.a,{variant:"outlined",style:{margin:3},children:e})})}))]})]}),Object(y.jsx)(u.a,{item:!0,lg:3,xs:12,style:{padding:18},children:Object(y.jsxs)(f.a,{variant:"body2",style:{marginTop:50},gutterBottom:!0,children:[Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:"Top Level Domain: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.topLevelDomain.join(", ")})]}),Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:"Currencies: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.currencies.map((function(e){return e.name})).join(", ")})]}),Object(y.jsxs)(f.a,{style:{fontSize:18},children:[Object(y.jsx)("strong",{children:"Languages: "}),Object(y.jsx)("span",{style:{fontWeight:200},children:b.languages.map((function(e){return e.name})).join(", ")})]})]})})]})]})}var K=n(84),Q=n(104),U=n.n(Q),V=Object(b.a)((function(e){return{paper:{textAlign:"center",padding:10,position:"fixed",bottom:0,width:"100%",height:60},root:{marginTop:"calc(50vh - 64px * 2 )"}}})),X=function(){var e=V();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsxs)(K.a,{className:e.paper,elevation:0,children:[Object(y.jsx)(U.a,{style:{fontSize:"small"}}),"Copyright 2021. Challenge by frontend Mentor. Coded by Maksuda Islam Lima."]})})},Y=n(11),Z=n(206),$=n(106),_=n(207),ee=n(208),te=n(105),ne=n.n(te),ae=Object(b.a)((function(){return{toolbar:{justifyContent:"space-between"}}}));function ce(){var e=Object(Z.a)("(prefers-color-scheme: dark)"),t=s.a.useState(e),n=Object(a.a)(t,2),r=n[0],i=n[1],o=Object($.a)({palette:{type:r?"dark":"light"}});Object(c.useEffect)((function(){i(e)}),[e]);var l=ae();return Object(y.jsxs)(L.a,{theme:o,children:[Object(y.jsx)(_.a,{}),Object(y.jsxs)("div",{children:[Object(y.jsx)(K.a,{position:"static",children:Object(y.jsxs)(ee.a,{className:l.toolbar,children:[Object(y.jsx)(f.a,{variant:"h5",children:" Where in the world ? "}),Object(y.jsxs)(T.a,{onClick:function(){i(!r)},children:[Object(y.jsx)(ne.a,{}),"Dark Mode "]})]})}),Object(y.jsxs)(g.a,{basename:"/rest-countries",children:[Object(y.jsxs)(Y.c,{children:[Object(y.jsx)(Y.a,{path:"/",exact:!0,component:R}),Object(y.jsx)(Y.a,{path:"/:alpha3Code",exact:!0,component:q})]}),Object(y.jsx)(X,{})]})]})]})}i.a.render(Object(y.jsx)(ce,{}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.54b986fb.chunk.js.map