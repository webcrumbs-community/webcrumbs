import http from 'http';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './src/App.jsx';

http.createServer((req, res) => {
  if (req.url.endsWith('/client.js')) {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(fs.readFileSync('./dist/client.js'), 'utf8');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head></head>
      <body>
        <div id="root">${renderToString(React.createElement(App, { env: "server" }))}</div>
        <script src="/client.js"></script>
      </body>
    </html>
    `);
}).listen(3000);