import { Clock, Heart } from "lucide-react";
import NotLogin from "../components/NotLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function AllStories() {
  const [token,setToken] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
    }
  },[])
  const stories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Sunset by the Beach",
      caption: "Golden skies, calm waves, and unforgettable peace ",
      timeAgo: "3 hours ago",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
      title: "Mountain Escape",
      caption: "Where silence speaks louder than noise ",
      timeAgo: "1 day ago",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "City Walks",
      caption: "Lost in streets full of stories ",
      timeAgo: "2 days ago",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Forest Trails",
      caption: "Breathing nature, step by step ",
      timeAgo: "3 days ago",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Forest Trails",
      caption: "Breathing nature, step by step ",
      timeAgo: "3 days ago",
    },
  ];

  return (
    <>
      {token?
        <section className="relative min-h-screen px-4 py-16 bg-[#faf7f2] overflow-hidden">
  
        {/* 🌈 BACKGROUND */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-yellow-300/30 rounded-full blur-3xl"></div>
  
        <div className="relative max-w-6xl mx-auto">
  
          {/* HEADER */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">
              Community <span className="text-orange-500">Stories</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Real moments shared by explorers
            </p>
          </div>
  
          {/* 📸 INSTAGRAM-STYLE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  
            {stories.map((story) => (
              <div
                key={story.id}
                className="group"
              >
                
  
                {/* IMAGE */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 cursor-pointer">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                {/* TITLE */}
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm mb-2 mt-4 truncate">
                    {story.title}
                  </h3>
                  <Heart className="text-red-600"/>
                </div>
  
                {/* CAPTION */}
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {story.caption}
                </p>
  
                {/* TIME */}
                <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                  <Clock size={12} />
                  {story.timeAgo}
                </div>
              </div>
            ))}
  
          </div>
        </div>
      </section>
      :
      <NotLogin/>
      }
    </>
  );
}
