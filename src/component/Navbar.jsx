import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "./Navbar.css";
import Toggle from "../component/Toggle";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import Products from "./Data";
import MenProducts from "./MenData";
import Womenproducts from "./WomenData";
import KidsProducts from "./Kids";
import Accessoriesproducts from "./Accessories";

// import { LiaToggleOnSolid } from "react-icons/lia";

const Navbar = ({cartItemCount, setFilterdProducts}) => {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("loggedIn")) || {};

  const handleLogout = (e) => {
    e.preventDefault();
    // Clear user authentication data
    localStorage.removeItem("loggedIn");

    // Redirect to login page
    navigate("/login");
  };

  const [searchquery, setsearchQueary] = useState("");
  const allProducts=[
    ...Products,
    ...MenProducts,
    ...Womenproducts,
    ...KidsProducts,
    ...Accessoriesproducts,
  ];

  const handlesearch = () =>{
    const filterProucts= allProducts.filter((product)=> 
      product.name && product.name.toLowerCase().includes(searchquery.toLowerCase()) || 
    product.description && product.description.toLowerCase().includes(searchquery.toLowerCase()) || 
    product.price && product.price.toString().includes(searchquery))
    setFilterdProducts(filterProucts)

    console.log("search results:", filterProucts)
  }

  

 
  
  
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light sticky-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ color: "#102447" }}>
            <span style={{ fontFamily: "cursive" }}>Saxena's Mall</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ height: "100px;" }}
            >
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/men">
                  <a class="nav-link active" aria-current="page" href="#">
                    Men's
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/women">
                  <a class="nav-link active" aria-current="page" href="#">
                    Women's
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Accessories">
                  <a class="nav-link active" aria-current="page" href="#">
                    Accessories
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Kids">
                  <a class="nav-link active" aria-current="page" href="#">
                    Kids
                  </a>
                </Link>
              </li>
              {/* <div className="toogle"><Toggle/></div> */}
            </ul>
            <form class="d-flex" role="search">
              <div className="input-group">
                <input
                  class="form-control me-2"
                  style={{
                    border: "2px solid #102447",
                    color: "#102447",
                    width: "400px",
                    position: "relative",
                    marginRight: "0rem",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    borderRight: "none",
                  }}
                  type="search"
                  placeholder="Search items.........."
                  aria-label="Search"
                  // searchquery={searchquery}
                  // setsearchQueary={setsearchQueary}
                  value={searchquery}
                  onChange={(e)=> setsearchQueary(e.target.value)}
                />
                
                <div
                  className="search-icon"
                  style={{
                    border: "2px solid #102447",
                    width: "1.8rem",
                    height:'2.4rem',
                    borderLeft: "none",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                    marginRight: ".2rem",
                    cursor: "pointer",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <h6>
                    <i
                      class="fa-solid fa-magnifying-glass"
                      onClick={handlesearch}
                      style={{ marginTop: "8px", fontSize: "20px", }}
                    ></i>
                  </h6>
                </div>

                {data.email ? (
                  <h4>
                    <i
                      onClick={handleLogout}
                      className="fa fa-sign-out"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginTop: "8px",
                        marginRight: "2rem",
                        color: "#102447",
                      }}
                    ></i>
                  </h4>
                ) : (
                  <Link to="/Login">
                    <h4>
                      <i
                        className="fa-regular fa-user"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          marginTop: "8px",
                          marginRight: "2rem",
                          color: "#102447",
                        }}
                      ></i>
                    </h4>
                  </Link>
                )}
              </div>
              <Link to='/cart'>  <span className="badge bg-secondary ms-1">{cartItemCount}</span> <h4 style={{cursor:'pointer', fontSize:'25px'}} > <PiShoppingCartSimpleDuotone  /> </h4></Link>
             
             
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
