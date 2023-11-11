
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

// const pb = new PocketBase('http://127.0.0.1:8090');

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {

    // await pb.admins.authWithPassword('gokularise@gmail.com','gokulpocketbase')

    const records = await locals.pb.collection('products').getFullList({
        sort: '-created',
    });


    console.log('Image===========',records)

if(locals.pb.authStore.baseToken){
    return{
        profile:locals.pb.authStore.baseModel,
        products:[...records]
    }
}
else{
    throw redirect(303,'/login')
}
}