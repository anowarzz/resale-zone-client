import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myOrders?email=${user?.email}`;

  const { data: myOrders = [] } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        //   headers: {
        //       authorization : `Bearer ${localStorage.getItem('accessToken')}`
        //   }
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="border mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        My Orders {myOrders.length}
      </h2>
    </div>
  );
};

export default MyOrders;
