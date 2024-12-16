import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function FinancialBanking() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'light' ? 'bg-[#010038] text-white' : 'bg-white text-black'}`}>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/financial.webp" 
          alt="Financial Banking Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
            Financial & Banking Solutions
          </h1>
          <p className="text-gray-200 mt-4 text-lg sm:text-xl text-center max-w-2xl">
            Revolutionizing the banking experience with secure and efficient financial technologies.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 sm:px-16 py-12">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Transforming Financial Services with Innovation
            </h2>
            <p className="text-white dark:text-black mb-4">
              At Saturnx Digital Solutions, we empower the financial sector with next-generation tools to enhance customer experiences, improve operational efficiency, and ensure regulatory compliance.
            </p>
            <p className="text-white dark:text-black mb-4">
              Our solutions range from digital banking platforms to AI-driven insights for smart financial decision-making.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Enhancing Transaction Efficiency
            </h2>
            <p className="text-white dark:text-black mb-4">
              Our payment processing systems ensure secure and rapid transactions. With real-time analytics and fraud detection, we make banking safer and smarter.
            </p>
            <p className="text-white dark:text-black mb-4">
              Simplify financial operations with our cutting-edge solutions tailored for the modern banking industry.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/enhancefinance.jpg"
              alt="Transaction Efficiency"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="/advanceFinance.png"
              alt="Cybersecurity in Banking"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Advanced Cybersecurity Measures
            </h2>
            <p className="text-white dark:text-black mb-4">
              In an era of digital banking, security is paramount. Our cybersecurity tools offer comprehensive protection against data breaches and cyber threats.
            </p>
            <p className="text-white dark:text-black mb-4">
              Safeguard customer information and build trust with robust security protocols.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mt-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Personalized Banking Experiences
            </h2>
            <p className="text-white dark:text-black mb-4">
              Leverage data analytics and AI to offer personalized services to your customers. From tailored financial advice to customized loan options, we bring innovation to customer service.
            </p>
            <p className="text-white dark:text-black mb-4">
              Redefine the banking experience with customer-centric solutions.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/hyper-personalization-banking-1.jpg"
              alt="Personalized Banking"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialBanking;
