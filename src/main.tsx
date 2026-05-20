import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './client-init'
import './web3-init'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
