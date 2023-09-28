import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
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
            <FontAwesomeIcon icon={faTimes} className="text-2xl px-4" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          )}
        </button>
      </div>

      {isNavbarVisible && (
        <div className="fixed top-0 left-0 px-4 bg-gray-600 h-full w-full flex flex-col text-white">
          <button onClick={closeNavbar}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl mb-16" />
          </button>
          <div>
            <Link to="/" onClick={closeNavbar} className="mb-8 flex">
              <FontAwesomeIcon icon={faHome} className="mr-2 text-xl" />
              Home
            </Link>
            <Link to="/about" onClick={closeNavbar} className="mb-8 flex">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-xl" />
              About
            </Link>
            <Link to="/contact" onClick={closeNavbar} className="mb-8 flex">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl" />
              Contact
            </Link>
            <div className="mb-4">
              <button
                onClick={toggleSocialDropdown}
                className="mb-2 flex text-left"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
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
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/richard-senyo-gadasu/"
                    onClick={closeNavbar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/RichardSenyo_"
                    onClick={closeNavbar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="mr-2" />
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
