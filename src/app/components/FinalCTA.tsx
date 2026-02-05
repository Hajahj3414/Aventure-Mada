import { motion } from 'motion/react';

export function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative py-32 px-4 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1760863329383-7004c4fd6b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRhZ2FzY2FyJTIwYmVhY2glMjB0cm9waWNhbCUyMHBhcmFkaXNlfGVufDF8fHx8MTc3MDMxMDI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: '#1B5E20', opacity: 0.85 }}></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl mb-6"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
          Prêt à découvrir Madagascar ?
        </h2>
        <p
          className="text-xl md:text-2xl mb-10"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#FFFFFF',
          }}
        >
          Commencez votre aventure aujourd'hui avec MizaraVoyage
        </p>
        <button
          onClick={scrollToContact}
          className="px-12 py-5 rounded-lg text-lg transition-all hover:shadow-2xl hover:scale-105"
          style={{
            backgroundColor: '#FFFFFF',
            color: '#1B5E20',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
          }}
        >
          Contactez-nous maintenant
        </button>
      </motion.div>
    </section>
  );
}
