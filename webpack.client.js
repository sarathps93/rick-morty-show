const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = require('./env');

const outPutFolder = env === 'production' ? 'build' : 'dist';

module.exports = {
  mode: env,
  entry: [
    './src/client/index.jsx',
    './src/styles/root-sass.scss',
  ],
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, outPutFolder),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpg|pdf|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
