import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", sectionId: null },
    { name: "The Logic", path: "/", sectionId: "the-logic" },
    { name: "Curriculum", path: "/", sectionId: "curriculum" },
    { name: "About Us", path: "/about", sectionId: null },
  ];

  const navigate = useNavigate();

  const handleNavClick = (e, link) => {
    // If it's a section link
    if (link.sectionId) {
      e.preventDefault();

      // If we are already on home page, scroll directly
      if (location.pathname === "/") {
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setMobileMenuOpen(false);
        }
      } else {
        // If on another page, navigate to home with hash state
        setMobileMenuOpen(false);
        navigate("/", { state: { scrollTo: link.sectionId } });
      }
    }
    // If it's a page link (like About), let normal Link behavior happen
    else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                <span className="text-black font-bold text-xl">T</span>
              </div>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Theoptionsera<span className="text-cyan-400">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-all relative group ${
                  location.pathname === link.path && !link.sectionId
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={onJoinClick} className="btn btn-primary">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 bg-black/90 backdrop-blur-md absolute left-0 right-0 px-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors py-2 border-b border-gray-800"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  onJoinClick();
                  setMobileMenuOpen(false);
                }}
                className="btn btn-primary w-full"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
