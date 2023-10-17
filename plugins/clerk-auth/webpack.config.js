const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
        mode,
        entry: "./src/index.jsx",
        devServer: {
            hot: true,
            open: true
        },
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js"
        },
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new Dotenv(),
            new webpack.HotModuleReplacementPlugin()
        ]
    }

};