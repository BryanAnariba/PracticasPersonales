import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StudentProvider } from './context/StudentContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StudentProvider>
    <App />
  </StudentProvider>
)
