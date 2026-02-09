import { useState } from "react";
import { Star, MapPin, ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NotLogin from "../components/NotLogin";
import Header from "../components/Header";
import HeadPortion from "../components/HeadPortion";
import { addReviewAPI } from "../server/allAPI";
import { toast, ToastContainer } from "react-toastify";


export default function AddReview() {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewDetails, setReviewDetails] = useState({ spotname: "", location: "", description: "", rating: 0, reviewImages: [] });

  console.log(reviewDetails);
  const token = sessionStorage.getItem("token")

  const [preview,setPreview] = useState("")
  const [imagePreview, setImagePreview] = useState([]);
  const [previewList, setPreviewList] = useState([]);


  const handleReviewImages = (e) => {

    //get file which upload
    console.log(e.target.files[0]);
    //add to file to state
    const imgFileArray = reviewDetails.reviewImages
    imgFileArray.push(e.target.files[0])
    setReviewDetails({ ...reviewDetails, reviewImages: imgFileArray })
    // convert file to url
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setImagePreview(url)
    // for list of uploaded images display
    const reviewImagesArray = imagePreview
    reviewImagesArray.push(url)
    setImagePreview(reviewImagesArray)
  };

  const handleAddSpot = async (e) => {
    e.preventDefault();
    const { spotname, location, rating, description, reviewImages } = reviewDetails
    if (!spotname || !location || !description || reviewImages.length == 0) {
      toast.warning("Please fill the form completely...")
    } else {
      //api call
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData()
        for (let key in reviewDetails) {
          if (key != "reviewImages") {
            reqBody.append(key, reviewDetails[key])
          } else {
            reviewDetails.reviewImages.forEach(imgFile => {
              reqBody.append("reviewImages", imgFile)
            })
          }
        }
        const result = await addReviewAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("Review Sent...")
        } else if (result.status == 401) {
          toast.warning(result.response.data)
        } else {
          toast.error("Something went wrong!!!")
        }
        clearAllAddReviewForm()

      }

    }
  }

  const clearAllAddReviewForm = () => {
    setReviewDetails({
      spotname: "", location: "", rating: 0, description: "", reviewImages: []
    })
    setImagePreview([])

  }

  return (
    <>
      <HeadPortion />
      {token ?
        <section
          className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
          }}
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* CONTENT */}
          <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 mt-28">

            {/* HEADER */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Add Your Review
              </h1>
              <p className="text-gray-500">
                Share your experience and help others explore amazing places
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-7" onSubmit={handleAddSpot}>

              {/* SPOT NAME */}
              <div>
                <label className="font-medium mb-2 block">Spot Name</label>
                <input
                  value={reviewDetails.spotname}
                  onChange={(e) => setReviewDetails({ ...reviewDetails, spotname: e.target.value })}
                  type="text"
                  placeholder="Spotname"
                  className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="font-medium mb-2 block">Location</label>
                <div className="flex items-center gap-3">
                  <MapPin className="text-orange-500" />
                  <input
                    value={reviewDetails.location}
                    onChange={(e) => setReviewDetails({ ...reviewDetails, location: e.target.value })}
                    type="text"
                    placeholder="Location"
                    className="flex-1 px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
              </div>

              {/* RATING */}
              <div>
                <label className="font-medium mb-3 block">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={32}
                      className={`cursor-pointer transition ${(hover || reviewDetails.rating) >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                        }`}
                      fill={(hover || reviewDetails.rating) >= star ? "currentColor" : "none"}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      value={reviewDetails.rating}
                      onClick={() => setReviewDetails({ ...reviewDetails, rating: star })} />
                  ))}
                </div>
              </div>

              {/* REVIEW */}
              <div>
                <label className="font-medium mb-2 block">Your Review</label>
                <textarea
                  value={reviewDetails.description}
                  onChange={(e) => setReviewDetails({ ...reviewDetails, description: e.target.value })}
                  rows="4"
                  placeholder="Describe your experience..."
                  className="w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none resize-none"
                />
              </div>

              {/* IMAGE UPLOAD */}
              
              <div>
                <label className="block text-sm font-medium mb-3">
                  Restaurant & Ambience Images
                </label>

                {
                  preview ?
                    //  for more image upload 
                    <div className='flex  items-center'>
                      {/* uploading images */}
                      {
                        previewList?.map((bookImgURL, index) => (
                          <img key={index} className='mx-3 w-32 h-32' src={bookImgURL} alt="upload Book" />
                        ))
                      }
                      {/* add more file upload button */}
                      {
                        previewList.length < 5 && 
                        <label htmlFor='bookImages' className='flex items-center'>
                          <input onChange={e => handleReviewImages(e)} type="file" id='bookImages' hidden />
                          <FaPlus className='text-3xl ms-3' />
                        </label>
                      }
                    </div>
                    :
                    <label className="inline-flex items-center gap-4 cursor-pointer">
                      <div
                        className="w-32 h-32 rounded-xl border-2 border-dashed
                                flex flex-col items-center justify-center text-gray-400
                                hover:border-orange-500 hover:text-orange-500 transition"
                      >
                        {preview ?
                          <img src={preview} alt="image" />
                          :
                          <div>
                            <ImagePlus size={28} />
                            <span className="text-xs mt-2">Add Images</span>
                          </div>
                        }
                      </div>

                      <input onChange={e => handleReviewImages(e)}
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"

                      />
                    </label>
                }



                {imagePreview.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-5">
                    {imagePreview.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="gallery"
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                )}

                <p className="text-xs text-gray-500 mt-2">
                  Upload multiple images showing ambience, food & interiors.
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-4 pt-6 justify-end">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 rounded-xl border text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddSpot}
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
          {/* toast */}
          <ToastContainer position="top-center" autoClose={2000} theme="colored" />

        </section>
        :
        <NotLogin />
      }
    </>
  );
}
