import React from "react";
import './styles/WishlistCard.css'

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/WishlistSlice";
import { addToCart } from "../features/CartSlice";
import { Link } from "react-router-dom";


function WishlistCard({ wishlist }) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)


    function handleRemoveFromWishlist(id){
        dispatch(removeFromWishlist(id))
    }

    function handleMoveToCart(prod){
        dispatch(addToCart(prod))
        dispatch(removeFromWishlist(prod.id))
    }
    const itemExist = cart.find((item) => item.id === wishlist.id);
  return (
    <div className="wishlist-card">
      <img src={wishlist.imgSrc} alt="" />
      <div className="wishlist-details-body">
        <div className="upper-body">
          <div className="title-desc">
            <h3>{wishlist.title}</h3>
            <p>{wishlist.description}</p>
            <div className="wishlist-price">
                <p>{wishlist.discountPrice}</p>
                <p>{wishlist.price}</p>
            </div>
          </div>
          <div className="delete-container">
            <DeleteOutlineOutlinedIcon onClick={() => handleRemoveFromWishlist(wishlist.id)} className="delete-icon" />
          </div>
        </div>
        {
            itemExist ? <button className="btn-wishlist"><Link className="cart-link" to={'/cart'}>Already in Cart</Link></button>  : <button onClick={() => handleMoveToCart(wishlist)} className="btn-wishlist">Move to Cart</button>
        }
      </div>
    </div>
  );
}

export default WishlistCard;
