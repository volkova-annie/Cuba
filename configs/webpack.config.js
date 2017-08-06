const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const isDev = !process || process.env.NODE_ENV !== 'production';

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
     'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new ExtractTextPlugin({
    filename: '[name].css',
    disable: false,
    allChunks: true
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    EventSource: 'imports-loader?this=>global!exports-loader?global.EventSource!event-source-polyfill',
  }),
]

let localIdentName = '[local]__[hash:base64:8]'

if (!isDev) {
  plugins.push(new BabiliPlugin())

  localIdentName = '[hash:base64:8]'
}

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'static')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: localIdentName
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(process.cwd(), 'configs', 'postcss.config.js')
                },
                sourceMap: 'inline'
              }
            }
          ]
        })
      }
    ]
  },
  plugins,
  devtool: isDev ? 'source-map' : false
}
