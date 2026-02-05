import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1760863329383-7004c4fd6b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRhZ2FzY2FyJTIwYmVhY2glMjB0cm9waWNhbCUyMHBhcmFkaXNlfGVufDF8fHx8MTc3MDMxMDI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1
          className="text-5xl md:text-6xl lg:text-7xl mb-6"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
          Découvrez Madagascar autrement
        </h1>
        <p
          className="text-xl md:text-2xl mb-10"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#FFFFFF',
          }}
        >
          Voyages authentiques, guides locaux, expériences inoubliables
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('destinations')}
            className="px-8 py-4 rounded-lg transition-all hover:shadow-xl"
            style={{
              backgroundColor: '#1B5E20',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
            }}
          >
            Voir les destinations
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-white/10"
            style={{
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
            }}
          >
            Parler à un conseiller
          </button>
        </div>
      </motion.div>
    </section>
  );
}
