import{Z as s}from"./index.66094083.js";import{P as o}from"./LocalStorage.43f5bae5.js";const i=s("operations-store",{state:()=>({operations:o.getItem("operations")||[]}),getters:{getOperations:t=>t.operations},actions:{storageOperations(){o.set("operations",this.operations)},setOperations(t){this.operations=t,this.storageOperations()},addOperation(t){this.operations.push(t),this.storageOperations()},removeOperation(t){this.operations=this.operations.filter(e=>e.label!==t.label||e.category!==t.category),this.storageOperations()}}});export{i as u};