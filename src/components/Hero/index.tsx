import Link from "next/link";
import { loadData } from "@/lib/load-data-contentful";
import SocialIcons from "../SocialMedia";
import Button from "../Button";

interface HeroProps {
  lang: string
}

const Hero: React.FC<HeroProps> = async ({ lang }) => {
  const dataLoaded = await loadData(lang);
  const contentfulData = dataLoaded.heroCollection.items[0];

  return (
    <section id="hero" className="flex flex-col justify-center px-6 py-20 lg:h-screen lg:py-0 lg:px-32 bg-Background">
      <span className="px-1 text-Titles text-3xl lg:text-5xl font-Geist font-semibold">{contentfulData.subtitle}</span>
      <h1 className="mt-5 mb-10 lg:w-[500px] text-Text text-5xl lg:text-8xl font-Geist-Mono font-bold">{contentfulData.title}</h1>
      <Link href="#portfolio" className="block w-60 lg:w-72">
        <Button>{contentfulData.button}</Button>
      </Link>
      <div className="my-10">
        <SocialIcons />
      </div>
    </section>
  )
}

export default Hero;