import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Register from './Components/Views/Auth/Register/Register';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Views/Auth/Login/Login';
import AdminLogin from './Components/Views/Auth/Admin/AdminLogin';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/admin/login",
        element: <AdminLogin></AdminLogin>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster toastOptions={{
        position: 'top-center'
      }}></Toaster>
    </Provider>
  </React.StrictMode >
)
