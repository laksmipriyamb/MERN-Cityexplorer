import { CirclePlus, Plus } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LatestStories() {

  const [stories, setStories] = useState({
    big: {
      image: "/foods.jpg",
      category: "FOOD AND DRINK",
      title:
        "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
      date: "Aug 12, 2024 • 4 min read",
    },

    right1: {
      image: "/shopping.jpg",
      category: "SHOPPING",
      title: "10 South London Markets You'll Love",
      date: "Aug 15, 2024 • 5 min read",
    },

    right2: {
      image: "/hotels.jpg",
      category: "HOTELS",
      title: "10 incredible hotels around the world",
      date: "Aug 15, 2024 • 5 min read",
    },

    right3: {
      image: "/travel.jpg",
      category: "TRAVEL BUDGET",
      title: "Visiting Chicago on a Budget",
      date: "Aug 15, 2024 • 5 min read",
    },
  });

  // ===== SWAP FUNCTION =====
  const swapStory = (key) => {
    setStories((prev) => ({
      ...prev,
      big: prev[key],
      [key]: prev.big,
    }));
  };

  return (
    <section className="px-6 md:px-16 py-12 bg-[#faf7f2]">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold">Latest Stories</h2>
        <div className="flex justify-between gap-2 items-center">
          <Link to={'/allstories'} className="border px-3 py-2 border-orange-500 text-orange-500 font-bold text-sm hover:bg-orange-500 hover:text-white transition">
            See More Stories
          </Link>
          <Link to={'/addstory'} className="border flex px-3 py-2 hover:border-orange-500 text-white bg-orange-500 font-bold text-sm hover:bg-white hover:text-orange-500 transition">
            Post Your Own Stories <CirclePlus className="md:ms-2 ms-1"/>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {/* BIG STORY */}
        <div className="md:col-span-2">
          <div className="rounded-3xl overflow-hidden mb-4">
            <img
              src={stories.big.image}
              className="w-full h-[380px] object-cover"
              alt="big story"
            />
          </div>

          <p className="text-orange-500 text-xs font-semibold mb-2">
            {stories.big.category}
          </p>

          <h3 className="text-2xl font-bold mb-3">
            {stories.big.title}
          </h3>

          <p className="text-gray-500 text-sm">{stories.big.date}</p>
        </div>

        {/* RIGHT STORIES */}
        <div className="space-y-6">

          {/* STORY 1 */}
          <div
            onClick={() => swapStory("right1")}
            className="flex gap-4 cursor-pointer group"
          >
            <img
              src={stories.right1.image}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div>
              <p className="text-orange-500 text-xs font-semibold">
                {stories.right1.category}
              </p>
              <h4 className="font-semibold group-hover:underline">
                {stories.right1.title}
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                {stories.right1.date}
              </p>
            </div>
          </div>

          {/* STORY 2 */}
          <div
            onClick={() => swapStory("right2")}
            className="flex gap-4 cursor-pointer group"
          >
            <img
              src={stories.right2.image}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div>
              <p className="text-orange-500 text-xs font-semibold">
                {stories.right2.category}
              </p>
              <h4 className="font-semibold group-hover:underline">
                {stories.right2.title}
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                {stories.right2.date}
              </p>
            </div>
          </div>

          {/* STORY 3 */}
          <div
            onClick={() => swapStory("right3")}
            className="flex gap-4 cursor-pointer group"
          >
            <img
              src={stories.right3.image}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div>
              <p className="text-orange-500 text-xs font-semibold">
                {stories.right3.category}
              </p>
              <h4 className="font-semibold group-hover:underline">
                {stories.right3.title}
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                {stories.right3.date}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LatestStories;
