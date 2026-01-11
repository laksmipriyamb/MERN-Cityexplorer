import { CircleUserRound, Coffee, Earth, EarthIcon, LogOutIcon, UtensilsCrossed } from "lucide-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import serverURL from "../server/serverURL";

function Header() {
  const [open, setOpen] = useState(false);
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

  const logOut = () => {
    sessionStorage.clear()
    setToken("")
    setDp("")
  }

  return (
    <>
      {/* ================= MENU ICON (OUTSIDE HEADER) ================= */}
      <MdOutlineKeyboardArrowRight
        className="fixed top-7 md:top-12 md:left-4 shadow-lg border border-white sm:top-6 sm:left-6 text-3xl sm:text-4xl cursor-pointer z-50 hover:text-orange-500"
        onClick={() => setOpen(true)}
      />

      {/* ================= HEADER ================= */}
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
          <div className="flex items-center gap-2 sm:gap-3">
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
            <Link to={'/allspots'} className="nav-link">DESTINATIONS</Link>
            <Link className="nav-link">ABOUT US</Link>
            <Link to={'/allstories'} className="nav-link">BLOGS</Link>
            <Link onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth", })
            }} className="nav-link">SERVICES</Link>
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
                      <img width={'50px'} height={'50px'} style={{ borderRadius: "50%" }} src={dp ? dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${serverURL}/uploads/${dp}` : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"} />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Logout"><LogOutIcon onClick={logOut} size={30} className="text-orange-500" /></Tooltip>
                </div>
            }
          </div>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed top-0 left-0 h-screen
          w-40 sm:w-50
          bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-orange-500">
            <span className="text-black">SPOT</span>SCAPE
          </h2>
          <FaXmark
            className="text-xl cursor-pointer hover:text-orange-500"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* SIDEBAR LINKS */}
        <ul className="ps-5 pt-10 space-y-8 font-semibold text-xl">
          <li className="sidebar-link"><Link to={'/allspots'} className="flex gap-2 items-center"><Coffee />Cafe</Link></li>
          <li className="sidebar-link"><Link to={'/allspots'} className="flex gap-2 items-center"><UtensilsCrossed /> Resturants</Link></li>
          <li className="sidebar-link"><Link to={'/allspots'} className="flex gap-2 items-center"><EarthIcon />Hidden Spots</Link></li>
          <li className="sidebar-link"><Link to={'/allspots'} className="flex gap-2 items-center"><EarthIcon />Tourist Spots</Link></li>
          <li className="text-red-500 cursor-pointer flex gap-2 items-center"><LogOutIcon /><button onClick={logOut}>Logout</button></li>
        </ul>
      </aside>

      {/* PAGE OFFSET */}
      <div className="h-24 sm:h-32"></div>
    </>
  );
}

export default Header;
