/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const ProgressPlugin = require('webpack')
const { webpackEntry } = require('./compile.js')

module.exports = {
  entry: webpackEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.mjs','.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/, // 匹配 .js, .jsx, .ts 和 .tsx 文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead',
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react'
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new ProgressPlugin(function(percentage, msg) {
    //   console.log('🚀','\x1b[32mBuilding ' + msg + '... (' + Math.round(percentage * 100) + '%)\x1b[0m');
    // }),
  ],
}
