import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import real from './real.png';
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <section
      className="h-screen w-screen flex justify-center items-center"
      style={{
        width: "100%",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury-house,real-estate')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-black bg-opacity-50 rounded-lg">
        <div className="mr-auto place-self-center lg:col-span-7 text-white p-6 rounded-lg">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            ProptEase
          </h1>
          <h3 className="text-xl font-bold" style={{ fontSize: "25px" }}>
            <TypeAnimation
              sequence={["Where innovation meets home", 1000, " Where innovation meets home", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="max-w-2xl mb-7 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            Discover the best properties in town. Find your dream home with ProptEase.
          </p>
          <Link
            to="/view_buyer"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300"
          >
            View Database
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-300"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Right Section - Carousel and New Features */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col items-center">
          <Carousel />
          
          {/* Featured Properties Section */}
          <div className="mt-6 text-center text-white">
            <h2 className="text-2xl font-semibold">Featured Properties</h2>
            <p className="text-gray-300">Check out our latest listings</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="https://source.unsplash.com/200x150/?modern-house" alt="Property 1" className="rounded-lg shadow-lg"/>
            <img src="https://source.unsplash.com/200x150/?apartment" alt="Property 2" className="rounded-lg shadow-lg"/>
          </div>
          
          {/* Special Get Started Button */}
          <button
            onClick={() => window.location.href = "/view_property"}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
