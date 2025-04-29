import{c as n}from"./index-DtiDn9lJ.js";import{B as e,e as o,o as p,r as i,m as r}from"./app-13YhllzU.js";var s=function(t){var l=t.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: `.concat(l("floatlabel.font.weight"),`;
    inset-inline-start: `).concat(l("floatlabel.position.x"),`;
    color: `).concat(l("floatlabel.color"),`;
    transition-duration: `).concat(l("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(l("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((`).concat(l("form.field.padding.x")," * 2) + ").concat(l("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(l("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(l("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(l("floatlabel.active.font.size"),`;
    font-weight: `).concat(l("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(l("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: `).concat(l("floatlabel.focus.color"),`;
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: `).concat(l("floatlabel.in.input.padding.top"),`;
    padding-block-end: `).concat(l("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(l("floatlabel.in.active.top"),`;
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: `).concat(l("floatlabel.on.border.radius"),`;
    background: `).concat(l("floatlabel.on.active.background"),`;
    padding: `).concat(l("floatlabel.on.active.padding"),`;
}
`)},b={root:function(t){t.instance;var l=t.props;return["p-floatlabel",{"p-floatlabel-over":l.variant==="over","p-floatlabel-on":l.variant==="on","p-floatlabel-in":l.variant==="in"}]}},f=e.extend({name:"floatlabel",theme:s,classes:b}),c={name:"BaseFloatLabel",extends:n,props:{variant:{type:String,default:"over"}},style:f,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},u={name:"FloatLabel",extends:c,inheritAttrs:!1};function d(a,t,l,h,v,m){return p(),o("span",r({class:a.cx("root")},a.ptmi("root")),[i(a.$slots,"default")],16)}u.render=d;export{u as s};
