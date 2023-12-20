# Experiment purpose
- Dynamic remote component
- Loaded at runtime 
- With SSR (using VM and Babel)
- Hydrated on the client (using Webpack)
- With documentation on how to build plugins

# Next steps
- Experiment with new plugins
- Experiment with dependencies so that the host do not need to know about the plugin
- Experiment with communication back and forth between the admin and the plugin
- Experiment with styling the plugins with the admin style and with its own style
- Experiment with plugins in other JavaScript frameworks
- Improve VM security

# Installation
To install and start this repository locally, you need to follow these steps:

1. Clone the repository to your local machine.
2. Navigate to this directory of the project in your terminal: `cd webcrumbs/core/experiment-5`
3. Run `yarn reinstall:wc` to install the dependencies for the project and for all the packages.
4. Run `yarn build:wc` to build all the plugins.
5. Run `yarn start` to build and serve all packages in their respective ports.

After following these steps, you should be able to access the following URLs in your browser:

- `localhost:3000` (HOST in EXPRESS)
- `localhost:3001` (REMOTES in EXPRESS and REACT)

# Create a new plugin

## The easy way

To create a new plugin the easy way, follow these steps:

1. Copy the `packages/plugins/dev/template` directory and rename it to the name of your plugin.
2. Make sure to change the `name` property in the `package.json` file to the name of your plugin.
3. Make all the changes you need to the `App.jsx` file.
4. You don't need to build your plugin, because it will be built automatically when you run `yarn build:wc` in the root of the project.
5. Go to the `packages/admin` directory and add the name of your plugin to the `installed_plugins` array in the `index.js` file.

## The hard way

To create a new plugin the hard way, follow these steps:

1. Create a new directory in `packages/plugins/dev` with the name of your plugin.
2. Run `yarn init -y` in the root of your plugin directory to create a `package.json` file.
3. Install the following dependencies:
``` bash
yarn add react react-dom
yarn add --dev @babel/cli @babel/core @babel/plugin-transform-modules-commonjs @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-node-externals
```
4. Add the following scripts to your `package.json` file:
``` json
    "scripts": {
    "build:client": "webpack --config webpack.config.js --env client && mkdir -p ../../dist/$npm_package_name && mv ./dist/client.js ../../dist/$npm_package_name/",
    "build:server": "npx babel src/App.jsx --out-file ../../dist/$npm_package_name/server.js",
    "build": "yarn build:client && yarn build:server"
    },
```
5. Create a `.babelrc` file in the root of your plugin directory with the following content:
``` json
{
    "presets": [
        "@babel/preset-react"
    ],
    "plugins": [
        [
            "@babel/plugin-transform-modules-commonjs",
            {
                "importInterop": "node"
            }
        ]
    ]
}
```
6. Create a `webpack.config.js` file in the root of your plugin directory with the following content:
``` javascript
const sharedModuleRules = {
  rules: [
    {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          babelrc: false
        }
      }
    },
  ]
}

module.exports = () => {
  return {
    entry: './src/index.jsx',
    output: {
      filename: './client.js',
    },
    module: sharedModuleRules
  }
}
```
7. Create a `src` directory in the root of your plugin directory.
8. Create an `index.jsx` file in the `src` directory with the following content:
``` javascript
import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from './App.jsx';

hydrateRoot(document.getElementById("root"), <App anyProps="anyContent" />);
```
9. Create an `App.jsx` file in the `src` directory with the desired content.
10. You don't need to build your plugin, because it will be built automatically when you run `yarn build:wc` in the root of the project.
11. Go to the `packages/admin` directory and add the name of your plugin to the `installed_plugins` array in the `index.js` file.
