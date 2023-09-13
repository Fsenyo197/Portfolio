import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@Images/senyo_logo.png";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  return (
    <div className="md:hidden">
      {/* Menu icon button */}
      <button
        onClick={toggleNavbar}
        className="bg-gray-600 py-2 px-4 text-white w-full items-start"
        aria-label="Toggle Navbar"
      >
        {isNavbarVisible ? (
          <FontAwesomeIcon icon={faTimes} className="text-2xl px-4" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        )}
      </button>

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
            <Link to="/contact" onClick={closeNavbar}>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
