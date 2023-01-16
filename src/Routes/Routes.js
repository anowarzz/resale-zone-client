import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers.js/AllSellers";
import Payment from "../Pages/Dashboard/Dashboard/Payment/Payment";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdvertizedProductDetails from "../Pages/Home/AdvertizedProducts/AdvertizedProductDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/category/:id",
        element: <Products />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://resale-zone-server.vercel.app/categoryProducts?id=${params.id}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
          const data = await res.json();
          return data;
        },
      },

    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [

      {
        path: "/dashboard/addProducts",
        element: <SellerRoute> <AddProduct /> </SellerRoute>
      },
      {
        path: "/dashboard/myProducts",
        element: <SellerRoute> <MyProducts /> </SellerRoute>
      },
      {
        path: "/dashboard/allBuyers",
        element: <AdminRoute> <AllBuyers /> </AdminRoute>
      },
      {
        path: "/dashboard/allSellers",
        element: <AdminRoute> <AllSellers /> </AdminRoute>
      },
      {
        path: "/dashboard/reported",
        element: <AdminRoute> <ReportedItems /> </AdminRoute>
      },
      {
        path: "/dashboard/myOrders",
        element: <BuyerRoute> <MyOrders /> </BuyerRoute>
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
