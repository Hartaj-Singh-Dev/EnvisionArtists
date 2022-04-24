import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ScrollObserver from './utils/scroll-observer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ScrollObserver>
    <App />
  </ScrollObserver>
  </React.StrictMode>
)
