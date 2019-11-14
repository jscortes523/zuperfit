import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards'
import Item from '../components/Item';
import FavoritesContainer from '../components/FavoritesContainer';
import '../assets/styles/containers/Favorites.scss'

const Favorites = ({myFavorites}) => {

    return (
        <div >
            <Header/>
                <Cards>
                    {myFavorites.map(recipe =>
                    <Item key={recipe.id} {...recipe}/>
                     )}
                </Cards>
            <Footer />
        </div>
    );
};

    
    

const mapStateToProps = state => {
    return {
        myFavorites: state.myFavorites
    };
};
export default connect(mapStateToProps, null)(Favorites);