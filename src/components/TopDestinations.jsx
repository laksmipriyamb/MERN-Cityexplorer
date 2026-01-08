import { Bookmark, Heart } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TopDestinations() {
    // Store active tab
    const [activeTab, setActiveTab] = useState("AllSpots");
    const navigate = useNavigate()

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
            </div>


            {/* ===== IMAGE GRID ===== */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-8">

                {/* AllSpots */}
                {activeTab === "AllSpots" && (
                    <>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/cafe1.webp" alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <div className="flex justify-between">
                                <p className="text-orange-500">★★★★★</p>
                                <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                            </div>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/tourist.webp" alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <div className="flex justify-between">
                                <p className="text-orange-500">★★★★★</p>
                                <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                            </div>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/resturant1.webp" alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <div className="flex justify-between">
                                <p className="text-orange-500">★★★★★</p>
                                <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                            </div>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/hidden1.webp" alt="AllSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <div className="flex justify-between">
                                <p className="text-orange-500">★★★★★</p>
                                <div className=" flex justify-end gap-2"><Bookmark className="text-black" /><Heart className="text-red-600" /></div>
                            </div>

                        </div>
                    </>
                )}

                {/* Cafes */}
                {activeTab === "Cafes" && (
                    <>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/cafe1.webp" alt="Cafes" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/cafe1.webp" alt="Cafes" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/cafe1.webp" alt="Cafes" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/cafe1.webp" alt="Cafes" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                    </>
                )}

                {/* HiddenSpots */}
                {activeTab === "HiddenSpots" && (
                    <>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/hidden1.webp" alt="HiddenSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/hidden1.webp" alt="HiddenSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/hidden1.webp" alt="HiddenSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/hidden1.webp" alt="HiddenSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                    </>
                )}

                {/* Resturants */}
                {activeTab === "Resturants" && (
                    <>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/resturant1.webp" alt="Resturants" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/resturant1.webp" alt="Resturants" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/resturant1.webp" alt="Resturants" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/resturant1.webp" alt="Resturants" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                    </>
                )}

                {/* TouristSpots */}
                {activeTab === "TouristSpots" && (
                    <>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/tourist.webp" alt="TouristSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/tourist.webp" alt="TouristSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/tourist.webp" alt="TouristSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                        <div onClick={() => navigate(`/viewspot`)} className="space-y-2">
                            <div className="rounded-2xl overflow-hidden h-52 sm:h-56 md:h-60">
                                <img src="/tourist.webp" alt="TouristSpots" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <p className="font-semibold">Name</p>
                            <p className="text-sm text-gray-500">Place</p>
                            <p className="text-orange-500">★★★★★</p>
                        </div>
                    </>
                )}

            </div>
            <Link className="border border-orange-500 text-orange-500 px-3 py-2 ms-30 md:hidden hover:bg-orange-500 hover:text-white">Explore All Spots</Link>

        </section>
    );
}

export default TopDestinations;
