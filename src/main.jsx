import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PassCodeProvider } from './Context'
ReactDOM.createRoot(document.getElementById('root')).render(
  <PassCodeProvider>

  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
  </PassCodeProvider>
)
