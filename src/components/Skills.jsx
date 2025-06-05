import React from "react";
import "./Skills.css";
import WebDeveloper from "../assets/website-design.png";
import AppDeveloper from "../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in building
        dynamic and responsive websites. I specialize in front-end technologies
        like HTML, CSS, JavaScript, and React.js, and also have strong back-end
        knowledge in PHP and MySQL. My focus is on creating clean, efficient,
        and user-friendly applications.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDeveloper} className="skillBarImg" alt="Web development" />
          <h2>Web Development</h2>
          <p>
            I create modern, responsive websites using HTML, CSS, JavaScript,
            and React.js. I focus on performance, accessibility, and user experience.
          </p>
        </div>

        <div className="skillBar">
          <img src={AppDeveloper} className="skillBarImg" alt="App development" />
          <h2>App Development</h2>
          <p>
            I build full-stack applications with PHP and MySQL, and also create
            cross-platform interfaces using React-based frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
