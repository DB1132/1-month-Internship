import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from '../components/header.jsx'
import SkillList from '../components/SkillList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const skills = [
    {name: "JS", level: 95},
    {name : "react", level:80},
    {name : "python", level:97}

    
  ]

  return (
    <>
      <div>
        <h1>
          {import.meta.env.VITE_INTERN_NAME}
        </h1>
      </div>

      <div>
        <Header />
      </div>

      <SkillList skills={skills}/>
    </>
  )
}

export default App
