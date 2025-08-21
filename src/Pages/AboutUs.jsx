import CEO from '../../src/assets/Team/Shanjit Saha.jpg';
import Shuva from '../../src/assets/Team/Shuva Karmakar.jpg';
import Rashik from '../../src/assets/Team/S M Abdul Rashik.jpeg';
import Faruk from '../../src/assets/Team/MD Omar Faruk.png';
import Abir from '../../src/assets/Team/Abir.jpg';


const AboutUs = () => {
    return (
        <section className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-20 pt-32">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                    About TechAura Digital
                </h1>

                {/* Subheading */}
                <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-lg md:text-xl">
                    TechAura Digital is a professional digital agency committed to delivering
                    innovative solutions in Web Design & Development, UI/UX Design, Graphics Design,
                    SEO, Digital Marketing, and Software Development. We empower businesses to thrive
                    in the digital world with creativity, technology, and strategy.
                </p>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Our Mission</h2>
                        <p className="text-gray-300 text-lg text-justify">
                            To deliver high-quality digital solutions that help businesses grow,
                            enhance online presence, and achieve measurable results in a competitive market.
                        </p>
                    </div>
                    <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Our Vision</h2>
                        <p className="text-gray-300 text-lg text-justify">
                            To become a leading digital agency recognized for creativity, innovation,
                            and exceptional client service worldwide.
                        </p>
                    </div>
                </div>


                {/* Team Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 md:px-0">
                        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <img
                                src={CEO}
                                alt="Shanjit Saha"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold">Shanjit Saha</h3>
                            <p className="text-gray-400">CEO</p>
                        </div>
                        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <img
                                src={Shuva}
                                alt="Shuva Karmakar"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold">Shuva Karmakar</h3>
                            <p className="text-gray-400">Frontend Developer</p>
                        </div>

                        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <img
                                src={Faruk}
                                alt="Md Omar Faruk"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold">Md Omar Faruk</h3>
                            <p className="text-gray-400">Backend Developer</p>
                        </div>

                        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <img
                                src={Rashik}
                                alt="S M Abdul Rashik"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold">S M Abdul Rashik</h3>
                            <p className="text-gray-400">UI/UX Designer</p>
                        </div>
                        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <img
                                src={Abir}
                                alt="Abir"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold">Abir</h3>
                            <p className="text-gray-400">Digital Marketing & SEO</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
                    <p className="text-gray-300 mb-6">
                        Contact us today to discuss your project and discover how TechAura Digital can help your business grow online.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
