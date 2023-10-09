// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'hello-dolly.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
