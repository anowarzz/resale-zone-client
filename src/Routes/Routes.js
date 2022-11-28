import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
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
        path: "/login",
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
        element: <PrivateRoute> <Products /> </PrivateRoute>,
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
    element: <DashboardLayout />,
    children: [
      {
      path: '/dashboard/myOrders',
      element: <MyOrders />
      }
    ]
  }
]);


export default router;