import { FaLaptopCode, FaDatabase, FaPaintBrush, FaBook, FaProjectDiagram, FaUsers } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML & CSS", icon: <FaLaptopCode /> },
    { name: "JavaScript", icon: <FaLaptopCode /> },
    { name: "React", icon: <FaLaptopCode /> },
    { name: "Tailwind CSS", icon: <FaPaintBrush /> },
    { name: "Database Basics", icon: <FaDatabase /> },
    { name: "Team Collaboration", icon: <FaUsers /> },
    { name: "Time Management", icon: <FaBook /> },
    { name: "Git & GitHub", icon: <FaLaptopCode /> },
  ];

  return (
    <section className="flex justify-center py-16 bg-zinc-900">
      <div className="w-full max-w-4xl bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-2xl shadow-xl p-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-4">Skills</h2>
        <div className="h-px w-16 bg-zinc-700 mx-auto mb-10" />

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
                         rounded-2xl py-5 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-3xl">{skill.icon}</div>
              <div className="text-sm text-center">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
