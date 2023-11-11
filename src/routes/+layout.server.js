
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {


    console.log('------------------------run-----------------------')

if(locals.pb.authStore.baseToken){

   return{
    loggedIn:true
   }
}
else{

    return{
        loggedIn:false
    }
}
}