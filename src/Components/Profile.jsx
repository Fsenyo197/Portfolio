import React, { useState } from "react";
import senyo from "@Images/senyo.jpg";
import { GitHub, Twitter, LinkedIn, Description } from "@mui/icons-material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
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
              className={`p-1 rounded-md ${
                activeIcon === "github"
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
            href="https://twitter.com/Senyo197"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className={`p-1 rounded-md ${
                activeIcon === "twitter"
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
              className={`p-1 rounded-md ${
                activeIcon === "linkedin"
                  ? "text-gray-900 bg-white"
                  : "hover:text-gray-900 hover:bg-white"
              }`}
              transform="scale(1.5)"
              onClick={() => handleIconClick("linkedin")}
            />
          </a>
        </LightTooltip>
      </div>
      <div className="flex flex-wrap mt-8 font-medium text-sm p-2 text-gray-300">
        <p>
          Curious and passionate Fullstack Software Engineer with a solid
          foundation in JavaScript, C, Python, PHP, HTML, and CSS. Thriving in
          Agile and DevOps environments, I am dedicated to creating reliable
          solutions that streamline software engineering processes. Proficient
          in leveraging modern frameworks, libraries, and tools to craft
          userfriendly interfaces and fast, efficient products.
        </p>
      </div>
      <div className="mt-8 md:block hidden">
        <CustomButton
          variant="contained"
          startIcon={<Description />}
          href="/Richard-Senyo-Gadasu.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </CustomButton>
      </div>
    </aside>
  );
}
