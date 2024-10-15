import React from "react";
import Slider from "../Slider";
import Card from "../Card.jsx";

import MenProducts from "../MenData.js";
import Slider2 from "../Slider2";

const Men = () => {
  return (
    <>
      <h1>Men Section</h1>
      <Slider />
      <hr />
      <div className="container-home">
        <div className="row">
          {MenProducts?.map((product, index) =>(
            <Card product={product} key={index}  />
          ))}
        </div>
      </div>
      <hr />
      {/* <HomeCart/> */}
      <Slider2 />
      <hr />
    </>
  );
};

export default Men;
