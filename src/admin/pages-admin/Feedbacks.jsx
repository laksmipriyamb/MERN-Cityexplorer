import { Star, User, Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminViewSpotFeedbacks() {
  const navigate = useNavigate();

  // Dummy data – replace with API data
  const feedbacks = [
    {
      id: 1,
      spotId: "SPOT001",
      spotName: "Cafe Aroma",
      location: "Kochi, Kerala",
      user: "Anu Thomas",
      email: "anu.thomas@gmail.com",
      rating: 5,
      message:
        "Amazing ambience and coffee quality. Staff were friendly and calm atmosphere.",
      date: "12 Aug 2025",
    },
    {
      id: 2,
      spotId: "SPOT002",
      spotName: "Hill View Cafe",
      location: "Munnar, Kerala",
      user: "Rahul S",
      email: "rahul.s@gmail.com",
      rating: 4,
      message:
        "Good place to hang out with friends. Slightly crowded on weekends.",
      date: "10 Aug 2025",
    },
  ];

  return (
    <section
      className="relative min-h-screen px-6 py-14 overflow-hidden
      bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300"
    >
      {/* HEADER */}
      <div className="relative max-w-6xl mx-auto mb-10 border-l-4 border-orange-600 pl-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Spot Feedbacks
        </h1>
        <p className="text-gray-700 mt-2">
          User feedbacks and ratings for all spots
        </p>
      </div>

      {/* FEEDBACK LIST */}
      <div className="relative max-w-6xl mx-auto space-y-6">
        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            className="p-[2px] rounded-2xl
            bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400
            shadow-xl"
          >
            <div className="bg-white rounded-2xl p-6">

              {/* SPOT HEADER */}
              <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {fb.spotName}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <MapPin size={14} className="text-orange-500" />
                    {fb.location}
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/admin/managespot`)}
                  className="flex items-center gap-2 px-4 py-2 text-sm
                    rounded-lg bg-orange-500 text-white
                    hover:bg-orange-600 transition"
                >
                  Manage Spot
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* USER + RATING */}
              <div className="flex flex-wrap justify-between gap-4 mt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-gray-700">
                    <User size={16} className="text-orange-500" />
                    <span className="font-medium">{fb.user}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Mail size={15} className="text-orange-500" />
                    {fb.email}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={
                        index < fb.rating
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
                <p className="text-sm leading-relaxed">{fb.message}</p>
              </div>

              {/* DATE */}
              <div className="text-right text-xs text-gray-400 mt-4">
                {fb.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
