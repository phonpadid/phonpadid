import{i as f,d as o,o as u,c as p,e as n,b as t,w as a,f as g,F as b,j as k,u as h,r as T,h as A}from"./index.79be026a.js";import{_ as w}from"./TableActionMenu.87fac05f.js";const C={class:"base-table-main"},K=n("a",{type:"link"},[n("i",{class:"fad fa-pencil-alt"})],-1),N=n("div",{class:"ant-divider ant-divider-vertical"},null,-1),I=n("a",{type:"link"},[n("i",{class:"far fa-trash"})],-1),B={__name:"TabTestTable",setup(v){const c=f(),l=[{title:"Name",dataIndex:"name",width:150},{title:"Age",dataIndex:"age",width:150},{title:"Address",dataIndex:"address"},{title:"Action",dataIndex:"Action"}],s=[...Array(100)].map((i,e)=>({key:e,name:`Edward King ${e}`,age:32,address:`London, Park Lane no. ${e}`}));function m(){c.push({name:"test.create"}).catch(()=>{})}return(i,e)=>{const r=o("a-input-search"),_=o("a-button"),d=w,x=o("a-table");return u(),p(b,null,[n("div",C,[t(d,null,{searchTable:a(()=>[t(r,{class:"w-full text-xs",placeholder:"input search text"})]),actionButton:a(()=>[t(_,{class:"bg-blue-500 font-light",type:"primary",onClick:m},{default:a(()=>[g(" Create New ")]),_:1})]),_:1})]),t(x,{columns:l,"data-source":h(s),pagination:{pageSize:50},scroll:{y:300}},{bodyCell:a(({column:y,text:$,record:E})=>[y.dataIndex==="Action"?(u(),p(b,{key:0},[K,N,I],64)):k("",!0)]),_:1},8,["data-source"])],64)}}},V={class:""},R={__name:"index",setup(v){const c=A();f();const l=c.meta.tab,s=T(l);function m(i){}return(i,e)=>{const r=o("a-tab-pane"),_=o("a-tabs");return u(),p("div",V,[t(_,{class:"base--table",activeKey:s.value,"onUpdate:activeKey":e[0]||(e[0]=d=>s.value=d),"tab-click":(s.value,void 0)},{default:a(()=>[t(r,{key:"1",tab:"Tab Title"},{default:a(()=>[t(h(B))]),_:1})]),_:1},8,["activeKey","tab-click"])])}}};export{R as default};
