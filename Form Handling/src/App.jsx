import React from 'react'



function App() {

  const submithandler = (event)=>{
    event.preventDefault()
    console.log("Form Submited");
    
  }

  return (
    <div>
      <form onSubmit={function(event){
        submithandler(event)
      }}>
        <input type="text" placeholder='Enter A Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App