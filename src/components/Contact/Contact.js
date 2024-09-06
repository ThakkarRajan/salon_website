import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="map-container">
          <iframe
            title="Lavish Look Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.3406000165936!2d-79.32649748563958!3d43.815496149397674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3005e986779%3A0xed232432a2547c0e!2sLavish%20Look!5e0!3m2!1sen!2sca!4v1725468429417!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-info">
          <h3>Our Salon</h3>
          <a href='https://maps.app.goo.gl/ygWcdgq3KtUya76B9'>
            <p>25 Bamburgh Cir, Scarborough, ON M1W 3W2</p>
          </a>
          <p>Phone: <a href='tel:+14372168449'>+1 (437) 216-8449</a></p>
          <p>Email: <a href='mailto:lavishlookinquiry@gmail.com'>lavishlookinquiry@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
