import React from "react";
import { Element } from "react-scroll"; // Import Element from react-scroll
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Stacks from "./Stacks";
import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <Element name="home" className="mb-16">
        <h1 className="text-4xl font-bold text-blue-600">Read about me!</h1>
        <p className="mt-2 mb-16">
          Just like yesterday, I was curious about the first line of code. Now, poised to impact the world's digital landscape!
        </p>
        <Home />
      </Element>
      <Element name="projects" className="mb-8">
        <Projects />
      </Element>
      <Element name="stacks" className="mb-8">
        <Stacks />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Content;
