import { r as redirect } from "../../../chunks/index.js";
const actions = {
  register: async ({ locals, request }) => {
    const formData = await request.formData();
    const form = Object.fromEntries([...formData]);
    let data = {
      "username": form.name.split(" ").join("") + Math.round(Math.random() * 10),
      "email": form.email,
      "emailVisibility": true,
      "password": form.pass,
      "passwordConfirm": form.pass,
      "name": form.name
    };
    data = JSON.stringify(data);
    console.log("data", data);
    try {
      let record = await locals.pb.collection("users").create(data);
      locals.pb.authStore.clear();
    } catch (error) {
      console.log("error", error);
      return {
        notVerified: true,
        err: JSON.stringify(error)
      };
    }
    throw redirect(300, "/login");
  }
};
export {
  actions
};
