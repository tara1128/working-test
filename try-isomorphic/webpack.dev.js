/*
  Configuration of DEV building with webpack
  Latest modified 2016-11-21 19:21
*/

console.log('The \"webpack.dev.js\" is now working, for DEV environment ... ...');

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var rucksack = require('rucksack-css')
var autoprefixer = require('autoprefixer')

var includes = [
  path.resolve(__dirname, 'client'),
  path.resolve(__dirname, 'common'),
  path.resolve(__dirname, 'server')
]

module.exports = {
  devtool: '#source-map',
  entry: [
    'eventsource-polyfill', /* For IE */
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, '/public/build'),
    filename: '[name].js',
    publicPath: '/build/',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: includes,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react-hmre']
          // plugins: [
            // ['inline-replace-variables', { '__SERVER__': false }]
          // ]
        }
      },
      { test: /\.css$/, include: includes, loader:'style!css!less!postcss'},
      { test: /\.less$/, include: includes, loader:'style!css!postcss' },
      { test: /\.(png|jpg|jpeg|gif|webp)$/i, loader: 'url?limit=10000' },
      { test: /\.woff2?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'url?limit=10000&minetype=image/svg+xml' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html?$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  postcss: [
    rucksack(),
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']  
    })
  ],
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', path.join(__dirname, '/node_modules')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules', path.join(__dirname, '/node_modules')]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'combo.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

