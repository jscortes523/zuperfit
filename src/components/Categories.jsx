import React from 'react';
import '../assets/styles/components/Categories.scss';
import breakfast from '../assets/static/breakfast.jpg';
import lunch from '../assets/static/lunch.jpg';
import fastfood from '../assets/static/fastfood.jpg';
import dessert from '../assets/static/dessert.jpg';

const Categories = () => (
    <section className="categories">
        <div className="categories__item">
            <a href="#"><img className="categories__item--image" src={breakfast} alt="Desayunos"/>
            <h3 className="categories__item--title">Desayunos</h3>
            </a>
        </div>
        <div className="categories__item">
                <a href="#"><img className="categories__item--image" src={lunch} alt="Almuerzos"/>
                <h3 className="categories__item--title">Almuerzos</h3></a>
        </div>
        <div className="categories__item">
                <a href="#"><img className="categories__item--image" src={fastfood} alt="Comida rápida"/>
                <h3 className="categories__item--title">Fast food</h3></a>
        </div>
        <div className="categories__item">
                <a href="#"><img className="categories__item--image" src={dessert} alt="Postres"/>
                <h3 className="categories__item--title">Postres</h3></a>
        </div>
    </section>
);

export default Categories;