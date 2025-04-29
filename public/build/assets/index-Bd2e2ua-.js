import{s as te,a as ne,b as ie,R as oe,l as L,n as se,o as z,p as le,q as re,X as H,j as g,r as ae,t as ce,g as de,v as ue,Z as D,f as pe,w as fe,x as he,Y as be,y as ye,z as m}from"./index-DtiDn9lJ.js";import{e as c,o as r,a as b,m as l,B as ge,C as ve,p as y,q as me,r as f,f as O,b as I,g as A,t as v,c as k,v as G,n as K,w as S,T as Oe,D as Ie,E as ke,F as B,h as Se,s as we}from"./app-13YhllzU.js";import{C as Le,U as R}from"./index-DRxSqBOV.js";import{s as Fe}from"./index-DzqK50WV.js";import{a as Ce,s as xe,c as Ve,b as Ke,d as Me,O as Te}from"./index-C_4vxBeT.js";import{a as Ee}from"./index-D0b6ATor.js";import{s as De,a as Ae}from"./index-DHd4Qs9j.js";var N={name:"BlankIcon",extends:te};function Be(t,e,n,o,s,i){return r(),c("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[b("rect",{width:"1",height:"1",fill:"currentColor","fill-opacity":"0"},null,-1)]),16)}N.render=Be;var Pe=function(e){var n=e.dt;return`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("select.background"),`;
    border: 1px solid `).concat(n("select.border.color"),`;
    transition: background `).concat(n("select.transition.duration"),", color ").concat(n("select.transition.duration"),", border-color ").concat(n("select.transition.duration"),`,
        outline-color `).concat(n("select.transition.duration"),", box-shadow ").concat(n("select.transition.duration"),`;
    border-radius: `).concat(n("select.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("select.shadow"),`;
}

.p-select:not(.p-disabled):hover {
    border-color: `).concat(n("select.hover.border.color"),`;
}

.p-select:not(.p-disabled).p-focus {
    border-color: `).concat(n("select.focus.border.color"),`;
    box-shadow: `).concat(n("select.focus.ring.shadow"),`;
    outline: `).concat(n("select.focus.ring.width")," ").concat(n("select.focus.ring.style")," ").concat(n("select.focus.ring.color"),`;
    outline-offset: `).concat(n("select.focus.ring.offset"),`;
}

.p-select.p-variant-filled {
    background: `).concat(n("select.filled.background"),`;
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: `).concat(n("select.filled.hover.background"),`;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    background: `).concat(n("select.filled.focus.background"),`;
}

.p-select.p-invalid {
    border-color: `).concat(n("select.invalid.border.color"),`;
}

.p-select.p-disabled {
    opacity: 1;
    background: `).concat(n("select.disabled.background"),`;
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: `).concat(n("select.clear.icon.color"),`;
    inset-inline-end: `).concat(n("select.dropdown.width"),`;
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("select.dropdown.color"),`;
    width: `).concat(n("select.dropdown.width"),`;
    border-start-end-radius: `).concat(n("select.border.radius"),`;
    border-end-end-radius: `).concat(n("select.border.radius"),`;
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: `).concat(n("select.padding.y")," ").concat(n("select.padding.x"),`;
    text-overflow: ellipsis;
    cursor: pointer;
    color: `).concat(n("select.color"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: `).concat(n("select.placeholder.color"),`;
}

.p-select.p-invalid .p-select-label.p-placeholder {
    color: `).concat(n("select.invalid.placeholder.color"),`;
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-inline-end: calc(1rem + `).concat(n("select.padding.x"),`);
}

.p-select.p-disabled .p-select-label {
    color: `).concat(n("select.disabled.color"),`;
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("select.overlay.background"),`;
    color: `).concat(n("select.overlay.color"),`;
    border: 1px solid `).concat(n("select.overlay.border.color"),`;
    border-radius: `).concat(n("select.overlay.border.radius"),`;
    box-shadow: `).concat(n("select.overlay.shadow"),`;
}

.p-select-header {
    padding: `).concat(n("select.list.header.padding"),`;
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: `).concat(n("select.option.group.padding"),`;
    background: `).concat(n("select.option.group.background"),`;
    color: `).concat(n("select.option.group.color"),`;
    font-weight: `).concat(n("select.option.group.font.weight"),`;
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: `).concat(n("select.list.padding"),`;
    gap: `).concat(n("select.list.gap"),`;
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("select.option.padding"),`;
    border: 0 none;
    color: `).concat(n("select.option.color"),`;
    background: transparent;
    transition: background `).concat(n("select.transition.duration"),", color ").concat(n("select.transition.duration"),", border-color ").concat(n("select.transition.duration"),`,
            box-shadow `).concat(n("select.transition.duration"),", outline-color ").concat(n("select.transition.duration"),`;
    border-radius: `).concat(n("select.option.border.radius"),`;
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("select.option.focus.background"),`;
    color: `).concat(n("select.option.focus.color"),`;
}

.p-select-option.p-select-option-selected {
    background: `).concat(n("select.option.selected.background"),`;
    color: `).concat(n("select.option.selected.color"),`;
}

.p-select-option.p-select-option-selected.p-focus {
    background: `).concat(n("select.option.selected.focus.background"),`;
    color: `).concat(n("select.option.selected.focus.color"),`;
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: `).concat(n("select.checkmark.gutter.start"),`;
    margin-inline-end: `).concat(n("select.checkmark.gutter.end"),`;
    color: `).concat(n("select.checkmark.color"),`;
}

.p-select-empty-message {
    padding: `).concat(n("select.empty.message.padding"),`;
}

.p-select-fluid {
    display: flex;
    width: 100%;
}

.p-select-sm .p-select-label {
    font-size: `).concat(n("select.sm.font.size"),`;
    padding-block: `).concat(n("select.sm.padding.y"),`;
    padding-inline: `).concat(n("select.sm.padding.x"),`;
}

.p-select-sm .p-select-dropdown .p-icon {
    font-size: `).concat(n("select.sm.font.size"),`;
    width: `).concat(n("select.sm.font.size"),`;
    height: `).concat(n("select.sm.font.size"),`;
}

.p-select-lg .p-select-label {
    font-size: `).concat(n("select.lg.font.size"),`;
    padding-block: `).concat(n("select.lg.padding.y"),`;
    padding-inline: `).concat(n("select.lg.padding.x"),`;
}

.p-select-lg .p-select-dropdown .p-icon {
    font-size: `).concat(n("select.lg.font.size"),`;
    width: `).concat(n("select.lg.font.size"),`;
    height: `).concat(n("select.lg.font.size"),`;
}
`)},ze={root:function(e){var n=e.instance,o=e.props,s=e.state;return["p-select p-component p-inputwrapper",{"p-disabled":o.disabled,"p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-focus":s.focused,"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":s.focused||s.overlayVisible,"p-select-open":s.overlayVisible,"p-select-fluid":n.$fluid,"p-select-sm p-inputfield-sm":o.size==="small","p-select-lg p-inputfield-lg":o.size==="large"}]},label:function(e){var n=e.instance,o=e.props;return["p-select-label",{"p-placeholder":!o.editable&&n.label===o.placeholder,"p-select-label-empty":!o.editable&&!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:function(e){var n=e.instance,o=e.props,s=e.state,i=e.option,d=e.focusedOption;return["p-select-option",{"p-select-option-selected":n.isSelected(i)&&o.highlightOnSelect,"p-focus":s.focusedOptionIndex===d,"p-disabled":n.isOptionDisabled(i)}]},optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},He=ge.extend({name:"select",theme:Pe,classes:ze}),Ge={name:"BaseSelect",extends:Ae,props:{options:Array,optionLabel:[String,Function],optionValue:[String,Function],optionDisabled:[String,Function],optionGroupLabel:[String,Function],optionGroupChildren:[String,Function],scrollHeight:{type:String,default:"14rem"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},labelId:{type:String,default:null},labelClass:{type:[String,Object],default:null},labelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},resetFilterOnClear:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:He,provide:function(){return{$pcSelect:this,$parentInstance:this}}};function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function Re(t){return qe(t)||Ne(t)||Ue(t)||je()}function je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(t,e){if(t){if(typeof t=="string")return P(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(t,e):void 0}}function Ne(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qe(t){if(Array.isArray(t))return P(t)}function P(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,o)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j(Object(n),!0).forEach(function(o){q(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function q(t,e,n){return(e=We(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function We(t){var e=Ze(t,"string");return F(e)=="symbol"?e:e+""}function Ze(t,e){if(F(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(F(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Xe={name:"Select",extends:Ge,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter"],outsideClickListener:null,scrollHandler:null,resizeListener:null,labelClickListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||R()},modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||R(),this.autoUpdateModel(),this.bindLabelClickListener()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindLabelClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(D.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?m(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?m(e,this.optionValue):e},getOptionRenderKey:function(e,n){return(this.dataKey?m(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTItemOptions:function(e,n,o,s){return this.ptm(s,{context:{option:e,index:o,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?m(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return m(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return m(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),e&&g(this.$refs.focusInput)},hide:function(e){var n=this,o=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),e&&g(n.$refs.focusInput)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var n,o;this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e),(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o,e)},onKeyDown:function(e){if(this.disabled||be()){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!n&&ye(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked=!1},onEditableInput:function(e){var n=e.target.value;this.searchValue="";var o=this.searchOptions(e,n);!o&&(this.focusedOptionIndex=-1),this.updateModel(e,n),!this.overlayVisible&&L(n)&&this.show()},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(e){this.updateModel(e,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?he(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;g(n)},onLastHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?fe(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;g(n)},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n);this.updateModel(e,s),o&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onFilterChange:function(e){var n=e.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){if(!e.isComposing)switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){Te.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault()},onArrowUpKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var o=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,o),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var o=e.currentTarget;e.shiftKey?o.setSelectionRange(0,e.target.selectionStart):(o.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onEndKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var o=e.currentTarget;if(e.shiftKey)o.setSelectionRange(e.target.selectionStart,o.value.length);else{var s=o.value.length;o.setSelectionRange(s,s),this.focusedOptionIndex=-1}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onSpaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!n&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()},onTabKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(g(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){var n=this;D.set("overlay",e,this.$primevue.config.zIndex.overlay),pe(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),setTimeout(function(){n.autoFilterFocus&&n.filter&&g(n.$refs.filterInput.$el)},1)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){var e=this;this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.autoFilterFocus&&this.filter&&!this.editable&&this.$nextTick(function(){g(e.$refs.filterInput.$el)}),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){D.clear(e)},alignOverlay:function(){this.appendTo==="self"?ce(this.overlay,this.$el):(this.overlay.style.minWidth=de(this.$el)+"px",ue(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Le(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ae()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindLabelClickListener:function(){var e=this;if(!this.editable&&!this.labelClickListener){var n=document.querySelector('label[for="'.concat(this.labelId,'"]'));n&&H(n)&&(this.labelClickListener=function(){g(e.$refs.focusInput)},n.addEventListener("click",this.labelClickListener))}},unbindLabelClickListener:function(){if(this.labelClickListener){var e=document.querySelector('label[for="'.concat(this.labelId,'"]'));e&&H(e)&&e.removeEventListener("click",this.labelClickListener)}},hasFocusableElements:function(){return re(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){var n;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((n=this.getOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return L(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return le(this.d_value,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return z(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?z(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,n){var o=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return L(this.searchValue)&&(this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(d){return o.isOptionMatched(d)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(d){return o.isOptionMatched(d)}):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(function(d){return o.isOptionMatched(d)}),s!==-1&&(i=!0),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){o.searchValue="",o.searchTimeout=null},500),i},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,s=se(e.list,'li[id="'.concat(o,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,s,i){o.push({optionGroup:s,group:!0,index:i});var d=n.getOptionGroupChildren(s);return d&&d.forEach(function(w){return o.push(w)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var o=ve.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var s=this.options||[],i=[];return s.forEach(function(d){var w=e.getOptionGroupChildren(d),C=w.filter(function(M){return o.includes(M)});C.length>0&&i.push(U(U({},d),{},q({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",Re(C))))}),this.flatOptions(i)}return o}return n},hasSelectedOption:function(){return this.$filled},label:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.d_value||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return L(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&L(this.options)},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:oe},components:{InputText:De,VirtualScroller:Me,Portal:ie,InputIcon:Ke,IconField:Ve,TimesIcon:ne,ChevronDownIcon:xe,SpinnerIcon:Ee,SearchIcon:Ce,CheckIcon:Fe,BlankIcon:N}},Ye=["id"],Je=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Qe=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],$e=["id"],_e=["id"],et=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function tt(t,e,n,o,s,i){var d=y("SpinnerIcon"),w=y("InputText"),C=y("SearchIcon"),M=y("InputIcon"),W=y("IconField"),Z=y("CheckIcon"),X=y("BlankIcon"),Y=y("VirtualScroller"),J=y("Portal"),Q=me("ripple");return r(),c("div",l({ref:"container",id:s.id,class:t.cx("root"),onClick:e[11]||(e[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptmi("root")),[t.editable?(r(),c("input",l({key:0,ref:"focusInput",id:t.labelId||t.inputId,type:"text",class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],value:i.editableInputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onEditableInput&&i.onEditableInput.apply(i,arguments)})},t.ptm("label")),null,16,Je)):(r(),c("span",l({key:1,ref:"focusInput",id:t.labelId||t.inputId,class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[4]||(e[4]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[5]||(e[5]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[6]||(e[6]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},t.ptm("label")),[f(t.$slots,"value",{value:t.d_value,placeholder:t.placeholder},function(){var u;return[A(v(i.label==="p-emptylabel"?" ":(u=i.label)!==null&&u!==void 0?u:"empty"),1)]})],16,Qe)),i.isClearIconVisible?f(t.$slots,"clearicon",{key:2,class:K(t.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(r(),k(G(t.clearIcon?"i":"TimesIcon"),l({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:i.onClearClick},t.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):O("",!0),b("div",l({class:t.cx("dropdown")},t.ptm("dropdown")),[t.loading?f(t.$slots,"loadingicon",{key:0,class:K(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(r(),c("span",l({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(r(),k(d,l({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):f(t.$slots,"dropdownicon",{key:1,class:K(t.cx("dropdownIcon"))},function(){return[(r(),k(G(t.dropdownIcon?"span":"ChevronDownIcon"),l({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),I(J,{appendTo:t.appendTo},{default:S(function(){return[I(Oe,l({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:S(function(){return[s.overlayVisible?(r(),c("div",l({key:0,ref:i.overlayRef,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.panelStyle,t.overlayStyle],onClick:e[9]||(e[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[10]||(e[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},t.ptm("overlay")),[b("span",l({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[7]||(e[7]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),f(t.$slots,"header",{value:t.d_value,options:i.visibleOptions}),t.filter?(r(),c("div",l({key:0,class:t.cx("header")},t.ptm("header")),[I(W,{unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:S(function(){return[I(w,{ref:"filterInput",type:"text",value:s.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:K(t.cx("pcFilter")),placeholder:t.filterPlaceholder,variant:t.variant,unstyled:t.unstyled,role:"searchbox",autocomplete:"off","aria-owns":s.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:t.ptm("pcFilter")},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),I(M,{unstyled:t.unstyled,pt:t.ptm("pcFilterIconContainer")},{default:S(function(){return[f(t.$slots,"filtericon",{},function(){return[t.filterIcon?(r(),c("span",l({key:0,class:t.filterIcon},t.ptm("filterIcon")),null,16)):(r(),k(C,Ie(l({key:1},t.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt"]),b("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),v(i.filterResultMessageText),17)],16)):O("",!0),b("div",l({class:t.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[I(Y,l({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{items:i.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),ke({content:S(function(u){var T=u.styleClass,$=u.contentRef,x=u.items,h=u.getItemOptions,_=u.contentStyle,V=u.itemSize;return[b("ul",l({ref:function(p){return i.listRef(p,$)},id:s.id+"_list",class:[t.cx("list"),T],style:_,role:"listbox"},t.ptm("list")),[(r(!0),c(B,null,Se(x,function(a,p){return r(),c(B,{key:i.getOptionRenderKey(a,i.getOptionIndex(p,h))},[i.isOptionGroup(a)?(r(),c("li",l({key:0,id:s.id+"_"+i.getOptionIndex(p,h),style:{height:V?V+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[f(t.$slots,"optiongroup",{option:a.optionGroup,index:i.getOptionIndex(p,h)},function(){return[b("span",l({class:t.cx("optionGroupLabel"),ref_for:!0},t.ptm("optionGroupLabel")),v(i.getOptionGroupLabel(a.optionGroup)),17)]})],16,_e)):we((r(),c("li",l({key:1,id:s.id+"_"+i.getOptionIndex(p,h),class:t.cx("option",{option:a,focusedOption:i.getOptionIndex(p,h)}),style:{height:V?V+"px":void 0},role:"option","aria-label":i.getOptionLabel(a),"aria-selected":i.isSelected(a),"aria-disabled":i.isOptionDisabled(a),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(p,h)),onClick:function(E){return i.onOptionSelect(E,a)},onMousemove:function(E){return i.onOptionMouseMove(E,i.getOptionIndex(p,h))},"data-p-selected":i.isSelected(a),"data-p-focused":s.focusedOptionIndex===i.getOptionIndex(p,h),"data-p-disabled":i.isOptionDisabled(a),ref_for:!0},i.getPTItemOptions(a,h,p,"option")),[t.checkmark?(r(),c(B,{key:0},[i.isSelected(a)?(r(),k(Z,l({key:0,class:t.cx("optionCheckIcon"),ref_for:!0},t.ptm("optionCheckIcon")),null,16,["class"])):(r(),k(X,l({key:1,class:t.cx("optionBlankIcon"),ref_for:!0},t.ptm("optionBlankIcon")),null,16,["class"]))],64)):O("",!0),f(t.$slots,"option",{option:a,selected:i.isSelected(a),index:i.getOptionIndex(p,h)},function(){return[b("span",l({class:t.cx("optionLabel"),ref_for:!0},t.ptm("optionLabel")),v(i.getOptionLabel(a)),17)]})],16,et)),[[Q]])],64)}),128)),s.filterValue&&(!x||x&&x.length===0)?(r(),c("li",l({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[f(t.$slots,"emptyfilter",{},function(){return[A(v(i.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(r(),c("li",l({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[f(t.$slots,"empty",{},function(){return[A(v(i.emptyMessageText),1)]})],16)):O("",!0)],16,$e)]}),_:2},[t.$slots.loader?{name:"loader",fn:S(function(u){var T=u.options;return[f(t.$slots,"loader",{options:T})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),f(t.$slots,"footer",{value:t.d_value,options:i.visibleOptions}),!t.options||t.options&&t.options.length===0?(r(),c("span",l({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),v(i.emptyMessageText),17)):O("",!0),b("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),v(i.selectedMessageText),17),b("span",l({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[8]||(e[8]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):O("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,Ye)}Xe.render=tt;export{Xe as s};
