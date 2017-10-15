const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const SRC_PATH = resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: ['./']
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  context: SRC_PATH,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: SRC_PATH
      },

      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [
    new HtmlPlugin({
      title: 'React Bootstrap'
    }),
  ],
};
