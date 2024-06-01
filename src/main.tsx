import React from 'react'
import ReactDOM from 'react-dom/client'
import Document from './Document.tsx'
import './index.css'
import DocumentWrapper from './DocumentWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DocumentWrapper>
      <Document />
    </DocumentWrapper>
  </React.StrictMode>,
)
