import React, { useState } from "react";
import senyo from "@Images/senyo.jpg";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
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
      color: "white",
    },
  },
}));

export default function Profile() {
  const [activeIcon, setActiveIcon] = useState("");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <aside className="bg-gray-900 text-white flex-col hidden md:flex w-64 border-l items-center">
      <div>
        <img
          src={senyo}
          alt="portrait of Senyo"
          className="w-36 h-36 mt-8 mb-8 rounded-full"
        />
      </div>
      <div className="p-4">
        <div className="text-lg font-bold mb-1">Richard Senyo Gadasu</div>
        <div className="text-gray-300">Fullstack Software Engineer</div>
      </div>
      <div className="mt-8 flex justify-between w-32">
        <LightTooltip title="GitHub" arrow placement="bottom">
          <a
            href="https://github.com/Senyo197"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              className={`p-1 rounded-md ${activeIcon === "github"
                ? "text-gray-900 bg-white"
                : "hover:text-gray-900 hover:bg-white"
                }`}
              transform="scale(1.5)"
              onClick={() => handleIconClick("github")}
            />
          </a>
        </LightTooltip>
        <LightTooltip title="X/Twitter" arrow placement="bottom">
          <a
            href="https://twitter.com/RichardSenyo_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className={`p-1 rounded-md ${activeIcon === "twitter"
                ? "text-gray-900 bg-white"
                : "hover:text-gray-900 hover:bg-white"
                }`}
              transform="scale(1.5)"
              onClick={() => handleIconClick("twitter")}
            />
          </a>
        </LightTooltip>
        <LightTooltip title="LinkedIn" arrow placement="bottom">
          <a
            href="https://www.linkedin.com/in/richard-senyo-gadasu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              className={`p-1 rounded-md ${activeIcon === "linkedin"
                ? "text-gray-900 bg-white"
                : "hover:text-gray-900 hover:bg-white"
                }`}
              transform="scale(1.5)"
              onClick={() => handleIconClick("linkedin")}
            />
          </a>
        </LightTooltip>
      </div>
    </aside>
  );
}