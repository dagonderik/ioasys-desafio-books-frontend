import React from 'react';

const Navigation = ({ onRouteChange, user }) =>{
    return(
    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
        <p className="black  f1  "><b>ioasys</b> Books</p>
        <p className='f3 black pa3'>Bem vindo, {user.data.name}! <span className='dim pointer' onClick={() => onRouteChange('login')} role='img' aria-label='Logout'>🔙</span></p>
    </nav>
    )
}


export default Navigation;