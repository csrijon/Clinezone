import React from 'react';
import './Footer.css';
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaGlobe
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <ul className="footer-nav">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Client Onboarding</li>
        </ul>

        <div className="footer-icons">
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaGithub />
          <FaGlobe />
        </div>

        <p className="footer-brand">
          <a href="#">Clinezone</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
