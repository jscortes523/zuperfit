import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user.png';

const Header = () => (
    <header className="header">
        <div className="header_logo">
            <a href="#"><img className="header_logo--img" src={logo} alt="ZuperFit"/></a>
        </div>
        <div className="header_profile">
            <a href="#"><img src={userIcon} alt=""/></a>
        </div>
    </header>
);

export default Header;