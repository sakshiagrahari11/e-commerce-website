// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import ImageSlider from "./components/ImageSlider/imageSlider";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Footer from "./components/Footer/footer";
import Features from "./components/Features/features";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellerDashboard from "./components/SellerDashboard/SellerDashboard";
import SellerLogin from "./components/SellerLogin/SellerLogin";
import Header from "./components/Header/header";
import HomePage from "./HomePage";
import CategoryCarousel from "./components/CategoryCarousel/CategoryCarousel";
import TogglePage from "./components/TogglePage/TogglePage";
import Clothing from "./components/Clothing/Clothing";
import Electronics from "./components/Electronics/Electronics";
import Homekit from "./components/Homekit/Homekit";
import Beauty from "./components/Beauty/Beauty";
import Games from "./components/Games/Games";
import Books from "./components/Books/Books";
import Grocery from "./components/Grocery/Grocery";
import SeeAll from "./components/SeeAll/SeeAll";
import AboutUs from "./components/AboutUs/aboutUs";
import Product from "./components/Product/product";
import ContactUs from "./components/ContactUs/contactUs";
import TermsConditions from "./components/TermsConditions/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Add route for login */}
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <CategoryCarousel />
              <Product />
              <DownloadApp />
              <Features />
            </>
          }
        />
        <Route path="/login" element={<TogglePage />} />{" "}
        {/* Add route for login */}
        <Route path="/seeall" element={<SeeAll />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/homekit" element={<Homekit />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/games" element={<Games />} />
        <Route path="/books" element={<Books />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/termsconditions" element={<TermsConditions />}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}/>


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
