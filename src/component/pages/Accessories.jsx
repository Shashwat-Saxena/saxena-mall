import React from "react";
import Accessoriesproducts from "../Accessories.js";
import Slider from "../Slider.jsx";
import Slider2 from "../Slider2.jsx";
import Card from "../Card.jsx";
// import Accessoriesproducts from '../Accessories.js'; // Make sure this import path is correct

const Accessories = () => {
  return (
    <>
      <h1>Accessories Section</h1>
      <Slider />
      <div className="container-home">
        <div className="row">
          {Accessoriesproducts.map((product, index) => {
            return <Card product={product} key={index} />;
          })}
        </div>
      </div>
      <Slider2 />
    </>
  );
};

export default Accessories;
