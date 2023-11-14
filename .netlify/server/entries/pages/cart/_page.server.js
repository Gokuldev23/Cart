import { f as fail } from "../../../chunks/index.js";
import eventsource from "eventsource";
import { s as singleCart, a as singleProduct } from "../../../chunks/index2.js";
global.EventSource = eventsource;
async function load({ locals }) {
  if (locals.pb.authStore.baseToken) {
    const res = await locals.pb.collection("cart").getFullList({
      sort: "created",
      expand: "user"
    });
    let cartItems = res.filter((u) => locals.pb.authStore.baseModel.id == u.user);
    return { cartItems };
  }
  return {
    empty: false
  };
}
const actions = {
  minus: async ({ locals, request }) => {
    const formData = await request.formData();
    const form = Object.fromEntries([...formData]);
    let data = await singleCart(form.id);
    let product = await singleProduct(data.product);
    let updatedProduct = {
      "name": product.name,
      "price": product.price,
      "stock": product.stock + 1
    };
    await locals.pb.collection("products").update(data.product, JSON.stringify(updatedProduct));
    await locals.pb.collection("cart").update(data.id, JSON.stringify(data));
  },
  add: async ({ locals, request }) => {
    const formData = await request.formData();
    const form = Object.fromEntries([...formData]);
    let data = await singleCart(form.id);
    console.log(data);
    let product = await singleProduct(data.product);
    let updatedProduct = {
      "name": product.name,
      "price": product.price,
      "stock": product.stock - 1
    };
    try {
      if (product.stock > 0) {
        await locals.pb.collection("products").update(data.product, JSON.stringify(updatedProduct));
        await locals.pb.collection("cart").update(data.id, JSON.stringify(data));
      } else {
        return fail(401, { outOfStock: form.id });
      }
    } catch (err) {
      console.log(err);
    }
  },
  delete: async ({ locals, request }) => {
    const formData = await request.formData();
    const form = Object.fromEntries([...formData]);
    await locals.pb.collection("cart").delete(form.id);
  }
};
export {
  actions,
  load
};
