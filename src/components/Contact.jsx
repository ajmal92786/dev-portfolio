export default function Contact() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">
        <span className="text-[#64ffda] font-mono">04.</span> Contact
      </h2>
      <p className="text-xl text-[#8892b0] mb-8 max-w-2xl mx-auto">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:ajmalbly27@gmail.com"
          className="border-2 border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-colors"
        >
          Say Hello
        </a>
      </div>
      <div className="mt-12 flex justify-center gap-8 text-[#8892b0]">
        <a href="https://github.com/ajmal92786" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/mohd-ajmal-raza" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors">
          LinkedIn
        </a>
      </div>
    </section>
  );
}