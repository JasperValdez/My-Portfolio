import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaPaintBrush,
  FaBook,
  FaUsers,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML & CSS", icon: FaLaptopCode },
    { name: "JavaScript", icon: FaLaptopCode },
    { name: "React", icon: FaLaptopCode },
    { name: "Tailwind CSS", icon: FaPaintBrush },
    { name: "Database Basics", icon: FaDatabase },
    { name: "Team Collaboration", icon: FaUsers },
    { name: "Time Management", icon: FaBook },
    { name: "Git & GitHub", icon: FaLaptopCode },
  ];

  return (
    <section className="relative flex justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl p-8 sm:p-12"
      >
 
        <div className="absolute -inset-0.5 bg-indigo-500/10 blur-2xl rounded-3xl -z-10" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          Skills
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="h-1 bg-indigo-500 rounded-full mx-auto mb-12"
        />

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {skills.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 30px rgba(99,102,241,0.35)",
              }}
              transition={{ type: "spring", stiffness: 220 }}
              className="relative flex flex-col items-center justify-center gap-3
                         rounded-2xl bg-zinc-800/60 backdrop-blur
                         border border-zinc-700 px-4 py-6 text-center"
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-3xl sm:text-4xl text-indigo-400"
              >
                <Icon />
              </motion.div>

              <span className="text-xs sm:text-sm font-medium text-zinc-200">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
