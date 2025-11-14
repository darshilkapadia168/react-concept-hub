import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [theme, settheme] = useState('light')

  return (
    <div>
      <h1>Theme Is {theme}</h1>
      <Navbar theme={theme} settheme={settheme}/>
    </div>
  )
}

export default App