import React from "react"
import Spline from '@splinetool/react-spline'


const Inicio = () => {
    return (
    <div id='inicio' className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20">
     <div className="flex flex-col w-full md:w-1/2 text-left">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="border border-white/30 text-white text-xs px-4 py-1 rounded-full transition-all duration-300 hover:border-[#6366f1] hover:bg-[#6366f1]/20 hover:scale-105 ">react</span>
        <span className="border border-white/30 text-white text-xs px-4 py-1 rounded-full transition-all duration-300 hover:border-[#6366f1] hover:bg-[#6366f1]/20 hover:scale-105">tailwindcss</span>
        <span className="border border-white/30 text-white text-xs px-4 py-1 rounded-full transition-all duration-300 hover:border-[#6366f1] hover:bg-[#6366f1]/20 hover:scale-105">javascript</span> 

      </div >
      
        <h1 className="text-white text-4xl md:text-6xl">Hola, soy<br/><span className="text-[#6366f1]">Ximena:)</span></h1>
         <p className="text-gray-400 text-xl mt-4">Estudiante de desarrollo web apasionada<br/>por crear experiencias digitales únicas y funcionales.</p>
      <div className="flex gap-4 mt-8">
        <a href="#proyectos" className="bg-[#6366f1] text-black text-sm font-bold px-6 py-4 rounded-lg">
          ver proyectos 
        </a>    
                
        <a href="/cv.pdf" download className="bg-black border border-[#6366f1] hover:border-[#6366f1] hover:bg-[#6366f1]/20 transition-all duration-300 text-white text-sm font-bold px-6 py-4 rounded-lg">
          descargar cv
        </a>
      </div>
     </div>

     <div className="hidden md:flex w-1/2 flex justify-center items-center h-[490px] overflow-hidden"> 
      <Spline
       scene="https://prod.spline.design/qNGHnmOVJipU-7zT/scene.splinecode"
       style={{ width: '100%', height: '100%' }}
      />
     </div>
    </div>
    )
}

export default Inicio 