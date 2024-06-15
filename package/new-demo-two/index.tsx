import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'

const NewDemoTwo: React.FC = () => {
  return <div className="wrapper">NewDemoTwo</div>
}

createRoot(document.getElementById('app')!).render(<NewDemoTwo />)

export { NewDemoTwo }
