import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Note: Ensure you have @tailwind directives in a .css file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
