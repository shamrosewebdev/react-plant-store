import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Green Haven</h1>
        <p>Discover a variety of houseplants to bring nature into your home.</p>
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
