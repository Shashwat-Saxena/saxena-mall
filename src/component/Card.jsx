import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  // Function to handle click and navigate to ProductDetails page
  const clickHandle = (image, name, description, price) => {
    navigate("/productDetails", {
      state: {
        image: image,
        name: name,
        description: description,
        price: price,
      },
    });
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div
        className="card"
        style={{ width: "100%" }}
        onClick={() => {
          clickHandle(
            product?.image,
            product?.name,
            product?.description,
            product?.price
          );
        }}
      >
        <img
          src={product?.image}
          className="card-img-top"
          alt={product?.name}
          style={{ height: "350px", width: "100%", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product?.name}</h5>
          <p className="card-text">{product?.description}</p>
          <p className="card-text">₹{product?.price}</p>

          <a href="/productDetails" className="btn btn-dark">
            Check In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
