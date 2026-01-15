import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Projects from './Views/Projects'
import About from './Views/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='MainContainer'>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/projects' element={ <Projects/> } />
            <Route path='/about' element={ <About/> } />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
