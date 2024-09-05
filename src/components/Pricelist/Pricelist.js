import React from 'react';
import './Pricelist.css';

const PriceList = () => {
  const services = [
    { name: 'Body waxing', price: '$60' },
    { name: 'Brazilian waxing', price: '$35' },
    { name: 'Massages', price: '$60' },
    { name: 'Hair Oil Massage', price: '10 minutes - $10, 20 minutes - $15' },
    { name: 'Brow Tinting', price: '$30' },
    { name: 'Lash Tinting', price: '$20' },
    { name: 'Upper Lips', price: '$3' },
    { name: 'Full Face Waxing', price: '$17' },
    { name: 'Brow Waxing', price: '$10' },
    { name: 'Deep Bikini', price: '$20' },
    { name: 'Bikini Line', price: '$10' },
    { name: 'In-Between The Cheeks', price: '$10' },
    { name: 'Buttocks', price: '$20' },
    { name: 'Nose', price: '$7' },
    { name: "Nature's Facial", price: '$35' },
    { name: "Cheryl's Facial", price: '$40' },
    { name: 'N+ Professional Facial', price: '$50' },
    { name: 'Nandini Herbal Facial', price: '$50' },
    { name: 'Clean-Up', price: '$30' },
    { name: 'Full Hands Waxing', price: '$15' },
    { name: 'Full Back Waxing', price: '$15' },
    { name: 'Chin waxing', price: '$6' },
    { name: 'Eyebrow waxing', price: '$10' },
    { name: 'Foot hair removal', price: '$5' },
    { name: 'Half legs', price: '$15 (Upper or Lower legs)' },
    { name: 'Full legs', price: '$25' },
    { name: 'Stomach hair removal', price: '$15' },
    { name: 'Underarms Waxing', price: '$7' },
  ];

  return (
    <div className="price-list">
      <h2>Service Price List</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <span className="service-name">{service.name}</span>
            <span className="service-price">{service.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;