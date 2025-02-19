import React from 'react'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvide from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
  return (
    <UserContextProvide>
      <Login />
      <Profile />
    </UserContextProvide>
  )
}

export default App
