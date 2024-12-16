import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Automative() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'light' ? 'bg-[#010038] text-white' : 'bg-white text-black'}`}>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/automativebanner.avif"
          alt="Automotive Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
            Automotive & Mobility Solutions
          </h1>
          <p className="text-gray-200 mt-4 text-lg sm:text-xl text-center max-w-2xl">
            Driving the future with advanced automotive technologies and mobility solutions.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 sm:px-16 py-12">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Stand Out in the Automotive Industry
            </h2>
            <p className="text-white dark:text-black mb-4">
              With so many options out there to purchase a vehicle, and with the growing popularity of online used car dealerships, it’s harder now than ever before to distinguish yourself from your competition. So how do you let customers know that you’re the best place to find not only the vehicle they want, but a team of people who are dedicated to providing top-of-the-line customer service? The answer is simple – Saturnx Digital Solutions!
            </p>
            <p className="text-white dark:text-black mb-4">
              We’ve constructed a team that is one part digital marketing wizards and one part automotive industry gurus to provide our clients with marketing services refined with insider knowledge. We have tier 1, 2, and 3 experience and understand how to help you drive more sales by either using our own tools or acting as an agency of record with your existing vendors. Making sure you’re always maintaining brand standards while getting you more customers is kind of our thing.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Automative;
