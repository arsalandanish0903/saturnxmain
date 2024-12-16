import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Ecommerce() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#010038] text-white' : 'bg-white text-black'} transition-colors duration-500`}>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white px-6 bg-gray-800">
        <img 
          src="/shoppingBanner.jpeg" 
          alt="E-commerce Hero" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">Empowering Your Online Store</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in delay-200">
            Delivering scalable, affordable, and feature-rich e-commerce solutions tailored to meet your business needs.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 sm:px-16 py-12">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="w-full lg:w-1/2 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Services</h2>
            <p className="mb-4">
              At Saturnx Digital Solutions, we craft high-quality e-commerce platforms that are easy to use, visually appealing, and optimized for sales.
            </p>
            <p className="mb-4">
              We specialize in scalable solutions tailored for startups and established businesses, offering secure, feature-rich stores powered by the latest technology.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img 
              src="/whychooseecommerce.jpg" 
              alt="Our Services" 
              className="w-full h-64 object-cover bg-center rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Key Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            <li className="p-4 bg-indigo-100 text-indigo-800 rounded-lg shadow-md">
              <span className="font-semibold">Mobile-First Designs</span> for seamless shopping experiences.
            </li>
            <li className="p-4 bg-indigo-100 text-indigo-800 rounded-lg shadow-md">
              <span className="font-semibold">Advanced Security Measures</span> to protect your data and customer information.
            </li>
            <li className="p-4 bg-indigo-100 text-indigo-800 rounded-lg shadow-md">
              <span className="font-semibold">Integrated Payment Gateways</span> for easy and secure transactions.
            </li>
            <li className="p-4 bg-indigo-100 text-indigo-800 rounded-lg shadow-md">
              <span className="font-semibold">Real-Time Analytics</span> to monitor and optimize your store’s performance.
            </li>
            <li className="p-4 bg-indigo-100 text-indigo-800 rounded-lg shadow-md">
              <span className="font-semibold">SEO-Friendly Platforms</span> to help your store rank higher in search results.
            </li>
            <li className="p-4 bg-indigo-100 text-indigo-800 rounded-lg shadow-md">
              <span className="font-semibold">Custom Plugins and Integrations</span> for a personalized shopping experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
