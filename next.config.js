const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
// const withOffline = require('next-offline');

const nextConfig = withCSS({
	// target: 'server',
	// transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
	// Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
	// turn on the SW in dev mode so that we can actually test it
	// generateInDevMode: true,
	// workboxOpts: {
	// 	swDest: 'static/service-worker.js',
	// 	runtimeCaching: [
	// 		{
	// 			urlPattern: /^https?.*/,
	// 			handler: 'NetworkFirst',
	// 			options: {
	// 				cacheName: 'moi-code-cache',
	// 				networkTimeoutSeconds: 15,
	// 				expiration: {
	// 					maxEntries: 150,
	// 					maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
	// 				},
	// 				cacheableResponse: {
	// 					statuses: [0, 200]
	// 				}
	// 			}
	// 		}
	// 	]
	// },
	webpackDevMiddleware: config => {
		// Solve compiling problem via vagrant
		config.watchOptions = {
			poll: 800, // Check for changes every second
			aggregateTimeout: 300 // delay before rebuilding
		};
		return config;
	}
});

module.exports = withOffline(nextConfig);
