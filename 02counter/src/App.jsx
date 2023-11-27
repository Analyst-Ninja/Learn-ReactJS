import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) 
  // let Counter = 4

  const addValue = () => {
    counter += 1
    setCounter(counter)
  }
  const removeValue = () => {
    counter -= 1
    setCounter(counter)
  }


  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
