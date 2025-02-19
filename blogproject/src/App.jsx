import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux' 
import authService from './Appwrite/auth'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './componentes/index'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoding(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-warp content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (<div>Loading...</div>)
}

export default App
