import React from "react";
import hp from "../../../assets/hp.jpg";
import acer from "../../../assets/acer.jpg";
import dell from "../../../assets/dell.jpg";

const DisplaySection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w- h-6 text-sky-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-2xl md:text-4xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
              Buy Or Sell Your Laptop
              <span className="inline-block text-purple-600">
                With Some Easy Steps
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We have various type of pre-owned laptops of many popular brand .
              So just chose your favorite one and buy.
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-contain mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={hp}
              alt=""
            />
            <img
              className="object-contain w-28 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-48 xl:w-56"
              src={dell}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 object-contain"
              src={acer}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;
