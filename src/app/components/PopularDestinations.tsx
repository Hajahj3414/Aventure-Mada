import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Allée des Baobabs',
    description: 'Admirez les majestueux baobabs au coucher du soleil',
    image: 'https://images.unsplash.com/photo-1659944984855-776187144baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW9iYWIlMjBhdmVudWUlMjBNYWRhZ2FzY2FyJTIwc3Vuc2V0fGVufDF8fHx8MTc3MDMxMDI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Forêt de Ranomafana',
    description: 'Explorez la biodiversité unique de la forêt tropicale',
    image: 'https://images.unsplash.com/photo-1658663072072-1b3dfe599464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRhZ2FzY2FyJTIwcmFpbmZvcmVzdCUyMGp1bmdsZSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MDMxMDI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Parc de l\'Isalo',
    description: 'Canyons spectaculaires et paysages à couper le souffle',
    image: 'https://images.unsplash.com/photo-1706322807347-844dd4c2695e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRhZ2FzY2FyJTIwY2FueW9uJTIwbGFuZHNjYXBlJTIwcm9ja3xlbnwxfHx8fDE3NzAzMTAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Île de Nosy Be',
    description: 'Plages paradisiaques et eaux cristallines',
    image: 'https://images.unsplash.com/photo-1529692776239-19cbd1334490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHR1cnF1b2lzZSUyMHdhdGVyfGVufDF8fHx8MTc3MDMxMDI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function PopularDestinations() {
  return (
    <section id="destinations" className="py-20 px-4 bg-white">
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
            Destinations populaires
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
            Les merveilles naturelles de Madagascar vous attendent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 bg-white">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#333333' }}
                >
                  {destination.name}
                </h3>
                <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
                  {destination.description}
                </p>
                <button
                  className="flex items-center gap-2 group-hover:gap-3 transition-all"
                  style={{ color: '#0288D1', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Voir plus <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
