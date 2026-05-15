import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api1 from './Api1'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Api1/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
