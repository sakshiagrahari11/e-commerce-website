import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
    <div className="header-section">
        <h1>Contact Us</h1>
        <nav>
          <a href="/">Home</a> / <a href="/seeall">Contact Us</a>
        </nav>
      </div>
    <div className="contact-page-container">
      {/* Contact Us Section */}
      <div className="contact-details-section">
        {/* Google Maps Embedded */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.014703799564!2d-122.0842496!3d37.4220653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf6c7d1929c3%3A0x1e745e953c2bcf98!2sGoogleplex!5e0!3m2!1sen!2sin!4v1600547515686!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className="map-frame"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="radio-group">
              <label>Register as*:</label>
              <div className="radio-options">
                <input type="radio" id="vendor" name="registerAs" value="vendor" />
                <label htmlFor="vendor">Vendor</label>

                <input type="radio" id="customer" name="registerAs" value="customer" />
                <label htmlFor="customer">Customer</label>
              </div>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Your Number" required />
              <input type="text" placeholder="Your City" required />
            </div>

            <textarea placeholder="Your Message" rows="4" required></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-contact-section">
        <div className="footer-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Find us</p>
          <p>Vijay Nagar Indore</p>
        </div>

        <div className="footer-item">
          <i className="fas fa-phone-alt"></i>
          <p>Contact Us</p>
          <p>9876543210</p>
        </div>

        <div className="footer-item">
          <i className="fas fa-envelope"></i>
          <p>Email Us</p>
          <p>support@alphaplatinum.in</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;

