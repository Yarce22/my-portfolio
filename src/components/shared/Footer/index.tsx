import SocialIcons from "@/components/SocialMedia";
import { loadData } from "@/lib/load-data-contentful";
import Form from "components/Form";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo_AM.svg"

interface FooterProps {
  lang: string
}

const Footer: React.FC<FooterProps> = async ({ lang }) => {
  const dataLoaded = await loadData(lang);
  const contentfulData = dataLoaded.contactCollection.items[0];

  return (
    <footer id="contact" className="bg-BackgroundHero">
      <div className="flex flex-col items-center pt-32 pb-10 bg-linear-to-l from-Titles to-green-950 rounded-t-[80px] opacity-80">
        <h2 className="pb-10 px-8 text-Text text-4xl text-center font-Geist font-bold">{contentfulData.title}</h2>
        <p className="px-8 pb-10 lg:px-40 text-xl text-Text font-Geist">{contentfulData.description}</p>

        <Form name={contentfulData.inputName} email={contentfulData.inputEmail} message={contentfulData.inputMessage} buttonText={contentfulData.button} />

        <hr className="bg-Text h-[3px] w-full mt-20 mb-10 mx-5 opacity-50" />

        <div className="flex justify-between items-center px-8 lg:px-40 w-full">
          <Link href="/" className="cursor-pointer">
            <Image src={logo} alt="Logo" className="w-14 h-14 lg:w-20 lg:h-20" />
          </Link>

          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}

export default Footer
