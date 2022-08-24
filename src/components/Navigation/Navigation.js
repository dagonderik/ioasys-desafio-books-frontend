import React from 'react';
import logo from '../../Public/logo2.png';
import {RiLogoutCircleLine} from 'react-icons/ri';
import PropTypes from 'prop-types';

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

Navigation.propTypes = {
    /**
     * onRouteChange is a funtion that receives a value to determine which screen to show
     */
    onRouteChange: PropTypes.func,
    /**
     * user holds all the information about the user got from the API, used here to grab the user name
     */
    user: PropTypes.object,
}

export default Navigation;