const config = require('./webpack.config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

config.output.filename = '[name].[hash].js',

config.plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new ExtractTextPlugin('[name].[hash].css', { allChunks: true }),
  new webpack.optimize.CommonsChunkPlugin(
    'vendor', 'vendor.bundle.js'
  ),
  new webpack.ProvidePlugin({
    'window.Tether': 'tether'
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
];

module.exports = config;
