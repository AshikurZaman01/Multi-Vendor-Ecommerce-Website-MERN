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
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import { Toaster } from 'react-hot-toast'
import Seller from './Components/Views/Seller/Seller';
import AdminDashboard from './Components/Views/Auth/Admin/AdminDashboard/Dashboard/AdminDashboard';
import AdminMainLayout from './Components/Views/Auth/Admin/AdminMainLayout/AdminMainLayout';
import AdminLogin from './Components/Views/Auth/Admin/AdminLogin/AdminLogin';
import Orders from './Components/Views/Auth/Admin/AdminDashboard/Orders/Orders';
import Category from './Components/Views/Auth/Admin/AdminDashboard/Category/Category';
import AdminSeller from './Components/Views/Auth/Admin/AdminDashboard/AdminSeller/AdminSeller';
import PaymentRequest from './Components/Views/Auth/Admin/PaymentRequest/PaymentRequest';
import DeactiveSeller from './Components/Views/Auth/Admin/AdminDashboard/DeactiveSeller/DeactiveSeller';
import SellerRequests from './Components/Views/Auth/Admin/AdminDashboard/SellerRequests/SellerRequests';
import LiveChat from './Components/Views/Auth/Admin/LiveChat/LiveChat';
import OrdersDetails from './Components/Views/Auth/Admin/AdminDashboard/Orders/OrdersDetails/OrdersDetails';
import SellerDashboard from './Components/Views/Auth/SellerDashboard/SellerLogin/SellerLogin';
import SellerLogin from './Components/Views/Auth/SellerDashboard/SellerLogin/SellerLogin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },

  {
    path: "/seller",
    element: <Seller />
  },






  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminMainLayout></AdminMainLayout>,
    children: [

      {
        path: "dashboard",
        element: <AdminDashboard />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "orderDetails/:id",
        element: <OrdersDetails />
      },

      {
        path: "category",
        element: <Category />
      },
      {
        path: "seller",
        element: <AdminSeller />
      },
      {
        path: "paymentRequest",
        element: <PaymentRequest />
      },
      {
        path: "deactiveSeller",
        element: <DeactiveSeller />
      },
      {
        path: 'sellerRequests',
        element: <SellerRequests />
      },
      {
        path: 'liveChat',
        element: <LiveChat />
      }


    ]
  },


  {
    path: "/sellerLogin",
    element: <SellerLogin />,
    children: [
      {
        path: "/sellerDa",
        element: <SellerDashboard />
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
