<script>
	let dummyImg = 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250';

</script>

<div class="navbar w-full bg-white border border-t-0 border-x-0 border-slate-300 relative">
	<div class="flex-1">
		<a  href="/" class=" normal-case flex items-center font-semibold text-xl"> Test-Qbtrix </a>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/></svg
					>
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-56 bg-white shadow">
				<div class="card-body w-full">
					<div class="card-actions">
						<a href="/cart" class="drawer-button btn btn-primary">View Cart</a>
					</div>
				</div>
			</div>
		</div>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src={dummyImg} alt="profile-img" />
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-100 rounded-box w-52"
			>
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="/register" class="justify-between">
						Register
						<span class="badge">New</span>
					</a>
				</li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- <li><a>Settings</a></li> -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a href="/login"> Login</a></li>
			</ul>
		</div>
	</div>
</div>
