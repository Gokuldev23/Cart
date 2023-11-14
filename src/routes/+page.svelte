<script>
	export let data
</script>

<div class="hero min-h-screen bg-white">
	<div class="hero-content text-center">
	  <div class="max-w-md">
		<h1 class="text-5xl font-semibold whitespace-nowrap">Hello <span class="text-violet-600">{data?.profile?.name||'There'}</span>!!</h1>
		<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
		
		{#if !data?.profile?.name}
			<a href="/login" class="btn btn-primary">Get Started</a>
			{:else}
			<a href="/home" class="btn bg-green-400 text-black px-8 py-1">Home</a>
		{/if}
	  </div>
	</div>
  </div>