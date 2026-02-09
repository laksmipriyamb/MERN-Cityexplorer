import { Plus, MapPin, Clock, Heart, Bookmark, Trash } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import EditProfile from "../components/EditProfile";
import { getAllUserStoriesAPI, getSavedSpotsAPI, removeStoryAPI } from "../server/allAPI";
import serverURL from "../server/serverURL";
import HeadPortion from "../components/HeadPortion";
import ProfilePosts from "../components/ProfilePosts";
import ProfileReviews from "../components/ProfileReviews";
import ProfileSavedSpot from "../components/ProfileSavedSpot";

export default function Profile() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1)
  const [showEdit, setShowEdit] = useState(false);
  const [dp, setDp] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [savedSpots, setSavedSpots] = useState([])
  const [token,setToken] = useState("")
  console.log(username, email, bio);
  console.log(dp);
  console.log(savedSpots);


  const [allStories, setAllStories] = useState([])
  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      const token = sessionStorage.getItem("token")
      console.log(user);
      setToken(token)
      setUsername(user?.username)
      setDp(user?.picture)
      setEmail(user?.email)
      setBio(user?.bio)
      getUserUploadStories()
      fetchSavedSpots(token)
    }
  }, [])
  
      const fetchSavedSpots = async (token) => {
          const reqHeader = {
              Authorization: `Bearer ${token}`
          }
  
          const result = await getSavedSpotsAPI(reqHeader)
          if (result.status === 200) {
              setSavedSpots(result.data)
          }
      }
  

  const getUserUploadStories = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllUserStoriesAPI(reqHeader)
      if (result.status == 200) {
        setAllStories(result.data)
      } else {
        console.log(result);

      }
    }
  }







  return (
    <>
      <HeadPortion />
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">

        {/* BACKGROUND BLOBS */}
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-orange-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-yellow-300/30 rounded-full blur-3xl"></div>

        {/* PROFILE HEADER in small screen*/}
        <div className="relative max-w-5xl mx-auto px-6 pt-5 md:pt-20 pb-8 md:pb-14 border-b border-gray-200 md:hidden">
          <div className="flex mt-20 flex-col items-center gap-8">

            {/* PROFILE IMAGE */}
            <div className="relative">
              <img
                src={dp ? dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${serverURL}/uploads/${dp}` : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"}
                alt="profile"
                className=" w-36 h-36 rounded-full object-cover border-4 border-white"
              />
            </div>

            {/* USER INFO */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <h1 className="text-3xl font-bold">{username}</h1>

                <button
                  onClick={() => setShowEdit(true)}
                  className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                >
                  Edit Profile
                </button>

                <button
                  onClick={() => navigate("/addstory")}
                  className="px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Post Story
                </button>
              </div>

              {/* STATS */}
              <div className="flex gap-12 text-sm mb-4">
                <div>
                  <p className="font-semibold">{allStories?.length}</p>
                  <p className="text-gray-500">Posts</p>
                </div>

                <div className="flex items-center gap-1">
                  <Bookmark size={16} className="text-gray-600" />
                  <span className="font-semibold">{savedSpots?.length}</span>
                  <span className="text-gray-500">Saved</span>
                </div>
              </div>

              {/* BIO */}
              <div className="max-w-md">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {bio}
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-2">{email}</p>
            </div>

          </div>
        </div>

        {/* PROFILE HEADER  */}
        <div className="relative max-w-5xl mt-12 mx-auto px-6 pt-20 pb-14 border-b border-gray-200 hidden md:block">
          <div className="flex items-center gap-14">

            {/* PROFILE IMAGE */}
            <div className="relative">
              <img
                src={dp ? dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${serverURL}/uploads/${dp}` : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"}
                alt="profile"
                className="border w-36 h-36 rounded-full object-cover border-4 border-orange-500"
              />
            </div>

            {/* USER INFO */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <h1 className="text-3xl font-bold">{username}</h1>

                <button
                  onClick={() => setShowEdit(true)}
                  className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                >
                  Edit Profile
                </button>

                <button
                  onClick={() => navigate("/addstory")}
                  className="px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Post Story
                </button>
              </div>

              {/* STATS */}
              <div className="flex gap-12 text-sm mb-4">
                <div>
                  <p className="font-semibold">{allStories.length}</p>
                  <p className="text-gray-500">Posts</p>
                </div>

                <div className="flex items-center gap-1">
                  <Bookmark size={16} className="text-gray-600" />
                  <span className="font-semibold">{savedSpots?.length}</span>
                  <span className="text-gray-500">Saved</span>
                </div>
              </div>

              {/* BIO */}
              <div className="max-w-md">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {bio}
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-2">{email}</p>
            </div>

          </div>
        </div>
        <div>
          <div className="w-full flex justify-center items-center my-4">
            <div className="md:mx-20"><h2 onClick={() => setTab(1)} className={tab==1?'text-black font-bold border-gray-300 border p-4 cursor-pointer':'text-gray-400 font-bold border-gray-200 p-4 cursor-pointer'}>POSTS</h2></div>
            <div className="md:mx-20"><h2 onClick={() => setTab(2)} className={tab==2?'text-black font-bold border-gray-300 border p-4 cursor-pointer':'text-gray-400 font-bold border-gray-200 p-4 cursor-pointer'}>REVIEWS</h2></div>
            <div className="md:mx-20"><h2 onClick={() => setTab(3)} className={tab==3?'text-black font-bold border-gray-300 border p-4 cursor-pointer':'text-gray-400 font-bold border-gray-200 p-4 cursor-pointer'}>SAVED SPOTS</h2></div>

          </div>
          {
            tab == 1 &&
            <ProfilePosts />
          }
          {
            tab == 2 &&
            <ProfileReviews />
          }
          {
            tab == 3 &&
            <ProfileSavedSpot />
          }


        </div>
        {/* EDIT PROFILE MODAL */}
        {showEdit && (
          <EditProfile />
        )}
        {/* toast */}
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
      </section>
    </>
  );
}
