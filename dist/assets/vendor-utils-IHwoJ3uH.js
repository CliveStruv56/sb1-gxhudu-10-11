import{r as J,g as ce,R as le}from"./vendor-react-DBFghe8J.js";const fe={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyCqm49bAzlJwx2SaTXJQZwrBMMM8BtP_1U",VITE_FIREBASE_APP_ID:"1:921119001263:web:59aa28f9f2ce17ebb6225a",VITE_FIREBASE_AUTH_DOMAIN:"bolt-coffee-shop.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"921119001263",VITE_FIREBASE_PROJECT_ID:"bolt-coffee-shop",VITE_FIREBASE_STORAGE_BUCKET:"bolt-coffee-shop.firebasestorage.app",VITE_STRIPE_PUBLISHABLE_KEY:"pk_test_your_publishable_key"},$=r=>{let e;const t=new Set,n=(f,c)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const m=e;e=c??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(v=>v(e,m))}},a=()=>e,l={setState:n,getState:a,getInitialState:()=>d,subscribe:f=>(t.add(f),()=>t.delete(f)),destroy:()=>{(fe?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},d=e=r(n,a,l);return l},me=r=>r?$(r):$;var z={exports:{}},K={},Z={exports:{}},ee={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=J;function he(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var ve=typeof Object.is=="function"?Object.is:he,ge=C.useState,we=C.useEffect,be=C.useLayoutEffect,ye=C.useDebugValue;function pe(r,e){var t=e(),n=ge({inst:{value:t,getSnapshot:e}}),a=n[0].inst,i=n[1];return be(function(){a.value=t,a.getSnapshot=e,q(a)&&i({inst:a})},[r,t,e]),we(function(){return q(a)&&i({inst:a}),r(function(){q(a)&&i({inst:a})})},[r]),ye(t),t}function q(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!ve(r,t)}catch{return!0}}function Te(r,e){return e()}var Se=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Te:pe;ee.useSyncExternalStore=C.useSyncExternalStore!==void 0?C.useSyncExternalStore:Se;Z.exports=ee;var Ee=Z.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=J,_e=Ee;function De(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var Ce=typeof Object.is=="function"?Object.is:De,Oe=_e.useSyncExternalStore,Me=N.useRef,Pe=N.useEffect,xe=N.useMemo,ke=N.useDebugValue;K.useSyncExternalStoreWithSelector=function(r,e,t,n,a){var i=Me(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=xe(function(){function l(m){if(!d){if(d=!0,f=m,m=n(m),a!==void 0&&o.hasValue){var v=o.value;if(a(v,m))return c=v}return c=m}if(v=c,Ce(f,m))return v;var p=n(m);return a!==void 0&&a(v,p)?v:(f=m,c=p)}var d=!1,f,c,h=t===void 0?null:t;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,t,n,a]);var u=Oe(r,i[0],i[1]);return Pe(function(){o.hasValue=!0,o.value=u},[u]),ke(u),u};z.exports=K;var We=z.exports;const Ue=ce(We),te={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyCqm49bAzlJwx2SaTXJQZwrBMMM8BtP_1U",VITE_FIREBASE_APP_ID:"1:921119001263:web:59aa28f9f2ce17ebb6225a",VITE_FIREBASE_AUTH_DOMAIN:"bolt-coffee-shop.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"921119001263",VITE_FIREBASE_PROJECT_ID:"bolt-coffee-shop",VITE_FIREBASE_STORAGE_BUCKET:"bolt-coffee-shop.firebasestorage.app",VITE_STRIPE_PUBLISHABLE_KEY:"pk_test_your_publishable_key"},{useDebugValue:Ie}=le,{useSyncExternalStoreWithSelector:Ye}=Ue;let V=!1;const Ne=r=>r;function Re(r,e=Ne,t){(te?"production":void 0)!=="production"&&t&&!V&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),V=!0);const n=Ye(r.subscribe,r.getState,r.getServerState||r.getInitialState,e,t);return Ie(n),n}const H=r=>{(te?"production":void 0)!=="production"&&typeof r!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof r=="function"?me(r):r,t=(n,a)=>Re(e,n,a);return Object.assign(t,e),t},Ht=r=>r?H(r):H;function U(r){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(r)}function y(r){if(r===null||r===!0||r===!1)return NaN;var e=Number(r);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(r,e){if(e.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+e.length+" present")}function w(r){g(1,arguments);var e=Object.prototype.toString.call(r);return r instanceof Date||U(r)==="object"&&e==="[object Date]"?new Date(r.getTime()):typeof r=="number"||e==="[object Number]"?new Date(r):((typeof r=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function jt(r,e){g(2,arguments);var t=w(r),n=y(e);return isNaN(n)?new Date(NaN):(n&&t.setDate(t.getDate()+n),t)}function re(r,e){g(2,arguments);var t=w(r).getTime(),n=y(e);return new Date(t+n)}var Ae={};function R(){return Ae}function Fe(r){var e=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return e.setUTCFullYear(r.getFullYear()),r.getTime()-e.getTime()}var Be=6e4;function Gt(r,e){g(2,arguments);var t=y(e);return re(r,t*Be)}function qe(r){return g(1,arguments),r instanceof Date||U(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Le(r){if(g(1,arguments),!qe(r)&&typeof r!="number")return!1;var e=w(r);return!isNaN(Number(e))}function $e(r,e){g(2,arguments);var t=y(e);return re(r,-t)}var Ve=864e5;function He(r){g(1,arguments);var e=w(r),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var n=e.getTime(),a=t-n;return Math.floor(a/Ve)+1}function I(r){g(1,arguments);var e=1,t=w(r),n=t.getUTCDay(),a=(n<e?7:0)+n-e;return t.setUTCDate(t.getUTCDate()-a),t.setUTCHours(0,0,0,0),t}function ne(r){g(1,arguments);var e=w(r),t=e.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(t+1,0,4),n.setUTCHours(0,0,0,0);var a=I(n),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var o=I(i);return e.getTime()>=a.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function je(r){g(1,arguments);var e=ne(r),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var n=I(t);return n}var Ge=6048e5;function Qe(r){g(1,arguments);var e=w(r),t=I(e).getTime()-je(e).getTime();return Math.round(t/Ge)+1}function Y(r,e){var t,n,a,i,o,u,l,d;g(1,arguments);var f=R(),c=y((t=(n=(a=(i=e==null?void 0:e.weekStartsOn)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&a!==void 0?a:f.weekStartsOn)!==null&&n!==void 0?n:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&t!==void 0?t:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=w(r),m=h.getUTCDay(),v=(m<c?7:0)+m-c;return h.setUTCDate(h.getUTCDate()-v),h.setUTCHours(0,0,0,0),h}function ae(r,e){var t,n,a,i,o,u,l,d;g(1,arguments);var f=w(r),c=f.getUTCFullYear(),h=R(),m=y((t=(n=(a=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:h.firstWeekContainsDate)!==null&&n!==void 0?n:(l=h.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(c+1,0,m),v.setUTCHours(0,0,0,0);var p=Y(v,e),E=new Date(0);E.setUTCFullYear(c,0,m),E.setUTCHours(0,0,0,0);var A=Y(E,e);return f.getTime()>=p.getTime()?c+1:f.getTime()>=A.getTime()?c:c-1}function Xe(r,e){var t,n,a,i,o,u,l,d;g(1,arguments);var f=R(),c=y((t=(n=(a=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:f.firstWeekContainsDate)!==null&&n!==void 0?n:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&t!==void 0?t:1),h=ae(r,e),m=new Date(0);m.setUTCFullYear(h,0,c),m.setUTCHours(0,0,0,0);var v=Y(m,e);return v}var Je=6048e5;function ze(r,e){g(1,arguments);var t=w(r),n=Y(t,e).getTime()-Xe(t,e).getTime();return Math.round(n/Je)+1}function s(r,e){for(var t=r<0?"-":"",n=Math.abs(r).toString();n.length<e;)n="0"+n;return t+n}var S={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return s(t==="yy"?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return t==="M"?String(n+1):s(n+1,2)},d:function(e,t){return s(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(e,t){return s(e.getUTCHours()%12||12,t.length)},H:function(e,t){return s(e.getUTCHours(),t.length)},m:function(e,t){return s(e.getUTCMinutes(),t.length)},s:function(e,t){return s(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,n-3));return s(i,t.length)}},D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ke={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){var a=e.getUTCFullYear(),i=a>0?a:1-a;return n.ordinalNumber(i,{unit:"year"})}return S.y(e,t)},Y:function(e,t,n,a){var i=ae(e,a),o=i>0?i:1-i;if(t==="YY"){var u=o%100;return s(u,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):s(o,t.length)},R:function(e,t){var n=ne(e);return s(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return s(n,t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return s(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return s(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return S.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return s(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var i=ze(e,a);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):s(i,t.length)},I:function(e,t,n){var a=Qe(e);return t==="Io"?n.ordinalNumber(a,{unit:"week"}):s(a,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):S.d(e,t)},D:function(e,t,n){var a=He(e);return t==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):s(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var i=e.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return s(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var i=e.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return s(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),i=a===0?7:a;switch(t){case"i":return String(i);case"ii":return s(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours(),i=a/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a=e.getUTCHours(),i;switch(a===12?i=D.noon:a===0?i=D.midnight:i=a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a=e.getUTCHours(),i;switch(a>=17?i=D.evening:a>=12?i=D.afternoon:a>=4?i=D.morning:i=D.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){var a=e.getUTCHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return S.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):S.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return a===0&&(a=24),t==="ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):S.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):S.s(e,t)},S:function(e,t){return S.S(e,t)},X:function(e,t,n,a){var i=a._originalDate||e,o=i.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return G(o);case"XXXX":case"XX":return _(o);case"XXXXX":case"XXX":default:return _(o,":")}},x:function(e,t,n,a){var i=a._originalDate||e,o=i.getTimezoneOffset();switch(t){case"x":return G(o);case"xxxx":case"xx":return _(o);case"xxxxx":case"xxx":default:return _(o,":")}},O:function(e,t,n,a){var i=a._originalDate||e,o=i.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+j(o,":");case"OOOO":default:return"GMT"+_(o,":")}},z:function(e,t,n,a){var i=a._originalDate||e,o=i.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+j(o,":");case"zzzz":default:return"GMT"+_(o,":")}},t:function(e,t,n,a){var i=a._originalDate||e,o=Math.floor(i.getTime()/1e3);return s(o,t.length)},T:function(e,t,n,a){var i=a._originalDate||e,o=i.getTime();return s(o,t.length)}};function j(r,e){var t=r>0?"-":"+",n=Math.abs(r),a=Math.floor(n/60),i=n%60;if(i===0)return t+String(a);var o=e;return t+String(a)+o+s(i,2)}function G(r,e){if(r%60===0){var t=r>0?"-":"+";return t+s(Math.abs(r)/60,2)}return _(r,e)}function _(r,e){var t=e||"",n=r>0?"-":"+",a=Math.abs(r),i=s(Math.floor(a/60),2),o=s(a%60,2);return n+i+t+o}var Q=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},ie=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ze=function(e,t){var n=e.match(/(P+)(p+)?/)||[],a=n[1],i=n[2];if(!i)return Q(e,t);var o;switch(a){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",Q(a,t)).replace("{{time}}",ie(i,t))},et={p:ie,P:Ze},tt=["D","DD"],rt=["YY","YYYY"];function nt(r){return tt.indexOf(r)!==-1}function at(r){return rt.indexOf(r)!==-1}function X(r,e,t){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var it={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ot=function(e,t,n){var a,i=it[e];return typeof i=="string"?a=i:t===1?a=i.one:a=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function L(r){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):r.defaultWidth,n=r.formats[t]||r.formats[r.defaultWidth];return n}}var ut={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},st={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ct={date:L({formats:ut,defaultWidth:"full"}),time:L({formats:st,defaultWidth:"full"}),dateTime:L({formats:dt,defaultWidth:"full"})},lt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ft=function(e,t,n,a){return lt[e]};function P(r){return function(e,t){var n=t!=null&&t.context?String(t.context):"standalone",a;if(n==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):i;a=r.formattingValues[o]||r.formattingValues[i]}else{var u=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;a=r.values[l]||r.values[u]}var d=r.argumentCallback?r.argumentCallback(e):e;return a[d]}}var mt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ht={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},vt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},bt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},yt=function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},pt={ordinalNumber:yt,era:P({values:mt,defaultWidth:"wide"}),quarter:P({values:ht,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:P({values:vt,defaultWidth:"wide"}),day:P({values:gt,defaultWidth:"wide"}),dayPeriod:P({values:wt,defaultWidth:"wide",formattingValues:bt,defaultFormattingWidth:"wide"})};function x(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,a=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],i=e.match(a);if(!i)return null;var o=i[0],u=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(u)?St(u,function(c){return c.test(o)}):Tt(u,function(c){return c.test(o)}),d;d=r.valueCallback?r.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;var f=e.slice(o.length);return{value:d,rest:f}}}function Tt(r,e){for(var t in r)if(r.hasOwnProperty(t)&&e(r[t]))return t}function St(r,e){for(var t=0;t<r.length;t++)if(e(r[t]))return t}function Et(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.match(r.matchPattern);if(!n)return null;var a=n[0],i=e.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;var u=e.slice(a.length);return{value:o,rest:u}}}var _t=/^(\d+)(th|st|nd|rd)?/i,Dt=/\d+/i,Ct={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ot={any:[/^b/i,/^(a|c)/i]},Mt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pt={any:[/1/i,/2/i,/3/i,/4/i]},xt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},kt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ut={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},It={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Yt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Nt={ordinalNumber:Et({matchPattern:_t,parsePattern:Dt,valueCallback:function(e){return parseInt(e,10)}}),era:x({matchPatterns:Ct,defaultMatchWidth:"wide",parsePatterns:Ot,defaultParseWidth:"any"}),quarter:x({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:x({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:kt,defaultParseWidth:"any"}),day:x({matchPatterns:Wt,defaultMatchWidth:"wide",parsePatterns:Ut,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:It,defaultMatchWidth:"any",parsePatterns:Yt,defaultParseWidth:"any"})},Rt={code:"en-US",formatDistance:ot,formatLong:ct,formatRelative:ft,localize:pt,match:Nt,options:{weekStartsOn:0,firstWeekContainsDate:1}},At=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ft=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bt=/^'([^]*?)'?$/,qt=/''/g,Lt=/[a-zA-Z]/;function Qt(r,e,t){var n,a,i,o,u,l,d,f,c,h,m,v,p,E;g(2,arguments);var A=String(e),O=R(),M=(n=(a=void 0)!==null&&a!==void 0?a:O.locale)!==null&&n!==void 0?n:Rt,F=y((i=(o=(u=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&u!==void 0?u:O.firstWeekContainsDate)!==null&&o!==void 0?o:(d=O.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(F>=1&&F<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var B=y((c=(h=(m=(v=void 0)!==null&&v!==void 0?v:void 0)!==null&&m!==void 0?m:O.weekStartsOn)!==null&&h!==void 0?h:(p=O.locale)===null||p===void 0||(E=p.options)===null||E===void 0?void 0:E.weekStartsOn)!==null&&c!==void 0?c:0);if(!(B>=0&&B<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!M.localize)throw new RangeError("locale must contain localize property");if(!M.formatLong)throw new RangeError("locale must contain formatLong property");var k=w(r);if(!Le(k))throw new RangeError("Invalid time value");var oe=Fe(k),ue=$e(k,oe),se={firstWeekContainsDate:F,weekStartsOn:B,locale:M,_originalDate:k},de=A.match(Ft).map(function(b){var T=b[0];if(T==="p"||T==="P"){var W=et[T];return W(b,M.formatLong)}return b}).join("").match(At).map(function(b){if(b==="''")return"'";var T=b[0];if(T==="'")return $t(b);var W=Ke[T];if(W)return at(b)&&X(b,e,String(r)),nt(b)&&X(b,e,String(r)),W(ue,b,M.localize,se);if(T.match(Lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return b}).join("");return de}function $t(r){var e=r.match(Bt);return e?e[1].replace(qt,"'"):r}function Xt(r,e){g(2,arguments);var t=w(r),n=w(e);return t.getTime()>n.getTime()}function Jt(r,e){g(2,arguments);var t=w(r),n=y(e);return t.setHours(n),t}function zt(r,e){g(2,arguments);var t=w(r),n=y(e);return t.setMinutes(n),t}export{zt as a,Gt as b,Ht as c,jt as d,Qt as f,Xt as i,Jt as s};
//# sourceMappingURL=vendor-utils-IHwoJ3uH.js.map
