import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export const POST=async({locals})=> {

    await locals.pb.authStore.clear()

    throw redirect(303,'/login')
}