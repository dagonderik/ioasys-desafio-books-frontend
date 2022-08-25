import React from 'react';
import './Cards.css';
import PropTypes from 'prop-types';


const Cards = ({authors, title, pageCount, publisher, published, imageUrl, onRouteChange, id}) => {
    return (
        <div data-testid="Cards" key={id} onClick={() => onRouteChange(id)}
         className= 'card tc white dib br3 pa3 ma2 pointer grow shadow-5 card' 
         style={{height: "auto", maxWidth: "500px", minWidth: "400px", textAlign: "left", margin: "10px"}}  >
            <img alt='' src={`${imageUrl}`} style={{display:"inline-block", height:"150px", align: "center",verticalAlign: "middle"}} />
            <div style={{display:"inline-block", verticalAlign: "middle", marginLeft: "10px"}}>
                <h2 className='black f4'>{title}</h2>
                <p className='red f7'>
                    {authors.map((user,i) => {
                    return( <>{authors[i]}<br/></>)
                    })}
                </p>
                <p  className='black-50 f7'> {pageCount} {' páginas'} <br/>{publisher}<br/>{published}</p>
               
            </div>
        </div>
    );
}

Cards.propTypes = {
    /**
     * authors holds an array of all the authors of this book
     */
    authors: PropTypes.array,
    /**
     * title holds the book title
     */
    title: PropTypes.string,
    /**
     * pageCount holds the number of pages of this book
     */
    pageCount: PropTypes.number,
     /**
     * publisher holds the information about the publisher of the book
     */
    publisher: PropTypes.string,
    /**
     * published holds the information about the year in which the book was published
     */
    published: PropTypes.string,
     /**
     * imageUrl holds the link to the book cover image
     */
    imageUrl: PropTypes.string,
    /**
     * onRouteChange is a funtion that receives a value to determine which screen to show
     */
    onRouteChange: PropTypes.func,
     /**
     * id holds a number to identify the position of the book in the array
     */
    id: PropTypes.number
    
    
}

export default Cards;