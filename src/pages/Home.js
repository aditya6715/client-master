import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
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
        backgroundRepeat: "no-repeat",
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
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-300"
          >
            Contact Us
          </Link>
        </div>
        
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
