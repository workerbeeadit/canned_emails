(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),o=n(12),r=n.n(o),i=(n(22),n(13)),s=n(14),u=n(17),h=n(16),l=(n(23),n(15)),d=n.n(l),p=n(1),j=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={response:{}},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;d.a.get("/api/v1/say-something").then((function(e){var n=e.data;t.setState({response:n})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Frontend ok!"}),Object(p.jsx)("h1",{children:this.state.response.body})]})}}]),n}(c.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.f7f80fba.chunk.js.map