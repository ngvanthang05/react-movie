import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { MovieProvider } from './context/MovieDetailContext.jsx'
import router from './router/route.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>,
)
