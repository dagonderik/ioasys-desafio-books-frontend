import React from 'react';
import './Cards.css'

const Cards = ({authors, title, pageCount, publisher, published, imageUrl, onRouteChange, id}) => {
    return (
        <div key="{id}" onClick={() => onRouteChange(id)}
         className= 'card tc white dib br3 pa3 ma2 pointer grow shadow-5 card' 
         style={{height: "200px", width: "400px",textAlign: "left", margin: "10px"}}  >
            <img alt='' src={`${imageUrl}`} style={{display:"inline-block", minWidth:"2.2cm", height:"150px", align: "center",verticalAlign: "middle"}} />
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

export default Cards;