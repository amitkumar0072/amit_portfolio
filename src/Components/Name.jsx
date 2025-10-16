import React, { useState } from 'react';
import Aboutme from './Aboutme';

const Name = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <div className="relative flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 px-4 sm:px-8 md:ml-40 mt-16 md:mt-16">
        {/* Text Section */}
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold font-['Spartan'] text-white leading-tight">
          Amit Kumar
        </h1>

        <p className="text-sm sm:text-base italic text-gray-300 font-['Merriweather']">
          MERN Stack Developer
        </p>

        {/* Button */}
        <button
          onClick={() => setShowAbout(true)}
          className="relative z-10 text-sm sm:text-base inline-flex items-center px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-blue-800 to-cyan-600 text-white font-semibold rounded-md shadow-md hover:scale-105 transform transition duration-300 group"
        >
          About Me
          <span className="absolute right-[-14px] text-3xl z-10 bottom-0 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* SVG Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className="w-[250px] sm:w-[300px] md:w-[350px] h-auto opacity-40 md:opacity-50 translate-x-0 md:translate-x-[-75px] translate-y-[10px]"
            viewBox="0 0 406 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
              stroke="#3675eb"
              strokeOpacity="1"
              strokeWidth="12"
            />
            <path
              d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
              stroke="url(#paint0_linear)"
              strokeWidth="12"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="205.549"
                y1="20.0169"
                x2="204.338"
                y2="342.461"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1595B6" />
                <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showAbout && <Aboutme onClose={() => setShowAbout(false)} />}
    </>
  );
};

export default Name;
