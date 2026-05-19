import React from 'react'
import { SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiPython, SiDotnet} from 'react-icons/si'
import { TbBrandCSharp, TbBrandHtml5, TbBrandCss3, TbBrandGithubFilled, TbBrandVisualStudio, TbSql} from 'react-icons/tb'


const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, size: { width: 40, height: 40 }, color: "#f7df1e" },
    { name: 'React', icon: SiReact, size: { width: 40, height: 40 }, color: "#61dafb" },
    { name: 'Node.js', icon: SiNodedotjs, size: { width: 40, height: 40 }, color: "#68a063" },
    { name: 'Tailwind CSS', icon: SiTailwindcss, size: { width: 40, height: 40 }, color: "#38bdf8" },
    { name: 'HTML5', icon: TbBrandHtml5, size: { width: 40, height: 40 }, color: "#e34f26" },
    { name: 'CSS3', icon: TbBrandCss3, size: { width: 40, height: 40 }, color: "#264de4" },
    { name: 'Git', icon: SiGit, size: { width: 40, height: 40 }, color: "#f1502f" },
    { name: 'GitHub', icon: TbBrandGithubFilled, size: { width: 40, height: 40 }, color: "#333" },
    { name: 'VS Code', icon: TbBrandVisualStudio, size: { width: 40, height: 40 }, color: "#007ACC" },
    { name: 'SQL Server', icon: TbSql, size: { width: 40, height: 40 }, color: "#CC2927" },  
    { name: '.NET', icon: SiDotnet, size: { width: 40, height: 40 }, color: "#512BD4" },
    { name: 'C#', icon: TbBrandCSharp, size: { width: 40, height: 40 }, color: "#512BD4" },
    { name: 'Python', icon: SiPython, size: { width: 40, height: 40 }, color: "#306998" },
    ]
/*voy a usar el spread operator para repetir arrays: ...skills, ...skills */
/*tambien agregué la funcion para el carrusel directamente en el div ya que tailwind no leia
el archivo css, lo borre. */
    return ( 
   
    <section id="skills">
    <h2 className="text-4xl font-bold text-[#6366f1] mb-8 text-center">skills</h2>
     <div className="overflow-hidden">
      <div className="flex w-max" style={{ animation: 'marquee 20s linear infinite' }}>
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex flex-col items-center mx-8 group cursor-pointer justify-center mx-4">
            <skill.icon size={85}
            style={{color: 'white'}}
            className="opacity-50 transition-all group-hover:opacity-100 duration-300"
            onMouseEnter={e => e.currentTarget.style.color = skill.color}
            onMouseLeave={e => e.currentTarget.style.color = 'white'}
            />
            <span className="text-white/50 text-sm mt-2 group-hover:text-white transition-colors duration-300">
            {skill.name}
            </span>
          </div>
        ))}
       </div>
      </div>
    </section>
    )
  }
    
export default Skills