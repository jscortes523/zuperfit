import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards'
import Item from '../components/Item';
import '../assets/styles/containers/Favorites.scss'

const Favorites = () => (
    <div >
        <Header/>
        <Cards>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </Cards>
        <Footer />

    </div>
    
);

export default Favorites