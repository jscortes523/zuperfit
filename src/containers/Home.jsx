import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Summary from '../components/Summary'
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';
const Home = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="Home">
            <Header />
            <Search />
            <Categories />
            {initialState.recipes.map(recipe =>
            <Featured {...recipe}/>
             )}
            <Footer />
           
        </div>
        
    );
};

export default Home;