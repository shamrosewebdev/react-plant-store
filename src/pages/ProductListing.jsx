import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductListing.css";
import { addToCart } from "../redux/CartSlice";

const ProductListing = ({ products, categories }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="products">
      <h2>Our Houseplants</h2>
      {categories.map((category) => (
        <div key={category} className="category">
          <h3>{category}</h3>
          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                const isInCart = cartItems.some((item) => item.id === product.id);

                return (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      disabled={isInCart}
                      className={isInCart ? "disabled-button" : ""}
                    >
                      {isInCart ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
