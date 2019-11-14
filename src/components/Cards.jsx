import React from 'react';
import '../assets/styles/components/Cards.scss';

const Cards = ({ children }) => (
    <section className="favorites">
        <h2 className="favorites__title">Mis favoritos</h2>
        <div className="container__items">
            {children}
        </div>
    </section>
);

export default Cards;