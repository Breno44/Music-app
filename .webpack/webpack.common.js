const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, '..', 'src');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'dist');

module.exports = {
  entry: path.join(SRC_DIR, '/main/index.tsx'),
  output: {
    path: OUTPUT_DIR,
    filename: 'main-bundle-[hash].js',
    publicPath: '/',
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': SRC_DIR,
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
