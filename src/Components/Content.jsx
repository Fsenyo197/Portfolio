import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import Description from "@mui/icons-material/Description";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Stacks from "./Stacks";
import Footer from "./Footer";

const Content = () => {
  const [imageWidth, setImageWidth] = useState("w-64");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setImageWidth("w-32");
      } else {
        setImageWidth("w-60");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen p-6">
      <Element name="top">
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 pt-16">
            <div className="text-white mb-8 text-4xl font-extrabold text-center sm:text-left">
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
              <div className="rounded-full bg-white p-2 static">
                <img
                  src="/contactpic.png"
                  alt="hero image"
                  className={`${imageWidth} rounded-full`}
                />
              </div>
            </div>
          </div>
          <p className="text-white text-sm italic mb-6 text-center sm:text-left">
            Yesterday, curioused about the first line of code. Today, poised to
            impact the world's digital landscape!
          </p>
          <div className="flex justify-center mb-6 md:hidden">
            <Button
              variant="contained"
              startIcon={<Description />}
              href="/Richard-Senyo-Gadasu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                textTransform: "none",
                border: "1px solid black",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              Download CV
            </Button>
          </div>
        </div>
      </Element>
      <br />
      <Element name="home">
        <Home />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="stacks">
        <Stacks />
      </Element>
      <br />
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Content;
