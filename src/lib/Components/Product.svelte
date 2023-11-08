<script>
	import {addToCart} from '../index'

	let items = [
		{quantity:1,stock:9, name: 'cucumber', price: 40 },
		{quantity:1,stock:9, name: 'onion', price: 39 },
		{quantity:1,stock:9, name: 'peas', price: 69 },
		{quantity:1,stock:9, name: 'tomato', price: 87 },
		{quantity:1,stock:9, name: 'chilli', price: 78 }
	];

	//for immutable purpose
	let originalArray=[...items]

	//for filter movies
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



<div class="flex justify-center py-4 w-full">
	<label class="block text-xl font-semibold" for="search">Serach Product
		<input bind:value={movieStr} on:input={filter} type="text" name="search" id="search" class="border border-slate-600 rounded-xl p-2">
	</label>
</div>
<div class="grid place-items-center gap-4 md:gap-10 px-4 grid-cols-2 md:grid-cols-4 py-10 z-10">

	


	{#each items as item, i}
		<div
			class="card card-compact bg-green-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-gradient-to-b hover:from-white hover:via-green-200 hover:to-green-300"
		>
			<figure>
				<img class="" src="{item.name}.jpg" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title md:text-base text-sm capitalize">{item.name}</h2>
				<p class="text-xm md:text-sm">If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-between items-center">
					<span class="text-xl font-semibold text-green-900">{item.price} Rs</span>

					<button
						on:click={() => addToCart(item)}
						class="btn md:btn-md btn-sm bg-purple-700 hover:bg-purple-600 text-white"
						>Add to cart</button
					>
				</div>
			</div>
		</div>
	{/each}
</div>
