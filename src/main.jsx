import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyWebsiteApp } from './MyWebsiteApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyWebsiteApp />
  </StrictMode>,
)
