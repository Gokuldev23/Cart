import * as server from '../entries/pages/cart/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cart/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cart/+page.server.js";
export const imports = ["_app/immutable/nodes/3.bb331726.js","_app/immutable/chunks/scheduler.8a561f12.js","_app/immutable/chunks/index.1f2d1a61.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/forms.b750fd2c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.25ff0760.js","_app/immutable/chunks/paths.fc9fcbca.js"];
export const stylesheets = [];
export const fonts = [];
