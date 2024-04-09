const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  stats: 'errors-warnings',
  mode: 'development',
  devServer: {
	  open: true,
    port: 8080,
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
