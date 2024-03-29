import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useFetcher, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './Login.css'
import { useEffect } from 'react';



const googleProvider = new GoogleAuthProvider();

const Login = () => {

  useEffect(() => {
window.scroll(0, 0,)


  }, [])




  const {register,handleSubmit,formState: { errors },} = useForm();

  const { signIn, googleLogIn, updateUser} = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");



const [loading, setLoading] = useState(false)


  // location
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";



  // Login user using email and password
  const handleLogin = (data, e) => {

    setLoading(true)
    e.preventDefault();
    console.log(data);
    setLoginError("");

    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);


        const currentUser = {
          email: user?.email,
        };



    // Get Jwt token
    fetch("https://resale-zone-server.vercel.app/jwt", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Storing Jwt in local storage
        localStorage.setItem("accessToken", data.accessToken);
        
        toast.success("Login Successful");
        navigate(from, { replace: true });
        e.target.reset();
        setLoginError('')
        setLoading(false)
       })
       })

      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
        setLoading(false)
      });
  };



  // SignIn user using google
  const handleGoogleLogin = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(true)
 
        // saving user info to firebase
        const userInfo = {
          displayName: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
        };
        updateUser(userInfo);
    

        // saving user to db
        const name = user?.displayName;
        const email = user?.email;
        const userType = "buyer";
        const userImg = user?.photoURL;
        saveUserToDB(name, email, userType, userImg);
    
 
        const currentUser = {
          email: user?.email,
        };
     

        // Get Jwt token
        fetch("https://resale-zone-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // Storing Jwt in local storage
            localStorage.setItem("accessToken", data.accessToken);
            setLoginError("");
            setLoading(false);
            navigate(from, { replace: true });
            toast.success("Login Successful");
          });



      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };

  // saving user info to db
  const saveUserToDB = (name, email, userType, userImg) => {
    const user = { name, email, userType, userImg };

 try{
  fetch("https://resale-zone-server.vercel.app/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",  
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
    });
 }
 finally{
}
}

if(loading){
  <Loading />
}


  return (
    <div className="flex flex-col justify-center items-center login text-white">
      {
        loading && <Loading />
      }

<div className='flex flex-col  justify-center sm:justify-between items-center sm:flex-row'>
<div className='w-64 h-48 mt-8'>

<div className='pl-3'>
<h3 className='text-white md:text-xl'><span className='text-blue-400'>Login</span> as a Buyer</h3>
<p className=''><span className='text-white'>Email:</span> test@buyer.com</p>
<p className=''><span className='text-white'>Password: </span>Buyer@1 </p>
</div>
<div className='pl-3 mt-3'>
<h3 className='text-white md:text-xl'><span className='text-blue-400'>Login</span> as Admin</h3>
<p className=''><span className='text-white'>Email:</span> anowar@admin.com</p>
<p className=''><span className='text-white'>Password: </span>Admin@444</p>
</div>

<div className='mt-3 pl-3'>
<h3 className='text-white md:text-xl'><span className='text-blue-400'>Login</span>  as a Seller</h3>
<p className=''><span className='text-white'>Email:</span> test@seller.com</p>
<p className=''><span className='text-white'>Password: </span>Seller@2 </p>
</div>

</div>

    <div className="max-w-96 md:w-auto px-16 sm:py-4  pb-2 col-span-3">
      <h2 className="text-2xl text-blue-500 md:text-4xl text-center my-6">Login</h2>


      <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-white ">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              className="input input-bordered w-full text-black"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-sm font-bold text-yellow-500">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text ">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                // pattern: {
                //   value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                //   message:
                //     "Password must have uppercase, number and special character",
                // },
                minLength: {
                  value: 6,
                  message: "Password must be 6 character long",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs text-black"
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-sm font-bold text-yellow-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          {loginError && (
            <p className="text-sm font-bold text-yellow-400 py-1">{loginError}</p>
          )}
          <input
            className="btn bg-violet-600 w-full mt-4 hover:bg-blue-500"
            value="Login"
            type="submit"
          />
        </form>
      <p className="mt-4">
        New to Resale Mart ?
        <Link
          to="/register"
          className="text-black font-semibold  pl-2 hover:link hover:text-blue-400"
        >
          Register Now
        </Link>
      </p>
      <div className="divider">OR</div>

      <button
        onClick={handleGoogleLogin}
        aria-label="Login with Google"
        type="button"
        className="flex items-center text-gray-200 justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-50 focus:ring-violet-600 hover:bg-accent hover:text-white hover:border-transparent"
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
  </div>
  );
};

export default Login;