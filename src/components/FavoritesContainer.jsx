import React from 'react';
import '../assets/styles/components/FavoritesContainer.scss';

const FavoritesContainer = ({ children }) => (
    <section className="favorites">
        <h2 className="favorites__title">Mis favoritos</h2>
        {children}
    </section>
);
 export default FavoritesContainer;
