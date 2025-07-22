import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLock,
  FaJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSequelize,
  SiSupabase,
  SiPostman,
  SiJest,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const tech = [
  {
    category: "Languages & Core Technologies",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
      // { name: "React", icon: <FaReact className="text-xl" /> },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Express.js", icon: <SiExpress className="text-xl" /> },
      { name: "REST API", icon: <SiPostman className="text-xl" /> },
      { name: "JWT & OAuth", icon: <FaLock className="text-xl" /> },
    ],
  },
  {
    category: "Databases & ORMs",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-xl" /> },
      { name: "Sequelize", icon: <SiSequelize className="text-xl" /> },
      { name: "Supabase", icon: <SiSupabase className="text-xl" /> },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "VS Code", icon: <VscCode className="text-xl" /> }, // Updated icon
      { name: "Git", icon: <FaGitAlt className="text-xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-xl" /> },
      { name: "Postman", icon: <SiPostman className="text-xl" /> },
      { name: "Jest", icon: <SiJest className="text-xl" /> },
    ],
  },
  // {
  //   category: "Frontend & Storage",
  //   items: [
  //     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
  //     { name: "Multer & Cloudinary", icon: <FaCloudversify className="text-xl" /> },
  //   ],
  // },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-12 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-[#e9ebf1]">Tech Stack</h2>
        <div className="h-[1px] bg-[#c5d1e6] flex-grow"></div>
      </div>

      <div className="space-y-8">
        {tech.map(({ category, items }) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map(({ name, icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 rounded 
                           bg-white text-black font-medium
                           hover:transform hover:scale-105 transition-all
                           shadow-md hover:shadow-lg"
                >
                  {icon}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
