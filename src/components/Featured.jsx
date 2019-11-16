import React from 'react';
import '../assets/styles/components/Featured.scss';

const Featured = ({ children }) => (
    <section className="featured">
        <h3  className="featured__title">Recomendación del día</h3>
        {children}
    </section>
    );

export default Featured;