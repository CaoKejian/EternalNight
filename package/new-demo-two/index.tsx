import React from 'react'
import { createRoot } from 'react-dom/client'
import * as s from './index.less'

const NewDemoTwo: React.FC = () => {
  return <div className={s.wrapper}>NewDemoTwo</div>
}
if (process.env.APP_NAME !== 'XLP') {
  createRoot(document.getElementById('app')!).render(<NewDemoTwo />)
}
export { NewDemoTwo }
