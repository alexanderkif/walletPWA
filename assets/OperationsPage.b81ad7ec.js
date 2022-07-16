import{Q as H}from"./QPage.b45d984f.js";import{a as m}from"./QBtn.ecec122a.js";import{c as N,d as G,e as O,Q as w,C as b,g as J,h as y,i as Y}from"./QTable.0c38423f.js";import{a as h,Q as V}from"./QCard.4cf5fc27.js";import{B as D,r as i,c as j,a0 as R,_ as P,n as _,C as k,L as B,F as o,E as l,K as U,al as A,v as $,H as f,I as C,D as z,J as S}from"./index.f4c1be73.js";import{u as M}from"./categories-store.3dec9e18.js";import{u as F}from"./operations-store.9cc1182f.js";import{P as T}from"./LocalStorage.595597f0.js";import"./render.c1c77f5d.js";import"./QChip.ab357f60.js";import"./use-dark.b07efff4.js";import"./format.3e32b8d9.js";import"./selection.e8a77840.js";const W=D({name:"OperationAddingComponent",setup(){const a=F(),t=M(),s=i(),u=i(),p=i(!1),d=i(""),e=i(""),r=i(""),g=i(),Q=j(()=>[...t.getCategories,"Add category"]),v=i(!1);R(async()=>{var n,c;r.value==="Add category"&&(v.value=!0,await _(),(c=(n=u.value)==null?void 0:n.$el)==null||c.focus(),r.value="")});async function K(){var n,c;d.value="",p.value=!0,await _(),(c=(n=s.value)==null?void 0:n.$el)==null||c.focus()}function q(){var n;d.value.length<3||(a.addOperation({label:d.value,category:r.value}),d.value="",(n=s.value)==null||n.resetValidation(),p.value=!1)}function L(){var n;e.value.length<3||(t.addCategory(e.value),r.value=e.value,e.value="",(n=u.value)==null||n.resetValidation(),v.value=!1)}return{openAddOperationDialog:K,addDialogOpened:p,saveOperation:q,operationName:d,inputOperationNameRef:s,category:r,categories:g,filterFn:function(n,c){if(n===""){c(()=>{g.value=Q.value});return}c(()=>{const E=n.toLowerCase();g.value=Q.value.filter(I=>I.toLowerCase().indexOf(E)>-1)})},categoryName:e,addCategoryDialogOpened:v,inputCategoryRef:u,saveCategory:L}}}),X={class:"q-px-md full-width"},Z={class:"row full-width"};function x(a,t,s,u,p,d){return k(),B("div",X,[o(m,{color:"positive",icon:"add",glossy:"",label:"Add Operation",onClick:a.openAddOperationDialog},null,8,["onClick"]),o(w,{modelValue:a.addDialogOpened,"onUpdate:modelValue":t[2]||(t[2]=e=>a.addDialogOpened=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[o(h,null,{default:l(()=>[o(V,{class:"row items-center",style:{width:"250px"}},{default:l(()=>[U("div",Z,[o(N,{ref:"inputOperationNameRef",outlined:"",modelValue:a.operationName,"onUpdate:modelValue":t[0]||(t[0]=e=>a.operationName=e),label:"Operation name",class:"col",rules:[e=>e.length>2||"Please use minimum 3 characters"],onKeyup:A(a.saveOperation,["enter"])},null,8,["modelValue","rules","onKeyup"])]),o(G,{outlined:"",class:"q-mt-sm full-width",modelValue:a.category,"onUpdate:modelValue":t[1]||(t[1]=e=>a.category=e),options:a.categories,label:"Category","use-input":"","input-debounce":"0",onFilter:a.filterFn,style:{width:"250px"}},null,8,["modelValue","options","onFilter"])]),_:1}),o(O,{align:"right"},{default:l(()=>[$(o(m,{flat:"",label:"Cancel",color:"primary"},null,512),[[b]]),o(m,{flat:"",label:"Save Operation",color:"primary",onClick:a.saveOperation},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(w,{modelValue:a.addCategoryDialogOpened,"onUpdate:modelValue":t[4]||(t[4]=e=>a.addCategoryDialogOpened=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[o(h,null,{default:l(()=>[o(V,{class:"row items-center",style:{width:"250px"}},{default:l(()=>[o(N,{ref:"inputCategoryRef",outlined:"",modelValue:a.categoryName,"onUpdate:modelValue":t[3]||(t[3]=e=>a.categoryName=e),label:"Gategory name",class:"col",rules:[e=>e.length>2||"Please use minimum 3 characters"],onKeyup:A(a.saveCategory,["enter"])},null,8,["modelValue","rules","onKeyup"])]),_:1}),o(O,{align:"right"},{default:l(()=>[$(o(m,{flat:"",label:"Cancel",color:"primary"},null,512),[[b]]),o(m,{flat:"",label:"Save gategory",color:"primary",onClick:a.saveCategory},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ee=P(W,[["render",x]]);const ae=[{name:"label",required:!0,label:"Label",align:"left",field:a=>a.label,sortable:!0},{name:"category",label:"Category",align:"left",field:a=>a.category},{name:"delete",label:"Delete",align:"center",field:"delete"}],oe=D({name:"OperationsTableComponent",setup(){const a=i(!1),t=i(),s=F(),u=()=>{s.storageOperations()},p=r=>{t.value=r,a.value=!0},d=()=>{t.value&&s.removeOperation(t.value),a.value=!1},e=i({sortBy:"date",descending:!0,page:1,rowsPerPage:T.getItem("operationsRowsPerPage")||5});return R(()=>{var r;T.set("operationsRowsPerPage",(r=e.value)==null?void 0:r.rowsPerPage)}),{confirmDeleteDialogOpened:a,operationsStore:s,columns:ae,changedHide:u,operationToRemove:t,deleteOperation:p,deleteOperationConfirmed:d,initialPagination:e}}}),te={class:"q-pa-md full-width"},le=f(" Do you really want to delete Operation "),ne=U("br",null,null,-1);function re(a,t,s,u,p,d){return k(),B("div",te,[o(Y,{title:"Operations",rows:a.operationsStore.getOperations,columns:a.columns,"row-key":"value",pagination:a.initialPagination,"onUpdate:pagination":t[0]||(t[0]=e=>a.initialPagination=e),"no-data-label":"No Operations found"},{body:l(e=>[o(J,{props:e},{default:l(()=>[o(y,{key:"label",props:e},{default:l(()=>[f(C(e.row.label),1)]),_:2},1032,["props"]),o(y,{key:"category",props:e},{default:l(()=>[f(C(e.row.category),1)]),_:2},1032,["props"]),o(y,{key:"delete",props:e},{default:l(()=>[o(m,{flat:"",round:"",color:"negative",icon:"delete",onClick:r=>a.deleteOperation(e.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"]),o(w,{modelValue:a.confirmDeleteDialogOpened,"onUpdate:modelValue":t[1]||(t[1]=e=>a.confirmDeleteDialogOpened=e),"transition-show":"scale","transition-hide":"scale"},{default:l(()=>[o(h,{class:"bg-negative text-white"},{default:l(()=>[o(V,{class:"row text-center text-h6"},{default:l(()=>{var e;return[le,ne,f('"'+C((e=a.operationToRemove)==null?void 0:e.label)+'"? ',1)]}),_:1}),o(O,{align:"right",class:"bg-white"},{default:l(()=>[$(o(m,{flat:"",label:"No",color:"secondary"},null,512),[[b]]),o(m,{flat:"",label:"Yes",color:"negative",onClick:a.deleteOperationConfirmed},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ie=P(oe,[["render",re]]);const se=D({name:"OperationsPage",components:{OperationAddingComponent:ee,OperationsTableComponent:ie},setup(){return{}}});function de(a,t,s,u,p,d){const e=S("OperationAddingComponent"),r=S("OperationsTableComponent");return k(),z(H,{class:"col full-width"},{default:l(()=>[o(e,{class:"q-mt-md"}),o(r)]),_:1})}var $e=P(se,[["render",de]]);export{$e as default};
