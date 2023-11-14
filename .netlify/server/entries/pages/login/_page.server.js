import { r as redirect } from "../../../chunks/index.js";
import { s as singleCart } from "../../../chunks/index2.js";
async function load({ locals }) {
  await singleCart("qett7m0yfuiarps");
}
const actions = {
  login: async ({ locals, request }) => {
    const formData = await request.formData();
    const form = Object.fromEntries([...formData]);
    try {
      const { token, user } = await locals.pb.collection("users").authWithPassword(
        form.email,
        form.password
      );
      console.log("Token", token, "user", user);
    } catch (err) {
      return {
        notVerified: true
      };
    }
    throw redirect(303, "/home");
  }
};
export {
  actions,
  load
};
