import React from 'react';
import './TestimonialCard.css'; // optional for separate CSS

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=512&q=80"
        alt="Jenny Wilson"
        className="testimonial-image"
      />
      <div className="testimonial-content">
        <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
        <p className="testimonial-quote">
          "We love JobGenix! Our designers were using it for their projects, so we already knew what kind of design they want."
        </p>
        <p className="testimonial-name">
          <strong>Jenny Wilson</strong> <span className="company">Grower.io</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
