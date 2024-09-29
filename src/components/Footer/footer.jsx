import React from "react";
import WebLogo from "../../assets/webLogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // CSS for Footer
import { useNavigate } from "react-router-dom";
import A7 from "../../assets/A7.png";
import A8 from "../../assets/A8.png";

function Footer() {
  const nav = useNavigate();
  const gotoHome = () => {
    nav("/");
  };
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section: Logo and Copyright */}

        <div className="footer-left">
          <div className="footer-logo">
            <img src={WebLogo} onClick={gotoHome} alt="Alpha Platinum Logo" />
          </div>
        </div>
        <h3 className="footer-title">Get to Know Us</h3>

        {/* Middle Section: Links */}
        <div className="footer-middle">
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Products</a>
            </li>
            <li>
              <a href="/login">Register</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
          <ul className="footer-links">
            <li>
              <a href="/seeall">Category</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="seller/login" className="highlight">
                Sellers
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media and App Links */}
        <div className="footer-right">
          <h3 className="footer-title">Connect with Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/Alphawizz.Technologies/" className="social-icons-fa">
              <FaFacebookF />
            </a>
            <a href="https://x.com/" className="social-icons-tw">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/alphawizz_technologies/?hl=en" className="social-icons-in">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" className="social-icons-yt">
              <FaYoutube />
            </a>
          </div>
          <div className="app-store-icons">
            <img src={A7} alt="App Store" className="store-icon" />
            <img src={A8} alt="Google Play" className="store-icon" />
          </div>
        </div>
      </div>

      {/* Bottom Section: Additional Links */}
      <div className="footer-bottom">
        <div className="bottom-left">
          <p>&copy; 2024, All Rights Reserved Alpha Platinum Private Limited</p>
        </div>
        <div className="bottom-right">
          <p>
            <a href="/">Home</a> 
            <a href="/termsconditions">Terms & Condition</a>{" "}
            <a href="/privacypolicy">Privacy Policy</a>{" "}
            <a href="/aboutus">About Us</a> 
            <a href="/contactus">Contact Us</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
