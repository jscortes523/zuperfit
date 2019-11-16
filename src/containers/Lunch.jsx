import React from 'react';
import { connect } from 'react-redux';
import Cards from '../components/Cards'
import Item from '../components/Item';

import '../assets/styles/containers/Favorites.scss'

function recipes (){
    fetch(`${process.env.REACT_APP_API_URL}/recipe/query/bycategory/almuerzo`)
    .then(response=> response.json())
    .then(data => { console.log(data)}) 
 }
 const loadData = recipes()


const Lunch = (data) => {
    return (
        <section className="favorites__container">
            <Cards>
                {data.map(recipe =>
                <Item key={recipe.id} {...recipe}/>
                 )}
            </Cards>
        </section>
    );
};

    
    

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps, null)(Lunch);