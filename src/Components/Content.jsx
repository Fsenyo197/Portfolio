import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Stacks from "./Stacks";
import Footer from "./Footer";

const Content = () => {
  const [imageWidth, setImageWidth] = useState("w-64"); // Initial width for larger screens

  useEffect(() => {
    // Adjust image width based on screen size
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setImageWidth("w-40");
      } else {
        setImageWidth("w-60");
      }
    };

    // Initial call to handleResize
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-whitish-blue min-h-screen p-6">
      <div className="flex items-center justify-between mb-12">
        <div className="text-gray-900 mb-8 text-4xl font-extrabold">
          <span className="block mb-2">
            Hello, I&apos;m{" "}
          </span>
          <TypeAnimation
            sequence={[
              "Richard Senyo!",
              1000,
              "a Fullstack Software Engineer!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div className="rounded-full bg-navy-700 p-2">
          <img
            src="/contactpic.png"
            alt="hero image"
            className={`${imageWidth} sm:w-64 rounded-full`}
          />
        </div>
      </div>
      <p className="text-navy-900 text-base mb-6 mt-4">
        Curioused about the first line of code. Now, poised to impact the world's digital landscape!
      </p>
      <Element name="home">
        <Home />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="stacks">
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
