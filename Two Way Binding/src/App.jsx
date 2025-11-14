import React, { useState } from 'react'



function App() {

  const [text, setText] = useState('')

  const submithandler = (event)=>{
    event.preventDefault()
    console.log("Form Submited By",text);

    setText('')
    
  }

  return (
    <div>
      <form onSubmit={function(event){
        submithandler(event)
      }}>
        <input value={text} onChange={(e)=>{setText(e.target.value);}} type="text" placeholder='Enter A Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App