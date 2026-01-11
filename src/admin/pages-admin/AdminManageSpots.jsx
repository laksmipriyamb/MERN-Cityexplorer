import { useState } from "react";
import { MapPin, Pencil, Trash2, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteSpotAPI, getAllSpotsAPI } from "../../server/allAPI";
import serverURL from "../../server/serverURL";
import { toast, ToastContainer } from "react-toastify";

export default function AdminManageSpots() {
    const navigate = useNavigate()
    const [token, setToken] = useState("")
    const [allSpots, setAllSpots] = useState([])
    console.log(allSpots);


    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const userToken = sessionStorage.getItem("token")
            setToken(userToken)
            getAllSpots(userToken)
        }
    }, [])

    const getAllSpots = async (token) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAllSpotsAPI(reqHeader)
        if (result.status == 200) {
            setAllSpots(result.data)
        } else {
            console.log(result);

        }
    }

    const deleteSpot = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await deleteSpotAPI(id, reqHeader)
            if (result.status == 200) {
                toast.success("Spot deleted successfully");
                getAllSpots(token)
            } else {
                toast.error("Spot deletion Failed");
                console.log(result);

            }
        }
    }
    return (
        <section className="relative min-h-screen px-6 py-14 overflow-hidden
      bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300">

            {/* HEADER */}
            <div className="relative max-w-6xl mx-auto mb-10 border-l-4 border-orange-600 pl-4">
                <h1 className="text-3xl font-semibold text-gray-900">Manage Spots</h1>
                <p className="text-gray-700 mt-2">
                    View, edit and manage all spots added to the platform.
                </p>
            </div>

            {/* CONTENT */}
            <div className="relative max-w-6xl mx-auto p-[2px] rounded-2xl
        bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400 shadow-xl">
                <div className="bg-white rounded-2xl p-8">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allSpots.map((spot) => (
                            <div
                                key={spot?._id}
                                className="rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden"
                            >
                                <div className="h-55 overflow-hidden">
                                    <img
                                        src={`${serverURL}/uploads/${spot?.coverImage}`}
                                        alt={spot?.name}
                                        className="w-full h-full object-cover hover:scale-105 transition"
                                    />
                                </div>
                                <h1 className="pt-3 px-4 font-semibold text-xl text-orange-500">{spot?.spotname}</h1>

                                <div className="px-5 pb-5 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-semibold text-xl text-gray-800">
                                                {spot?.name}
                                            </h3>
                                        </div>



                                    </div>

                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-orange-600 font-medium">
                                            {spot?.category}
                                        </p>
                                        <div className="flex gap-3">
                                            <Link to={`/viewspot/${spot?._id}`} className="p-2 rounded-lg border hover:bg-orange-300 transition">
                                                <Pencil size={18} className="text-orange-600" />
                                            </Link>

                                            <button onClick={() => { deleteSpot(spot?._id) }} className="p-2 rounded-lg border hover:bg-red-500 transition">
                                                <Trash2 size={18} className="text-red-600 hover:text-white" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin size={16} className="text-orange-500" />
                                        {spot?.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* toast */}
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />


        </section>
    );
}
