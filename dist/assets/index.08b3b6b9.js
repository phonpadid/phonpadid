import{_ as V}from"./TableActionMenu.77161f26.js";import{M as F}from"./matchResultUaseCase.357a0143.js";import{y as K,c as u,o as t,d as e,f as i,w as n,j as a,h as s,F as r,z as c,k as l,A as R,e as _,l as T,u as S,b as $,q as w}from"./index.5d8a84cb.js";import"./message.f33fb752.js";const z={class:"base-menu-table"},D={key:5,class:"table-action"},E=["onClick"],U=_("i",{class:"far fa-pencil"},null,-1),j=[U],q={class:"action-item-table bg-red-500"},Y=_("a",{href:"#"},[_("i",{class:"fas fa-trash-alt"})],-1),G={__name:"matchResultTable",setup(A){const{loadAllMatchResult:h,onCreate:f,onDelete:x,onEdit:d,matchesResult:m}=F,p=[{title:"\u0EA5\u0EB3\u0E94\u0EB1\u0E9A",dataIndex:"index"},{title:"\u0EC1\u0EA1\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0EC1\u0E82\u0EC8\u0E87\u0E82\u0EB1\u0E99",dataIndex:"match"},{title:"\u0E84\u0EB0\u0EC1\u0E99\u0E99\u0E97\u0EB5\u0EA1A",dataIndex:"team_a_score"},{title:"\u0E84\u0EB0\u0EC1\u0E99\u0E99\u0E97\u0EB5\u0EA1B",dataIndex:"team_b_score"},{title:"Action",dataIndex:"action"}];return K(()=>{h()}),(k,g)=>{const y=u("a-button"),v=V,C=u("a-popconfirm"),B=u("a-table");return t(),e("div",z,[i(v,null,{actionButton:n(()=>[i(y,{class:"bg-blue-500 font-light",type:"primary",onClick:a(f)},{default:n(()=>[s(" \u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0E82\u0ECD\u0EC9\u0EA1\u0EB9\u0E99 ")]),_:1},8,["onClick"])]),_:1}),i(B,{class:"base-table",columns:p,"data-source":a(m),pagination:{pageSize:10}},{bodyCell:n(({column:o,text:I,record:b,index:M})=>[o.dataIndex==="index"?(t(),e(r,{key:0},[s(c(M+1),1)],64)):l("",!0),o.dataIndex==="match"?(t(),e(r,{key:1},[s(c(b.match.team_a)+" VS ",1)],64)):l("",!0),o.dataIndex==="match"?(t(),e(r,{key:2},[s(c(b.match.team_b),1)],64)):l("",!0),o.dataIndex==="created_at"?(t(),e(r,{key:3},[s(c(a(R).dateFormat(I)),1)],64)):l("",!0),o.dataIndex==="updated_at"?(t(),e(r,{key:4},[s(c(a(R).dateFormat(I)),1)],64)):l("",!0),o.dataIndex==="action"?(t(),e("div",D,[_("div",{class:"action-item-table bg-gray-500",onClick:N=>a(d)(b.id)},j,8,E),_("div",q,[i(C,{title:"\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EA5\u0EBB\u0EBB\u0EBB\u0E9A\u0E9A\u0ECD\u0EC8?","ok-text":"Yes","cancel-text":"No",onConfirm:N=>a(x)(b.id)},{default:n(()=>[Y]),_:2},1032,["onConfirm"])])])):l("",!0)]),default:n(()=>[_("pre",null,c(a(m)),1)]),_:1},8,["data-source"])])}}},P={__name:"index",setup(A){const h=T(),f=S(),x=h.meta.tab,d=$(x);function m(p){p===1&&f.push({name:"matchresult.index"}).catch(()=>{})}return(p,k)=>{const g=G,y=u("a-tab-pane"),v=u("a-tabs");return t(),w(v,{class:"base-table-main",activeKey:d.value,"onUpdate:activeKey":k[0]||(k[0]=C=>d.value=C),"tab-click":m(d.value)},{default:n(()=>[i(y,{key:"1",tab:"\u0E88\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0EC1\u0EA1\u0EB1\u0E94Result"},{default:n(()=>[i(g)]),_:1})]),_:1},8,["activeKey","tab-click"])}}};export{P as default};
