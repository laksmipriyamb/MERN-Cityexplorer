import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { loginAPI,googleLoginAPI } from "../server/allAPI";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Login() {

  const [viewPassword, setViewPassword] = useState(false)
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: ""
  })

  const handlelogin = async (e) => {
    e.preventDefault()
    const { email, password } = userDetails
    if (email && password) {
      //toast.success("API Call")
      try {
        //api call
        const result = await loginAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Login successfull!!!")
          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          setTimeout(() => {
            if (result.data.user.role == "admin") {
              navigate('/admin/home')
            } else {
              navigate('/')
            }
          }, 2500)
        } else if (result.status == 401 || result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else {
          toast.error("Something went wrong!!!")
          setUserDetails({ username: "", email: "", password: "" })
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.info("Please fill the form completely!!!")
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
      console.log('Inside handleGoogleLogin');
      console.log(credentialResponse);
      const decode = jwtDecode(credentialResponse.credential)
      console.log(decode);
      //email,name,password
      const result = await googleLoginAPI({ username: decode.name, email: decode.email, password: 'googlePassword', picture: decode.picture })
      if (result.status == 200) {
        toast.success("Login Successfull!!!")
        sessionStorage.setItem("token", result.data.token)
        sessionStorage.setItem("user", JSON.stringify(result.data.user))
        setTimeout(() => {
          if (result.data.user.role == "admin") {
            navigate('/admin/home')
          } else {
            navigate('/')
          }
        }, 2500)
      } else {
        console.log(result);
        toast.error("Something went wrong!!!")
      }
  
  
    }
  return (
    <>
    
      <div className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
  
        {/*  Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ed] via-orange-100 to-[#fde68a] animate-gradient"></div>
  
        {/*  Map Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:24px_24px] opacity-40"></div>
  
        {/* Floating Blobs */}
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[26rem] h-[26rem] bg-orange-300/30 rounded-full blur-3xl"></div>
  
        {/* Glass Container */}
        <div className="relative z-10 w-full max-w-6xl mx-6 bg-white/75 backdrop-blur-2xl rounded-[2rem] shadow-[0_40px_120px_rgba(0,0,0,0.2)] grid md:grid-cols-2 overflow-hidden">
  
          {/* LEFT – BRAND */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-8">
              Login to continue your journey
            </p>
  
            <form className="space-y-6">
              <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none transition"
              />
              <div className="flex justify-between items-center">
                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                  type={viewPassword?"text":"password"}
                  placeholder="Password"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none transition"
                />
                {
                    viewPassword ?
                      <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{ marginLeft: '-30px' }} />
                      :
                      <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{ marginLeft: '-30px' }} />
                  }
              </div>
  
              <button onClick={handlelogin} className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide transition transform hover:-translate-y-0.5">
                Login
              </button>
            </form>
            <div className="text-center my-5">
              <p>--------------------or--------------------</p>
              <div className="mt-5 flex justify-center items-center w-full">
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </div>
            </div>
  
            <p className="mt-6 text-sm text-gray-500 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-orange-500 font-medium hover:underline">
                Create one
              </Link>
            </p>
          </div>
  
          {/* RIGHT – FORM */}
  
          <div className="relative hidden md:flex flex-col justify-between text-white">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="h-full w-full object-cover"
              alt="Travel"
            />
            <div className="absolute inset-0 bg-black/40">
              <h1 className="text-4xl font-extrabold text-center mt-45">SpotScape</h1>
              <p className="mt-4 text-white/90 max-w-sm ms-25 text-center">
                Discover hidden cafés, local stories and unforgettable places around you.
              </p>
            </div>
  
  
          </div>
        </div>
        {/* toast */}
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
  
      </div>
    </>
  );
}
