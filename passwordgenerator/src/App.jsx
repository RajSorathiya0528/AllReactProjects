import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numallow,setNumallow] = useState(false)
  const [charallow,setCharallow] = useState(false)
  const [password,setPassword] = useState("")
  const passwordRef = useRef(null)
  
  const PasswordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numallow) str += "1234567890"
    if(charallow) str += "~`!@#$%^&*()_+-={}[]<>,.?/"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numallow, charallow, setPassword])

  const copyPassword = useCallback( () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect( () => {
    PasswordGenerator()
  }, [length, numallow, charallow, PasswordGenerator])
  return (
    <>
      <div className='width-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
      <h1 className='text-4xl text-center text-white'>My password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-non w-full py-1 px-3' 
            placeholder='password'
            readOnly
            ref={passwordRef}/>
          <button 
            className='outline-non bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input 
              type="range" 
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={(e) => {
                setNumallow((e.prev) = !e.prev);
              }}/>
              <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charallow}
              id="charInput"
              onChange={(e) => {
                setCharallow((e.prev) = !e.prev);
              }}/>
              <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
