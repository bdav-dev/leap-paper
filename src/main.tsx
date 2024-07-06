import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DocumentWrapper from './leappaper/DocumentWrapper.tsx'
import DocumentProperties from './leappaper/DocumentProperties.tsx'
import config from '../leappaper.config.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DocumentWrapper>
      <DocumentProperties>
        {config.document}
      </DocumentProperties>
    </DocumentWrapper>
  </React.StrictMode>,
)
