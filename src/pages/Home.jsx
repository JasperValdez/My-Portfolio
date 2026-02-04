import { motion } from "framer-motion";
import HomePhoto from "../assets/1x1.jpg";

export default function Home() {
  return (
    <section className="flex justify-center items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-gradient-to-r from-zinc-800/80 via-zinc-900/70 to-zinc-800/80 backdrop-blur-md border border-zinc-700 rounded-2xl shadow-xl p-8 sm:p-10 text-center"
      >
        {/* Profile Photo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-40 h-40 sm:w-48 sm:h-48 mx-auto overflow-hidden border-4 border-indigo-500 rounded-lg mb-6"
        >
          <img
            src={HomePhoto}
            alt="Jasper Valdez"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-2"
        >
          Jasper Valdez
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-zinc-300 text-sm sm:text-base mb-6"
        >
          BSIT Student / Aspiring Web Developer & Game Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-zinc-300 text-sm sm:text-base leading-relaxed"
        >
          Passionate about building modern web applications and constantly learning new technologies. I create projects that are clean, functional, and visually appealing.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "4rem" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="h-px bg-indigo-500 mx-auto mt-6"
        />
      </motion.div>
    </section>
  );
}
