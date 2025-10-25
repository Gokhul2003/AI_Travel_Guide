import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react";

const MarqueImg = ({ img, alt }) => {
  return (
    <img
      src={img}
      alt={alt || "partner logo"}
      className="mx-10 h-16 object-contain filter grayscale hover:filter-none transition duration-300 ease-in-out cursor-pointer"
    />
  );
};

function Hero() {
  return (
    <div className="flex flex-col w-full pb-24 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="my-12 text-center px-6 md:px-24">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f56551] to-[#fca5a5]">
          Discover Your Next Adventure with AI
        </h1>
        <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-gray-700">
          Personalized Itineraries Tailored Just for You ✈️
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Your smart AI travel planner that curates destinations, activities,
          and stays based on your interests, duration, and budget — all in
          seconds.
        </p>

        <Link to="/create-trip">
          <Button className="mt-8 px-8 py-4 bg-[#f56551] hover:bg-[#e55345] text-white rounded-lg shadow-lg flex items-center justify-center mx-auto">
            Get Started <Sparkles className="ml-3 animate-pulse" />
          </Button>
        </Link>
      </div>

      {/* Hero Image & CTA */}
      <div className="relative mt-10 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto bg-gradient-to-tr from-orange-100 to-pink-100">
        <img
          src="/landing.png"
          alt="AI Travel"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute top-5 left-5 bg-white bg-opacity-70 backdrop-blur-sm rounded-md px-5 py-3 text-orange-700 font-semibold shadow-md">
          AI Trip Planner&copy;
        </div>
        <div className="hidden md:flex flex-col absolute bottom-6 right-6 bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-6 w-96 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Smart Travel Insights
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Instantly plan and visualize your trip with AI — from sightseeing to
            accommodations, all customized for your style and budget.
          </p>
          <Link to="/create-trip">
            <Button className="self-start bg-[#f56551] hover:bg-[#e55345] text-white px-6 py-3 rounded-md shadow-md flex items-center">
              Plan My Trip <Sparkles className="ml-2 animate-pulse" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Marquee Section --technnoglogies used*/}
      <div className="my-16 bg-white py-8 shadow-inner">
        <Marquee pauseOnHover speed={60} gradient={false}>
          <MarqueImg img="/firebase.png" alt="Firebase logo" />
          <MarqueImg img="/react.png" alt="React logo" />
          <MarqueImg img="/tailwindcss.png" alt="Tailwind CSS logo" />
          <MarqueImg img="/unsplash.jpg" alt="Unsplash logo" />
          <MarqueImg img="/TomTom.jpg" alt="TomTom logo" />
          <MarqueImg img="/unsplash.png" alt="Gemini logo" />
        </Marquee>
      </div>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-gray-50 mt-10 rounded-2xl shadow-inner">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Why Choose <span className="text-[#f56551]">AI Travel Guide?</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            We combine the power of AI with smart travel insights to give you
            the most personalized and effortless trip planning experience.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-12 mt-12">
            <div className="text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-5xl mb-2">🌍</p>
              <p className="text-xl font-bold text-orange-500">
                Smart Suggestions
              </p>
              <p className="mt-2 text-gray-500 max-w-[250px] mx-auto">
                Get AI-powered travel plans tailored to your interests, time,
                and budget.
              </p>
            </div>

            <div className="text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-5xl mb-2">🗺️</p>
              <p className="text-xl font-bold text-pink-500">
                Real-Time Map Integration
              </p>
              <p className="mt-2 text-gray-500 max-w-[250px] mx-auto">
                View routes, explore local attractions, and navigate seamlessly
                with TomTom-powered maps.
              </p>
            </div>

            <div className="text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-5xl mb-2">📸</p>
              <p className="text-xl font-bold text-yellow-500">
                AI Photo Recommendations
              </p>
              <p className="mt-2 text-gray-500 max-w-[250px] mx-auto">
                Get stunning Unsplash-sourced images of your destination —
                perfect for inspiration and planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
