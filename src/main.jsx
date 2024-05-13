import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeChangeProvider } from './context/ThemeChangeContext.jsx';
   
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/Error'
import Login from './components/Login'
import Register from './components/Register'


// Routers = / /error /login /cadastro /esqueceu-senha
const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to='/login' />,
      },
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
    <ThemeChangeProvider>
      <RouterProvider router={router} />
    </ThemeChangeProvider>
  </React.StrictMode>
)
