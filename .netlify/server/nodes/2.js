import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.42c93bf1.js","_app/immutable/chunks/scheduler.8a561f12.js","_app/immutable/chunks/index.1f2d1a61.js"];
export const stylesheets = [];
export const fonts = [];
