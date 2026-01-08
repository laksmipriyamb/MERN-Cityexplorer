import { Star, User, Mail, MapPin, MessageSquare, Trash2 } from "lucide-react";

export default function AllReviews() {
  // Dummy data – replace with API response
  const reviews = [
    {
      id: 1,
      user: "Anu Thomas",
      email: "anu.thomas@gmail.com",
      spot: "Cafe Aroma",
      rating: 5,
      message: "Excellent coffee and calm atmosphere. Highly recommended!",
      date: "12 Aug 2025",
    },
    {
      id: 2,
      user: "Rahul S",
      email: "rahul.s@gmail.com",
      spot: "Hill View Point",
      rating: 4,
      message: "Beautiful view, but very crowded during weekends.",
      date: "10 Aug 2025",
    },
    {
      id: 3,
      user: "Meera K",
      email: "meera.k@gmail.com",
      spot: "Sea Breeze Resort",
      rating: 3,
      message: "Rooms were average. Service could be improved.",
      date: "08 Aug 2025",
    },
  ];

  return (
    <section
      className="relative min-h-screen px-6 py-14 overflow-hidden
      bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem]
        bg-orange-400/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-[28rem] h-[28rem]
        bg-orange-500/30 rounded-full blur-3xl"></div>

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff40_1px,transparent_1px)]
        [background-size:22px_22px] pointer-events-none"
      ></div>

      {/* HEADER */}
      <div className="relative max-w-6xl mx-auto mb-10 border-l-4 border-orange-600 pl-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          All Reviews
        </h1>
        <p className="text-gray-700 mt-2">
          View all user reviews submitted across spots
        </p>
      </div>

      {/* REVIEW LIST */}
      <div className="relative max-w-6xl mx-auto space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-[2px] rounded-2xl
            bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400
            shadow-xl"
          >
            <div className="bg-white rounded-2xl p-6">

              {/* TOP SECTION */}
              <div className="flex flex-wrap justify-between gap-4">
                <div className="space-y-2">
                  {/* USER */}
                  <div className="flex items-center gap-2 text-gray-700">
                    <User size={16} className="text-orange-500" />
                    <span className="font-medium">{review.user}</span>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Mail size={15} className="text-orange-500" />
                    {review.email}
                  </div>

                  {/* SPOT */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-orange-500" />
                    {review.spot}
                  </div>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={
                        index < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-4 flex gap-3 text-gray-700">
                <MessageSquare size={18} className="text-orange-500 mt-1" />
                <p className="text-sm leading-relaxed">
                  {review.message}
                </p>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
                <span>{review.date}</span>

                <button
                  className="p-2 rounded-lg border hover:bg-red-500 transition"
                  title="Delete Review"
                >
                  <Trash2 size={16} className="text-red-600 hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* EMPTY STATE */}
        {reviews.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No reviews found.
          </div>
        )}
      </div>
    </section>
  );
}
