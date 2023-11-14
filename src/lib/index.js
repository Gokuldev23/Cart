import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('https://qbtrix.pockethost.io/');



export async function  productList(){
 let  record= await pb.collection('products').getFullList({
        sort:'-created'
    })
   return record
}



export async function  singleProduct(id){
 let  record= await pb.collection('products').getOne(id)

 return record
}

export async function  singleCart(id){
    let  record= await pb.collection('cart').getOne(id,{
        expand:'product'
    })
    console.log('====Record======',record)
    return record
}



export async function  userCartItems(id,currentUser='m7uvkry0w18thd7'){
 let  record= await pb.collection('cart').getFullList({
    sort:'-created',
    expand:'user'
 })
 let result=record.filter(item=>item.user==currentUser)

 return result
}



