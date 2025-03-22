import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/CartSlice";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">${item.price}</p>
              </div>
              <div className="cart-actions">
                <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <button className="checkout-button">Checkout (Coming Soon)</button>
      <Link to="/products" className="continue-shopping">Continue Shopping</Link>
    </div>
  );
};

export default ShoppingCart;
