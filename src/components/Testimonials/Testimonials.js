import React, { useState } from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import client1 from "../../assest/Testimonials/Jal-testimony.jpg";
import client2 from "../../assest/Testimonials/Mansi-testimony.jpg";

const testimonials = [
  {
    image: client1,
    name: "Jal",
    testimonial: "Great service! Highly recommended."
  },
  {
    image: client2,
    name: "Mansi",
    testimonial: "Excellent experience. Will definitely come back!"
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    afterChange: setCurrentSlide,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <div className='testimonial-container'>
        <Slider {...settings}>
          {testimonials.map(({ image, name, testimonial }, index) => (
            <div key={index} className={`testimonial-slide ${currentSlide === index ? 'active' : ''}`}>
              <img src={image} alt={`${name}'s Testimonial`} loading="lazy" />
              <blockquote>
                <p>{testimonial}</p>
                <cite>{name}</cite>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
