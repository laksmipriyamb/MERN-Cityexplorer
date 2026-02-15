import React, { useEffect, useState } from "react";
import { Star, Trash, Trash2, TrashIcon } from "lucide-react";
import serverURL from "../server/serverURL";
import { deleteReviewAPI, getMyReviewsAPI } from "../server/allAPI";

function ProfileReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMyReviews();
  }, []);

  const getMyReviews = async () => {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getMyReviewsAPI(reqHeader);
    if (result.status === 200) {
      setReviews(result.data);
    }
  };

  const deleteReview = async (id) => {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const result = await deleteReviewAPI(id, reqHeader)
        if (result.status == 200) {
          getMyReviews()
        } else {
          console.log(result);
  
        }
      }
    }

  const timeAgo = (dateString) => {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60
    };

    for (let key in intervals) {
      const value = Math.floor(seconds / intervals[key]);
      if (value >= 1) {
        return `${value} ${key}${value > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  };


  return (
    <section className="max-w-5xl mx-auto px-6 py-16 min-h-screen">
      <h2 className="text-2xl font-bold mb-10">My Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">
          No reviews sent.
        </p>
      ) : (
        <div className="space-y-10">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white rounded-[40px] shadow-lg px-10 py-8
                       flex flex-col lg:flex-row items-center gap-12"
            >
              {/* LEFT CONTENT */}
              <div className="flex-1">
                {/* USER */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/user.avif"
                    alt="user"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      You
                    </h4>
                    <p className="text-sm text-gray-500">
                      {review.spotname}
                    </p>
                  </div>
                </div>

                {/* RATING */}
                <div className="flex text-orange-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < review.rating
                          ? "fill-orange-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold italic mb-4">
                  “{review.spotname} experience”
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed max-w-xl mb-6">
                  {review.description}
                </p>

                {/* TIME */}
                <div className="flex items-center">
                  <button onClick={() => { deleteReview(review?._id) }}><Trash2 className="text-red-600 me-4"/></button>
                  <p className="text-sm text-gray-400">
                    {timeAgo(review.createdAt)}
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              {review.reviewImages?.length > 0 && (
                <div className="flex gap-6">
                  {review.reviewImages.slice(0, 2).map((img, i) => (
                    <img
                      key={i}
                      src={`${serverURL}/uploads/${img}`}
                      alt="review"
                      className="w-56 h-56 rounded-3xl object-cover
                               shadow-md hover:scale-105 transition"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );

}

export default ProfileReviews;
