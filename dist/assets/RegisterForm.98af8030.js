import{l as z}from"./JOINABLE.b8fa00f6.js";import{N as f}from"./validate.f5f1e6c0.js";import{B as U,r as h,a as E,c as O,b as s,w as l,d as n,o as V,e,u as w,f as x,g as j,h as A,i as F}from"./index.2eb618a3.js";import{n as I}from"./message.fe91cb39.js";const L="/assets/resgister.29a0be73.png";function P(){U.call(this),this.id=null,this.email=null,this.password=null,this.password_confirmation=null,this.fromJSON=i=>{this.id=i.id,this.email=i.email,this.password=i.password,this.password_confirmation=i.password_confirmation}}const T={class:"w-full h-screen"},D={class:"w-full flex flex-col justify-center items-center h-screen bg-blue-400"},W=["src"],q=e("div",{class:"w-full flex flex-col justify-center items-center"},[e("h1",{class:"text-4xl m-0 p-0 font-black text-white"},"Welcome to Joinable !!"),e("p",{class:"mt-4 text-white text-2xl text-justify"}," Lorem ipsum dolor sit amet. ")],-1),G={class:"w-full h-screen flex flex-col justify-center shadow pl-8 pr-8"},H={class:"w-[300px] h-[100px] text-4xl flex items-center justify-center"},K=["src"],M=e("div",{class:"w-full h-[40px] border-l-4 border-blue-700 flex mt-4 items-center"},[e("h2",{class:"base-title-1 ml-2 text-gray-600"},"Register To Joinable")],-1),Q=e("label",{for:"email"},"Email",-1),X=e("label",{for:"email"},"Password",-1),Y=e("label",{for:"email"},"Confirm Password",-1),Z=e("span",{class:"text-blue-500 cursor-pointer font-black"},"sign in",-1),oe={__name:"RegisterForm",setup(i){const g=j();A();const p=F(),v={xl:24,md:24,xs:24},_=h(null),r=h(!1),a=E(new P),b=o=>{_.value=o},y={email:[f("email")],password:[f("password")],password_confirmation:[f("password_confirmation")]},R=()=>{_.value.validate().then(o=>{o&&S()}).catch(o=>{})};function S(){let o,t;o="auth/register-company",t="post";const u=JSON.parse(JSON.stringify(a)),c={method:"post",_method:t,actionUri:o,formData:!1,...u};N(c)}function N(o){r.value=!0,g.dispatch("data-resources/manage",o).then(t=>{t.code===200&&(I({title:"Register Successfully",description:"Confirm Login !!",position:"topRight"}),r.value=!1,p.push({name:"login.index"}).catch(()=>{}))}).catch(t=>{t.items,r.value=!1}).finally(()=>{r.value=!1})}function C(){p.push({name:"login.index"}).catch(()=>{})}return(o,t)=>{const u=n("a-col"),c=n("a-input"),d=n("a-form-item"),k=n("a-button"),B=n("a-form"),J=n("a-row");return V(),O("div",T,[s(J,null,{default:l(()=>[s(u,{sm:24,md:16,lg:16},{default:l(()=>[e("div",D,[e("img",{class:"w-[400px] h-[400px]",src:w(L),alt:""},null,8,W),q])]),_:1}),s(u,{sm:24,md:8,lg:8},{default:l(()=>[e("div",G,[e("div",H,[e("img",{src:w(z),alt:""},null,8,K)]),M,s(B,{class:"pt-8",form:a,ref:b,model:a,rules:y,"wrapper-col":v},{default:l(()=>[s(d,{name:"email"},{default:l(()=>[Q,s(c,{value:a.email,"onUpdate:value":t[0]||(t[0]=m=>a.email=m),size:"large"},null,8,["value"])]),_:1}),s(d,{name:"password"},{default:l(()=>[X,s(c,{value:a.password,"onUpdate:value":t[1]||(t[1]=m=>a.password=m),size:"large"},null,8,["value"])]),_:1}),s(d,{name:"password_confirmation"},{default:l(()=>[Y,s(c,{value:a.password_confirmation,"onUpdate:value":t[2]||(t[2]=m=>a.password_confirmation=m),size:"large"},null,8,["value"])]),_:1}),s(d,null,{default:l(()=>[s(k,{loading:r.value,size:"large",type:"primary",class:"bg-blue-500 w-full",onClick:R},{default:l(()=>[x(" Register ")]),_:1},8,["loading"]),e("div",{class:"text-center mt-4"},[e("p",{onClick:C,class:"text-base"},[x("Already have an account ? "),Z])])]),_:1})]),_:1},8,["form","model"])])]),_:1})]),_:1})])}}};export{oe as default};
