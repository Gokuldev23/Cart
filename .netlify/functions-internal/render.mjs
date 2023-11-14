import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.jpeg","2.jpeg","3.jpeg","4.jpeg","beans.jpg","carrot.jpg","chilli.jpg","cucumber.jpg","favicon.png","logo.svg","m-slide.jpg","m-slide1.jpg","onion.jpg","peas.jpg","potato.jpg","profile1.png","profile2.jpg","slide1.webp","slide2.webp","slide3.webp","tomato.jpg"]),
	mimeTypes: {".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.a584a659.js","app":"_app/immutable/entry/app.6b60cc05.js","imports":["_app/immutable/entry/start.a584a659.js","_app/immutable/chunks/scheduler.8a561f12.js","_app/immutable/chunks/singletons.25ff0760.js","_app/immutable/chunks/paths.fc9fcbca.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.6b60cc05.js","_app/immutable/chunks/scheduler.8a561f12.js","_app/immutable/chunks/index.1f2d1a61.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/logout/_server.js'))
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
