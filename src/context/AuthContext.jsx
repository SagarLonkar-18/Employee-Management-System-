import React from 'react'

// Auth context contains all the information like email and password
const AuthContext = ({children}) => {
    return (
        <div>{children}</div>
    )
}

export default AuthContext