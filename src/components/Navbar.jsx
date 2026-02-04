import { NavLink } from "react-router-dom";
import Logo from "../assets/J.webp"; 

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `
      relative px-1 py-2 text-sm font-medium transition-all duration-200
      ${
        isActive
          ? "text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white"
          : "text-zinc-400 hover:text-white"
      }
    `;

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Jasper Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-lg font-bold tracking-wide text-white">Jasper</h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/skills" className={linkStyle}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
