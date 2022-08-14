var j=Object.defineProperty;var P=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var R=(e,o,s)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,b=(e,o)=>{for(var s in o||(o={}))M.call(o,s)&&R(e,s,o[s]);if(P)for(var s of P(o))D.call(o,s)&&R(e,s,o[s]);return e};import{e as G,d as H,c as C}from"./QTable.6c6b921f.js";import{Q as J}from"./QPage.ebd6524e.js";import{T as K}from"./TotalComponent.355748b3.js";import{P as i}from"./LocalStorage.d239af3f.js";import{B as $,c as f,r as g,a0 as T,_ as E,C as y,L as z,F as p,D as W,E as X,J as S,K as F,G as Y}from"./index.e968d899.js";import{u as Z}from"./wallets-store.818e561c.js";import{u as x}from"./records-store.fb3b2e91.js";import{u as _}from"./categories-store.9debc468.js";import{u as ee}from"./operations-store.7e8d2398.js";import"./QBtn.3da46558.js";import"./QSpinner.726448ff.js";import"./use-dark.40b6f50c.js";import"./selection.2aecf172.js";import"./format.3e32b8d9.js";import"./QCard.ef500d18.js";const oe=$({name:"TotalTableComponent",props:{totalColumns:{type:Array,default:()=>[]},totalRows:{type:Array}},setup(e){const o=f(()=>e.totalColumns.map(r=>({name:r.toLowerCase(),label:r,align:"right",field:r.toLowerCase()}))),s=f(()=>e.totalRows),d=g({page:1,rowsPerPage:i.getItem("totalTableRowsPerPage")||5});return T(()=>{var r;i.set("totalTableRowsPerPage",(r=d.value)==null?void 0:r.rowsPerPage)}),{columns:o,rows:s,initialPagination:d}}}),te={class:"q-pa-md full-width"};function le(e,o,s,d,r,c){return y(),z("div",te,[p(G,{rows:e.rows,columns:e.columns,"row-key":"value",pagination:e.initialPagination,"onUpdate:pagination":o[0]||(o[0]=m=>e.initialPagination=m),"no-data-label":"No records found"},null,8,["rows","columns","pagination"])])}var se=E(oe,[["render",le]]);const ae=$({name:"WalletsTotal",components:{TotalComponent:K,TotalTableComponent:se},setup(){const e=Z(),o=x(),s=_(),d=ee(),r=g(!1),c=g(i.getItem("walletsToFilter")||[]),m=g(i.getItem("categoriesToFilter")||[]),w=g(i.getItem("operationsToFilter")||[]),n=e.getWallets,B=s.getCategories,k=d.getOperations,h=f(()=>Array.from(new Set(o.getRecords.map(t=>t.date.slice(0,7))))),v=g(i.getItem("monthsToFilter")||[h.value[0]]);T(()=>i.set("walletsToFilter",c.value||[])),T(()=>i.set("categoriesToFilter",m.value||[])),T(()=>i.set("operationsToFilter",w.value||[])),T(()=>i.set("monthsToFilter",v.value));const q=f(()=>{var t;return["Month",...m.value||[],...((t=w.value)==null?void 0:t.map(a=>a.label))||[]]}),L=t=>{const a=c.value.map(l=>l.label);for(let l=0;l<t.money.length;l++)if(t.money[l].expense&&a.includes(t.money[l].wallet))return!0;return!1},U=(t,a)=>{var l;return((l=t.money.find(u=>u.wallet===a))==null?void 0:l.expense)||0},V=t=>c.value.reduce((a,l)=>a+=U(t,l.label),0),I=f(()=>o.getRecords.filter(t=>v.value.includes(t.date.slice(0,7))&&L(t))),Q=t=>m.value.map(a=>({[a.toLowerCase()]:t.filter(l=>l.operation.category===a).reduce((l,u)=>l+=V(u),0)})),A=t=>w.value.map(a=>({[a.label.toLowerCase()]:t.filter(l=>l.operation.label===a.label).reduce((l,u)=>l+=V(u),0)})),N=t=>{const a=I.value.filter(l=>l.date.slice(0,7)===t);return[{month:t},...Q(a),...A(a)].reduce((l,u)=>l=b(b({},l),u),{})},O=f(()=>v.value.map(t=>N(t)));return{walletsToFilter:c,wallets:n,categoriesToFilter:m,categories:B,operationsToFilter:w,operations:k,columns:q,rows:O,monthsToFilter:v,months:h,showWallets:r}}}),ne={class:"row full-width justify-end q-px-md"},re={class:"row q-px-md"},ie={class:"row justify-center items-start q-gutter-md q-px-md"},me={class:"row full-width"};function ue(e,o,s,d,r,c){const m=S("TotalComponent"),w=S("TotalTableComponent");return y(),W(J,{class:"column items-start justify-start"},{default:X(()=>[F("div",ne,[p(H,{modelValue:e.showWallets,"onUpdate:modelValue":o[0]||(o[0]=n=>e.showWallets=n),label:"Show Wallets",color:"positive"},null,8,["modelValue"])]),F("div",re,[e.showWallets?(y(),W(m,{key:0,class:"q-mb-md"})):Y("",!0)]),F("div",ie,[p(C,{outlined:"",modelValue:e.walletsToFilter,"onUpdate:modelValue":o[1]||(o[1]=n=>e.walletsToFilter=n),multiple:"",options:e.wallets,label:"Filter Wallets",class:"col",style:{"min-width":"150px"}},null,8,["modelValue","options"]),p(C,{outlined:"",modelValue:e.monthsToFilter,"onUpdate:modelValue":o[2]||(o[2]=n=>e.monthsToFilter=n),multiple:"",options:e.months,label:"Months",class:"col",style:{"min-width":"150px"}},null,8,["modelValue","options"]),p(C,{outlined:"",modelValue:e.categoriesToFilter,"onUpdate:modelValue":o[3]||(o[3]=n=>e.categoriesToFilter=n),multiple:"",options:e.categories,label:"Filter Categories",class:"col",style:{"min-width":"150px"}},null,8,["modelValue","options"]),p(C,{outlined:"",modelValue:e.operationsToFilter,"onUpdate:modelValue":o[4]||(o[4]=n=>e.operationsToFilter=n),multiple:"",options:e.operations,label:"Filter Operations",class:"col",style:{"min-width":"150px"}},null,8,["modelValue","options"])]),F("div",me,[p(w,{totalColumns:e.columns,totalRows:e.rows},null,8,["totalColumns","totalRows"])])]),_:1})}var We=E(ae,[["render",ue]]);export{We as default};