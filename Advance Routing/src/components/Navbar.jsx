import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-5 py-6 bg-cyan-800'>
        <h2 className='text-xl font-bold'>sheryians</h2>
        <div className='flex gap-10 justify-between items-center text-lg font-me'>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Courses">Courses</Link>
        </div>
    </div>
  )
}

export default Navbar