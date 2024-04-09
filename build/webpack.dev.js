const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')

module.exports = merge(base, {
  stats: 'errors-warnings',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: false, // 默认不自动打开
  },
})
