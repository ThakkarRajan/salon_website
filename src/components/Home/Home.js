import React from 'react';
import Navbar from '../Navbar/Navbar';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import './Home.css';
import PriceList from '../Pricelist/Pricelist.js';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <main>
        {/* Home Section */}
        <section id="home">
          <div className="home-container">
            <div className="home-content">
              <h1>Looking for a Professional Waxing Service?</h1>
              <p>
                Experience the best waxing services with Lavish Look. Book your appointment today for smooth and flawless skin.
              </p>
              <a href='https://api.whatsapp.com/send?phone=14372168449&text=Hello%2C%20I%27m%20Interested%20in%20your%20services.%20Can%20you%20tell%20me%20about%20....%3F%20'><button >Book Now</button></a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />
        <PriceList/>
        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
