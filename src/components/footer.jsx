"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-12 lg:grid-cols-4 gap-8 px-6 md:px-20 py-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold mb-4">NERS Ambulance Service</h2>
          <p className="text-gray-400">Your Safety, Our Mission!</p>
          <div className="mt-6 space-y-3">
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <FaEnvelope className="text-green-500" />
              <span>info@nersambulance.com</span>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <FaPhone className="text-green-500" />
              <span>+91 8252167751</span>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <FaMapMarkerAlt className="text-green-500" />
              <span>Block A, 5th Floor, Mourya Lok, Patna</span>
            </div>
          </div>
        </div>
        
        {/* Middle Section - Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold mb-4">NERS Ambulance</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Emergency Response</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>
        
        {/* Our Services Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li>Ambulance Booking</li>
            <li>Emergency Transport</li>
            <li>Patient Tracking</li>
            <li>Medical Assistance</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        
        {/* Right Section - Join Form */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold mb-4">Stay Updated</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

            
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-green-700 py-3 mt-8 px-6 md:px-20 text-center md:text-left">
        <p className="text-white font-semibold mb-4 md:mb-0">
          Developed By AKV Developer
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <FaInstagram className="text-2xl bg-gradient-to-r from-pink-400 to-pink-700 hover:text-gray-300 transition" />
          <FaLinkedin className="text-2xl bg-gradient-to-r from-indigo-400 to-blue-400 hover:text-gray-300 transition" />
          <FaYoutube className="text-2xl bg-gradient-to-r from-rose-600 to-rose-600 hover:text-gray-300 transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
