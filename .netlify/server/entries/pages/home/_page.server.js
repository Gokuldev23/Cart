import { r as redirect } from "../../../chunks/index.js";
import "pocketbase";
import { a as singleProduct } from "../../../chunks/index2.js";
async function load({ locals }) {
  const records = await locals.pb.collection("products").getFullList({
    sort: "-created"
  });
  if (locals.pb.authStore.baseToken) {
    return {
      profile: locals.pb.authStore.baseModel,
      products: [...records]
    };
  } else {
    throw redirect(303, "/login");
  }
}
const actions = {
  addProduct: async ({ locals, request }) => {
    const formData = await request.formData();
    const form = Object.fromEntries([...formData]);
    console.log(form.id);
    const productData = await singleProduct(form.id);
    let cartData = {
      product: productData.id,
      quantity: 1,
      user: locals.pb.authStore.baseModel.id,
      name: productData.name
    };
    let cartItems = await locals.pb.collection("cart").getFullList({
      sort: "-created"
    });
    let relevantCart = cartItems.filter((i) => i.user == locals.pb.authStore.baseModel.id).find((i) => i.name == cartData.name);
    console.log("relevantCart", relevantCart);
    let relevantProduct = await locals.pb.collection("products").getOne(cartData.product);
    console.log("----Product----------", relevantCart);
    try {
      if (relevantCart) {
        let res = await locals.pb.collection("cart").update(relevantCart.id, JSON.stringify(cartData, cartData.quantity = relevantCart.quantity += 1));
        await locals.pb.collection("products").update(relevantProduct.id, JSON.stringify(relevantProduct, relevantProduct.stock -= 1));
      } else {
        await locals.pb.collection("cart").create(JSON.stringify(cartData));
        await locals.pb.collection("products").update(relevantProduct.id, JSON.stringify(relevantProduct, relevantProduct.stock -= 1));
      }
    } catch (err) {
      console.log(err);
    }
  }
};
export {
  actions,
  load
};
