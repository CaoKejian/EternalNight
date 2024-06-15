import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.less'

const NewDemoTwo: React.FC = () => {
  return <div className="wrapper"></div>
}

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(<NewDemoTwo />)

export { NewDemoTwo }
