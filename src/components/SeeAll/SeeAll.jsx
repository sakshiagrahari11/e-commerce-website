import React, { useEffect, useState } from "react";
import "./SeeAll.css";
import axios from "axios";

export default function SeeAll() {
  let [product, setProduct] = useState([]);

  const API =
    "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const res = await axios.post(url);
        console.log(res.data.data, "data");
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts(API);
  }, []);
  return (
    <>
      <div className="category">
        <h2>CATEGORIES</h2>
        <div className="category-container">
          {product.map((value) => {
            return (
              <div className="category">
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
