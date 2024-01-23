import React from "react";
import './styles/CartCard.css'
import { useDispatch, useSelector } from "react-redux";
import {addQty, removeFromCart, removeQty} from '../features/CartSlice.jsx'
import { Link } from "react-router-dom";
import { addToWishlist } from "../features/WishlistSlice.jsx";

function CartCard({ cart }) {

  const wishlist = useSelector(state => state.wishlist)
  const wishlistItem = wishlist.find(item => item.id === cart.id)

  const dispatch = useDispatch()

  function removeItemFromCart(id){
    dispatch(removeFromCart(id))
  }

  function moveToWishlist(prod){
    dispatch(addToWishlist(prod))
    dispatch(removeFromCart(prod.id))
  }

  function addQuantity(id){
    dispatch(addQty(id))
  }
 
  function removeQuantity(id){
    dispatch(removeQty(id))
  }

  
  return (
    <div className="cart-card">
      <div className="cart-card-upper">
        <img src={cart.imgSrc} alt={cart.imgSrc} />
        <div className="cart-card-details">
          <h3>{cart.title}</h3>
          <p className="desc">{cart.description}</p>
          <div className="cart-price-details">
            <p>{cart.discountPrice}</p>
            <p>{cart.price}</p>
          </div>
          <div className="qty-actions">
            <button  onClick={() =>removeQuantity(cart.id)} disabled={cart.quantity <= 1} className="qty-action">
              -
            </button>
            <p>{cart.quantity}</p>
            <button className="qty-action" onClick={()=> addQuantity(cart.id)}>+</button>
          </div>
        </div>
      </div>
      <div className="cart-card-lower">
        <button onClick={() => removeItemFromCart(cart.id)}className="cart-actions">REMOVE</button>
        {
          wishlistItem ? <button className="cart-actions"><Link style={{textDecoration:'none',color:'inherit'}} to={'/wishlist'}>ALREADY IN WISHLIST</Link></button> : <button onClick={() => moveToWishlist(cart)} className="cart-actions">MOVE TO WISHLIST</button>
        }
      </div>
    </div>
  );
}

export default CartCard;
