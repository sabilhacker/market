// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h3>
        <p>
        Discover a wide range of fresh, organic, and high-quality products that are handpicked to ensure you get the best. 
        </p>
      
      </div>
    </section>
  );
}
