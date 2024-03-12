import 'react-toastify/dist/ReactToastify.css';

import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";


import Homepage from "./pages/Homepage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import AccountInfo from "./pages/AccountInfo";
import AuthReq from "./components/AuthReq";
import Products from "./pages/Products";
import CheckoutReq from "./components/CheckoutReq";
import Checkout from "./pages/Checkout";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";



function App() {

  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/wishlist"
          element={
            <AuthReq>
              <Wishlist />
            </AuthReq>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthReq>
              <Cart />
            </AuthReq>
          } 
        />
        <Route
          path="/account-details"
          element={
            <AuthReq>
              <AccountInfo />
            </AuthReq>
          }
        />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/checkout"
          element={
            <CheckoutReq>
              <Checkout />
            </CheckoutReq>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
