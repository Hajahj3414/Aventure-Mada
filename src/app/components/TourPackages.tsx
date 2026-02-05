import { motion } from 'motion/react';
import { Clock, MapPin, Home, Star } from 'lucide-react';

const packages = [
  {
    title: 'Escapade Côtière',
    duration: '3j / 2n',
    price: '450 000 Ar',
    destinations: 'Nosy Be - Tanikely',
    highlights: ['Transport A/R', 'Guide francophone', 'Hébergement', 'Plongée snorkeling'],
    popular: true,
  },
  {
    title: 'Aventure dans le Sud',
    duration: '5j / 4n',
    price: '780 000 Ar',
    destinations: 'Isalo - Ifaty - Tuléar',
    highlights: ['4x4 tout terrain', 'Guide expert', 'Hôtel 3 étoiles', 'Randonnées guidées'],
    popular: false,
  },
  {
    title: 'Circuit des Baobabs',
    duration: '4j / 3n',
    price: '620 000 Ar',
    destinations: 'Morondava - Kirindy - Belo sur Tsiribihina',
    highlights: ['Minibus climatisé', 'Guide local', 'Pension complète', 'Safari nocturne'],
    popular: true,
  },
  {
    title: 'Grand Tour de l\'Est',
    duration: '7j / 6n',
    price: '1 250 000 Ar',
    destinations: 'Andasibe - Tamatave - Sainte-Marie',
    highlights: ['Transport confort', 'Guide naturaliste', 'Hôtels premium', 'Observation lémuriens'],
    popular: false,
  },
];

export function TourPackages() {
  return (
    <section id="circuits" className="py-20 px-4" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#333333' }}
          >
            Circuits proposés
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
            Des programmes sur mesure pour tous les voyageurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 relative"
            >
              {pkg.popular && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-1"
                  style={{ backgroundColor: '#1B5E20', color: '#FFFFFF' }}
                >
                  <Star size={14} fill="#FFFFFF" />
                  <span style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Populaire
                  </span>
                </div>
              )}

              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#333333' }}
              >
                {pkg.title}
              </h3>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2" style={{ color: '#0288D1' }}>
                  <Clock size={18} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {pkg.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2" style={{ color: '#1B5E20' }}>
                  <MapPin size={18} />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>
                    {pkg.destinations}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4
                  className="mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#333333' }}
                >
                  Inclus :
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Home size={16} style={{ color: '#1B5E20', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', color: '#333333', fontSize: '0.9rem' }}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333', fontSize: '0.875rem' }}>
                    À partir de
                  </p>
                  <p
                    className="text-2xl"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0288D1' }}
                  >
                    {pkg.price}
                  </p>
                </div>
                <button
                  className="px-6 py-3 rounded-lg transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: '#1B5E20',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Réserver
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
