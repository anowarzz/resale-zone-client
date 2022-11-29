import React, { useContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
import Loading from '../../Shared/Loading/Loading'


const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleLogIn, loading, setLoading } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState("");
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const [userImage, setUserImage] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState('') 
 const [token] = useToken(createdUserEmail)

  // location

  const navigate = useNavigate();
  


  if(token){
 navigate('/')
  }



  // Register a  new user using email and password
  const handleRegister = (data, e) => {
    setSignUpError("");

setLoading(true)

    console.log(data);

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
        setUserImage(imgData?.data.url);
      }
    });

    createUser(data.email, data.password)
    .then((result) => {
      const user = result.user;
      console.log(user);

      toast.success("SignUp Successful");
   
      e.target.reset();

      const userInfo = {
        displayName: data?.name,
        email: data?.email,
        photoURL: userImage,
      };
      updateUser(userInfo)
        .then(() => {
          console.log(data);
          saveUserToDB(data.name, data.email, data.userType, userImage);
       
          setLoading(false)
    
        })
        .catch((err) => {
          console.log(err);
          setSignUpError(err.message);
          setLoading(false)
        });
  
    })
    .catch((error) => console.error(error));
 



 
  };

  // Register user using google
  const handleGoogleSignUp = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // updating user info in firebase
        const userInfo = {
          displayName: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
        };
        updateUser(userInfo);
        setCreatedUserEmail(user?.email)
        //sending user info to db
        const name = user?.displayName;
        const email = user?.email;
        const userType = "buyer";
        const userImg = user?.photoURL;
        saveUserToDB(name, email, userType, userImg);
        toast.success("Register Successful");
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err);
      });
  };

  // Adding user info into database

  const saveUserToDB = (name, email, userType, userImg) => {
    const user = { name, email, userType, userImg };

  try{
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email)
      });
  }
  finally{
  }

  };

  return (



    <div className="flex flex-col justify-center items-center my-4  bg-white">
      <div className="max-w-96 md:w-auto px-16 py-4 border border-gray-200  shadow-slate-500 shadow-lg bg-slate-200">
        <h2 className="text-2xl md:text-3xl text-center my-6">Register</h2>

        {
          loading && <Loading />
        }

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Please provide your name",
              })}
              type="text"
              className="input input-bordered w-full"
              placeholder="Type Your Name"
            />
            {errors.name && (
              <p className="text-sm font-bold text-red-500">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
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

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Account Type</span>
            </label>

            <select
              {...register("userType", {
                required: "Select a UserType",
              })}
              className="select select-bordered w-full max-w-xs"
            >
              <option defaultValue value="buyer">
                Buyer
              </option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", {})}
              type="file"
              className="input input-bordered w-full"
              placeholder="Upload a photo"
            />
            {errors.image && (
              <p className="text-sm font-bold text-red-500">
                {errors.image?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special character",
                },
                minLength: {
                  value: 6,
                  message: "Password must be 6 character long",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-sm font-bold text-red-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          {signUpError && (
            <p className="text-sm font-bold text-red-500 py-1">{signUpError}</p>
          )}
          <input
            className="btn bg-primary w-full mt-4 hover:btn-secondary"
            value="Register"
            type="submit"
          />
        </form>

        <p className="mt-4">
          Already have an account ?
          <Link
            to="/login"
            className="text-primary font-semibold  pl-1 hover:link"
          >
            Login Now
          </Link>
        </p>
        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignUp}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-violet-600 hover:bg-accent hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
