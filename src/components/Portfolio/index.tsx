"use client"
import { useState } from "react"
import { gql, useSuspenseQuery } from "@apollo/client"
import Projects from "../Projects"
import Certificates from "../Certificates"
import Skills from "../Skills"
import Button from "../Button"
import Link from "next/link"

interface PortfolioProps {
  lang: string
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const { data } = useSuspenseQuery<portfolioCollection>(gql`
  query {
    portfolioCollection (locale: "${lang}") {
      items {
        title,
        navPorjects,
        buttonProjects,
        navCertificates,
        buttonCertificates,
        navSkills
      }
    },
  }
`);

const contentfulData = data?.portfolioCollection.items[0];

const [navProjects, setNavProjects] = useState([
  {id: 1, name: contentfulData.navPorjects, isActive: true, Component: Projects, buttonText: contentfulData.buttonProjects, link: "/portfolio"},
  {id: 2, name: contentfulData.navCertificates, isActive: false, Component: Certificates, buttonText: contentfulData.buttonCertificates, link: "/certificates"},
  {id: 3, name: contentfulData.navSkills, isActive: false, Component: Skills}
]);

  const handleNavActive = (id: number) => {
    const newStateNavProjects = navProjects.map((project) => {
      if (project.id === id) {
        return { ...project, isActive: true };
      } else {
        return { ...project, isActive: false };
      }
    })
    setNavProjects(newStateNavProjects);
  };

  return(
    <section id="portfolio" className="flex flex-col items-center py-32 px-6 bg-BackgroundHero">
      <h2 className="mb-12 text-Titles text-5xl text-center font-Geist-Mono font-bold">{contentfulData.title}</h2>
      <div>
        <ul className="flex flex-row gap-10 items-center justify-center w-full px-4 pt-4 pb-12 lg:px-10 font-bold text-Text">
          {navProjects.map((nav) => (
            <li
              key={nav.id}
              onClick={() => handleNavActive(nav.id)}
              className={`relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles ${nav.isActive ? "text-Titles" : "text-White"}`}
            >
              {nav.name}
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
        {navProjects.map((nav) => {
          if (nav.isActive) {
            return (
              <div key={nav.id} className="flex flex-col justify-center items-center">
                <nav.Component limit={6} />
                {nav.buttonText &&
                  <Link href={`${lang}${nav.link}`}>
                    <Button>{nav.buttonText}</Button>
                  </Link>
                }
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Portfolio;