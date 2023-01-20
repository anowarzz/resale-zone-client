import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";
import AdvertizeCard from "./AdvertizeCard";
import svg from '../../../assets/pattern-bg.png'
import './AdvertizedProducts.css'


const AdvertizedProducts = () => {
  const url = `https://resale-zone-server.vercel.app/advertisedProducts`;
  const {
    data: advertisedProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisedProducts", true],
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
    <div>
      { isLoading && <Loading/>
  }
      {advertisedProducts.length > 0 && (
        <div className="advertise" >
          <h3 className="text-4xl text-yellow-400  pt-4 text-center font-bold mb-16 mx-auto">
            Advertized Products
          </h3>

          <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3">
            {advertisedProducts?.map((adProduct) => (
              <AdvertizeCard key={adProduct._id} adProduct={adProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertizedProducts;
