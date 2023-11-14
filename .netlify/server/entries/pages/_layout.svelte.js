import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const index = "";
const app = "";
let dummyImg = "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profile } = $$props;
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  {
    console.log(profile);
  }
  return `<div class="navbar w-full bg-white border border-t-0 border-x-0 border-slate-300 relative"><div class="flex-1" data-svelte-h="svelte-gyieij"><a href="/" class="normal-case flex items-center font-semibold text-xl">Test-Qbtrix</a></div> <div class="flex-none"><div class="dropdown dropdown-end" data-svelte-h="svelte-4qtted">  <label tabindex="0" class="btn btn-ghost btn-circle"><div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div></label>  <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-56 bg-white shadow"><div class="card-body w-full"><div class="card-actions"><a href="/cart" class="drawer-button btn btn-primary">View Cart</a></div></div></div></div> <div class="dropdown dropdown-end">  <label tabindex="0" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img${add_attribute("src", dummyImg, 0)} alt="profile-img"></div></label>  <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-100 rounded-box w-52">${!profile ? `<li data-svelte-h="svelte-1hc6p6k"> <a href="/register" class="justify-between">Register</a></li> <li data-svelte-h="svelte-bs1g5k"><a href="/login">Login</a></li>` : `<form action="/logout" method="post" data-svelte-h="svelte-jaw4x"><button class="btn btn-error w-full btn-sm">Logout</button></form>`}</ul></div></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer p-10 bg-neutral-300 text-slate-700 border-t-2 relative" data-svelte-h="svelte-n2esk0"><nav><header class="footer-title">Shop</header> <a class="link link-hover">Ghee</a> <a class="link link-hover">Oil</a> <a class="link link-hover">Grocery</a> <a class="link link-hover">Fruits</a></nav> <nav><header class="footer-title">Information</header> <a class="link link-hover">About us</a> <a class="link link-hover">Contact</a> <a class="link link-hover">Track your Order</a> <a class="link link-hover">Blogs</a></nav> <nav><header class="footer-title">Social</header> <div class="grid grid-flow-col gap-4"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></div></nav></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-jzv1w0_START --><style lang="global" data-svelte-h="svelte-1i32bjs">html{
		font-family:'poppins';
		}</style><!-- HEAD_svelte-jzv1w0_END -->`, ""}  <div class="min-h-screen w-full relative ">${validate_component(Navbar, "Navbar").$$render(
      $$result,
      { profile: data.loggedIn },
      {
        profile: ($$value) => {
          data.loggedIn = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="bg-white">${slots.default ? slots.default({}) : ``}</div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
