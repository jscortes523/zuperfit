import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user.png';
import cart from '../assets/static/cart.png';

const Header = () => (
    <header className="header">
        <div className="header_logo">
            <a href="#"><img className="header_logo--img" src={logo} alt="ZuperFit"/></a>
        </div>
        <div className="header_profile">
            <div className="header_profile--cart">
                <a href="#" clasName="header_profile--option"><img src={cart} alt=""/></a>
            </div>
            <div className="header_profile--user">
                <a href="#" clasName="header_profile--option"><img src={userIcon} alt=""/></a>
            </div>
        </div>
    </header>
);

export default Header;