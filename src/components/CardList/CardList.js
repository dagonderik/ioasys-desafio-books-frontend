import React from 'react';
import Cards from '../Cards/Cards.js';

const CardList = ({bookList, onRouteChange}) => {
    return (
        <div>
            {
                bookList.map((key,i) => {
                    return (
                        <Cards
                            onRouteChange={onRouteChange}    
                            key={i}
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

export default CardList;