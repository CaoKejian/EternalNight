import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.less'
const NewDemo: React.FC = () => {
  return <div className="wrapper">new-demo</div>
}

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(<NewDemo />)
