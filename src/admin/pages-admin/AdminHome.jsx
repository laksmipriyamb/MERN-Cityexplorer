import { useState } from "react";
import {Users,MapPin,ClipboardCheck,MessageSquareText,BarChart3,ShieldCheck,LayoutDashboard,X,PlusCircle} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7fb] relative">

      {/* 👤 FLOATING PROFILE IMAGE */}
      {!openSidebar && (
        <div style={{ marginBottom: '-60px' }} className="pt-8 ps-5">
          <img
            src="https://static.thenounproject.com/png/435597-200.png"
            alt="Admin"
            onClick={() => setOpenSidebar(true)}
            className="w-12 h-12 rounded-full border-2 border-orange-500 cursor-pointer shadow-lg object-cover"/>
        </div>
      )}

      {/* 🌑 OVERLAY */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-20"
        />
      )}

      {/* 🔶 SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-30 min-h-screen w-64
        bg-gradient-to-b from-orange-500 to-orange-600 text-white px-6 py-8
        transform transition-transform duration-300
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* ❌ CLOSE */}
        <div className="flex justify-end mb-6">
          <X className="cursor-pointer" onClick={() => setOpenSidebar(false)} />
        </div>

        {/* 👤 ADMIN INFO */}
        <div className="flex items-center gap-4 mb-12">
          <img
            src="/admin.jpg"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-xs opacity-80">admin@spotscape.com</p>
          </div>
        </div>

        {/* 📌 LINKS */}
        <div className="space-y-5 text-sm">
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/20">
            <LayoutDashboard size={18} /> Dashboard
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 cursor-pointer">
            <PlusCircle size={18} /> <Link to={'/admin/addspot'}>Add New Spot</Link>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 cursor-pointer">
            <MapPin size={18} /> <Link to={'/admin/managespot'}>Manage Spots</Link>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 cursor-pointer">
            <ClipboardCheck size={18} /> <Link to={'/admin/approve/stories'}>Approve Stories</Link>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 cursor-pointer">
            <MessageSquareText size={18} /> <Link to={'/admin/feedbacks'}>Feedbacks</Link>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/20 cursor-pointer">
            <Users size={18} /> <Link to={'/admin/allusers'}>Users</Link>
          </div>
        </div>

        <p className="text-xs opacity-70 mt-20">Admin Panel © 2026</p>
      </div>

      {/* 🔷 MAIN CONTENT */}
      <div className="p-8 pt-2">

        {/* HEADER */}
        <div className="mb-10 ms-15">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500">
            Control content, monitor platform activity
          </p>
        </div>

        {/* 📊 STATS (DIV BASED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-white p-6 rounded-3xl shadow flex items-center gap-4">
            <div className="p-3 rounded-full bg-orange-100 text-orange-500">
              <Users />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow flex items-center gap-4">
            <div className="p-3 rounded-full bg-orange-100 text-orange-500">
              <MapPin />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Spots</p>
              <p className="text-2xl font-bold">312</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow flex items-center gap-4">
            <div className="p-3 rounded-full bg-orange-100 text-orange-500">
              <ShieldCheck />
            </div>
            <div>
              <p className="text-sm text-gray-500">Approved Stories</p>
              <p className="text-2xl font-bold">1,432</p>
            </div>
          </div>

          <div className="bg-orange-500 p-6 rounded-3xl shadow flex items-center gap-4 text-white">
            <div className="p-3 rounded-full bg-white/20">
              <ClipboardCheck />
            </div>
            <div>
              <p className="text-sm">Pending Stories</p>
              <p className="text-2xl font-bold">27</p>
            </div>
          </div>
        </div>

        {/* 📈 CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white rounded-3xl shadow p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-orange-500" />
              Platform Activity
            </h3>
            <div className="h-64 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-gray-400">
              Chart Area
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow p-6 flex flex-col items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                78%
              </div>
            </div>
            <h4 className="font-semibold">Story Approval Rate</h4>
            <p className="text-sm text-gray-500 text-center mt-2">
              Approved stories by admin
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
