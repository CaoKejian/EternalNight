const fs = require('fs')
const path = require('path')

const componentsDirectory = path.resolve(__dirname, '../package')
const componentEntries = fs.readdirSync(componentsDirectory)
  .filter(file => fs.statSync(path.join(componentsDirectory, file)).isDirectory())
  .map(component => ({
    name: component,
    entry: path.join(componentsDirectory, component, 'index.tsx')
  }))
const webpackEntry = {}
componentEntries.forEach(entry => {
  webpackEntry[entry.name] = entry.entry
})

module.exports = {
  componentEntries,
  webpackEntry
}