!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VioletDesign={},e.React)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"==typeof SuppressedError&&SuppressedError;var i={exports:{}},a={},f=r(t).default,l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,o={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,n)&&!p.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:c.current}}a.Fragment=s,a.jsx=d,a.jsxs=d,i.exports=a;var y=i.exports,b={exports:{}};!function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,n(r)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var i in e)t.call(e,i)&&e[i]&&(n=o(n,i));return n}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}(b);var v=o(b.exports);e.Button=function(e){var t,r=e.btnType,o=e.className,i=e.disabled,a=e.size,f=e.children,l=e.href,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["btnType","className","disabled","size","children","href"]),u=v("violetButton",o,((t={})["violetButton--".concat(r)]=r,t["violetButton--".concat(a)]="mid"!==a,t["violetButton--disabled"]=i,t));return"link"===r&&l?y.jsx("a",n({className:u,href:i?"javascript:void(0)":l},s,{children:f})):y.jsx("button",n({className:u,disabled:i},s,{children:f}))},Object.defineProperty(e,"__esModule",{value:!0})}));