import React from "react";
import WebLogo from "../../assets/webLogo.png";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"; // Import icons from react-icons
import "./Header.css"; // CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [query, setQuery] = useState('');
  const nav = useNavigate();

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`);
  };

  const gotoHome = () => {
    nav("/");
  };
  return (
    <header className="header-container">
      <div className="logo">
        <img src={WebLogo} onClick={gotoHome} alt="Alpha Platinum Logo" />
      </div>
      <form onSubmit={handleSearch} className="search-bar">
              <input
                type="search"
                placeholder="Search for products"
                value={query}
                onInput={handleInput}
                id="search"
              />
              {/* <button type="submit" className="search-button"> */}
              <FaSearch color="#dcdcdc" size="20px" />
              {/* </button> */}
            </form>
    

      <div className="header-icons">
          {" "}
          {/* Use Link for navigation */}
          <a href="/login" className="login-btn">
            Login
          </a>
        <a href="#" className="wishlist-icon">
          <FaHeart color="#49A6A2" size="20px" />
        </a>{" "}
        {/* Use React Icon for heart */}
        <a href="#" className="cart-icon">
          <FaShoppingCart color="#49A6A2" size="20px" />
        </a>{" "}
        {/* Use React Icon for shopping cart */}
      </div>
    </header>
  );
};

export default Header;
