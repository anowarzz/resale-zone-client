import {  faCheckCircle,faClockFour, faLocationDot, faMarker, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductCard = ({product, setBookingProduct}) => {
    return (
      <div className="card bg-base-100 shadow-2xl max-w-2xl border-gray-100 border">
      <figure ><img src={product?.image} alt="product" className='h-80' /></figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl">
          {product?.title}
        </h2>
          <p className="badge badge-primary text-semibold pl-1"> Condition : <span className='pl-1'>{product?.condition}</span></p>
        <div className="card-actions justify-end my-2">
          <p className="badge badge-outline font-bold "> <span className='text-primary'>Resale Price : {product?.resalePrice}</span></p> 
          <p className="badge badge-outline font-bold"><span className='text-error'>Original Price : ${product?.originalPrice}</span></p>
        </div>
        <p className='font-semibold'> <FontAwesomeIcon icon={faClockFour} className="pr-1"/> Used Time : {product?.usedTime}</p>
        <p className='font-semibold'><FontAwesomeIcon icon={faLocationDot} className="pr-1"/>  {product?.location}</p>
        <p className='font-semibold'> <FontAwesomeIcon icon={faMarker} className="pr-1"/> Posted On :  {product?.postedTime}</p>
        <p className='font-semibold'>Seller : {product?.sellerName} 
        {
          product?.isSellerVerified && <span className='pl-1'><FontAwesomeIcon icon={faCheckCircle}/></span>
        }
        </p> 

        <label
        onClick={() => setBookingProduct(product)}
        htmlFor="booking-modal" className='btn btn-success hover:btn-info mt-8'>Book Now</label>
      </div>
    </div>
    );
};

export default ProductCard;