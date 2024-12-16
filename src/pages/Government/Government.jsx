import React,{useContext} from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Government() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return (
        <div className={`w-full h-auto bg-gray-50`}>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <img
                    src="/government.jpeg"
                    alt="Government"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
                    <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
                        Government & Non-Profit Education
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className={`px-6 sm:px-16 py-12 ${theme === 'light' ? 'bg-[#010038] text-white' : 'bg-white text-black'}`}>
                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
                    <div className="lg:w-full">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Driving the Focus to You
                        </h2>
                        <p className="text-white dark:text-black mb-4">
                            Have a big fundraising event coming up? Are you trying to increase
                            donations? It’s not enough to just hope that people are searching
                            for a nonprofit like yours—you need to be putting yourself out there,
                            and our team can help!
                        </p>
                        <p className="text-white dark:text-black">
                            Saturnx Digital Solutions can skyrocket your funding and bring awareness to your
                            cause by increasing your presence online and positioning you right in
                            front of your target audience. Our goal is to get you results by
                            building you the platforms where you can engage with potential donors,
                            grow your bottom line, and spread the word about what your nonprofit
                            is doing to help others.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Security Matters</h2>
                        <p className="text-white dark:text-black mb-4">
                            As a government organization, you don’t have room for error—and we
                            understand that. We consult with clients from cities, municipalities,
                            states, and more, providing our government clients with intelligent
                            and secure solutions they can rely on.
                        </p>
                        <p className="text-white dark:text-black">
                            From reconstructing your website from the ground up to ensure
                            security, to streamlining processes that allow you to smoothly
                            communicate with both your staff and the public, Saturnx Digital Solutions has
                            the resources to drive your organization out of the dark.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="/gvrmntSecurity.png"
                            alt="Government Security"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src="/teamwork.jpg"
                            alt="Teamwork"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">How Do We Do It?</h2>
                        <p className="text-white dark:text-black mb-4">
                            We’ve spent years developing a team that works directly with
                            government and nonprofit organizations. Because we have firsthand
                            experience, we can prevent, predict, and plan for issues that someone
                            in your industry might face.
                        </p>
                        <p className="text-white dark:text-black">
                            We take great pride in not only the quality of work that we produce,
                            but in the level of service we offer our clients. That’s one of the
                            many areas where we’ve set ourselves apart.
                        </p>
                        <p className="text-white dark:text-black">
                            If you’re ready to get advice from a team that specializes in your
                            industry, then get started with Saturnx Digital Solutions today!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
