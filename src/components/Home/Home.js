import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Home.css';
import CardList from '../CardList/CardList.js'

const Home = ({ onRouteChange, color, bookList }) =>{

    return(
        <div className="full-box"style={{background: color}}>
            <Navigation onRouteChange={onRouteChange}></Navigation>
            <CardList bookList={bookList.data}/>
        </div>
    )
}

export default Home;