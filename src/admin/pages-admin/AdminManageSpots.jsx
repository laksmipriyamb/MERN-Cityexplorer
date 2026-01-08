import { useState } from "react";
import { MapPin, Pencil, Trash2, X } from "lucide-react";

export default function AdminManageSpots() {
    const [spots, setSpots] = useState([
        {
            id: 1,
            name: "Cafe Aroma",
            category: "Cafe",
            location: "Kochi, Kerala",
            status: "Approved",
            image: "/cafe2.webp",
        },
        {
            id: 2,
            name: "Hill View Point",
            category: "Tourist Spot",
            location: "Wayanad, Kerala",
            status: "Pending",
            image: "/tourist.webp",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSpot, setSelectedSpot] = useState(null);

    const openEditModal = (spot) => {
        setSelectedSpot({ ...spot });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSpot(null);
    };

    const handleChange = (e) => {
        setSelectedSpot({ ...selectedSpot, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setSpots((prev) =>
            prev.map((s) => (s.id === selectedSpot.id ? selectedSpot : s))
        );
        closeModal();
    };

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

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {spots.map((spot) => (
                            <div
                                key={spot.id}
                                className="rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden"
                            >
                                <div className="h-44 overflow-hidden">
                                    <img
                                        src={spot.image}
                                        alt={spot.name}
                                        className="w-full h-full object-cover hover:scale-105 transition"
                                    />
                                </div>

                                <div className="p-5 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-semibold text-lg text-gray-800">
                                            {spot.name}
                                        </h3>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => openEditModal(spot)}
                                                className="p-2 rounded-lg border hover:bg-orange-300 transition"
                                            >
                                                <Pencil size={18} className="text-orange-600" />
                                            </button>

                                            <button className="p-2 rounded-lg border hover:bg-red-500 transition">
                                                <Trash2 size={18} className="text-red-600 hover:text-white" />
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-sm text-orange-600 font-medium">
                                        {spot.category}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin size={16} className="text-orange-500" />
                                        {spot.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* EDIT MODAL */}
            {isModalOpen && selectedSpot && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
                    <div
                        className="w-full max-w-xl p-[2px] rounded-2xl
      bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400"
                    >
                        <div className="bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto">

                            {/* MODAL HEADER */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Edit Spot Details
                                </h2>
                                <button onClick={closeModal}>
                                    <X className="text-gray-500 hover:text-red-500" />
                                </button>
                            </div>

                            {/* FORM */}
                            <div className="space-y-4">

                                {/* SPOT NAME */}
                                <input
                                    name="name"
                                    value={selectedSpot.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                                    placeholder="Spot Name"
                                />

                                {/* CATEGORY */}
                                <select
                                    name="category"
                                    value={selectedSpot.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                                >
                                    <option>Cafe</option>
                                    <option>Restaurant</option>
                                    <option>Hotel</option>
                                    <option>Tourist Spot</option>
                                    <option>Hidden Spot</option>
                                </select>

                                {/* LOCATION */}
                                <input
                                    name="location"
                                    value={selectedSpot.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                                    placeholder="Location"
                                />

                                {/* DESCRIPTION */}
                                <textarea
                                    name="description"
                                    value={selectedSpot.description || ""}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 resize-none"
                                    placeholder="Spot description"
                                />

                                {/* BEST TIME */}
                                <input
                                    name="bestTime"
                                    value={selectedSpot.bestTime || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                                    placeholder="Best time to visit"
                                />

                                {/* STATUS */}
                                <select
                                    name="status"
                                    value={selectedSpot.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                                >
                                    <option>Approved</option>
                                    <option>Pending</option>
                                    <option>Rejected</option>
                                </select>

                                {/* IMAGE PREVIEW */}
                                {selectedSpot.image && (
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2">Current Image</p>
                                        <img
                                            src={selectedSpot.image}
                                            alt="spot"
                                            className="w-full h-40 object-cover rounded-lg border"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* ACTIONS */}
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    onClick={closeModal}
                                    className="px-5 py-2 border rounded-lg text-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}
