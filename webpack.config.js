const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: [
      'tether',
      'bootstrap-loader/extractStyles'
    ]
  },

  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: { extensions: [ '', '.js' ] },

  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', 'vendor.bundle.js'
    ),
    new webpack.ProvidePlugin({
      'window.Tether': 'tether'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],

  module: {
    loaders: [
      { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports?jQuery=jquery' },
      { test: /\.js$/, loaders: ['ng-annotate', 'nginject?deprecate', 'babel' ], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
      // {
      //   // test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   // loader: 'url?limit=10000'
      // },
      // {
      //   test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      //   loader: 'file'
      // },
    ],
  },

  postcss: [ autoprefixer ],

  sassLoader: {
    includePaths: [ 'src/styles' ]
  },
}
