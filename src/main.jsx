import { StrictMode } from 'react'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import ProvideRouter from './Router Provider/ProvideRouter';
import Profile from './components/Pages/Profile';
import ServicesDetails from './components/Pages/ServicesDetails';
import ForgatePass from './components/Pages/ForgatePass';
import { createRoot } from 'react-dom/client';
import AuthProvider from './Provider/AuthProvider';



const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: '/services',
          Component: Services
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          Component: SignUp
        },
        {
          path: '/myprofile',
          element: <ProvideRouter><Profile></Profile></ProvideRouter>
        },
        {
          path: '/details/:Id',
          element: <ProvideRouter><ServicesDetails></ServicesDetails></ProvideRouter>
        },
        {
          path: '/forget/:email',
          element: <ForgatePass></ForgatePass>
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
   <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
)