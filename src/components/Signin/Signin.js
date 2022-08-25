import React from 'react';
import './Signin.css';
import img from './background.png';
import logo from '../../Public/logo.png';
import PropTypes from 'prop-types';

/**
 * SignIn draws the first screen shown to the user, in it the user can login on the API server to access the rest of the app
 */

const Signin = ({ onEmailChange, onPasswordChange, onSubmit }) =>{
    return (
    <div className=" full-box" style={{backgroundImage: `url(${img})`}}>
        <div className="login-box">
            <div className="measure">
                <fieldset id="sign_up" className="b--transparent ph0 mh0">
                    <legend className="white tl f1 ph0 mh0">
                        <img src={logo} className="pr2" style={{height: 50, width: 150, top: 11, position: "relative"}} alt="logo" />
                        Books
                    </legend>
                        <div className="mt3 bg br2">
                            <label className="pa1 pl2 db white-50 tl fw6 lh-copy f7" htmlFor="email-address">Email</label>
                            <input className="b content-start pa2 input-reset ba bg-transparent white fl w-100" type="email" name="email-address" onChange={onEmailChange}  id="email-address"/>
                        </div>
                        <div className="mt3 bg br2">
                            <label className="pa1 pl2 db white-50 tl fw6 lh-copy f7" htmlFor="password">Senha</label>
                            <input className="b pa2 input-reset ba bg-transparent white fl w-70" type="password" name="password" onChange={onPasswordChange} id="password"/>
                            <button
                                onClick={onSubmit}
                                className="b relative enter input-reset br4 b--transparent bg-white grow dark-pink pointer w-10"
                                type="submit"
                                >Entrar</button>
                        </div>
                </fieldset>
            </div>
        </div>
    </div>
    );
}

Signin.propTypes = {
    /**
     * onEmailChange updates the email state used to validation with the API
     */
    onEmailChange: PropTypes.func,
    /**
     * onPasswordChange updates the password state used to validation with the API
     */
    onPasswordChange: PropTypes.func,
    /**
     * onSubmit calls the API to validate login and get the list of books used on the application
     */
    onSubmit: PropTypes.func,
}

export default Signin;