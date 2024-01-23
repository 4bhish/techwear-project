import React from "react";
import "./PageStyles/Homepage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <div className="category-heading">
        <div className="category-heading-container">
          <h1>Hot off the press</h1>
          <p>The latest varieties from The Weartech.</p>
        </div>
      </div>
      <div className="categories-container">
        <div className="category-box">
          <div className="category-image-container">
            <Link to="/products?category=urban">
              <img
                src="https://clottech.com/cdn/shop/products/11a_550x.jpg?v=1634293610"
                alt="1634293610"
              />
              <div className="overlay">
                <h2>Urban Wears</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="category-box">
          <div className="category-image-container">
            <Link to="/products?category=military">
              <img
                src="https://clottech.com/cdn/shop/products/1_99eff83f-59c3-42ca-99e9-87271372617d_550x.jpg?v=1634466122"
                alt="1634466122"
              />
              <div className="overlay">
                <h2>Military Wears</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="category-box">
          <div className="category-image-container">
            <Link to="/products?category=jackets">
              <img
                src="https://clottech.com/cdn/shop/products/1_b5d5dfff-d4c4-4459-8400-a071faefa342_550x.jpg?v=1634208790"
                alt=""
              />
              <div className="overlay">
                <h2>Techwear Jackets</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
