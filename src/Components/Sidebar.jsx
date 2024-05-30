import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import EmailIcon from "@mui/icons-material/Email";
import LayersIcon from "@mui/icons-material/Layers";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import logo from "@Images/eagle-logo.png";

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

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState("");

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveIcon(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const handleLogoClick = () => {
    setActiveIcon("");
  };

  const handleSetActive = (to) => {
    setActiveIcon(to);
  };
  return (
    <nav className="bg-gray-900 text-white flex-col hidden sm:flex w-24">
      <div>
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 ml-2 mb-36 filter brightness-0 invert"
          />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-normal items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center mb-8"
          onSetActive={() => handleSetActive("home")}
        >
          <LightTooltip title="Home" arrow placement="right">
            <HomeIcon
              className={`mr-2 p-1 rounded-md h-9 w-9 ${activeIcon === "home"
                ? "text-gray-900 bg-white"
                : "hover:text-gray-900 hover:bg-white"
                }`}
              transform="scale(1.5)"
            />
          </LightTooltip>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center mb-8"
          onSetActive={() => handleSetActive("projects")}
        >
          <LightTooltip title="Projects" arrow placement="right">
            <InventoryIcon
              className={`mr-2 p-1 rounded-md ${activeIcon === "projects"
                ? "text-gray-900 bg-white"
                : "hover:text-gray-900 hover:bg-white"
                }`}
              transform="scale(1.5)"
            />
          </LightTooltip>
        </Link>
        <Link
          to="stacks"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center mb-8"
          onSetActive={() => handleSetActive("stacks")}
        >
          <LightTooltip title="Stacks" placement="right" arrow>
            <LayersIcon
              className={`mr-2 p-1 rounded-md ${activeIcon === "stacks"
                ? "text-gray-900 bg-white"
                : "hover:text-gray-900 hover:bg-white"
                }`}
              transform="scale(1.5)"
            />
          </LightTooltip>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center"
          onSetActive={() => handleSetActive("contact")}
        >
          <LightTooltip title="Contact" placement="right" arrow>
            <EmailIcon
              className={`mr-2 p-1 rounded-md ${activeIcon === "contact"
                ? "text-gray-900 bg-white"
                : "hover:text-gray-900 hover:bg-white"
                }`}
              transform="scale(1.5)"
            />
          </LightTooltip>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
