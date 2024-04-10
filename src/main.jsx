import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/home.jsx";
import Profile from "./profileUpdate.jsx/updateprofile.jsx";
import LogIn from "./log/LogIn.jsx";
import Register from "./register/register.jsx";
import AuthProvider from "./context/authprovider.jsx";
import Userprofile from "./userprofile/userprofile.jsx";
import UpdateProfile from "./profileUpdate.jsx/updateprofile.jsx";
import LogOut from "./log/logOut.jsx";
import PriveteRoute from "./privetroute/priveteRoute.jsx";
// import Authprovider from './context/authprovider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <PriveteRoute><Userprofile></Userprofile></PriveteRoute>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/updateprofile",
        element: <PriveteRoute><UpdateProfile></UpdateProfile></PriveteRoute>,
      },
      {
        path: "/logout",
        element: <LogOut></LogOut>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
