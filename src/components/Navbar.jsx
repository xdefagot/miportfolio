import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar fixed top-0 w-full backdrop-blur-md bg-black/20 z-50 flex flex-col gap-4 items-center px-6 py-6 md:flex-row md:justify-between md:gap-0 md:px-20 md:py-8">
            <div id="inicio" className="text-white text-1xl font-bold"><a href="#inicio">ximena</a></div>
            <div className="flex gap-8">
                <a href="#inicio" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">inicio</a>
                <a href="#sobre-mi" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">sobre mí</a>
                <a href="#skills" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">skills</a>
                <a href="#proyectos" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">proyectos</a>
                <a href="#contacto" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">contacto</a>
            </div>
        </nav>
    )
}

export default Navbar