import React from "react";
import "./portfolio.css";
import bcharity from "../../assets/bcharity.png";
import pandapath from "../../assets/pandapath.png";
import aurorajewelss from "../../assets/aurorajewelss.jpg";
import volleyball from "../../assets/volleyballclub.jpg";
import nomappetit from "../../assets/nomapp.jpg";
// import { Fade } from '@mui/material';


function Portfolio() {
  return (
    <div className="portfolio">
        <h1 className="portfoliotitle"> my work </h1>

        <div className="projectList">

        {/* <div className="portfolio1">
            <img src={cic} alt="" className="img" />
            <h3 className="projecttitle"> Software Developer</h3>
            <p className="projectdescription">
              {" "}
              Cloud computing and designing solutions with AWS{" "}
            </p>
          </div> */}

          <div className="portfolio1">
            <img src={volleyball} alt="" className="img" />
            <h3 className="projecttitle"> UBC Volleyball Club </h3>
            <p className="projectdescription">
              {" "}
              Website redesign as part of the Computer Science Student Society tech consulting team.{" "}
            </p>
          </div>


          <div className="portfolio1">
            <img src={nomappetit} alt="" className="img" />
            <h3 className="projecttitle"> Nom Appetit </h3>
            <p className="projectdescription">
              {" "}
              Designing and prototyping for Nom Appetit: a mobile restaurant
              tracking app. {" "}
            </p>
          </div>

          <div className="portfolio1">
            <img src={bcharity} alt="" className="img" />
            <h3 className="projecttitle"> BCharity</h3>
            <p className="projectdescription">
              {" "}
              Full-stack decentralized volunteer logging system.
              {" "}
            </p>
          </div>


          <div className="portfolio1">
            <img src={aurorajewelss} alt="" className="img" />
            <h3 className="projecttitle"> aurorajewelss</h3>
            <p className="projectdescription">
              {" "}
              My small business and creative outlet.{" "}
            </p>
          </div>

          <div className="portfolio1">
            <img src={pandapath} alt="" className="img" />
            <h3 className="projecttitle"> PandaPath </h3>
            <p className="projectdescription">
              {" "}
              A mobile navigation app to help users find the safest route home.
              {" "}
            </p>
          </div>
          
        </div>
    </div>
  );
}

export default Portfolio;