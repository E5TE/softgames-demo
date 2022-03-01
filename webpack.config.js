
const path = require('path');
// const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  // externals: [nodeExternals()], //This will ignore all external dependencies
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Pixi Demo',
      meta: {viewport: 'content=initial-scale=1, maximum-scale=1, user-scalable=no, minimum-scale=1, width=device-width, height=device-height'},
    }),
    new CopyPlugin({
      patterns: [{
        from: 'src/assets',
        to: 'assets',
      }],
    }),
    new webpack.ProgressPlugin(),
  ],

  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  devServer: {
  },
};
