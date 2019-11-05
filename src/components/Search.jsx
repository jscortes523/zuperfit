import React from 'react';
import '../assets/styles/components/Search.scss';
import lens from '../assets/static/search.png';

const Search = () =>(
    <section className="search">
        <div className="search__input">
            <input type="text" className="input" placeholder="¿Qué quieres comer hoy?" />
            <figure className="search__input--icon"><a href=""><img src={lens} alt="buscar"/></a></figure>
        </div>
    </section>
);

export default Search;