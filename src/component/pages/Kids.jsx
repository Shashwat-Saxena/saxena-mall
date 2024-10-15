import React from 'react'
import KidsProducts from '../Kids.js';
import Slider from '../Slider.jsx';
import Slider2 from '../Slider2.jsx';
import Card from '../Card.jsx';

const Kids = () => {
  return (
   <>
   <h1>Kids Section</h1>
   {/* <br /> */}
   {/* <hr /> */}
   <Slider/>
   <hr />
   <div className="container-home">
    <div className="row">
       {KidsProducts.map((product,index)=>(
        <Card product={product} key={index}/>
       ))}
    </div>
   </div>
   <hr />
   <Slider2/>
   </>
  )
}

export default Kids