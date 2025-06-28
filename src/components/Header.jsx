import React from "react";
import "../components/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ClineZone</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About us</a>
        <a href="#">Why Join us ?</a>
      </nav>

      <button className="onboard-btn">Client onboarding</button>

      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
