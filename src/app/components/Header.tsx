import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#1B5E20' }}>
              MizaraVoyage
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            <button onClick={() => scrollToSection('accueil')} className="hover:text-[#1B5E20] transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('destinations')} className="hover:text-[#1B5E20] transition-colors">
              Destinations
            </button>
            <button onClick={() => scrollToSection('circuits')} className="hover:text-[#1B5E20] transition-colors">
              Circuits
            </button>
            <button onClick={() => scrollToSection('a-propos')} className="hover:text-[#1B5E20] transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#1B5E20] transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-lg transition-all hover:shadow-lg"
              style={{ 
                backgroundColor: '#0288D1', 
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600
              }}
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('accueil')} className="text-left py-2 hover:text-[#1B5E20]">
                Accueil
              </button>
              <button onClick={() => scrollToSection('destinations')} className="text-left py-2 hover:text-[#1B5E20]">
                Destinations
              </button>
              <button onClick={() => scrollToSection('circuits')} className="text-left py-2 hover:text-[#1B5E20]">
                Circuits
              </button>
              <button onClick={() => scrollToSection('a-propos')} className="text-left py-2 hover:text-[#1B5E20]">
                À propos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-[#1B5E20]">
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 rounded-lg text-white"
                style={{ backgroundColor: '#0288D1', fontWeight: 600 }}
              >
                Nous contacter
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
