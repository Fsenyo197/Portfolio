import React from "react";
import senyo from "@Images/senyo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <aside className="bg-gray-600 text-white flex flex-col hidden md:flex w-64 border-l items-center">
      <div>
        <img
          src={senyo}
          alt="Image of Senyo"
          className="w-36 h-36 mt-8 mb-8 rounded-full"
        />
      </div>
      <strong>Richard Senyo Gadasu</strong>
      <div>
        <p>Frontend Software Engineer</p>
      </div>
    </aside>
  );
}
