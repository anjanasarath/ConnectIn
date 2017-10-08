'use strict';

const config = require('config');
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './app/index.js',
    'webpack-dev-server/client?http://0.0.0.0:8090', // WebpackDevServer host and port
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [__dirname],
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {test: /\.css$/, use: ['style-loader','css-loader']},
      {test: /\.(png|jpg|gif)$/,use:[{loader: 'url-loader',options: {limit: 25000}}]}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8090
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.join(__dirname, './app/index.html')
    }),
    new webpack.IgnorePlugin(/^(buffertools)$/),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: config.webpack,
      appConfig: JSON.stringify(config.clientConfig)
    }),
    new webpack.LoaderOptionsPlugin({ debug: process.env === 'production' })
  ]
}

console.log('resolveLoader', path.resolve(path.join(__dirname, 'node_modules')))

// When inside Redux-Saga repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSagaSrc = path.join(__dirname, '..', '..', 'src')
var reduxSagaNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSagaSrc) && fs.existsSync(reduxSagaNodeModules)) {
  // Resolve Redux-Saga to source
  module.exports.resolve = { alias: { 'redux-saga': reduxSagaSrc } }
  // Compile Redux-Saga from source
  module.exports.module.loaders[0].include.push(reduxSagaSrc)
  module.exports.module.loaders[0].include.push(path.join(__dirname, '..', 'sagaMonitor'))
}
