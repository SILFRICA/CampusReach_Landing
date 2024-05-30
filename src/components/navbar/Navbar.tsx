import React, {useState} from "react"
import { navbarData } from "./NavbarData"

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("Overview");

  const handleActiveNav = (nav: string) => {
    setActiveNav(nav);
  }

  return (
    <nav className="flex flex-col items-center gap-6 md:flex-row">
      {navbarData.map((nav, index) => (
        <a href="#" key={index} className={`text-xs md:text-lg font-medium transition-all ${activeNav === nav ? 'text-forest-green-500' : 'text-black hover:text-forest-green-500'}`} onClick={() => handleActiveNav(nav)}>
          {nav}
        </a>
      ))}
    </nav>
  )
}

export default Navbar