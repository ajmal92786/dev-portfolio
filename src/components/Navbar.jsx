import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero-section" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const navHeight = 80;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-[#1a1a1a] shadow-2xl" : "bg-[#1a1a1a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero-section"
            onClick={(e) => handleScroll(e, "#hero-section")}
            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Mohd Ajmal Raza
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 px-4 py-2"
                style={{
                  animation: `fadeIn 0.5s ease-out`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="bg-white text-black px-6 py-2 rounded-none hover:bg-gray-200 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 h-64" : "opacity-0 h-0"
          } overflow-hidden`}
        >
          <div className="py-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="block w-full mt-4 bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
