import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";


function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);

  // TOTAL SLIDES
  const totalSlides = 4;

  // AUTO SLIDE EVERY 2 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // BUTTON CONTROLS
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="px-6 md:px-16 py-16 bg-[#faf7f2] relative overflow-hidden md:me-5">

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
      >
        <ChevronRight />
      </button>

      {/* SLIDER */}
      <div
        className="flex transition-transform duration-800 ease-in-out mb-5"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* ===== SLIDE 1 ===== */}
        <CarouselCard />

        {/* ===== SLIDE 2 ===== */}
        <CarouselCard />

        {/* ===== SLIDE 3 ===== */}
        <CarouselCard />

        {/* ===== SLIDE 4 ===== */}
        <CarouselCard />

        
      </div>
      <div className="flex justify-center"><Link to={'/allreviews'} className="bg-orange-500 text-white text-xl px-3 py-1.5 rounded-xl hover:bg-white hover:text-orange-500 border hover:border-orange-500">See More</Link></div>
    </section>
  );
}

export default ReviewsCarousel;

function CarouselCard() {
  return (
    <div className="min-w-full md:me-3 md:ms-[-10]">
      <div className="bg-white rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-10 shadow">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/user.avif"
              className="w-12 h-12 rounded-full object-cover"
              alt="user"
            />
            <div>
              <h4 className="font-semibold">Maria Angelica</h4>
              <p className="text-sm text-gray-500">Turks Princess</p>
            </div>
          </div>

          {/* RATING */}
          <div className="text-orange-400 mb-4">★★★★★</div>

          <h3 className="text-xl font-bold mb-4 italic">
            “An Unforgettable Journey Through Turkey”
          </h3>

          <p className="text-gray-600 mb-6 max-w-md">
            Words cannot describe how amazing Turkey was. From the colorful
            bazaars to the sunrise hot air balloons, it was a dream come true.
          </p>

          
        </div>

        {/* RIGHT IMAGES */}
        <div className="md:flex gap-6">
          <div className="relative">
            <img
              src="/travel.jpg"
              className="w-56 h-56 rounded-3xl my-1 object-cover"
              alt="view"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="bg-white p-2 rounded-full" size={36} />
            </div>
          </div>

          <img
            src="/natureview.jpg"
            className="w-56 h-56 rounded-3xl my-1 object-cover"
            alt="view"
          />
        </div>

      </div>
    </div>
  );
}
