export default function About() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">
        <span className="text-[#64ffda] font-mono">01.</span> About Me
      </h2>
      <div className="text-[#8892b0] text-lg leading-relaxed space-y-4">
        <p>
          I'm <span className="text-[#64ffda]">Mohd Ajmal Raza</span>, a backend developer specializing in Node.js, Express, PostgreSQL, and Supabase.
        </p>
        <p>
          I love building RESTful APIs, integrating third-party services like Spotify & TMDB, and writing clean, testable code with Jest.
        </p>
        <p>
          My goal is to deliver scalable, developer-friendly solutions and grow as a full-stack problem solver.
        </p>
        <p>
          When I'm not coding, I enjoy exploring new tech, reading, and contributing to open-source projects.
        </p>
      </div>
    </section>
  );
}