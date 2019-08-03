const { rewireWorkboxInject, defaultInjectConfig } = require('react-app-rewire-workbox');
const path = require('path');
const paths = require('react-scripts/config/paths');

module.exports = function override(config, env) {
  if (env === 'production') {
    const workboxConfig = {
      ...defaultInjectConfig,
      importWorkboxFrom: 'local',
      swSrc: './sw.js',
      swDest: 'service-worker.js',
    };
    console.log('Production build - Adding Workbox for PWAs');
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs');
  config.output.path = path.join(path.dirname(config.output.path || '/'), 'docs');
  config.output.publicPath = env === 'production' ? './' : '/';

  return config;
};