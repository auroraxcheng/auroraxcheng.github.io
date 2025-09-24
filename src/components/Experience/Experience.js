import React from 'react';
import './Experience.css';
import btImage from '../../assets/bt (1).png';
import cic from '../../assets/cic (1).png';
import ux from '../../assets/uxhub.png';
import govt from '../../assets/govtbc.png';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: "May 2025 - Present",
      company: "UBC BizTech",
      position: "Software Developer",
      description: "Developed BT-Web-V2 application, including refactoring authentication services and implementing new NFC card UI functionalities",
      image: btImage,
      linkicon: "↗",
      url: "https://www.ubcbiztech.com/"
    },
    {
      id: 2,
      date: "Sep 2024 - Present",
      company: "UBC UX Hub",
      position: "VP Development & Design",
      description: "Led full-stack development of club website from conception to deployment, directed product strategy and technical execution ",
      image: ux,
      linkicon: "↗",
      url: "https://www.ubcuxhub.ca/"
    },
    {
      id: 3,
      date: "Apr 2025 - Aug 2025",
      company: "Government of BC",
      position: "Technical Product Manager",
      description: "Led cross-functional Agile development team through ServiceNow portal redesign, facilitating sprint planning, standups, and UX testing",
      image: govt,
      linkicon: "↗",
      url: "https://www2.gov.bc.ca/"
    },
    {
      id: 4,
      date: "Jan 2024 - Aug 2024",
      company: "UBC CIC x Amazon Web Services",
      position: "Software Developer Intern",
      description: "Engineered AWS-based Data Pipeline (S3, Glue, Athena, AppSync, Lambda) that improved query performance by 45% and architected an Multi-tenant AI system with Amplify, Cognito, and Bedrock for authentication, user tracking, and LLM integrations.",
      image: cic,
      linkicon: "↗",
      url: "https://cic.ubc.ca/project/modernizing-institutional-grant-data-analytics-using-cloud-services/"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="exp-heading">experiences</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-date">
                  {exp.date}
                </div>
                
                <div className="experience-card">
                  <div className="experience-image">
                    <img src={exp.image} alt={exp.company} />
                    <div className="experience-overlay">
                    <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="experience-link"
                    >
                      {exp.linkicon}
                      </a>
                    </div>
                  </div>
                  <div className="experience-text">
                    <div className="experience-header">
                      <h3 className="company-name">{exp.company}</h3>
                      <h4 className="position-title">{exp.position}</h4>
                    </div>
                    <p className="experience-description">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;