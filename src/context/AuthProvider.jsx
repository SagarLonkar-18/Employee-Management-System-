import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
    const [userData, setUserData] = useState(null)

    // const data = getLocalStorage()
    // console.log(data.employees);

    const {employee, admin} = getLocalStorage();
    // setUserData({employee, admin})
    

    return (
        <div>
            <AuthContext.Provider value={"Sagar"}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider