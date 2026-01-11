import { Plus, MapPin, Clock, Heart, Bookmark, Trash } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import EditProfile from "../components/EditProfile";
import { getAllUserStoriesAPI, removeStoryAPI } from "../server/allAPI";
import serverURL from "../server/serverURL";
import HeadPortion from "../components/HeadPortion";

export default function Profile() {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [dp, setDp] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  console.log(username, email, bio);
  console.log(dp);


  const [allStories, setAllStories] = useState([])
  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      console.log(user);

      setUsername(user?.username)
      setDp(user?.picture)
      setEmail(user?.email)
      setBio(user?.bio)
      getUserUploadStories()
    }
  }, [])

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

  const deleteStory = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await removeStoryAPI(id,reqHeader)
            if(result.status==200){
                getUserUploadStories()
            }else{
                console.log(result);
                
            }
        }
    }

  const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })
}





  return (
   <>
   <HeadPortion/>
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
                src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"}
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
                  <span className="font-semibold">0</span>
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
                src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"}
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
                  <span className="font-semibold">0</span>
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
  
        {/* STORIES GRID */}
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 gap-10">
  
            {/* duplicate */}
            {
              allStories?.length > 0 ?
                allStories?.map(post => (
                  <div key={post?._id} className="group">
  
                    {/* IMAGE */}
                    <div className="relative aspect-square rounded-xl overflow-hidden">
  
                      <img
                        src={`${serverURL}/uploads/${post?.uploadImage}`}
                        alt="story"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
  
                      {/* LIKE OVERLAY */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"></div>
                    </div>
  
                    {/* DETAILS */}
                    <div className="mt-4 space-y-1">
  
                      <h3 className="font-semibold text-sm truncate">
                        {post?.title}
                      </h3>
  
                      <p className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} /> {post?.location}
                      </p>
  
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {post?.caption}
                      </p>
  
                      <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                        </span>
                        <span>{formatDate(post?.createdAt)}</span>
                      </div>
  
                      {/* LIKE COUNT BELOW (IG STYLE) */}
                      <div className="flex justify-between">
                        {
                          post?.status === "approved" ?
                          <p className="text-xs font-medium text-red-500 pt-1">
                          <Heart fill="currentColor" /> 0 likes
                        </p>
                        :
                        <p className=" font-medium text-red-500 pt-1">
                          Approve Pending...
                        </p>
                        }
                        <button onClick={()=>{deleteStory(post?._id)}} className="text-xs font-medium text-red-500 pt-1">
                          <Trash />
                        </button>
                      </div>
                    </div>
  
                  </div>
                ))
                :
                <div><p>Not Stories Published Yet...</p></div>
            }
  
          </div>
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
