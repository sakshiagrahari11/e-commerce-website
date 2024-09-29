import { useNavigate } from "react-router-dom";
import "./Beauty.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Beauty() {
  let nav = useNavigate();

  let [product, setProduct] = useState([]);

  const API =
    "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const res = await axios.post(url);
        console.log(res.data.data, "data");
        setProduct(res.data.data[3].children);
        console.log(res.data.data[3]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts(API);
  }, []);

  

  return (
    <>
      <div className="header-section">
        <h1>BEAUTY & PERSONAL CARE</h1>
        <nav>
          <a href="/">Home</a> / <a href="/seeall">Category</a> / Products
        </nav>
      </div>
      <div className="beauty-container">
        <h2>BEAUTY & PERSONAL CARE CATEGORY</h2>
        <div className="beauty-items">
          {product.map((value) => {
            return (
              <div className="beauty-item">
                <img src={value.image} alt={value.name} />
                <p>{value.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
