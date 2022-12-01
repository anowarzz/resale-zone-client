
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
        setCategories(categories)
    })
}, [])




    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-20 bg-gray-800">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-full md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Resale Zone
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-50 sm:text-4xl md:mx-auto">
       Browse Your Favorite Laptop Brands
        </h2>
      
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