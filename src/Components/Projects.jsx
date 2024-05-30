import React from "react";
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
          },
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 md:p-20 pt-36">
      {projectList.groups.map((group) => (
        <div key={group.id} className="mb-12">
          <h2 className="text-4xl text-gray-900 font-bold mb-4">{group.title}</h2>
          <h3 className="text-gray-700 mb-8">{group.subtitle}</h3>
          <div className="grid grid-cols-1 gap-10">
            {group.items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-lg overflow-hidden transition transform hover:scale-105 z-10"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-gray-900 font-bold text-xl mb-2">
                      {item.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      {item.stacks.join(", ")}
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
