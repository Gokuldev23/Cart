
import { json, redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { productList, singleProduct } from '../../lib';

// const pb = new PocketBase('http://127.0.0.1:8090');

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {

    // await pb.admins.authWithPassword('gokularise@gmail.com','gokulpocketbase')

    const records = await productList()
    console.log("records@",records)

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

export const actions={
    addProduct: async ({ locals, request }) => {
		const formData = await request.formData();
        const form=Object.fromEntries([...formData])
        console.log(form.id)

        const productData=await singleProduct(form.id)

        let cartData = {
            product:productData.id,
            quantity: 1,
            user: locals.pb.authStore.baseModel.id,
            name:productData.name
        };

        let cartItems=await locals.pb.collection('cart').getFullList({
            sort:'-created'
        })

        let relevantCart=cartItems.filter(i=>i.user==locals.pb.authStore.baseModel.id).find(i=>i.name==cartData.name)

        console.log("relevantCart",relevantCart)
        
        let relevantProduct =await locals.pb.collection('products').getOne(cartData.product)
        console.log('----Product----------',relevantCart)

        try{
            if(relevantCart){
                
                let res=await locals.pb.collection('cart').update(relevantCart.id,JSON.stringify(cartData,cartData.quantity=relevantCart.quantity+=1))
                await locals.pb.collection('products').update(relevantProduct.id,JSON.stringify(relevantProduct,relevantProduct.stock-=1))

            }
            else{
                await locals.pb.collection('cart').create(JSON.stringify(cartData))
                await locals.pb.collection('products').update(relevantProduct.id,JSON.stringify(relevantProduct,relevantProduct.stock-=1))
            }
        }
        catch(err){
            console.log(err)
        }

        
    }}