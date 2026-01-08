import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-orange-500 py-5">
      {/* WHITE CARD */}
      <div className="max-w-9xl mx-auto px-6 md:px-16">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] p-10 md:p-8">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-10 h-10 animate-float hover:rotate-180 transition-transform duration-500 cursor-pointer"
                />
                <h3 className="font-bold text-xl text-black tracking-wide">
                  SPOT<span className="text-orange-500">SCAPE</span>
                </h3>
              </div>

              <p className="text-gray-500 text-sm mb-6 max-w-xs">
                Curating the best travel experiences for modern explorers.
              </p>

              <div className="flex gap-4 text-orange-500">
                <Instagram className="hover:text-black cursor-pointer" size={18} />
                <Twitter className="hover:text-black cursor-pointer" size={18} />
                <Facebook className="hover:text-black cursor-pointer" size={18} />
                <Linkedin className="hover:text-black cursor-pointer" size={18} />
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm font-bold text-orange-500 mb-5 tracking-wider uppercase">
                Contact
              </h4>

              <ul className="space-y-4 text-sm text-black">
                <li className="flex items-center gap-3 hover:text-orange-500 cursor-pointer">
                  <FaPhone />
                  +91 83765***96
                </li>
                <li className="flex items-center gap-3 hover:text-orange-500 cursor-pointer">
                  <MdEmail />
                  spotscape@gmail.com
                </li>
              </ul>
            </div>

            {/* SPOT CATEGORY */}
            <div>
              <h4 className="text-sm font-bold text-orange-500 mb-5 tracking-wider uppercase">
                Spot Category
              </h4>

              <ul className="space-y-3 text-sm text-black">
                <li className="hover:text-orange-500 cursor-pointer">Cafe</li>
                <li className="hover:text-orange-500 cursor-pointer">Hotels</li>
                <li className="hover:text-orange-500 cursor-pointer">Hidden Spots</li>
                <li className="hover:text-orange-500 cursor-pointer">Restaurants</li>
                <li className="hover:text-orange-500 cursor-pointer">Tourist Spots</li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-sm font-bold text-orange-500 mb-5 tracking-wider uppercase">
                Support
              </h4>

              <ul className="space-y-3 text-sm text-black">
                <li className="hover:text-orange-500 cursor-pointer">Help Center</li>
                <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
                <li className="hover:text-orange-500 cursor-pointer">Services</li>
              </ul>
            </div>

          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t mt-12 pt-6 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Spotscape. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
