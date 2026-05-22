import { useState } from 'react'
import './App.css'
import './index.css'
import Inicio from "./components/Inicio"
import SobreMi from "./components/SobreMi"
import Proyectos from "./components/Proyectos"
import Skills from "./components/Skills"
import Contacto from "./components/Contacto"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

/* g-gray-950  121214 */
function App() {
  return (
    <div className='bg-gray-950 flex flex-col gap-10 p-4 md:flex-none md:gap-0 md:p-0 w-full min-h-screen'>
      <Inicio />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Contacto />
      <Navbar />
      <Footer />
    </div>
  )
}

export default App