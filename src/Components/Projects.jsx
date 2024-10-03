import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Projects = () => {
  const projectList = {
    id: "projects-list",
    label: "Projects",
    groups: [
      {
        id: "work",
        title: "Fullstack Projects",
        subtitle: "From ideas to reality...",
        items: [
          {
            id: "propfirmnews",
            url: "https://propfirmnews.live/",
            title: "Prop Firm News",
            description:
              "A blogging platform dedicated to the trading prop firm industry. It covers key aspects such as pricing models, payout structures, and trading platforms, offering traders valuable insights. The platform also provides clarity on rules and guidelines that prop firms enforce, helping traders navigate the industry effectively.",
            stacks: ["Django", "NextJS", "MUI", "PostgreSQL"],
            imageUrl: "/propfirmnews.png",
          },
          {
            id: "tusome",
            url: "https://tusome-xi.vercel.app/",
            title: "Tusome",
            description:
              "A cutting-edge educational tool that enables students to thrive in their academic pursuits by offering access to a vast collection of past exam questions. Connecting students with relevant study resources by providing a simple and user-friendly interface for better learning and exam preparation.",
            stacks: ["React", "Laravel", "MUI", "PostgreSQL"],
            imageUrl: "/tusome.png",
          },
          {
            id: "trading-pulse",
            url: "https://trading-pulse.vercel.app/",
            title: "Trading Pulse",
            description:
              "A simple yet powerful tool, that empowers traders of all levels to make informed decisions by providing positive, negative, and neutral analyses of key economic factors. Our in-depth analysis helps you understand the potential impact on various markets, from forex and stocks to commodities and cryptocurrencies.",
            stacks: ["React", "TailwindCSS", "Django", "MySQL"],
            imageUrl: "/trading-pulse.png",
          },
          {
            id: "portfolio",
            url: "https://richard-senyo.netlify.app",
            title: "Portfolio",
            description:
              "My personal portfolio website. In addition with a serverless backend for transporting the messages from the contact form directly to my email.",
            stacks: ["React", "TailwindCSS", "Node.js", "ExpressJs"],
            imageUrl: "/portfolio.png",
          },
        ],
      },
    ],
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="projects"
      className="container mx-auto p-4 sm:pt-4 sm:p-6 md:p-20 mt-20"
    >
      {projectList.groups.map((group) => (
        <div key={group.id} className="mb-12">
          <Typography
            variant="h3"
            component="h2"
            className="text-gray-900 text-3xl font-bold mb-2"
          >
            {group.title}
          </Typography>
          <Typography
            variant="subtitle1"
            className="mb-8 pb-8 text-gray-900 italic"
          >
            {group.subtitle}
          </Typography>
          <Grid container spacing={4}>
            {group.items.map((item) => (
              <Grid item key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline w-full"
                >
                  <div
                    className={`project-item flex flex-col ${
                      isSmallScreen ? "text-center" : "text-left"
                    } p-4 text-gray-200 rounded-lg shadow-lg bg-gray-900`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-32  object-cover mb-4"
                    />
                    <div className="project-content">
                      <Typography
                        variant="h5"
                        component="h3"
                        className="text-gray-200 mb-2"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        className="p-4 text-gray-400 italic text-sm"
                      >
                        {item.stacks.join(", ")}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                </a>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Projects;
