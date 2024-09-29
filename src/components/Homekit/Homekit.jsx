import React from "react";
import { useNavigate } from "react-router-dom";
import './Homekit.css';
export default function Homekit(){
    let nav= useNavigate()

    let gotoHome =()=>{
        nav("/")
    }
    let gotoProducts=()=>{
        nav("/category")
    }
    let gotoElectronics=()=>{
        nav("/homekit")
    }
    return(
<>


<div className="header-section">
        <h1>HOME & KITCHEN</h1>
        <nav>
          <a href="/">Home</a> / <a href="/seeall">Category</a> / Products
        </nav>
      </div>


<div className="homekit-container">
            <h2>HOME & KITCHEN CATEGORY</h2>
            <div className="homekit-items">
                <div className="homekit-item">
                    <img
                        src="https://alphasilver.productsalphawizz.com/uploads/media/2024/Bedding.jpg"
                        alt="Home & kitchen"
                        className="homekit-image"
                    />
                    <p>Home & Kitchen</p>
                </div>
            </div>
        </div>

    
</>
    );
}