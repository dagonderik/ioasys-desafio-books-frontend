import React from 'react';

const Navigation = ({ onRouteChange }) =>{
    return(
    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
        <p className="black  f1  "><b>ioasys</b> Books</p>
        <p onClick={() => onRouteChange('login')} className='f3  dim black pa3 pointer'>Bem vindo, Guilherme! <span role='img' aria-label='Logout'>🔙</span></p>
    </nav>
    )
}


export default Navigation;