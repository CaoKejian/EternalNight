const fs = require('fs')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressPlugin = require('webpack').ProgressPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const componentsDirectory = path.resolve(__dirname, '../package')

const colors = {
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  green: '\x1b[1;32m',
  lightBlue: '\x1b[1;36m',
  reset: '\x1b[0m',
}

// 打包每个目录
const webpackEntry = {}
function output() {
  const componentEntries = fs.readdirSync(componentsDirectory)
    .filter(file => fs.statSync(path.join(componentsDirectory, file)).isDirectory())
    .map(component => ({
      name: component,
      entry: path.join(componentsDirectory, component, 'index.tsx')
    }));
  componentEntries.forEach(entry => {
    webpackEntry[entry.name] = entry.entry
  })
}

let canLog = true
let isDevelopmentMode = process.env.NODE_ENV === 'development'
const plugins = [
  new CleanWebpackPlugin(),
  new ProgressPlugin(function(percentage, msg) {
    if(percentage === 1 && canLog && isDevelopmentMode) {
      canLog = false
      console.log(`${colors.yellow}女 娲 启 动 成 功 ！\x1b[0m`)
      fs.readdirSync(componentsDirectory).forEach((projectName) => {
        const projectPath = path.join(componentsDirectory, projectName);
        if (fs.lstatSync(projectPath).isDirectory()) {
          console.log(`${colors.green}${projectName}\x1b[0m: ${colors.lightBlue} http://localhost:8080/${projectName}\x1b[0m`)
        }
      });
    }
    if(!isDevelopmentMode) {
      console.log('🚀', `${colors.green}Building\x1b[0m ${msg}... (\x1b[34m${Math.round(percentage * 100)}%\x1b[0m)`);
    }
  }),
];
function createPlugin() {
  for (const [key, value] of Object.entries(webpackEntry)) {
    const templatePath = path.resolve(__dirname, `../package/${key}/index.html`);
    // 确保每个项目都有对应的HTML模板文件
    if (fs.existsSync(templatePath)) {
      plugins.push(
        new HtmlWebpackPlugin({
          title: key + ' App',
          template: templatePath,
          filename: `${key}/index.html`,
          chunks: [key], 
        })
      );
    } else {
      console.error(`请确保${key}目录下有一个index.html文件， `);
    }
  }
}

output()
createPlugin()

module.exports = {
  webpackEntry,
  plugins,
}