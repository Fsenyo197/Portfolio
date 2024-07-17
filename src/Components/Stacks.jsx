import React from "react";

export default function Stacks() {
  const ProgrammingLanguages = [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "C",
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    { name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "PHP", link: "https://www.php.net/" },
    { name: "SQL", link: "https://www.mysql.com/" },
    { name: "Bash", link: "https://www.gnu.org/software/bash/" },
  ];

  const frameworks = [
    // Backend
    { name: "Node.js", link: "https://nodejs.org/" },
    { name: "Express.js", link: "https://expressjs.com/" },
    { name: "Django", link: "https://www.djangoproject.com/" },
    { name: "Flask", link: "https://flask.palletsprojects.com/" },

    // Database
    { name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { name: "MySQL", link: "https://www.mysql.com/" },
    { name: "MongoDB", link: "https://www.mongodb.com/" },
    { name: "Redis", link: "https://redis.io/" },

    // Frontend
    { name: "React.js", link: "https://reactjs.org/" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "Material UI", link: "https://material-ui.com/" },
    {
      name: "react-scroll",
      link: "https://www.npmjs.com/package/react-scroll",
    },
    { name: "Framer Motion", link: "https://www.framer.com/motion/" },
    { name: "Chart.js", link: "https://www.chartjs.org/" },
  ];

  const devops = [
    { name: "Git", link: "https://git-scm.com/" },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "Jenkins", link: "https://www.jenkins.io/" },
    { name: "Linux", link: "https://www.linux.org/" },
    {
      name: "Shell scripting (Bash)",
      link: "https://www.gnu.org/software/bash/",
    },
    { name: "Ruby", link: "https://www.ruby-lang.org/" },
    { name: "Vagrant", link: "https://www.vagrantup.com/" },
    { name: "Slack", link: "https://slack.com/" },
    {
      name: "Microsoft Teams",
      link: "https://www.microsoft.com/en-us/microsoft-teams/",
    },
  ];

  const softwares = [
    { name: "VS Code", link: "https://code.visualstudio.com/" },
    { name: "Github", link: "https://github.com/" },
    { name: "Discord", link: "https://discord.com/" },
    { name: "Heroku", link: "https://www.heroku.com/" },
    { name: "PythonAnywhere", link: "https://www.pythonanywhere.com/" },
    { name: "Vercel", link: "https://vercel.com/" },
    { name: "Netlify", link: "https://www.netlify.com/" },
    { name: "Google Chrome", link: "https://www.google.com/chrome/" },
    { name: "Wordpress", link: "https://wordpress.org/" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-12 bg-gray-900 rounded-lg">
      <div className="w-full max-w-4xl">
        <div className="text-white text-3xl font-bold mb-2">Pack of Stacks</div>
        <div className="mb-8 pb-8 text-white italic">
          The pack that drives my coding reality!
        </div>
        <ul>
          <ul className="list-none mb-8">
            <div className="text-white font-bold text-xl mb-2">
              Programming Languages
            </div>
            {ProgrammingLanguages.map((language) => (
              <li key={language.name} className="flex items-center mb-2">
                <span className="mr-2 text-white">✓</span>
                <a
                  href={language.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 text-white"
                >
                  {language.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none mb-8">
            <div className="text-white font-bold text-xl mb-2">
              Framework & Libraries
            </div>
            {frameworks.map((framework) => (
              <li key={framework.name} className="flex items-center mb-2">
                <span className="mr-2 text-white">✓</span>
                <a
                  href={framework.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 text-white"
                >
                  {framework.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none mb-8">
            <div className="text-white font-bold text-xl mb-2">DevOps</div>
            {devops.map((devop) => (
              <li key={devop.name} className="flex items-center mb-2">
                <span className="mr-2 text-white">✓</span>
                <a
                  href={devop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 text-white"
                >
                  {devop.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none mb-8">
            <div className="text-white font-bold text-xl mb-2">
              Software & Applications
            </div>
            {softwares.map((software) => (
              <li key={software.name} className="flex items-center mb-2">
                <span className="mr-2 text-white">✓</span>
                <a
                  href={software.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-blue-700 text-white"
                >
                  {software.name}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}
