interface BurgerIconProps {
  menuOpen: boolean;
  toggleMenu: () => void | undefined;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="grid place-items-center w-8 h-8 py-2 border-[2px] border-Text cursor-pointer " onClick={toggleMenu}>
      <div className={`${menuOpen ? "open" : ""} w-[16px] h-[1.5px] bg-Text transition-all duration-400 ease-in-out`}></div>
      <div className={`${menuOpen ? "open" : ""} w-[16px] h-[1.5px] bg-Text transition-all duration-400 ease-in-out`}></div>
      <div className={`${menuOpen ? "open" : ""} w-[16px] h-[1.5px] bg-Text transition-all duration-400 ease-in-out`}></div>
    </div>
  )
}

export default BurgerIcon;