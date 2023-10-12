const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "hello-dolly.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", 
    }),
  ],
};
