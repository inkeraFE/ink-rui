const { rewireWorkboxInject, defaultInjectConfig } = require('react-app-rewire-workbox');

module.exports = function override(config, env) {
  if (env === "production") {
    const workboxConfig = {
      ...defaultInjectConfig,
      importWorkboxFrom: 'local',
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    };
    console.log("Production build - Adding Workbox for PWAs");
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  return config;
};