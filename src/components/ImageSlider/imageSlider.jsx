


// components/ImageSlider.js
import A1 from "../../assets/A1.jpeg"
import A2 from "../../assets/A2.jpeg"
import A3 from "../../assets/A3.png"
// src/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import the CSS file for styling

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const images = [
    A1,
    A2,
    A3,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup on component unmount
    };
  }, [currentIndex]);

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ImageSlider;
