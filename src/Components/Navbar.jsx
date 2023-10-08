import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material"; // Import Material-UI icons
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material"; // Import Material-UI brand icons
import logo from "@Images/senyo_logo.png";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  const toggleSocialDropdown = () => {
    setIsSocialDropdownOpen(!isSocialDropdownOpen);
  };

  return (
    <div className="md:hidden bg-gray-600 h-16 overflow-y-auto">
      <div className="flex justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="ml-4 my-2 h-8 w-24" />
        </Link>
        <button
          onClick={toggleNavbar}
          className="py-4 px-4 text-white"
          aria-label="Toggle Navbar"
        >
          {isNavbarVisible ? (
            <CloseIcon className="text-2xl px-4" />
          ) : (
            <MenuIcon className="text-xl" />
          )}
        </button>
      </div>

      {isNavbarVisible && (
        <div className="fixed top-0 left-0 px-4 bg-gray-600 h-full w-full flex flex-col text-white">
          <button onClick={closeNavbar}>
            <CloseIcon className="text-2xl mb-16" />
          </button>
          <div>
            <Link to="/" onClick={closeNavbar} className="mb-8 flex">
              <HomeIcon className="mr-2 text-xl" />
              Home
            </Link>
            <Link to="/about" onClick={closeNavbar} className="mb-8 flex">
              <PersonIcon className="mr-2 text-xl" />
              About
            </Link>
            <Link to="/contact" onClick={closeNavbar} className="mb-8 flex">
              <EmailIcon className="mr-2 text-xl" />
              Contact
            </Link>
            <div className="mb-4">
              <button
                onClick={toggleSocialDropdown}
                className="mb-2 flex text-left"
              >
                <ExpandMoreIcon
                  className={`mr-2 text-3xl ${
                    isSocialDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
                Social
              </button>
              {isSocialDropdownOpen && (
                <div className="ml-4">
                  <a
                    href="https://github.com/Senyo197"
                    onClick={closeNavbar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    <GitHubIcon className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/richard-senyo-gadasu/"
                    onClick={closeNavbar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    <LinkedInIcon className="mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/RichardSenyo_"
                    onClick={closeNavbar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <TwitterIcon className="mr-2" />
                    Twitter
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
