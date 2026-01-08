import { useState } from "react";
import { ImagePlus, MapPin, Sparkles } from "lucide-react";
import { useEffect } from "react";
import NotLogin from "../components/NotLogin";

export default function AddStory() {
  const [title, setTitle] = useState("");
  const [spot, setSpot] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
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
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
  
        {/* 🌈 ANIMATED GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-[#faf7f2] to-orange-300 animate-gradient"></div>
  
        {/* ✨ FLOATING SHAPES */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-orange-200/40 rounded-full blur-2xl"></div>
  
        {/* 🧩 SUBTLE GRID TEXTURE */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]"></div>
  
        {/* 🧾 GLASS CARD */}
        <div className="relative w-full max-w-3xl my-5 rounded-[36px] bg-white/80 backdrop-blur-xl shadow-2xl p-8 md:p-12">
  
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-3">
            
            <h1 className="text-3xl font-bold">
              Share Your <span className="text-orange-500">Story</span>
            </h1>
          </div>
  
          <p className="text-gray-600 mb-8 max-w-xl">
            Turn your travel moments into stories that inspire others 🌍
          </p>
  
          {/* FORM */}
          <form className="space-y-6">
  
            {/* TITLE */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Story Title
              </label>
              <input
                type="text"
                placeholder="A peaceful morning at Cafe Aroma..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border bg-white/90 focus:ring-2 focus:ring-orange-400 outline-none transition"
              />
            </div>
  
            {/* SPOT */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Spot Name
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                <input
                  type="text"
                  placeholder="Cafe Aroma, Kochi"
                  value={spot}
                  onChange={(e) => setSpot(e.target.value)}
                  className="w-full pl-12 pr-5 py-3 rounded-xl border bg-white/90 focus:ring-2 focus:ring-orange-400 outline-none transition"
                />
              </div>
            </div>
  
            {/* CAPTION */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Caption
              </label>
              <textarea
                rows="4"
                placeholder="Describe your experience..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border bg-white/90 focus:ring-2 focus:ring-orange-400 outline-none resize-none transition"
              />
            </div>
  
            {/* IMAGE UPLOAD */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Upload Photo
              </label>
  
              <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-orange-300 rounded-2xl p-6 cursor-pointer hover:bg-orange-50 transition">
                <ImagePlus className="text-orange-500" size={32} />
                <span className="text-sm text-gray-600">
                  Upload your story image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="hidden"
                />
              </label>
  
              {image && (
                <div className="mt-4 rounded-2xl overflow-hidden">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    className="w-full h-52 object-cover"
                  />
                </div>
              )}
            </div>
  
            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-orange-500 to-orange-400
              hover:scale-[1.03] hover:shadow-xl transition"
            >
              Post Story 
            </button>
          </form>
        </div>
  
        {/* ✨ ANIMATIONS */}
        <style jsx>{`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 12s ease infinite;
          }
  
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
  
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
  
          .animate-float-delay {
            animation: float 10s ease-in-out infinite;
          }
  
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
        `}</style>
      </section>
      :
      <NotLogin/>
      }
    </>
  );
}
