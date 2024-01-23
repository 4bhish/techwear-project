import React, { useState } from "react";
import "./PageStyles/Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { clearCart } from "../features/CartSlice";
import ReturnAlertStyles from "../components/ReturnAlertStyles";

function Checkout() {
  const addresses = useSelector((state) => state.addresses);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [addressRadio, setAddressRadio] = useState(null);
  const [addressSelected, setAddressSelected] = useState(false);

  const [isOrderPlacing, setIsOrderPlacing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.discountPrice * product.quantity;
  }, 0);

  const orignalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const discountedPrice = orignalPrice - totalPrice;

  function handleOrderPlaced() {
    if (addressSelected) {
      setIsOrderPlacing(true);

      setTimeout(() => {
        setIsOrderPlacing(false);
        setIsOrderPlaced(true);

        dispatch(clearCart());
        toast.success(
          "Your order has been successfully placed!",
          ReturnAlertStyles()
        );

        navigate("/products");
      }, 2000);
    } else {
      toast.error(
        "Please select an address before placing the order.",
        ReturnAlertStyles()
      );
      navigate("/account-details");
    }
    setIsOrderPlaced(false);
  }

  console.log(addressSelected);
  return (
    <div className="checkout">
      <h3 className="checkout-heading">CHECKOUT</h3>
      <div className="checkout-container">
        <div className="addresses-container">
          {addresses.length >= 1 &&
            addresses.map((address) => (
              <div key={address.id} className="address-radio">
                <label htmlFor={address.name}>
                  <input
                    onChange={() => {
                      setAddressRadio(address);
                      setAddressSelected(true);
                    }}
                    type="radio"
                    name="address"
                    id={address.name}
                  />
                  <div>
                    <h3>{address.name}</h3>
                    <div>
                      <p>{`${address.house}, ${address.city}, -${address.postalCode}`}</p>
                      <p>Phone Number: {address.mobile}</p>
                    </div>
                  </div>
                </label>
              </div>
            ))}
        </div>
        <div className="order-details">
          <div className="order-details-heading">
            <h2>ORDER DETAILS</h2>
          </div>
          <div className="item-qty">
            <p>Item</p>
            <p>Qty</p>
          </div>
          <div className="order-details-item">
            <div className="list-items">
              {cart.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
            </div>
            <div className="list-qty">
              {cart.map((item) => (
                <p key={item.id}>{item.quantity}</p>
              ))}
            </div>
          </div>
          <div className="order-details-heading">
            <h2>PRICE DETAILS</h2>
          </div>
          <div className="price-breakdown">
            <div className="price-details-list">
              <p>Price({`${cart.length} items`})</p>
              <p>₹{orignalPrice.toLocaleString()}</p>
            </div>
            <div className="price-details-list">
              <p>Discount</p>
              <p>-₹{discountedPrice.toLocaleString()}</p>
            </div>
            <div className="price-details-list">
              <p>Delivery Charges</p>
              <p>FREE </p>
            </div>
          </div>
          <div className="price-details-total">
            <p>Total Amount</p>
            <p>₹{totalPrice.toLocaleString()} </p>
          </div>
          <div className="order-details-heading">
            <h2>DELIVER TO</h2>
          </div>
          {addressRadio && (
            <div className="address-section">
              <p>{addressRadio.name}</p>
              <p>{`${addressRadio.house}, ${addressRadio.city}, ${addressRadio.stateName} - ${addressRadio.postalCode}.`}</p>
              <p>Phone Number: {addressRadio.mobile}</p>
            </div>
          )}
          <div className="place-order">
            <button onClick={handleOrderPlaced}>Place Order</button>
          </div>
          {isOrderPlacing && (
            <div className="order-loading-overlay">
              <div className="order-loader">
                <h1>Placing Order ...</h1>
                <div className="dot-container">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
