import React from 'react';
import './Signin.css';
import img from './background.png';
import logo from './logo.png'

const Signin = ({ onEmailChange, onPasswordChange, onSubmit }) =>{
    return (
    <div className=" full-box" style={{backgroundImage: `url(${img})`}}>
        <div className="login-box">
            <div className="measure">
                <fieldset id="sign_up" className="b--transparent ph0 mh0">
                    <legend className="white tl f1 ph0 mh0"><img src={logo} style={{height: 50, width: 150, top: 11, position: "relative"}} alt="logo" /> Books</legend>
                        <form onSubmit={onSubmit}>
                        <div className="mt3 bg br2">
                            <label className="pa1 pl2 db white-50 tl fw6 lh-copy f7" htmlFor="email-address">Email</label>
                            <input className="b content-start pa2 input-reset ba bg-transparent white fl w-100" type="email" name="email-address" onChange={onEmailChange}  id="email-address"/>
                        </div>
                        <div className="mt3 bg br2">
                            <label className="pa1 pl2 db white-50 tl fw6 lh-copy f7" htmlFor="password">Senha</label>
                            <input className="b pa2 input-reset ba bg-transparent white fl w-70" type="password" name="password" onChange={onPasswordChange} id="password"/>
                            <button
                                onClick={onSubmit}
                                className="b relative enter input-reset br4 b--transparent bg-white grow dark-pink pointer w-20"
                                type="submit"
                                >Entrar</button>
                        </div>
                        </form>
                </fieldset>
            </div>
            {/* {route === 'error'
            ? <div>
                <p>Senha ou login incorreto</p>
            </div>
            :<div> </div>} */}
        </div>
    </div>
    );
}


export default Signin;