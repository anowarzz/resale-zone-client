
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductCategoryList = () => {

// Loading Laptop categories using axios

const [categories, setCategories] = useState();

useEffect( () => {
    axios.get('http://localhost:5000/categories')
    .then(data => {
       
        const categories = data.data;
        console.log(categories);
        setCategories(categories)
    })
}, [])




    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-20 bg-gray-800">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-full md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-50 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
           
            <span className="relative pr-2">Buy</span>
          </span>
          or Sell your laptop with some easy steps
        </h2>
        <p className="text-base text-white md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit <br className='hidden md:block'/>  voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">

       {
        categories?.map(category => <CategoryCard key={category._id} category={category}/>)
       }
  
    
      
      </div>
    </div>
    );
};

export default ProductCategoryList;