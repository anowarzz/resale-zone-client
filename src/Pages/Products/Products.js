import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import BookingModal from "./BookingModal/BookingModal";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();

  const [bookingProduct, setBookingProduct] = useState(null);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <h2 className="mt-4 mb-10 text-2xl md:text-4xl font-semibold text-center">
        {" "}
        Buy Your Favorite Laptop From Our Collection
      </h2>

      <div className="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-2">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setBookingProduct={setBookingProduct}
          />
        ))}
      </div>
      {bookingProduct && (
        <BookingModal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
        />
      )}
    </div>
  );
};

export default Products;
