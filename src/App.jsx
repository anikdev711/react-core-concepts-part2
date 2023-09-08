import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  //using normal function
  function handleClick() {
    alert("This is a alert!!!!!");
  }

  //using arrow function
  const handleClick2 = () => {
    alert("Hey! Whats up");
  }

  const handleClick4 = (num) => {
    alert(num + 5)
  }

  return (
    <>

      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      
      <Counter></Counter>
      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => alert("Kemon acho tumi?")}>Click Me3</button>
      <button onClick={() => handleClick4(3)}>Click Me4</button>

    </>
  )
}

export default App
