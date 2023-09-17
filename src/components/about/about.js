import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <section id="about" className="animated ">
      <Fade>
        <h1 className="aboutHeading">about me</h1>
        <div className="aboutContainer animated">
          <div className="aboutDescription">
            I'm a Computer Science major @ UBC aspiring to go into UX/UI design.
            <br />
            Currently, I am ...
            <br />
            <div className="currently">
              ✨ a designer on the{" "}
              <a href="https://www.ubclaunchpad.com/" id="ig">
                {" "}
                UBC Launchpad{" "}
              </a>{" "}
              student team
              <br /> 👩🏻‍💻 a member of{" "}
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
      </Fade>
    </section>
  );
};

export default About;
