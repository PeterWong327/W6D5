const path = require('path');

module.exports = {
  entry: "./widgets.jsx",
  context: __dirname,
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};