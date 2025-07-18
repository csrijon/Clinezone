import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta-box">
        <h2>Your Future’s Calling</h2>
        <h3>Are You Ready to Answer?</h3>

        <div className="cta-arrows">
          <span className="arrow left-arrow">↙</span>
          <button className="cta-button">
            Create Your Free Account & Start Today <span className="arrow-icon">➜</span>
          </button>
          <span className="arrow right-arrow">↘</span>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
