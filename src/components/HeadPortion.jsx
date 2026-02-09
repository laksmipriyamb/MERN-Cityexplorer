import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import serverURL from '../server/serverURL';
import { LogOutIcon } from 'lucide-react';
import AboutUs from '../components/AboutUs'

function HeadPortion() {
  const [showAbout, setShowAbout] = useState(false);
    const [dp, setDp] = useState("")
      const [token, setToken] = useState("")
    
      console.log(dp);
      
      useEffect(() => {
        if (sessionStorage.getItem("token")) {
          const userToken = sessionStorage.getItem("token")
          setToken(userToken)
          const user = JSON.parse(sessionStorage.getItem("user"))
          setDp(user.picture)
        }
      }, [token])
    
      const logOut = ()=>{
        sessionStorage.clear()
        setToken("")
        setDp("")
      }
    
  return (
    <header className="fixed top-4 sm:top-6 ms-5 md:ms-0  left-1/2 -translate-x-1/2 z-40 w-full">
        <div
          className="
            mx-auto flex items-center justify-between
            bg-white/80 backdrop-blur-md shadow-lg
            rounded-full
            px-4 sm:px-6 md:px-10
            py-2 sm:py-3
            w-[92vw] sm:w-[90vw] max-w-5xl
          "
        >
          {/* LOGO */}
          <div className="flex  items-center gap-2 sm:gap-3">
            <img src="/logo.png" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 animate-float
    hover:rotate-180
    transition-transform duration-500
    cursor-pointer" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-orange-500 font-bold font-serif">
              <span className="text-black">SPOT</span>SCAPE
            </h1>
          </div>

          {/* NAV LINKS (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to={'/'} className="nav-link">HOME</Link>
            <Link to={'/allspots'} className="nav-link">DESTINATIONS</Link>
            <button onClick={() => setShowAbout(true)} className="nav-link">ABOUT US</button>
            <Link to={'/allstories'} className="nav-link">BLOGS</Link>
            
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Tooltip title="Search"><FaSearch className="hidden sm:block text-base sm:text-lg hover:text-orange-500 transition" /></Tooltip>
            {/* login */}
            {
              !token ?
                <Link to={'/login'}>
                  <img width={'50px'} height={'50px'} src="/profile.png" alt="profile" />
                </Link>
                :
                <div className="flex justify-center gap-3 items-center mx-3">
                  <Tooltip title="Go to Profile">
                    <Link to={'/profile'}>
                      <img width={'50px'} height={'50px'} style={{borderRadius:"50%"}} src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"} />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Logout"><LogOutIcon onClick={logOut} size={30} className="text-orange-500"/></Tooltip>
                </div>
            }
          </div>
        </div>
        <AboutUs open={showAbout} onClose={() => setShowAbout(false)}/>
      </header>
  )
}

export default HeadPortion