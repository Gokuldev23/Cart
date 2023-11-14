<script>
	import {addToCart} from '../index'
	import { enhance } from '$app/forms';

	export let product=[]

	let movieStr=''
	function filter(e){
		const search = movieStr.toLowerCase();
		if (!search) {
			items = [...originalArray];
		}
		const matchingMovies = items.filter((item) => item.name.toLowerCase().includes(search));
		const remainingMovies = items.filter((item) => !item.name.toLowerCase().includes(search));
		items = [...matchingMovies, ...remainingMovies];
	}

</script>



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
				<input type="text" id="id" name="id" value="{JSON.stringify({id:product.id,name:product.name,quantity:product.quantity})}" hidden>
				<button type="submit"  class="btn btn-sm {product.quantity==1?'btn-disabled':''}">
				  <i class="fa text-xl">&#xf068;</i>
				</button> 
			</form>
			<div class="text-lg font-semibold">{product.quantity}</div>
			<form action="?/add" method="post" use:enhance>
				<input type="text" id="id" name="id" value="{JSON.stringify({id:product.id,name:product.name,quantity:product.quantity})}" hidden>
				<button  class="btn btn-sm ">
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