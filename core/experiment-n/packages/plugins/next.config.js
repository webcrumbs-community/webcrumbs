const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'plugins',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Plugin1': './webcrumbs/Plugin1',
          './Plugin2': './webcrumbs/Plugin2'
        },
        shared: {}
      }),
    );

    return config;
  },
};
