import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle  from "./styles/global";
   
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './Components/Error'
import Login from './Components/Login'
import Register from './Components/Register'


// Routers = / /error /login /cadastro /esqueceu-senha
const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cadastro',
        element: <Register />,
      },
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
