import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Construction() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'light' ? 'bg-[#010038] text-white' : 'bg-white text-black'}`}>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/constructions.webp"
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
            Construction & Infrastructure Solutions
          </h1>
          <p className="text-gray-200 mt-4 text-lg sm:text-xl text-center max-w-2xl">
            Building the future with innovative and sustainable construction technologies.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 sm:px-16 py-12">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Transforming Construction with Technology
            </h2>
            <p className="text-white dark:text-black mb-4">
              At Saturnx Digital Solutions, we deliver cutting-edge solutions for construction and infrastructure. Our advanced tools help streamline project management, enhance efficiency, and drive sustainability in construction projects.
            </p>
            <p className="text-white dark:text-black mb-4">
              From 3D modeling software to smart site management systems, we empower construction professionals to achieve excellence in every project.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Enhancing Project Efficiency
            </h2>
            <p className="text-white dark:text-black mb-4">
              Our project management tools ensure timely delivery and budget adherence. Track progress, manage resources, and collaborate seamlessly across teams with our integrated platforms.
            </p>
            <p className="text-white dark:text-black mb-4">
              Experience hassle-free project execution with data-driven insights and real-time monitoring capabilities.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/constructions2.webp"
              alt="Project Efficiency"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="/Cyber-Security-Awareness.webp"
              alt="Safety Solutions"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Prioritizing Safety on Site
            </h2>
            <p className="text-white dark:text-black mb-4">
              Safety is our top priority. Our solutions include real-time hazard detection, compliance tracking, and workforce training tools to ensure a secure work environment for all.
            </p>
            <p className="text-white dark:text-black mb-4">
              Reduce risks and maintain safety standards with our innovative technologies.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mt-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Sustainable Construction Practices
            </h2>
            <p className="text-white dark:text-black mb-4">
              Embrace green construction with eco-friendly solutions. From material optimization to energy-efficient designs, we help you reduce environmental impact while maximizing efficiency.
            </p>
            <p className="text-white dark:text-black mb-4">
              Let's build a sustainable future together with innovative technologies.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/Sustainable-Construction-Practices-Building-a-Greener-Future-1600x1066.png" 
              alt="Sustainable Construction"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Construction;
