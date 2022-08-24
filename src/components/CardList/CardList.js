import React from 'react';
import Cards from '../Cards/Cards.js';
import PropTypes from 'prop-types'

/**
 * Component used to create the List of cards displaying the books
 * 
 */

const CardList = ({bookList, onRouteChange}) => {
    return (
        <div>
            {
                bookList.map((user,i) => {
                    return (
                        <Cards
                            key={bookList[i].id}
                            onRouteChange={onRouteChange}    
                            id={i}
                            authors={bookList[i].authors}
                            title={bookList[i].title}
                            pageCount={bookList[i].pageCount}
                            publisher={bookList[i].publisher}
                            published={bookList[i].published}
                            imageUrl={bookList[i].imageUrl}
                        />
                    );
                })
            }
        </div>
    )
}

CardList.propTypes = {
    /**
     * bookList holds the list of books got from the API
     */
    bookList: PropTypes.array,
    /**
     * onRouteChange is a funtion that receives a value to determine which screen to show
     */
    onRouteChange: PropTypes.func
}

export default CardList;