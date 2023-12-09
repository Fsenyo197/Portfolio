import React from "react";

export default function Stacks() {
  const ProgrammingLanguages = [
    "JavaScript",
    "C",
    "HTML5",
    "CSS3",
    "Python",
    "MySQL",
    "Bash",
  ];

  return (
    <div>
      <div className="text-blue-600 text-3xl font-bold mb-2">Bits & Tools</div>
      <div className="mb-8">The toolkits that drive my coding reality!</div>
      <ul>
        <li className="text-blue-600 font-bold text-xl mb-2">
          Programming Languages
        </li>
        <ul className="list-none">
          {ProgrammingLanguages.map((language) => (
            <li key={language} className="flex items-center mb-2">
              <span className="mr-2 text-blue-600">✓</span>
              {language}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
