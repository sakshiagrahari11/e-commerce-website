import React from "react";
import { useNavigate } from "react-router-dom";
import './Electronics.css';

export default function Electronics(){
let nav= useNavigate();

let gotoHome =()=>{
    nav("/");
}
let gotoProducts=()=>{
    nav("/categories");
}
let gotoElectronics=()=>{
    nav("/electronics");
}

    return(
<>
<div className="header-section">
        <h1>ELECTRONICS</h1>
        <nav>
          <a href="/">Home</a> / <a href="/seeall">Category</a> / Products
        </nav>
      </div>

<div className="electros">
        <h2>ELECTRONICS CATEGORY</h2>
      

      <div className="electro-container">
        <div className="electronic">
            <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/Computers_Accessories.jpeg" alt="Computers & Accessories" />
          <p>Computers & Accessories</p>
        </div>

        <div className="electronic">
            <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/TV_Video.jpeg" alt="TV & Video" />
          <p>TV & Video</p>
          </div>
          </div>
   
          </div>







</>
    );
}