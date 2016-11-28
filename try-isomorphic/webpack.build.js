/*
  Configuration of building with webpack
  Latest modified 2016-11-23 10:59
*/

console.log('The \"webpack.build.js\" is working, for production environment ... ...');

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractStyle = new ExtractTextPlugin('all.min.css')
var autoprefixer = require('autoprefixer')
var rucksack = require('rucksack-css')

var myNodeModules = fs.readdirSync('node_modules').filter(function (i) {
  return ['.bin', '.npminstall'].indexOf(i) === -1
})

var includes = [
  path.resolve(__dirname, 'client'),
  path.resolve(__dirname, 'common'),
  path.resolve(__dirname, 'server')
]

module.exports = [{
  name: 'Client side render',
  devtool: 'cheap-source-map',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public/build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: includes,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, include: includes, loader: extractStyle.extract(['css', 'postcss']) },
      { test: /\.less$/, include: includes, loader: extractStyle.extract(['css', 'less', 'postcss']) },
      { test: /\.(png|jpg|jpeg|gif|webp)$/i, loader: 'url?limit=10000' },
      { test: /\.woff2?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'url?limit=10000&minetype=image/svg+xml' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html?$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  postcss: [ rucksack(), autoprefixer() ],
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', path.join(__dirname, '/node_modules')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules', path.join(__dirname, '/node_modules')]
  },
  plugins: [
    extractStyle,
    new webpack.optimize.CommonsChunkPlugin('common', 'combo.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __SERVER__: false
    })
  ]
}, {
  name: 'Server side render',
  devtool: 'cheap-source-map',
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'server-bundle.js',
    publicPath: '/build/',
    libraryTarget: 'commonjs'
  },
  /* 'externals ' specify dependencies that shouldn’t be resolved by webpack
  /* but should become dependencies of the resulting bundle.
  /* The kind of the dependency depends on output.libraryTarget */
  externals: [
    /^[a-z\-a-z]+$/,
    /^[a-z\-0-9]+$/,
    function(context, request, callback) { /* The function is called on each dependency */
      var pathStart = request.split('/')[0]
      if (pathStart && (pathStart[0] === '!') || myNodeModules.indexOf(pathStart) >= 0 && request !== 'webpack/hot/signal.js') {
        return callback(null, 'commonjs ' + request)
      }
      callback()
    }
  ],
  target: 'node', /* Compile for usage in a node.js-like environment (use require to load chunks) */
  node: {
    fs: 'empty',
    __dirname: true,
    __filename: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: includes,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015'
      },
      { test: /\.(css|less)$/, loader: 'null' },
      { test: /\.woff2?$/, loader: 'null' },
      { test: /\.ttf$/, loader: 'null' },
      { test: /\.eot$/, loader: 'null' },
      { test: /\.svg$/, loader: 'null' },
      { test: /\.(png|jpg|jpeg|gif|webp)$/i, loader: 'url?limit=10000' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    modulesDirectories: ['web_modules', 'node_modules', path.join(__dirname, '/node_modules')],
  },
  resolveLoader: {
    modulesDirectories: ['node_modules', path.join(__dirname, '/node_modules')]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    /*
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __SERVER__: true
    })
  ]
}]
