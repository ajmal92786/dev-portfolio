const tech = [
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "Sequelize"],
  },
  {
    category: "Authentication & Storage",
    items: ["JWT & OAuth", "Multer & Cloudinary"],
  },
  {
    category: "Frontend & Testing",
    items: ["React", "Tailwind CSS", "Jest"],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-[#ccd6f6]">
        <span className="text-[#64ffda] font-mono">02.</span> Tech Stack
      </h2>
      <div className="space-y-12">
        {tech.map(({ category, items }) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded border border-[#64ffda] text-[#64ffda]
                           text-sm font-medium hover:bg-[#64ffda]/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}