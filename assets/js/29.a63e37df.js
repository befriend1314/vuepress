(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{241:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"f",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return a})),e.d(n,"b",(function(){return f})),e.d(n,"g",(function(){return h}));e(90);const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,u=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(i,"").replace(r,"")}function o(t){return u.test(t)}function c(t){return/^mailto:/.test(t)}function a(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;const n=t.match(i),e=n?n[0]:"",r=l(t);return s.test(r)?t:r+".html"+e}function h(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},244:function(t,n,e){"use strict";e.r(n);var i=e(241),r={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(i.d)(this.link)||Object(i.e)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.c)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.c)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},s=e(10),u=Object(s.a)(r,(function(){var t=this,n=t._self._c;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.default=u.exports}}]);