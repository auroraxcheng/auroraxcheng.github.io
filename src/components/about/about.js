import React from "react";
import "./about.css";
// import { Fade } from '@mui/material';

const About = () => {
  return (
    <section id="about" className="animated ">
        <h1 className="aboutHeading">about me</h1>
        <div className="aboutContainer animated">
          <div className="aboutDescription">
            I'm a Computer Science major @ UBC aspiring to go into UX/UI design.
            <br />
            Currently, I am ...
            <br />
            <div className="currently">
            👩🏻‍💻 a software developer at <a href="https://cic.ubc.ca/" id="ig"> UBC Cloud Innovation Center </a> <br />
              ✨ a designer on the{" "}
              <a href="https://www.ubclaunchpad.com/" id="ig">
                {" "}
                UBC Launchpad{" "}
              </a>{" "}
              student team
              <br /> 🫧 a member of{" "}
              <a href="https://nwplus.io/" id="ig">
                {" "}
                nwPlus{" "}
              </a>
              !
              <br />
              🎧 creating jewelry for my{" "}
              <a href="https://www.instagram.com/aurorajewelss/" id="ig">
                small business
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;