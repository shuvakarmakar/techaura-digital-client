import { createRoot } from 'react-dom/client'
import * as React from "react";
import './index.css'
import { router } from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
