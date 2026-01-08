import { useState } from "react";
import { Search, MapPin, Star, Bookmark, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NotLogin from "../components/NotLogin";


export default function AllSpots() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [token,setToken] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
    }
  },[])

  const spots = [
    { id: 1, name: "Cafe Aroma", place: "Kochi", category: "Cafe", rating: 4.5, image: "/cafearoma.jpg" },
    { id: 2, name: "Ocean View Restaurant", place: "Goa", category: "Restaurant", rating: 4.7, image: "/oceanviewres.jpg" },
    { id: 3, name: "Hidden Waterfall", place: "Wayanad", category: "Hidden Spot", rating: 4.8, image: "/waterfall.jpg" },
    { id: 4, name: "City Museum", place: "Delhi", category: "Tourist Spot", rating: 4.3, image: "/museum.jpg" },
    { id: 5, name: "Luxury Stay", place: "Udaipur", category: "Hotel", rating: 4.6, image: "/luxury.jpg" },
  ];

  const filteredSpots = spots.filter((spot) => {
    const categoryMatch =
      activeCategory === "All" || spot.category === activeCategory;

    const searchMatch =
      spot.name.toLowerCase().includes(search.toLowerCase()) ||
      spot.place.toLowerCase().includes(search.toLowerCase()) ||
      spot.category.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
    {/* login-user */}
    {
      token?
      <section className="bg-[#faf7f2] min-h-screen">
  
        {/* 🌅 HERO */}
        <div className="relative bg-[url('/bg3.jpg')] bg-cover text-white px-6 md:px-16 py-20 rounded-b-[60px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing Spots
          </h1>
          <p className="max-w-xl text-white/90 mb-8">
            Cafes, restaurants, hidden gems and unforgettable destinations around you
          </p>
  
          {/* 🔍 SEARCH BAR */}
          <div className="relative max-w-lg bg-white/25 rounded-4xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, place or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-full text-black shadow-lg focus:outline-none"
            />
          </div>
        </div>
  
        {/* 🧭 FILTERS */}
        <div className="px-6 md:px-16 mt-14 mb-10 flex flex-wrap gap-4 justify-center">
          {["All", "Cafe", "Restaurant", "Tourist Spot", "Hidden Spot", "Hotel"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    activeCategory === category
                      ? "bg-orange-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-orange-100"
                  }`}
              >
                {category}
              </button>
            )
          )}
        </div>
  
        {/* 🏞️ GRID */}
        <div className="px-6 md:px-16 pb-20">
          {filteredSpots.length === 0 ? (
            <p className="text-center text-gray-500">No spots found</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {filteredSpots.map((spot) => (
    <div
      key={spot.id}
      onClick={() => navigate(`/viewspot`)}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
        />
  
        {/* 🔥 BLACK OVERLAY ON HOVER */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
  
        <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold z-10">
          {spot.category}
        </span>
      </div>
  
      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">
          {spot.name}
        </h3>
  
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <MapPin size={14} />
          {spot.place}
        </div>
  
        <div className="flex items-center gap-1 text-orange-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium">{spot.rating}</span>
                  <div className="ms-auto flex justify-between gap-2"><Bookmark className="text-black"/><Heart className="text-red-600"/></div>
  
        </div>
      </div>
    </div>
  ))}
  
            </div>
          )}
        </div>
      </section>
      :
      <NotLogin/>
    }
    {/*not login-user */}
      
    </>
  );
}
