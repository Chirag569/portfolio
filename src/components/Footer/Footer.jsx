import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050414] border-t border-gray-800">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-[#2563eb]">
          Chirag Lal Chandani
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#3b82f6] text-sm sm:text-base my-1 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/Chirag569",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/chirag-lal-chandani-011657300/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-[#3b82f6] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Chirag Lal Chandani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

