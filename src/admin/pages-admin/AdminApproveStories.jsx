import { CheckCircle, XCircle, User, Mail } from "lucide-react";

export default function AdminApproveStories() {
    // Dummy data – replace with API response
    const stories = [
        {
            id: 1,
            title: "Sunset at Varkala",
            description:
                "The sunset view from Varkala cliff was breathtaking. Calm waves, golden sky and peaceful vibes.",
            user: "Anu Thomas",
            email: "anu.thomas@gmail.com",
            spot: "Varkala Cliff",
            image: "/tourist.webp",
        },
        {
            id: 2,
            title: "Morning Coffee Bliss",
            description:
                "Cafe Aroma has the best cappuccino in town. Cozy ambience and friendly staff.",
            user: "Rahul S",
            email: "rahul.s@gmail.com",
            spot: "Cafe Aroma",
            image: "/cafe1.webp",
        },
    ];

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
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="p-[2px] rounded-2xl
              bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400
              shadow-xl"
                    >
                        <div className="bg-white rounded-2xl overflow-hidden">

                            <div className="grid md:grid-cols-3 gap-6">

                                {/* IMAGE */}
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-60 md:h-full object-cover py-3 ps-3 rounded-4xl"
                                />

                                {/* CONTENT */}
                                <div className="md:col-span-2 p-6 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {story.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 line-clamp-4">
                                            {story.description}
                                        </p>

                                        {/* USER DETAILS */}
                                        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-2">
                                            <span className="inline-flex items-center gap-2">
                                                <User size={16} className="text-orange-500" />
                                                {story.user}
                                            </span>

                                            <span className="inline-flex items-center gap-2">
                                                <Mail size={16} className="text-orange-500" />
                                                {story.email}
                                            </span>

                                            <span className="font-medium text-gray-600">
                                                Spot: {story.spot}
                                            </span>

                                        </div>
                                        {/* ACTION BUTTONS */}
                                        <div className="flex gap-4 mt-6">
                                            <button
                                                className="inline-flex items-center gap-2
                        px-5 py-2.5 rounded-lg text-green-500
                        hover:bg-green-200 transition"
                                            >
                                                <CheckCircle size={18} />
                                                Approve
                                            </button>

                                            <button
                                                className="inline-flex items-center gap-2
                        px-5 py-2.5 rounded-lg  text-red-500
                        hover:bg-red-200 transition"
                                            >
                                                <XCircle size={18} />
                                                Reject
                                            </button>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
