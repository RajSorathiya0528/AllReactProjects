import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
    }
  } 
  const decValue = () => {
    if(counter > 0 ){
      counter = counter - 1
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value : {counter}</h3>
      <div>
        <button onClick={addValue} className='inc'> Increment</button>
        <button onClick={decValue}>Decrement</button>
      </div>
      
    </>
  )
}

export default App
