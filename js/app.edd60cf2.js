(function(e){function t(t){for(var r,a,c=t[0],l=t[1],i=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("cadd");r["default"].use(o["a"]);var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vill-button",{attrs:{title:"我是vill"}}),n("cube-button",[e._v("show dialog")]),n("van-button",{attrs:{type:"default"}},[e._v("默认按钮")]),n("cube-checkbox-group",{attrs:{min:1,max:3,options:e.options},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}}),n("p",[e._v(e._s(e.checkList))])],1)},a=[],c={name:"App",data:function(){return{checkList:["1"],options:["1","2",{label:"3",value:"3",disabled:!1},{label:"4",value:"4",disabled:!1}]}}},l=c,i=(n("034f"),n("2877")),f=Object(i["a"])(l,u,a,!1,null,null,null),s=f.exports,p=n("fbaf"),d=n.n(p),b=(n("568c"),n("5cfb"),n("b970"));n("157a");r["default"].use(b["a"]),r["default"].use(o["a"]),r["default"].use(d.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.edd60cf2.js.map