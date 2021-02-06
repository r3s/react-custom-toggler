/*! For license information please see main.6a8e1836.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-custom-toggler-example"]=this["webpackJsonpreact-custom-toggler-example"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);n(4);var r=n(1),o=n.n(r),a=n(3),c=n.n(a);function s(e,t){return e(t={exports:{}},t.exports),t.exports}var l="function"===typeof Symbol&&Symbol.for,i=l?Symbol.for("react.element"):60103,u=l?Symbol.for("react.portal"):60106,f=l?Symbol.for("react.fragment"):60107,d=l?Symbol.for("react.strict_mode"):60108,p=l?Symbol.for("react.profiler"):60114,b=l?Symbol.for("react.provider"):60109,m=l?Symbol.for("react.context"):60110,y=l?Symbol.for("react.async_mode"):60111,g=l?Symbol.for("react.concurrent_mode"):60111,j=l?Symbol.for("react.forward_ref"):60112,h=l?Symbol.for("react.suspense"):60113,O=l?Symbol.for("react.suspense_list"):60120,C=l?Symbol.for("react.memo"):60115,v=l?Symbol.for("react.lazy"):60116,S=l?Symbol.for("react.block"):60121,x=l?Symbol.for("react.fundamental"):60117,w=l?Symbol.for("react.responder"):60118,$=l?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case y:case g:case f:case p:case d:case h:return e;default:switch(e=e&&e.$$typeof){case m:case j:case v:case C:case b:return e;default:return t}}case u:return t}}}function P(e){return _(e)===g}var T={AsyncMode:y,ConcurrentMode:g,ContextConsumer:m,ContextProvider:b,Element:i,ForwardRef:j,Fragment:f,Lazy:v,Memo:C,Portal:u,Profiler:p,StrictMode:d,Suspense:h,isAsyncMode:function(e){return P(e)||_(e)===y},isConcurrentMode:P,isContextConsumer:function(e){return _(e)===m},isContextProvider:function(e){return _(e)===b},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===i},isForwardRef:function(e){return _(e)===j},isFragment:function(e){return _(e)===f},isLazy:function(e){return _(e)===v},isMemo:function(e){return _(e)===C},isPortal:function(e){return _(e)===u},isProfiler:function(e){return _(e)===p},isStrictMode:function(e){return _(e)===d},isSuspense:function(e){return _(e)===h},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===f||e===g||e===p||e===d||e===h||e===O||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===C||e.$$typeof===b||e.$$typeof===m||e.$$typeof===j||e.$$typeof===x||e.$$typeof===w||e.$$typeof===$||e.$$typeof===S)},typeOf:_},E=(s((function(e,t){0})),s((function(e){e.exports=T})),Object.getOwnPropertySymbols),k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;function R(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var L="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function I(e,t,n,r,o){}I.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function M(){}function N(){}N.resetWarningCache=M;var B=s((function(e){e.exports=function(){function e(e,t,n,r,o,a){if(a!==L){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:N,resetWarningCache:M};return n.PropTypes=n,n}()})),q="_3sodH",W=function(e){var t=e.data,n=e.containerClass,a=e.itemClass,c=e.disabled,s=e.disabledClass,l=e.defaultSelected,i=e.onChange,u=e.onFocus,f=e.onBlur,d=e.ariaLabel,p=Object(r.useState)(null),b=p[0],m=p[1];Object(r.useEffect)((function(){l&&(m(l),i&&i(l))}),[]);return o.a.createElement("div",{"data-testid":"ct-container",className:n+" "+(c?s:""),tabIndex:0,"aria-label":d},t.map((function(e,t){return o.a.createElement("span",{key:t,className:a+" "+(b===e.value?q:""),onClick:function(){c||(m(e.value),i&&i(e.value))},onKeyDown:function(t){c||("Enter"!==t.key&&" "!==t.key||m(e.value),i&&i(e.value))},onFocus:u,onBlur:f,tabIndex:t+1,"aria-label":e.ariaLabel},e.label)})))};W.defaultProps={containerClass:"_2AXXG",itemClass:"_1hUor",disabledClass:"_2RWmX",defaultSelected:null},W.propTypes={data:B.arrayOf(B.shape({label:B.string.isRequired,value:B.string.isRequired,ariaLabel:B.string})).isRequired,containerClass:B.string,itemClass:B.string,disabled:B.bool,disabledClass:B.string,defaultSelected:B.string,onChange:B.func,onFocus:B.func,onBlur:B.func,ariaLabel:B.string};n(9);var D=n(0);const A=[{label:"Hello",value:"world"},{label:"What",value:"now"},{label:"Good",value:"morning"}];var z=()=>Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h2",{children:"Demo - Custom Toggler"}),Object(D.jsx)("h3",{children:"For default styles, include css"}),Object(D.jsx)("pre",{children:"import 'react-custom-toggler/dist/index.css'"}),Object(D.jsx)("h3",{children:"Default"}),Object(D.jsx)("pre",{children:"<CustomToggler\n        data={data}\n        onChange={(value) => console.log(value) }/>"}),Object(D.jsx)("h4",{children:"Result:"}),Object(D.jsx)(W,{data:A,onChange:e=>console.log(e)}),Object(D.jsx)("div",{className:"spacer"}),Object(D.jsx)("h3",{children:"Specify selected item:"}),Object(D.jsx)("pre",{children:"<CustomToggler\n        data={data}\n        defaultSelected={'world'}\n        onChange={(value) => console.log(value) }/>"}),Object(D.jsx)("h4",{children:"Result:"}),Object(D.jsx)(W,{data:A,defaultSelected:"world",onChange:e=>console.log(e)}),Object(D.jsx)("div",{className:"spacer"}),Object(D.jsx)("h3",{children:"Full options:"}),Object(D.jsx)("pre",{children:'<CustomToggler\n        data={data}\n        defaultSelected={\'world\'}\n        disabled={false}\n        disabledClass="custom-disabled"\n        containerClass="custom-container"\n        itemClass="custom-item"\n        onChange={(value) => console.log(value) }\n        onFocus={(e) => { console.log(\'Focus: \', e)}}\n        onBlur={(e) => { console.log(\'Blur: \', e)}}\n        ariaLabel="Custom toggler"\n        />'})]});c.a.render(Object(D.jsx)(z,{}),document.getElementById("root"))},4:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.6a8e1836.chunk.js.map