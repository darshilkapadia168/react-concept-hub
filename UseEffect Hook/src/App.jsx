import React, { useEffect, useState } from 'react'

function App() {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    console.log("Effect is running...");
  },[num])

  useEffect(function(){
    console.log("Effect2 is running...");
  },[num2])

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onMouseEnter={()=>{
        setnum(num+1)
      }} onMouseLeave={()=>{
        setnum2(num+10)
      }}>Click</button>
    </div>
  )
}

export default App