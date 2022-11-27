import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
        <div>
          <div className="flex items-center justify-center w-64 h-64  mb-4 rounded-full bg-transparent">
        <img src={product?.image} alt="" />
          </div>
          <h6 className="mb-2 text-3xl text-center font-semibold leading-5">{product?.title}</h6>
        </div>
      </div>
    );
};

export default ProductCard;