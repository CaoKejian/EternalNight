const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') 

module.exports = merge(base, {
  stats: 'errors-warnings',
  mode: 'production', // 生产模式
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true 
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
      chunkFilename: '[name].chunk.css',
    }),
  ],
})
