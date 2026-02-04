import HomePhoto from "../assets/1x1.jpg";

export default function Home() {
  return (
    <section className="flex justify-center items-center py-16">
      <div className="w-full max-w-3xl bg-gradient-to-r from-zinc-800/80 via-zinc-900/70 to-zinc-800/80 backdrop-blur-md border border-zinc-700 rounded-2xl shadow-xl p-10 text-center">
        
        <div className="w-48 h-48 mx-auto overflow-hidden border-4 border-indigo-500 rounded-lg mb-6">
          <img
            src={HomePhoto}
            alt="Jasper Valdez"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Jasper Valdez</h1>
        <p className="text-zinc-300 text-sm mb-6">
          BSIT Student / Aspiring Web Developer & Game Developer
        </p>

        <p className="text-zinc-300 text-sm leading-relaxed">
          Passionate about building modern web applications and constantly learning new technologies. I create projects that are clean, functional, and visually appealing.
        </p>

        <div className="h-px w-16 bg-indigo-500 mx-auto mt-6" />
      </div>
    </section>
  );
}
