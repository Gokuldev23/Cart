
import { json, redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { productList, singleProduct, userCartItems } from '../../lib';

// const pb = new PocketBase('http://127.0.0.1:8090');
// export const prerender = true;
export const ssr=false



/** @type {import('./$types').PageLoad} */
export async function load({locals}) {

    // await pb.admins.authWithPassword('gokularise@gmail.com','gokulpocketbase')

    let record=async()=>await  locals.pb.collection('products').getFullList({
        sort:'-created'
    })
    if(!locals.pb.authStore.isValid){
        throw redirect(303,'/')
    }
    else{
        console.log('here',record)
        return{
            profile:locals.pb.authStore.baseModel,
            products:await record()
        }
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

        let cartItems=await userCartItems(cartData.user)

        let relevantCart=async()=>cartItems.find(i=>i.name==cartData.name)
        
        let relevantProduct =await locals.pb.collection('products').getOne(cartData.product)
        // console.log('----Product----------',relevantCart)

        try{
            if(relevantCart()){
                
                let res=await locals.pb.collection('cart').update(relevantCart.id,JSON.stringify(relevantCart,relevantCart.quantity+=1))
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