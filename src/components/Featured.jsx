import React from 'react';
import '../assets/styles/components/Featured.scss';
import featured from '../assets/static/loginImage.jpg'

const Featured = () => (
    <section className="featured">
        <div className="featured__recipe">
            <span>Sugerencia del chef</span>
            <a href="#"><img className="featured__recipe--image" src={featured} alt="Sugerencia del chef"/>
            <h3 className="featured__recipe--title">Pechuga a la naranja y miel</h3>
            </a>
            <p className="featured__recipe--description">Esta deliciosa receta cuenta con pocos ingredientes y es ideal para toda la familia.</p>
        </div>
        
    </section>
);

export default Featured;