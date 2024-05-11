import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  Home as HomeIcon,
  Inventory as InventoryIcon,
  Layers as LayersIcon,
  Email as EmailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
import logo from "@Images/eagle-logo.png";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  const toggleSocialDropdown = () => {
    setIsSocialDropdownOpen(!isSocialDropdownOpen);
  };


  useEffect(() => {
    if (isNavbarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    if (isNavbarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isNavbarVisible]);

  return (
    <nav className="sm:hidden bg-gray-600 h-20">
      <div className="flex justify-between">
        <Link to="top" smooth={true}>
          <img
            src={logo}
            alt="Logo"
            className="ml-4 my-2 h-12 w-12 filter brightness-0 invert"
          />
        </Link>

        <button
          onClick={toggleNavbar}
          className="px-6 text-white"
          aria-label="Toggle Navbar"
        >
          {isNavbarVisible ? <CloseIcon className="text-2xl" /> : <MenuIcon className="text-xl" />}
        </button>
      </div>

      {isNavbarVisible && (
        <div ref={navbarRef} className="sticky left-36 mt-5 pt-8 px-4 bg-gray-600 min-h-screen w-60 flex text-white">
          <div>
            <Link
              to="home"
              onClick={closeNavbar}
              className="mb-8 mt-24 flex"
              smooth={true}
            >
              <HomeIcon className="mr-2 text-xl" />
              Home
            </Link>
            <Link
              to="projects"
              onClick={closeNavbar}
              className="mb-8 flex"
              smooth={true}
            >
              <InventoryIcon className="mr-2 text-lg" />
              Projects
            </Link>
            <Link
              to="stacks"
              onClick={closeNavbar}
              className="mb-8 flex"
              smooth={true}
            >
              <LayersIcon className="mr-2 text-xl" />
              Stacks
            </Link>
            <Link
              to="contact"
              onClick={closeNavbar}
              className="mb-8 flex"
              smooth={true}
            >
              <EmailIcon className="mr-2 text-lg" />
              Contact
            </Link>
            <div className="mb-4">
              <button
                onClick={toggleSocialDropdown}
                className="mb-2 flex text-left"
                aria-expanded={isSocialDropdownOpen}
              >
                <ExpandMoreIcon
                  className={`mr-2 text-3xl ${isSocialDropdownOpen ? "transform rotate-180" : ""
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
                    <GitHub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/richard-senyo-gadasu/"
                    onClick={closeNavbar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    <LinkedIn className="mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/RichardSenyo_"
                    onClick={closeNavbar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Twitter className="mr-2" />
                    Twitter
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
