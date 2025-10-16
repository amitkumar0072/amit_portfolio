import React from "react";

const Aboutme = ({ onClose }) => {
  const techStack = [
    "javascript", "react.js", "redux", "node.js", "express.js", "mongoDB", "mongoose",
    "cloudinary", "ejs", "html", "css", "sass", "bootstrap", "tailwind", "git", "github",
    "aws", "terminal", "adobeXD", "figma"
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
      {/* Modal Container */}
      <div className="w-full max-w-5xl max-h-[90vh] bg-[#0f0f0f]/95 backdrop-blur-md rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 shadow-2xl relative overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        {/* Left Section */}
        <div className="flex-1 text-white order-2 md:order-1">
          <h2 className="text-lg sm:text-xl font-bold text-cyan-500 mb-3">ABOUT ME</h2>
          
          <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
            I help business owners and busy web developers to design & develop creative
            websites that fit their vision and attract visitors to stay forever. Here are
            some of the technologies and tools I use:
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#1e1e1e] text-gray-300 px-3 py-1 rounded-full text-[10px] sm:text-xs border border-gray-700 font-semibold"
              >
                #{tech}
              </span>
            ))}
          </div>

          {/* MERN Stack */}
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-500 mb-3">MERN STACK</h3>
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { src: "/mongodb.svg", label: "M", color: "text-green-500" },
              { src: "/express.svg", label: "E", color: "text-gray-300" },
              { src: "/react.svg", label: "R", color: "text-cyan-400" },
              { src: "/node.svg", label: "N", color: "text-green-500" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={item.src} alt={item.label} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <span className={`${item.color} font-bold mt-1`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden flex justify-center items-center shadow-[0_0_20px_rgba(66,49,60,0.6)]">
            <img
              src="/pic.jpg"
              alt="Developer Illustration"
              className="object-cover w-full h-full"
              style={{ objectPosition: '80% 140%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
