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
	import { navigating } from '$app/stores'

	export let data;

	console.log(data)
	
</script>


<div class="min-h-screen w-full  relative ">


	<Navbar bind:profile={data.loggedIn}/>
		<div  class=" bg-white">
			{#if $navigating}
				<div class="absolute h-screen w-full bg-slate-900/5 z-10  flex justify-center items-center">
					<span class="loading loading-bars loading-lg text-warning"></span>
				</div>
				{:else}
				<slot/>
			{/if}
		</div>
</div>
<Footer/>
