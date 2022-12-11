import{B as G,g as W,h as A,r as m,a as H,k as ae,d as f,o as b,l as X,w as o,b as t,e as l,f as j,n as z,j as B,_ as le,m as oe,c as R,p as K,F as L,q as Q,t as q,s as ne,v as se,i as ie}from"./index.19f23562.js";import{_ as ce}from"./UploadImage.0959a536.js";import{N as ue}from"./validate.f5f1e6c0.js";function re(){G.call(this),this.id="",this.title="",this.body="",this.image_content=null,this.fromJSON=i=>{this.id=i.id,this.title=i.title,this.body=i.body,this.image_content=i.image_content}}const de={class:"w-full flex flex-col min-h-[300px]"},me=l("label",{for:""},"Post Title",-1),pe=l("label",{for:""},"Post Content",-1),fe={__name:"ModalAddPostContent",props:{visible:{type:Boolean,default:!1}},emits:["change","success"],setup(i,{emit:v}){const C=i,x=W();A();const w={xl:4,md:6,xs:8},$={xl:12,md:14,xs:16},h=m(!1),p=m(!1),y=m(null),r=H(new re),U=u=>{y.value=u};function c(u){r.image_content=u[0].originFileObj}function P(){let u,d;u="company-content",d="post";const I=JSON.parse(JSON.stringify(r));I.image_content=r.image_content,r.image_content instanceof File||delete I.image_logo;const g={method:"post",_method:d,actionUri:u,formData:!0,...I};S(g)}function S(u){p.value=!0,x.dispatch("data-resources/manage",u).then(d=>{d.code===200&&(z({title:"Create Data Successfully",description:"data created !!",position:"topRight"}),D(!1),v("success"),p.value=!1,router.push({name:"company.index"}).catch(()=>{}))}).catch(d=>{B({title:"Save failed",description:d.errors().join(`
`),position:"topRight"}),p.value=!1}).finally(()=>{p.value=!1,D(!1)})}function D(u){h.value=u,v("change",u)}return ae(()=>C.visible,u=>{h.value=u},{deep:!0}),(u,d)=>{const I=ce,g=f("a-form-item"),J=f("a-input"),O=f("QuillEditor"),M=f("a-button"),F=f("a-modal");return b(),X(g,{form:r,ref:U,model:r,"label-col":w,"wrapper-col":$},{default:o(()=>[t(F,{title:"Post Content",visible:h.value,width:920,footer:!1,onCancel:d[2]||(d[2]=k=>D(!1))},{default:o(()=>[l("div",de,[t(g,null,{default:o(()=>[t(I,{"onUpdate:imageList":c,title:"image"})]),_:1}),t(g,null,{default:o(()=>[me,t(J,{size:"large",value:r.title,"onUpdate:value":d[0]||(d[0]=k=>r.title=k)},null,8,["value"])]),_:1}),t(g,null,{default:o(()=>[pe,t(O,{content:r.body,"onUpdate:content":d[1]||(d[1]=k=>r.body=k),contentType:"text",theme:"snow"},null,8,["content"])]),_:1}),t(g,null,{default:o(()=>[t(M,{type:"primary",loading:p.value,class:"base-color-theme",onClick:P},{default:o(()=>[j(" save change ")]),_:1},8,["loading"])]),_:1})])]),_:1},8,["visible"])]),_:1},8,["form","model"])}}};function _e(){G.call(this),this.id="",this.name="",this.slogan="",this.image_profile=null,this.image_galleries=null,this.fromJSON=i=>{this.id=i.id,this.name=i.name,this.slogan=i.slogan,this.image_profile=i.image_profile,this.image_galleries=i.image_galleries}}const E=i=>(ne("data-v-8da15299"),i=i(),se(),i),ge={class:"choose-image"},ve={class:"show-image"},he=["src"],be={class:"w-full h-[200px]"},ye=["src"],Ce={class:"image-main-box"},xe={class:"group-image-slip"},we=["onClick","src"],Se=["onClick"],Ie=E(()=>l("i",{class:"fal fa-times-circle"},null,-1)),ke=[Ie],Re={class:"image-upload"},Ue=E(()=>l("div",{class:"image-box d-flex flex-column justify-center align-center"},[l("i",{class:"fal fa-plus"}),l("p",null,"gallery")],-1)),Ne=E(()=>l("i",{class:"fal fa-plus"},null,-1)),Te={class:"w-full mt-10 h-[200px]"},$e=["src"],De={class:"mt-2 font-bold"},Fe={class:"text-justify"},Pe={__name:"CompanyTable",setup(i){const v=W(),C=m();A();const x=m(!1),w={xl:4,md:6,xs:8},$={xl:18,md:18,xs:18},h=m([]),p=m([]),y=m(),r=m(),U=m(null);H(new _e);const c=m({}),P=m({}),S=m(!1),D=a=>{U.value=a};function u(a){const e={actionUri:`image/${a}`,method:"delete"};v.dispatch("data-resources/manage",e).then(s=>{s&&(z({title:"Delete Image Successfully",description:"data created !!",position:"topRight"}),F())}).catch(s=>{B({title:"Delete failed",description:s.errors().join(`
`),position:"topRight"})})}const d=()=>{U.value.validate().then(a=>{J()}).catch(a=>{})};function I(a){const e=a.target,_=e.files[0].type;if(["image/jpeg","image/png","image/jpg"].includes(_)){if(e.files&&e.files[0]){r.value=e.files[0];const T=new FileReader;T.onload=V=>{y.value=V.target.result},T.readAsDataURL(e.files[0])}}}function g(a){C.value=a.url;const e=a.target;let s=e.files.length,_=0;if(e.files)for(;s--;){const N=new FileReader;N.onload=T=>{p.value.push(T.target.result)},h.value.push(e.files[_]),N.readAsDataURL(e.files[_]),_++}}function J(){let a,e;a="company",e="post";const s=JSON.parse(JSON.stringify(c.value));s.image_profile=r.value,s.image_galleries=h.value;const _={method:"post",_method:e,actionUri:a,formData:!0,...s};O(_)}function O(a){S.value=!0,v.dispatch("data-resources/manage",a).then(e=>{e.code===200&&(c.image_profile=null,z({title:"Create Data Successfully",description:"data created !!",position:"topRight"}),S.value=!1,router.push({name:"company.index"}).catch(()=>{}))}).catch(e=>{B({title:"Save failed",description:e.errors().join(`
`),position:"topRight"}),S.value=!1}).finally(()=>{S.value=!1,F()})}const M={name:[ue("name")]};function F(){v.dispatch("data-resources/listing",{actionUri:"company"}).then(a=>{a.code===200&&(c.value=a.data,y.value=c.value.image_profile.url,p.value=c.value.image_galleries,C.value=c.value.image_galleries[0].url)}).catch(a=>{B({title:"fetch failed",description:a.errors().join(`
`),position:"topRight"}),S.value=!1})}function k(){v.dispatch("data-resources/listing",{actionUri:"company-content"}).then(a=>{a.code===200&&(P.value=a.data)}).catch(a=>{console.log(a)})}function Y(){x.value=!0}return oe(()=>{F(),k()}),(a,e)=>{const s=f("a-form-item"),_=f("a-input"),N=f("a-button"),T=f("a-divider"),V=f("a-form"),Z=fe;return b(),R("div",null,[t(V,{form:c.value,ref:D,model:c.value,rules:M,"label-col":w,"wrapper-col":$},{default:o(()=>[t(s,{label:" "},{default:o(()=>[l("div",ge,[l("div",ve,[j(" profile "),l("input",{onChange:I,type:"file",class:"input-file-image"},null,32),y.value?(b(),R("img",{key:0,src:y.value,alt:""},null,8,he)):K("",!0)])])]),_:1}),t(s,{label:"Company Name",name:"name"},{default:o(()=>[t(_,{size:"large",value:c.value.name,"onUpdate:value":e[0]||(e[0]=n=>c.value.name=n)},null,8,["value"])]),_:1}),t(s,{label:"Joinable Code",name:"code"},{default:o(()=>[t(_,{size:"large",value:c.value.joinable_code,"onUpdate:value":e[1]||(e[1]=n=>c.value.joinable_code=n)},null,8,["value"])]),_:1}),t(s,{label:"Slogan",name:"=slogan"},{default:o(()=>[t(_,{size:"large",value:c.value.slogan,"onUpdate:value":e[2]||(e[2]=n=>c.value.slogan=n)},null,8,["value"])]),_:1}),t(s,{label:" "},{default:o(()=>[l("div",be,[l("img",{class:"w-full h-full object-cover",src:C.value,alt:""},null,8,ye)])]),_:1}),t(s,{label:" "},{default:o(()=>[l("div",Ce,[l("div",xe,[(b(!0),R(L,null,Q(p.value,(n,ee)=>(b(),R("div",{class:"group-show-image",key:ee},[l("img",{onClick:te=>g(n),class:"hover-image",src:n.url||n,alt:""},null,8,we),l("div",{class:"icon-delete-image",onClick:te=>u(n.uuid)},ke,8,Se)]))),128)),l("div",Re,[l("input",{type:"file",onChange:e[3]||(e[3]=n=>g(n)),multiple:""},null,32),Ue])])])]),_:1}),t(s,{label:" "},{default:o(()=>[t(N,{class:"bg-blue-500",type:"primary",onClick:d},{default:o(()=>[j("save change")]),_:1})]),_:1}),t(s,{label:" "},{default:o(()=>[t(T,null,{default:o(()=>[j("Manage Post Content")]),_:1}),t(N,{onClick:Y,type:"primary",shape:"circle",class:"absolute z-10 base-color-theme right-0"},{default:o(()=>[Ne]),_:1}),(b(!0),R(L,null,Q(P.value,n=>(b(),R("div",{class:"relative flex flex-col w-full min-h-[300px]",key:n.id},[l("div",Te,[n.image_content?(b(),R("img",{key:0,class:"w-full h-full object-cover",src:n.image_content.url,alt:""},null,8,$e)):K("",!0)]),l("h3",De,q(n.title),1),l("p",Fe,q(n.body),1)]))),128))]),_:1})]),_:1},8,["form","model"]),t(Z,{onSuccess:k,visible:x.value,onChange:e[4]||(e[4]=n=>x.value=n)},null,8,["visible"])])}}},je=le(Pe,[["__scopeId","data-v-8da15299"]]),Me={__name:"Index",setup(i){const v=A(),C=ie(),x=v.meta.tab,w=m(x);function $(h){h===1&&C.push({name:"company.index"}).catch(()=>{})}return(h,p)=>{const y=f("a-tab-pane"),r=f("a-tabs");return b(),X(r,{class:"base-table-main",activeKey:w.value,"onUpdate:activeKey":p[0]||(p[0]=U=>w.value=U),"tab-click":$(w.value)},{default:o(()=>[t(y,{key:"1",tab:"Company Info"},{default:o(()=>[t(je)]),_:1})]),_:1},8,["activeKey","tab-click"])}}};export{Me as default};
