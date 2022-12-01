import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import MyOrderCard from "./MyOrderCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://resale-zone-server.vercel.app/myOrders?email=${user?.email}`;

  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold text-center my-8">
        My Orders
      </h2>

 {
  myOrders.length > 0 ?   <div>
  {myOrders?.length < 1 && (
       <>
         <h3 className="text-center text-blue-500 text-lg font-semibold mt-10">
           You Have Not Placed Any Order Yet
         </h3>
       </>
     )}

     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {myOrders?.map((order) => (
         <MyOrderCard key={order._id} order={order} />
       ))}
  </div>
     </div>
     : 
     <p className="text-center text-sky-500 font-semibold text-2xl md:text-3xl">You Have Not Placed Any Order Yet</p>
 }

    </div>
  );
};

export default MyOrders;
