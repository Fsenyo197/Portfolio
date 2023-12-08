import React from "react";

export default function Stacks() {
  const ProgrammingLanguages = [
    "JavaScript",
    "C",
    "HTML5 & CSS3",
    "Python",
    "MySQL",
  ];
  return (
    <>
      <h1>Bits & Tools</h1>
      <div>
        <div>The toolkits that drive my coding reality!</div>
        <ul>
          {ProgrammingLanguages.map((language) => (
            <li>{language}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
