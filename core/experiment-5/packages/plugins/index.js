const express = require('express');
const path = require('path');
const app = express();

app.get('/plugins/:pluginName/client', (req, res) => {
  const { pluginName } = req.params;
  res.sendFile(path.join(__dirname, '/dist/' + pluginName, 'client.js'));
});
app.get('/plugins/:pluginName/server', (req, res) => {
    const { pluginName } = req.params;
    res.sendFile(path.join(__dirname, '/dist/' + pluginName, 'server.js'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Plugin Registry Server is running on http://localhost:${PORT}/`);
});