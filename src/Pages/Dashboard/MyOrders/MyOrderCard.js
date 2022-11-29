import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderCard = ({order}) => {
    return (
        <div className="flex flex-col  mx-auto p-6 space-y-4 sm:p-10 text-gray-50 bg-gray-800 max-w-xl">
   
        <ul className="flex flex-col divide-y divide-gray-300">
            
                <div className="flex  w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={order.image} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4">
                    <div className="space-y-1">
                                <h3 className="text-xl font-semibold leading-snug sm:pr-8">{order?.productName}</h3>
                            </div>
                    </div>
                </div>
        </ul>

    
        <div className="flex flex-col gap-4 justify-center items-center">
        <p className='text-xl font-semibold text-center'>Price : ${order?.productPrice}</p>
       <Link to='/dashboard/payment'>
       <button className="px-6 py-2 btn btn-sm hover:btn-success btn-info border rounded-md bg-violet-600 text-gray-50 border-violet-600">
               <p>Pay Now</p>
            </button></Link>
        </div>
    </div>
    );
};

export default MyOrderCard;