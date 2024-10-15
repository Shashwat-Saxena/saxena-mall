// CartPage.js
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. please go to shopping</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-3">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "250px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">₹{item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <button className="btn btn-dark" onClick={()=> removeFromCart(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="btn btn-dark">Continue Shopping</Link>
    </div>
  );
};

export default Cart;
