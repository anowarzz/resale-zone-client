import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const AddProduct = () => {

const {user} = useContext(AuthContext)

const [loading, setLoading] = useState(false)
const navigate  = useNavigate();

    const {register,handleSubmit,formState: { errors },
      } = useForm();
    
      const imageHostKey = process.env.REACT_APP_imgbb_key;


const handleAddProduct = (data, e) => {

setLoading(true)



const today  = new Date();
const thisYear = today.getFullYear()
const totalUsedTime = thisYear - data?.purchaseYear






    //Saving image to hosting site 
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgData) => {
      console.log(imgData);
      if (imgData.success) {
        console.log(imgData?.data?.url);


const title = data?.productName;
const image = imgData?.data?.url
const originalPrice = data?.originalPrice;
const resalePrice = data?.resalePrice ;
const categoryId = data?.categoryName;
const condition = data?.condition;
const location = data?.location;
const usedYears = totalUsedTime;
const postedTime = format(new Date(), 'PP')
const sellerContact = data?.contactNumber;
const description = data?.description;
const sellerName = user?.displayName;
const sellerEmail = user?.email;
const status = 'unsold';
const isAdvertised = false;


const product = {title, originalPrice, resalePrice,  categoryId, condition, location, usedYears, postedTime, sellerContact, description, sellerName,image, sellerEmail, status, isAdvertised}




    //save product information to the db
    fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          toast.success(`Product ${data.productName} added Successfully`)
          setLoading(false)
          e.target.reset();
          navigate('/dashboard/myProducts')
     
        });

   
      }
    });
    
}

if(loading){
  <Loading />
}

    return (
        <div>
          


        <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-center my-10">
              <span className="">
               Add A New Product
              </span>
            </h2>
          </div>


<div className='max-w-xl shadow-md mx-auto p-8 bg-gray-800 '>
    
<form onSubmit={handleSubmit(handleAddProduct )} >

       

          <div className="form-control max-w-xl mx-auto ">
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
                required: "Resale Price Is Required",
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


   <div className='flex gap-4'>
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
              <option defaultValue value="Good">
                Good
              </option>
              <option value="Fair">Fair</option>
              <option value="Excellent">Excellent</option>
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
              <option  value="01">Hp Laptops</option>
              <option value="02">Dell Laptops</option>
              <option value="03">Acer Laptops</option>
            </select>
          </div>

   </div>


   <div className='flex gap-4'>
    
   <div className="form-control  max-w-lg mx-auto w-2/4">
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
              <span className="text-white">Year Of Purchase</span>
            </label>
            <input
              {...register("purchaseYear")}
         type="number" min="1900" max="2021" step="1"
              className="input input-bordered w-full font-semibold"
              placeholder="Year Of Purchase"
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
            className="btn bg-blue-600 w-full text-center mt-4 hover:btn-secondary"
            value="Add Product"
            type="submit"
          />
        </form>
</div>
          
        </div>
    );
};

export default AddProduct;