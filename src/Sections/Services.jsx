const Services = () => {
    const services = [
        {
            title: "Web Design & Development",
            description: "Responsive websites with modern UI/UX that boost your online presence.",
            icon: "🌐",
        },
        {
            title: "Graphics Design",
            description: "Creative visuals, branding, and marketing materials that leave a mark.",
            icon: "🎨",
        },
        {
            title: "UI/UX Design",
            description: "User-centered designs that provide seamless digital experiences.",
            icon: "🖌️",
        },
        {
            title: "Digital Marketing",
            description: "Effective campaigns to reach your audience and grow your business.",
            icon: "📈",
        },
        {
            title: "SEO Optimization",
            description: "Rank higher on search engines and attract more organic traffic.",
            icon: "🔍",
        },
        {
            title: "Software Development",
            description: "Custom software solutions to automate and scale your business.",
            icon: "💻",
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Services
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    We offer a complete range of digital solutions to help your business thrive.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="mt-2 text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
