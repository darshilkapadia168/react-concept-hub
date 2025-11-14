import React, { useState } from 'react'

function App() {

  const [num, setnum] = useState(0)

  const increase = ()=>{
    setnum(num + 1)
  }

  const decrease = ()=>{
    setnum(num - 1)
  }

  const jump = ()=>{
    setnum(num+5)
  }

  const reset = ()=>{
    setnum(0)
  }

  return (
    <div className='main'>
      <h1>{num}</h1>
      <div className="btn">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={jump}>Increase By 5</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App