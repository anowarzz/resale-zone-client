import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();

  console.log(products);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <h2>This is the product page {products?.length}</h2>

      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
