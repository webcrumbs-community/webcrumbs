const sharedModuleRules = {
  rules: [
    {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          babelrc: false
        }
      }
    },
  ]
}

module.exports = () => {
  return {
    entry: './src/index.jsx',
    output: {
      filename: './client.js',
    },
    module: sharedModuleRules
  }
}