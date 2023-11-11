
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {

await pb.admins.authWithPassword('gokularise@gmail.com','gokulpocketbase')

if(locals.pb.authStore.baseToken){
   

    const res=await pb.collection('cart').getFullList({
        sort:'created',
        expand:'user'
    })

    const product=res.filter(pr=>pr.user===locals.pb.authStore.baseModel.id)
    // let product=record.

    return {product}
    console.log('----------Records----------',product)
}
return{
    empty:false
}

}

export const actions={

    minus: async({locals,request})=>{
        const formData = await request.formData();
        const form=Object.fromEntries([...formData])

        let data=JSON.parse(form.id)

        await pb.collection('cart').update(data.id,JSON.stringify({...data,quantity:data.quantity-=1}))
    },
    add: async({locals,request})=>{
        const formData = await request.formData();
        const form=Object.fromEntries([...formData])

        let data=JSON.parse(form.id)

        await pb.collection('cart').update(data.id,JSON.stringify({...data,quantity:data.quantity+=1}))
    },
    delete:async({locals,request})=>{
        const formData = await request.formData();
        const form=Object.fromEntries([...formData])

        await pb.collection('cart').delete(form.id)

}}