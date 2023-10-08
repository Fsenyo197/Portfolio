import React, { useState } from "react";
import senyo from "@Images/senyo.jpg";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
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
      color: 'white',
    },
  },
}));

export default function Profile() {
  const [activeIcon, setActiveIcon] = useState("");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

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
      <div className="mt-8 flex justify-between w-32">
        <LightTooltip title="GitHub" arrow placement="bottom">
          <a
            href="https://github.com/Senyo197"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              className={`p-1 rounded-md ${
                activeIcon === "github"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
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
              className={`p-1 rounded-md ${
                activeIcon === "twitter"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
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
              className={`p-1 rounded-md ${
                activeIcon === "linkedin"
                  ? "text-gray-600 bg-white"
                  : "hover:text-gray-600 hover:bg-white"
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
