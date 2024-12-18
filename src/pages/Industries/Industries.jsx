import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AiFillBank } from "react-icons/ai";
import { PiHospitalLight } from "react-icons/pi";
import { MdConstruction } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { RiGovernmentFill } from "react-icons/ri";

import "aos/dist/aos.css";
import AOS from "aos";

function Industries() {
    const homePageCards = [
        { icon: <RiGovernmentFill />, text: "Government, Non-Profit, & Education", path: "/government-&-non-profit" },
        { icon: <PiHospitalLight />, text: "Healthcare & Well Being", path: "/healthcare-&-well-being" },
        { icon: <MdConstruction />, text: "Constructions & Infrastructure", path: "/constructions-&-infrastructure" },
        { icon: <AiFillBank />, text: "Financial & Banking Solutions", path: "/financial-&-banking-solutions" },
        { icon: <FaCarAlt />, text: "Automotive & Mobility Solutions", path: "/automotive-&-mobility-solutions" },
        { icon: <CiShop />, text: "Ecommerce Soultions", path: "/ecommerce" },
        // { icon: <MdCastForEducation />, text: "Edutech", path: "/edutech" },
        // { icon: <IoIosPaper />, text: "Insurance", path: "/insurance" },
    ];

    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/industries.webp')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-16 z-20">
                {/* Heading */}
                <h1
                    className="text-xl sm:text-2xl font-bold mb-4 mt-48"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    Explore Our Industries
                </h1>

                {/* Cards */}
                <div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    {homePageCards.map(({ icon, text, path }, index) => (
                        <Link to={path} key={index} className="w-full">
                            <div
                                className="group relative flex items-center flex-col px-2 py-2 bg-[#010038] dark:bg-white dark:text-black text-white rounded-lg shadow-md animate-infinite-bounce transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#010038] hover:to-[#F59E0D] dark:hover:from-white dark:hover:to-[#F59E0D]"
                                style={{ width: '150px', height: '150px' }} // Fixed dimensions for uniformity
                            >
                                <span className="text-3xl sm:text-5xl mb-2">{icon}</span>
                                <p className="text-sm sm:text-base font-medium text-center">{text}</p>
                                <div className="absolute inset-0 z-[-3] rounded-lg bg-gradient-to-r from-[#F59E0D] to-black opacity-0 group-hover:opacity-100 group-hover:scale-95 transition-all duration-500"></div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Industries;
