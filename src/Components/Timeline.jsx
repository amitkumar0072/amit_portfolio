import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "StockLens AI",
    subtitle: "Where Artificial Intelligence Meets Investing",
    desc: "StockLens AI is a AI powered stock analysis platform using MERN stack that allows investors and analyst to chat with an Intelligent Assistant for real time market insights.",
    tags: [
      "react.js", "express.js", "node.js", "REST api","gemini ai","fintech","middleware","reactHooks","vercel",
      "mongoDB", "mongoose", "css", "javascript", "figma"
    ],
    img: "/stocklens.png",
    side: "left",
    link: "https://stock-analyst-chat-gpt.vercel.app/",
  },
  {
    title: "Ravindra Bhawan website",
    subtitle: "IIT Roorkee",
    desc: "Developed a modern and responsive web platform for Ravindra Bhawan, one of the hostels at IIT Roorkee, using React.js. The website provides hostel residents and visitors with key information such as amenities, rules, notices, and contact details.",
    tags: [
       "html", "css", "javascript", "figma","tailwindCSS","UI/UX design","reactHooks","routing","github",
    ],
    img: "/RavindraBhawan.png",
    side: "right",
    link: "https://www.iitr.ac.in/ravindrabhawan/#Home",
  },
];

const Timeline = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate vertical line
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate horizontal connector lines
    gsap.utils.toArray(".connector-line").forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "center" },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="nextSection" className="w-full bg-[#0a0909] py-8 px-8 text-white">
      {/* Heading */}
      <div className="flex justify-center mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 border-b-[2px] border-cyan-500 inline-block pb-2 px-1">
          Latest Works
        </h2>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 top-[-64px] bottom-0 w-[2px] bg-cyan-400 transform -translate-x-1/2"
        ></div>

        {projects.map((proj, i) => (
          <div
            key={i}
            className={`mb-12 flex flex-col md:flex-row items-center md:justify-between relative ${
              proj.side === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* ==== IMAGE SECTION ==== */}
            <div className="md:w-6/12 flex justify-center z-20">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-6/12 flex justify-center relative group cursor-pointer"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className=" rounded-md drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] shadow-md w-[150%] max-w-md object-contain group-hover:scale-105 ease-in-out duration-200"
                />

                {/* Tooltip/Label */}
                <span
                  className="flex group-hover:-translate-y-16 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200
                             text-black bg-[#ffe578] absolute left-1/2 -translate-x-1/2 px-2 py-1 text-sm sm:text-base rounded w-max items-center gap-1
                             after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:bottom-[-6px]"
                >
                  {proj.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </span>
              </a>
            </div>

            {/* ==== CONNECTOR DOT + LINE ==== */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="relative flex items-center">
                <div className="w-4 h-4 rounded-full bg-[#0f0f0f] border-2 border-cyan-400 z-10"></div>

                {proj.side === "left" ? (
                  <div className="connector-line absolute right-full w-30 h-[2px] bg-cyan-400"></div>
                ) : (
                  <div className="connector-line absolute left-full w-30 h-[2px] bg-cyan-400"></div>
                )}
              </div>
            </div>

            {/* ==== TEXT SECTION ==== */}
            <div className="md:w-6/12 bg-[#0a0909] rounded-lg shadow-md px-6 z-20">
              <h3 className="text-xl font-semibold text-cyan-300">{proj.title}</h3>
              <p className="text-gray-400 mb-2 text-sm">({proj.subtitle})</p>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed">{proj.desc}</p>

              <div className="flex flex-wrap gap-1">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-full text-xs bg-[#0a0909] border border-gray-600 text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
