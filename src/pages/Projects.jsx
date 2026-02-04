import { useState } from "react";
import LockAndLoadedImg from "../assets/Lock&Loaded.png";
import CartImg from "../assets/Cart.png";
import UnsplashImg from "../assets/Unsplash.png"; 
import CrudImg from "../assets/Crud.png"; 

export default function Projects() {
  const [modalImg, setModalImg] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Lock & Loaded",
      description:
        "A group project where I worked on designing the frontend and developing backend functionality.",
      image: LockAndLoadedImg,
      github: "https://github.com/JasperValdez/FINALS",
    },
    {
      id: 2,
      title: "Simple Add to Cart",
      description: "This project contains a product that you can add to the cart.",
      image: CartImg,
      github: "https://github.com/JasperValdez/MIDTERM-LAB-EXAM-SIR-SAM",
      live: "https://midterm-lab-exam-sir-sam.vercel.app/",
    },
    {
      id: 3,
      title: "Unsplash Gallery Dashboard",
      description:
        "A React dashboard that fetches images from the Unsplash API, handles loading and error states, and uses useEffect, useRef, conditional rendering, and environment variables for API key simulation.",
      image: UnsplashImg,
      github: "https://github.com/JasperValdez/Search-Image-Exam", 
      live: "https://search-image-exam-1tdg.vercel.app/", 
    },
    {
      id: 4,
      title: "LocalStorage CRUD React App",
      description:
        "A form-based React application that uses useEffect and useRef to perform CRUD operations with data persisted in localStorage, automatically restoring state on page refresh and conditionally rendering UI elements.",
      image: CrudImg,
      github: "https://github.com/JasperValdez/Activity-2---Task-App", 
      live: "https://activity-2-task-app.vercel.app/",
    },
  ];

  return (
    <section className="flex justify-center py-16 bg-zinc-900">
      <div className="w-full max-w-5xl bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-3xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Projects
        </h2>
        <div className="h-px w-20 bg-indigo-600 mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative cursor-pointer overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => setModalImg(project.image)}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-300 text-sm">{project.description}</p>
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-3 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2 px-4 rounded-xl shadow hover:shadow-lg transition-all duration-200"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-xl shadow hover:shadow-lg transition-all duration-200"
                    >
                      Vercel
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setModalImg(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[85vh] p-4 bg-zinc-900/90 rounded-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImg}
              alt="Preview"
              className="max-h-[70vh] max-w-full rounded-xl object-contain shadow-2xl animate-scaleUp"
            />
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-3 right-3 bg-zinc-800/70 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-colors shadow-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes scaleUp {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scaleUp { animation: scaleUp 0.2s ease-out forwards; }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
      `}</style>
    </section>
  );
}
