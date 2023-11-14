import PocketBase from "pocketbase";
const pb = new PocketBase("https://qbtrix.pockethost.io/");
async function singleProduct(id) {
  let record = await pb.collection("products").getOne(id);
  return record;
}
async function singleCart(id) {
  let record = await pb.collection("cart").getOne(id, {
    expand: "product"
  });
  console.log("====Record======", record);
  return record;
}
export {
  singleProduct as a,
  singleCart as s
};
