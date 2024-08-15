import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faLaptopCode, faCalculator, faMoneyBillWave, faGlobe, faBullhorn, faReceipt, faTools, faChalkboardTeacher, faUserTie, faTags, faGift } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: "45 Days Store Opening Guarantee",
    description: "We offer the quickest & quality service across PAN India...",
    icon: faCalendarCheck
  },
  {
    title: "Advance Billing Software",
    description: "You’ll get the Most advanced cloud technology based Billing software...",
    icon: faLaptopCode
  },
  {
    title: "Free Accounting Service",
    description: "You’ll get FREE Accounting Service for the next 3 months...",
    icon: faCalculator
  },
  {
    title: "Zero Royalty",
    description: "We don’t ask any royalty fee from you for next 3 months...",
    icon: faMoneyBillWave
  },
  {
    title: "Free Premium Website",
    description: "You’ll get a premium-looking website for your business...",
    icon: faGlobe
  },
  {
    title: "FREE Digital Marketing",
    description: "When you chose G-Fresh Mart over any franchise you’ll get FREE service...",
    icon: faBullhorn
  },
  {
    title: "Offline Promotion",
    description: "Not only online but also we’ll promote your business offline...",
    icon: faReceipt
  },
  {
    title: "Backend Purchase Entry Support",
    description: "You’ll get complete support from our team to manage...",
    icon: faTools
  },
  {
    title: "Lifetime FREE Software Training",
    description: "You’ll get lifetime access to our premium software training for free...",
    icon: faChalkboardTeacher
  },
  {
    title: "Staff Hiring",
    description: "G-Fresh Mart will hire staff for your store and also train them...",
    icon: faUserTie
  },
  {
    title: "Premium Branding",
    description: "G-Fresh Mart has the perfect solution to make your store stand out...",
    icon: faTags
  },
  {
    title: "FREE G-Fresh Kit",
    description: "And finally a KIT from G-Fresh company as a complimentary GIFT...",
    icon: faGift
  }
];

const Features = () => {
  return (
    <div className="features-grid">
      <div className="container">
        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
