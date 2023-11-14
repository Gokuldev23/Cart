<script>
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';

  export let form;
</script>

<div class="hero min-h-screen bg-white">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div in:fly={{x:'100px',duration:500}} class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Register now!</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div  in:fly={{x:'-100px',duration:500}} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form use:enhance method="POST" action="?/register" class="card-body">
          <div class="form-control">
            <label for="name" class="label">
              <span class="label-text">Name</span>
            </label>
            <input name="name" id="name" type="text" placeholder="name" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label for="email" class="label">
              <span class="label-text">Email</span>
            </label>
            <input name="email" id="email" type="email" placeholder="email" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label for="pass" class="label">
              <span class="label-text">Password</span>
            </label>
            <input name="pass" id="pass" type="password" autocomplete="off" placeholder="password" class="input input-bordered" required />
            <label class="label">
              <a href="/login" class="label-text-alt link link-hover">Already a User? Login</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Register</button>
          </div>
        </form>
        {#if form?.notVerified}
          <div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>"Oops! Your Credintials not correct"</span>
          </div>
          <p>{form?.err}</p>
        {/if}
      </div>
    </div>
  </div>
  <form method="POST" action="?/create">
		<label>
			add a todo:
			<input
				name="description"
				autocomplete="off"
			/>
		</label>
	</form>