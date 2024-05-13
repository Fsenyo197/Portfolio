import React from "react";
import tradingPulseImage from "@Images/trading-pulse.png";
import portfolioImage from "@Images/portfolio.png"; // Import the image for the Portfolio project

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
              "A simple yet powerful tool, that empowers traders of all levels to make informed decisions by providing positive, negative, and neutral analyses of key economic factors.  Our in-depth analysis helps you understand the potential impact on various markets, from forex and stocks to commodities and cryptocurrencies. By leveraging this knowledge, you can  improve your win rate and navigate the complexities of financial markets with confidence.",
            stacks: ["React,", "TailwindCSS,", "Django,", "MySQL",],
          },
          {
            id: "portfolio",
            url: "https://richard-senyo.netlify.app",
            imgSrc: portfolioImage,
            imgAlt: "Screenshot of the Portfolio website",
            title: "Portfolio",
            description:
              "My personal portfolio website. In addition with a serverless backend for transporting the messages from the contact form directly to my email.",
            stacks: ["React,", "TailwindCSS,", "Node.js,", "ExpressJs"],
          },
        ],
      },
    ],
  };

  return (
    <div>
      {projectList.groups.map(group => (
        <div key={group.id}>
          <h2 className="text-3xl text-gray-900 font-bold pt-20">{group.title}</h2>
          <h3 className="text-gray-900 mb-8">
            {group.subtitle}
          </h3>
          <ul>
            {group.items.map(item => (
              <li key={item.id}>
                <a href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-gray-900 font-bold text-lg mb-2 mt-4">{item.title}</h3>
                  <img src={item.imgSrc} alt={item.imgAlt} className="h-38 w-60" />
                  <div>
                    <ul className="italic text-sm flex">
                      {item.stacks.map(stack => (
                        <li className="mr-1" key={stack}>{stack}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="hover:text-indigo-600 mt-2">{item.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
