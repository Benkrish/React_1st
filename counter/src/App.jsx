import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  // let counter = 15

  const addValue = () => {
    if (count >= 20) {
      alert("You can't add more than 20")
      return
    }
    setCount((prevCount) => {
      return prevCount + 1
    })
    setCount((prevCount) => prevCount + 1)
  }

  const decValue = () => {
    if (count <= 0) {
      alert('Can not be less than 0')
      return
    } else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value : {count}</h2>

      <br />
      <br />
      <button onClick={addValue}> Add Value : {count} </button>
      <br />
      <br />

      <button onClick={decValue}>Decrease Value :{count}</button>
      <br />
      <br />
      <p>Final Count Value :{count}</p>
    </>
  )
}

export default App
