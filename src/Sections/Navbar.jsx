import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="" alt="TechAura Logo" className="h-10 w-auto" /> */}
          <span className="text-2xl font-bold text-indigo-700">
            TechAura <span className="text-gray-900">Digital</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className="hover:text-indigo-600 transition"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-indigo-600 transition"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="hover:text-indigo-600 transition"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="hover:text-indigo-600 transition"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-indigo-600 transition"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Get a Quote
          </NavLink>
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
            <li>
              <NavLink
                to="/"
                className="hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 text-center rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
