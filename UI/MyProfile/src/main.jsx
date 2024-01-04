import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './Storage/LSToken.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <TokenProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </TokenProvider>,
)
