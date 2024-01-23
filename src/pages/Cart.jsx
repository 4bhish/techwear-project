import React from "react";
import "./PageStyles/Cart.css";

import {  useSelector } from "react-redux";

import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";



function Cart() {
  const cartProds = useSelector((state) => state.cart);

  const totalPrice = cartProds.reduce((accumulator, product) => {
    return accumulator + product.discountPrice * product.quantity;
  }, 0);

   const orignalPrice = cartProds.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

   const discountedPrice = orignalPrice - totalPrice
  return (
    <div className="cart-page">
      <h3 className="cart-page-heading">
        MY CART {cartProds.length >= 1 && <span>({cartProds.length})</span>}
      </h3>
      {cartProds.length <= 0 ? (
        <h1 className="empty-heading">Your Cart Is Empty ! ☹️</h1>
      ) : (
        <div className="cart-container">
          <div className="cart-list">
            {cartProds.map((cart) => (
              <CartCard key={cart.id} cart={cart}  />
            ))}
          </div>
          <div className="cart-bill-wrap">
            <div className="cart-bill-container">
              <h3 className="price-details-bill">Price Details</h3>
              <div className="bill-calc">
                <div>
                  <p>Price ({cartProds.length} items)</p>
                  <p>₹ {orignalPrice.toLocaleString()}</p>
                </div>
                <div>
                  <p>Discount </p>
                  <p>₹ {discountedPrice.toLocaleString()} </p>
                </div>
                <div>
                  <p>Delivery Charges</p>
                  <p>FREE</p>
                </div>
              </div>
              <div className="bill-total">
                <p>Total Amount</p>
                <p>₹ {totalPrice.toLocaleString()}</p>
              </div>
              <p className="discount-price">You will save ₹ {discountedPrice.toLocaleString()} on this order</p>
              <Link className="checkout-btn" to={'/checkout'}> Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
