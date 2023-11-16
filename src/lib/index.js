import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://qbtrix.pockethost.io/');



export async function  productList(locals){
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
    return record
}



export async function  userCartItems(currentUser='m7uvkry0w18thd7'){
    let  record= await pb.collection('cart').getFullList({
    sort:'-created',
    expand:'product'
    })
    let result=record.filter(item=>item.user==currentUser)
    let cartItem=result[0]
    const data = {
        "product": {...cartItem.expand.product,stock:10},
        "quantity": 12,
        "user": currentUser,
        "name": cartItem.name
    };
    
    const records = await pb.collection('cart').update(cartItem.id,JSON.stringify(data));

    console.log("records is",records)

    return result
}
userCartItems()



