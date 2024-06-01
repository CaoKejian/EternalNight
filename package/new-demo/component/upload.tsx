import * as React from 'react'
import '../index.less'
import { xxx } from '../../utils'

const Upload: React.FC = () => {
  const uploadComponent = async () => {
    xxx()
    // const res = await http.post('http://localhost:3000/v1/upload', {
    //   component: '组件信息',
    //   img: '1',
    //   desc: 'hahaha test',
    //   uploadTime: '2024/6/1',
    //   uploader: 'colin',
    // })
    // console.log(res)
  }
  return <div className="wrapper" onClick={uploadComponent}>Hello</div>
}

export default Upload
