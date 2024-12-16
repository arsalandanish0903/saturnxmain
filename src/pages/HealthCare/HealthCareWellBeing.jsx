import React,{useContext} from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function HealthCareWellBeing() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return (
        <div className={` ${theme === 'light' ? 'bg-[#010038] text-white' : 'bg-white text-black'}`}>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <img
                    src="/Healthcare-BGV-scaled.jpg"
                    alt="Healthcare Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
                    <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
                        Healthcare & Well-Being Solutions
                    </h1>
                    <p className="text-gray-200 mt-4 text-lg sm:text-xl text-center max-w-2xl">
                        Revolutionizing the healthcare industry through innovative software solutions.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 sm:px-16 py-12">
                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                    <div className="w-full">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Empowering Healthcare with Technology
                        </h2>
                        <p className="text-white dark:text-black mb-4">
                            At Saturnx Digital Solutions, we specialize in delivering cutting-edge software solutions tailored to the healthcare and well-being industry. Our team leverages technology to streamline operations, improve patient outcomes, and enhance overall efficiency in healthcare systems.
                        </p>
                        <p className="text-white dark:text-black mb-4">
                            From telemedicine platforms to hospital management systems, we empower healthcare providers with tools to offer accessible, efficient, and personalized care.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Enhancing Patient-Centric Care
                        </h2>
                        <p className="text-white dark:text-black mb-4">
                            Our patient engagement tools—ranging from mobile apps to patient portals—enable seamless communication between patients and providers. Empower your patients with access to their health data, appointment scheduling, and direct communication with care teams.
                        </p>
                        <p className="text-white dark:text-black mb-4">
                            Our solutions aim to make healthcare more accessible and transparent, ensuring that patients feel supported and informed at every step.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="/wellbeingcommunity.png"
                            alt="Community Well-Being"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src="/wellbeingsecurtiy.webp"
                            alt="Patient Care"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Securing Healthcare Data
                        </h2>
                        <p className="text-white dark:text-black mb-4">
                            In an industry where data security is paramount, we build solutions with advanced encryption and compliance standards like HIPAA. Protecting sensitive health data is our priority, ensuring trust and confidentiality in every solution we provide.
                        </p>
                        <p className="text-white dark:text-black mb-4">
                            From secure EHR systems to protected telemedicine platforms, our solutions are designed to mitigate risks and enhance patient safety.
                        </p>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mt-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Driving Innovation in Wellness
                        </h2>
                        <p className="text-white dark:text-black mb-4">
                            Beyond clinical care, we create wellness apps that help individuals track fitness, monitor mental health, and maintain a balanced lifestyle. By integrating with wearable devices, our solutions provide users with actionable insights into their well-being.
                        </p>
                        <p className="text-white dark:text-black mb-4">
                            Let us help you revolutionize healthcare and wellness with smart, scalable technology.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="/Drive-innovation-in-business-operations-with-these-five-digital-solutions.jpg"
                            alt="Innovation"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthCareWellBeing;
