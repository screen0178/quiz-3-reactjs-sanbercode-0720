import React, {useContext, useState} from 'react'
import {LoginContext} from './loginContext'

const LoginForm = () => {
    const [user, setUser, loginState, setLoginState] = useContext(LoginContext);
    const [inpName, setInpName] = useState("")
    const [inpPass, setInpPass] = useState("")

    const handleChangeName = (evt) => {
        setInpName(evt.target.value)
    }
    const handleChangePass = (evt) => {
        setInpPass(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        let name = inpName
        let pass = inpPass
        const validation = user.some(el => el.name === name && el.pass === pass)
        if (validation === true) {
            setLoginState(true)
        } else {
            setLoginState(false)
            alert("usename atau password anda salah")
        }
    }

    return (
        <>
        {loginState === false &&
        <div>
            <form>
                <label>Username : </label>
                <input type="text" name="inpName" onChange={handleChangeName} value={inpName} />
                <label>Password : </label>
                <input type="text" name="inpPass" onChange={handleChangePass} value={inpPass} />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
        }
        {loginState === true && 
            <h1>udah login</h1>
        }
        </>
    )
}

export default LoginForm