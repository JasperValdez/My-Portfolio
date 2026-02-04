import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ReviewDetails from "./pages/ReviewDetails";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

function ReactTextBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const count = isMobile ? 10 : 24;
  const words = Array.from({ length: count });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
      {words.map((_, i) => {
        const size = isMobile ? Math.random() * 2 + 2.5 : Math.random() * 4 + 5;
        return (
          <motion.div
            key={i}
            className="absolute font-extrabold tracking-widest text-indigo-400/15 select-none pointer-events-none"
            style={{
              fontSize: `${size}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, isMobile ? 30 : 60, isMobile ? -30 : -60, 0],
              y: [0, isMobile ? -40 : -80, isMobile ? 40 : 80, 0],
              rotate: [0, 12, -12, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            REACT
          </motion.div>
        );
      })}
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen text-zinc-100 overflow-hidden">
      <ReactTextBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {[
              { path: "/", element: <Home /> },
              { path: "/about", element: <About /> },
              { path: "/skills", element: <Skills /> },
              { path: "/projects", element: <Projects /> },
              { path: "/contact", element: <Contact /> },
              { path: "/reviews/:id", element: <ReviewDetails /> },
            ].map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    {element}
                  </motion.div>
                }
              />
            ))}
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
