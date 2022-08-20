import{Q as V}from"./QPage.59fa2915.js";import{a as u}from"./QBtn.ff23d35c.js";import{Q,a as b,C as h,b as N,c}from"./QTr.ff1b3439.js";import{a as _,Q as $}from"./QCard.570fedba.js";import{Q as P,d as T,e as A}from"./QTable.e0927851.js";import{B as f,r as m,_ as g,n as S,C as w,L as k,F as a,E as o,al as B,v as y,a0 as O,H as p,I as v,K as R,D as U,J as C}from"./index.66094083.js";import{u as D}from"./wallets-store.49ae660f.js";import{P as W}from"./LocalStorage.43f5bae5.js";import"./QSpinner.db282beb.js";import"./use-file-dom-props.55353ec7.js";import"./use-dark.3a898bfd.js";import"./selection.9b47585d.js";import"./format.3e32b8d9.js";const q=f({name:"WalletAddingComponent",setup(){const l=D(),t=m(),s=m(!1),i=m("");async function r(){var e,n;i.value="",s.value=!0,await S(),(n=(e=t.value)==null?void 0:e.$el)==null||n.focus()}function d(){var e;i.value.length<3||(l.saveWallet(i.value),i.value="",(e=t.value)==null||e.resetValidation(),s.value=!1)}return{openAddWalletDialog:r,addDialogOpened:s,saveWallet:d,walletName:i,inputWalletNameRef:t}}}),H={class:"q-px-md full-width"};function K(l,t,s,i,r,d){return w(),k("div",H,[a(u,{color:"positive",icon:"add",glossy:"",label:"Add Wallet",onClick:l.openAddWalletDialog},null,8,["onClick"]),a(P,{modelValue:l.addDialogOpened,"onUpdate:modelValue":t[1]||(t[1]=e=>l.addDialogOpened=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:o(()=>[a(_,null,{default:o(()=>[a($,{class:"row items-center",style:{width:"250px"}},{default:o(()=>[a(Q,{ref:"inputWalletNameRef",outlined:"",modelValue:l.walletName,"onUpdate:modelValue":t[0]||(t[0]=e=>l.walletName=e),label:"Wallet name",class:"col",rules:[e=>e.length>2||"Please use minimum 3 characters"],onKeyup:B(l.saveWallet,["enter"])},null,8,["modelValue","rules","onKeyup"])]),_:1}),a(b,{align:"right"},{default:o(()=>[y(a(u,{flat:"",label:"Cancel",color:"primary"},null,512),[[h]]),a(u,{flat:"",label:"Save wallet",color:"primary",onClick:l.saveWallet},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var E=g(q,[["render",K]]);const I=[{name:"label",required:!0,label:"Name",align:"left",field:l=>l.label,sortable:!0},{name:"hide",label:"Hide in records",align:"left",field:l=>l.hide},{name:"delete",label:"Delete",align:"center",field:"delete"}],F=f({name:"WalletsTableComponent",setup(){const l=m(!1),t=m(),s=D(),i=()=>{s.storageWallet()},r=n=>{t.value=n,l.value=!0},d=()=>{t.value&&s.removeWallet(t.value),l.value=!1},e=m({rowsPerPage:W.getItem("walletsRowsPerPage")||5});return O(()=>{var n;W.set("walletsRowsPerPage",(n=e.value)==null?void 0:n.rowsPerPage)}),{confirmDeleteDialogOpened:l,walletsStore:s,columns:I,changedHide:i,walletToRemove:t,deleteWallet:r,deleteWalletConfirmed:d,initialPagination:e}}}),J={class:"q-pa-md full-width"},L=p(" Do you really want to delete wallet "),Y=R("br",null,null,-1);function j(l,t,s,i,r,d){return w(),k("div",J,[a(A,{title:"Wallets",rows:l.walletsStore.getWallets,columns:l.columns,"row-key":"value",pagination:l.initialPagination,"onUpdate:pagination":t[0]||(t[0]=e=>l.initialPagination=e),"no-data-label":"No wallets found"},{body:o(e=>[a(N,{props:e},{default:o(()=>[a(c,{key:"label",props:e},{default:o(()=>[p(v(e.row.label),1)]),_:2},1032,["props"]),a(c,{key:"hide",props:e},{default:o(()=>[a(T,{modelValue:e.row.hide,"onUpdate:modelValue":[n=>e.row.hide=n,l.changedHide],color:"positive"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),a(c,{key:"delete",props:e},{default:o(()=>[a(u,{flat:"",round:"",color:"negative",icon:"delete",onClick:n=>l.deleteWallet(e.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"]),a(P,{modelValue:l.confirmDeleteDialogOpened,"onUpdate:modelValue":t[1]||(t[1]=e=>l.confirmDeleteDialogOpened=e),"transition-show":"scale","transition-hide":"scale"},{default:o(()=>[a(_,{class:"bg-negative text-white"},{default:o(()=>[a($,{class:"row text-center text-h6"},{default:o(()=>{var e;return[L,Y,p('"'+v((e=l.walletToRemove)==null?void 0:e.label)+'"? ',1)]}),_:1}),a(b,{align:"right",class:"bg-white"},{default:o(()=>[y(a(u,{flat:"",label:"No",color:"secondary"},null,512),[[h]]),a(u,{flat:"",label:"Yes",color:"negative",onClick:l.deleteWalletConfirmed},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var z=g(F,[["render",j]]);const G=f({name:"WalletsPage",components:{WalletAddingComponent:E,WalletsTableComponent:z},setup(){return{}}});function M(l,t,s,i,r,d){const e=C("WalletAddingComponent"),n=C("WalletsTableComponent");return w(),U(V,{class:"col full-width"},{default:o(()=>[a(e,{class:"q-mt-md"}),a(n)]),_:1})}var ue=g(G,[["render",M]]);export{ue as default};