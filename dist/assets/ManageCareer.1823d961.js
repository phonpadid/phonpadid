import{_ as R}from"./UploadImage.24bd5264.js";import{N as f}from"./validate.f5f1e6c0.js";import{B as I,r as _,a as J,o as V,c as D,b as n,w as i,e as u,f as g,g as E,h as T,i as z,d as s}from"./index.2eb618a3.js";import{n as L,a as M}from"./message.fe91cb39.js";function W(){I.call(this),this.id=null,this.name=null,this.description=null,this.type="career",this.image_logo=null,this.fromJSON=l=>{this.id=l.id,this.name=l.name,this.description=l.description,this.type=l.type,this.image_logo=l.image_logo}}const $={class:"base-form"},q=u("span",null,[u("i",{class:"far fa-long-arrow-left"})],-1),P={__name:"ManageCareer",setup(l){const h=E();T();const d=z(),r=_(!1),b={xl:4,md:6,xs:8},v={xl:12,md:14,xs:16},p=_(null),o=J(new W),x=e=>{p.value=e};function y(e){console.log(e[0].originFileObj,5555),o.image_logo=e[0].originFileObj}const C=()=>{p.value.validate().then(e=>{e&&w()}).catch(e=>{})};function w(){let e,t;e="variable",t="post";const a=JSON.parse(JSON.stringify(o));a.image_logo=o.image_logo,o.image_logo instanceof File||delete a.image_logo;const c={method:"post",_method:t,actionUri:e,formData:!0,...a};console.log(c,"body"),S(c)}function S(e){r.value=!0,h.dispatch("data-resources/manage",e).then(t=>{t.code===200&&(L({title:"Create Data Successfully",description:"data created !!",position:"topRight"}),r.value=!1,d.push({name:"activity.index"}).catch(()=>{}))}).catch(t=>{let a=t.items;M({title:"something went wrong",description:a}),r.value=!1}).finally(()=>{r.value=!1})}function N(){d.push({name:"career.index"}).catch(()=>{})}const k={name:[f("name")],description:[f("description")]};return(e,t)=>{const a=s("a-form-item"),c=R,B=s("a-input"),O=s("a-textarea"),U=s("a-button"),F=s("a-form");return V(),D("div",$,[n(F,{class:"mt-8",form:o,ref:x,model:o,rules:k,"label-col":b,"wrapper-col":v},{default:i(()=>[n(a,null,{default:i(()=>[u("h1",{onClick:N,class:"text-2xl tracking-wide font-black cursor-pointer text-blue-600"},[q,g(" Career ")])]),_:1}),n(a,{label:" "},{default:i(()=>[n(c,{"onUpdate:imageList":y,title:"image"})]),_:1}),n(a,{label:"name",name:"name"},{default:i(()=>[n(B,{value:o.name,"onUpdate:value":t[0]||(t[0]=m=>o.name=m),size:"large"},null,8,["value"])]),_:1}),n(a,{label:"description",name:"description"},{default:i(()=>[n(O,{value:o.description,"onUpdate:value":t[1]||(t[1]=m=>o.description=m),rows:6},null,8,["value"])]),_:1}),n(a,{label:" "},{default:i(()=>[n(U,{class:"bg-blue-500",type:"primary",onClick:C},{default:i(()=>[g("save change")]),_:1})]),_:1})]),_:1},8,["form","model"])])}}};export{P as default};
