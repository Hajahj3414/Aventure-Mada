import { Leaf, Users, Bus, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Leaf,
    title: 'Circuits écotouristiques',
    description: 'Découvrez la nature préservée de Madagascar dans le respect de l\'environnement',
  },
  {
    icon: Users,
    title: 'Guides locaux',
    description: 'Nos guides passionnés partagent leur culture et connaissances du territoire',
  },
  {
    icon: Bus,
    title: 'Transport sécurisé',
    description: 'Véhicules confortables et bien entretenus pour votre sécurité',
  },
  {
    icon: DollarSign,
    title: 'Prix accessibles',
    description: 'Des tarifs transparents et compétitifs pour tous les budgets',
  },
];

export function WhyChooseUs() {
  return (
    <section id="a-propos" className="py-20 px-4" style={{ backgroundColor: '#F5F5DC' }}>
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
            Pourquoi nous choisir ?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
            Une expérience unique avec MizaraVoyage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#1B5E20' }}
              >
                <feature.icon size={32} color="#FFFFFF" />
              </div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#333333' }}
              >
                {feature.title}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
