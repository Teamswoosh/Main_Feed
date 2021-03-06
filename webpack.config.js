const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  devtool: 'source-map',
  entry: "./src/index.jsx",
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3001,
    proxy: { "/api/**": { target: 'http://localhost:3001', secure: false } }
  },
  module: {    
    rules: [
      {
        test: /\.jsx?$/, //look for any file name that ends with .js and with .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};