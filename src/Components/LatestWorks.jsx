import React from 'react'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


const LatestWorks = () => {
   const handleScroll = () => {
    gsap.to(window, {
      duration: .8, // slow scroll duration
      scrollTo: "#nextSection", // target section id
      ease: "power2.inOut" // smooth easing
    });
  };
  return (
    <div
      onClick={handleScroll}
      className="absolute mt-14 left-[45%] top-[11.5%] inline-flex flex-col items-center cursor-pointer"
    >
      {/* Button */}
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold rounded-lg shadow-sm hover:scale-105 transform transition duration-300 group">
        <h3 className="text-sm">Latest Works</h3>
      </div>

      {/* Arrow Below */}
      <span className="mt-1 text-4xl font-extrabold text-blue-500 animate-bounce">
        ↓
      </span>
    </div>
  )
}

export default LatestWorks