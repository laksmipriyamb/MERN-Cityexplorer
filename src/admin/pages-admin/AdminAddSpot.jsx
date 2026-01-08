import { useState } from "react";
import { MapPin, ImagePlus } from "lucide-react";
import { FaPlug, FaPlus } from "react-icons/fa";

export default function AdminAddSpot() {
  const [spotDetails, setSpotDetails] = useState({
    spotname: "", category: "", location: "", description: "", bestTime: "", coverImage: null, galleryImages: []
  })
  console.log(spotDetails);

  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])

  //state for coverimage
  const [coverPreview, setCoverPreview] = useState(null)


  const [thumbnail, setThumbnail] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const handleCoverImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSpotDetails({
      ...spotDetails,
      coverImage: file
    });
    const url = URL.createObjectURL(file)
    console.log(url);
    setCoverPreview(url)
  };

  const handleGalleryImages = (e) => {
    //get file which upload
    console.log(e.target.files[0]);
    //add to file to state
    const imgFileArray = spotDetails.galleryImages
    imgFileArray.push(e.target.files[0])
    setSpotDetails({ ...spotDetails, galleryImages: imgFileArray })
    // convert file to url
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setPreview(url)
    // for list of uploaded images display
    const spotImagesArray = previewList
    spotImagesArray.push(url)
    setPreviewList(spotImagesArray)
  }

  return (
    <section
      className="relative min-h-screen px-6 py-14 overflow-hidden
      bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem]
        bg-orange-400/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-40 w-[28rem] h-[28rem]
        bg-orange-500/30 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 bg-[radial-gradient(#ffffff40_1px,transparent_1px)]
        [background-size:22px_22px] pointer-events-none"></div>

      {/* HEADER */}
      <div className="relative max-w-4xl mx-auto mb-10 border-l-4 border-orange-600 pl-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Add New Spot
        </h1>
        <p className="text-gray-700 mt-2">
          Create and publish cafes, restaurants, hotels & tourist places.
        </p>
      </div>

      {/* FORM WRAPPER */}
      <div
        className="relative max-w-4xl mx-auto p-[2px] rounded-2xl
        bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400 shadow-xl"
      >
        <div className="bg-white rounded-2xl p-8 md:p-10">
          <form className="space-y-8">

            {/* SPOT NAME */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Spot Name
              </label>
              <input value={spotDetails.spotname} onChange={e => setSpotDetails({ ...spotDetails, spotname: e.target.value })}
                type="text"
                placeholder="Cafe Aroma"
                className="w-full px-4 py-3 rounded-lg border
                focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Category
              </label>
              <select value={spotDetails.category} onChange={e => setSpotDetails({ ...spotDetails, category: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border
                focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option>Select category</option>
                <option>Cafe</option>
                <option>Restaurant</option>
                <option>Hotel</option>
                <option>Tourist Spot</option>
                <option>Hidden Spot</option>
              </select>
            </div>

            {/* LOCATION */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Location
              </label>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-600" />
                <input value={spotDetails.location} onChange={e => setSpotDetails({ ...spotDetails, location: e.target.value })}
                  type="text"
                  placeholder="Kochi, Kerala"
                  className="flex-1 px-4 py-3 rounded-lg border
                  focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea value={spotDetails.description} onChange={e => setSpotDetails({ ...spotDetails, description: e.target.value })}
                rows="4"
                placeholder="Describe the place, ambience, food, highlights..."
                className="w-full px-4 py-3 rounded-lg border
                focus:ring-2 focus:ring-orange-500 outline-none resize-none"
              />
            </div>

            {/* BEST TIME */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Best Time to Visit
              </label>
              <input value={spotDetails.bestTime} onChange={e => setSpotDetails({ ...spotDetails, bestTime: e.target.value })}
                type="text"
                placeholder="October – March"
                className="w-full px-4 py-3 rounded-lg border
                focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* THUMBNAIL IMAGE */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Thumbnail Image (Main Cover)
              </label>

              <label className="cursor-pointer block">
                <div
                  className="w-full h-56 rounded-xl border-2 border-dashed
                  flex items-center justify-center text-gray-400
                  hover:border-orange-500 hover:text-orange-500 transition"
                >

                  {coverPreview?
                  <img src={coverPreview} alt="Thumbnail" />
                :
                <div className="flex flex-col items-center gap-2">
                    <ImagePlus size={32} />
                    <span className="text-sm">Upload Thumbnail</span>
                  </div>
                  }

                </div>

                <input onChange={e => handleCoverImage(e)}
                  type="file"
                  accept="image/*"
                  className="hidden"

                />
              </label>

              <p className="text-xs text-gray-500 mt-2">
                This image will be shown as the main display image.
              </p>
            </div>

            {/* GALLERY IMAGES */}
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
                        <input onChange={e => handleGalleryImages(e)} type="file" id='bookImages' hidden />
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

                    <input onChange={e => handleGalleryImages(e)}
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"

                    />
                  </label>
              }



              {galleryImages.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-5">
                  {galleryImages.map((img, index) => (
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
            <div className="flex justify-end gap-4 pt-6 border-t">
              <button
                type="button"
                className="px-6 py-2.5 rounded-lg border
                text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-2.5 rounded-lg bg-orange-600
                text-white font-medium hover:bg-orange-700 transition"
              >
                Publish Spot
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
