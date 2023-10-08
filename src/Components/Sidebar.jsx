import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@Images/senyo_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    '& .MuiTooltip-arrow': {
      color: 'white', // Change the arrow color to white
    },
  },
}));

export default function Sidebar() {
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
        <Link to="/" className="flex items-center mb-8">
          <LightTooltip title="Home" arrow placement="right">
            <HomeIcon
              className={`mr-2 p-1 rounded-md h-9 w-9 ${
                activeIcon === "home"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              } `}
              title="Home"
              transform="scale(1.5)"
              onClick={() => handleIconClick("home")}
            />
          </LightTooltip>
        </Link>
        <Link to="/about" className="flex items-center mb-8">
          <LightTooltip title="About" arrow placement="right">
            <PersonIcon
              className={`mr-2 p-1 rounded-md ${
                activeIcon === "about"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              }`}
              title="About"
              transform="scale(1.5)"
              onClick={() => handleIconClick("about")}
            />
          </LightTooltip>
        </Link>
        <Link to="/contact" className="flex items-center">
          <LightTooltip title="Contact" placement="right" arrow>
            <EmailIcon
              className={`mr-2 p-1 rounded-md ${
                activeIcon === "contact"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              }`}
              title="Contact"
              transform="scale(1.5)"
              onClick={() => handleIconClick("contact")}
            />
          </LightTooltip>
        </Link>
      </div>
    </nav>
  );
}
