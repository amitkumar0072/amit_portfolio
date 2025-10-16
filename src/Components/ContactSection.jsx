import React from "react";

const ContactSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4  pb-12 bg-[#0a0909]">
     <div className="flex justify-center">
  <h2
    className="text-3xl font-bold text-cyan-400 border-b-[2px] border-cyan-500 inline-block pb-2 px-1"
  >
    Let's Connect
  </h2>
</div>


      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="w-full pr-2">
          <img src="/contact-me.svg" alt="phone" />
        </div>
        <form className="w-full" name="contactUS" netlify>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-amber-50"
          >
            Name
          </label>
          <div className="relative mb-4">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <svg
                className="w-4 h-4 text-amber-50 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-[#0a0909] border-1 shadow-[0_4px_10px_rgba(6,182,212,0.7) outline-none border-gray-600 text-amber-50 text-sm rounded-sm focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2  "
              placeholder="Enter your name"
            />
          </div>

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-amber-50 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative mb-4">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <svg
                className="w-4 h-4 text-amber-50 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-[#0a0909] border-1 outline-none border-gray-600 text-amber-50 text-sm rounded-sm focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:placeholder-gray-300"
              placeholder="Email"
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-amber-50 dark:text-white"
          >
            Message
          </label>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              rows="8"
              className="bg-[#0a0909] border-1 outline-none border-gray-600 text-amber-50 text-sm rounded-sm focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 placeholder-gray-300 "
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-cyan-500 hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
