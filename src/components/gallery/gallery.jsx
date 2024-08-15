import React from 'react';
import './gallery.css';


import groceryStoreDesign from '../../assets/grocery-store-design-.jpg';
import hvacDesign from '../../assets/HVAC_Design_Convenience_Store.jpg';
import image1 from '../../assets/images.jpeg';
import image2 from '../../assets/imagess.jpeg';
import image3 from '../../assets/imagesss.jpeg';

const supermarkets = [
  { location: 'LATUR', imageUrl: groceryStoreDesign },
  { location: 'BARIPADA', imageUrl: hvacDesign },
  { location: 'RAJASTHAN', imageUrl: image1 },
  { location: 'KOLKATA', imageUrl: image2 },
  { location: 'NABRANGPUR', imageUrl: image3 },
  { location: 'BHOPAL', imageUrl: groceryStoreDesign },
];

const SupermarketGallery = () => {
  return (
    <div className="supermarket-gallery">
      <h2 className="gallery-title">Multiple Supermarket Franchise theme option</h2>
      <div className="gallery-grid">
        {supermarkets.map((supermarket, index) => (
          <div key={index} className="gallery-item">
            <img src={supermarket.imageUrl} alt={supermarket.location} className="gallery-image" />
            <div className="gallery-caption">
              <h3>G-FRESH {supermarket.location}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupermarketGallery;
