import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Item from '../components/Item';
// import Summary from '../components/Summary'
function getRandomId(recipesIds) {
    let max = Math.max(...recipesIds) 
    let min = Math.min(...recipesIds)
    return Math.floor(Math.random() * (max - min)) + min;
}

const Home = ({recipes}) => {
    let keys = []
    recipes.desayuno.map((recipe) => {
        keys.push(recipe.id)
    })
    const randomId = getRandomId(keys)
        return (
        <div className="Home">
            <Search />
            <Categories />
            <Featured>
                {<Item key={recipes.desayuno[randomId]}{...recipes.desayuno[randomId]} isLists= {true}/>}
            </Featured>
           
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