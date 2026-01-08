import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import { LogIn, UserPlus } from 'lucide-react'

function NotLogin() {
    return (
        <div className='flex justify-center items-center flex-col w-full h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 overflow-hidden'>
            {/* not login book page */}
            <div className='flex justify-center bg-white items-center flex-col md:w-200 m-5 p-5 md:px-0 md:pb-8 md:h-160 border-6 border-double border-orange-500'>
                <img width={'500px'} height={'500px'} className='mb-4' src="https://i.pinimg.com/originals/eb/17/d0/eb17d0925c49ef13af6e84cdfeaad079.gif" alt="locked" />
                <h1 className="text-5xl font-bold text-orange-600">
            Login Required
          </h1>

          <p className="text-gray-600 mt-3">
            You must be logged in to access this page.
            Please login or create an account to continue.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-4">

            <Link
              to="/login"
              className="flex items-center justify-center gap-2
              bg-orange-500 hover:bg-white text-white hover:text-orange-500
              py-3 rounded-xl border hover:border-orange-500 font-bold transition"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center justify-center gap-2
              bg-orange-500 hover:bg-white text-white hover:text-orange-500
              py-3 rounded-xl border hover:border-orange-500 px-3 font-bold transition"
            >
              <UserPlus size={18} />
              Register
            </Link>
            </div>
            </div>
        </div>
    )
}

export default NotLogin