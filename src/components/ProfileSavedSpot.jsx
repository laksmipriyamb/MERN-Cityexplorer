import React, { useEffect, useState } from 'react'
import { getSavedSpotsAPI, saveSpotAPI } from '../server/allAPI'
import { Bookmark, MapPin } from 'lucide-react'
import serverURL from '../server/serverURL'

function ProfileSavedSpot() {
    const [savedSpots, setSavedSpots] = useState([])
    const [token,setToken] = useState("")
      const [savedSpotIds, setSavedSpotIds] = useState([])

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (token) {
            fetchSavedSpots(token)
        }
        setToken(token)
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

    //save or unsave
    const handleSaveSpot = async (e, spotId) => {
        e.stopPropagation()

        const reqHeader = {
            Authorization: `Bearer ${token}`
        }

        const reqBody = { spotId }

        const result = await saveSpotAPI(reqBody, reqHeader)

        if (result.status === 200) {
            alert(result.data.message)
            alert(result.data.message)
      setSavedSpotIds((prev) =>
        prev.includes(spotId)
          ? prev.filter((id) => id !== spotId)
          : [...prev, spotId]
      )
        } else {
            console.log(result)
        }
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            {savedSpots.length === 0 ? (
                <p className="text-center text-gray-500">No spots found</p>
            ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {savedSpots?.map((spot) => (
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
                                <Bookmark className="text-black" />
                              ) : (
                                <Bookmark className="text-orange-500 fill-orange-500" />
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
    )
}

export default ProfileSavedSpot