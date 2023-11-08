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
</script>


<div class="min-h-screen w-full  relative ">
	<Navbar />
	<div class="p-4 bg-white">
		<slot />
	</div>
</div>
<Footer/>
