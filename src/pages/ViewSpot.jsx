import { MapPin, Star, Heart, Share2, Send } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import NotLogin from "../components/NotLogin";
import { addMessageAPI, getSpotDetailsByIdAPI, loginAPI } from "../server/allAPI";
import { Link, useParams } from "react-router-dom";
import serverURL from "../server/serverURL";
import { jwtDecode } from "jwt-decode";

export default function ViewSpot() {
  const [token, setToken] = useState("")
  const [viewDetails, setViewDetails] = useState({})
  const [message, setMessage] = useState("")

  console.log(message);
  console.log(viewDetails);

  const [role, setRole] = useState("")
  console.log(role);


  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getSpotDetails(id)
      const token = sessionStorage.getItem("token")
      if (token) {
        const decode = jwtDecode(token)
        setRole(decode.role)
      }
    }
  }, [id])



  const getSpotDetails = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        'Authorization': `Bearer ${token}`
      }
      const result = await getSpotDetailsByIdAPI(id, reqHeader)
      console.log(result);
      if (result.status == 200) {
        setViewDetails(result.data)
      } else {
        console.log(result);

      }

    }
  }

  // const sendMessage = async () => {
  //   const token = sessionStorage.getItem("token")

  //   const reqHeader = {
  //     Authorization: `Bearer ${token}`
  //   }

  //   const reqBody = {
  //     spotId: spot._id,
  //     message
  //   }

  //   const result = await addMessageAPI(reqBody, reqHeader)

  //   if (result.status === 200) {
  //     alert("Message sent")
  //     setMessage("")
  //   }
  // }

  return (
    <>

      <section className="bg-[#faf7f2] min-h-screen">

        {/* 🌅 HERO IMAGE */}
        <div className="relative h-[50vh]">
          <img
            src={`${serverURL}/uploads/${viewDetails.coverImage}`}
            alt="Spot"
            className="w-full h-full bg-fixed object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-8 left-6 md:left-16 text-white">
            <span className="bg-orange-500 px-4 py-1 rounded-full text-sm">
              {viewDetails.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              {viewDetails.spotname}
            </h1>

            <div className="flex items-center gap-4 mt-3 text-sm">
              <div className="flex items-center gap-1">
                <Star size={16} fill="currentColor" />
                <span>4.5</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{viewDetails.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 📌 CONTENT */}
        <div className="px-6 md:px-16 py-14 grid md:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold mb-4">About this spot</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {viewDetails.description}
            </p>

            {/* 🖼️ GALLERY */}
            <h3 className="text-xl font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 mb-12">
              {viewDetails.galleryImages?.map(images => (
                <img key={images} src={`${serverURL}/uploads/${images}`} className="rounded object-cover h-40 w-full" />
              ))}
            </div>

            {/* 💬 COMMENT TO ADMIN */}
            {/* <div className="bg-white rounded-3xl shadow p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-2">
                Send Feedback to Admin
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Found something incorrect or want to suggest an update about this spot?
              </p>

              <form className="space-y-5">

               
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none resize-none"
                />

                
                <button
                onClick={sendMessage}
                  type="submit"
                  className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div> */}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-white rounded-3xl shadow p-6 h-fit">
            <h3 className="text-xl font-bold mb-4">Spot Info</h3>

            <div className="space-y-4 text-sm text-gray-600">
              <p><span className="font-medium text-black">Category:<span className="text-xl ms-3 text-orange-600">{viewDetails.category}</span></span></p>
              <p><span className="font-medium text-black">Location:<span className="text-xl ms-3 text-orange-600">{viewDetails.location}</span></span></p>
              <p><span className="font-medium text-black">Best Time:<span className="text-xl ms-3 text-orange-600">{viewDetails.bestTime}</span></span></p>
            </div>

            <div >
              {
                role == "admin" ?
                  <div className="flex gap-3 mt-8">
                    <Link to={`/admin/spot/edit/${viewDetails._id}`} className="text-center flex-1 border border-orange-500 hover:bg-orange-500 text-orange-500 text-xl font-bold hover:text-white py-2 rounded-full bg-white transition">
                      Edit
                    </Link>
                  </div>
                  :
                  <div className="flex gap-3 mt-8">
                    <button className="flex-1 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition">
                      Location
                    </button>
                    <button className="p-3 border rounded-full hover:bg-gray-100">
                      <Share2 />
                    </button>
                  </div>
              }
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
