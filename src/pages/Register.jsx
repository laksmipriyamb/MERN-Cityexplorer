import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { registerAPI } from "../server/allAPI";


export default function Register() {
  const navigate = useNavigate()
  const [viewPassword, setViewPassword] = useState(false)


  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: ""
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userDetails
    if (username && email && password) {
      //toast.success("API Call")
      try {
        const result = await registerAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Register Successsfully completed...Please login to SPOTSCAPE!!!")
          setUserDetails({ username: "", email: "", password: "" })
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          console.log(result);
          toast.error("Something went wrong")
          setUserDetails({ username: "", email: "", password: "" })
        }
      } catch (error) {
        console.log(error);

      }
    } else {
      toast.info("Please fill the form completely!!!")
    }
  }
  return (
    <div className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 via-[#fff7ed] to-orange-200"></div>

      {/* Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:22px_22px] opacity-50"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-6xl mx-6 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.18)] grid md:grid-cols-2 overflow-hidden">

        {/* LEFT – IMAGE */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="h-full w-full object-cover"
            alt="Travel"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-12">
            <h3 className="text-white text-2xl mb-54 ms-20 font-semibold">
              Start exploring today
            </h3>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600 mb-8">
            Join SpotScape and discover more
          </p>

          <form className="space-y-6">
            <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              type="email"
              placeholder="Email address"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <div className="flex justify-between items-center">
              <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                type={viewPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
              />
              {
                viewPassword ?
                  <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{ marginLeft: '-50px' }} />
                  :
                  <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{ marginLeft: '-50px' }} />
              }
            </div>

            <button onClick={handleRegister} className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition transform hover:-translate-y-0.5">
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* toast */}
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

    </div>
  );
}
