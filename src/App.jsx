import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-to-b from-gray-950 via-gray-500 to-gray-950'>
      <div className='bg-gradient-to-b from-gray-950 via-gray-500 to-gray-950'>
        <Header></Header>
        <About></About>
        <Skill ></Skill>
        <Project></Project>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default App
