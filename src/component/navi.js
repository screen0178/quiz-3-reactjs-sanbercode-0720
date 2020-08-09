import React, { Component,useContext } from 'react'
import {LoginContext,LoginProvider} from './login/loginContext'
import {Link} from 'react-router-dom';

import logo from './img/logo.png'

const Navi = () => {
    const [user, setUser, loginState, setLoginState] = useContext(LoginContext);

    return(
        <>
        <div className="header">
            <img className="logo" id="logo" src={logo} width="200px" alt="logoSanber" />
            <nav>
                <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    {loginState === false && 
                        <li><Link className="link" to="/login">Login</Link></li>
                    }
                    {loginState === true && 
                        <li><Link className="link" to="/movielist">Movie List Editor</Link></li>
                    }
                </ul>
            </nav>
        </div>
        </>
    )
}



export default Navi