import React from "react";
import laptop from "../../../assets/laptops.jpg";
import Lottie from "lottie-react";
import cart from "../../../assets/cart.json";
const HeroSection = () => {
  return (
    <div>
      <section>
          <div className="bg-gray-800">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <div className="flex flex-col justify-center items-center lg:flex-row">
			<div>
			 <h1 className="text-2xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
                <span className="text-yellow-500">Buy or Sell</span> your used <span className="text-blue-400">laptops</span> easily ! 
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
                Here you can Buy your desired pre-owned laptops at your{" "}
                <br className="hidden lg:block" /> affordable price or Sell your
                used laptop easily with just few st
              </p>
			 </div>
			
			</div>
      <div>
			 <Lottie
              animationData={cart}
              loop={true}
              className="w-32 hidden sm:block h-32"
            />
			 </div>
            </div>
			
          
  
          </div>
        <img
          src={laptop}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-transparent"
        />
      </section>
    </div>
  );
};

export default HeroSection;
