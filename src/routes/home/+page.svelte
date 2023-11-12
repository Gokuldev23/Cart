

<script>
	import { onMount } from "svelte";
	import Product from "../../lib/Components/Product.svelte";

    export let data;

</script>


<div>
	<h1 class="text-slate-700 bg-white font-semibold text-2xl text-center my-8">Welcome to Our Cart test page {data.profile.name}</h1>
    <Product product={data.products}/>
</div>