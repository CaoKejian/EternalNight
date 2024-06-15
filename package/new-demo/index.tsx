import React from 'react'
import { createRoot } from 'react-dom/client'

import Upload from './component/upload'

const NewDemo: React.FC = () => {
  return <Upload />
}

createRoot(document.getElementById('app')!).render(<NewDemo />)


export { NewDemo }
