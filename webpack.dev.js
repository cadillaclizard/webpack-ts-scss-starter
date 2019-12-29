// webpack.dev.js
const WebpackMerge = require('webpack-merge');
const commonCfg = require('./webpack.common.js');

module.exports = WebpackMerge(commonCfg, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      // CSS / SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
});