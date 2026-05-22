import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RxGithubLogo } from "react-icons/rx";
import { TbMailFilled } from "react-icons/tb";


const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 px-6 py-6 mt-auto">
        <div className="flex  flex-col md:flex-row  items-center justify-between gap-4">
            <p className="text-left text-xs">Hecho con ❤️ por <span className="text-white font-bold hover:text-[#6366f1] transition-all duration-300">
             <a href="https://github.com/xdefagot" target="_blank" rel="noopener noreferrer">ximena</a></span></p>
        

        <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            <a href="https://www.linkedin.com/in/ximenadefagot/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] transition-all duration-300">
            <TbBrandLinkedinFilled size={35}></TbBrandLinkedinFilled>
            </a>
            
            <a href="https://github.com/xdefagot" target="_blank" rel="noopener noreferrer" className= "hover:text-[#6366f1] transition-all duration-300">
            <RxGithubLogo size={35}></RxGithubLogo>
            </a>

            <a href="mailto:ximenadefagot@gmail.com" className="hover:text-[#6366f1] transition-all duration-300">
            <TbMailFilled size={35}></TbMailFilled>
            </a>

         </div>

        </div>
        
        </footer>
    )
}


export default Footer