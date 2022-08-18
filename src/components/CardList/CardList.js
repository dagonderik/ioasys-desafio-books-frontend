import React from 'react';
import Cards from '../Cards/Cards.js';

const CardList = ({bookList}) => {
    return (
        <div style={{flex: 2, flexDirection: 'row', flexWrap: 'wrap'}}>
            {
                bookList.map((user,i) => {
                    return (
                        <Cards    
                            key={i}
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