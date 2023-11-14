import "../../chunks/index.js";
import PocketBase from "pocketbase";
new PocketBase("http://127.0.0.1:8090");
async function load({ locals }) {
  if (locals.pb.authStore.baseToken) {
    return {
      loggedIn: true
    };
  } else {
    return {
      loggedIn: false
    };
  }
}
export {
  load
};
