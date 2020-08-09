import React, { useState, createContext } from "react"

export const LoginContext = createContext()

export const LoginProvider = props => {
  const [user, setUser] = useState([
    { name: "admin", pass: "admin"},
  ])
  const [loginState, setLoginState] = useState(false)

  return (
    <LoginContext.Provider value={[user, setUser, loginState, setLoginState]}>
      {props.children}
    </LoginContext.Provider>
  );
};