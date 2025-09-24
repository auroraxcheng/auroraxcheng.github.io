import React from 'react';
import './Home.css';
import decorativeImg from '../../assets/image 11.png';
import { 
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';
import { IoMdMail } from "react-icons/io";


const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="main-heading">Hi, I'm Aurora!</h1>
          <p className="subtitle">
            I'm a software developer and<br />
            interdisciplinary designer
          </p>
          <p className="current-role">
            currently developing web apps @ UBC BizTech
          </p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aurora-cheng04/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
              <SiLinkedin />
            </a>
            <a href="https://github.com/auroraxcheng" className="social-icon github" target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
            <a href="mailto:auroraxcheng@gmail.com" className="social-icon email">
              <IoMdMail />
            </a>
          </div>
        </div>
        <img src={decorativeImg} alt="home-img" className="home-image" />
      </div>
    </section>
  );
};

export default Home;