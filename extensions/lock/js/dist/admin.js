(()=>{var e={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return e.d(r,{a:r}),r},d:(o,r)=>{for(var a in r)e.o(r,a)&&!e.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:r[a]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};(()=>{"use strict";e.r(o);const r=flarum.reg.get("core","admin/app");var a=e.n(r);a().initializers.add("lock",(()=>{a().extensionData.for("flarum-lock").registerPermission({icon:"fas fa-lock",label:a().translator.trans("flarum-lock.admin.permissions.lock_discussions_label"),permission:"discussion.lock"},"moderate",95)}))})(),module.exports=o})();
//# sourceMappingURL=admin.js.map