import React from "react";
import tradingPulseImage from "@Images/trading-pulse.png";


const Projects = () => {

  const projectList = {
    id: "projects-list",
    label: "Projects",
    title: "From Ideas to Reality",
    subtitle: "A spectrum of projects: Some solo, some shared, all special.",
    groups: [
      {
        id: "work",
        title: "Featured Project",
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
          <h2 className="text-blue-600 text-3xl font-bold mb-8 mt-16 pt-12">{group.title}</h2>
          <ul>
            {group.items.map(item => (
              <li key={item.id}>
                <a href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-blue-600 font-bold text-xl mb-2 mt-8">{item.title}</h3>
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