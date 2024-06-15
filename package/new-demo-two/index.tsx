import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'

const NewDemoTwo: React.FC = () => {
  return <div className="wrapper">NewDemoTwo</div>
}

const root = createRoot(document.getElementById('app')!)
root.render(<NewDemoTwo />)

export { NewDemoTwo }
