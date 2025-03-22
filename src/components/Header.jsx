import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css"; // Import styles

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">🌿 Houseplant Haven</Link>
      </div>
      <nav className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
