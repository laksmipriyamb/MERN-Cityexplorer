import { useState } from "react";
import { Search, MapPin, Star, Bookmark, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NotLogin from "../components/NotLogin";
import { getAllSpotsAPI, saveSpotAPI } from "../server/allAPI";
import serverURL from "../server/serverURL";
import HeadPortion from "../components/HeadPortion";
import { toast, ToastContainer } from "react-toastify";


export default function AllSpots() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState("")
  const [allSpots, setAllSpots] = useState([])
  const [savedSpotIds, setSavedSpotIds] = useState([])
  console.log(allSpots);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllSpots(userToken)
    }
  }, [])

  const getAllSpots = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllSpotsAPI(reqHeader)
    if (result.status == 200) {
      setAllSpots(result.data)
    } else {
      console.log(result);

    }
  }

  //save or unsave
  const handleSaveSpot = async (e, spotId) => {
    e.stopPropagation()

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    const reqBody = { spotId }

    const result = await saveSpotAPI(reqBody, reqHeader)

    if (result.status === 200) {
      toast.dark(result.data.message)
      setSavedSpotIds((prev) =>
        prev.includes(spotId)
          ? prev.filter((id) => id !== spotId)
          : [...prev, spotId]
      )
    } else {
      console.log(result)
    }
  }



  const filteredSpots = allSpots.filter((spot) => {
    const categoryMatch =
      activeCategory === "All" || spot.category.toLowerCase() === activeCategory.toLowerCase();

    const searchMatch =
      spot.spotname.toLowerCase().includes(search.toLowerCase()) ||
      spot.location.toLowerCase().includes(search.toLowerCase()) ||
      spot.category.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <HeadPortion />
      {/* login-user */}
      {
        token ?
          <section className="bg-[#faf7f2] min-h-screen">

            {/* 🌅 HERO */}
            <div className="relative bg-[url('/bg3.jpg')] bg-cover text-white px-6 md:px-16 py-20 rounded-b-[60px]">
              <h1 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
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
              {["All", "Cafe", "Restaurant", "Tourist Spot", "Hidden Spot", "Resorts"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category
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
                  {filteredSpots?.map((spot) => (
                    <div
                      key={spot?._id}
                      onClick={() => navigate(`/viewspot/${spot?._id}`)}
                      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
                    >
                      {/* IMAGE */}
                      <div className="relative overflow-hidden">
                        <img
                          src={`${serverURL}/uploads/${spot?.coverImage}`}
                          alt={spot?.spotname}
                          className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
                        />

                        {/* 🔥 BLACK OVERLAY ON HOVER */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

                        <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold z-10">
                          {spot?.category}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="p-5">
                        <h3 className="font-semibold text-lg mb-1">
                          {spot?.spotname}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <MapPin size={14} />
                          {spot?.location}
                        </div>

                        <div className="flex items-center gap-1 text-orange-500">
                          <div className="ms-auto flex justify-between gap-2">
                            <button onClick={(e) => handleSaveSpot(e, spot?._id)}>
                              {savedSpotIds.includes(spot?._id) ? (
                                <Bookmark className="text-orange-500 fill-orange-500" />
                              ) : (
                                <Bookmark className="text-black" />
                              )}
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              )}
            </div>
          </section>
          :
          <NotLogin />
      }
      {/*not login-user */}

{/* toast */}
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
  
    </>
  );
}
