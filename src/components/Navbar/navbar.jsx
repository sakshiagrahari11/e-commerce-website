import React, { useEffect } from "react";
import axios from "axios";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom"; // Enable navigation
import "./Navbar.css"; // CSS file for styling

export default function Navbar() {
  const nav = useNavigate(); // useNavigate hook for navigation

  const gotoClothing = () => {
    nav("/clothing");
  };

  const gotoElectronics = () => {
    nav("/electronics");
  };

  const gotoHomekit = () => {
    nav("/homekit");
  };

  const gotoBeauty = () => {
    nav("/beauty");
  };

  const gotoGames = () => {
    nav("/games");
  };

  const gotoGrocery = () => {
    nav("/grocery");
  };

  const gotoBooks = () => {
    nav("/books");
  };
  const API =
    "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const res = await axios.post(url);
        const Products = res.data;
        console.log(Products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts(API);
  }, []);

  const gotoSeeAll = () => {
    nav("/seeall");
  };
  return (
    <>
      <div>
        <div className="navbar">
          <div className="nav-items">
            <div className="menuBarDiv">
              <button className="seeall" onClick={gotoSeeAll}>
                <AiOutlineMenu color="white" size="18px" />
                See All
              </button>
            </div>
            <button className="cloth" onClick={gotoClothing}>
              Clothing
            </button>
            <button className="electron" onClick={gotoElectronics}>
              Electronics
            </button>
            <button className="hok" onClick={gotoHomekit}>
              Home & Kitchen
            </button>
            <button className="beaper" onClick={gotoBeauty}>
              Beauty & Personal Care
            </button>
            <button className="game" onClick={gotoGames}>
              Toys & Games
            </button>
            <button className="gro" onClick={gotoGrocery}>
              Grocery & Gourmet Food
            </button>
            <button className="book" onClick={gotoBooks}>
              Books
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
