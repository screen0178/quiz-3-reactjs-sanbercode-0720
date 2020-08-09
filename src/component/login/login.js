import React from 'react'
import {LoginProvider} from './loginContext'
import LoginForm from './loginForm'

const Login = () => {
    return (
        <LoginProvider>
            <LoginForm />
        </LoginProvider>
    )
}

export default Login