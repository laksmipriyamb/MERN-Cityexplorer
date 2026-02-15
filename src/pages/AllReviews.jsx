import { Star, User, Mail, MapPin, MessageSquare, Trash2 } from "lucide-react";
import { deleteReviewAPI, getAllReviewsAPI } from "../server/allAPI";
import { useEffect, useState } from "react";
import HeadPortion from "../components/HeadPortion";
import serverURL from "../server/serverURL";

export default function AllReviews() {
  // Dummy data – replace with API response
  const [token, setToken] = useState("")
  const [allReviews, setAllReviews] = useState([])

  console.log(allReviews);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllReviews(userToken)
    }
  }, [])

  const getAllReviews = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllReviewsAPI(reqHeader)
    if (result.status == 200) {
      setAllReviews(result.data)

    } else {
      console.log(result);

    }
  }

  // const deleteReview = async (id) => {
  //   const token = sessionStorage.getItem("token")
  //   if (token) {
  //     const reqHeader = {
  //       "Authorization": `Bearer ${token}`
  //     }
  //     const result = await deleteReviewAPI(id, reqHeader)
  //     if (result.status == 200) {
  //       getAllReviews()
  //     } else {
  //       console.log(result);

  //     }
  //   }
  // }

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
    <>
      <HeadPortion />
      <section
        className=" relative min-h-screen px-6 py-14 overflow-hidden
        bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300"
      >
        {/* BACKGROUND DECOR */}
        <div className=" absolute -top-40 -left-40 w-[30rem] h-[30rem]
          bg-orange-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[28rem] h-[28rem]
          bg-orange-500/30 rounded-full blur-3xl"></div>

        {/* GRID TEXTURE */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff40_1px,transparent_1px)]
          [background-size:22px_22px] pointer-events-none"
        ></div>

        {/* HEADER */}
        <div className="mt-14 relative max-w-6xl mx-auto mb-10 border-l-4 border-orange-600 pl-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            All Reviews
          </h1>
          <p className="text-gray-700 mt-2">
            View all user reviews submitted across spots
          </p>
        </div>

        {/* REVIEW LIST */}
        <div className="relative max-w-6xl mx-auto space-y-6">
          {allReviews.map((review) => (
            <div
              key={review?._id}
              className="bg-white rounded-3xl shadow-lg
  px-8 py-6 flex flex-col lg:flex-row gap-8
  hover:shadow-xl transition"
            >

              {/* LEFT CONTENT */}
              <div className="flex-1 space-y-4">

                {/* USER HEADER */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.publisher?.picture ? `${serverURL}/uploads/${review.publisher.picture}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&s"}
                    alt="user"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-gray-800">
                      {review?.publisher?.username}
                    </p>
                    <p className="text-sm text-gray-500">
                      {review?.spotname}
                    </p>
                  </div>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < review?.rating
                          ? "text-orange-500 fill-orange-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                {/* TITLE / QUOTE */}
                <h3 className="text-xl font-semibold italic text-gray-900">
                  “{review?.spotname} experience”
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                  {review?.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4">
                  <span>{timeAgo(review?.createdAt)}</span>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              {review?.reviewImages?.length > 0 && (
                <div className="flex gap-4">
                  {review.reviewImages.slice(0, 2).map((img, index) => (
                    <img
                      key={index}
                      src={`${serverURL}/uploads/${img}`}
                      alt="review"
                      className="w-44 h-44 rounded-2xl object-cover
          hover:scale-105 transition duration-300"
                    />
                  ))}
                </div>
              )}
            </div>


          ))}

          {/* EMPTY STATE */}
          {allReviews.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No reviews found.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
