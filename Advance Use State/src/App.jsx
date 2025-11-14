import React, { useState } from 'react'

function App() {

const [obj, setobj] = useState({ name: 'John', age: 30 } )


const changeobj = ()=>{
  const newobj = {...obj}
  newobj.name = "Darshil"
  newobj.age = 22

  setobj(newobj)
}

  return (
    <div>
      <h1>{obj.name}, {obj.age}</h1>
      <button onClick={changeobj}>Click</button>
    </div>
    
  )
}

export default App