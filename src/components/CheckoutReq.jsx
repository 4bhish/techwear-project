import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

function CheckoutReq({children}) {
    const cart = useSelector(state => state.cart)
  return (
    cart.length >= 1 ? children : <Navigate to={'/products'} />
  );
}

export default CheckoutReq;
