import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import DashboardNavbar from "../../../Shared/Navbar/DashboardNavbar";
import MyOrderCard from "./MyOrderCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myOrders?email=${user?.email}`;

  const { data: myOrders = [] } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
          headers: {
              authorization : `Bearer ${localStorage.getItem('accessToken')}`
          }
      });
      const data = await res.json();
      return data;
    },
  });

  return (

      
      <div className="mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold text-center my-8">
        My Orders
      </h2>

      {
        myOrders?.length < 1 && <>
        <h3 className="text-center text-blue-500 text-lg font-semibold mt-10">You Have Not Placed Any Order Yet
            </h3>
            </>
      }

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
            myOrders?.map(order => <MyOrderCard key={order._id} order={order}/>)
        }
      </div>
    </div>
  );
};

export default MyOrders;
