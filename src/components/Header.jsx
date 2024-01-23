import React from 'react';
import headerbg from '../assets/headerbg.png'
import './styles/header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-left">
          <h1>Power <br />Your Fashion</h1>
          <p>Elevate your style, transcend boundaries – where innovation meets fashion in every thread.</p>
          <Link to={'/products'} className="header-btn-container">
          <button>See Products</button>
          </Link>
        </div>
        <div className="header-right">
          <img src={headerbg} alt='bg-header' />
        </div>
      </div>
    </div>
  );
}

export default Header;
