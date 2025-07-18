import React from 'react';
import './ServicesSection.css';

const services = [
  'Bulk Client Onboarding',
  'Bulk Client Onboarding',
  'Bulk Client Onboarding',
  'Bulk Client Onboarding'
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="hover-overlay"></div>
            <h3>{service}</h3>
          </div>
        ))}
      </div>

      {/* Floating background circles */}
      <div className="floating-circles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default ServicesSection;
