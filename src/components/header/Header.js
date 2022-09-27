import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-container'>
                <img src={logo} alt="" />
                <div className='nav-item'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;