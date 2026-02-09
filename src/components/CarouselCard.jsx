import { Star } from "lucide-react";
import serverURL from "../server/serverURL";

function CarouselCard({ review }) {
  return (
    <div className="min-w-full px-2">
      <div className="bg-white rounded-[40px] p-10 flex flex-col md:flex-row gap-10 shadow">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={
                review?.publisher?.picture
                  ? `${serverURL}/uploads/${review.publisher.picture}`
                  : "/user.avif"
              }
              className="w-12 h-12 rounded-full object-cover"
              alt="user"
            />
            <div>
              <h4 className="font-semibold">
                {review?.publisher?.username}
              </h4>
              <p className="text-sm text-gray-500">
                {review?.spotname}
              </p>
            </div>
          </div>

          {/* RATING */}
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < review?.rating
                    ? "text-orange-500 fill-orange-500"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4 italic">
            “{review?.spotname} experience”
          </h3>

          <p className="text-gray-600 max-w-md">
            {review?.description}
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex gap-6">
          {review?.reviewImages?.slice(0, 2).map((img, index) => (
            <img
              key={index}
              src={`${serverURL}/uploads/${img}`}
              className="w-56 h-56 rounded-3xl object-cover hover:scale-105 transition"
              alt="review"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
