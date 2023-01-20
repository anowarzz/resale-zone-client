import React from 'react';
import manWithLaptop from '../../../assets/man-with-laptop.jpg'
import blueBg from '../../../assets/blue-bg.png'

const EasyDelivery = () => {
    return (
 
    <div className='bg-[#FBFBFB] pt-10'>
             <div className="hero bg-blend-normal bg-contain bg-no-repeat h-96 mx-auto" style={{ backgroundImage: `url(${manWithLaptop})` }}>
        {/* <div className="hero hover:bg-opacity-5"></div> */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
       
          
          </div>
        </div>
      </div>
    </div>

 
    );
};

export default EasyDelivery;