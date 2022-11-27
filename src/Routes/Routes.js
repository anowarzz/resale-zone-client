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
        path: '/products',
        element: <Products />,
        loader: () => fetch('http://localhost:5000/products')
      },
      // {
      //   path: '/category/:id',
      //   element: <Products />,
      //   loader: ({params}) => {
      //     return fetch(`http://localhost:5000/products/${params.id}`)
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