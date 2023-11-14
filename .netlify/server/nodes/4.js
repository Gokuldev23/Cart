import * as server from '../entries/pages/home/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/4.9c404971.js","_app/immutable/chunks/scheduler.8a561f12.js","_app/immutable/chunks/index.1f2d1a61.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/forms.b750fd2c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.25ff0760.js","_app/immutable/chunks/paths.fc9fcbca.js"];
export const stylesheets = [];
export const fonts = [];
