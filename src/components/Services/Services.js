// src/components/Services/Services.js

import React, { useEffect } from 'react';
import './Services.css';
import bikini_waxing_image from "../../assest/bikini-waxing-image.jpg";
import waxing_image from "../../assest/waxing-image.jpg";
import facial_image from "../../assest/facial-image.jpg";
import eyebrows_image from "../../assest/eyebrows-waxing-image.jpg";

const services = [
  { name: 'Body', price: '$60', image: waxing_image },
  { name: 'Bikini', price: '$35', image: bikini_waxing_image },
  { name: 'Facials', price: '$35', image: facial_image },
  { name: 'Eyebrows', price: '$10', image: eyebrows_image },
];

const Services = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Add 'show' class when in view
        }
      });
    });

    const cards = document.querySelectorAll('.service-card');
    const header = document.querySelector('.services-header');
    
    cards.forEach(card => observer.observe(card));
    observer.observe(header);

    return () => observer.disconnect(); // Clean up the observer on unmount
  }, []);

  return (
    <section id="services">
      <div className="services-container">
        <h2 className="services-header">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.name} className="service-image" />
              <h3>{service.name}</h3>
              <p>{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
