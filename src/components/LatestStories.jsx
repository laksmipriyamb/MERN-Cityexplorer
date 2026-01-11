import { CirclePlus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllApprovedStoriesAPI } from "../server/allAPI";
import serverURL from "../server/serverURL";

function LatestStories() {

  const [stories, setStories] = useState(null);
  console.log(stories);

  useEffect(() => {
    fetchStories()
  }, [])

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  // swap function
  const swapStory = (key) => {
    setStories((prev) => ({
      ...prev,
      big: prev[key],
      [key]: prev.big,
    }));
  };

  const fetchStories = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const result = await getAllApprovedStoriesAPI(reqHeader)

      const data = result.data;

      if (data.length >= 4) {
        setStories({
          big: data[0],
          right1: data[1],
          right2: data[2],
          right3: data[3],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const timeAgo = (dateString) => {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60
    };

    for (let key in intervals) {
      const value = Math.floor(seconds / intervals[key]);
      if (value >= 1) {
        return `${value} ${key}${value > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
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
            Post Your Own Stories <CirclePlus className="md:ms-2 ms-1" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {/* BIG STORY */}
        <div className="md:col-span-2">
          <div className="rounded-3xl overflow-hidden mb-4">
            <img
              src={`${serverURL}/uploads/${stories?.big.uploadImage}`}
              className="w-full h-[380px] object-cover"
              alt="big story"
            />
          </div>

          <p className="text-orange-500 text-lg font-semibold mb-2">
            {stories?.big.spotname}
          </p>

          <h3 className="text-2xl font-bold mb-3">
            {stories?.big.title}
          </h3>
          <p className="text-gray-700 text-sm mb-2">{stories?.big.caption}</p>

          <div className="flex justify-start items-center">
            <div className="flex justify-start items-center">
              <img width={'30px'} style={{borderRadius:'50%'}} src={`${serverURL}/uploads/${stories?.big.publisher?.picture}`} alt="profile" />
              <p className="text-gray-700 text-sm ms-2 me-5">{stories?.big.publisher?.username}</p>
            </div>
            <div><p className="text-gray-500 text-sm">{timeAgo(stories?.big.createdAt)}</p></div>
            </div>
        </div>

        {/* RIGHT STORIES */}
        <div className="space-y-6">

          {/* STORY 1 */}
          <div
            onClick={() => swapStory("right1")}
            className="flex gap-4 cursor-pointer group"
          >
            <img
              src={`${serverURL}/uploads/${stories?.right1.uploadImage}`}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div>
              <p className="text-orange-500 text-xs font-semibold">
                {stories?.right1.spotname}
              </p>
              <h4 className="font-semibold group-hover:underline">
                {stories?.right1.title}
              </h4>
              <p className="text-gray-700 text-sm mb-2">{stories?.right1.caption}</p>

              <p className="text-gray-500 text-xs mt-1">
                {timeAgo(stories?.right1.createdAt)}
              </p>
            </div>
          </div>

          {/* STORY 2 */}
          <div
            onClick={() => swapStory("right2")}
            className="flex gap-4 cursor-pointer group"
          >
            <img
              src={`${serverURL}/uploads/${stories?.right2.uploadImage}`}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div>
              <p className="text-orange-500 text-xs font-semibold">
                {stories?.right2.spotname}
              </p>
              <h4 className="font-semibold group-hover:underline">
                {stories?.right2.title}
              </h4>
              <p className="text-gray-700 text-sm mb-2">{stories?.right2.caption}</p>

              <p className="text-gray-500 text-xs mt-1">
                {timeAgo(stories?.right2.createdAt)}
              </p>
            </div>
          </div>

          {/* STORY 3 */}
          <div
            onClick={() => swapStory("right3")}
            className="flex gap-4 cursor-pointer group"
          >
            <img
              src={`${serverURL}/uploads/${stories?.right3.uploadImage}`}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div>
              <p className="text-orange-500 text-xs font-semibold">
                {stories?.right3.spotname}
              </p>
              <h4 className="font-semibold group-hover:underline">
                {stories?.right3.title}
              </h4>
              <p className="text-gray-700 text-sm mb-2">{stories?.right3.caption}</p>

              <p className="text-gray-500 text-xs mt-1">
                {timeAgo(stories?.right3.createdAt)}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LatestStories;
