import React from 'react'
import {LoginProvider} from './login/loginContext'
import Navi from './navi'

const Landing = () => {
    return (
        <LoginProvider>
            <Navi />
        </LoginProvider>
    )
}

export default Landing