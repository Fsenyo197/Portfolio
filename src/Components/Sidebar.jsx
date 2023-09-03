import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="bg-gray-600 p-4 w-32 text-white flex flex-col items-center hidden md:flex">
      <ul className="list-none justify-center">
        <li className="flex mb-8">
          <Link to="/" className="flex items-center">
            <FontAwesomeIcon
              icon={faHome}
              className="mr-2 text-xl items-center"
            />
          </Link>
        </li>
        <li className="flex mb-8">
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-xl" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
