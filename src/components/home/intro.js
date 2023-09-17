import React from "react";
import "./intro.css";
import icon from "../../assets/pfp.PNG";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import FadeIn from "react-fade-in/lib/FadeIn";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContainer">
        <div className="introContent">
          <span className="hello">Hi! I'm Aurora </span>
          <span className="description">
            I'm a third year computer science student passionate about coding
            and creative design{" "}
          </span>
          <span className="description2">
            Get to know more about me below.{" "}
          </span>
          <button className="resume">
            <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/10b4nwekCbaq_vrN4LxgtUbpHqBn2KlO5-QFM4IFEkBU/export?format=pdf">
              resume
            </a>
          </button>
          <div className="icons">
            <a href="https://www.linkedin.com/in/aurora-cheng04/">
              <img src={linkedin} alt="linkedin" className="social" />
            </a>

            <a href="https://github.com/auroraxcheng">
              <img src={github} alt="linkedin" className="social" />
            </a>
          </div>
        </div>
        <div className="iconContainer">
          <img src={icon} alt="Profile" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
