import React from 'react'

const App = () => {

//  const user = localStorage.getItem('User')
//  const surname =  localStorage.getItem('Surname')
//  const Proffesion =  localStorage.removeItem('Proffesion')
//  const age =  localStorage.getItem('age')
//  localStorage.clear()
//   console.log(user,surname,Proffesion,age);


  const user = {
    username:'darshil',
    age:22,
    proffesion:'Mern stack developer'
  }

  localStorage.setItem('user', JSON.stringify(user))
  
  return (
    <div>App</div>
  )
}

export default App