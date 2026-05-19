import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Inicio from "./components/Inicio"
import SobreMi from "./components/SobreMi"
import Skills from "./components/Skills"
import Proyectos from "./components/Proyectos"
import Contacto from "./components/Contacto"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='bg-[#16171d] min-h-screen'>
      <Inicio />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Contacto />
      <Navbar />
    </div>
  )
}

export default App