import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> The Laptop Specialist </h1>
        <p> SERVICE & SUPPORT</p>
        <Link to="/menu">
          <button> BOOK A SERVICE </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
