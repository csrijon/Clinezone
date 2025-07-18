import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <h2>Still got an doubt ?</h2>
        <p>Tell us! We are happy to help</p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea rows="4" placeholder="Write your message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="circle-bg"><span></span><span></span></div>
    </section>
  );
};

export default ContactForm;
