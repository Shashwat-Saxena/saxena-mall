import React from "react";
import Slider from "../Slider.jsx";
import Products from "../Data.js";
import Slider2 from "../Slider2.jsx";
import Card from "../Card.jsx";

const Home = () => {
  return (
    <>
      <h1 style={{ float: "left" }}>Welcome to Our Store </h1>
      <Slider />
      <hr />
      <div className="container-home">
        <div className="row">
          {Products.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </div>
      </div>
      <Slider2 />
    </>
  );
};

export default Home;
