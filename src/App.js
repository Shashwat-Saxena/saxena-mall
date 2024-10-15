import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import Men from "./component/pages/Men";
import Women from "./component/pages/Women";
import Kids from "./component/pages/Kids";
import Accessories from "./component/pages/Accessories";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivateComponent from "./component/pages/PrivateComponent";
import ProductDetails from "./component/ProductDetails";
import Admin from "./component/pages/Admin";
import Cart from './component/Cart';

const App = () => {
  const [cartItems, setcartItems]= useState([])
  const [filterdProducts, setfilteredProducts] = useState([])

  const addToCart =(product) =>{
    setcartItems((cartItems)=>[...cartItems, product])
  }

  const removeFromCart = (index) => {
    const updateCart = cartItems.filter((item,i)=> i !== index);
    setcartItems(updateCart)
  }
  return (
    <>
      <ToastContainer />
      <Navbar cartItemCount={cartItems.length} setFilterdProducts={setfilteredProducts} />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/" element={<Home filterdProducts={filterdProducts} />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/productDetails" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
      </Routes>
      <hr />
      <Footer />
    </>
  );
};

export default App;
