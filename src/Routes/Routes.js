import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers.js/AllSellers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
  
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/blog",
        element: <Blog />
      },

      {
        path: '/category/:id',
        element: <PrivateRoute>  <Products />  </PrivateRoute>,
        loader: async ({params}) => {
          const res = await fetch(`http://localhost:5000/categoryProducts?id=${params.id}`, {
            headers: {
              authorization : `Bearer ${localStorage.getItem('accessToken')}`
          }
          })
          const data = await res.json();
          return data;
        }
      },
      // {
      //   path: 'products/categoryId/:id',
      //   element: <Products />,
      //   loader: ({params}) => {
      //     return fetch(`http://localhost:5000/products?categoryId=${params.id}`)
      //   }
      // }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
    children: [
      {
      path: '/dashboard/myOrders',
      element: <MyOrders />
      },
      {
        path: "/dashboard/addProducts",
        element: <AddProduct />
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts />
      },
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers />
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSellers />
      },
    ]
  }
]);


export default router;