import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaCss3Alt } from "react-icons/fa";

export default function About() {
  const techs = [
    { icon: FaReact, label: "React", color: "text-cyan-400" },
    { icon: FaJsSquare, label: "JavaScript", color: "text-yellow-400" },
    { icon: FaCss3Alt, label: "Tailwind CSS", color: "text-blue-400" },
  ];

  // Loop Slider
  const sliderItems = [...techs, ...techs];

  return (
    <section className="flex justify-center items-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-4xl rounded-3xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 shadow-2xl p-8 sm:p-12"
      >

        <div className="absolute -inset-0.5 bg-indigo-600/10 rounded-3xl blur-2xl -z-10" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          About Me
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="h-1 rounded-full bg-indigo-500 mx-auto mb-8"
        />

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-zinc-300 leading-relaxed text-center text-sm sm:text-base max-w-2xl mx-auto mb-10"
        >
          Hi! I’m <span className="text-white font-semibold">Jasper Valdez</span>, a
          BSIT student passionate about learning web development and building
          modern applications. I enjoy working with{" "}
          <span className="text-white font-medium">React</span>,{" "}
          <span className="text-white font-medium">JavaScript</span>, and{" "}
          <span className="text-white font-medium">Tailwind CSS</span>. My goal is
          to create projects that solve real-world problems using clean,
          efficient, and scalable code.
        </motion.p>

        {/* Seamless Tech Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 sm:gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 12, 
                ease: "linear",
              },
            }}
          >
            {sliderItems.map(({ icon: Icon, label, color }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 min-w-[80px]"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`text-4xl sm:text-5xl ${color}`}
                >
                  <Icon />
                </motion.div>
                <span className="text-xs sm:text-sm text-zinc-400">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
