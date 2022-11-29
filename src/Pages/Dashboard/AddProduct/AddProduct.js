import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {


    const {register,handleSubmit,formState: { errors },
      } = useForm();

const handleAddProduct = () => {

}


    return (
        <div>
          
        <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-center pt-10">
              <span className="">
               Add A New Product
              </span>
            </h2>
          </div>


<div className='max-w-xl shadow-md mx-auto p-8 bg-gray-800 text-white '>
    
<form onSubmit={handleSubmit(handleAddProduct )} >

       

          <div className="form-control max-w-lg mx-auto text-white">
            <label className="label ">
              <span className="text-white">Product Name</span>
            </label>
            <input
              {...register("productName", {
                required: "Product Name Required",
              })}
              type="text"
              className="input input-bordered w-full"
              placeholder="Product Name"
            />
           {errors.name && (
              <p className="text-sm font-bold text-red-500">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="form-control max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-sm font-bold text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>


          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Account Type</span>
            </label>

            <select
              {...register("userType", {
                required: "Select a UserType",
              })}
              className="select select-bordered w-full max-w-xs text-black"
            >
              <option defaultValue value="buyer">
                Buyer
              </option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <div className="form-control max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Photo</span>
            </label>
            <input
              {...register("image", {})}
              type="file"
              className="input input-bordered w-full"
              placeholder="Upload a photo"
            />
            {/* {errors.image && (
              <p className="text-sm font-bold text-red-500">
                {errors.image?.message}
              </p>
            )} */}
          </div>

        
          {/* {signUpError && (
            <p className="text-sm font-bold text-red-500 py-1">{signUpError}</p>
          )} */}
          <input
            className="btn bg-primary w-full text-center mt-4 hover:btn-secondary"
            value="Register"
            type="submit"
          />
        </form>
</div>
          
        </div>
    );
};

export default AddProduct;