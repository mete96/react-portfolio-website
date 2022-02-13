import React, { useState } from "react";
import Toolbox from "./Toolbox";
import "../assets/css/Projects.css";
import github from "../assets/images/github.svg";
import visit from "../assets/images/visit.svg";
import Footer from "./Footer";
import Contact from "./Contact";

const Projects = () => {
  return (
    <>
      <Toolbox />
      <div className="projects-container">
        <h2>My Projects</h2>
      </div>

      <div className="projects">
        <div className="project1">
          <h2>Landing Restaurant Website</h2>
          <div className="button-container">
            <button>
              <a
                href="https://github.com/mete96/restaurant-landing-react"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} id="icon" alt="github" />
              </a>
            </button>
            <a
              href="https://focused-aryabhata-a9d65e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={visit} alt="site resturant" id="icon" />
            </a>
            <img
              src="https://user-images.githubusercontent.com/80966939/152065736-c4152b56-9a7d-4682-bcd5-221a9be0eda2.gif"
              id="img"
              alt="git"
            />
          </div>
          <div className="project1">
            <h2>Business Website</h2>
            <div className="button-container">
              <a
                href="https://github.com/mete96/react-business-website"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <button>
                  <img src={github} id="icon" alt="github" />
                </button>
              </a>
              <a
                href="https://goofy-fermat-9f1511.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={visit} alt="business" id="icon" />
              </a>
              <img
                src="https://user-images.githubusercontent.com/80966939/153208885-eba4b46f-3bc3-4f75-a421-1d4df9e44ab4.gif"
                id="img"
                alt="git"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />

      <Footer />
    </>
  );
};

export default Projects;
