import { Bookmark, Heart } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getHomeSpotsAPI } from "../server/allAPI";
import { useEffect } from "react";
import serverURL from "../server/serverURL";

function TopDestinations() {
    // Store active tab
    const [activeTab, setActiveTab] = useState("AllSpots");
    const navigate = useNavigate()

    const [homeSpots, setHomeSpots] = useState([])
    console.log(homeSpots);

    useEffect(() => {
        getHomeSpots()
    }, [])

    const getHomeSpots = async () => {
        const result = await getHomeSpotsAPI()
        if (result.status == 200) {
            setHomeSpots(result.data)
        } else {
            console.log(result);

        }
    }

    return (
        <section className="px-4 md:px-16 py-12">
            {/* ===== TITLE ===== */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Trendy <span className="text-orange-500">Spots</span>
                </h2>
                <Link to={'/allspots'} className="border border-orange-500 text-orange-500 px-3 py-2 ms-auto hidden md:flex hover:bg-orange-500 hover:text-white w-40">Explore All Spots</Link>


            </div>
            {/* ===== TABS ===== */}
            <div className="flex gap-8 border-b border-gray-300 w-fit mb-10">
                <button
                    onClick={() => setActiveTab("AllSpots")}
                    className={`pb-3 font-semibold ${activeTab === "AllSpots"
                        ? "text-orange-500 border-b-4 border-orange-500"
                        : "text-gray-500 hover:text-black"
                        }`}
                >
                    All Spots
                </button>

                <button
                    onClick={() => setActiveTab("Cafes")}
                    className={`pb-3 font-semibold ${activeTab === "Cafes"
                        ? "text-orange-500 border-b-4 border-orange-500"
                        : "text-gray-500 hover:text-black"
                        }`}
                >
                    Cafes
                </button>

                <button
                    onClick={() => setActiveTab("HiddenSpots")}
                    className={`pb-3 font-semibold ${activeTab === "HiddenSpots"
                        ? "text-orange-500 border-b-4 border-orange-500"
                        : "text-gray-500 hover:text-black"
                        }`}
                >
                    Hidden Spots
                </button>

                <button
                    onClick={() => setActiveTab("Resturants")}
                    className={`pb-3 font-semibold ${activeTab === "Resturants"
                        ? "text-orange-500 border-b-4 border-orange-500"
                        : "text-gray-500 hover:text-black"
                        }`}
                >
                    Resturants
                </button>

                <button
                    onClick={() => setActiveTab("TouristSpots")}
                    className={`pb-3 font-semibold ${activeTab === "TouristSpots"
                        ? "text-orange-500 border-b-4 border-orange-500"
                        : "text-gray-500 hover:text-black"
                        }`}
                >
                    Tourist Spots
                </button>

                 <button
                    onClick={() => setActiveTab("Resorts")}
                    className={`pb-3 font-semibold ${activeTab === "Resorts"
                        ? "text-orange-500 border-b-4 border-orange-500"
                        : "text-gray-500 hover:text-black"
                        }`}
                >
                    Resorts
                </button>
            </div>

            {/* ===== IMAGE GRID ===== */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-8">

                {/* AllSpots */}
                {activeTab === "AllSpots" && (
                    <>
                        {
                            homeSpots?.length > 0 ?
                                homeSpots?.slice(0, 4).map(spot => (
                                    <div key={spot?._id} onClick={() => navigate(`/viewspot/${spot?._id}`)} className="space-y-2">
                                        <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                            <img src={`${serverURL}/uploads/${spot?.coverImage}`} alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                                        </div>
                                        <p className="font-semibold">{spot?.spotname}</p>
                                        <p className="text-sm text-gray-500">{spot?.location}</p>
                                        <div className="flex justify-between">
                                            <p className="text-orange-500">★★★★★</p>
                                            <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                                        </div>
                                    </div>
                                ))

                                :
                                <p>Loading...</p>
                        }
                    </>
                )}

                {/* Cafes */}
                {activeTab === "Cafes" && (
                    <>
                        {
                            homeSpots?.length > 0 ?
                                homeSpots?.map(spot => (
                                    spot?.category=="Cafe" &&
                                        <div key={spot?._id} onClick={() => navigate(`/viewspot/${spot?._id}`)} className="space-y-2">
                                        <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                            <img src={`${serverURL}/uploads/${spot?.coverImage}`} alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                                        </div>
                                        <p className="font-semibold">{spot?.spotname}</p>
                                        <p className="text-sm text-gray-500">{spot?.location}</p>
                                        <div className="flex justify-between">
                                            <p className="text-orange-500">★★★★★</p>
                                            <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                                        </div>
                                    </div>
                                ))

                                :
                                <p>Loading...</p>
                        }
                    </>
                )}

                {/* HiddenSpots */}
                {activeTab === "HiddenSpots" && (
                    <>
                        {
                            homeSpots?.length > 0 ?
                                homeSpots?.map(spot => (
                                    spot?.category=="Hidden Spot" &&
                                        <div key={spot?._id} onClick={() => navigate(`/viewspot/${spot?._id}`)} className="space-y-2">
                                        <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                            <img src={`${serverURL}/uploads/${spot?.coverImage}`} alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                                        </div>
                                        <p className="font-semibold">{spot?.spotname}</p>
                                        <p className="text-sm text-gray-500">{spot?.location}</p>
                                        <div className="flex justify-between">
                                            <p className="text-orange-500">★★★★★</p>
                                            <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                                        </div>
                                    </div>
                                ))

                                :
                                <p>Loading...</p>
                        }
                    </>
                )}

                {/* Resturants */}
                {activeTab === "Resturants" && (
                    <>
                        {
                            homeSpots?.length > 0 ?
                                homeSpots?.map(spot => (
                                    spot?.category=="Restaurant" &&
                                        <div key={spot?._id} onClick={() => navigate(`/viewspot/${spot?._id}`)} className="space-y-2">
                                        <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                            <img src={`${serverURL}/uploads/${spot?.coverImage}`} alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                                        </div>
                                        <p className="font-semibold">{spot?.spotname}</p>
                                        <p className="text-sm text-gray-500">{spot?.location}</p>
                                        <div className="flex justify-between">
                                            <p className="text-orange-500">★★★★★</p>
                                            <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                                        </div>
                                    </div>
                                ))

                                :
                                <p>Loading...</p>
                        }
                    </>
                )}

                {/* TouristSpots */}
                {activeTab === "TouristSpots" && (
                     <>
                        {
                            homeSpots?.length > 0 ?
                                homeSpots?.map(spot => (
                                    spot?.category=="Tourist Spot" &&
                                        <div key={spot?._id} onClick={() => navigate(`/viewspot/${spot?._id}`)} className="space-y-2">
                                        <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                            <img src={`${serverURL}/uploads/${spot?.coverImage}`} alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                                        </div>
                                        <p className="font-semibold">{spot?.spotname}</p>
                                        <p className="text-sm text-gray-500">{spot?.location}</p>
                                        <div className="flex justify-between">
                                            <p className="text-orange-500">★★★★★</p>
                                            <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                                        </div>
                                    </div>
                                ))

                                :
                                <p>Loading...</p>
                        }
                    </>
                )}

                {/* Resorts */}
                {activeTab === "Resorts" && (
                     <>
                        {
                            homeSpots?.length > 0 ?
                                homeSpots?.map(spot => (
                                    spot?.category=="Resorts" &&
                                        <div key={spot?._id} onClick={() => navigate(`/viewspot/${spot?._id}`)} className="space-y-2">
                                        <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                            <img src={`${serverURL}/uploads/${spot?.coverImage}`} alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                                        </div>
                                        <p className="font-semibold">{spot?.spotname}</p>
                                        <p className="text-sm text-gray-500">{spot?.location}</p>
                                        <div className="flex justify-between">
                                            <p className="text-orange-500">★★★★★</p>
                                            <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                                        </div>
                                    </div>
                                ))

                                :
                                <p>Loading...</p>
                        }
                    </>
                )}

            </div>
            <Link className="border border-orange-500 text-orange-500 px-3 py-2 ms-30 md:hidden hover:bg-orange-500 hover:text-white">Explore All Spots</Link>

        </section>
    );
}

export default TopDestinations;
