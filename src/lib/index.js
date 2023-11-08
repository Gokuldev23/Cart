import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');


//Get list of all product items

export async function getList(){
    const records = await pb.collection('product').getFullList({
        sort: '-created',
    });
    return records
}

export async function deleteItem(item){

    await pb.collection('product').delete(item);

}



export async function addToCart(item){
    pb.admins.authWithPassword('gokularise@gmail.com','gokulpocketbase')
   
    let records=await getList()
    let recordIndex=records.findIndex(rec=>rec.name==item.name)

    if(recordIndex!==-1){
        if(records[recordIndex].stock>0){
            const record = await pb.collection('product').update(records[recordIndex].id, 
                {...item,
                    quantity:item.quantity+=1,
                    stock:item.stock-=1
                });
            console.log(record)
        }
        else{
            return alert('Product is Out-of-Stock')
        }
    }
    else{
        const data = JSON.stringify(item)
        
        const record = await pb.collection('product').create(data);

        console.log(record)
    }


}