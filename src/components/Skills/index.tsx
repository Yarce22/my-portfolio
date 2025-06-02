import Image from "next/image"
import html from "assets/Icons/icons8-html5.svg"
import css from "assets/Icons/icons8-css3.svg"
import js from "assets/Icons/icons8-javascript.svg"
import ts from "assets/Icons/icons8-mecanografiado.svg"
import github from "assets/Icons/icons8-github.svg"
import git from "assets/Icons/icons8-git.svg"
import react from "assets/Icons/icons8-reaccionar.svg"
import next from "assets/Icons/icons8-siguientejs.svg"
import vite from "assets/Icons/logo-vitejs.svg"
import vitest from "assets/Icons/logo-vitest.svg"

const iconSkills = [
  {name: "HTML", icon: html},
  {name: "CSS", icon: css},
  {name: "JavaScript", icon: js},
  {name: "TypeScript", icon: ts},
  {name: "React.js", icon: react},
  {name: "Next.js", icon: next},
  {name: "Vite.js", icon: vite},
  {name: "Vitest", icon: vitest},
  {name: "Git", icon: git},
  {name: "GitHub", icon: github},
]

const Skills: React.FC = () => {
  return (
    <section className="pb-10">
      <div className="grid place-items-center gap-10 grid-cols-2 md:grid-cols-5">
        {iconSkills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2">
            <div className="w-20 h-20">
              <Image src={skill.icon} alt={skill.name} className="w-full h-full" />
            </div>
            <p className="text-Text text-xl font-Geist">{skill.name}</p>
          </div>
          ))
        }
      </div>
    </section>
  )
}



export default Skills