import Image from "next/image";
import { loadData } from "@/lib/load-data-contentful";
import profilePhoto from "public/profilePhoto.png"
import Button from "../Button";

interface AboutProps {
  lang: string
}

const About: React.FC<AboutProps> = async ({ lang }) => {
  const dataLoaded = await loadData(lang);
  const contentfulData = dataLoaded.aboutCollection.items[0];

  return (
    <section id="about" className="flex flex-col lg:flex-row lg:gap-10 items-center lg:justify-center lg:items-center py-30 px-6 lg:pt-0 bg-Background">
      <div className="relative w-[80%] aspect-square lg:w-1/2 lg:max-h-[520px]">
        <Image src={profilePhoto} alt="profile-photo" fill className="object-contain" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="mt-20 mb-10 text-Titles text-5xl text-center lg:text-left font-Geist-Mono font-bold">{contentfulData.title}</h2>
        <p className="mt-5 text-Text text-2xl font-Geist">{contentfulData.description}</p>
        <p className="mt-2.5 mb-10 text-Text text-2xl font-Geist">{contentfulData.description2}</p>
        <a href="/CV_Alejandro_Mira.pdf" download="CV_Alejandro_Mira.pdf">
          <Button>{contentfulData.button}</Button>
        </a>
      </div>
    </section>
  )
} 

export default About;