import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="hero min-h-screen bg-white"><div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">Hello ${escape(data?.profile?.name || "There")}!!</h1> <p class="py-6" data-svelte-h="svelte-9oep2d">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> ${!data?.profile?.name ? `<a href="/login" class="btn btn-primary" data-svelte-h="svelte-izohf9">Get Started</a>` : ``}</div></div></div>`;
});
export {
  Page as default
};
