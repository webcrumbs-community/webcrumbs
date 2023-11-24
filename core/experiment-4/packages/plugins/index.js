const express = require('express');
const path = require('path');
const app = express();

// Serve the JavaScript bundle file directly
app.get('/plugins/:pluginName', (req, res) => {
    const { pluginName } = req.params;
    res.sendFile(path.join(__dirname, '/dist', pluginName + '.js'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
