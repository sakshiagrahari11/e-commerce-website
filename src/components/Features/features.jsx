import React from 'react';
import { FaShippingFast, FaUndoAlt, FaPhoneAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import './Features.css'; // Custom CSS for styling

function Features() {
  const features = [
    {
      title: 'Fast Shipping',
      description: 'Fast Shipping at your door step.',
      icon: <FaShippingFast />,
    },
    {
      title: 'Free Returns',
      description: 'Free return if products are damaged.',
      icon: <FaUndoAlt />,
    },
    {
      title: 'Support 24/7',
      description: '24/7 and 365 days support is available.',
      icon: <FaPhoneAlt />,
    },
    {
      title: 'Seller Login',
      icon: <FaSignInAlt />,
      link: 'seller/login', // Set the link to the Seller Login page
    },
  ];

  return (
    <div className="features-container">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-text">
              <h3 className="feature-title">
                {feature.link ? (
                  <Link to={feature.link} className="feature-link"> {/* Wrap title in Link */}
                    {feature.title}
                  </Link>
                ) : (
                  feature.title
                )}
              </h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
