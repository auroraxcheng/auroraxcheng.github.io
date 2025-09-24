import React from 'react';
import './About.css';
import aboutme from '../../assets/aboutme.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="aboutmeimg">
          <img 
            src={aboutme}
            alt="Aurora" 
            className="pfp" 
          />
        </div>
        
        <div className="about-content">
          <h2 className="about-heading">currently, i am...</h2>
          <ul className="list">
            <p>👩🏻‍💻 fourth yr computer science student at UBC</p>
            <p>⭐️ prev TPM @ Govt. BC, SWE @ UBC CIC</p>
            <p>🫧 creating jewelry for my <a href="https://www.instagram.com/aurorajewelss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="business-link">small business</a> </p>
            <p>🍀 leading design and development initiatives @ UBC UX Hub</p>
          </ul>

          <div className="about-chips" aria-label="fun facts">
            <div className="about-chips-track">
              <span className="chip">₍^. .^₎⟆ cat lover</span>
              <span className="chip">૮₍ ˃ ⤙ ˂ ₎ა hotpot fan</span>
              <span className="chip">𖦹.✧˚ ux designer</span>
              <span className="chip">₍^. .^₎⟆ cat lover</span>
              <span className="chip">૮₍ ˃ ⤙ ˂ ₎ა hotpot fan</span>
              <span className="chip">𖦹.✧˚ ux designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;