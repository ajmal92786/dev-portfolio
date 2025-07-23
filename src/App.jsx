import "./App.css";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-[#111111] min-h-screen font-sans text-white">
      <Navbar />
      <section
        id="hero-section"
        className="min-h-screen flex items-center justify-center px-4 md:px-10 max-w-5xl mx-auto pt-20 relative z-0"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl mx-auto">
          {/* Left side - Image */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-x-3 gap-y-7 w-full md:w-1/2 px-1 py-5">
            <div className="relative w-[250px] h-[300px]">
              <div className="h-full w-full bg-gray-800 overflow-hidden">
                <img
                  src="./profile-pic.jpeg"
                  alt="Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-white/20 -z-10"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-x-3 gap-y-7 w-full md:w-1/2 px-1 py-5">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
              Welcome,
            </h1>
            <p className="text-gray-400 text-center md:text-left">
              Backend developer skilled in Node.js, Express, PostgreSQL &
              Supabase. I build scalable APIs, integrate external services, and
              write clean, testable code. Always exploring new tech and
              improving as a problem solver.
            </p>
            <div className="flex flex-row flex-wrap items-center gap-4 pt-4 justify-center md:justify-start w-full">
              <a
                href="#projects"
                className="bg-white text-black px-3 py-2 whitespace-nowrap hover:bg-gray-200 transition-colors"
              >
                Explore My Work
              </a>
              <a
                href="https://github.com/ajmal92786"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 whitespace-nowrap border border-white/20 hover:bg-white/5 transition-colors"
              >
                <span>View Github</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="/Mohd_Ajmal_Raza_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 whitespace-nowrap border border-white/20 hover:bg-white/5 transition-colors"
              >
                <span>View Resume</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <TechStack />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </main>
  );
}

export default App;
