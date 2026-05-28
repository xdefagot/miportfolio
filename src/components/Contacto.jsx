import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiDevbox } from 'react-icons/si'


/*mailto: para referir al mail dentro del HREF  */

const Contacto = () => {
  return (

   <section id="contacto"> 
    <div className= "bg-[#121214] flex flex-col items-center justify-center rounded-2xl mt-20  mb-20 px-20 py-10 mx-4 md:px-20 md:mx-20" id="contacto">
      <h1 className= "text-white font-bold text-3xl md:text-5xl mt-10 text-center">Trabajemos <span className="text-[#6366f1]">juntos.</span></h1>  
       <p className= "text-gray-400 text-base md:text-lg mt-4 text-center">Actualmente me encuentro disponible para oportunidades laborales y proyectos freelance.</p>
         <div className="flex gap-6 mt-8">
            <a href="mailto:ximenadefagot@gmail.com" className="bg-black text-white border border-[#6366f1] hover:border-[#6366f1] hover:bg-[#6366f1]/20 transition-all duration-300 font-bold text-sm px-6 py-4 rounded-lg">
                contáctame 
            </a>
         </div>
    </div>
    </section>
  )
}

export default Contacto