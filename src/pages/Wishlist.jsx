import React from "react";
import "./PageStyles/wishlist.css";

import { useSelector } from "react-redux";
import WishlistCard from "../components/WishlistCard";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="wishlist-page">
      <h3 className="my-wishlist-heading">
        MY WISHLIST {wishlist.length >= 1 && <span>({wishlist.length})</span>}
      </h3>
      {wishlist.length < 1 ? (
        <h1 className="wishlist-heading">Your Wishlist Is Empty ! ☹️</h1>
      ) : (
        <div className="wishlist-container">
          {
            wishlist.map(product => <WishlistCard key={product.id} wishlist={product}/> )
          }
        </div>
      )}
    </div>
  );
}

export default Wishlist;
