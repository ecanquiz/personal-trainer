import be from"./DgmU6zrH.js";import{_ as me}from"./t6JDDT97.js";import{u as we}from"./Cu-1t_U5.js";import{f as J,j as P,J as s,K as Ae,l as ue,R as re,$ as ve,F as ge,L as Re,M as Ve,a1 as U,N as Be,aL as T,O as ye,P as W,Q as oe,a2 as Pe,X as Te,Y as Q,a6 as De,z as He,o as h,h as q,w as $,c as R,A as v,q as z,a4 as G,y as N,a as F,H as ie,b as X,t as K,T as je,s as ze,a3 as qe,d as ce}from"./B1g9UxbC.js";import{Z as Ne,t as Fe,l as Ee,a as Ue,o as We}from"./BjbMKj_l.js";import{d as $e,e as Qe}from"./NVX3nsFX.js";import{u as E,o as w,E as Ge,A as ee,T as Ke,I as se,N as pe,a as I,l as Je}from"./BZ8D3Xad.js";import{w as Ye}from"./DQh67H7h.js";import{s as Ze}from"./B4JSJSFJ.js";import{p as Xe}from"./B27fgL1o.js";import{f as xe,c as A,u as _e}from"./BDexq2Zq.js";import{f as ea,s as aa}from"./Br4DbZsC.js";import{t as la,i as _,l as ta}from"./BmAvbfbO.js";import{w as na,h as oa,O as ia}from"./Dhw7ScDS.js";import{d as ua}from"./DgCAb0nF.js";import{u as fe,s as ra,b as sa,g as da}from"./DS8WuFRJ.js";import{u as va}from"./E1UH-_jY.js";import{u as ca}from"./BA0kNeOr.js";import{a as pa}from"./BRdF0l0C.js";import{_ as fa}from"./DlAUqK2U.js";import"./Czvg7lg4.js";import"./qsMMcMsd.js";import"./jthpZqva.js";import"./CxIZtCgj.js";function ba(e,b){return e===b}var ma=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ma||{}),ga=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ga||{}),ya=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ya||{});function ha(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let he=Symbol("ListboxContext");function ae(e){let b=Be(he,null);if(b===null){let k=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(k,ae),k}return b}let Oa=J({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>ba},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:b,attrs:k,emit:i}){let c=P(1),m=P(null),a=P(null),O=P(null),d=P([]),p=P(""),f=P(null),n=P(1);function t(l=o=>o){let o=f.value!==null?d.value[f.value]:null,u=ia(l(d.value.slice()),M=>w(M.dataRef.domRef)),r=o?u.indexOf(o):null;return r===-1&&(r=null),{options:u,activeOptionIndex:r}}let L=s(()=>e.multiple?1:0),[g,C]=$e(s(()=>e.modelValue),l=>i("update:modelValue",l),s(()=>e.defaultValue)),V=s(()=>g.value===void 0?E(L.value,{1:[],0:void 0}):g.value),S={listboxState:c,value:V,mode:L,compare(l,o){if(typeof e.by=="string"){let u=e.by;return(l==null?void 0:l[u])===(o==null?void 0:o[u])}return e.by(l,o)},orientation:s(()=>e.horizontal?"horizontal":"vertical"),labelRef:m,buttonRef:a,optionsRef:O,disabled:s(()=>e.disabled),options:d,searchQuery:p,activeOptionIndex:f,activationTrigger:n,closeListbox(){e.disabled||c.value!==1&&(c.value=1,f.value=null)},openListbox(){e.disabled||c.value!==0&&(c.value=0)},goToOption(l,o,u){if(e.disabled||c.value===1)return;let r=t(),M=xe(l===A.Specific?{focus:A.Specific,id:o}:{focus:l},{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:j=>j.id,resolveDisabled:j=>j.dataRef.disabled});p.value="",f.value=M,n.value=u??1,d.value=r.options},search(l){if(e.disabled||c.value===1)return;let o=p.value!==""?0:1;p.value+=l.toLowerCase();let u=(f.value!==null?d.value.slice(f.value+o).concat(d.value.slice(0,f.value+o)):d.value).find(M=>M.dataRef.textValue.startsWith(p.value)&&!M.dataRef.disabled),r=u?d.value.indexOf(u):-1;r===-1||r===f.value||(f.value=r,n.value=1)},clearSearch(){e.disabled||c.value!==1&&p.value!==""&&(p.value="")},registerOption(l,o){let u=t(r=>[...r,{id:l,dataRef:o}]);d.value=u.options,f.value=u.activeOptionIndex},unregisterOption(l){let o=t(u=>{let r=u.findIndex(M=>M.id===l);return r!==-1&&u.splice(r,1),u});d.value=o.options,f.value=o.activeOptionIndex,n.value=1},theirOnChange(l){e.disabled||C(l)},select(l){e.disabled||C(E(L.value,{0:()=>l,1:()=>{let o=T(S.value.value).slice(),u=T(l),r=o.findIndex(M=>S.compare(u,T(M)));return r===-1?o.push(u):o.splice(r,1),o}}))}};Ye([a,O],(l,o)=>{var u;S.closeListbox(),na(o,oa.Loose)||(l.preventDefault(),(u=w(a))==null||u.focus())},s(()=>c.value===0)),Ae(he,S),la(s(()=>E(c.value,{0:_.Open,1:_.Closed})));let D=s(()=>{var l;return(l=w(a))==null?void 0:l.closest("form")});return ue(()=>{re([D],()=>{if(!D.value||e.defaultValue===void 0)return;function l(){S.theirOnChange(e.defaultValue)}return D.value.addEventListener("reset",l),()=>{var o;(o=D.value)==null||o.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:o,disabled:u,form:r,...M}=e,j={open:c.value===0,disabled:u,value:V.value};return ve(ge,[...l!=null&&V.value!=null?Qe({[l]:V.value}).map(([Y,le])=>ve(ea,Ge({features:aa.Hidden,key:Y,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:r,name:Y,value:le}))):[],ee({ourProps:{},theirProps:{...k,...Ke(M,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:j,slots:b,attrs:k,name:"Listbox"})])}}}),Sa=J({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:b,slots:k,expose:i}){var c;let m=(c=e.id)!=null?c:`headlessui-listbox-button-${se()}`,a=ae("ListboxButton");i({el:a.buttonRef,$el:a.buttonRef});function O(n){switch(n.key){case I.Space:case I.Enter:case I.ArrowDown:n.preventDefault(),a.openListbox(),U(()=>{var t;(t=w(a.optionsRef))==null||t.focus({preventScroll:!0}),a.value.value||a.goToOption(A.First)});break;case I.ArrowUp:n.preventDefault(),a.openListbox(),U(()=>{var t;(t=w(a.optionsRef))==null||t.focus({preventScroll:!0}),a.value.value||a.goToOption(A.Last)});break}}function d(n){switch(n.key){case I.Space:n.preventDefault();break}}function p(n){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),U(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(n.preventDefault(),a.openListbox(),ha(()=>{var t;return(t=w(a.optionsRef))==null?void 0:t.focus({preventScroll:!0})})))}let f=Ze(s(()=>({as:e.as,type:b.type})),a.buttonRef);return()=>{var n,t;let L={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{...g}=e,C={ref:a.buttonRef,id:m,type:f.value,"aria-haspopup":"listbox","aria-controls":(n=w(a.optionsRef))==null?void 0:n.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(t=w(a.labelRef))==null?void 0:t.id,m].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:O,onKeyup:d,onClick:p};return ee({ourProps:C,theirProps:g,slot:L,attrs:b,slots:k,name:"ListboxButton"})}}}),Ma=J({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:b,slots:k,expose:i}){var c;let m=(c=e.id)!=null?c:`headlessui-listbox-options-${se()}`,a=ae("ListboxOptions"),O=P(null);i({el:a.optionsRef,$el:a.optionsRef});function d(n){switch(O.value&&clearTimeout(O.value),n.key){case I.Space:if(a.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),a.search(n.key);case I.Enter:if(n.preventDefault(),n.stopPropagation(),a.activeOptionIndex.value!==null){let t=a.options.value[a.activeOptionIndex.value];a.select(t.dataRef.value)}a.mode.value===0&&(a.closeListbox(),U(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})}));break;case E(a.orientation.value,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Next);case E(a.orientation.value,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Previous);case I.Home:case I.PageUp:return n.preventDefault(),n.stopPropagation(),a.goToOption(A.First);case I.End:case I.PageDown:return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Last);case I.Escape:n.preventDefault(),n.stopPropagation(),a.closeListbox(),U(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})});break;case I.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(a.search(n.key),O.value=setTimeout(()=>a.clearSearch(),350));break}}let p=ta(),f=s(()=>p!==null?(p.value&_.Open)===_.Open:a.listboxState.value===0);return()=>{var n,t;let L={open:a.listboxState.value===0},{...g}=e,C={"aria-activedescendant":a.activeOptionIndex.value===null||(n=a.options.value[a.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(t=w(a.buttonRef))==null?void 0:t.id,"aria-orientation":a.orientation.value,id:m,onKeydown:d,role:"listbox",tabIndex:0,ref:a.optionsRef};return ee({ourProps:C,theirProps:g,slot:L,attrs:b,slots:k,features:pe.RenderStrategy|pe.Static,visible:f.value,name:"ListboxOptions"})}}}),Ia=J({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:b,attrs:k,expose:i}){var c;let m=(c=e.id)!=null?c:`headlessui-listbox-option-${se()}`,a=ae("ListboxOption"),O=P(null);i({el:O,$el:O});let d=s(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===m:!1),p=s(()=>E(a.mode.value,{0:()=>a.compare(T(a.value.value),T(e.value)),1:()=>T(a.value.value).some(l=>a.compare(T(l),T(e.value)))})),f=s(()=>E(a.mode.value,{1:()=>{var l;let o=T(a.value.value);return((l=a.options.value.find(u=>o.some(r=>a.compare(T(r),T(u.dataRef.value)))))==null?void 0:l.id)===m},0:()=>p.value})),n=Xe(O),t=s(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:O}));ue(()=>a.registerOption(m,t)),Re(()=>a.unregisterOption(m)),ue(()=>{re([a.listboxState,p],()=>{a.listboxState.value===0&&p.value&&E(a.mode.value,{1:()=>{f.value&&a.goToOption(A.Specific,m)},0:()=>{a.goToOption(A.Specific,m)}})},{immediate:!0})}),Ve(()=>{a.listboxState.value===0&&d.value&&a.activationTrigger.value!==0&&U(()=>{var l,o;return(o=(l=w(O))==null?void 0:l.scrollIntoView)==null?void 0:o.call(l,{block:"nearest"})})});function L(l){if(e.disabled)return l.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),U(()=>{var o;return(o=w(a.buttonRef))==null?void 0:o.focus({preventScroll:!0})}))}function g(){if(e.disabled)return a.goToOption(A.Nothing);a.goToOption(A.Specific,m)}let C=_e();function V(l){C.update(l)}function S(l){C.wasMoved(l)&&(e.disabled||d.value||a.goToOption(A.Specific,m,0))}function D(l){C.wasMoved(l)&&(e.disabled||d.value&&a.goToOption(A.Nothing))}return()=>{let{disabled:l}=e,o={active:d.value,selected:p.value,disabled:l},{value:u,disabled:r,...M}=e,j={id:m,ref:O,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onClick:L,onFocus:g,onPointerenter:V,onMouseenter:V,onPointermove:S,onMousemove:S,onPointerleave:D,onMouseleave:D};return ee({ourProps:j,theirProps:M,slot:o,attrs:k,slots:b,name:"ListboxOption"})}}});const H=ye(W.ui.strategy,W.ui.select,ra),x=ye(W.ui.strategy,W.ui.selectMenu,sa),Ca=J({components:{HCombobox:Ne,HComboboxButton:Fe,HComboboxOptions:Ee,HComboboxOption:Ue,HComboboxInput:We,HListbox:Oa,HListboxButton:Sa,HListboxOptions:Ma,HListboxOption:Ia,UIcon:be,UAvatar:me},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>H.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>H.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>x.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},clearSearchOnClose:{type:Boolean,default:()=>x.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>x.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(H.size).includes(e)}},color:{type:String,default:()=>H.default.color,validator(e){return[...W.ui.colors,...Object.keys(H.color)].includes(e)}},variant:{type:String,default:()=>H.default.variant,validator(e){return[...Object.keys(H.variant),...Object.values(H.color).flatMap(b=>Object.keys(b))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:b,slots:k}){const{ui:i,attrs:c}=fe("select",oe(e,"ui"),H,oe(e,"class")),{ui:m}=fe("selectMenu",oe(e,"uiMenu"),x),a=s(()=>Pe({},e.popper,m.value.popper)),[O,d]=va(a.value),{size:p,rounded:f}=pa({ui:i,props:e}),{emitFormBlur:n,emitFormChange:t,inputId:L,color:g,size:C,name:V}=ca(e,H),S=s(()=>p.value||C.value),D=P(""),l=s({get(){return e.query??D.value},set(y){D.value=y,b("update:query",y)}}),o=s(()=>{if(e.multiple)return Array.isArray(e.modelValue)&&e.modelValue.length?`${e.modelValue.length} selected`:null;if(e.modelValue!==void 0&&e.modelValue!==null)if(e.valueAttribute){const y=e.options.find(B=>B[e.valueAttribute]===e.modelValue);return y?y[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute];return null}),u=s(()=>{var B,Z;const y=((Z=(B=i.value.color)==null?void 0:B[g.value])==null?void 0:Z[e.variant])||i.value.variant[e.variant];return Te(Q(i.value.base,m.value.select,f.value,i.value.size[S.value],i.value.gap[S.value],e.padded?i.value.padding[S.value]:"p-0",y==null?void 0:y.replaceAll("{color}",g.value),(r.value||k.leading)&&i.value.leading.padding[S.value],(M.value||k.trailing)&&i.value.trailing.padding[S.value]),e.placeholder&&e.modelValue===void 0&&e.modelValue===null&&i.value.placeholder,e.selectClass)}),r=s(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),M=s(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),j=s(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Y=s(()=>e.loading&&!r.value?e.loadingIcon:e.trailingIcon||e.icon),le=s(()=>Q(i.value.icon.leading.wrapper,i.value.icon.leading.pointer,i.value.icon.leading.padding[S.value])),Oe=s(()=>Q(i.value.icon.base,g.value&&W.ui.colors.includes(g.value)&&i.value.icon.color.replaceAll("{color}",g.value),i.value.icon.size[S.value],e.loading&&i.value.icon.loading)),Se=s(()=>Q(i.value.icon.trailing.wrapper,i.value.icon.trailing.pointer,i.value.icon.trailing.padding[S.value])),Me=s(()=>Q(i.value.icon.base,g.value&&W.ui.colors.includes(g.value)&&i.value.icon.color.replaceAll("{color}",g.value),i.value.icon.size[S.value],e.loading&&!r.value&&i.value.icon.loading)),de=typeof e.searchable=="function"?De(e.searchable,e.debounce):void 0,te=ua(async()=>e.searchable&&de?await de(l.value):l.value===""?e.options:e.options.filter(y=>{var B;return((B=e.searchAttributes)!=null&&B.length?e.searchAttributes:[e.optionAttribute]).some(Z=>{if(["string","number"].includes(typeof y))return String(y).search(new RegExp(l.value,"i"))!==-1;const ne=da(y,Z);return ne!=null&&String(ne).search(new RegExp(l.value,"i"))!==-1})})),Ie=s(()=>l.value===""||e.showCreateOptionWhen==="empty"&&te.value.length||e.showCreateOptionWhen==="always"&&te.value.find(B=>["string","number"].includes(typeof B)?B===l.value:B[e.optionAttribute]===l.value)?null:["string","number"].includes(typeof e.modelValue)?l.value:{[e.optionAttribute]:l.value});function Ce(){e.clearSearchOnClose&&(l.value="")}re(d,y=>{y?b("open"):(Ce(),b("close"),n())});function ke(y){b("update:modelValue",y),b("change",y),t()}function Le(y){l.value=y.target.value}return Je(()=>we("$YMH7mn4R4k")),{ui:i,uiMenu:m,attrs:c,name:V,inputId:L,popper:a,trigger:O,container:d,label:o,isLeading:r,isTrailing:M,selectClass:u,leadingIconName:j,leadingIconClass:Oe,leadingWrapperIconClass:le,trailingIconName:Y,trailingIconClass:Me,trailingWrapperIconClass:Se,filteredOptions:te,createOption:Ie,query:l,onUpdate:ke,onQueryChange:Le}}}),ka=["value","required"],La=["id","disabled"],wa={class:"truncate"};function Aa(e,b,k,i,c,m){const a=be,O=He("HComboboxInput"),d=me;return h(),q(G(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:v(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:$(({open:p})=>[e.required?(h(),R("input",{key:0,value:e.modelValue,required:e.required,class:v(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,ka)):z("",!0),(h(),q(G(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:v(e.uiMenu.trigger)},{default:$(()=>[N(e.$slots,"default",{open:p,disabled:e.disabled,loading:e.loading},()=>[F("button",ie({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(h(),R("span",{key:0,class:v(e.leadingWrapperIconClass)},[N(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[X(a,{name:e.leadingIconName,class:v(e.leadingIconClass)},null,8,["name","class"])])],2)):z("",!0),N(e.$slots,"label",{},()=>[e.label?(h(),R("span",{key:0,class:v(e.uiMenu.label)},K(e.label),3)):(h(),R("span",{key:1,class:v(e.uiMenu.label)},K(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(h(),R("span",{key:1,class:v(e.trailingWrapperIconClass)},[N(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[X(a,{name:e.trailingIconName,class:v(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):z("",!0)],16,La)])]),_:2},1032,["class"])),p?(h(),R("div",{key:1,ref:"container",class:v([e.uiMenu.container,e.uiMenu.width])},[X(je,ie({appear:""},e.uiMenu.transition),{default:$(()=>[F("div",null,[e.popper.arrow?(h(),R("div",{key:0,"data-popper-arrow":"",class:v(Object.values(e.uiMenu.arrow))},null,2)):z("",!0),(h(),q(G(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:v([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:$(()=>{var f,n;return[e.searchable?(h(),q(O,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:v(e.uiMenu.input),onChange:e.onQueryChange},null,8,["display-value","placeholder","class","onChange"])):z("",!0),(h(!0),R(ge,null,ze(e.filteredOptions,(t,L)=>(h(),q(G(e.searchable?"HComboboxOption":"HListboxOption"),{key:L,as:"template",value:e.valueAttribute?t[e.valueAttribute]:t,disabled:t.disabled},{default:$(({active:g,selected:C,disabled:V})=>[F("li",{class:v([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,g?e.uiMenu.option.active:e.uiMenu.option.inactive,C&&e.uiMenu.option.selected,V&&e.uiMenu.option.disabled])},[F("div",{class:v(e.uiMenu.option.container)},[N(e.$slots,"option",{option:t,active:g,selected:C},()=>[t.icon?(h(),q(a,{key:0,name:t.icon,class:v([e.uiMenu.option.icon.base,g?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,t.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):t.avatar?(h(),q(d,ie({key:1},{size:e.uiMenu.option.avatar.size,...t.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):t.chip?(h(),R("span",{key:2,class:v(e.uiMenu.option.chip.base),style:qe({background:`#${t.chip}`})},null,6)):z("",!0),F("span",wa,K(["string","number"].includes(typeof t)?t:t[e.optionAttribute]),1)])],2),C?(h(),R("span",{key:0,class:v([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[X(a,{name:e.selectedIcon,class:v(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):z("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(h(),q(G(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:$(({active:t,selected:L})=>[F("li",{class:v([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,t?e.uiMenu.option.active:e.uiMenu.option.inactive])},[F("div",{class:v(e.uiMenu.option.container)},[N(e.$slots,"option-create",{option:e.createOption,active:t,selected:L},()=>[F("span",{class:v(e.uiMenu.option.create)},'Create "'+K(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((f=e.filteredOptions)!=null&&f.length)?(h(),R("p",{key:2,class:v(e.uiMenu.option.empty)},[N(e.$slots,"option-empty",{query:e.query},()=>[ce(' No results for "'+K(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?z("",!0):(h(),R("p",{key:3,class:v(e.uiMenu.empty)},[N(e.$slots,"empty",{query:e.query},()=>[ce(" No options. ")])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):z("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const _a=fa(Ca,[["render",Aa]]);export{_a as default};
