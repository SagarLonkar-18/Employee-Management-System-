import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   setLocalStorage();
  //   // getLocalStorage();
  // },)

  const [userData,setUserData] = useContext(AuthContext)
  // console.log(authData)
  // console.log(authData.employees)
  // console.log(authData.admin)

  const [user, setUser] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // useEffect(() => {
  //     if(authData){
  //       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //       if(loggedInUser){
  //         setUser(loggedInUser.role);
  //       }
  //     }
  // }, [authData])
  // console.log(user)
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[])

  const handleLogin = (email,password) => {
      // console.log(email,password);
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin');
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}));
      }
      else if(userData){
        const employee = userData.find((e)=>email == e.email && e.password == password);
        if(employee){
          setUser('employee');
          setLoggedInUserData(employee);
          localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}));
        }
      }
      else{
        alert("Invalid Credentials")
      }
  }

  return (
      <>
        {!user ? <Login handleLogin={handleLogin}/> : ''}
        {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null) }
      </>
  )
}

export default App