import React from 'react'
import { createRoot } from 'react-dom/client'

import Upload from './component/upload'

const NewDemo: React.FC = () => {
  return <Upload />
}

const root = createRoot(document.getElementById('app')!)
root.render(<NewDemo />)

export { NewDemo }
