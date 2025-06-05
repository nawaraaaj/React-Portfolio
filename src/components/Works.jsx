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
            <h3>🔐 Register and Login System</h3>
            <p>
              Secure user login system using PHP, MySQL, and JavaScript
              validation.
            </p>
            <a
              href="https://github.com/nawaraaaj/Register-and-Login"
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
