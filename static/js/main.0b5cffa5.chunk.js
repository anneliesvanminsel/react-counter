(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),i=(n(18),n(6)),l=n(7),u=n(11),s=n(8),f=n(12),m=(n(19),n(1)),v=n(9);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createElement("circle",{cx:25,cy:25,r:25,fill:"#43b05c"}),O=a.a.createElement("path",{fill:"none",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M25 13v25M37.5 25h-25"}),g=function(e){var t=e.svgRef,n=b(e,["svgRef"]);return a.a.createElement("svg",p({viewBox:"0 0 50 50",ref:t},n),d,O)},E=a.a.forwardRef(function(e,t){return a.a.createElement(g,p({svgRef:t},e))});n.p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j=a.a.createElement("circle",{cx:25,cy:25,r:25,fill:"#ed8a19"}),w=a.a.createElement("path",{fill:"none",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M38 25H12"}),k=function(e){var t=e.svgRef,n=y(e,["svgRef"]);return a.a.createElement("svg",h({viewBox:"0 0 50 50",ref:t},n),j,w)},N=a.a.forwardRef(function(e,t){return a.a.createElement(k,h({svgRef:t},e))}),S=(n.p,[1,5,10]),R=function(){var e=Object(r.useState)(5),t=Object(m.a)(e,2),n=t[0],o=t[1],c=function(e,t){var n=Object(r.useState)(function(){var n=window.localStorage.getItem(e);return n&&n?JSON.parse(n):t}),a=Object(m.a)(n,2),o=a[0],c=a[1];return[o,function(t){if(t){var n=t instanceof Function?t(o):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}}]}("counter",f),i=Object(m.a)(c,2),l=i[0],u=i[1],s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(r.useState)(e),n=Object(m.a)(t,2),a=n[0],o=n[1];return{counter:a,decrement:function(e){o(a-e)},increment:function(e){o(a+e)}}}(l),f=s.counter,p=s.increment,b=s.decrement,d=S.map(function(e){var t=n===e?"true":"";return a.a.createElement("option",{key:e,value:e,selected:t}," ",e," ")});Object(r.useEffect)(function(){return u(f)},[f]);var O=Object(v.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return p(n),e+n;case"DECREMENT":return b(n),e-n;default:return e}});return O.subscribe(function(){return console.log(O.getState())}),a.a.createElement("div",{className:"block"},a.a.createElement("form",{className:"form"},a.a.createElement("select",{className:"select",onChange:function(e){var t=JSON.parse(e.target.value);o(t)}},d)),a.a.createElement("div",{className:"block__actions"},a.a.createElement("button",{className:"button button--decrement",onClick:function(){f-n<0||O.dispatch({type:"DECREMENT"})}},a.a.createElement(N,null)),a.a.createElement("div",{className:"block__text"}," ",f," "),a.a.createElement("button",{className:"button button--increment",onClick:function(){O.dispatch({type:"INCREMENT"})}},a.a.createElement(E,null))))},x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"page"},a.a.createElement(R,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.0b5cffa5.chunk.js.map