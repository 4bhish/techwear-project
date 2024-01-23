import React, { useContext } from "react";
import "./styles/ProductCard.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";
import { Navigate, useLocation, useNavigate } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../features/WishlistSlice";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useContext(AuthProvider);
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const itemExist = cart.find((item) => item.id === product.id);
  const itemExistInwishlist = wishlist.find((item) => item.id === product.id);

  const location = useLocation()

  
  function handleAddToCart() {
    if (user) {
      dispatch(addToCart(product));
    } else {
      navigate("/loginpage", { state: { from: location } });
    }
  }
  
  

  

  function handleAddToWishlist(){
    if (user) {
      dispatch(addToWishlist(product))
    } else {
      navigate("/loginpage", { state: { from: location } });
    }
  }

  // function handleAddToWishlist() {
  //   user ? dispatch(addToWishlist(product)) : navigate("/loginpage");
  // }

  

  function handleRemoveFromWishlist(){
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <div className="product-card">
      <div className="card-heading-container">
        <h3>{product.title}</h3>
        <div title="Add to wishlist" className="wishlist-icon-container">
          {itemExistInwishlist ? (
            <FavoriteIcon onClick={() => handleRemoveFromWishlist()} className="wishlist-icon"/>
          ) : (
            <FavoriteBorderIcon
              onClick={() => handleAddToWishlist()}
              className="wishlist-icon"
            />
          )}
        </div>
      </div>
      <img src={product.imgSrc} alt={product.title} />
      <div className="card-bottom">
        <div className="card-price">
          <p>{product.discountPrice}</p>
          <p>{product.price}</p>
        </div>
        <div className="add-cart-btn">
          {itemExist ? (
            <button>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/cart"
              >
                Go to Cart
              </Link>
            </button>
          ) : (
            <button onClick={() => handleAddToCart()}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
