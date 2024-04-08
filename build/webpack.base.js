const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressPlugin = require('webpack').ProgressPlugin;
const fs = require('fs');

const componentsDirectory = path.resolve(__dirname, '../package')
const componentEntries = fs.readdirSync(componentsDirectory)
  .filter(file => fs.statSync(path.join(componentsDirectory, file)).isDirectory())
  .map(component => ({
    name: component,
    entry: path.join(componentsDirectory, component, 'index.tsx')
  }));
const webpackEntry = {}

componentEntries.forEach(entry => {
  webpackEntry[entry.name] = entry.entry
})
class LogEntryStartPlugin {
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap('LogEntryStartPlugin', (nmf) => {
      nmf.hooks.beforeResolve.tap('LogEntryStartPlugin', (result) => {
        if (result && result.resource && compilation.entries[result.resource]) {
          const entryName = Object.keys(compilation.entries).find((key) => compilation.entries[key].indexOf(result.resource) !== -1);
          if (entryName) {
            console.log(`开始打包入口: ${entryName}`);
          }
        }
      });
    });
  }
}

module.exports = {
  entry: webpackEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/index.js',
    // chunkFilename: '[name].chunk.[hash:8].js',
  },
  resolve: {
    extensions: ['.mjs','.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /.(jsx?)|(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
                  useBuiltIns: 'usage', // 会根据配置的目标环境找出需要的polyfill进行部分引入
                  corejs: 3, // 使用 core-js@3 版本
                },
              ],
              ['@babel/preset-typescript'],
              ['@babel/preset-react'],
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
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressPlugin(function(percentage, msg) {
      console.log('🚀','\x1b[32mBuilding ' + msg + '... (' + Math.round(percentage * 100) + '%)\x1b[0m');
    }),
    new LogEntryStartPlugin()
  ],
}
