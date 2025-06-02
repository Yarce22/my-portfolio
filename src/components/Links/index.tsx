"use client"

import Link from "next/link";
import { gql, useSuspenseQuery } from "@apollo/client"
import Button from "../Button";

interface LinksProps {
  lang: string;
  toggleMenu?: () => void;
}

const Links: React.FC<LinksProps> = ({ lang, toggleMenu }) => {

  const { data } = useSuspenseQuery<navbarCollection>(gql`
    query {
      navbarCollection (locale: "${lang}") {
        items {
          home,
          about,
          portfolio,
          contact
        }
      },
    }
  `);

  const contentfulData = data?.navbarCollection.items[0]

  return (
    <>
      <Link
        href="#home"
        onClick={toggleMenu}
        className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles"
      >
        {contentfulData.home}
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link
        href="#about"
        onClick={toggleMenu}
        className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles"
      >
        {contentfulData.about}
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link
        href="#portfolio"
        onClick={toggleMenu}
        className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles"
      >
        {contentfulData.portfolio}
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-Titles transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </Link>
      <Link
        href="#contact"
        onClick={toggleMenu}
        className="relative inline-block group cursor-pointer transition-color duration-300 ease-in-out hover:text-Titles"
      >
        <Button>{contentfulData.contact}</Button>
      </Link> 
    </>
  )
};

export default Links;