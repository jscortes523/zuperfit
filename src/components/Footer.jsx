import React from 'react';
import '../assets/styles/components/Footer.scss';
import calendar from '../assets/static/calendar.png';
import favorites from '../assets/static/favorites.png';
import cart from '../assets/static/cart.png'

const Footer = () => (
    <footer className="footer">
        <div className="navbar">
            <div className="navbar__favorites">
                <a href="#"><img className="navbar__favorites--image" src={favorites} alt="favoritos"/></a>
            </div>
            <div className="navbar__calendar">
                <a href="#"><img src={calendar} alt="calendario" s="navbar__calendar--image"/></a>
            </div>
            <div className="cart">
                <a href="#"><img src={cart} alt="carrito" s="navbar__cart--image"/></a>
            </div>
        </div>
        <div className="navbar__copyright">
            <h3 className="navbar__copyright__title">ZuperFit 2019 - Todos los derechos reservados</h3>
        </div>
    </footer>
);
 export default Footer;