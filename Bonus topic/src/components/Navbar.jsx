import React from 'react'

function Navbar(props) {

    const changetheme = ()=>{
        props.settheme('dark')
    }

  return (
    <div>
        <button onClick={changetheme}>Change Theme</button>
    </div>
  )
}

export default Navbar