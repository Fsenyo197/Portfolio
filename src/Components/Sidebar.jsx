import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@Images/senyo_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip component

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(""); // State to track the active icon

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleLogoClick = () => {
    setActiveIcon(""); // Clear the active icon when the logo is clicked
  };

  return (
    <nav className="bg-gray-600 text-white flex flex-col hidden md:flex w-24">
      <div>
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="w-50 h-50 mb-24" />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-normal items-center">
        <Link to="/" className="flex items-center mb-6">
          <Tooltip title="Home" placement="right"> {/* Add Tooltip */}
            <HomeIcon
              className={`mr-2 text-xl p-2 rounded-md ${
                activeIcon === "home"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              }`}
              title="Home"
              onClick={() => handleIconClick("home")}
            />
          </Tooltip>
        </Link>
        <Link to="/about" className="flex items-center mb-6">
          <Tooltip title="About" placement="right"> {/* Add Tooltip */}
            <PersonIcon
              className={`mr-2 text-xl p-2 rounded-md ${
                activeIcon === "about"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              }`}
              title="About"
              onClick={() => handleIconClick("about")}
            />
          </Tooltip>
        </Link>
        <Link to="/contact" className="flex items-center">
          <Tooltip title="Contact" placement="right"> {/* Add Tooltip */}
            <EmailIcon
              className={`mr-2 text-xl p-2 rounded-md ${
                activeIcon === "contact"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              }`}
              title="Contact"
              onClick={() => handleIconClick("contact")}
            />
          </Tooltip>
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
