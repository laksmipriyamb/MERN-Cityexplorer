import { Clock, Heart } from "lucide-react";
import NotLogin from "../components/NotLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getAllApprovedStoriesAPI } from "../server/allAPI";
import serverURL from "../server/serverURL";
import HeadPortion from "../components/HeadPortion";

export default function AllStories() {
  const [token, setToken] = useState("")
  const [allStories, setAllStories] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllStories(userToken)
    }
  }, [])

  const getAllStories = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllApprovedStoriesAPI(reqHeader)
    if (result.status == 200) {
      setAllStories(result.data)

    } else {
      console.log(result);

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
    <>
    <HeadPortion/>
      {token ?
        <section className="relative min-h-screen px-4 py-16 bg-[#faf7f2] overflow-hidden">

          {/* 🌈 BACKGROUND */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-yellow-300/30 rounded-full blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto">

            {/* HEADER */}
            <div className="mb-12 mt-10">
              <h1 className="text-3xl md:text-4xl font-bold">
                Explore <span className="text-orange-500">Stories</span>
              </h1>
              <p className="text-gray-500 mt-2">
                Real moments shared by explorers
              </p>
            </div>

            {/* INSTAGRAM-STYLE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

              {allStories.map((allStories) => (
                <div
                  key={allStories?._id}
                  className="group bg-white p-3 rounded-2xl"
                >

                  <div className="flex justify-start items-center">
                    <div><img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={allStories.publisher?.picture ? `${serverURL}/uploads/${allStories.publisher.picture}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&s"} alt="profile" /></div>
                    <div><p className="text-sm ms-5">{allStories?.publisher?.username}</p></div>
                  </div>
                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden rounded-xl my-3 bg-gray-200 cursor-pointer">
                    <img
                      src={`${serverURL}/uploads/${allStories?.uploadImage}`}
                      alt="image"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white text-lg font-semibold"> {allStories.title}</div>
                    </div>
                  </div>
                  {/* TITLE */}
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm mb-2 mt-4 truncate">
                      {allStories.title}
                    </h3>
                    <div className="flex flex-col items-center mt-3"><Heart className="text-red-600" />
                      {allStories?.likes.length > 0 ?
                        <p className="text-xs text-gray-700">{allStories?.likes.length}</p>
                        :
                        <p className="text-xs text-gray-700">0</p>
                      }</div>
                  </div>
                  {/* TIME */}
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                    <Clock size={12} />
                    {timeAgo(allStories.createdAt)}
                  </div>

                  {/* CAPTION */}
                  <p className="text-sm text-gray-600 mt-3">
                    {allStories?.caption}
                  </p>


                </div>
              ))}

            </div>
          </div>
        </section>
        :
        <NotLogin />
      }
    </>
  );
}
