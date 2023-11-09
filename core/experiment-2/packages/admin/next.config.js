const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    plugins: `plugins@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'admin',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Plugin1': './webcrumbs/Plugin1',
          './Plugin2': './webcrumbs/Plugin2'
        },
        remotes: remotes(options.isServer),
        shared: {}
      }),
    );

    return config;
  },
};
