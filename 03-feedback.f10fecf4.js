var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function m(t,e,n){var o,r,i,u,f,a,c=0,m=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,f=setTimeout(h,e),m?g(t):u}function T(t){var n=t-a;return void 0===a||n>=e||n<0||p&&t-c>=i}function h(){var t=d();if(T(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-a);return p?s(n,i-(t-c)):n}(t))}function w(t){return f=void 0,y&&o?g(t):(o=r=void 0,u)}function O(){var t=d(),n=T(t);if(o=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(p)return f=setTimeout(h,e),g(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=b(e)||0,v(n)&&(m=!!n.leading,i=(p="maxWait"in n)?l(b(n.maxWait)||0,e):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=v(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||r.test(t)?i(t.slice(2),f?2:8):n.test(t)?NaN:+t}const p=document.querySelector(".feedback-form input"),y=document.querySelector(".feedback-form textarea"),g=document.querySelector(".feedback-form button");p.addEventListener("input",(function(t){const e=t.currentTarget.value.trim();localStorage.setItem("feedback-form-state",e)})),y.addEventListener("input",(function(t){const e=t.currentTarget.value.trim();localStorage.setItem("feedback-form-state",e),console.log(massage)})),g.addEventListener("submit",(function(t){}));
//# sourceMappingURL=03-feedback.f10fecf4.js.map