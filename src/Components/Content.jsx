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
        setImageWidth("w-32"); // Smaller size for small screens
      } else {
        setImageWidth("w-60"); // Larger size for larger screens
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
      <Element name="top">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 pt-16">
          <div className="text-gray-900 mb-8 text-4xl font-extrabold text-center sm:text-left">
            <span className="block mb-2 pt-8">Hello, I&apos;m </span>
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
          <div className="flex-shrink-0 sm:ml-16">
            <div className="rounded-full bg-navy-700 p-2 static">
              <img
                src="/contactpic.png"
                alt="hero image"
                className={`${imageWidth} rounded-full`}
              />
            </div>
          </div>
        </div>
        <p className="text-navy-900 text-base mb-6 text-center sm:text-left">
          Yesterday, curioused about the first line of code. Today, poised to impact the world's digital landscape!
        </p>
      </Element>
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
