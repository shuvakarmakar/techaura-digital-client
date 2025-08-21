import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Empowering Businesses with <br />
                        <span className="text-yellow-300">TechAura Digital</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-100">
                        We specialize in Web Design & Development, Graphics Design, UI/UX Design
                        Digital Marketing, SEO, and Software Development.
                        Helping your business grow with modern digital solutions.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
                            Get Started
                        </button>
                        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;