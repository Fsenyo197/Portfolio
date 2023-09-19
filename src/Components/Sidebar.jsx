import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "@Images/senyo_logo.png";

export default function Sidebar() {
  return (
    <nav className="bg-gray-600 text-white flex flex-col hidden md:flex w-24">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-50 h-50 mb-24" />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-normal items-center">
        <Link to="/" className="flex items-center mb-8">
          <FontAwesomeIcon
            icon={faHome}
            className="mr-2 text-xl transition duration-100 hover:text-blue-500"
            title="Home"
          />
        </Link>
        <Link to="/about" className="flex items-center mb-8">
          <FontAwesomeIcon
            icon={faUser}
            className="mr-2 text-xl transition duration-100 hover:text-blue-500"
            title="About"
          />
        </Link>
        <Link to="/contact" className="flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mr-2 text-xl transition duration-100 hover:text-blue-500"
            title="Contact"
          />
        </Link>
      </div>
    </nav>
  );
}
