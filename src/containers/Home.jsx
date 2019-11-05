import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Featured from '../components/Featured';


const Home = () => (
    <div className="Home">
        <Header />
        <Search />
        <Categories />
        <Featured />
        <Footer />
    </div>

);

export default Home;