import React from 'react';
import ImageSlider from './components/ImageSlider/imageSlider';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Features from './components/Features/features';
import CategoryCarousel from './components/CategoryCarousel/CategoryCarousel';
import Product from './components/Product/product';


const HomePage = () => {
  return (
    <div>
      <ImageSlider />
      <CategoryCarousel />
      <Product />
      <DownloadApp />
      <Features />
    </div>
  );
};

export default HomePage;
