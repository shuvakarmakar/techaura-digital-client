const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Elevate Your Business?
                </h2>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Let TechAura Digital help you achieve your digital goals with our web development, digital marketing, and design services.
                </p>
                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <a
                        href="#contact"
                        className="bg-white text-[#0f172a] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                    <a
                        href="#services"
                        className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#0f172a] transition"
                    >
                        Our Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
