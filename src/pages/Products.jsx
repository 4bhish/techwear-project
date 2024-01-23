import React, { useEffect, useState } from "react";
import "./PageStyles/Products.css";

import { fakeFetch } from "../fakeFetch";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router";

function Products() {
  const location = useLocation();
  const [loadingStatus, setLoadingStatus] = useState(false);

  const [productsData, setProductsData] = useState([]);

  const [userPrice, setUserPrice] = useState(15000);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [sorting, setSorting] = useState("high-to-low");

  const [userRating, setUserRating] = useState(null);

  const fetchProducts = async () => {
    setLoadingStatus(true);
    try {
      
      const searchParams = new URLSearchParams(location.search);
      const categoryParam = searchParams.get('category');

      setSelectedCategories(categoryParam ? [categoryParam] : []);

      const response = await fakeFetch(`/products/wears`);
      setProductsData(response.data);

    } catch (e) {
      console.error(e);
    }
    setLoadingStatus(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleCheckboxChange(category) {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  }

  const combinedFilteredProducts = productsData.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      parseInt(product.discountPrice) < userPrice &&
      (userRating === null || product.rating > parseInt(userRating))
  );

  const sorted = combinedFilteredProducts.sort((a, b) =>
    sorting === "high-to-low"
      ? b.discountPrice - a.discountPrice
      : a.discountPrice - b.discountPrice
  );

  function handleClear() {
    setUserPrice(15000);
    setSelectedCategories([]);
    setSorting("high-to-low");
    setUserRating(null);
  }
  return loadingStatus ? (
    <div className="loading-overlay">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="productspage">
      <div className="filter-section">
        <div className="filter-container">
          <div className="filter-section-heading">
            <h3>Filter</h3>
            <p onClick={handleClear}>Clear</p>
          </div>
          <div className="price-section">
            <h3>
              Price: (<small> below: &#8377; {userPrice}</small>)
            </h3>
            <input
              type="range"
              min={3000}
              max={15000}
              step={1}
              onChange={(e) => setUserPrice(e.target.value)}
              value={userPrice}
            />
          </div>
          <div>
            <h3>Category</h3>
            <label htmlFor="urban">
              <input
                type="checkbox"
                id="urban"
                checked={selectedCategories.includes("urban")}
                onChange={() => handleCheckboxChange("urban")}
              />
              Urban
            </label>
            <label htmlFor="military">
              <input
                type="checkbox"
                id="military"
                checked={selectedCategories.includes("military")}
                onChange={() => handleCheckboxChange("military")}
              />
              Military
            </label>
            <label htmlFor="jackets">
              <input
                type="checkbox"
                id="jackets"
                checked={selectedCategories.includes("jackets")}
                onChange={() => handleCheckboxChange("jackets")}
              />
              Jackets
            </label>
          </div>
          <div>
            <h3>Ratings</h3>
            <label htmlFor="five-rating">
              <input
                type="radio"
                id="five-rating"
                name="rating"
                checked={userRating === "4"}
                value={4}
                onChange={(e) => setUserRating(e.target.value)}
              />
              4+ Ratings
            </label>
            <label htmlFor="four-rating">
              <input
                type="radio"
                id="four-rating"
                name="rating"
                checked={userRating === "3"}
                value={3}
                onChange={(e) => setUserRating(e.target.value)}
              />
              3+ Ratings
            </label>
            <label htmlFor="three-rating">
              <input
                type="radio"
                id="three-rating"
                name="rating"
                checked={userRating === "2"}
                value={2}
                onChange={(e) => setUserRating(e.target.value)}
              />
              2+ Ratings
            </label>
          </div>
          <div className="sort-filter">
            <h3>Sort By</h3>
            <select
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="high-to-low">Price- high-to-low</option>
              <option value="low-to-high">Price- low-to-high</option>
            </select>
          </div>
        </div>
      </div>
      <div className="products-container">
        <h3>
          Showing All Products{" "}
          <small style={{ fontSize: "1.4rem", fontWeight: "400" }}>
            ({sorted.length})
          </small>
        </h3>
        <div className="products-list">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
