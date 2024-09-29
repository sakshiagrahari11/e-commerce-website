import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
     <div className="header-section">
        <h1>About Us</h1>
        <nav>
          <a href="/">Home</a> / <a href="/aboutus">About Us</a> 
        </nav>
      </div>
      <div className="container">
        <div className="title">
          <h4>About Us</h4>
        </div>
        <p className="text-justify">
          Alpha Silver is online store and wholesale dealer in India dealing in
          all Home Appliances With over 10,000 products and over a 1000 brands
          in our catalogue you will find everything you are looking for Right
          from TV, Washing Machine, Refrigerator, AC, Air Coolers, Audio
          Devices(Headphones/Speakers), Gas Stoves, Electric Stoves Etc..,
          Choose from a wide range of options in every category, exclusively
          handpicked to help you find the best quality available at the lowest
          prices. We will Deliver with In 24 hours. In case of any queries or
          further details feel free to write to Us on support@alphasilver.in
        </p>
      </div>
    </>
  );
}

export default AboutUs;
