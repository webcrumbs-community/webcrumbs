const express = require('express');
const vm = require('vm');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);


// Function to fetch a module from the Module Server
async function fetchModule(pluginName) {
  const fetch = (await import('node-fetch')).default;
  const response = await fetch(`http://localhost:3001/plugins/${pluginName}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.text();
}

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Module Links</title>
    </head>
    <body>
      <h1>WebCrumbs</h1>
      <h3>Unlock, extend and customize your website</h3>
      <p>Think of this as the admin panel we've been working on at the admin folder. Soon enough, you'll be able to load and import plugins in a snap. Just one click and boom, they're in! Right now, this page is here to show you that it's entirely possible to load plugins dynamically from remote addresses. For the time being, we're running things off localhost on different ports, but down the road, keep an eye out for plugins loading from https://registry.webcrumbs.org/.</p>
      <p>Choose a plugin to dynamically load from a remote source with server-side-rendering:</p>
      <button onclick="window.location.href='/plugin1'">Plugin1 (Port 3001)</button>
      <button onclick="window.location.href='/plugin2'">Plugin2 (Port 3001)</button>
    </body>
    </html>
  `);
});

app.get('/:pluginName', async (req, res) => {
  const { pluginName } = req.params;

  try {
    const moduleCode = await fetchModule(pluginName);
    
    const sandbox = {
      require: require,
      module: {},
      console: console,
      React: React,
      ReactDOMServer: ReactDOMServer
    };

    vm.createContext(sandbox);
    vm.runInNewContext(moduleCode, sandbox);
    const Plugin = sandbox.module.exports;
    const renderedComponent = ReactDOMServer.renderToString(React.createElement(Plugin));

    res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Plugin Example</title></head>
      <body>
        <h1>WebCrumbs</h1>
        <h3>Plugin example</h3>
        <div id="app">${renderedComponent}</div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the module');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SSR server listening on port ${PORT}`);
});