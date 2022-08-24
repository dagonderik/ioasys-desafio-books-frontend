import React from 'react';

const Navigation = ({ bookList, changePage }) =>{
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 black pa3'>Página {bookList.page} de {Math.floor(bookList.totalPages)} <span className='dim pointer' onClick={() => changePage('back')} style={{opacity:"0.3"}} role='img' aria-label='Back'>◀️</span> <span className='dim pointer' onClick={() => changePage('forward')} role='img' aria-label='Forward'>▶️</span> </p>
    </nav>
    )
}


export default Navigation;