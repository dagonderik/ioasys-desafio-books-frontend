import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) =>{
    return (
    <div className="br3 b--black-10 mt5 w-25-l mw6  relative-l ">           
        <div className="login-box" >
            <div className="measure">
                <fieldset id="sign_up" className="b--transparent ph0 mh0">
                    <legend className="white f1 ph0 mh0"><b>ioasys</b> Books</legend>
                    <div className="mt3 br2">
                        <label className="pa1 pl2 db white-50 tl fw6 lh-copy f7" htmlFor="email-address">Email</label>
                        <input className="b content-start pa2 input-reset ba bg-transparent white fl w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3 br2">
                        <label className="pa1 pl2 db white-50 tl fw6 lh-copy f7" htmlFor="password">Senha</label>
                        <input className="b pa2 input-reset ba bg-transparent white fl w-70" type="password" name="password"  id="password"/>
                        <input
                        onClick={() => onRouteChange('home')}
                        className="b relative enter input-reset br4 b--transparent bg-white grow dark-pink pointer w-20"
                        type="submit"
                        value="Entrar"/>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
    );
}

export default Signin;