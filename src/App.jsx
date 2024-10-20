import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/component'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Routes>
        <Route path='chat' element = {<Component/>}/>
        <Route path='' element = {<LandingPage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
