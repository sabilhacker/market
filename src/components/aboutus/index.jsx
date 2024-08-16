import React from 'react';
import groceryMarketImage from '../../assets/grocery-hero.jpg'; // Replace with your image path

const AboutUs = () => {
  return (
    <section className="bg-white py-10 px-6 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <img src={groceryMarketImage} alt="Grocery Market" className="rounded-lg shadow-lg w-full h-auto max-w-md" />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center lg:text-left">
            About Village Fresh Mart
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center lg:text-left">
            Village Fresh Mart is a supermarket franchise that emphasizes fresh and high-quality products, with a focus on community-oriented service.
          </p>
          <ul className="list-none space-y-6">
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-4">✔</span>
              <p className="text-lg text-gray-700">
                Fresh Produce and Groceries: A wide range of fresh fruits, vegetables, and staple grocery items. We often highlight local and seasonal produce.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-4">✔</span>
              <p className="text-lg text-gray-700">
                Deli and Bakery Products: Freshly baked bread, pastries, and a selection of deli meats and cheeses.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-4">✔</span>
              <p className="text-lg text-gray-700">
                Health and Wellness Products: Organic and natural food options, including dietary supplements and health-focused products.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-4">✔</span>
              <p className="text-lg text-gray-700">
                Community Engagement: Programs or events that engage with the local community, supporting local farmers and businesses.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-4">✔</span>
              <p className="text-lg text-gray-700">
                Franchise Support: Comprehensive training and ongoing support for franchisees, including operational guidance, marketing strategies, and supply chain management.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-4">✔</span>
              <p className="text-lg text-gray-700">
                Technology Integration: Advanced point-of-sale systems and inventory management tools to streamline operations and improve efficiency.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-4">✔</span>
              <p className="text-lg text-gray-700">
                Store Design and Layout: A focus on creating a welcoming and customer-friendly shopping environment with an emphasis on cleanliness and organization.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
