import React from 'react';
// import womenproducts from '../WomenData.js';
// import Womenproducts from '../WomenData.js';
import Womenproducts from '../WomenData.js';
import Slider from '../Slider';
import Slider2 from '../Slider2';
import Card from '../Card.jsx';
const Women = () => {
    console.log("Women Products:" ,Womenproducts)
  return (
    <>
     <h1>Women Section</h1>
    
    <Slider/>
    <hr/>
    <div className="container-home">
        <div className="row">
           {Womenproducts.map((product,index)=>(
            <Card product={product} key={index}  />
           ))}
        </div>
    </div>
      <hr/>
    {/* <HomeCart/> */}
    
    <Slider2/>
    <hr />
    </>
  )
}

export default Women;