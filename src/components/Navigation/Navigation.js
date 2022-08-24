import React from 'react';
import logo from '../../Public/logo2.png';
import {RiLogoutCircleLine} from 'react-icons/ri';

const Navigation = ({ onRouteChange, user }) =>{
    return(
    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
        <p className="black  f1  ">
            <img src={logo} className="pr2" style={{height: 50, width: 150, left: 10, top: 11, position: "relative"}} alt="logo" />
             Books
        </p>
        <p className='f3 black pa3'>
            Bem vindo, {user.data.name}! 
            <span className='dim pointer' onClick={() => onRouteChange('login')} role='img' aria-label='Logout'>
                <RiLogoutCircleLine/>
            </span>
        </p>
    </nav>
    )
}


export default Navigation;