import{Z as o}from"./index.208a8043.js";import{P as t}from"./LocalStorage.8b0fb558.js";const a=o("categories-store",{state:()=>({categories:t.getItem("categories")||[]}),getters:{getCategories:e=>e.categories},actions:{storageCategories(){t.set("categories",this.categories)},setCategories(e){this.categories=e,this.storageCategories()},addCategory(e){this.categories.push(e),this.storageCategories()},removeCategorie(e){this.categories=this.categories.filter(s=>s!==e),this.storageCategories()}}});export{a as u};