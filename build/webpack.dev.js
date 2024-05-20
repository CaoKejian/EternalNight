/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  stats: 'errors-warnings',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    open: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env', {}]
                ]
              }
            }
          },
          'less-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
})
