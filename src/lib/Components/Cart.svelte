<script>
 	import {pb} from '../index';



export let item;
export let number=1


async function decrease() {
    if (number > 1) {
      number -= 1;
      await pb.collection('product').update(item.id,  {...item,
                    quantity:item.quantity-=1,
                    stock:item.stock+=1
                });
    }
  }

  async function increase() {
    if(item.stock>0){
    number += 1;

      await pb.collection('product').update(item.id,  {...item,
                      quantity:item.quantity+=1,
                      stock:item.stock-=1
                  });
    }
    else{
      return alert('Product is currently out-of-stock')
    }
  }


</script>

<div class="flex gap-x-3 self-center border border-gray-200 p.5 w-fit rounded-xl items-center">
  <button on:click={decrease}  class="btn btn-sm {number==1?'btn-disabled':''}">
    <i class="fa text-xl">&#xf068;</i>
  </button> 
  <div class="text-lg font-semibold">{number}</div>
  <button on:click={increase}  class="btn btn-sm ">
    <i  class="fa text-xl">&#xf067;</i>
  </button>
</div>