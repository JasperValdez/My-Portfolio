import { FaReact, FaJsSquare, FaCss3Alt } from "react-icons/fa";

export default function About() {
  return (
    <section className="flex justify-center py-16">
      <div className="w-full max-w-3xl bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-2xl shadow-xl p-10">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          About Me
        </h2>

        {/* Divider */}
        <div className="h-px w-16 bg-indigo-700 mx-auto mb-6" />

        {/* Content */}
        <p className="text-zinc-300 leading-relaxed text-center text-sm mb-6">
          Hi! I’m <span className="text-white font-medium">Jasper Valdez</span>, a
          BSIT student passionate about learning web development and building modern applications. 
          I enjoy working with technologies like{" "}
          <span className="text-white font-semibold">React</span>,{" "}
          <span className="text-white font-semibold">JavaScript</span>, and{" "}
          <span className="text-white font-semibold">Tailwind CSS</span>. 
          My goal is to create projects that solve real-world problems with clean and efficient code.
        </p>

        {/* Tech Icons */}
        <div className="flex justify-center gap-6 text-4xl text-indigo-500">
          <FaReact title="React" className="hover:scale-110 transition-transform duration-200" />
          <FaJsSquare title="JavaScript" className="hover:scale-110 transition-transform duration-200" />
          <FaCss3Alt title="CSS3" className="hover:scale-110 transition-transform duration-200" />
        </div>
      </div>
    </section>
  );
}
