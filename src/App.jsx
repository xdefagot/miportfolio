import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Inicio from "./components/Inicio"
import SobreMi from "./components/SobreMi"
import Proyectos from "./components/Proyectos"
import Skills from "./components/Skills"
import Contacto from "./components/Contacto"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='bg-[#121214] flex flex-col gap-10 p-4 md:flex-none md:gap-0 md:p-0 w-full min-h-screen'>
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