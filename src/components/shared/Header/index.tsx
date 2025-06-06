"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Links from "components/Links";
import BurgerIcon from "components/BurgerIcon";
import logo from "public/logo_AM.svg";
import "./styles.css"

interface HeaderProps {
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<boolean>(false)

  const toggleMenu = () => setIsOpen(!isOpen);


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed z-50 flex items-center justify-between w-full p-4 lg:px-10 font-bold text-Text bg-Background">
      <Link href="/" className="w-14 h-14 lg:w-20 lg:h-20">
        <Image src={logo} alt="logo-yarce" className="w-full h-full"/>
      </Link>
      {!windowSize && (
        <ul className={`${!windowSize ? 'flex items-center gap-11' : 'hidden'}`}>
          <Links lang={lang} toggleMenu={toggleMenu} />
        </ul>
      )}
      {windowSize && (
        <BurgerIcon menuOpen={isOpen} toggleMenu={toggleMenu} />
      )}
      {(windowSize && isOpen) && (
        <ul className="absolute z-50 flex flex-col gap-6 items-center top-[80px] left-0 w-full px-6 py-10 text-White text-xl font-Geist font-bold tracking-[1.36px] bg-Background">
          <Links lang={lang} toggleMenu={toggleMenu} />
        </ul>
      )}
    </header>
  );
};

export default Header;