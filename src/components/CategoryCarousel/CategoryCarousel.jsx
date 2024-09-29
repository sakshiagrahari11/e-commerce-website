// CategoryCarousel.js
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CategoryCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import C1 from "./Category/C1.jpeg"
import C2 from "./Category/C2.jpeg"
import C3 from "./Category/C3.jpeg"
import C4 from "./Category/C4.jpeg"
import C5 from "./Category/C5.jpeg"
import C6 from "./Category/C6.jpeg"
import C7 from "./Category/C7.jpeg"
import C8 from "./Category/C8.jpeg"
import C9 from "./Category/C9.jpeg"
import C10 from "./Category/C10.jpeg"
import C11 from "./Category/C11.jpeg"
import C12 from "./Category/C12.jpeg"


const categories = [
    { image: C1, title: 'Clothing' },
    { image: C2, title: 'Electronics' },
    { image: C3, title: 'Home & Kitchen' },
    { image: C4, title: 'Beauty & Personal Care' },
    { image: C5, title: 'Toys & Games' },
    { image: C6, title: 'Grocery & Gourmet Food' },
    { image: C7, title: 'Books' },
    { image: C8, title: 'Fitness' },
    { image: C9, title: 'Health & Personal Care' },
    { image: C10, title: 'Stationery' },
    { image: C11, title: 'Mobiles' },
    { image: C12, title: 'Women Jewellery' },

];

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#00a19d", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#00a19d", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const CategoryCarousel = () => {
  const [product, setProduct] = useState([]);
  // const nav = useNavigate();

  const API = "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const res = await axios.post(url);
        console.log(res.data.data, "dataaaaaaaaaa");
        setProduct(res.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts(API);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="category-carousel">
                <h2>Category</h2>
                 <Slider {...settings}>
                     {categories.map((category, index) => (
                         <div key={index} className="category-item">
                             <div className="category-image-wrapper">
                                 <img src={category.image} alt={category.title} className="category-image" />
                             </div>
                             <h3>{category.title}</h3>
                         </div>
                     ))}
                 </Slider>
             </div>
       
  );
};

export default CategoryCarousel;
