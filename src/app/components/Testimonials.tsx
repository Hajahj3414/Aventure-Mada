import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    origin: 'France',
    avatar: 'https://images.unsplash.com/photo-1759167855952-ace5d567a29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdXJvcGVhbiUyMGNvdXBsZSUyMHRyYXZlbCUyMGhhcHB5fGVufDF8fHx8MTc3MDMxMDI3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Une expérience incroyable ! Les guides étaient passionnés et le circuit était parfaitement organisé. Madagascar est un paradis que nous recommandons à tous.',
    rating: 4,
  },
  {
    name: 'Rakoto Andrianina',
    origin: 'Madagascar',
    avatar: 'https://images.unsplash.com/photo-1550051414-003c9007794c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdG91cmlzdCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAzMTAyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'MadaExplore m\'a fait redécouvrir mon propre pays ! Un service professionnel, des prix justes et une véritable passion du tourisme local.',
    rating: 5,
  },
  {
    name: 'Famille Tanaka',
    origin: 'Japon',
    avatar: 'https://images.unsplash.com/photo-1766974890904-9975641a974a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMGZhbWlseSUyMHZhY2F0aW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMzEwMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Parfait pour les familles ! Nos enfants ont adoré observer les lémuriens et explorer les forêts. Tout était sécurisé et adapté pour nous.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F5F5DC' }}>
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
            Témoignages
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
            Ce que nos voyageurs disent de nous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                ))}
              </div>

              {/* Text */}
              <p
                className="mb-6 italic"
                style={{ fontFamily: 'Inter, sans-serif', color: '#333333', lineHeight: '1.6' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#333333' }}
                  >
                    {testimonial.name}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#666', fontSize: '0.875rem' }}>
                    {testimonial.origin}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
