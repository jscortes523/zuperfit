import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Home.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Summary from '../components/Summary'


const Home = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect (() => {
        fetch('http://localhost:3000/initialState')
        .then(response => response.json())
        .then(data => setRecipes(data))
    }, []);
    console.log(recipes)
    return (
        <div className="Home">
            <Header />
            <Search />
            <Categories />
            <Featured />
            <Footer />
        </div>
    );
};

export default Home;