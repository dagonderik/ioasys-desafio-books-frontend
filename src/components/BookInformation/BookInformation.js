import React from 'react';
import './BookInformation.css';
import PropTypes from 'prop-types'

/**
 * Component used to draw information of the selected book
 * 
 */

const BookInformation = ({route, bookList}) => {
    return (
        <div id='bookList'>
            <img alt='' src={`${bookList[route].imageUrl}`} style={{display:"inline-block", maxWidth:"30vh", height:"10%", align: "center",verticalAlign: "middle"}} />
        
            <div style={{ display:"inline-block", verticalAlign: "middle", marginLeft: "10px"}}>
            <h1 className='black f1'>{bookList[route].title}</h1>
            <p className='hot-pink f4'>
                {bookList[route].authors.map((user,i) => {
                return( <>{bookList[route].authors[i]}  </>)
                })}
            </p>
            <div>
                <p  className='f4 b black'>INFORMAÇÕES<br/></p>
                <p style={{display:"flex", justifyContent: "space-between"}}><b>Páginas</b> {bookList[route].pageCount}</p>
                <p style={{display:"flex", justifyContent: "space-between"}}><b>Editora</b> {bookList[route].publisher}</p>
                <p style={{display:"flex", justifyContent: "space-between"}}><b>Publicação</b> {bookList[route].published}</p>
                <p style={{display:"flex", justifyContent: "space-between"}}><b>Idioma</b> {bookList[route].language}</p>
                <p style={{display:"flex", justifyContent: "space-between"}}><b>Título Original</b> {bookList[route].title}</p>
                <p style={{display:"flex", justifyContent: "space-between"}}><b>ISBN-10</b> {bookList[route].isbn10}</p>
                <p style={{display:"flex", justifyContent: "space-between"}}><b>ISBN-13</b> {bookList[route].isbn13}</p>
            
            <p className='f4 b black'>RESENHA DA EDITORA</p>
            <p className='f5' style={{position: "absolute"}} >{bookList[route].description}</p>
            </div>
            </div>
        </div>
    );
}

BookInformation.propTypes = {
    /** route holds the position of the book on the bookList array */
    route: PropTypes.number,
    /** bookList holds the list of books got from the API*/
    bookList: PropTypes.array
}

export default BookInformation;