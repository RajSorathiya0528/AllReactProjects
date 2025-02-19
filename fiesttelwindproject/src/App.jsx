import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello Tailwind CSS</h1>
      <Card productName = "black t-sirt" color = "Natural Black" price = "$100"/>
      <Card productName = "black t-sirt 2" color ="Dark Black" price = "$70"/>
    </>
  )
}

export default App
