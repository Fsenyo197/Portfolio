import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Stacks from "./Stacks";
import Footer from "./Footer";

const Content = () => {
  const [text, setText] = useState("");
  const [imageWidth, setImageWidth] = useState("w-64"); // Initial width for larger screens

  useEffect(() => {
    const originalText = "Hola, meet Richard Senyo Gadasu!";
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(originalText.slice(0, currentIndex));
      currentIndex = (currentIndex + 1) % (originalText.length + 1);
    }, 250); // Adjust the speed of animation here (in milliseconds)

    // Adjust image width based on screen size
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setImageWidth("w-48");
      } else {
        setImageWidth("w-96");
      }
    };

    // Initial call to handleResize
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <motion.div
          className="ml-4 flex flex-wrap"
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component is mounted
          transition={{ duration: 1 }} // Animation duration
        >
          {[...text].map((letter, index) => (
            <motion.span
              key={index}
              className="text-2xl font-bold text-blue-600 mr-2"
              initial={{ opacity: 0, x: -20 }} // Initial animation state for each letter
              animate={{ opacity: 1, x: 0 }} // Animation when letter is visible
              transition={{ duration: 0.5 }} // Animation duration
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <img src="/contactpic.png" alt="Background" className={` ${imageWidth} sm:w-64`} />
      </div>
      <Element name="home">
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
