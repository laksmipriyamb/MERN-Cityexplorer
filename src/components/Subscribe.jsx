import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Subscribe() {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-16 py-16">
      <div
        className="relative rounded-[40px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/sub.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-14 py-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-yellow-400" size={28} />
            <span className="text-yellow-300 font-semibold tracking-wide">
              SHARE YOUR EXPERIENCE
            </span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Loved a Place You Visited?
          </h2>

          <p className="text-white/80 text-base md:text-lg mb-10">
            Help others discover amazing spots by sharing your honest review,
            photos, and experience.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/add/reviews")}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full 
                       bg-orange-500 text-white font-semibold text-lg 
                       hover:bg-orange-600 hover:scale-105 transition"
          >
            <Star fill="currentColor" size={20} />
            Add Your Review
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
