import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "devalue";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="hero min-h-screen bg-white"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left" data-svelte-h="svelte-z075nr"><h1 class="text-5xl font-bold">Login now!</h1> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div> <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl"><form method="post" action="?/login" class="card-body" data-svelte-h="svelte-1iu95ze"><div class="form-control"><label for="email" class="label"><span class="label-text">Email</span></label> <input name="email" type="email" placeholder="email" class="input input-bordered" required></div> <div class="form-control"><label for="password" class="label"><span class="label-text">Password</span></label> <input name="password" type="password" placeholder="password" class="input input-bordered" required> <label class="label"><a href="/register" class="label-text-alt link link-hover">Not a user? Register here</a></label></div> <div class="form-control mt-6"><button class="btn btn-primary">Login</button></div></form> ${form?.notVerified ? `<div class="alert alert-error" data-svelte-h="svelte-1mulilz"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>&quot;Oops! Your Credintials not correct&quot;</span></div>` : ``}</div></div></div>`;
});
export {
  Page as default
};
