import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
       <Link className='bg-white text-black hover:text-white hover:bg-gray-600 hover:border-4 hover:border-transparent hover:outline outline-primary' to={`/category/${category.categoryId}`}>
        <div className="flex flex-col justify-between p-5 rounded shadow-sm">
        <div>
          <div className="flex items-center justify-center w-64 h-64  mb-4 rounded-full bg-transparent">
        <img src={category?.categoryImg} alt="" className='bg-transparent'/>
          </div>
          <h6 className="mb-2 text-3xl text-center font-semibold leading-5">{category?.categoryName}</h6>
        </div>
      </div></Link>
    );
};

export default CategoryCard;