import React, { useState } from "react";
import senyo from "@Images/senyo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
      <div className="mt-8">
        <a
          href="https://github.com/Senyo197"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-8 text-xl" />
        </a>
        <a
          href="https://twitter.com/RichardSenyo_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} className="mr-8 text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-senyo-gadasu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
        </a>
      </div>
    </aside>
  );
}
