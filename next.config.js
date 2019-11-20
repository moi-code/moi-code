const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');

// const withOffline = require('next-offline');

const nextConfig = withCSS({
  target: "server",
  transformManifest: manifest => ["/"].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    maximumFileSizeToCacheInBytes: 5000000,
    // ...other Workbox build configuration options...
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /.css$/,
        handler: "NetworkFirst"
      },
      {
        urlPattern: /.png$/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          networkTimeoutSeconds: 30,
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  publicRuntimeConfig: {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  },
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
