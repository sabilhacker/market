import React from 'react';
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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl text-center">
              <FontAwesomeIcon icon={feature.icon} className="text-green-700 text-4xl mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
