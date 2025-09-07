import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            Creating exceptional digital experiences through innovative design and cutting-edge technology.
            <br /><br />
            Follow me on social media to see my latest projects and updates.
          </p>
        </div>
      </div>
      
      <hr />

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="https://github.com/Amanpal2424" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aman-kumar-pal-05732a315/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:pal028696@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
