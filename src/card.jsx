import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './card/card.css'
import CardApp from './card/CardApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardApp />
  </StrictMode>,
)
