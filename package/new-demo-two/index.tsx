import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

const NewDemoTwo: React.FC = () => {
  return <div className="wrapper">new-demo-two</div>
}

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(<NewDemoTwo />)
