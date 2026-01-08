import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-[#faf7f2]">

      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ed] via-orange-100 to-[#fde68a]"></div>

      {/* 🗺️ Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:26px_26px] opacity-40"></div>

      {/* ☁️ Floating Shapes */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-orange-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-[26rem] h-[26rem] bg-orange-300/30 rounded-full blur-3xl"></div>

      {/* 🧊 Main Card */}
      <div className="relative z-10 max-w-5xl w-full mx-6 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.18)] grid md:grid-cols-2 overflow-hidden">

        {/* 🖼️ LEFT – IMAGE */}
        <div className="relative hidden md:block">
          <img
            src="https://shop.sesto.ir/wp-content/uploads/2022/10/funny-404-error-page-design.gif"
            alt="Page Not Found"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-10">
            <p className="text-gray-600 ms-8 text-xl font-semibold">
              Oops! Looks like you took a wrong turn 
            </p>
          </div>
        </div>

        {/* 🧭 RIGHT – CONTENT */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <span className="text-orange-500 font-semibold uppercase tracking-widest mb-2">
            404 Error
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Page Not Found
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you’re looking for doesn’t exist or has been moved.
            Let’s get you back on track and continue exploring amazing places.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition transform hover:-translate-y-0.5"
            >
              Go to Home
            </Link>

            <Link
              to="/explore"
              className="px-8 py-4 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-50 font-semibold transition"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* 🧩 Big 404 Text */}
      <h1 className="absolute bottom-8 right-10 text-[10rem] font-black text-orange-200/40 pointer-events-none select-none">
        404
      </h1>
    </div>
  );
}
