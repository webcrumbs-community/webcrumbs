// index.js for the SSR Server
const express = require('express');
const { NodeVM } = require('vm2'); // For executing code in a sandbox
const app = express();

// Function to fetch a module from the Module Server
async function fetchModule(port, moduleName) {
  const response = await fetch(`http://localhost:${port}/modules/${moduleName}`);
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
      <button onclick="window.location.href='/3001/Plugin1'">Plugin 1 (Port 3001)</button>
      <button onclick="window.location.href='/3002/Plugin2'">Plugin 2 (Port 3002)</button>
    </body>
    </html>
  `);
});

app.get('/:port/:moduleName', async (req, res) => {
  const { port, moduleName } = req.params;

  try {
    const moduleCode = await fetchModule(port, moduleName);
    const vm = new NodeVM({
      console: 'inherit',
      sandbox: {},
    });

    // Correctly replace the ES6 export syntax with CommonJS syntax
    const commonJSModuleCode = moduleCode.replace('export function', 'module.exports = function');

    // Execute the transformed code in the VM context
    const executeFunction = vm.run(commonJSModuleCode);

    // Execute the exported function and get the result
    const result = executeFunction();

    res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Plugin Example</title></head>
      <body>
        <h1>WebCrumbs</h1>
        <h3>Plugin example</h3>
        <code>${result}</code>
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