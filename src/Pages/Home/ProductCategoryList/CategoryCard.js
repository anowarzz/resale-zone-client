import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
       <Link className='hover:bg-gray-200' to={`/products`}>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
        <div>
          <div className="flex items-center justify-center w-64 h-64  mb-4 rounded-full bg-transparent">
        <img src={category?.categoryImg} alt="" />
          </div>
          <h6 className="mb-2 text-3xl text-center font-semibold leading-5">{category?.categoryName}</h6>
        </div>
      </div></Link>
    );
};

export default CategoryCard;