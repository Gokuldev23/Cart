import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="hero min-h-screen bg-white"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left" data-svelte-h="svelte-1t6nyid"><h1 class="text-5xl font-bold">Register now!</h1> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div> <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><form method="POST" action="?/register" class="card-body" data-svelte-h="svelte-c44c7g"><div class="form-control"><label for="name" class="label"><span class="label-text">Name</span></label> <input name="name" id="name" type="text" placeholder="name" class="input input-bordered" required></div> <div class="form-control"><label for="email" class="label"><span class="label-text">Email</span></label> <input name="email" id="email" type="email" placeholder="email" class="input input-bordered" required></div> <div class="form-control"><label for="pass" class="label"><span class="label-text">Password</span></label> <input name="pass" id="pass" type="password" autocomplete="off" placeholder="password" class="input input-bordered" required> <label class="label"><a href="/login" class="label-text-alt link link-hover">Already a User? Login</a></label></div> <div class="form-control mt-6"><button class="btn btn-primary">Register</button></div></form> ${form?.notVerified ? `<div class="alert alert-error" data-svelte-h="svelte-b8leqp"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>&quot;Oops! Your Credintials not correct&quot;</span></div> <p>${escape(form?.err)}</p>` : ``}</div></div></div> <form method="POST" action="?/create" data-svelte-h="svelte-142tf3l"><label>add a todo:
			<input name="description" autocomplete="off"></label></form>`;
});
export {
  Page as default
};
