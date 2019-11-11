import React from 'react';
import price from '../assets/static/servings.png';
import list from '../assets/static/list.png';
import clock from '../assets/static/time.png';
import cart from '../assets/static/cart.png';
import favoritesIcon from '../assets/static/favorites.png';
import featured from '../assets/static/loginImage.jpg';
import '../assets/styles/components/Item.scss';

const Item = () => (
    <div className="featured__item">
            <div className="featured__item--featured">
                <a href="#" className="featured__item--featured__link">
                    <h3 className="featured__item--featured__title">Pollo a la plancha</h3>
                    <img className="featured__item--featured__image" src={featured} alt="desayuno"/>
                </a>
            </div>
            <div className="featured-item__details">
                <div className="featured-item__details--resume">
                    <img src={price}/><span className="featured-item__details--resume_span">2500$ </span>
                    <img src={list}/><span className="featured-item__details--resume_span">5 </span>
                    <img src={clock}/><span className="featured-item__details--resume_span">30 min. </span>
                </div>
                <div className="featured-item__details--buttons">
                    <img className="featured-item__details--buttons--img" src={favoritesIcon} alt="Guardar en favoritos" />
                    <img className="featured-item__details--buttons--img" src={cart} alt="Comprar" />
                </div>
            </div>
            <div className="featured__item--description">
                <p className="featured__item--description--text">Deliciosa receta para toda la familia </p>
            </div>
        </div>
);

export default Item;