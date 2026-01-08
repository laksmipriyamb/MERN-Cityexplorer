import { MapPin, Star, Heart, Share2, Send } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import NotLogin from "../components/NotLogin";

export default function ViewSpot() {
   const [token,setToken] = useState("")
  
    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        const userToken = sessionStorage.getItem("token")
        setToken(userToken)
      }
    },[])
  return (
    <>
      {token?
        <section className="bg-[#faf7f2] min-h-screen">
  
        {/* 🌅 HERO IMAGE */}
        <div className="relative h-[50vh]">
          <img
            src="/cafearoma.jpg"
            alt="Spot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
  
          <div className="absolute bottom-8 left-6 md:left-16 text-white">
            <span className="bg-orange-500 px-4 py-1 rounded-full text-sm">
              spot category
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Spot Name
            </h1>
  
            <div className="flex items-center gap-4 mt-3 text-sm">
              <div className="flex items-center gap-1">
                <Star size={16} fill="currentColor" />
                <span>4.5</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>Place, Kerala</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* 📌 CONTENT */}
        <div className="px-6 md:px-16 py-14 grid md:grid-cols-3 gap-12">
  
          {/* LEFT CONTENT */}
          <div className="md:col-span-2">
  
            <h2 className="text-2xl font-bold mb-4">About this spot</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              incidunt voluptatum, distinctio ipsum iste veritatis.
            </p>
  
            {/* 🖼️ GALLERY */}
            <h3 className="text-xl font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              <img src="/cafearoma.jpg" className="rounded-2xl object-cover h-40 w-full" />
              <img src="/cafearoma.jpg" className="rounded-2xl object-cover h-40 w-full" />
              <img src="/cafearoma.jpg" className="rounded-2xl object-cover h-40 w-full" />
            </div>
  
            {/* 💬 COMMENT TO ADMIN */}
            <div className="bg-white rounded-3xl shadow p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-2">
                Send Feedback to Admin
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Found something incorrect or want to suggest an update about this spot?
              </p>
  
              <form className="space-y-5">
  
                {/* COMMENT */}
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none resize-none"
                />
  
                {/* ACTION */}
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
  
          {/* RIGHT SIDEBAR */}
          <div className="bg-white rounded-3xl shadow p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">Spot Info</h3>
  
            <div className="space-y-4 text-sm text-gray-600">
              <p><span className="font-medium text-black">Category:</span></p>
              <p><span className="font-medium text-black">Location:</span></p>
              <p><span className="font-medium text-black">Best Time:</span></p>
            </div>
  
            <div className="flex gap-3 mt-8">
              <button className="flex-1 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition">
                Location
              </button>
              <button className="p-3 border rounded-full hover:bg-gray-100">
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </section>
      :
      <NotLogin/>
      }
    </>
  );
}
