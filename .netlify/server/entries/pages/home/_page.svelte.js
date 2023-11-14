import { c as create_ssr_component, e as escape, b as add_attribute, f as each } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let movieStr = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><h1 class="text-slate-700 bg-white font-semibold text-2xl text-center py-8">Welcome to Our Cart test page ${escape(data.profile.name)}</h1> <div class="flex justify-center py-4 w-full"><label class="block text-xl font-semibold" for="search">Search Product
			<input type="text" name="search" id="search" class="border bg-white border-slate-600 rounded-xl p-2"${add_attribute("value", movieStr, 0)}></label></div> <div class="grid place-items-center gap-4 md:gap-10 px-4 grid-cols-2 md:grid-cols-4 py-10 z-10">${each(data.products, (item, i) => {
    return `<div class="${"card card-compact " + escape(item.stock == 0 ? "bg-red-100" : "bg-green-100", true) + " shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-gradient-to-b hover:from-white hover:via-green-200 hover:to-green-300"}"><figure><img class="" src="${"https://qbtrix.pockethost.io/api/files/" + escape(item.collectionId, true) + "/" + escape(item.id, true) + "/" + escape(item.image, true)}" alt="Shoes"></figure> <div class="card-body"><h2 class="card-title md:text-base text-sm capitalize">${escape(item.name)}</h2> <p class="text-xm md:text-sm" data-svelte-h="svelte-1tppycb">If a dog chews shoes whose shoes does he choose?</p> <div class="card-actions justify-between items-center"><span class="text-xl font-semibold text-green-900">${escape(item.price)} Rs</span> ${item.stock > 0 ? `<form action="?/addProduct" method="post"><input type="text" name="id"${add_attribute("value", item.id, 0)} id="id" hidden>
								inp
								<button class="btn md:btn-md btn-sm bg-purple-700 hover:bg-purple-600 text-white" data-svelte-h="svelte-gl7f8c">Add to cart</button> </form>` : `<span class="text-slate-200 bg-red-500 p-2 px-4 rounded-lg text-lg font-semibold" data-svelte-h="svelte-1hdki2a">Out of Stock</span>`} </div></div> </div>`;
  })}</div></div>`;
});
export {
  Page as default
};
