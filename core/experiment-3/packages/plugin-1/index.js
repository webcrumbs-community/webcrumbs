// index.js for the Module Server
const express = require('express');
const app = express();

// Serve a JavaScript module
app.get('/modules/:moduleName', (req, res) => {
  const { moduleName } = req.params;
  res.type('application/javascript');
  res.send(`export function ${moduleName}() { return 'This is module ${moduleName}'; }`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Module server listening on port ${PORT}`);
});
