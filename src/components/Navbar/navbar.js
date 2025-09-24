import React from 'react';
import './Navbar.css';
import avatar from '../../assets/avatar.png';
import { Avatar } from '@mui/material';
import resume from '../../assets/resume.pdf'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-profile">
        <Avatar
              src={avatar}
              alt="Aurora Cheng"
              sx={{
                width: 48,
                height: 48,
                display: "flex",
              }}
            />
        </div>
        
        <div className="nav-links">
          <a href="#home" className="nav-link">home</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#experience" className="nav-link">experience</a>
          <a 
            href={resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link resume-link"
          >
            resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;