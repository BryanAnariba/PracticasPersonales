import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import 'animate.css';

import { AuthContextProvider } from './context/AuthContext';
import { ImageContextProvider } from './context/ImageContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AuthContextProvider>
        <ImageContextProvider>
          <App />
        </ImageContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
)
