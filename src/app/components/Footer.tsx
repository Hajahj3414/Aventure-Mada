import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#333333] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#FFFFFF' }}
            >
              MizaraVoyage
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#CCCCCC', lineHeight: '1.6' }}>
              Votre agence de voyage locale à Madagascar pour des expériences authentiques et inoubliables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#FFFFFF' }}
            >
              Liens rapides
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="hover:text-[#0288D1] transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('destinations')}
                  className="hover:text-[#0288D1] transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('circuits')}
                  className="hover:text-[#0288D1] transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Circuits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#0288D1] transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#FFFFFF' }}
            >
              Contact
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-2" style={{ color: '#CCCCCC' }}>
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center gap-2" style={{ color: '#CCCCCC' }}>
                <Phone size={18} />
                <span>+261 34 XX XXX XX</span>
              </li>
              <li className="flex items-center gap-2" style={{ color: '#CCCCCC' }}>
                <Mail size={18} />
                <span>xxxxXxxx@MizaraVoyage.mg</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#FFFFFF' }}
            >
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#0288D1' }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#0288D1' }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-600 text-center">
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#CCCCCC' }}>
            © 2026 MizaraVoyage. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
