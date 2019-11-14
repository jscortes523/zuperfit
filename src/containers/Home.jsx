import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
// import Summary from '../components/Summary'

// const API = 'http://localhost:3000/initialState';
const Home = ({recipes}) => {
    // const initialState = useInitialState(API);
    // return initialState.length === 0 ? <h1>Loading...</h1> : (
        return (
        <div className="Home">
            <Header />
            <Search />
            <Categories />
            {recipes.map(recipe =>
            <Featured key={recipe.id}{...recipe}/>
             )}
            <Footer />
           
        </div>
        
    );
};

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        myFavorites: state.myFavorites
    };
};
export default connect(mapStateToProps, null)(Home);