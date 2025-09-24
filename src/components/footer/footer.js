import React from 'react';
import './Footer.css';
import followImg from '../../assets/image 67.png';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <section id="contact" className="follow">
      <div className="follow-container">
        <div className="follow-content">
          <div className="follow-left">
            <h3 className="follow-title">thanks for stopping by!</h3>
            <p className="follow-subtitle">let's connect :) </p>
            <div className="follow-links">
              <a href="https://www.linkedin.com/in/aurora-cheng04/" target="_blank" rel="noopener noreferrer" className="follow-link">
                <SiLinkedin />
              </a>
              <a href="https://github.com/auroraxcheng" target="_blank" rel="noopener noreferrer" className="follow-link">
                <SiGithub />
              </a>
              <a href="mailto:auroraxcheng@gmail.com" className="follow-link">
                <IoMdMail />
              </a>
            </div>
          </div>
          <div className="follow-right">
            <img src={followImg} alt="follow" className="follow-image" />
          </div>
        </div>
        <div className="footer-bottom">designed and developed © 2025 Aurora Cheng</div>
      </div>
    </section>
  );
};

export default Footer;