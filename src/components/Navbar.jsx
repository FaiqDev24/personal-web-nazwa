import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Achievement', href: '#achievement' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(233,30,140,0.1)] py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav('#home')}
          className="font-playfair text-2xl font-bold text-[#1a1a2e] tracking-wide"
        >
          Nazwa<span className="text-[#e91e8c]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative text-sm font-medium pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#e91e8c] after:rounded-full after:transition-all after:duration-300 ${
                  active === link.href
                    ? 'text-[#e91e8c] after:w-full'
                    : 'text-[#1a1a2e] hover:text-[#e91e8c] after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-[#1a1a2e] rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#1a1a2e] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#1a1a2e] rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-[-4px_0_30px_rgba(233,30,140,0.12)] flex flex-col justify-center items-center gap-8 transition-all duration-400 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => handleNav(link.href)}
            className={`text-lg font-medium transition-colors duration-300 ${
              active === link.href ? 'text-[#e91e8c]' : 'text-[#1a1a2e] hover:text-[#e91e8c]'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
