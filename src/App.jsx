import './App.css'
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-[#111111] min-h-screen font-sans text-white">
      <Navbar />
      <section className="min-h-screen flex items-center px-4 md:px-10 max-w-7xl mx-auto pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gray-800">
              <img 
                src="/your-image.jpg"
                alt="Portfolio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Optional decorative element */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-white/20 -z-10"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold">
              My
              <br />
              Portfolio
            </h1>
            <p className="text-gray-400 max-w-lg">
              {/* Backend Developer specializing in Node.js, PostgreSQL, and Supabase. 
              Building scalable solutions and RESTful APIs with a passion for clean code. */}
              I’m a backend developer skilled in Node.js, Express, PostgreSQL, and Supabase. I build robust APIs and microservices that power modern web applications.
              I’m passionate about clean code, efficient database design, and scalable architecture.  
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors">
                Explore My Work
              </button>
              <button className="flex items-center gap-2 px-8 py-3 border border-white/20 hover:bg-white/5 transition-colors">
                <span>View GitHub</span>
                {/* <span>Play Video</span> */}
                {/* <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
              </button>
            </div>
            
          </div>
        </div>
      </section>
      <div id="about"><About /></div>
      <div id="tech-stack"><TechStack /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}

export default App;