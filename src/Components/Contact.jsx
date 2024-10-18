import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="app-section">
      <div className="section-content">
        <h2>Contact Me Below</h2>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-card">
          <div className="contact-item">
            <h4>Phone Number:</h4>
            <p>
              <button onClick={() => window.location.href = "tel:8594758431"}>(859) 475-8431</button>
            </p>
          </div>
          <div className="contact-item">
            <h4>Email:</h4>
            <p>
              <button onClick={() => window.location.href = "mailto:Jay.miller02@icloud.com"}>Jay.miller02@icloud.com</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;