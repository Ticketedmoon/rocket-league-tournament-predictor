import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!)
    .render(
        /* Note: This StrictMode will render components twice to detect any rendering issues and warn early */
        <StrictMode>
            <App />
        </StrictMode>,
    )
