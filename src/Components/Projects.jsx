import React from "react";
import tradingPulseImage from "@Images/trading-pulse.png";


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
          },
        ],
      },
    ],
  };

  return (
    <div>
      {projectList.groups.map(group => (
        <div key={group.id}>
          <h2 className="text-3xl text-gray-900 font-bold mt-16 pt-16">{group.title}</h2>
          <h3 className="text-black mb-8">
            {group.subtitle}
          </h3>
          <ul>
            {group.items.map(item => (
              <li key={item.id}>
                <a href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-gray-900 font-bold text-lg mb-2 mt-8">{item.title}</h3>
                  <img src={item.imgSrc} alt={item.imgAlt} className="h-38 w-60" />
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