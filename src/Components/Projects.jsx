import React from "react";
import { Grid, Typography } from "@mui/material";
import tradingPulseImage from "@Images/trading-pulse.png";
import portfolioImage from "@Images/portfolio.png";

const Projects = () => {
  const projectList = {
    id: "projects-list",
    label: "Projects",
    groups: [
      {
        id: "work",
        title: "Featured Fullstack Projects",
        subtitle: "From imaginations to Reality ...",
        items: [
          {
            id: "trading-pulse",
            url: "https://trading-pulse.vercel.app/",
            imgSrc: tradingPulseImage,
            imgAlt: "Screenshot of the Trading Pulse website",
            title: "Trading Pulse",
            description:
              "A simple yet powerful tool, that empowers traders of all levels to make informed decisions by providing positive, negative, and neutral analyses of key economic factors. Our in-depth analysis helps you understand the potential impact on various markets, from forex and stocks to commodities and cryptocurrencies. By leveraging this knowledge, you can improve your win rate and navigate the complexities of financial markets with confidence.",
            stacks: ["React", "TailwindCSS", "Django", "MySQL"],
            borderColor: "#3b82f6", // Blue border for Trading Pulse
          },
          {
            id: "portfolio",
            url: "https://richard-senyo.netlify.app",
            imgSrc: portfolioImage,
            imgAlt: "Screenshot of the Portfolio website",
            title: "Portfolio",
            description:
              "My personal portfolio website. In addition with a serverless backend for transporting the messages from the contact form directly to my email.",
            stacks: ["React", "TailwindCSS", "Node.js", "ExpressJs"],
            borderColor: "#10b981", // Green border for Portfolio
          },
        ],
      },
    ],
  };

  return (
    <div id="projects" className="container mx-auto p-8 sm:p-4 md:p-16 mt-20">
      {projectList.groups.map((group) => (
        <div key={group.id} className="mb-12">
          <div className="text-gray-900 text-3xl font-bold mb-2">
            {group.title}
          </div>
          <div className="mb-8 text-sm italic">
            {group.subtitle}
          </div>
          <Grid container spacing={4}>
            {group.items.map((item) => (
              <Grid item key={item.id}>
                <div
                  className="project-item p-4 text-gray-900 rounded-lg shadow-lg bg-white"
                  style={{ border: `4px solid ${item.borderColor}` }}
                >
                  <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-40 object-cover rounded-t-lg" />
                  <div className="project-content mt-4">
                    <Typography variant="h5" component="h3" className="text-gray-900">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.stacks.join(", ")}
                    </Typography>
                    <Typography variant="body2" component="p" className="mt-2">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Projects;
