import React from 'react';
import AdvertizedProducts from '../AdvertizedProducts/AdvertizedProducts';
import DisplaySection from '../DisplaySection/DisplaySection';
import HeroSection from '../HeroSection/HeroSection';
import ProductCategoryList from '../ProductCategoryList/ProductCategoryList';

const Home = () => {


    return (
        <div>
            <HeroSection />
            <AdvertizedProducts />
            <DisplaySection />
            <ProductCategoryList />
        </div>
    );
};

export default Home;