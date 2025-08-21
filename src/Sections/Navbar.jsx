import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom"; // Import React Router Link
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-indigo-700">
            TechAura <span className="text-gray-900">Digital</span>
          </span>
        </div>

        {/* Desktop & Tablet Menu */}
        <ul className="hidden md:flex lg:flex space-x-8 font-medium text-gray-700">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            {/* Use React Router for About Us page */}
            <Link
              to="/about-us"
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex lg:flex">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition cursor-pointer"
          >
            Get a Quote
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={handleToggle}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-4 text-gray-800 font-medium">
            {["home", "services", "portfolio", "contact"].map((id) => (
              <li key={id}>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-indigo-600"
                  onClick={closeMenu}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </ScrollLink>
              </li>
            ))}
            {/* Mobile About Us */}
            <li>
              <Link
                to="/about-us"
                className="cursor-pointer hover:text-indigo-600"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="block px-4 py-2 text-center rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition cursor-pointer"
                onClick={closeMenu}
              >
                Get a Quote
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
