import { X } from "lucide-react";

export default function AboutUs({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/50 ">
      {/* MODAL */}
      <div className="relative w-[90%] max-w-2xl bg-black/70 rounded-2xl shadow-xl p-6 md:p-8 animate-fadeIn">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          About <span className="text-orange-500">SPOTSCAPE</span>
        </h2>

        {/* CONTENT */}
        <p className="text-gray-200 leading-relaxed mb-4">
          <strong>SPOTSCAPE</strong> is a travel-inspired platform where people
          explore cafés, restaurants, tourist spots, and hidden gems shared by
          real explorers.
        </p>
        <div className="flex my-4 justify-content-center items-center">
          <img width={'200px'} src="/natureview.jpg" alt="image" />
          <img  width={'200px'} src="/oceanviewres.jpg" alt="image" />
          <img  width={'200px'} src="/resturant1.webp" alt="image" />
        </div>

        <p className="text-gray-200 leading-relaxed mb-4">
          Users can discover destinations, share travel stories, like posts,
          and save spots — creating a community-driven travel experience.
        </p>

        <p className="text-gray-200 leading-relaxed">
          Our goal is to make exploring cities more personal, authentic, and
          inspiring — one story and one spot at a time.
        </p>

        {/* FOOTER */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
