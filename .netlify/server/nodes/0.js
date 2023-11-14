import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.8f981c34.js","_app/immutable/chunks/scheduler.8a561f12.js","_app/immutable/chunks/index.1f2d1a61.js","_app/immutable/chunks/paths.fc9fcbca.js"];
export const stylesheets = ["_app/immutable/assets/0.cb830431.css"];
export const fonts = ["_app/immutable/assets/poppins-devanagari-400-normal.478b3ab7.woff2","_app/immutable/assets/poppins-devanagari-400-normal.aa135e25.woff","_app/immutable/assets/poppins-latin-ext-400-normal.cb8bdeab.woff2","_app/immutable/assets/poppins-latin-ext-400-normal.8090b590.woff","_app/immutable/assets/poppins-latin-400-normal.7d93459d.woff2","_app/immutable/assets/poppins-latin-400-normal.2db0a254.woff"];
