interface ButtonProp {
  children: React.ReactNode,
  type?: "submit" | "reset" | "button" | undefined,
  disabled?: boolean
}

const Button: React.FC<ButtonProp> = ({ children, type = "button", disabled }) => {

  return (
    <button className="relative max-w-80 h-14 px-10 bg-Titles rounded-xl cursor-pointer font-Geist font-bold text-Text tracking-[1.5px] after:absolute after:content-[''] after:inset-0 after:z-0 after:bg-white after:opacity-0 after:transition after:duration-400 after:ease-in-out hover:after:opacity-20" type={type} disabled={disabled}>{ children }</button>
  )
}

export default Button