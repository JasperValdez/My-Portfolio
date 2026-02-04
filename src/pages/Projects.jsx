import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LockAndLoadedImg from "../assets/Lock&Loaded.png";
import CartImg from "../assets/Cart.png";
import UnsplashImg from "../assets/Unsplash.png";
import CrudImg from "../assets/Crud.png";
import TicImg from "../assets/Tictactoe.png";
import CardImg from "../assets/Card.png";

export default function Projects() {
  const [modalImg, setModalImg] = useState(null);

  const projects = [
    {
      title: "Lock & Loaded",
      description:
        "A group project where I worked on frontend design and backend functionality.",
      image: LockAndLoadedImg,
      github: "https://github.com/JasperValdez/FINALS",
    },
    {
      title: "Simple Add to Cart",
      description: "A React app with add-to-cart functionality.",
      image: CartImg,
      github: "https://github.com/JasperValdez/MIDTERM-LAB-EXAM-SIR-SAM",
      live: "https://midterm-lab-exam-sir-sam.vercel.app/",
    },
    {
      title: "Unsplash Gallery Dashboard",
      description:
        "A dashboard that fetches images from the Unsplash API with error handling.",
      image: UnsplashImg,
      github: "https://github.com/JasperValdez/Search-Image-Exam",
      live: "https://search-image-exam-1tdg.vercel.app/",
    },
    {
      title: "LocalStorage CRUD App",
      description:
        "A React CRUD application using localStorage for data persistence.",
      image: CrudImg,
      github: "https://github.com/JasperValdez/Activity-2---Task-App",
      live: "https://activity-2-task-app.vercel.app/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "This project contains a simple game of Tic-Tac toe.",
      image: TicImg,
      github: "https://github.com/JasperValdez/TicTacToe",
      live: "https://tic-tac-toe-five-liard-80.vercel.app/",
    },
    {
      title: "SoundCard",
      description:
        "An interactive React music playlist that lets users play songs by clicking visual cards, seamlessly switching tracks with a single tap.",
      image: CardImg,
      github: "https://github.com/JasperValdez/UseState",
      live: "https://use-state-ten-iota.vercel.app/",
    },
  ];

  return (
    <section className="relative flex justify-center px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-12"
      >
        <div className="absolute -inset-0.5 bg-indigo-500/10 blur-2xl rounded-3xl -z-10" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="h-1 bg-indigo-500 rounded-full mx-auto mb-12"
        />


        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-zinc-800/60 backdrop-blur border border-zinc-700 rounded-2xl overflow-hidden"
            >
              <div
                className="relative h-40 sm:h-44 md:h-48 cursor-pointer overflow-hidden"
                onClick={() => setModalImg(project.image)}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm sm:text-base text-white font-medium">
                    Click to preview
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 sm:gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal Preview */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-6"
            onClick={() => setModalImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl sm:max-w-4xl md:max-w-5xl bg-zinc-900 rounded-2xl p-3 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImg}
                alt="Project Preview"
                className="w-full max-h-[75vh] object-contain rounded-lg sm:rounded-xl"
              />
              <button
                onClick={() => setModalImg(null)}
                className="absolute top-2 sm:top-3 right-2 sm:right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-800 hover:bg-red-600 text-white flex items-center justify-center text-xl sm:text-2xl transition"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
