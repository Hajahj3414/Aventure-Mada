import { motion } from 'motion/react';
import { Search, MessageCircle, CalendarCheck, Smile } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choisissez une destination',
    description: 'Parcourez nos circuits et sélectionnez celui qui vous inspire',
  },
  {
    icon: MessageCircle,
    title: 'Contactez-nous',
    description: 'Parlez avec nos conseillers pour personnaliser votre voyage',
  },
  {
    icon: CalendarCheck,
    title: 'Organisation du voyage',
    description: 'Nous préparons tous les détails de votre aventure',
  },
  {
    icon: Smile,
    title: 'Profitez de l\'aventure',
    description: 'Vivez une expérience inoubliable à Madagascar',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
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
            Comment ça marche ?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
            Quatre étapes simples pour votre voyage de rêve
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
            style={{ backgroundColor: '#E0E0E0' }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg"
                    style={{ backgroundColor: '#0288D1' }}
                  >
                    <step.icon size={32} color="#FFFFFF" />
                  </div>

                  {/* Step Number */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: '#1B5E20', color: '#FFFFFF' }}
                  >
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                      {index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#333333' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
