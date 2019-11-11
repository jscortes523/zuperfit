import React from 'react';
import '../assets/styles/containers/NotFound.scss';
import emptyBox from '../assets/static/emptyBox.png';

const NotFound = () =>(
        <div className="container">
            <h2 className="container__title">
                !Lo sentimos!
            </h2>
            <h3 className="container__subtitle">
                No pudimos encontrar lo que buscabas
            </h3>
            <img src={emptyBox} alt="Artículo no encontrado"/>
        </div>
);

export default NotFound;