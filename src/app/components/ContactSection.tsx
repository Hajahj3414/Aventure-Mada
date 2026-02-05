import { motion } from 'motion/react';
import { Mail, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    alert('Merci pour votre message ! Nous vous répondrons sous 24h.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/261340000000', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contact@madaexplore.mg';
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
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
            Contactez-nous
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#333333', fontSize: '1.125rem' }}>
            Notre équipe est à votre écoute pour organiser votre voyage sur mesure
          </p>
          <div className="flex items-center justify-center gap-2 mt-4" style={{ color: '#0288D1' }}>
            <Clock size={20} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Réponse rapide sous 24h
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#333333' }}
            >
              Choisissez votre moyen de contact
            </h3>

            <div className="space-y-4 mb-8">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg transition-all hover:shadow-lg"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                <Phone size={20} />
                Discuter sur WhatsApp
              </button>

              <button
                onClick={handleEmail}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg transition-all hover:shadow-lg"
                style={{
                  backgroundColor: '#0288D1',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                <Mail size={20} />
                Envoyer un email
              </button>
            </div>

            <div className="bg-[#F5F5DC] p-6 rounded-xl">
              <h4
                className="mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#333333' }}
              >
                Pourquoi nous faire confiance ?
              </h4>
              <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#1B5E20' }}>✓</span>
                  <span>Plus de 10 ans d'expérience dans le tourisme local</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#1B5E20' }}>✓</span>
                  <span>Guides certifiés et passionnés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#1B5E20' }}>✓</span>
                  <span>Assurance voyage incluse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#1B5E20' }}>✓</span>
                  <span>Support client 24/7 durant votre séjour</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#333333' }}
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#0288D1] outline-none transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#333333' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#0288D1] outline-none transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#333333' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#0288D1] outline-none transition-colors resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Parlez-nous de votre projet de voyage..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg transition-all hover:shadow-lg"
                style={{
                  backgroundColor: '#1B5E20',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
