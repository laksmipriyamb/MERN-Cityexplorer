import React, { useEffect, useState } from 'react'
import { getAllUserStoriesAPI } from '../server/allAPI'
import serverURL from '../server/serverURL'
import { Clock, Heart, MapPin, Trash, Trash2 } from 'lucide-react'

function ProfilePosts() {
  const [allStories, setAllStories] = useState([])

useEffect(()=>{
    if(sessionStorage.getItem("token")){
        getUserUploadStories()
    }
},[])
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
            const result = await removeStoryAPI(id, reqHeader)
            if (result.status == 200) {
                getUserUploadStories()
            } else {
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
                                            post?.status !== "approved" &&
                                                <p className=" font-medium text-red-500 pt-1">
                                                    Approve Pending...
                                                </p>
                                                
                                        }
                                        <button onClick={() => { deleteStory(post?._id) }} className="text-xs font-medium text-red-500 pt-1">
                                            <Trash2 />
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
    )
}

export default ProfilePosts