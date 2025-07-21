const projects = [
  {
    title: "SnapVault",
    description:
      "A photo management API to search Unsplash images, add tags, save to collections, and track user history. Built using Node.js, Express, PostgreSQL (Supabase), and Sequelize.",
    link: "https://github.com/ajmal92786/snapvault",
  },
  {
    title: "TheDocStore",
    description:
      "Document management system with folder restrictions, file metadata, and Cloudinary uploads. Built using Node.js, Sequelize, Supabase, and Multer.",
    link: "https://github.com/ajmal92786/The-Doc-Store",
  },
  {
    title: "MovieCrate",
    description:
      "Backend API integrating TMDB for movie data. Allows favorites, searching, and saving. Built using Node.js, Express, PostgreSQL, and Sequelize.",
    link: "https://github.com/ajmal92786/MovieCrate-Backend",
  },
  {
    title: "OAuth Login App",
    description:
      "Secure authentication system with frontend & backend using token-based OAuth and protected routes.",
    link: "https://github.com/ajmal92786/oauth-server",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-[#ccd6f6]">
        <span className="text-[#64ffda] font-mono">03.</span> Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#64ffda] rounded-full"></span>
              <h3 className="text-xl font-semibold text-[#ccd6f6]">
                {project.title}
              </h3>
            </div>
            <p className="text-[#8892b0] text-sm mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[#64ffda] hover:translate-x-1 transition-transform"
            >
              View Project
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}