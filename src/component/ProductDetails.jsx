import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ addToCart }) => {
  const location = useLocation();
  const { description, image, name, price } = location.state || {};

  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [rating] = useState(4.5);

  const colors = ["Black", "Blue", "Red", "Green", "Yellow"];

  const handleAddToCart = () => {
    const product = { name, description, image, price, quantity, selectedColor };

    if (typeof addToCart === "function") {
      addToCart(product);

      toast.success("Product added to cart successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.warn("Product not added to cart!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          {image && (
            <img
              src={image}
              alt={name}
              style={{ width: "100%", objectFit: "contain", height: "400px" }}
            />
          )}
        </div>

        <div className="col-md-6">
          <h2>{name}</h2>
          <p>{description}</p>
          <h4>₹{price}</h4>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-select"
              style={{ width: "100px" }}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Color:</label>
            <div>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`btn me-2 ${selectedColor === color ? "btn-dark" : "btn-outline-dark"}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <p>
            <strong>Selected Color: </strong> {selectedColor}
          </p>

          <div className="mb-3">
            <label className="form-label">Rating: </label>
            <div>
              {"⭐".repeat(Math.floor(rating))} {rating % 1 !== 0 && "⭐"} <span> ({rating}/5)</span>
            </div>
          </div>

          <button className="btn btn-dark" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
