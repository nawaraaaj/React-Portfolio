import React from "react";
import "./Works.css";

const Works = () => {
  return (
    <div>
      <section id="portfolio">
        <h2 className="portfolioTitle">My Projects</h2>
        <div className="portfolioContainer">
          <div className="portfolioItem">
            <h3>🛒 SimpleShop</h3>
            <p>A basic e-commerce frontend using HTML, CSS, and JavaScript.</p>
            <div className="portfolioLinks">
              <a
                href="https://github.com/nawaraaaj/SimpleShop"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://simpleshop1.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="portfolioItem">
            <h3>✍️ EchoBlogs</h3>
            <p>
              A blogging platform enabling users to create, edit, and share posts with a clean and intuitive interface.
            </p>
            <a
              href="https://github.com/nawaraaaj/EchoBlogs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="portfolioItem">
            <h3>🌦️ Weather App</h3>
            <p>
              Displays real-time weather using API. Built with HTML, CSS, and
              JavaScript.
            </p>
            <a
              href="https://github.com/nawaraaaj/Weather"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
