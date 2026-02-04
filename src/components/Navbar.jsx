import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/J.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-white" : "text-zinc-400 hover:text-white"
    }`;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <motion.img
            src={Logo}
            alt="Jasper Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            whileHover={{ rotate: [0, 10, -10, 0], scale: 1.15 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.h1
            className="text-xl sm:text-2xl font-bold tracking-wide text-white"
            whileHover={{ scale: 1.05, letterSpacing: "0.15em" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Jasper
          </motion.h1>
        </NavLink>

        <div className="hidden md:flex gap-8">
          {navLinks.map(({ path, label }) => (
            <NavLink key={path} to={path} className={linkStyle}>
              {({ isActive }) => (
                <div className="relative">
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-400"
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-200 focus:outline-none"
        >
          <motion.div animate={menuOpen ? "open" : "closed"} className="space-y-1.5">
            <motion.span
              className="block h-0.5 w-6 bg-white"
              variants={{ open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              variants={{ open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }}
            />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-zinc-900/95 backdrop-blur border-t border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
