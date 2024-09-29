import React, { useEffect, useState } from "react";
import axios from "axios";
import './product.css'; // Import the CSS file

export default function Product() {
  let [product, setProduct] = useState([]);

  const API = "https://alphasilver.productsalphawizz.com/app/v1/api/get_sections";


  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const res = await axios.post(url);
        console.log(res.data.data, "data");
        setProduct(res.data.data[0].product_details);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts(API);
  }, []);

  return (
    <>
    
      {product.map((value) => {
        return (
          <>

          <div className="grocery" key={value.id}>
            <img src={value.image} alt={value.name} />
            <p>{value.name}</p>
          </div>
          </>
        );
      })}
    </>
  );
}
