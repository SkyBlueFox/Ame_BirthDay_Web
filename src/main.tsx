import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

// ใช้ HashRouter เมื่อ build โปรดักชัน (Vercel)
const Router: React.FC<{children: React.ReactNode}> =
  import.meta.env.PROD ? (HashRouter as any) : (BrowserRouter as any)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
