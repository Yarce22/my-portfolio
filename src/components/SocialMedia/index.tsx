import Image from "next/image"
import github from "assets/Icons/icons8-github-white.svg"
import linkedin from "assets/Icons/icons8-linkedin.svg"
import whatsapp from "assets/Icons/icons8-whatsapp.svg"

const socialMedia = [
  {name: "Whatsapp", icon: whatsapp,  url: "https://wa.me/573123119897"},
  {name: "LinkedIn", icon: linkedin, url: "https://www.linkedin.com/in/alejandro-mira-yarce-49789816b/"},
  {name: "Github", icon: github, url: "https://github.com/Yarce22"},
]

const SocialIcons = () => {
  return (
    <div className="flex gap-2 lg:gap-6">
      {socialMedia.map(({ name, icon, url }) => (
        <a href={url} key={name}>
          <Image src={icon} alt={name} className="w-10 h-10 lg:w-14 lg:h-14 transform duration-200 ease-in-out hover:scale-125" />
        </a>
      ))}
    </div>
  )
}

export default SocialIcons