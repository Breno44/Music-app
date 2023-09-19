const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: './public',
    },
    port: 3000,
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(''),
    }),
    new HtmlWebpackPlugin({
      template: './template.dev.html',
    }),
  ],
});
