

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.633abef3.js","_app/immutable/chunks/scheduler.8a561f12.js","_app/immutable/chunks/index.1f2d1a61.js","_app/immutable/chunks/singletons.25ff0760.js","_app/immutable/chunks/paths.fc9fcbca.js"];
export const stylesheets = [];
export const fonts = [];
