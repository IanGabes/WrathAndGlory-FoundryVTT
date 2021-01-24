const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    publicPath: ''
  },
  entry: [
    './scripts/common/hooks.js'
  ],
  context: path.join(__dirname, "./"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/common/hooks.js',
    publicPath: ""
  },
  /* SASS --> CSS */ 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'asset/font/', to: 'asset/font/' },
        { from: 'asset/image/', to: 'asset/image/' },
        { from: 'asset/preview/', to: 'asset/preview/' },
        { from: 'style/', to: 'style/' },
        { from: 'template/', to: 'template/' },
        { from: 'system.json', to: 'system.json' },
        { from: 'template.json', to: 'template.json' }
      ],
    }),
  ],
};
