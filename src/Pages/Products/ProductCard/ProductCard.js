
import {  faCheckCircle,faClockFour, faLocationDot, faMarker, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert'




const ProductCard = ({product, setBookingProduct}) => {

  

  

  const handleReportProduct = (id) => {

    console.log(id);
    
    fetch(`http://localhost:5000/products/report/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        if (data.modifiedCount > 0) {
            console.log('clicked');
            swal("Product Reported To Admin", "error");
        }
      });
  };


  

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
        <p className='font-semibold'> <FontAwesomeIcon icon={faClockFour} className="pr-1"/> Used Time : {product?.usedYears} Year</p>
        <p className='font-semibold'><FontAwesomeIcon icon={faLocationDot} className="pr-1"/>  {product?.location}</p>
        <p className='font-semibold'> <FontAwesomeIcon icon={faMarker} className="pr-1"/> Posted On :  {product?.postedTime}</p>
        <p className='font-semibold'>Seller : {product?.sellerName} 
        {
          product?.isSellerVerified && <span className='pl-1'><FontAwesomeIcon icon={faCheckCircle}/></span>
        }
        </p> 

        <p className='text-lg my-2'>{product?.description}</p>
{
  product.isReported ? 
  <button 
disabled
  className='badge badge-error p-1'>Product Reported</button> :
  
  <button 
  onClick={() => handleReportProduct (product._id)}
  className='badge badge-warning p-1'>Report to admin</button>
}

        <label
        onClick={() => setBookingProduct(product)}
        htmlFor="booking-modal" className='btn btn-success hover:btn-info mt-8'>Book Now</label>
      </div>
    </div>
    );
};

export default ProductCard;