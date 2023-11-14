import { r as redirect } from "../../../chunks/index.js";
import PocketBase from "pocketbase";
new PocketBase("http://127.0.0.1:8090");
const POST = async ({ locals }) => {
  await locals.pb.authStore.clear();
  throw redirect(303, "/login");
};
export {
  POST
};
