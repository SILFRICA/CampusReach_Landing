import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarData } from "./NavbarData";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  const handleActiveNav = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <nav className="flex flex-col items-center gap-6 md:flex-row">
      {navbarData.map((nav, index) => (
        <Link
          to={nav.to}
          key={index}
          className={`text-xs md:text-lg font-medium transition-all ${
            activeNav === nav.to
              ? "text-forest-green-500"
              : "text-black hover:text-forest-green-500"
          }`}
          onClick={() => handleActiveNav(nav.to)}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
