import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage();
  //   // getLocalStorage();
  // },)

  const [user, setUser] = useState('');
  
  const handleLogin = (email,password) => {
      // console.log(email,password);
      if(email == 'admin@example.com' && password == '123'){
        // console.log("This is Admin")
        setUser('admin');
      }
      else if(email == 'user@example.com' && password == '123'){
        // console.log("This is User")
        setUser('employee');
      }
      else{
        alert("Invalid Credentials")
      }
  }

  const data = useContext(AuthContext)
  console.log("App Data", data)

  return (
      <>
        {!user ? <Login handleLogin={handleLogin}/> : ''}
        {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard/>}
      </>
  )
}

export default App