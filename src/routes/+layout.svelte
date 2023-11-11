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
	import { onMount } from "svelte";
	export let data;
	onMount(()=>{
		console.log('------run-----')
	}
	)
</script>


<div class="min-h-screen w-full  relative ">
	<Navbar bind:profile={data.loggedIn}/>
	<div class=" bg-white">
		<slot/>
	</div>
</div>
<Footer/>
