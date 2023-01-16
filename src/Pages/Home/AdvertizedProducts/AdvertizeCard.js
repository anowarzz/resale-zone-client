import React from "react";
import { Link } from "react-router-dom";

const AdvertizeCard = ({ adProduct }) => {
  return (
    <Link className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-10  mx-auto hover:bg-blue-600">
      <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
          {adProduct?.title}
        </h1>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={adProduct?.image}
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 hover:bg-blue-700">
        <h1 className="text-lg font-bold text-white text-center">
          ${adProduct?.resalePrice}
        </h1>
      </div>
    </Link>
  );
};

export default AdvertizeCard;
