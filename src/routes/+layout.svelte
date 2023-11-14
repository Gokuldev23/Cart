<svelte:head>
	<style lang="global">
		html{
		font-family:'poppins';
		}
	</style>
</svelte:head>

<script>
	import "@fontsource/poppins";
	import '../app.postcss';
	import Navbar from '$lib/Components/Navbar.svelte';
	import Footer from '../lib/Components/Footer.svelte';
	import { page } from '$app/stores';
	import { fade } from "svelte/transition";

	export let data;
	
</script>


<div class="min-h-screen w-full  relative ">
	<Navbar bind:profile={data.loggedIn}/>
		<div  class=" bg-white">
			<slot/>
		</div>
</div>
<Footer/>
