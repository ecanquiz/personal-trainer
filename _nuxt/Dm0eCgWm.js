import{u as b,g as V,H as I}from"./Dd1sIWi-.js";import k from"./DVo6m8Xd.js";import{f,j as u,l as N,o as p,c as _,b as o,w as x,d as B,t as h,i as S,h as C,k as i,a as t,m as F,v as A,p as z,e as D,q as U,T as G}from"./B1g9UxbC.js";import{_ as T}from"./CeclBAlY.js";import{_ as w}from"./CH4X2pjr.js";import{u as j,a as H,s as J}from"./D1BSOC1C.js";import{_ as M}from"./DlAUqK2U.js";import{_ as q}from"./QnEPCoT9.js";import"./DgmU6zrH.js";import"./Czvg7lg4.js";import"./qsMMcMsd.js";import"./ClajOHHl.js";import"./CCiO4yek.js";import"./aPxrJPp6.js";import"./DS8WuFRJ.js";import"./BRdF0l0C.js";import"./blSOxsGD.js";const K=f({__name:"FormUser",props:{message:{},error:{},sending:{type:Boolean}},emits:["submit"],setup(s,{emit:e}){const a=e,r=b(),n=u(),l=u(),c=u(!1),m=async()=>{a("submit",{name:n.value,email:l.value})};return N(async()=>{r.authUser&&(c.value=!0,await r.getAuthUser(),c.value=!1),n.value=r.authUser.name,l.value=r.authUser.email}),(d,v)=>{const g=k;return p(),_("form",{onSubmit:S(m,["prevent"])},[o(T,{type:"text",label:"Nombre",name:"name",modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=P=>n.value=P),class:"mb-2","data-testid":"name-input"},null,8,["modelValue"]),o(T,{type:"email",label:"Correo",name:"email",modelValue:l.value,"onUpdate:modelValue":v[1]||(v[1]=P=>l.value=P),autocomplete:"email",placeholder:"luke@jedi.com",class:"mb-4","data-testid":"email-input"},null,8,["modelValue"]),o(g,{"data-testid":"login-link",color:"lime"},{default:x(()=>[B(h(d.sending?"Guardando...":"Guardar"),1)]),_:1}),o(w,{message:d.message,error:d.error},null,8,["message","error"])],32)}}});function L(){const s=u(),e=u(),a=u();return{error:s,message:e,sending:a,updateUser:n=>{s.value="",e.value="",a.value=!0;const l=b();j(n).then(()=>l.getAuthUser()).then(()=>e.value="Usuario actualizado.").catch(c=>s.value=V()).finally(()=>a.value=!1)}}}const O=f({__name:"ProfileUser",setup(s){const{error:e,message:a,sending:r,updateUser:n}=L();return(l,c)=>(p(),C(K,{class:"p-5 border rounded shadow",onSubmit:c[0]||(c[0]=m=>i(n)(m)),sending:i(r),error:i(e),message:i(a)},null,8,["sending","error","message"]))}}),E=s=>(z("data-v-5ed471a6"),s=s(),D(),s),Q={class:"mb-2"},R=E(()=>t("label",{for:"password",class:"text-sm text-gray-500"},"Current Password",-1)),W={class:"mb-2"},X=E(()=>t("label",{for:"password",class:"text-sm text-gray-500"},"Password",-1)),Y={class:"mb-4"},Z=E(()=>t("label",{for:"password-confirm",class:"text-sm text-gray-500"},"Confirm Password",-1)),ee=f({__name:"FormUpdatePassword",props:{message:{},error:{},sending:{type:Boolean}},emits:["submit"],setup(s,{emit:e}){const a=e,r=u(),n=u(),l=u(),c=async()=>{a("submit",{current_password:r.value,password:n.value,password_confirmation:l.value})};return(m,d)=>{const v=k;return p(),_("form",{onSubmit:S(c,["prevent"])},[t("div",Q,[R,F(t("input",{type:"password",id:"current-password","onUpdate:modelValue":d[0]||(d[0]=g=>r.value=g),class:"password","data-testid":"current-password-input"},null,512),[[A,r.value]])]),t("div",W,[X,F(t("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=g=>n.value=g),class:"password","data-testid":"password-input"},null,512),[[A,n.value]])]),t("div",Y,[Z,F(t("input",{type:"password",id:"password-confirm","onUpdate:modelValue":d[2]||(d[2]=g=>l.value=g),class:"password","data-testid":"password-confirm-input"},null,512),[[A,l.value]])]),o(v,{"data-testid":"login-link",color:"lime"},{default:x(()=>[B(h(m.sending?"Guardando...":"Guardar"),1)]),_:1}),o(w,{message:m.message,error:m.error},null,8,["message","error"])],32)}}}),se=M(ee,[["__scopeId","data-v-5ed471a6"]]);function ae(){const s=u(),e=u(),a=u();return{error:s,message:e,sending:a,updatePassword:n=>{s.value="",e.value="",a.value=!0,H(n).then(()=>e.value="Contraseña actualizada.").catch(l=>s.value=V()).finally(()=>a.value=!1)}}}const te=f({__name:"ProfileUpdatePassword",setup(s){const{error:e,message:a,sending:r,updatePassword:n}=ae();return(l,c)=>(p(),C(se,{class:"p-5 border rounded shadow",onSubmit:i(n),sending:i(r),error:i(e),message:i(a)},null,8,["onSubmit","sending","error","message"]))}}),oe=f({__name:"FormVerifyEmail",setup(s){const e=b(),a=u(null),r=u(null),n=()=>{a.value=null,r.value=null;const l={user:e.authUser.id};J(l).then(()=>r.value="Verification email sent.").catch(c=>a.value=V())};return(l,c)=>{const m=k;return p(),_("div",null,[t("form",{onSubmit:S(n,["prevent"])},[o(m,{"data-testid":"login-link",color:"lime"},{default:x(()=>[B(" Verify Email ")]),_:1})],32),o(w,{message:r.value,error:a.value},null,8,["message","error"])])}}}),re={key:0},ne=["src"],le={class:"mb-1 font-bold"},ie={key:0,class:"text-gray-500"},de=f({__name:"ProfileVerifyEmail",setup(s){const e=b();return(a,r)=>i(e).authUser?(p(),_("div",re,[o(G,{name:"fade"},{default:x(()=>[i(e).authUser.avatar?(p(),_("img",{key:0,src:i(e).authUser.avatar,class:"w-16 h-16 rounded-full lg:w-20 lg:h-20",alt:""},null,8,ne)):U("",!0)]),_:1}),t("ul",null,[t("li",le,h(i(e).authUser.name),1),t("li",null,"Email: "+h(i(e).authUser.email),1),i(e).authUser.emailVerified?(p(),_("li",ie," Emailed Verified ")):U("",!0)]),i(e).authUser.emailVerified?U("",!0):(p(),C(oe,{key:0,class:"mt-4"}))])):U("",!0)}}),ue={uploadFile(s){return I.post(s.endpoint,s.file)}},ce=f({name:"FileUpload",props:{fileTypes:{type:Array,default:null},endpoint:{type:String,required:!0},label:{type:String,default:""}},components:{AppBtn:q,AppFlashMessage:w},data(){return{file:null,message:null,error:null}},methods:{clearMessage(){this.error=null,this.message=null},fileChange(s){this.clearMessage(),this.file=s.target.files[0]},uploadFile(){const s={},e=new FormData;e.append("file",this.file),s.file=e,s.endpoint=this.endpoint,this.clearMessage(),ue.uploadFile(s).then(()=>{this.message="File uploaded.",this.$emit("fileUploaded")}).catch(a=>this.error=V())}}}),pe={class:"mb-4"},me={for:"file",class:"sr-only"},_e=["accept"];function fe(s,e,a,r,n,l){const c=q,m=w;return p(),_("form",{onSubmit:e[1]||(e[1]=S((...d)=>s.uploadFile&&s.uploadFile(...d),["prevent"]))},[t("div",pe,[t("label",me,h(s.label),1),t("input",{type:"file",accept:s.fileTypes.toString(),onChange:e[0]||(e[0]=(...d)=>s.fileChange&&s.fileChange(...d)),id:"file"},null,40,_e)]),o(c,{text:"Upload"}),o(m,{message:s.message,error:s.error},null,8,["message","error"])],32)}const ge=M(ce,[["render",fe]]),he={},ve={class:"hidden sm:block"},be=t("div",{class:"py-8"},[t("div",{class:"border-t border-gray-200"})],-1),we=[be];function Ue(s,e){return p(),_("div",ve,we)}const y=M(he,[["render",Ue]]),ye={class:"p-4"},$e={class:"text-lg font-medium text-gray-900"},Ve={class:"mt-1 text-sm text-gray-600"},$=f({__name:"SectionInfo",props:{title:{},description:{}},setup(s){return(e,a)=>(p(),_("div",ye,[t("h3",$e,h(e.title),1),t("p",Ve,h(e.description),1)]))}}),xe={class:"p-0 xl:px-0"},Se={class:"max-w-7xl mx-auto py-5 sm:px-5 lg:px-5"},Pe={class:"md:grid md:grid-cols-3 md:gap-6"},Fe={class:"md:grid md:grid-cols-3 md:gap-6"},Ae={class:"md:grid md:grid-cols-3 md:gap-6"},ke={class:"md:grid md:grid-cols-3 md:gap-6"},Qe=f({__name:"profile",setup(s){const e=b(),a=()=>{e.getAuthUser()};return(r,n)=>(p(),_("div",xe,[t("div",Se,[t("div",Pe,[o($,{title:"Información de su cuenta",description:"Actualice la información de perfil y la dirección de correo electrónico de su cuenta."}),o(O,{class:"p-5 bg-base-200 border rounded shadow col-span-2"}),o(y)]),t("div",Fe,[o($,{title:"Actualizar contraseña",description:"Asegúrese de que su cuenta esté usando una contraseña larga y aleatoria para mantenerse seguro."}),o(te,{class:"p-5 bg-base-200 border rounded shadow col-span-2"}),o(y)]),t("div",Ae,[o($,{title:"Verificación de correo",description:"Asegúrese de que su correo está correctamente configurado para los envios de mensajes de notificaciones."}),o(de,{class:"p-5 bg-base-200 border rounded shadow col-span-2"}),o(y)]),t("div",ke,[o($,{title:"Suba su Avatar",description:"Suba el avatar que desea que aparezca en su perfil."}),o(ge,{label:"Upload Avatar",fileTypes:["image/*"],endpoint:"/api/users/auth/avatar",onFileUploaded:a,class:"p-5 bg-base-200 border rounded shadow col-span-2"}),o(y)])])]))}});export{Qe as default};
