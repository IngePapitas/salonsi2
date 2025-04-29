import{s as K,c as U,n as it,X,_ as N,$ as F,a0 as ot,p as st}from"./index-DtiDn9lJ.js";import{e as k,o as b,a as A,m as g,U as rt,B as G,p as D,r as B,f as E,F as q,h as J,b as at,c as Q,n as lt}from"./app-13YhllzU.js";import{a as ct}from"./index-D0b6ATor.js";import{s as ht}from"./index-DzqK50WV.js";import{a as ut}from"./index-DHd4Qs9j.js";var dt={name:"ChevronDownIcon",extends:K};function ft(n,t,e,o,s,i){return b(),k("svg",g({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),t[0]||(t[0]=[A("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}dt.render=ft;var te=rt(),pt=function(t){var e=t.dt;return`
.p-virtualscroller-loader {
    background: `.concat(e("virtualscroller.loader.mask.background"),`;
    color: `).concat(e("virtualscroller.loader.mask.color"),`;
}

.p-virtualscroller-loading-icon {
    font-size: `).concat(e("virtualscroller.loader.icon.size"),`;
    width: `).concat(e("virtualscroller.loader.icon.size"),`;
    height: `).concat(e("virtualscroller.loader.icon.size"),`;
}
`)},mt=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Y=G.extend({name:"virtualscroller",css:mt,theme:pt}),gt={name:"BaseVirtualScroller",extends:U,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:Y,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var t;Y.loadCSS({nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce})}};function M(n){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(n)}function tt(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,o)}return e}function j(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(e),!0).forEach(function(o){et(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):tt(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}function et(n,t,e){return(t=vt(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function vt(n){var t=bt(n,"string");return M(t)=="symbol"?t:t+""}function bt(n,t){if(M(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t);if(M(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var yt={name:"VirtualScroller",extends:gt,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var t=this.isBoth();return{first:t?{rows:0,cols:0}:0,last:t?{rows:0,cols:0}:0,page:t?{rows:0,cols:0}:0,numItemsInViewport:t?{rows:0,cols:0}:0,lastScrollPos:t?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(t){this.d_numToleratedItems=t},loading:function(t,e){this.lazy&&t!==e&&t!==this.d_loading&&(this.d_loading=t)},items:function(t,e){(!e||e.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){X(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.bindResizeListener(),this.defaultWidth=N(this.element),this.defaultHeight=F(this.element),this.defaultContentWidth=N(this.content),this.defaultContentHeight=F(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(t){this.element&&this.element.scrollTo(t)},scrollToIndex:function(t){var e=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",s=this.isBoth(),i=this.isHorizontal(),a=s?t.every(function(P){return P>-1}):t>-1;if(a){var l=this.first,c=this.element,h=c.scrollTop,r=h===void 0?0:h,u=c.scrollLeft,d=u===void 0?0:u,y=this.calculateNumItems(),m=y.numToleratedItems,v=this.getContentPosition(),x=this.itemSize,S=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,$=arguments.length>1?arguments[1]:void 0;return w<=$?0:w},z=function(w,$,H){return w*$+H},L=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,$=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.scrollTo({left:w,top:$,behavior:o})},f=s?{rows:0,cols:0}:0,V=!1,O=!1;s?(f={rows:S(t[0],m[0]),cols:S(t[1],m[1])},L(z(f.cols,x[1],v.left),z(f.rows,x[0],v.top)),O=this.lastScrollPos.top!==r||this.lastScrollPos.left!==d,V=f.rows!==l.rows||f.cols!==l.cols):(f=S(t,m),i?L(z(f,x,v.left),r):L(d,z(f,x,v.top)),O=this.lastScrollPos!==(i?d:r),V=f!==l),this.isRangeChanged=V,O&&(this.first=f)}},scrollInView:function(t,e){var o=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(e){var i=this.isBoth(),a=this.isHorizontal(),l=i?t.every(function(x){return x>-1}):t>-1;if(l){var c=this.getRenderedRange(),h=c.first,r=c.viewport,u=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return o.scrollTo({left:S,top:z,behavior:s})},d=e==="to-start",y=e==="to-end";if(d){if(i)r.first.rows-h.rows>t[0]?u(r.first.cols*this.itemSize[1],(r.first.rows-1)*this.itemSize[0]):r.first.cols-h.cols>t[1]&&u((r.first.cols-1)*this.itemSize[1],r.first.rows*this.itemSize[0]);else if(r.first-h>t){var m=(r.first-1)*this.itemSize;a?u(m,0):u(0,m)}}else if(y){if(i)r.last.rows-h.rows<=t[0]+1?u(r.first.cols*this.itemSize[1],(r.first.rows+1)*this.itemSize[0]):r.last.cols-h.cols<=t[1]+1&&u((r.first.cols+1)*this.itemSize[1],r.first.rows*this.itemSize[0]);else if(r.last-h<=t+1){var v=(r.first+1)*this.itemSize;a?u(v,0):u(0,v)}}}}else this.scrollToIndex(t,s)},getRenderedRange:function(){var t=function(u,d){return Math.floor(u/(d||u))},e=this.first,o=0;if(this.element){var s=this.isBoth(),i=this.isHorizontal(),a=this.element,l=a.scrollTop,c=a.scrollLeft;if(s)e={rows:t(l,this.itemSize[0]),cols:t(c,this.itemSize[1])},o={rows:e.rows+this.numItemsInViewport.rows,cols:e.cols+this.numItemsInViewport.cols};else{var h=i?c:l;e=t(h,this.itemSize),o=e+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:e,last:o}}},calculateNumItems:function(){var t=this.isBoth(),e=this.isHorizontal(),o=this.itemSize,s=this.getContentPosition(),i=this.element?this.element.offsetWidth-s.left:0,a=this.element?this.element.offsetHeight-s.top:0,l=function(d,y){return Math.ceil(d/(y||d))},c=function(d){return Math.ceil(d/2)},h=t?{rows:l(a,o[0]),cols:l(i,o[1])}:l(e?i:a,o),r=this.d_numToleratedItems||(t?[c(h.rows),c(h.cols)]:c(h));return{numItemsInViewport:h,numToleratedItems:r}},calculateOptions:function(){var t=this,e=this.isBoth(),o=this.first,s=this.calculateNumItems(),i=s.numItemsInViewport,a=s.numToleratedItems,l=function(r,u,d){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.getLast(r+u+(r<d?2:3)*d,y)},c=e?{rows:l(o.rows,i.rows,a[0]),cols:l(o.cols,i.cols,a[1],!0)}:l(o,i,a);this.last=c,this.numItemsInViewport=i,this.d_numToleratedItems=a,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=e?Array.from({length:i.rows}).map(function(){return Array.from({length:i.cols})}):Array.from({length:i})),this.lazy&&Promise.resolve().then(function(){var h;t.lazyLoadState={first:t.step?e?{rows:0,cols:o.cols}:0:o,last:Math.min(t.step?t.step:c,((h=t.items)===null||h===void 0?void 0:h.length)||0)},t.$emit("lazy-load",t.lazyLoadState)})},calculateAutoSize:function(){var t=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(t.content){var e=t.isBoth(),o=t.isHorizontal(),s=t.isVertical();t.content.style.minHeight=t.content.style.minWidth="auto",t.content.style.position="relative",t.element.style.contain="none";var i=[N(t.element),F(t.element)],a=i[0],l=i[1];(e||o)&&(t.element.style.width=a<t.defaultWidth?a+"px":t.scrollWidth||t.defaultWidth+"px"),(e||s)&&(t.element.style.height=l<t.defaultHeight?l+"px":t.scrollHeight||t.defaultHeight+"px"),t.content.style.minHeight=t.content.style.minWidth="",t.content.style.position="",t.element.style.contain=""}})},getLast:function(){var t,e,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(s?((t=this.columns||this.items[0])===null||t===void 0?void 0:t.length)||0:((e=this.items)===null||e===void 0?void 0:e.length)||0,o):0},getContentPosition:function(){if(this.content){var t=getComputedStyle(this.content),e=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),o=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),s=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),i=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:e,right:o,top:s,bottom:i,x:e+o,y:s+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var t=this;if(this.element){var e=this.isBoth(),o=this.isHorizontal(),s=this.element.parentElement,i=this.scrollWidth||"".concat(this.element.offsetWidth||s.offsetWidth,"px"),a=this.scrollHeight||"".concat(this.element.offsetHeight||s.offsetHeight,"px"),l=function(h,r){return t.element.style[h]=r};e||o?(l("height",a),l("width",i)):l("height",a)}},setSpacerSize:function(){var t=this,e=this.items;if(e){var o=this.isBoth(),s=this.isHorizontal(),i=this.getContentPosition(),a=function(c,h,r){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return t.spacerStyle=j(j({},t.spacerStyle),et({},"".concat(c),(h||[]).length*r+u+"px"))};o?(a("height",e,this.itemSize[0],i.y),a("width",this.columns||e[1],this.itemSize[1],i.x)):s?a("width",this.columns||e,this.itemSize,i.x):a("height",e,this.itemSize,i.y)}},setContentPosition:function(t){var e=this;if(this.content&&!this.appendOnly){var o=this.isBoth(),s=this.isHorizontal(),i=t?t.first:this.first,a=function(r,u){return r*u},l=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.contentStyle=j(j({},e.contentStyle),{transform:"translate3d(".concat(r,"px, ").concat(u,"px, 0)")})};if(o)l(a(i.cols,this.itemSize[1]),a(i.rows,this.itemSize[0]));else{var c=a(i,this.itemSize);s?l(c,0):l(0,c)}}},onScrollPositionChange:function(t){var e=this,o=t.target,s=this.isBoth(),i=this.isHorizontal(),a=this.getContentPosition(),l=function(p,C){return p?p>C?p-C:p:0},c=function(p,C){return Math.floor(p/(C||p))},h=function(p,C,R,W,I,T){return p<=I?I:T?R-W-I:C+I-1},r=function(p,C,R,W,I,T,_){return p<=T?0:Math.max(0,_?p<C?R:p-T:p>C?R:p-2*T)},u=function(p,C,R,W,I,T){var _=C+W+2*I;return p>=I&&(_+=I+1),e.getLast(_,T)},d=l(o.scrollTop,a.top),y=l(o.scrollLeft,a.left),m=s?{rows:0,cols:0}:0,v=this.last,x=!1,S=this.lastScrollPos;if(s){var z=this.lastScrollPos.top<=d,L=this.lastScrollPos.left<=y;if(!this.appendOnly||this.appendOnly&&(z||L)){var f={rows:c(d,this.itemSize[0]),cols:c(y,this.itemSize[1])},V={rows:h(f.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],z),cols:h(f.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],L)};m={rows:r(f.rows,V.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],z),cols:r(f.cols,V.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],L)},v={rows:u(f.rows,m.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u(f.cols,m.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},x=m.rows!==this.first.rows||v.rows!==this.last.rows||m.cols!==this.first.cols||v.cols!==this.last.cols||this.isRangeChanged,S={top:d,left:y}}}else{var O=i?y:d,P=this.lastScrollPos<=O;if(!this.appendOnly||this.appendOnly&&P){var w=c(O,this.itemSize),$=h(w,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,P);m=r(w,$,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,P),v=u(w,m,this.last,this.numItemsInViewport,this.d_numToleratedItems),x=m!==this.first||v!==this.last||this.isRangeChanged,S=O}}return{first:m,last:v,isRangeChanged:x,scrollPos:S}},onScrollChange:function(t){var e=this.onScrollPositionChange(t),o=e.first,s=e.last,i=e.isRangeChanged,a=e.scrollPos;if(i){var l={first:o,last:s};if(this.setContentPosition(l),this.first=o,this.last=s,this.lastScrollPos=a,this.$emit("scroll-index-change",l),this.lazy&&this.isPageChanged(o)){var c,h,r={first:this.step?Math.min(this.getPageByFirst(o)*this.step,(((c=this.items)===null||c===void 0?void 0:c.length)||0)-this.step):o,last:Math.min(this.step?(this.getPageByFirst(o)+1)*this.step:s,((h=this.items)===null||h===void 0?void 0:h.length)||0)},u=this.lazyLoadState.first!==r.first||this.lazyLoadState.last!==r.last;u&&this.$emit("lazy-load",r),this.lazyLoadState=r}}},onScroll:function(t){var e=this;if(this.$emit("scroll",t),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var o=this.onScrollPositionChange(t),s=o.isRangeChanged,i=s||(this.step?this.isPageChanged():!1);i&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){e.onScrollChange(t),e.d_loading&&e.showLoader&&(!e.lazy||e.loading===void 0)&&(e.d_loading=!1,e.page=e.getPageByFirst())},this.delay)}}else this.onScrollChange(t)},onResize:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(X(t.element)){var e=t.isBoth(),o=t.isVertical(),s=t.isHorizontal(),i=[N(t.element),F(t.element)],a=i[0],l=i[1],c=a!==t.defaultWidth,h=l!==t.defaultHeight,r=e?c||h:s?c:o?h:!1;r&&(t.d_numToleratedItems=t.numToleratedItems,t.defaultWidth=a,t.defaultHeight=l,t.defaultContentWidth=N(t.content),t.defaultContentHeight=F(t.content),t.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(t){var e=(this.items||[]).length,o=this.isBoth()?this.first.rows+t:this.first+t;return{index:o,count:e,first:o===0,last:o===e-1,even:o%2===0,odd:o%2!==0}},getLoaderOptions:function(t,e){var o=this.loaderArr.length;return j({index:t,count:o,first:t===0,last:t===o-1,even:t%2===0,odd:t%2!==0},e)},getPageByFirst:function(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(t){return this.step&&!this.lazy?this.page!==this.getPageByFirst(t??this.first):!0},setContentEl:function(t){this.content=t||this.content||it(this.element,'[data-pc-section="content"]')},elementRef:function(t){this.element=t},contentRef:function(t){this.content=t}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var t=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(e){return t.columns?e:e.slice(t.appendOnly?0:t.first.cols,t.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var t=this.isBoth(),e=this.isHorizontal();if(t||e)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:ct}},kt=["tabindex"];function xt(n,t,e,o,s,i){var a=D("SpinnerIcon");return n.disabled?(b(),k(q,{key:1},[B(n.$slots,"default"),B(n.$slots,"content",{items:n.items,rows:n.items,columns:i.loadedColumns})],64)):(b(),k("div",g({key:0,ref:i.elementRef,class:i.containerClass,tabindex:n.tabindex,style:n.style,onScroll:t[0]||(t[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},n.ptmi("root")),[B(n.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:s.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:n.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:s.spacerStyle,contentStyle:s.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},function(){return[A("div",g({ref:i.contentRef,class:i.contentClass,style:s.contentStyle},n.ptm("content")),[(b(!0),k(q,null,J(i.loadedItems,function(l,c){return B(n.$slots,"item",{key:c,item:l,options:i.getOptions(c)})}),128))],16)]}),n.showSpacer?(b(),k("div",g({key:0,class:"p-virtualscroller-spacer",style:s.spacerStyle},n.ptm("spacer")),null,16)):E("",!0),!n.loaderDisabled&&n.showLoader&&s.d_loading?(b(),k("div",g({key:1,class:i.loaderClass},n.ptm("loader")),[n.$slots&&n.$slots.loader?(b(!0),k(q,{key:0},J(s.loaderArr,function(l,c){return B(n.$slots,"loader",{key:c,options:i.getLoaderOptions(c,i.isBoth()&&{numCols:n.d_numItemsInViewport.cols})})}),128)):E("",!0),B(n.$slots,"loadingicon",{},function(){return[at(a,g({spin:"",class:"p-virtualscroller-loading-icon"},n.ptm("loadingIcon")),null,16)]})],16)):E("",!0)],16,kt))}yt.render=xt;var nt={name:"MinusIcon",extends:K};function Ct(n,t,e,o,s,i){return b(),k("svg",g({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),t[0]||(t[0]=[A("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}nt.render=Ct;var zt=function(t){var e=t.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(e("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(e("checkbox.border.radius"),`;
    border: 1px solid `).concat(e("checkbox.border.color"),`;
    background: `).concat(e("checkbox.background"),`;
    width: `).concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
    transition: background `).concat(e("checkbox.transition.duration"),", color ").concat(e("checkbox.transition.duration"),", border-color ").concat(e("checkbox.transition.duration"),", box-shadow ").concat(e("checkbox.transition.duration"),", outline-color ").concat(e("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(e("checkbox.transition.duration"),`;
    color: `).concat(e("checkbox.icon.color"),`;
    font-size: `).concat(e("checkbox.icon.size"),`;
    width: `).concat(e("checkbox.icon.size"),`;
    height: `).concat(e("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(e("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.border.color"),`;
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
    border-color: `).concat(e("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.focus.border.color"),`;
    box-shadow: `).concat(e("checkbox.focus.ring.shadow"),`;
    outline: `).concat(e("checkbox.focus.ring.width")," ").concat(e("checkbox.focus.ring.style")," ").concat(e("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(e("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(e("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(e("checkbox.disabled.background"),`;
    border-color: `).concat(e("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.disabled.color"),`;
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: `).concat(e("checkbox.sm.width"),`;
    height: `).concat(e("checkbox.sm.height"),`;
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.sm.size"),`;
    width: `).concat(e("checkbox.icon.sm.size"),`;
    height: `).concat(e("checkbox.icon.sm.size"),`;
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: `).concat(e("checkbox.lg.width"),`;
    height: `).concat(e("checkbox.lg.height"),`;
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.lg.size"),`;
    width: `).concat(e("checkbox.icon.lg.size"),`;
    height: `).concat(e("checkbox.icon.lg.size"),`;
}
`)},wt={root:function(t){var e=t.instance,o=t.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":o.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":o.size==="small","p-checkbox-lg p-inputfield-lg":o.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},St=G.extend({name:"checkbox",theme:zt,classes:wt}),It={name:"BaseCheckbox",extends:ut,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:St,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function Bt(n){return $t(n)||Ot(n)||Lt(n)||Pt()}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(n,t){if(n){if(typeof n=="string")return Z(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Z(n,t):void 0}}function Ot(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $t(n){if(Array.isArray(n))return Z(n)}function Z(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}var Tt={name:"Checkbox",extends:It,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(t){this.d_indeterminate=t}},methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(t){var e=this;if(!this.disabled&&!this.readonly){var o=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,s;this.binary?s=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?s=o.filter(function(i){return!st(i,e.value)}):s=o?[].concat(Bt(o),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(s,t):this.writeValue(s,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e,o;this.$emit("blur",t),(e=(o=this.formField).onBlur)===null||e===void 0||e.call(o,t)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var t=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?t===this.trueValue:ot(this.value,t)}},components:{CheckIcon:ht,MinusIcon:nt}},Vt=["data-p-checked","data-p-indeterminate","data-p-disabled"],Ht=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function At(n,t,e,o,s,i){var a=D("CheckIcon"),l=D("MinusIcon");return b(),k("div",g({class:n.cx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-indeterminate":s.d_indeterminate||void 0,"data-p-disabled":n.disabled}),[A("input",g({id:n.inputId,type:"checkbox",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:i.groupName,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,required:n.required,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,"aria-checked":s.d_indeterminate?"mixed":void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,Ht),A("div",g({class:n.cx("box")},i.getPTOptions("box")),[B(n.$slots,"icon",{checked:i.checked,indeterminate:s.d_indeterminate,class:lt(n.cx("icon"))},function(){return[i.checked?(b(),Q(a,g({key:0,class:n.cx("icon")},i.getPTOptions("icon")),null,16,["class"])):s.d_indeterminate?(b(),Q(l,g({key:1,class:n.cx("icon")},i.getPTOptions("icon")),null,16,["class"])):E("",!0)]})],16)],16,Vt)}Tt.render=At;var Rt={name:"SearchIcon",extends:K};function Nt(n,t,e,o,s,i){return b(),k("svg",g({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),t[0]||(t[0]=[A("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"},null,-1)]),16)}Rt.render=Nt;var Ft=function(t){var e=t.dt;return`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (`.concat(e("icon.size"),` / 2));
    color: `).concat(e("iconfield.icon.color"),`;
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: `).concat(e("form.field.padding.x"),`;
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: `).concat(e("form.field.padding.x"),`;
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((`).concat(e("form.field.padding.x")," * 2) + ").concat(e("icon.size"),`);
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((`).concat(e("form.field.padding.x")," * 2) + ").concat(e("icon.size"),`);
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: `).concat(e("form.field.sm.font.size"),`;
    width: `).concat(e("form.field.sm.font.size"),`;
    height: `).concat(e("form.field.sm.font.size"),`;
    margin-top: calc(-1 * (`).concat(e("form.field.sm.font.size"),` / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: `).concat(e("form.field.lg.font.size"),`;
    width: `).concat(e("form.field.lg.font.size"),`;
    height: `).concat(e("form.field.lg.font.size"),`;
    margin-top: calc(-1 * (`).concat(e("form.field.lg.font.size"),` / 2));
}
`)},jt={root:"p-iconfield"},Mt=G.extend({name:"iconfield",theme:Ft,classes:jt}),Wt={name:"BaseIconField",extends:U,style:Mt,provide:function(){return{$pcIconField:this,$parentInstance:this}}},_t={name:"IconField",extends:Wt,inheritAttrs:!1};function Et(n,t,e,o,s,i){return b(),k("div",g({class:n.cx("root")},n.ptmi("root")),[B(n.$slots,"default")],16)}_t.render=Et;var Gt={root:"p-inputicon"},qt=G.extend({name:"inputicon",classes:Gt}),Dt={name:"BaseInputIcon",extends:U,style:qt,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},Zt={name:"InputIcon",extends:Dt,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function Kt(n,t,e,o,s,i){return b(),k("span",g({class:i.containerClass},n.ptmi("root")),[B(n.$slots,"default")],16)}Zt.render=Kt;export{te as O,Rt as a,Zt as b,_t as c,yt as d,Tt as e,dt as s};
