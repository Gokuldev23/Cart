import PocketBase from "pocketbase";
import eventsource from "eventsource";
const url = "https://qbtrix.pockethost.io/";
global.EventSource = eventsource;
async function handle({ event, resolve }) {
  event.locals.pb = new PocketBase(url);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  try {
    event.locals.pb.authStore.isValid && await event.locals.pb.collection("users").authRefresh();
  } catch (_) {
    event.locals.pb.authStore.clear();
  }
  const response = await resolve(event);
  response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));
  return response;
}
export {
  handle
};
