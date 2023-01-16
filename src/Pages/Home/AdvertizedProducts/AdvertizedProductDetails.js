import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdvertizedProductDetails = () => {


const product = useLoaderData();
console.log(product);


    return (
        <div className='min-h-[300px]'>
            <h3>Hello advertised section</h3>
        </div>
    );
};

export default AdvertizedProductDetails;