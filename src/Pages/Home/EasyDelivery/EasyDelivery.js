import React from 'react';
import manWithLaptop from '../../../assets/man-with-laptop.jpg'
import cartAnimate from '../../../assets/small-cart.json'
import Lottie from 'lottie-react'


const EasyDelivery = () => {
    return (
 
    <div className='bg-[#FBFBFB] pt-10 pb-0'>
             <div className="hero bg-blend-normal bg-contain bg-no-repeat h-96 mx-auto" style={{ backgroundImage: `url(${manWithLaptop})` }}>
        {/* <div className="hero hover:bg-opacity-5"></div> */}
        <div className="hero-content text-center text-neutral-content relative">
          <div className="max-w-md absolute top-5 ">
   
       
          <Lottie
                animationData={cartAnimate}
                loop={true}
                className="h-64 w-64 -mt-24 sm:-mt-16 -ml-16 md:-ml-16 lg:-ml-20"
                />


          </div>
        </div>
      </div>
    </div>

 
    );
};

export default EasyDelivery;