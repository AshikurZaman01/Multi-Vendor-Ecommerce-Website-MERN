import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
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
import SellerLogin from './Components/Views/Auth/SellerDashboard/SellerLogin/SellerLogin';
import SellerMainLayout from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerMainLayout';
import Dashboard from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/Dashboard/Dashboard';
import Addproducts from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/AddProdcuts/Addproducts';
import AllProducts from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/AllProducts/AllProducts';
import DiscountProdcuts from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/DiscountProdcuts/DiscountProdcuts';
import SellerOrders from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/Orders/SellerOrders';
import SellerPayments from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/SellerPayments/SellerPayments';
import ChatWithCustomers from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/ChatWithCustomer/ChatWithCustomers';
import ChatWithSupport from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/ChatWithSupport/ChatWithSupport';
import SellerPro from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/SellerProfile/SellerPro';
import EditProduct from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/AllProducts/EditProduct/EditProduct';
import SellerOrderDetails from './Components/Views/Auth/SellerDashboard/SellerMainLayout/SellerDashboard/Orders/SellerOrderDetails/SellerOrderDetails';

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
  },
  {
    path: "/sellerMainLayout",
    element: <SellerMainLayout></SellerMainLayout>,
    role: "seller",
    status: "active",
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" replace />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "addProducts",
        element: <Addproducts />
      },

      {
        path: "allProducts",
        element: <AllProducts />,
        role: "seller",
        status: "active",
      },
      {
        path: "editProduct/:id",
        element: <EditProduct />,
      },
      {
        path: "discountProducts",
        element: <DiscountProdcuts />
      },
      {
        path: "sellerOrders",
        element: <SellerOrders />,
        role: "seller",
        status: ["active", "deactive"],
      },
      {
        path : "sellerOrder/:id",
        element: <SellerOrderDetails/>
      },
      {
        path: "sellerPayments",
        element: <SellerPayments />,
        role: "seller",
        status: "active",
      },
      {
        //seller to customer
        path: "chatCustomers",
        element: <ChatWithCustomers />,
        status: "active"
      },
      {
        path: "chatCustomers/:customerID",
        element: <ChatWithCustomers />,
        status: "active"
      },
      {
        // chat support
        path: "chatSupport",
        element: <ChatWithSupport />,
        ability: ['active', 'deactive', 'pending']
      },
      {
        path: "sellerProfile",
        element: <SellerPro />,
        role: 'seller',
        status: 'active'
      }
    ]
  }



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
