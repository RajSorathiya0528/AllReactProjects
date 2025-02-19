import { useState } from 'react'
import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignPage from './pages/SignupPage'
import { Router } from 'react-router-dom'


function App() {


  return (
    <Router>
      <SignPage />
    </Router>
  )
}

export default App
