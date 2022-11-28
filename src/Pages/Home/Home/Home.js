import React from 'react';
import AdvertizedProducts from '../AdvertizedProducts/AdvertizedProducts';
import HeroSection from '../HeroSection/HeroSection';
import ProductCategoryList from '../ProductCategoryList/ProductCategoryList';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AdvertizedProducts />
            <ProductCategoryList />
        </div>
    );
};

export default Home;