import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'

// Routers = / /login /cadastro /esqueceu-senha
const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
