import React from "react";

const Navbar = () => {
    return (
        
        <nav className="navbar fixed top-0 w-full backdrop-blur-md bg-black/20 z-50 flex items-center justify-between px-20 py-8">
            <div id="inicio" className="text-white text-1xl font-bold"><a href="#inicio">ximena</a></div>
            <div className="flex gap-8">
                <a href="#inicio" className="text-white hover:text-[#6366f1] transition-colors duration-300">inicio</a>
                <a href="#sobre-mi" className="text-white hover:text-[#6366f1] transition-colors duration-300">sobre mí</a>
                <a href="#skills" className="text-white hover:text-[#6366f1] transition-colors duration-300">skills</a>
                <a href="#proyectos" className="text-white hover:text-[#6366f1] transition-colors duration-300">proyectos</a>
                <a href="#contacto" className="text-white hover:text-[#6366f1] transition-colors duration-300">contacto</a>
            </div>
        </nav>
    )
}

export default Navbar