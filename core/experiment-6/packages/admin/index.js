const express = require('express');
const vm = require('vm');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const rateLimit = require('express-rate-limit');
const shouldInstallDynamically = true

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

const cached_plugins = new Map();

// // Sandbox was not being updated with new dependencies
// // Took it off the function and put it on the global scope
// // Alternatively, we could have passed it as a parameter and returned it
const sandbox = {
  require: require,
  console: console,
  process: process,
  React: React,
  ReactDOMServer: ReactDOMServer,
  module: {},
  exports: { default: {} }
};

// Remember to update this list when adding new plugins
// // Added plugin4 to the list
installed_plugins = ['plugin1', 'plugin2', 'plugin3', 'plugin4', 'template'];

app.get('/favicon.ico', (req, res) => {
  res.send('');
});

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="#">
      <title>Module Links</title>
    </head>
    <body>
      <h1>WebCrumbs</h1>
      <h3>Unlock, extend and customize your website</h3>
      <p>Think of this as the admin panel we've been working on at the admin folder. Soon enough, you'll be able to load and import plugins in a snap. Just one click and boom, they're in! Right now, this page is here to show you that it's entirely possible to load plugins dynamically from remote addresses. For the time being, we're running things off localhost on different ports, but down the road, keep an eye out for plugins loading from https://registry.webcrumbs.org/.</p>
      <p>Choose a plugin to dynamically load from a remote source with server-side-rendering:</p>
      ${installed_plugins.map(pluginName => `<button onclick="window.location.href='/${pluginName}'">${pluginName} (Port 3001)</button>`).join('')}
    </body>
    </html>
  `);
});

// // Moved sandbox to the global scope
async function fetchPlugin(pluginName) {
  if (cached_plugins.has(pluginName)) {
    return cached_plugins.get(pluginName);
  }
  const fetch = (await import('node-fetch')).default;

  if (!sandbox) {
    console.error('sandbox is not ready')
    throw new Error("sandbox is not defined or ready");
 }

  const packagePath = await fetch(`http://localhost:3001/plugins/${pluginName}/manifest`); // Adjust path as needed
  // console.log(packagePath)
  if (packagePath.statusText === 'OK') {
    const packageData = await packagePath.json()
    console.log(packageData)
    
    if (packageData.dependencies) {
      for (const [dependencyName, dependencyRange] of Object.entries(packageData.dependencies)) {
        console.log(`${dependencyName}@${dependencyRange}`)
        try {
          require.resolve(dependencyName); // Check if already installed
        } catch (error) {
          console.log(error)
          if (shouldInstallDynamically) { // Flag to control dynamic installation
            await installDependency(`${dependencyName}@${dependencyRange}`); // Install if missing
          } else {
            console.error('Error resolving dependency: ', error)
            throw new Error(`Dependency ${dependencyName}@${dependencyRange} is missing and dynamic installation is disabled.`);
          }
        }
        sandbox[dependencyName] = require(dependencyName); // Expose in sandbox
      }
    }
  }

  const server_response = await fetch(`http://localhost:3001/plugins/${pluginName}/server`);
  if (!server_response.ok) {
    throw new Error(`HTTP error! status: ${server_response.status}`);
  }
  const server = await server_response.text();

  const client_response = await fetch(`http://localhost:3001/plugins/${pluginName}/client`);
  if (!client_response.ok) {
    throw new Error(`HTTP error! status: ${client_response.status}`);
  }
  const client = await client_response.text();

  const pluginCode = { server, client };
  cached_plugins.set(pluginName, pluginCode);
  return pluginCode;
}

// // Eventually, we can discuss other strategies for installing dependencies
async function installDependency(dependency) {
  try {
    const { execSync } = require('child_process');
    execSync(`yarn add ${dependency}`, { stdio: 'inherit' }); // Use Yarn for installation
    // // Added to shut down the server and restart it
    // // It makes the server restart after installing the dependency
    // // Downside: it takes the server down for a few seconds
    process.exit(0);
  } catch (error) {
    console.error(`Failed to install dependency ${dependency}`);
    throw error;
  }
}

app.get('/:pluginName', async (req, res) => {
  const { pluginName } = req.params;

  try {
    // // Moved sandbox to the global scope
    const pluginCode = await fetchPlugin(pluginName);
    
    vm.createContext(sandbox);
    vm.runInNewContext(pluginCode.server, sandbox);
    const Plugin = sandbox.exports.default;
    const pluginServer = ReactDOMServer.renderToString(React.createElement(Plugin, { anyProps: 'anyContent'}));
    const pluginClient = pluginCode.client;
    
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head>
      <title>Plugin example: ${pluginName}</title>
      <link rel="shortcut icon" href="#">
      </head>
      <body>
        <h1>WebCrumbs</h1>
        <h3>Plugin example: ${pluginName}</h3>
        <div id="root">${pluginServer}</div>
        <script>${pluginClient}</script>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the module');
  }
});

app.get('/plugins/:pluginName/:env', async (req, res) => {
  const { pluginName, env } = req.params;
  const response = await fetchPlugin(pluginName);
  res.setHeader('Content-Type', 'application/javascript');
  res.send(response[env]);
});

// // Understand the purpose of this line
app.use('/plugins/:pluginName', express.static('/plugins/:pluginName'))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Admin Panel Server is running on http://localhost:${PORT}/`);
});