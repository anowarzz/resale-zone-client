import React from "react";
import AdvertizedProducts from "../AdvertizedProducts/AdvertizedProducts";
import DisplaySection from "../DisplaySection/DisplaySection";
import EasyDelivery from "../EasyDelivery/EasyDelivery";
import HeroSection from "../HeroSection/HeroSection";
import ProductCategoryList from "../ProductCategoryList/ProductCategoryList";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <EasyDelivery />
      <AdvertizedProducts />
      <ProductCategoryList />
      <DisplaySection />
    </div>
  );
};

export default Home;
