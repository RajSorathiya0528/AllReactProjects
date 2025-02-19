import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contect/Contect.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/GitHub.jsx'
import { githubinfoloder } from './components/Github/GitHub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home/>} />
      <Route path = 'About' element = {<About/>} />
      <Route path = 'Contact' element = {<Contact/>} />
      <Route path = 'Github' element = {<Github/>} loader = {githubinfoloder}/>
      <Route path = 'User/:id' element = {<User/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
