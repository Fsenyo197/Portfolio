import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "@Images/senyo_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    "& .MuiTooltip-arrow": {
      color: "white", // Change the arrow color to white
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
    <nav className="bg-gray-600 text-white flex-col hidden md:flex w-24">
      <div>
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          onClick={handleLogoClick}
        >
          {" "}
          {/* Use Link from react-scroll */}
          <img src={logo} alt="logo" className="w-50 h-50 mb-24" />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-normal items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center mb-8"
        >
          {" "}
          {/* Use Link for smooth scrolling */}
          <LightTooltip title="Home" arrow placement="right">
            <HomeIcon
              className={`mr-2 p-1 rounded-md h-9 w-9 ${
                activeIcon === "home"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              } `}
              transform="scale(1.5)"
              onClick={() => handleIconClick("home")}
            />
          </LightTooltip>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center mb-8"
        >
          {" "}
          {/* Use Link for smooth scrolling */}
          <LightTooltip title="About" arrow placement="right">
            <PersonIcon
              className={`mr-2 p-1 rounded-md ${
                activeIcon === "about"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              }`}
              transform="scale(1.5)"
              onClick={() => handleIconClick("about")}
            />
          </LightTooltip>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center"
        >
          {" "}
          {/* Use Link for smooth scrolling */}
          <LightTooltip title="Contact" placement="right" arrow>
            <EmailIcon
              className={`mr-2 p-1 rounded-md ${
                activeIcon === "contact"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
              }`}
              transform="scale(1.5)"
              onClick={() => handleIconClick("contact")}
            />
          </LightTooltip>
        </Link>
      </div>
    </nav>
  );
}
