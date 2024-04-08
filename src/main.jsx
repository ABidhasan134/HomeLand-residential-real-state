import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/home.jsx';
import Profile from './profileUpdate.jsx/profile.jsx';
import LogIn from './logIn/LogIn.jsx';
import Register from './register/register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/login",
        element:<LogIn></LogIn>
      },
      {
        path: "register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
