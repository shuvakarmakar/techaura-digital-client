import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">TechAura Digital</h3>
                    <p className="text-gray-300">
                        Your trusted digital partner for Web Design, Development, Digital Marketing, SEO, and Software Solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="text-gray-300 space-y-2">
                        <li><a href="#hero" className="hover:text-blue-500 transition">Home</a></li>
                        <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
                        <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
                        <li><a href="about-us" className="hover:text-blue-500 transition">About</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <p className="text-gray-300 flex items-center gap-2">
                        <FaEnvelope className="text-blue-400" /> contact@techauradigital.com
                    </p>
                    <p className="text-gray-300 flex items-center gap-2">
                        <FaPhoneAlt className="text-green-400" /> +8801611-410129
                    </p>
                    <p className="text-gray-300 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-400" /> 3rd Floor, Road-1, Sector-9, Uttara, Dhaka 1230
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/TechAuraDigitalBD/" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition text-white">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/company/techaura-digital/" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition text-white">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-400">
                &copy; 2024 TechAura Digital. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
