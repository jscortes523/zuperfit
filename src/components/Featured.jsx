import React from 'react';
import { connect } from 'react-redux';
import { setFavorite } from '../actions';
import '../assets/styles/components/Featured.scss';
import priceIcon from '../assets/static/servings.png';
import list from '../assets/static/list.png';
import clock from '../assets/static/time.png';
import cart from '../assets/static/cart.png';
import favorites from '../assets/static/favorites.png';

const Featured = (props) => {
    const {id, title, images, price, prepTime, description} = props;
    const handleSetFavorite = () =>{
        props.setFavorite({
            id, title, images, price, prepTime, description
        })
        console.log(props)
    }

    return (
    <section className="featured">
        <h3  className="featured__title">Recomendación del día</h3>
        <div className="featured__item">
            <div className="featured__item--featured">
                <a href="#" className="featured__item--featured__link" onClick={e => {this.showModal()}}>
                    <h3 className="featured__item--featured__title">{title}</h3>
                    <img className="featured__item--featured__image" src={images} alt="desayuno"/>
                </a>
            </div>
            <div className="featured-item__details">
                <div className="featured-item__details--resume">
                    <img src={priceIcon}/><span className="featured-item__details--resume_span">{price}</span>
                    <img src={list}/><span className="featured-item__details--resume_span">5 </span>
                    <img src={clock}/><span className="featured-item__details--resume_span">{prepTime}</span>
                </div>
                <div className="featured-item__details--buttons">
                    <img className="featured-item__details--buttons--img" src={favorites} alt="Guardar en favoritos" onClick={handleSetFavorite}/>
                    <img className="featured-item__details--buttons--img" src={cart} alt="Comprar" />
                </div>
            </div>
            <div className="featured__item--description">
                <p className="featured__item--description--text">{description}</p>
            </div>
        </div>
    </section>
    );
};

const mapDispatchToProps = {
    setFavorite,
}

export default connect(null, mapDispatchToProps)(Featured);