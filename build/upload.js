/**
 * @module 上传(更新)UI组件库
 * @author Cao Kejian
 * @date 2024-06-04
 * @description 快速更新组件，此时还不上传组件源代码（更快一些让搭建平台看到upload）
 */
const fs = require('fs')
const path = require('path')

// 获取所有组件文件名
const componentsDirectory = path.resolve(__dirname, '../package')

// 获得 meta.json 组件信息
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
  // 没组件信息的不能上传 或 后续给出 warning 提示
  const cpInfoArr = entries.filter(entry => entry !== null)
  console.log(JSON.stringify(cpInfoArr))
  // 发送上传请求... 组件信息更新在一个库里，让搭建平台快速看到组件upload

  if (true) {
    console.log('\x1b[1m' + '\x1b[33m' + '组件更新完成!' + '\x1b[0m');
  }
})
