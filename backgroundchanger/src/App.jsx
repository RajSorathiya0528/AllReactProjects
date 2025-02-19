import { useState } from 'react'
import './App.css'

function App() {
  const[color, setColor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-500"
    style={{ backgroundColor:color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-2xl'>
          <button onClick={() => {
            setColor("red")
          }}
          className='outline-non px-4 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>
           <button onClick={() => {
            setColor("Blue")
           }}
           className='outline-non px-4 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"blue"}}>Blue</button>
           <button onClick={() => {
            setColor("Pink")
           }}
           className='outline-non px-4 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"pink"}}>Pink</button>
           <button onClick={() => {
            setColor("Olive")
           }} 
           className='outline-non px-4 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"Olive"}}>Olive</button>
           <button onClick={() => {
            setColor("Green")
           }}
           className='outline-non px-4 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"green"}}>Green</button>
           <button onClick={() => {
            setColor("Lightblue")
           }}
           className='outline-non px-4 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"lightblue"}}>Lightblue</button>
           <button onClick={() => {
            setColor("Yellow")
           }}
           className='outline-non px-4 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
