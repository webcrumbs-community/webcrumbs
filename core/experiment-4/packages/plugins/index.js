const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Serve the JavaScript bundle file directly
app.get('/plugins/:pluginName', limiter, (req, res) => {
    const { pluginName } = req.params;
    res.sendFile(path.join(__dirname, '/dist', pluginName + '.js'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
