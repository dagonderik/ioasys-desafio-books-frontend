import React from 'react';

const Navigation = ({ bookList, onRouteChange }) =>{
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('login')} className='f3  dim black pa3 pointer'>Página {bookList.page} de {Math.floor(bookList.totalPages)} <span style={{opacity:"0.3"}} role='img' aria-label='Back'>◀️</span> <span role='img' aria-label='Forward'>▶️</span> </p>
    </nav>
    )
}


export default Navigation;