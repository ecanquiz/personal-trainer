import F from"./CnjBeltg.js";import{j as k,l as A,L as X,O as z,P as M,f as W,Q as $,a0 as D,J as E,X as I,o as s,c as l,a as j,F as S,s as N,A as c,y as p,h as O,H as b,q as v}from"./BCHUnoHX.js";import{u as V}from"./BYCeiz1O.js";import{u as q,a as H,b as J}from"./CVF-uTrI.js";import{_ as Q}from"./DlAUqK2U.js";import"./DFzM1SPI.js";import"./DIAyBR01.js";import"./qsMMcMsd.js";import"./DpOdnms1.js";import"./dFvBRjsd.js";import"./aPxrJPp6.js";import"./DTqZYuub.js";import"./blSOxsGD.js";const T={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},G=e=>{const n=k(0);function i(o){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",n.value=o.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",u)}function u(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",u)}function a(o){o.preventDefault();const r=o.pageX-n.value;n.value=o.pageX,e.value.scrollBy(-r,0)}A(()=>{e.value&&e.value.addEventListener("mousedown",i)}),X(()=>{e.value&&e.value.removeEventListener("mousedown",i)})},y=z(M.ui.strategy,M.ui.carousel,T),K=W({components:{UButton:F},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>y.default.prevButton},nextButton:{type:Object,default:()=>y.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:i,attrs:u}=V("carousel",$(e,"ui"),y,$(e,"class")),a=k(),o=k(0),{x:r,arrivedState:t}=q(a,{behavior:"smooth"}),{width:d}=H(a),{left:R,right:U}=D(t);G(a),J(a,f=>{var P,L;const[m]=f;o.value=((L=(P=m==null?void 0:m.target)==null?void 0:P.firstElementChild)==null?void 0:L.clientWidth)||0});const w=E(()=>Math.round(r.value/o.value)+1),g=E(()=>o.value?e.items.length-Math.round(d.value/o.value)+1:0);function h(){r.value+=o.value}function B(){r.value-=o.value}function C(f){r.value=(f-1)*o.value}return n({pages:g,page:w,prev:B,next:h,select:C}),{ui:i,attrs:u,isFirst:R,isLast:U,carouselRef:a,pages:g,currentPage:w,onClickNext:h,onClickPrev:B,onClick:C,twMerge:I}}}),Y=["role"],Z=["aria-selected","aria-label","onClick"];function x(e,n,i,u,a,o){const r=F;return s(),l("div",b({class:e.ui.wrapper},e.attrs),[j("div",{ref:"carouselRef",class:c([e.ui.container,"no-scrollbar"])},[(s(!0),l(S,null,N(e.items,(t,d)=>(s(),l("div",{key:d,class:c(e.ui.item),role:e.indicators?"tabpanel":null},[p(e.$slots,"default",{item:t,index:d},void 0,!0)],10,Y))),128))],2),e.arrows?(s(),l("div",{key:0,class:c(e.ui.arrows.wrapper)},[p(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(s(),O(r,b({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):v("",!0)]},!0),p(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(s(),O(r,b({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):v("",!0)]},!0)],2)):v("",!0),e.indicators?(s(),l("div",{key:1,role:"tablist",class:c(e.ui.indicators.wrapper)},[(s(!0),l(S,null,N(e.pages,t=>p(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[j("button",{type:"button",role:"tab","aria-selected":t===e.currentPage,class:c([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:d=>e.onClick(t)},null,10,Z)],!0)),128))],2)):v("",!0)],16)}const pe=Q(K,[["render",x],["__scopeId","data-v-69d830ff"]]);export{pe as default};