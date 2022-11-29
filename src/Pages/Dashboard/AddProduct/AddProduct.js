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
            <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
              <span className="">
               Add A New Product
              </span>
            </h2>
          </div>


<div className='max-w-xl shadow-md mx-auto p-8 bg-gray-800 '>
    
<form onSubmit={handleSubmit(handleAddProduct )} >

       

          <div className="form-control max-w-lg mx-auto ">
            <label className="label ">
              <span className="text-white">Product Name</span>
            </label>
            <input
              {...register("productName", {
                required: "Product Name Required",
              })}
              type="text"
              className="input input-bordered w-full font-semibold"
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
              <span className="text-white">Product Original Price</span>
            </label>
            <input
              {...register("originalPrice", {
                required: "Original Price Is Required",
              })}
              type="number"
              className="input input-bordered w-full font-semibold"
              placeholder="Original Price"
            />
            {errors.originalPrice && (
              <p className="text-sm font-bold text-red-500">
                {errors.originalPrice?.message}
              </p>
            )}
          </div>

          <div className="form-control max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Product Resale Price</span>
            </label>
            <input
              {...register("resalePrice", {
                required: "Original Price Is Required",
              })}
              type="number"
              className="input input-bordered w-full font-semibold"
              placeholder="Resale Price"
            />
            {errors.resalePrice && (
              <p className="text-sm font-bold text-red-500">
                {errors.resalePrice?.message}
              </p>
            )}
          </div>


          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Product Condition</span>
            </label>

            <select
              {...register("condition", {
                required: "Select Product Condition",
              })}
              className="select select-bordered w-full max-w-xs text-black"
            >
              <option defaultValue value="buyer">
                Good
              </option>
              <option value="seller">Fair</option>
              <option value="seller">Excellent</option>
            </select>
          </div>

          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Product Category</span>
            </label>

            <select
              {...register("categoryName", {
                required: "Select Product Category",
              })}
              className="select select-bordered w-full max-w-xs text-black"
            >
              <option  value="Hp Laptops"> Hp Laptops</option>
              <option value="Dell Laptops">Dell Laptops</option>
              <option value="Acer Laptops">Acer Laptops</option>
            </select>
          </div>

          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Location</span>
            </label>

            <select
              {...register("location", {
                required: "Select A Location",
              })}
              className="select select-bordered w-full max-w-xs text-black"
            >
              <option  value="Dhaka">Dhaka</option>
              <option  value="Chittagong">Chittagong</option>
              <option  value="Rajshahi">Rajshahi</option>
              <option  value="Khulna">Khulna</option>
              <option  value="Barisal">Barisal</option>
              <option  value="Rangpur">Rangpur</option>
        
            </select>
          </div>

          <div className="form-control max-w-lg mx-auto">
            <label className="label">
              <span className="text-white">Contact Number</span>
            </label>
            <input
              {...register("contactNumber", {
                required: "Seller Phone Number Is Required",
              })}
              type="tel"
              className="input input-bordered w-full font-semibold"
              placeholder="Contact Number"
            />
            {errors.contactNumber && (
              <p className="text-sm font-bold text-red-500">
                {errors.contactNumber?.message}
              </p>
            )}
          </div>

          <div className="form-control max-w-lg mx-auto ">
            <label className="label ">
              <span className="text-white">Product Description</span>
            </label>
            <input
              {...register("description")}
              type="text"
              className="input input-bordered w-full font-semibold"
              placeholder="Product Description"
            />
          </div>

          <div className="form-control max-w-lg mx-auto ">
            <label className="label ">
              <span className="text-white">Total Used Time</span>
            </label>
            <input
              {...register("usedTime")}
              type="text"
              className="input input-bordered w-full font-semibold"
              placeholder="Total Used Time (Month/Year)"
            />
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
            value="Add Product"
            type="submit"
          />
        </form>
</div>
          
        </div>
    );
};

export default AddProduct;