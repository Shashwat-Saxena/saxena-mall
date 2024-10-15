import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              We are an e-commerce platform providing the best quality products at affordable prices. Our mission is customer satisfaction.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 ">
            <h5>Quick Links</h5>
            <ul className="list-unstyled " style={{display:'flex', flexDirection:'column', justifyContent:'center' , alignContent:'center'}}>
              <li><a href="/">Home</a></li>
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Womens</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/accessories">Accessories</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: shashwatsaxena603@gmail.com</li>
              <li>Phone: 9045746093</li>
              <li>Address: Block F, Rajajipuram, Lucknow </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <p>&copy; {new Date().getFullYear()} Shashwat_Lucknowi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Inline Styles for Footer (optional)
const footerStyle = {
  backgroundColor: "#343a40",
  color: "#fff",
  padding: "40px 0",
  position: "relative",
  bottom: "0",
  width: "100%",
};

export default Footer;
