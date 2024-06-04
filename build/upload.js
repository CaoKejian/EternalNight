/**
 * @module 上传(更新)UI组件库
 * @author Cao Kejian
 * @date 2024-06-04
 */
const fs = require('fs')
const path = require('path')

const componentsDirectory = path.resolve(__dirname, '../package')

const readFileJson = async (cp) => {
  try {
    const metaPath = path.join(componentsDirectory, cp, 'meta.json')
    const metaContent = await fs.promises.readFile(metaPath, 'utf-8')
    return JSON.parse(metaContent)
  } catch(err) {
    throw Error('\x1b[31m' + `${cp} 组件缺少 meta.json 文件或 meta.json 文件不合规!` + '\x1b[0m')
  }

}
const componentEntries = fs.readdirSync(componentsDirectory)
  .filter(file => {
    const filePath = path.join(componentsDirectory, file)
    return fs.statSync(filePath).isDirectory() && file !== 'utils'
  })
  .map(async component => {
    const meta = await readFileJson(component)
    return meta ? {
      name: component,
      ...meta,
    } : null
  })

Promise.all(componentEntries).then(entries => {
  // 没组件信息的不能上传
  const cpInfoArr = entries.filter(entry => entry !== null)
  console.log(JSON.stringify(cpInfoArr))
  // 发送上传请求...
})
