import { c as create_ssr_component, f as each, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    console.log(form?.outOfStock);
  }
  return `<div class="flex justify-center items-center h-[60vh]"><ol class="list-decimal w-fit px-4 py-3 rounded-xl border border-slate-500 bg-stone-100">${each(data.cartItems, (product, i) => {
    return `<li class="my-4 flex gap-x-2 items-center"><span class="text-lg font-bold">${escape(i + 1)}.</span> <div class="flex gap-x-4 items-center"><div class="flex gap-x-2 items-centers w-32"> <span class="font-semibold text-slate-700">${escape(product.name)}</span></div> <div><div class="flex gap-x-3 self-center border border-gray-200 p.5 w-fit rounded-xl items-center"><form action="?/minus" method="post"><input type="text" id="id" name="id"${add_attribute("value", product.id, 0)} hidden> <button type="submit" class="${"btn btn-sm " + escape(product.quantity == 1 ? "btn-disabled" : "", true)}"><i class="fa text-xl" data-svelte-h="svelte-1c66n7m"></i> </button></form> <input type="text" class="w-8 text-slate-700 text-center" name="" id=""${add_attribute("value", product.quantity, 0)}>  <form action="?/add" method="post"><input type="text" id="id" name="id"${add_attribute("value", product.id, 0)} hidden> <button class="${"btn btn-sm " + escape(form?.outOfStock == product.id ? "btn-disabled" : "", true)}"><i class="fa text-xl" data-svelte-h="svelte-ffbail"></i> </button></form> </div></div> <form action="?/delete" method="post"><input type="text" id="id" name="id"${add_attribute("value", product.id, 0)} hidden> <button type="submit" class="btn btn-sm" data-svelte-h="svelte-xourq2"><i class="fa-solid fa-trash"></i></button> </form></div> </li>`;
  })}</ol></div>`;
});
export {
  Page as default
};
