import { CheckCircle, XCircle, User, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllStoriesAdminAPI, updateStoryStatusAPI } from "../../server/allAPI";
import serverURL from "../../server/serverURL";
import { toast, ToastContainer } from "react-toastify";


export default function AdminApproveStories() {
    // Dummy data – replace with API response
    const [allStories, setAllStories] = useState([])

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (token) {
            getAllStories(token)
        }
    }, [])

    const getAllStories = async (token) => {
        const reqHeader = {
            'Authorization': `Bearer ${token}`
        }
        const result = await getAllStoriesAdminAPI(reqHeader)
        if (result.status == 200) {
            setAllStories(result.data)
        } else {
            console.log(result);

        }
    }

    const updateStoryStatus = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                'Authorization': `Bearer ${token}`
            }
            const result = await updateStoryStatusAPI(id, reqHeader)
            if (result.status == 200) {
                toast.success("Story Status updated!!!")
                getAllStories(token)
            } else {
                console.log(result);

            }
        }
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

            {/* GRID TEXTURE */}
            <div
                className="absolute inset-0 bg-[radial-gradient(#ffffff40_1px,transparent_1px)]
        [background-size:22px_22px] pointer-events-none"
            ></div>

            {/* HEADER */}
            <div className="relative max-w-6xl mx-auto mb-10 border-l-4 border-orange-600 pl-4">
                <h1 className="text-3xl font-semibold text-gray-900">
                    Approve Stories
                </h1>
                <p className="text-gray-700 mt-2">
                    Review stories submitted by users before publishing
                </p>
            </div>

            {/* STORIES LIST */}
            <div className="relative max-w-6xl mx-auto space-y-8">
                {allStories.map((story) => (
                    <div
                        key={story?._id}
                        className="p-[2px] rounded-2xl
              bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400
              shadow-xl"
                    >
                        <div className="bg-white rounded-2xl overflow-hidden">

                            <div className="grid md:grid-cols-3 gap-6">

                                {/* IMAGE */}
                                <img
                                    src={`${serverURL}/uploads/${story?.uploadImage}`}
                                    alt={story?.title}
                                    className="w-full h-60 md:h-full object-cover py-3 ps-3 rounded-4xl"
                                />

                                {/* CONTENT */}
                                <div className="md:col-span-2 p-6 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {story?.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 line-clamp-4">
                                            {story?.caption}
                                        </p>

                                        {/* USER DETAILS */}
                                        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-2">
                                            <span className="inline-flex items-center gap-2">
                                                <User size={16} className="text-orange-500" />
                                                {story?.publisher?.username}
                                            </span>

                                            <span className="inline-flex items-center gap-2">
                                                <Mail size={16} className="text-orange-500" />
                                                {story?.publisher?.email}
                                            </span>

                                            <span className="font-medium text-gray-600">
                                                Spot: {story?.spotname}
                                            </span>

                                        </div>
                                        {/* ACTION BUTTONS */}
                                        <div className="flex gap-4 mt-6">
                                            {story?.status != "approved" ?
                                            <button  onClick={()=>{updateStoryStatus(story?._id)}} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-green-500 hover:bg-green-200 transition">
                                                <CheckCircle size={18} /> Approve
                                            </button>
                                            :
                                            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-green-500 hover:bg-green-200 transition">
                                                <img width={'30px'} height={'30px'} src="https://i.pinimg.com/originals/b0/e0/e9/b0e0e9129ef97614535d929a43831956.gif" alt="approved" /> Approved
                                            </button>
                                            }
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* toast */}
                      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
        </section>
    );
}
