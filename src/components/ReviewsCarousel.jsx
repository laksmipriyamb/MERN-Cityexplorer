import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import { getHomeReviewsAPI } from "../server/allAPI";

function ReviewsCarousel() {
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);

  // 🔹 Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getHomeReviewsAPI();
        if (result.status === 200) {
          setReviews(result.data);
        }
        console.log(result);
        
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, []);

  const totalSlides = reviews.length;

  // 🔹 Auto slide
  useEffect(() => {
    if (totalSlides === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="px-6 md:px-16 py-16 bg-[#faf7f2] relative overflow-hidden">

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
        className="flex transition-transform duration-700 ease-in-out mb-6"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {reviews.map((review) => (
          <CarouselCard key={review._id} review={review} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/allreviews"
          className="bg-orange-500 text-white text-lg px-4 py-2 rounded-xl
          hover:bg-white hover:text-orange-500 border hover:border-orange-500 transition"
        >
          See More
        </Link>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
