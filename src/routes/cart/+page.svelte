<script>

import { enhance } from '$app/forms';

export let data
export let form

// console.log(data.product[0].name)
// const promise1 = Promise.resolve(data.product[0].name);

// promise1.then((value) => {
//   console.log(value);
//   // Expected output: 123
// });

$:console.log(form?.outOfStock)

let number=0;


</script>

<div class="flex justify-center items-center h-[60vh]">
    <ol class=" list-decimal w-fit px-4 py-3 rounded-xl border border-slate-500 bg-stone-100">
        {#each data.cartItems as product,i}
            <li class="my-4 flex gap-x-2 items-center">
                <span class="text-lg font-bold">
                    {i+1}.
                </span>
                <div class="flex gap-x-4 items-center">
                    <div class="flex gap-x-2 items-centers w-32">
                        <!-- <img src="{product.name.toLowerCase()}.jpg" class="w-10 rounded-lg" alt=""> -->
                        <span class="font-semibold text-slate-700">{product.name}</span>
                    </div>
                    <div>
                        <div class="flex gap-x-3 self-center border border-gray-200 p.5 w-fit rounded-xl items-center">
                            <form use:enhance action="?/minus" method="post">
                                <input  type="text" id="id" name="id" value="{product.id}" hidden>
                                <button on:click={()=>product.quantity-=1} type="submit"  class="btn btn-sm {product.quantity==1?'btn-disabled':''}">
                                  <i class="fa text-xl">&#xf068;</i>
                                </button> 
                            </form>
                            <input type="text" bind:value={product.quantity} class=' w-8 text-slate-700 text-center' name=""  id="">
                            <!-- <div class="text-lg font-semibold">{product.quantity}</div> -->
                            <form action="?/add" method="post" use:enhance>
                                <input type="text" id="id" name="id" value="{product.id}" hidden>
                                <button on:click={()=>product.quantity+=1} class="btn btn-sm {form?.outOfStock==product.id?'btn-disabled':''}" >
                                  <i  class="fa text-xl">&#xf067;</i>
                                </button>
                            </form>
                          </div>
                    </div>
                    <form use:enhance action="?/delete" method="post">
                        <input type="text" id="id" name="id" value="{product.id}" hidden>
                        <button type="submit" class="btn btn-sm">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </form>
                </div>
            </li>
        {/each}
    </ol>
</div>

