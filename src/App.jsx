import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'
import './index.css'
import Inicio from "./components/Inicio"
import SobreMi from "./components/SobreMi"
import Proyectos from "./components/Proyectos"
import Skills from "./components/Skills"
import Contacto from "./components/Contacto"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { CircleLoader } from 'react-spinners'

/* g-gray-950  121214 */
function App() {
  const [loading, setLoading] = useState(true);

  // diseño para el style del loader
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#6366f1',
  };

  // simula una carga de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  //lo que mostrará si está cargando.
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <CircleLoader color={'#6366f1'} loading={loading} cssOverride={override} size={150} />
      </div>
    );
  }

  return (
    <div className='bg-gray-950 flex flex-col gap-10 p-4 md:flex-none md:gap-0 md:p-0 w-full min-h-screen'>
      <Navbar />
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