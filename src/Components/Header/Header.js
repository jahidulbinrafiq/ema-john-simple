import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
//  ./ means currennt directory

// ../ ../ meand backtwo step floder
const Header = () => {
    return (
        <div className='header'>
          <img src={logo} alt=""/>
          <nav>
              <a href="/shop">Shop</a>
              <a href="/review">Order Revies</a>
              <a href="/manage">Manage Inventory</a>
          </nav>
        </div>
    );
};

export default Header;