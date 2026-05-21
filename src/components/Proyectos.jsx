import React from 'react'
import { PiDevices } from "react-icons/pi";



const proyectos= [
    {
    id: 1,
    titulo: "Tienda con API pública",
    descripcion: "Tienda web construida con React que consume una API pública para mostrar productos.",
    link: "https://xdefagot.github.io/reactwebtienda/",
    tecnologias: ["React", "API REST", "CSS"]
  },
  {
    id: 2,
    titulo: "Contador interactivo",
    descripcion: "Contador construido con React y hooks para registrar el total de personas en eventos.",
    link: "https://xdefagot.github.io/contadorinteractivo/",
    tecnologias: ["React", "Hooks", "CSS"]
  },
  {
    id: 3,
    titulo: "Agenda de tareas",
    descripcion: "App para gestionar tareas, marcarlas como completas e incompletas y ver sus detalles.",
    link: "https://xdefagot.github.io/agendatareas/",
    tecnologias: ["React", "Componentes", "CSS"]
  },
  {
    id: 4,
    titulo: "Gestión de stock",
    descripcion: "Tienda web con base de datos para gestionar stock de productos.",
    link: "https://proyectofacultad.vercel.app/",
    tecnologias: ["React", "Node.js", "SQL Server"]
  }
]


const Proyectos = () => {
    return (
        <div className= "min-h-screen mt-70 px-20 py-20" id="proyectos">
         <p className= "text-[#6366f1] text-xs font-bold tracking-widest mb-2">💜 Proyectos</p>
         <h2 className="text-white text-5xl font-bold mb-4">Lo que fui construyendo.</h2>
         <p className= "text-gray-400 text-lg mb-16">Cada proyecto representa algo que aprendí en el camino. Acá les dejo algunos:</p>
         
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {proyectos.map((proyecto) => (
             <a  key={proyecto.id}
               href={proyecto.link}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#1e1f27] rounded-2xl p-6 border border-[#2e303a] hover:border-[#6366f1] transition-all duration-300 group">
               
               <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#6366f1] transition-colors duration-300">
                {proyecto.titulo} <PiDevices className="inline-block ml-4 text-[#6366f1]" />
               </h3>
               <p className='text-gray-400 text-sm mb-4'>{proyecto.descripcion}</p>

                <div className="flex gap-2 text-gray-400 font-bold">
                {proyecto.tecnologias.map((tech) => (
                    <span key={tech}>{tech}</span>
                   ))}
                 </div>
                </a>

               
               
                ))}
                 </div>
            </div>
    )
}

export default Proyectos