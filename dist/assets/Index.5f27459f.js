import{_ as v,o as i,c as m,p as y,i as h,g as w,l as A,d as n,b as e,w as a,f as F,F as b,q as k,r as Q,k as C,h as $}from"./index.cab202b7.js";import{_ as T}from"./TableActionMenu.79af7d9e.js";import{b as B}from"./BodyHelpers.3f8f51e2.js";const K={name:"CardFAQ"},q={class:"w-full relative flex flex-col p-8 h-[180px] border-2 border-gray-200"},N=y('<h1 class="base-title-2">Question ?</h1><p class="mt-2 text-xl">Answer</p><div class="w-[30px] text-white cursor-pointer flex justify-center items-center absolute right-12 h-[30px] bg-blue-500"><i class="far fa-pencil-alt"></i></div><div class="w-[30px] text-white cursor-pointer flex justify-center items-center absolute right-2 h-[30px] bg-red-500"><i class="fas fa-trash"></i></div>',4),V=[N];function j(f,s,c,r,o,t){return i(),m("div",q,V)}const M=v(K,[["render",j]]),R={__name:"FAQTable",setup(f){const s=h(),c=w();function r(){c.dispatch("data-resources/listing",{actionUri:"post",options_request:B([{type:"faq"}])}).then(t=>{t.code===200&&console.log(t.data)}).catch(t=>{console.log(t)})}function o(){s.push({name:"FAQ.create"}).catch(()=>{})}return A(()=>{r()}),(t,l)=>{const _=n("a-input-search"),u=n("a-button"),p=T,d=M,x=n("a-col"),g=n("a-row");return i(),m(b,null,[e(p,null,{searchTable:a(()=>[e(_)]),actionButton:a(()=>[e(u,{type:"primary",class:"base-color-theme",onClick:o},{default:a(()=>[F(" create new ")]),_:1})]),_:1}),e(g,{gutter:[8,8]},{default:a(()=>[(i(),m(b,null,k(6,S=>e(x,{sm:24,md:8,lg:8},{default:a(()=>[e(d)]),_:1})),64))]),_:1})],64)}}},I={__name:"Index",setup(f){const s=$(),c=h(),r=s.meta.tab,o=Q(r);function t(l){l===1&&c.push({name:"FAQ.index"}).catch(()=>{})}return(l,_)=>{const u=n("a-tab-pane"),p=n("a-tabs");return i(),C(p,{class:"base-table-main",activeKey:o.value,"onUpdate:activeKey":_[0]||(_[0]=d=>o.value=d),"tab-click":t(o.value)},{default:a(()=>[e(u,{key:"1",tab:"FAQ"},{default:a(()=>[e(R)]),_:1})]),_:1},8,["activeKey","tab-click"])}}};export{I as default};
