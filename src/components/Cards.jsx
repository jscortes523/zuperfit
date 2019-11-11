import React from 'react';
import '../assets/styles/components/Cards.scss';

const Cards = ({ children }) => (
        <div className="container__items">
            {children}
        </div>
);

export default Cards;