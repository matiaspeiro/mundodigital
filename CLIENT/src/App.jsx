import { useState } from 'react'
import Home from './pages/Home'
import ConctactMe from './pages/ConctactMe'
import { Routes,Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import './App.css'

function App() {


  return (

    <div className='container'>
    <Routes>
      <Route  path='/' element= {<Home/>}/>
      <Route  path='/contacto' element= {<ConctactMe/>}/>
      <Route  path='/About' element= {<AboutMe/>}  />
    </Routes>
    </div>
  
  )
}

export default App
