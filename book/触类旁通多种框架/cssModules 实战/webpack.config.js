const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname + '/src'
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]')
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css')
  ]
}