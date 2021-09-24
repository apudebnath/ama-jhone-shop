import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="" className="logo"/>
           <nav>
               <a href="/Shop">Shop</a>
               <a href="/Order Review">Order Review</a>
               <a href="/Manage Inventokry here">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Header;