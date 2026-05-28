import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full backdrop-blur-md bg-black/20 z-50 px-6 py-4 md:px-20 md:py-6">
            <div className="flex items-center justify-between">
                <a href="#inicio" className="text-white text-sm font-bold">ximena</a>

                {/*apliqué botón hamburguesa para que este solo visible en mobile */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white flex flex-col gap-1.5"
                    aria-label="Menú"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* links en desktop siempre visibles, en mobile solo si open */}
                <div className="hidden md:flex gap-8">
                    <a href="#inicio" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">inicio</a>
                    <a href="#sobre-mi" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">sobre mí</a>
                    <a href="#skills" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">skills</a>
                    <a href="#proyectos" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">proyectos</a>
                    <a href="#contacto" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">contacto</a>
                </div>
            </div>

            {/* menú desplegable mobile */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 mt-4 pb-2">
                    <a onClick={() => setOpen(false)} href="#inicio" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">inicio</a>
                    <a onClick={() => setOpen(false)} href="#sobre-mi" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">sobre mí</a>
                    <a onClick={() => setOpen(false)} href="#skills" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">skills</a>
                    <a onClick={() => setOpen(false)} href="#proyectos" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">proyectos</a>
                    <a onClick={() => setOpen(false)} href="#contacto" className="text-white text-sm hover:text-[#6366f1] transition-colors duration-300">contacto</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar