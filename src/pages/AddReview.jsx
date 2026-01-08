import { useState } from "react";
import { Star, MapPin, ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NotLogin from "../components/NotLogin";

export default function AddReview() {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [imagePreview, setImagePreview] = useState(null);
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
        <section
        className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 my-3">
  
          {/* HEADER */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Add Your Review
            </h1>
            <p className="text-gray-500">
              Share your experience and help others explore amazing places 
            </p>
          </div>
  
          {/* FORM */}
          <form className="space-y-7">
  
            {/* SPOT NAME */}
            <div>
              <label className="font-medium mb-2 block">Spot Name</label>
              <input
                type="text"
                placeholder="Eg: Varkala Beach"
                className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
  
            {/* LOCATION */}
            <div>
              <label className="font-medium mb-2 block">Location</label>
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" />
                <input
                  type="text"
                  placeholder="Eg: Trivandrum, Kerala"
                  className="flex-1 px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>
  
            {/* RATING */}
            <div>
              <label className="font-medium mb-3 block">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={32}
                    className={`cursor-pointer transition ${
                      (hover || rating) >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill={(hover || rating) >= star ? "currentColor" : "none"}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
  
            {/* REVIEW */}
            <div>
              <label className="font-medium mb-2 block">Your Review</label>
              <textarea
                rows="4"
                placeholder="Describe your experience..."
                className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none resize-none"
              />
            </div>
  
            {/* IMAGE UPLOAD */}
            <div>
              <label className="font-medium mb-2 block">Upload Image</label>
              <label className="flex items-center gap-4 cursor-pointer">
                <div className="w-32 h-32 rounded-xl border-2 border-dashed flex items-center justify-center text-gray-400 hover:border-orange-400 transition">
                  <ImagePlus size={32} />
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) =>
                    setImagePreview(URL.createObjectURL(e.target.files[0]))
                  }
                />
              </label>
  
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="preview"
                  className="mt-4 w-48 h-32 object-cover rounded-xl shadow"
                />
              )}
            </div>
  
            {/* ACTION BUTTONS */}
            <div className="flex gap-4 pt-6 justify-end">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-xl border text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
  
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </section>
      :
      <NotLogin/>
      }
    </>
  );
}
