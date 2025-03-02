import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import real from './real.png';
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";  // For smooth animations

const Home = () => {
  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState(["Luxury Villa", "Modern Home", "City Apartment", "Beach House", "Penthouse"]); 
  const [stats, setStats] = useState({ properties: 0, agents: 0, buyers: 0 });

  useEffect(() => {
    // Simulating fetching real-time stats
    setTimeout(() => {
      setStats({ properties: 250, agents: 45, buyers: 320 });
    }, 1500);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section
      className="bg-white h-screen w-screen flex justify-center items-center relative"
      style={{
        width: "100%",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury-house,real-estate')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="mr-auto place-self-center lg:col-span-7 text-white"
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            ProptEase
          </h1>
          <h3 className="text-xl font-bold" style={{ fontSize: "25px" }}>
            <TypeAnimation
              sequence={["Where innovation meets home", 1000, "Find your perfect property!", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="max-w-2xl mb-7 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            Find the perfect property with cutting-edge real estate solutions.
          </p>

          {/* Search Bar */}
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search properties..."
            className="px-4 py-2 w-80 text-black rounded-lg"
          />
          {search && (
            <ul className="bg-white text-black mt-2 rounded-lg p-2">
              {properties
                .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
                .map((item, index) => (
                  <li key={index} className="cursor-pointer hover:bg-gray-200 p-1 rounded">
                    {item}
                  </li>
                ))}
            </ul>
          )}

          {/* Buttons */}
          <div className="mt-4">
            <Link
              to="/view_buyer"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              View Database
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex gap-10 mt-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2 }}
              className="bg-gray-800 p-4 rounded-lg text-center"
            >
              <h2 className="text-3xl font-bold">{stats.properties}+</h2>
              <p className="text-gray-400">Properties Listed</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.4 }}
              className="bg-gray-800 p-4 rounded-lg text-center"
            >
              <h2 className="text-3xl font-bold">{stats.agents}+</h2>
              <p className="text-gray-400">Real Estate Agents</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.6 }}
              className="bg-gray-800 p-4 rounded-lg text-center"
            >
              <h2 className="text-3xl font-bold">{stats.buyers}+</h2>
              <p className="text-gray-400">Happy Buyers</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Carousel />
        </div>
      </div>

      {/* Explore More Button */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <button 
          className="bg-orange-500 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-orange-700"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Home;
