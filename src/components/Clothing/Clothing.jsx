import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Clothing.css";

export default function Clothing() {
  let nav = useNavigate();

  // State for product categories
  let [product, setProduct] = useState([]);

  // API to fetch categories
  const API =
    "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

  // Fetch categories on component mount
  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const res = await axios.post(url);
        setProduct(res.data.data[0].children); // Set fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts(API);
  }, []);

  // Navigation handlers
  let gotoHome = () => nav("/");
  let gotoProducts = () => nav("/category");
  let gotoClothing = () => nav("/clothing");

  return (
    <>
      {/* Breadcrumbs */}
      <div className="header-section">
        <h1>CLOTHING</h1>
        <nav>
          <a href="/">Home</a> / <a href="/seeall">Category</a> / Products
        </nav>
      </div>

      {/* Clothing Category Section */}
      <div className="clothings">
        <h2>CLOTHING CATEGORY</h2>

        {/* Dynamic Product Categories */}
        <div className="clothing-container">
          {product.map((value, index) => (
            <div key={index} className="clothing">
              <img src={value.image} alt={value.name} />
              <p>{value.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
