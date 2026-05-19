import React from "react"
import Spline from '@splinetool/react-spline'

const Inicio = () => {
    return (
    <div id='inicio' className=" flex flex-row items-center justify-between min-h-screen px-20">
     <div className="flex flex-col w-1/2  text-left">
      <div className="flex gap -3 mb-4">
        <span className="border border-white/30 text-white text-sm px-4 py-1 rounded-full transition-all duration-300 hover:border-[#6366f1] hover:bg-[#6366f1]/20 hover:scale-105">node.js</span>
        <span className="border border-white/30 text-white text-sm px-4 py-1 rounded-full transition-all duration-300 hover:border-[#6366f1] hover:bg-[#6366f1]/20 hover:scale-105">tailwindcss</span>
        <span className="border border-white/30 text-white text-sm px-4 py-1 rounded-full transition-all duration-300 hover:border-[#6366f1] hover:bg-[#6366f1]/20 hover:scale-105">javascript</span> 

      </div>
        <h1 className="text-white text-6xl font-bold">Hola, soy<br/><span className="text-[#6366f1]">Ximena:)</span></h1>
         <p className="text-gray-400 text-xl mt-4">Estudiante de desarrollo web apasionada<br/>por crear experiencias digitales únicas y funcionales.</p>
      <div className="flex gap-4 mt-8">
        <a href="#proyectos" className="bg-[#6366f1] text-white px-6 py-3 rounded-lg">
          ver proyectos
        </a>
        <a href="/cv.pdf" download className="border border-[#6366f1] text-[#6366f1] px-6 py-3 rounded-lg">
          descargar CV
        </a>
      </div>
     </div>

     <div className="w-1/2 flex justify-center items-center h-[490px] overflow-hidden">
      <Spline
       scene="https://prod.spline.design/qNGHnmOVJipU-7zT/scene.splinecode"
       style={{ width: '100%', height: '100%' }}
      />
     </div>
    </div>
    )
}

export default Inicio 