import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  return (
    <div className="">
      <button
        onClick={toggleNavbar}
        className="bg-gray-600 p-4 text-white md:hidden block min-w-full"
        aria-label="Toggle Navbar"
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>

      {isNavbarVisible && (
        <nav className="bg-gray-600 p-4 w-full text-white md:hidden block">
          <ul className="list-none flex flex-col items-center">
            <li className="mb-4">
              <Link to="/" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faHome} className="text-xl" />
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/about" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faUser} className="text-xl" />
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
