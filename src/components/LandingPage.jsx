import React from "react";

function LandingPage() {
  return (
    <div className="px-4 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">

        {/* ================= TEXT SECTION ================= */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold md:font-extrabold animate-fade-slide">
            UNVEIL THE
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold md:font-extrabold bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 bg-clip-text text-transparent animate-fade-slide delay-200">
            UNSEEN CITY.
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Uncover the city beyond the obvious. From hidden cafes to local
            stories, every corner has a secret. Explore like you belong here.
          </p>
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div className="w-full md:w-[520px]">
          <div className="grid grid-cols-2 gap-4">

            {/* LEFT BIG IMAGE */}
            <div className="row-span-2 rounded-2xl overflow-hidden animate-float hover:scale-108 transition duration-500">
              <img
                src="/citynight.jpg"
                alt="City night"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TOP RIGHT */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] animate-float delay-200 hover:scale-108 transition duration-500">
              <img
                src="/natureview.jpg"
                alt="Nature view"
                className="w-full h-full object-cover"
              />
            </div>

            {/* MIDDLE RIGHT */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] animate-float delay-400 hover:scale-108 transition duration-500">
              <img
                src="/cafe.jpg"
                alt="Cafe"
                className="w-full h-full object-cover"
              />
            </div>

            

          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
