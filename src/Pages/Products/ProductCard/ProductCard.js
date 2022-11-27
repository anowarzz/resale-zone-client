import { faLocation, faLocationDot, faMapLocation, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductCard = ({product}) => {
    return (
      <div className="card bg-base-100 shadow-2xl max-w-2xl border-gray-100 border">
      <figure ><img src={product?.image} alt="product" className='h-80' /></figure>
      <div className="card-body">k
        <h2 className="font-bold text-3xl">
          {product?.title}
        </h2>
          <p className="badge badge-primary text-semibold pl-1"> Condition : <span className='pl-1'>{product?.condition}</span></p>
        <div className="card-actions justify-end my-2">
          <p className="badge badge-outline font-bold "> <span className='text-primary'>Resale Price : {product?.resalePrice}</span></p> 
          <p className="badge badge-outline font-bold"><span className='text-error'>Original Price : ${product?.originalPrice}</span></p>
        </div>
        <p className='font-semibold'>Used Time : {product?.usedTime}</p>
        <p className='font-semibold'>Location <FontAwesomeIcon icon={faLocationDot}/>  {product?.location}</p>
        <p className='font-semibold'>Posted On :  {product?.postedTime}</p>
       
      </div>
    </div>
    );
};

export default ProductCard;