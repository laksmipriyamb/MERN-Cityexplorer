import { Plus, MapPin, Clock, Heart, Bookmark } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [dp, setDp] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  
  console.log(dp);

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUsername(user?.username)
      setDp(user?.picture)
      setEmail(user?.email)
      setBio(user?.bio)
    }
  }, [])


  const user = {
    username: "Riya",
    email: "riya@gmail.com",
    bio: "Exploring hidden places  | Coffee lover  | Travel stories ",
    profilePic:
      "https://cdn.pixabay.com/photo/2024/02/08/12/54/ai-generated-8561072_1280.png",
    savedCount: 12,
  };
  const [editBio, setEditBio] = useState(user.bio);
  const [editUsername, setEditUsername] = useState(user.username);


  const stories = [
    {
      id: 1,
      image:
        "https://www.stayadventurous.com/wp-content/uploads/2018/01/Goa-Sunset-900.jpg",
      title: "Goa Sunset",
      place: "Goa",
      caption: "Golden skies and peaceful waves",
      postedAt: "2 hours ago",
      date: "23 Dec 2025",
      likes: 245,
    },
    {
      id: 2,
      image: "/waterfall.jpg",
      title: "Hidden Waterfall",
      place: "Wayanad",
      caption: "Nature’s secret escape",
      postedAt: "1 day ago",
      date: "22 Dec 2025",
      likes: 189,
    },
    {
      id: 3,
      image:
        "https://www.shutterstock.com/image-photo/group-positive-pretty-asian-female-600nw-2405844319.jpg",
      title: "Cafe Hopping",
      place: "Kochi",
      caption: "Coffee, conversations & calm vibes",
      postedAt: "3 days ago",
      date: "20 Dec 2025",
      likes: 321,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-yellow-300/30 rounded-full blur-3xl"></div>

      {/* PROFILE HEADER in small screen*/}
      <div className="relative max-w-5xl mx-auto px-6 pt-5 md:pt-20 pb-8 md:pb-14 border-b border-gray-200 md:hidden">
        <div className="flex flex-col items-center gap-8">

          {/* PROFILE IMAGE */}
          <div className="relative">
            <img
              src={dp ? dp : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXVyIMR7o6upYXFIPCqIv8KkxyUJs0q3WzQ&s"}
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
                <p className="font-semibold">{stories.length}</p>
                <p className="text-gray-500">Posts</p>
              </div>

              <div className="flex items-center gap-1">
                <Bookmark size={16} className="text-gray-600" />
                <span className="font-semibold">{user.savedCount}</span>
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
      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-14 border-b border-gray-200 hidden md:block">
        <div className="flex items-center gap-14">

          {/* PROFILE IMAGE */}
          <div className="relative">
            <img
              src={dp ? dp : "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"}
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
                <p className="font-semibold">{stories.length}</p>
                <p className="text-gray-500">Posts</p>
              </div>

              <div className="flex items-center gap-1">
                <Bookmark size={16} className="text-gray-600" />
                <span className="font-semibold">{user.savedCount}</span>
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

          {stories.map((story) => (
            <div key={story.id} className="group">

              {/* IMAGE */}
              <div className="relative aspect-square rounded-xl overflow-hidden">

                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* LIKE OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white text-lg font-semibold">

                    {story.title}
                  </div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-4 space-y-1">

                <h3 className="font-semibold text-sm truncate">
                  {story.title}
                </h3>

                <p className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={12} /> {story.place}
                </p>

                <p className="text-sm text-gray-700 line-clamp-2">
                  {story.caption}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {story.postedAt}
                  </span>
                  <span>{story.date}</span>
                </div>

                {/* LIKE COUNT BELOW (IG STYLE) */}
                <p className="text-xs font-medium text-red-500 pt-1">
                  <Heart fill="currentColor" /> {story.likes} likes
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* FLOATING ADD BUTTON */}
      <button
        onClick={() => navigate("/addstory")}
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        <Plus size={26} />
      </button>
      {/* EDIT PROFILE MODAL */}
      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}
          <div
            onClick={() => setShowEdit(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          ></div>

          {/* MODAL */}
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-8 z-10">

            <h2 className="text-xl font-bold mb-6 text-center">
              Edit Profile
            </h2>

            {/* image */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="uploadImg">
                <input type="file" id='uploadImg' hidden />
                <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={dp?dp:"https://static.vecteezy.com/system/resources/previews/020/213/738/non_2x/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"} alt="profile" />
  
              </label>
            </div>

            {/* USERNAME */}
            <div className="mb-4">
              <label className="text-sm font-medium">Username</label>
              <input
                value={username}
                onChange={(e) => setEditUsername(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            {/* BIO */}
            <div className="mb-6">
              <label className="text-sm font-medium">Bio</label>
              <textarea
                rows="3"
                value={bio}
                onChange={(e) => setEditBio(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border resize-none focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">
                Tell people about yourself
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowEdit(false)}
                className="flex-1 py-3 rounded-xl border hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  // later: save to backend
                  setShowEdit(false);
                }}
                className="flex-1 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
