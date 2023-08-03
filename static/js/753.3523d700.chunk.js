/*! For license information please see 753.3523d700.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{174:function(t,e,r){r.d(e,{O:function(){return m}});var n,o,i,a,c,u=r(689),s=r(168),l=r(87),f=r(867),h=(0,f.ZP)(l.rU)(n||(n=(0,s.Z)(["\n  text-decoration: none;\n  text-align: center;\n"]))),p=f.ZP.ul(o||(o=(0,s.Z)(["\n  list-style-type: none;\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  grid-gap: 40px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),d=f.ZP.li(i||(i=(0,s.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  border: 1px solid black;\n  overflow: hidden;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),v=f.ZP.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),y=f.ZP.p(c||(c=(0,s.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  color: black;\n"]))),g=r(184),m=function(t){var e=t.movies,r=(0,u.TH)();return(0,g.jsx)(p,{children:e.map((function(t){return(0,g.jsx)(h,{to:"/movies/".concat(t.id),state:{from:r},children:(0,g.jsxs)(d,{children:[(0,g.jsx)(v,{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"https://mishanonoo.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_500x750_crop_center.gif",alt:t.title}),(0,g.jsx)(y,{children:t.title})]},t.id)})}))})}},753:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var n,o,i,a,c=r(433),u=r(861),s=r(439),l=r(87),f=r(791),h=r(352),p=r(168),d=r(867),v=d.ZP.div(n||(n=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 15px;\n"]))),y=d.ZP.form(o||(o=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  width: 400px;\n  background-color: #f2f2f2;\n  border-radius: 25px;\n  padding: 5px 10px;\n  margin: 20px 0 20px 0;\n"]))),g=d.ZP.input(i||(i=(0,p.Z)(["\n  flex: 1;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  font-size: 16px;\n"]))),m=d.ZP.button(a||(a=(0,p.Z)(["\n  border: none;\n  background-color: #fce38a;\n  /* color: white; */\n  padding: 8px 15px;\n  border-radius: 25px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n  color: darkgray;\n"]))),x=r(184),b=function(){var t,e=(0,l.lr)(),r=(0,s.Z)(e,2),n=r[0],o=r[1],i=null!==(t=n.get("searchQuery"))&&void 0!==t?t:"";return(0,x.jsx)(v,{children:(0,x.jsxs)(y,{autoComplete:"off",onSubmit:function(t){t.preventDefault(),o({searchQuery:t.target.elements.searchQuery.value}),t.currentTarget.reset()},children:[(0,x.jsx)(g,{type:"text",placeholder:"enter a query",name:"searchQuery",defaultValue:i}),(0,x.jsx)(m,{type:"submit",children:"Search"})]})})},w=r(174);function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new Z(o||[]);return n(a,"_invoke",{value:w(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,i)&&(v=g);var m=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var _=function(){var t=(0,f.useState)([]),e=(0,s.Z)(t,2),r=e[0],n=e[1],o=(0,l.lr)(),i=(0,s.Z)(o,1)[0].get("searchQuery");return(0,f.useEffect)((function(){if(i){var t=function(){var t=(0,u.Z)(L().mark((function t(){var e;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.vw)(i);case 3:e=t.sent,n((0,c.Z)(e.results)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error",t.t0.message);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})));return function(){return t.apply(this,arguments)}}();t()}}),[i]),(0,x.jsxs)("div",{children:[(0,x.jsx)(b,{}),(0,x.jsx)(w.O,{movies:r})]})}}}]);
//# sourceMappingURL=753.3523d700.chunk.js.map