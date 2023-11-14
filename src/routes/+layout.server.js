
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { productList } from '../lib';

const pb = new PocketBase('http://127.0.0.1:8090');

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {

if(locals.pb.authStore.baseToken){

    let allProducts=productList()

   return{
    loggedIn:true,
    product:allProducts
   }
}
else{

    return{
        loggedIn:false
    }
}
}