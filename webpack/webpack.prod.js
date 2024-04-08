const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') 

module.exports = merge(base, {
  mode: 'production', // 生产模式
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          'less-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true  // 多进程并发执行，提升构建速度 。 运行时默认的并发数：os.cpus().length - 1
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[hash:8].css', // 将css单独提测出来放在assets/css 下
    }),
  ],
})
