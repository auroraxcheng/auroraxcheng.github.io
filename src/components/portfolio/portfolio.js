import React from "react";
import "./portfolio.css";
import bcharity from "../../assets/bcharity.png";
import pandapath from "../../assets/pandapath.png";
import aurorajewelss from "../../assets/aurorajewelss.jpg";
import launchpad from "../../assets/launchpad.png";
import Fade from "react-reveal/Fade";


function Portfolio() {
  return (
    <div className="portfolio">
      <Fade>
        <h1 className="portfoliotitle"> portfolio </h1>

        <div className="projectList">
          <div className="portfolio1">
            <img src={bcharity} alt="" className="img" />
            <h3 className="projecttitle"> Software developer</h3>
            <p className="projectdescription">
              {" "}
              Created a full-stack decentralized volunteer logging system.
              Prototyped in Figma and built with TypeScript, tailwind CSS, and
              React{" "}
            </p>
          </div>

          <div className="portfolio1">
            <img src={launchpad} alt="" className="img" />
            <h3 className="projecttitle"> UX/UI Designer </h3>
            <p className="projectdescription">
              {" "}
              Designing and prototyping for Nom Appetit: a mobile restaurant
              tracking app (ongoing){" "}
            </p>
          </div>

          <div className="portfolio1">
            <img src={pandapath} alt="" className="img" />
            <h3 className="projecttitle"> PandaPath </h3>
            <p className="projectdescription">
              {" "}
              A mobile navigation app to help users find the safest route home.
              Built with Google Maps API and React Native{" "}
            </p>
          </div>

          <div className="portfolio1">
            <img src={aurorajewelss} alt="" className="img" />
            <h3 className="projecttitle"> aurorajewelss</h3>
            <p className="projectdescription">
              {" "}
              My small business and creative outlet that gained over 20k
              followers on Instagram and 30k on tiktok followers within a year{" "}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Portfolio;
