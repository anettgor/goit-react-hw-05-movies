(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[478,639],{7478:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r="Cast_gallery__LrDoG",i=n(7689),a=n(5230),o=n(3639),c=n(5861),s=n(9439),u=n(7757),l=n.n(u),f=n(2791),p=n(2585),d=n(2007),v=function(e){var t=(0,f.useState)([]),n=(0,s.Z)(t,2),r=n[0],i=n[1],a=(0,f.useState)(!0),o=(0,s.Z)(a,2),u=o[0],d=o[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,c.Z)(l().mark((function t(){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.Z)(e);case 2:n=t.sent,i(n.cast),setTimeout((function(){return d(!1)}),1500);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),{isLoading:u,cast:r}};v.propTypes={url:n.n(d)().string};var h=v,m=n(184);var y=function(){var e=(0,i.UO)().movieId,t="\nhttps://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("7bfaca5914dfe808eee9ce7ecac1ff40","&language=en-US"),n=h(t),c=n.isLoading,s=n.cast;return(0,m.jsxs)("ul",{className:r,children:[c&&(0,m.jsx)(o.default,{}),!c&&0===s.length&&"No cast found",!c&&s.length>0&&s.map((function(e){return(0,m.jsxs)("li",{children:[null===e.profile_path?(0,m.jsx)("img",{alt:"Profile of ".concat(e.name),src:a}):(0,m.jsx)("img",{alt:"Profile of ".concat(e.name),src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path)}),(0,m.jsx)("p",{children:e.name}),(0,m.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))]})}},3639:function(e,t,n){"use strict";n.r(t);var r=n(7169),i=n.n(r),a=n(184);t.default=function(){return(0,a.jsx)("div",{style:{textAlign:"Center",marginTop:"50px"},children:(0,a.jsx)(i(),{color:"#ffa842",cssOverride:{},size:15,speedMultiplier:1})})}},2585:function(e,t){"use strict";t.Z=function(e){return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},888:function(e,t,n){"use strict";var r=n(9047);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7169:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(2791)),u=n(8945),l=(0,n(7074).createAnimation)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");t.default=function(e){var t=e.loading,n=void 0===t||t,i=e.color,a=void 0===i?"#000000":i,o=e.speedMultiplier,f=void 0===o?1:o,p=e.cssOverride,d=void 0===p?{}:p,v=e.size,h=void 0===v?15:v,m=e.margin,y=void 0===m?2:m,g=c(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),_=r({display:"inherit"},d),b=function(e){return{display:"inline-block",backgroundColor:a,width:(0,u.cssValue)(h),height:(0,u.cssValue)(h),margin:(0,u.cssValue)(y),borderRadius:"100%",animation:"".concat(l," ").concat(.7/f,"s ").concat(e%2?"0s":"".concat(.35/f,"s")," infinite linear"),animationFillMode:"both"}};return n?s.createElement("span",r({style:_},g),s.createElement("span",{style:b(1)}),s.createElement("span",{style:b(2)}),s.createElement("span",{style:b(3)})):null}},7074:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return a&&a.insertRule(o,0),r}},8945:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(e.match(/[^0-9]*$/)||"").toString();return n[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}},5230:function(e,t,n){"use strict";e.exports=n.p+"static/media/placeholder.76c95492df2c832965ce.jpg"},5861:function(e,t,n){"use strict";function r(e,t,n,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function c(e){r(o,i,a,c,s,"next",e)}function s(e){r(o,i,a,c,s,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=478.99849615.chunk.js.map